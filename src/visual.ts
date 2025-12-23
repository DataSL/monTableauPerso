"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;

// Importation des types pour la gestion des licences (API 4.7+)
import IVisualLicenseManager = powerbi.extensibility.IVisualLicenseManager;
import LicenseInfoResult = powerbi.extensibility.visual.LicenseInfoResult;
import ServicePlan = powerbi.extensibility.visual.ServicePlan;
import ServicePlanState = powerbi.ServicePlanState;
import LicenseNotificationType = powerbi.LicenseNotificationType;

// Importation du Service de formatage (FormattingSettingsService)
import { formattingSettings, FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { VisualFormattingSettingsModel, ManualLineSettings } from "./settings";

import "../style/visual.less";
const DEV_MODE = true // Passez à false pour la prod
interface RowData {
    originalName: string;
    label: string;
    amount: string;
    columnIndex: number;
    sortIndex: number;
    
    marginBottom: number;
    marginTop: number;
    marginColor: string;
    isHidden: boolean;
    isHeader: boolean;
    
    isVirtual: boolean;

    font: string; fontSize: number;
    bgLabel: string; colorLabel: string; boldLabel: boolean; italicLabel: boolean;
    bgAmount: string; colorAmount: string; boldAmount: boolean;
    
    customAmount: string;
    customLabel?: string;
    
    // Bordures complètes (4 côtés)
    borderWidth: number;
    borderColor: string;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private divContainer: HTMLDivElement;
    private flexContainer: HTMLDivElement;
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    private currentSelectedLabel: string = ""; 
    private columnTitles: string[] = [];
    private metadata: any;
    private toolbar: HTMLDivElement;
    
    private pendingChanges: Map<string, any> = new Map();
    private manualLineKeys: string[] = [];
    
    private areActionButtonsVisible: boolean = false;
    private selectionManager: powerbi.extensibility.ISelectionManager;

    // Bordures globales du tableau
    private tableBorderWidth: number = 1;
    private tableBorderColor: string = "rgba(0, 0, 0, 0.25)";
    private tableBorderStyle: string = "solid";
    private tableBorderRadius: number = 8;

    // Modèle de formatage (API 5.1)
    private formattingSettings: VisualFormattingSettingsModel;
    // Service de formatage (Nécessaire pour buildFormattingModel)
    private formattingSettingsService: FormattingSettingsService;

    // License related properties
    private licenseManager: IVisualLicenseManager;
    private currentUserValidPlans: ServicePlan[] | undefined;
    private hasServicePlans: boolean | undefined;
    private isLicenseUnsupportedEnv: boolean | undefined;
    private isLicenseInfoAvailable: boolean | undefined;

    // Helper centralisé pour persister les propriétés d'une ligne (merge safe + logs)
    private persistStyle(selector: any, properties: any, objectName: string = "styleLigne") {
        // nettoyer les clés undefined
        Object.keys(properties || {}).forEach(k => { if (properties[k] === undefined) delete properties[k]; });
        try {
            // eslint-disable-next-line no-console
            console.log("PERSIST STYLE -> object:", objectName, "selector:", selector, "props:", properties);
            this.host.persistProperties({
                merge: [{
                    objectName: objectName,
                    selector: selector,
                    properties: properties
                }]
            });
            // eslint-disable-next-line no-console
            console.log("PERSIST STYLE OK ->", objectName);
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error("PERSIST STYLE ERROR:", err);
        }
    }

    private handleLicenseNotification() {
        if (DEV_MODE) return; // Désactive tout en dev
        if (this.isLicenseUnsupportedEnv) {
             this.licenseManager.notifyLicenseRequired(LicenseNotificationType.UnsupportedEnv);
        } else if (!this.hasServicePlans) {
             this.licenseManager.notifyLicenseRequired(LicenseNotificationType.VisualIsBlocked);
        }
    }

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
        
        // Initialisation du service de formatage
        this.formattingSettingsService = new FormattingSettingsService();

        // License Management
        this.licenseManager = options.host.licenseManager;
        
        this.licenseManager.getAvailableServicePlans()
            .then((result: LicenseInfoResult) => {
                this.isLicenseUnsupportedEnv = result.isLicenseUnsupportedEnv;
                this.isLicenseInfoAvailable = result.isLicenseInfoAvailable;

                if (this.isLicenseInfoAvailable && !this.isLicenseUnsupportedEnv) {
                    this.currentUserValidPlans = result.plans?.filter((plan: ServicePlan) => 
                        // OPTIONNEL : Si vous voulez restreindre à un plan spécifique défini dans l'Espace Partenaires
                        // (plan.spIdentifier === "mon_id_de_plan_partner_center") &&
                        (plan.state === ServicePlanState.Active || plan.state === ServicePlanState.Warning)
                    );
                    this.hasServicePlans = !!this.currentUserValidPlans?.length;
                }

                this.handleLicenseNotification();
            })
            .catch((err) => {
                console.error("License check failed:", err);
                this.currentUserValidPlans = undefined;
                this.hasServicePlans = undefined;
            });
        
        // Initialisation du gestionnaire de sélection pour les menus contextuels
        this.selectionManager = this.host.createSelectionManager();
        
        // Initialisation du gestionnaire de sélection pour les menus contextuels
        this.selectionManager = this.host.createSelectionManager();

        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper";
        this.target.appendChild(this.divContainer);
        this.flexContainer = document.createElement("div");
        this.flexContainer.className = "accounting-container";
        this.divContainer.appendChild(this.flexContainer);

        this.toolbar = document.createElement("div");
        this.toolbar.className = "floating-toolbar";
        this.toolbar.style.display = "none";
        document.body.appendChild(this.toolbar);
        
        document.addEventListener("mousedown", (e) => {
            if (this.toolbar.style.display !== "none" && 
                !this.toolbar.contains(e.target as Node)) {
                this.toolbar.style.display = "none";
            }
        });
    }

    public update(options: VisualUpdateOptions) {
        // Initialiser et remplir le modèle de formatage depuis Power BI
        if (options.dataViews && options.dataViews[0]) {
            this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(
                VisualFormattingSettingsModel,
                options.dataViews[0]
            );
            this.metadata = options.dataViews[0].metadata;
        }

        // Utiliser la valeur du toggle du modèle de formatage
        let showActionButton = true;
        if (this.formattingSettings && this.formattingSettings.actionButton && typeof this.formattingSettings.actionButton.show.value === "boolean") {
            showActionButton = this.formattingSettings.actionButton.show.value;
        }

        // Si le bouton d'action est masqué, on retire tout le padding et on force la hauteur à 100%
        if (!showActionButton) {
            this.divContainer.style.padding = "0";
            this.divContainer.style.margin = "0";
            this.divContainer.style.height = "100%";
            this.flexContainer.style.height = "100%";
        } else {
            this.divContainer.style.padding = "5px";
            this.divContainer.style.margin = "";
            this.divContainer.style.height = "";
            this.flexContainer.style.height = "";
        }


        // Nettoyage sécurisé
        while (this.flexContainer.firstChild) {
            this.flexContainer.removeChild(this.flexContainer.firstChild);
        }

        this.allRowsData = [];
        this.manualLineKeys = [];

        const dataView = options.dataViews[0];
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;

        // Charger la couleur de fond du conteneur principal (autour du tableau)
        let containerBg = "#fff";
        if (this.metadata && this.metadata.objects && this.metadata.objects["backgroundContainer"] && this.metadata.objects["backgroundContainer"]["color"]) {
            const bgObj = this.metadata.objects["backgroundContainer"]["color"];
            if (bgObj && bgObj.solid && bgObj.solid.color) {
                containerBg = bgObj.solid.color;
            }
        }
        this.divContainer.style.background = containerBg;
        // Le fond du tableau reste géré par le CSS (toujours blanc)

        // Charger les bordures globales du tableau
        if (this.metadata && this.metadata.objects && this.metadata.objects["tableBorders"]) {
            const tb = this.metadata.objects["tableBorders"];
            if (tb["borderWidth"] !== undefined) this.tableBorderWidth = tb["borderWidth"] as number;
            if (tb["borderColor"]) this.tableBorderColor = (tb["borderColor"] as any).solid.color;
            if (tb["borderStyle"]) this.tableBorderStyle = tb["borderStyle"] as string;
            if (tb["borderRadius"] !== undefined) this.tableBorderRadius = tb["borderRadius"] as number;
        }

        console.log("🔲 BORDURES CHARGÉES:", {
            width: this.tableBorderWidth,
            color: this.tableBorderColor,
            style: this.tableBorderStyle,
            radius: this.tableBorderRadius
        });

        // 1. TITRES - Initialisation dynamique
        this.columnTitles = [];
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const t = this.metadata.objects["titresColonnes"];
            for (let i = 1; i <= 20; i++) {
                const key = "titre" + i;
                if (t[key]) {
                    this.columnTitles[i-1] = t[key] as string;
                }
            }
        }

        // 2. DONNÉES EXCEL
        let maxColumnIndexUsed = 1;
        
        if (this.categoricalData) {
            const categories = this.categoricalData.categories[0];
            const values = this.categoricalData.values ? this.categoricalData.values[0] : null;

            if (this.metadata && this.metadata.objects && this.metadata.objects["selectionMenu"]) {
                this.currentSelectedLabel = this.metadata.objects["selectionMenu"]["ligneActive"] as string;
            }
            if (!this.currentSelectedLabel && categories.values.length > 0) {
                this.currentSelectedLabel = categories.values[0].toString();
            }

            categories.values.forEach((catValue, index) => {
                const originalName = catValue.toString();
                let row: RowData = {
                    originalName: originalName,
                    label: originalName,
                    amount: values ? values.values[index]?.toString() : "",
                    columnIndex: 1, sortIndex: index * 10,
                    marginBottom: 0, marginTop: 0, isHidden: false, marginColor: "transparent",
                    isHeader: false, isVirtual: false, customAmount: "",
                    font: "'Segoe UI', sans-serif", fontSize: 12,
                    bgLabel: "transparent", colorLabel: "black", boldLabel: false, italicLabel: false,
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false,
                    borderWidth: 1,
                    borderColor: "#eee"
                };

                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        if (style["columnIndex"]) row.columnIndex = style["columnIndex"] as number;
                        if (row.columnIndex < 1) row.columnIndex = 1;
                        if (style["ordreTri"] !== undefined) row.sortIndex = style["ordreTri"] as number;
                        
                        if (style["marginBottom"] !== undefined) row.marginBottom = style["marginBottom"] as number;
                        if (style["marginTop"] !== undefined) row.marginTop = style["marginTop"] as number;
                        if (style["isHidden"]) row.isHidden = style["isHidden"] as boolean;
                        if (style["marginColor"]) row.marginColor = (style["marginColor"] as any).solid.color;
                        if (style["customLabel"]) row.label = style["customLabel"] as string;
                        if (style["customAmount"]) row.customAmount = style["customAmount"] as string;
                        if (style["isHeader"]) row.isHeader = style["isHeader"] as boolean;
                        if (style["fontSize"]) row.fontSize = style["fontSize"] as number;
                        if (style["fontFamily"]) row.font = style["fontFamily"] as string;
                        if (style["bgLabel"]) row.bgLabel = (style["bgLabel"] as any).solid.color;
                        if (style["fillLabel"]) row.colorLabel = (style["fillLabel"] as any).solid.color;
                        if (style["boldLabel"] !== undefined) row.boldLabel = style["boldLabel"] as boolean;
                        if (style["italicLabel"] !== undefined) row.italicLabel = style["italicLabel"] as boolean;
                        if (style["bgAmount"]) row.bgAmount = (style["bgAmount"] as any).solid.color;
                        if (style["fillAmount"]) row.colorAmount = (style["fillAmount"] as any).solid.color;
                        if (style["boldAmount"] !== undefined) row.boldAmount = style["boldAmount"] as boolean;

                        if (style["borderWidth"] !== undefined) row.borderWidth = style["borderWidth"] as number;
                        if (style["borderColor"]) row.borderColor = (style["borderColor"] as any).solid.color;
                    }
                }
                
                // Appliquer les changements en attente (optimiste)
                if (this.pendingChanges.has(originalName)) {
                    const pending = this.pendingChanges.get(originalName);
                    if (Date.now() - pending.timestamp < 30000) {
                        let allMatched = true;
                        Object.keys(pending).forEach(key => {
                            if (key === "timestamp") return;
                            let match = false;
                            if (typeof pending[key] === 'number' && typeof row[key] === 'number') {
                                match = Math.abs(pending[key] - row[key]) < 0.01;
                            } else {
                                match = pending[key] === row[key];
                            }
                            if (!match) {
                                row[key] = pending[key];
                                allMatched = false;
                            }
                        });
                        if (allMatched) this.pendingChanges.delete(originalName);
                    } else {
                        this.pendingChanges.delete(originalName);
                    }
                }
                
                if (row.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = row.columnIndex;
                this.allRowsData.push(row);
            });
        }

        // 3. LIGNES MANUELLES DYNAMIQUES
        if (this.metadata && this.metadata.objects) {
            Object.keys(this.metadata.objects).forEach(key => {
                if (key.startsWith("manualLine")) {
                    this.manualLineKeys.push(key);
                    const s = this.metadata.objects[key];
                    if (s["show"] === true) {
                        let txt = s["text"] ? s["text"] as string : "Nouvelle Ligne";
                        let col = s["col"] ? s["col"] as number : 1;
                        let pos = s["pos"] ? s["pos"] as number : 0;
                        let isHead = s["isHeader"] ? s["isHeader"] as boolean : false;
                        let bg = s["bgColor"] ? (s["bgColor"] as any).solid.color : "transparent";
                        let color = s["textColor"] ? (s["textColor"] as any).solid.color : "black";
                        let mt = s["marginTop"] ? s["marginTop"] as number : 0;
                        let fs = s["fontSize"] ? s["fontSize"] as number : 12;
                        let bo = s["bold"] ? s["bold"] as boolean : false;
                        let it = s["italic"] ? s["italic"] as boolean : false;
                        let bw = s["borderWidth"] !== undefined ? s["borderWidth"] as number : 1;
                        let bc = s["borderColor"] ? (s["borderColor"] as any).solid.color : "#eee";

                        let vRow: RowData = {
                            originalName: key,
                            label: txt, amount: "", 
                            columnIndex: col, sortIndex: pos,
                            marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                            isHeader: isHead, isVirtual: true, customAmount: "",
                            font: "'Segoe UI', sans-serif", fontSize: fs,
                            bgLabel: bg, colorLabel: color, boldLabel: bo, italicLabel: it,
                            bgAmount: bg, colorAmount: color, boldAmount: bo,
                            borderWidth: bw,
                            borderColor: bc
                        };
                        this.allRowsData.push(vRow);
                    }
                }
            });
        }

        // 4. RENDU
        let maxColumnsToShow = Math.max(maxColumnIndexUsed, this.columnTitles.length);
        
        this.flexContainer.style.borderWidth = `${this.tableBorderWidth}px`;
        this.flexContainer.style.borderStyle = this.tableBorderStyle;
        this.flexContainer.style.borderColor = this.tableBorderColor;
        this.flexContainer.style.borderRadius = `${this.tableBorderRadius}px`;
        
        for (let i = 1; i <= maxColumnsToShow; i++) {
            const colDiv = document.createElement("div");
            colDiv.className = "dynamic-column"; 
            const table = document.createElement("table");
            colDiv.appendChild(table);

            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
            const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
            const categories = this.categoricalData ? this.categoricalData.categories[0] : null;
            this.renderTableContent(table, colTitle, colRows, i, categories);
            this.flexContainer.appendChild(colDiv);
        }

        // Bouton d'action uniquement si activé
        if (showActionButton) {
            const toggleBtn = document.createElement("button");
            toggleBtn.type = "button";
            toggleBtn.className = "toggle-actions-button";
            toggleBtn.textContent = this.areActionButtonsVisible ? "◀" : "▶";
            toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
            toggleBtn.style.display = "flex";
            toggleBtn.style.alignItems = "center";
            toggleBtn.style.justifyContent = "center";
            toggleBtn.style.minWidth = "32px";
            toggleBtn.style.height = "32px";
            toggleBtn.style.cursor = "pointer";
            toggleBtn.style.fontSize = "16px";
            toggleBtn.style.color = "#007acc";
            toggleBtn.style.border = "1px solid #b3d7ff";
            toggleBtn.style.borderRadius = "50%";
            toggleBtn.style.margin = "6px";
            toggleBtn.style.background = "white";
            toggleBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
            toggleBtn.style.transition = "all 0.2s";
            toggleBtn.style.zIndex = "1000";
            toggleBtn.onmouseover = () => { 
                toggleBtn.style.background = "#e6f2ff";
                toggleBtn.style.borderColor = "#007acc";
                toggleBtn.style.transform = "scale(1.1)";
            };
            toggleBtn.onmouseout = () => { 
                toggleBtn.style.background = "white";
                toggleBtn.style.borderColor = "#b3d7ff";
                toggleBtn.style.transform = "scale(1)";
            };
            toggleBtn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.areActionButtonsVisible = !this.areActionButtonsVisible;
                toggleBtn.textContent = this.areActionButtonsVisible ? "◀" : "▶";
                toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
                addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
                addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
                if (removeColumnDiv) {
                    removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
                }
            };
            this.flexContainer.appendChild(toggleBtn);
        }
        
        const addColumnDiv = document.createElement("button");
        addColumnDiv.type = "button";
        addColumnDiv.className = "add-column-button";
        addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
        addColumnDiv.style.alignItems = "center";
        addColumnDiv.style.justifyContent = "center";
        addColumnDiv.style.minWidth = "40px";
        addColumnDiv.style.cursor = "pointer";
        addColumnDiv.style.opacity = "0.5";
        addColumnDiv.style.transition = "opacity 0.2s";
        addColumnDiv.style.fontSize = "18px";
        addColumnDiv.style.color = "#666";
        addColumnDiv.style.border = "2px dashed #ccc";
        addColumnDiv.style.borderRadius = "6px";
        addColumnDiv.style.margin = "10px";
        addColumnDiv.style.padding = "12px";
        addColumnDiv.style.background = "transparent";
        addColumnDiv.style.zIndex = "1000";
        addColumnDiv.textContent = "➕";
        addColumnDiv.title = "Ajouter une nouvelle colonne";
        
        addColumnDiv.onmouseover = () => { 
            addColumnDiv.style.opacity = "1"; 
            addColumnDiv.style.borderColor = "#999";
        };
        addColumnDiv.onmouseout = () => { 
            addColumnDiv.style.opacity = "0.5"; 
            addColumnDiv.style.borderColor = "#ccc";
        };
        
        const handleAddColumn = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const newIndex = this.columnTitles.length + 1;
            const newTitle = "COLONNE " + newIndex;
            this.host.persistProperties({
                merge: [{
                    objectName: "titresColonnes",
                    selector: null,
                    properties: { ["titre" + newIndex]: newTitle }
                }]
            });
        };
        
        addColumnDiv.addEventListener('click', handleAddColumn, true);
        addColumnDiv.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); }, true);
        addColumnDiv.addEventListener('mouseup', (e) => { e.preventDefault(); e.stopPropagation(); }, true);
        this.flexContainer.appendChild(addColumnDiv);

        let removeColumnDiv: HTMLButtonElement | null = null;
        if (maxColumnsToShow > 1) {
            const emptyCols: number[] = [];
            for (let i = 1; i <= maxColumnsToShow; i++) {
                const colRows = this.allRowsData.filter(r => r.columnIndex === i && !r.isHidden);
                if (colRows.length === 0) emptyCols.push(i);
            }

            if (emptyCols.length > 0) {
                removeColumnDiv = document.createElement("button");
                removeColumnDiv.type = "button";
                removeColumnDiv.className = "remove-column-button";
                removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
                removeColumnDiv.style.alignItems = "center";
                removeColumnDiv.style.justifyContent = "center";
                removeColumnDiv.style.minWidth = "40px";
                removeColumnDiv.style.cursor = "pointer";
                removeColumnDiv.style.opacity = "0.7";
                removeColumnDiv.style.transition = "opacity 0.2s";
                removeColumnDiv.style.fontSize = "18px";
                removeColumnDiv.style.color = "#c00";
                removeColumnDiv.style.border = "2px dashed #c00";
                removeColumnDiv.style.borderRadius = "6px";
                removeColumnDiv.style.margin = "10px";
                removeColumnDiv.style.padding = "12px";
                removeColumnDiv.style.background = "transparent";
                removeColumnDiv.style.zIndex = "1000";
                removeColumnDiv.textContent = "🗑️";
                removeColumnDiv.title = `Supprimer toutes les colonnes vides (${emptyCols.join(", ")})`;

                removeColumnDiv.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    emptyCols.forEach(col => {
                        this.host.persistProperties({
                            replace: [{
                                objectName: "titresColonnes",
                                selector: null,
                                properties: { ["titre" + col]: undefined }
                            }]
                        });
                    });
                };
                this.flexContainer.appendChild(removeColumnDiv);
            }
        }

        const addLineBtn = document.createElement("button");
        addLineBtn.type = "button";
        addLineBtn.className = "add-line-button";
        addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
        
        const btnContainer = document.createElement("span");
        btnContainer.style.display = "flex";
        btnContainer.style.alignItems = "center";
        btnContainer.style.gap = "6px";

        const btnIcon = document.createElement("span");
        btnIcon.style.display = "flex";
        btnIcon.style.alignItems = "center";
        btnIcon.style.justifyContent = "center";
        btnIcon.style.width = "22px";
        btnIcon.style.height = "22px";
        btnIcon.style.background = "#e6f2ff";
        btnIcon.style.borderRadius = "50%";
        btnIcon.style.border = "1px solid #b3d7ff";
        btnIcon.style.color = "#007acc";
        btnIcon.style.fontSize = "16px";
        btnIcon.style.fontWeight = "bold";
        btnIcon.style.boxSizing = "border-box";
        btnIcon.textContent = "+";

        const btnText = document.createElement("span");
        btnText.style.color = "#007acc";
        btnText.style.fontSize = "14px";
        btnText.style.fontWeight = "500";
        btnText.textContent = "Ligne";

        btnContainer.appendChild(btnIcon);
        btnContainer.appendChild(btnText);
        addLineBtn.appendChild(btnContainer);

        addLineBtn.title = "Ajouter une nouvelle ligne";
        addLineBtn.style.margin = "6px";
        addLineBtn.style.padding = "2px 12px";
        addLineBtn.style.background = "white";
        addLineBtn.style.border = "1px solid #b3d7ff";
        addLineBtn.style.borderRadius = "18px";
        addLineBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
        addLineBtn.style.cursor = "pointer";
        addLineBtn.style.alignItems = "center";
        addLineBtn.style.justifyContent = "center";
        addLineBtn.style.fontFamily = "'Segoe UI', Arial, sans-serif";
        addLineBtn.style.fontSize = "14px";
        addLineBtn.onmouseover = () => {
            addLineBtn.style.background = "#e6f2ff";
            addLineBtn.style.borderColor = "#007acc";
        };
        addLineBtn.onmouseout = () => {
            addLineBtn.style.background = "white";
            addLineBtn.style.borderColor = "#b3d7ff";
        };
        addLineBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let nextIndex = 1;
            while (this.manualLineKeys.includes("manualLine" + nextIndex)) {
                nextIndex++;
            }
            const newKey = "manualLine" + nextIndex;
            this.host.persistProperties({
                merge: [{
                    objectName: newKey,
                    selector: null,
                    properties: {
                        text: "Nouvelle Ligne " + nextIndex,
                        show: true,
                        col: 1,
                        pos: 0,
                        isHeader: false,
                        bgColor: { solid: { color: "transparent" } },
                        textColor: { solid: { color: "black" } },
                        marginTop: 0,
                        fontSize: 12,
                        bold: false,
                        italic: false
                    }
                }]
            });
        };
        this.flexContainer.appendChild(addLineBtn);
    }

    /**
     * NOUVELLE MÉTHODE OBLIGATOIRE API 5.1+
     * Remplace enumerateObjectInstances pour la certification Power BI
     */
    public getFormattingModel(): powerbi.visuals.FormattingModel {
        const model = this.formattingSettings; 
        
        // ---------------------------------------------------------
        // A. TITRES COLONNES
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const tObj = this.metadata.objects["titresColonnes"];
            model.titresColonnes.slices.forEach(slice => {
                if (tObj[slice.name]) {
                    (slice as formattingSettings.TextInput).value = tObj[slice.name];
                }
            });
        }

        // ---------------------------------------------------------
        // B. MENU SÉLECTION
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["selectionMenu"]) {
            model.selectionMenu.ligneActive.value = this.metadata.objects["selectionMenu"]["ligneActive"];
        }

        // ---------------------------------------------------------
        // C. STYLE DE LIGNE (Logique contextuelle)
        // ---------------------------------------------------------
        if (this.categoricalData) {
            const categories = this.categoricalData.categories[0];
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);

            if (indexChoisi !== -1) {
                const styleCard = model.styleLigne;
                
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();
                
                // Assigner le sélecteur
                const selector = selectionId.getSelector();
                styleCard.selector = selector;
                // CORRECTION: assigner aussi le selector à CHAQUE slice pour que les persistProperties
                // déclenchés depuis le panneau de format ciblent bien la ligne sélectionnée.
                (styleCard.slices || []).forEach(s => { (s as any).selector = selector; });

                const currentRow = this.allRowsData.find(r => r.originalName === this.currentSelectedLabel);
                
                if (currentRow) {
                    // Remplissage dynamique des slices par leur name — évite les problèmes de typage (color pickers, etc.)
                    (styleCard.slices || []).forEach(slice => {
                        const name = (slice as any).name;
                        if (!name) return;
                        switch (name) {
                            case "columnIndex": (slice as any).value = currentRow.columnIndex; break;
                            case "ordreTri": (slice as any).value = currentRow.sortIndex; break;
                            case "marginTop": (slice as any).value = currentRow.marginTop; break;
                            case "marginBottom": (slice as any).value = currentRow.marginBottom; break;
                            case "marginColor": (slice as any).value = { value: currentRow.marginColor }; break;
                            case "isHidden": (slice as any).value = currentRow.isHidden; break;
                            case "isHeader": (slice as any).value = currentRow.isHeader; break;
                            case "customLabel": (slice as any).value = currentRow.customLabel || ""; break;
                            case "customAmount": (slice as any).value = currentRow.customAmount || ""; break;
                            case "fontSize": (slice as any).value = currentRow.fontSize; break;
                            case "fontFamily": (slice as any).value = currentRow.font; break;
                            case "bgLabel": (slice as any).value = { value: currentRow.bgLabel }; break;
                            case "fillLabel": (slice as any).value = { value: currentRow.colorLabel }; break;
                            case "boldLabel": (slice as any).value = currentRow.boldLabel; break;
                            case "italicLabel": (slice as any).value = currentRow.italicLabel; break;
                            case "bgAmount": (slice as any).value = { value: currentRow.bgAmount }; break;
                            case "fillAmount": (slice as any).value = { value: currentRow.colorAmount }; break;
                            case "boldAmount": (slice as any).value = currentRow.boldAmount; break;
                            case "borderWidth": (slice as any).value = currentRow.borderWidth; break;
                            case "borderColor": (slice as any).value = { value: currentRow.borderColor }; break;
                            default: break;
                        }
                    });
                 }
            }
        }

        // ---------------------------------------------------------
        // D. LIGNES MANUELLES (Dynamique)
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects) {
            const keys = Object.keys(this.metadata.objects).filter(k => k.startsWith("manualLine")).sort();
            
            keys.forEach(key => {
                const manualObj = this.metadata.objects[key];
                
                const manualCard = new ManualLineSettings();
                manualCard.name = key;
                manualCard.displayName = manualObj["text"] ? String(manualObj["text"]) : key;
                
                manualCard.text.value = manualObj["text"];
                manualCard.show.value = manualObj["show"];
                manualCard.col.value = manualObj["col"];
                manualCard.pos.value = manualObj["pos"];
                manualCard.isHeader.value = manualObj["isHeader"];
                if (manualObj["bgColor"]) manualCard.bgColor.value = manualObj["bgColor"]["solid"]["color"];
                if (manualObj["textColor"]) manualCard.textColor.value = manualObj["textColor"]["solid"]["color"];
                manualCard.marginTop.value = manualObj["marginTop"];
                manualCard.fontSize.value = manualObj["fontSize"];
                manualCard.bold.value = manualObj["bold"];
                manualCard.italic.value = manualObj["italic"];
                manualCard.borderWidth.value = manualObj["borderWidth"];
                if (manualObj["borderColor"]) manualCard.borderColor.value = manualObj["borderColor"]["solid"]["color"];

                // Ajouter la carte manuelle à la liste des cartes du modèle
                model.cards.push(manualCard);
            });
        }

        // ---------------------------------------------------------
        // E. BORDURES GLOBALES
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["tableBorders"]) {
            const borderObj = this.metadata.objects["tableBorders"];
            model.tableBorders.borderWidth.value = borderObj["borderWidth"];
            model.tableBorders.borderRadius.value = borderObj["borderRadius"];
            if (borderObj["borderColor"]) model.tableBorders.borderColor.value = borderObj["borderColor"]["solid"]["color"];
            if (borderObj["borderStyle"]) model.tableBorders.borderStyle.value = { value: borderObj["borderStyle"] as string, displayName: borderObj["borderStyle"] as string };
        }

        // CORRECTION MAJEURE: Utiliser le service pour construire le modèle
        return this.formattingSettingsService.buildFormattingModel(model);
    }

    private renderTableContent(targetTable: HTMLTableElement, title: string, rows: RowData[], colIndex: number, categories: any) {
        // [Contenu inchangé pour le rendu]
        rows.sort((a, b) => a.sortIndex - b.sortIndex);
        
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.style.position = "relative";
        th.style.paddingRight = "30px";
        
        const titleSpan = document.createElement("span");
        titleSpan.innerText = title;
        titleSpan.contentEditable = "false";
        titleSpan.style.outline = "none";
        titleSpan.style.display = "inline-block";
        titleSpan.style.minWidth = "100px";
        th.appendChild(titleSpan);
        
        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.style.position = "absolute";
        editBtn.style.right = "5px";
        editBtn.style.top = "50%";
        editBtn.style.transform = "translateY(-50%)";
        editBtn.style.cursor = "pointer";
        editBtn.style.fontSize = "14px";
        editBtn.style.opacity = "0.6";
        editBtn.style.transition = "opacity 0.2s";
        editBtn.style.border = "none";
        editBtn.style.background = "transparent";
        editBtn.style.padding = "2px 6px";
        editBtn.style.zIndex = "1000";
        editBtn.title = "Renommer cette colonne";
        editBtn.type = "button";
        
        editBtn.onmouseover = () => { editBtn.style.opacity = "1"; };
        editBtn.onmouseout = () => { editBtn.style.opacity = "0.6"; };
        
        const handleEdit = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            titleSpan.contentEditable = "true";
            titleSpan.style.backgroundColor = "#fff3cd";
            titleSpan.style.color = "#000000";
            titleSpan.style.padding = "2px 4px";
            titleSpan.style.borderRadius = "3px";
            titleSpan.focus();
            const range = document.createRange();
            range.selectNodeContents(titleSpan);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            editBtn.innerText = "✓";
            editBtn.style.color = "green";
        };
        
        const saveEdit = () => {
            const newTitle = titleSpan.innerText.trim();
            if (newTitle && newTitle !== title) {
                this.host.persistProperties({
                    merge: [{
                        objectName: "titresColonnes",
                        selector: null,
                        properties: { ["titre" + colIndex]: newTitle }
                    }]
                });
            }
            titleSpan.contentEditable = "false";
            titleSpan.style.backgroundColor = "transparent";
            titleSpan.style.color = "";
            titleSpan.style.padding = "0";
            editBtn.innerText = "✏️";
            editBtn.style.color = "";
        };
        
        titleSpan.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveEdit();
            }
            if (e.key === 'Escape') {
                titleSpan.innerText = title;
                titleSpan.contentEditable = "false";
                titleSpan.style.backgroundColor = "transparent";
                titleSpan.style.color = "";
                titleSpan.style.padding = "0";
                editBtn.innerText = "✏️";
                editBtn.style.color = "";
            }
        });
        
        titleSpan.addEventListener('blur', () => {
            if (titleSpan.contentEditable === "true") saveEdit();
        });
        
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (titleSpan.contentEditable === "true") saveEdit(); else handleEdit(e);
        }, true);
        
        editBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); }, true);
        editBtn.addEventListener('mouseup', (e) => { e.stopPropagation(); }, true);
        
        th.appendChild(editBtn);
        trHead.appendChild(th); thead.appendChild(trHead); targetTable.appendChild(thead);

        const tbody = document.createElement("tbody");
        rows.forEach(row => {
            if (row.isHidden) return; 

            if (row.marginTop > 0) {
                const trSp = document.createElement("tr");
                trSp.style.height = row.marginTop + "px";
                trSp.style.lineHeight = "0";
                trSp.style.fontSize = "0";
                const tdSp = document.createElement("td");
                tdSp.colSpan = 2; 
                tdSp.style.backgroundColor = row.marginColor; 
                tdSp.style.border = "none";
                tdSp.style.padding = "0";
                tdSp.style.margin = "0";
                tdSp.style.height = row.marginTop + "px";
                trSp.appendChild(tdSp); 
                tbody.appendChild(trSp);
            }

            const tr = document.createElement("tr");
            tr.draggable = true;
            tr.style.cursor = "move";
            
            tr.ondragstart = (e: DragEvent) => {
                e.stopPropagation();
                if (e.dataTransfer) {
                    e.dataTransfer.effectAllowed = "move";
                    const dragData = {
                        label: row.label,
                        originalName: row.originalName,
                        columnIndex: row.columnIndex,
                        sortIndex: row.sortIndex,
                        isVirtual: row.isVirtual
                    };
                    e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
                    tr.style.opacity = "0.5";
                    // DEBUG
                    // eslint-disable-next-line no-console
                    console.log("DRAG START:", dragData);
                }
            };
            
            tr.ondragend = (e: DragEvent) => { tr.style.opacity = "1"; };
            // DEBUG: highlight when row receives drop events
            tr.ondragover = (e: DragEvent) => {
                e.preventDefault();
                if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
                tr.style.borderTop = "2px solid #007acc";
            };
            tr.ondragleave = (e: DragEvent) => { tr.style.borderTop = ""; };
            tr.ondrop = (e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                tr.style.borderTop = "";
                // DEBUG
                // eslint-disable-next-line no-console
                console.log("DROP ON ROW", { target: row.originalName });
                if (e.dataTransfer) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedOriginalName = data.originalName;
                    const isVirtual = data.isVirtual;

                    if (draggedOriginalName !== row.originalName) {
                        const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                        let prevSortIndex = -1000;
                        if (targetRowIndex > 0) {
                            prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                        } else {
                            prevSortIndex = row.sortIndex - 20;
                        }
                        let newSortIndex = (prevSortIndex + row.sortIndex) / 2;

                        if (isVirtual) {
                            const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                            if (currentDraggedRow) {
                                currentDraggedRow.columnIndex = colIndex;
                                currentDraggedRow.sortIndex = newSortIndex;
                                this.pendingChanges.set(draggedOriginalName, {
                                    columnIndex: colIndex,
                                    sortIndex: newSortIndex,
                                    timestamp: Date.now()
                                });
                                // nouveau : persistance centralisée
                                this.persistStyle(null, { col: colIndex, pos: newSortIndex }, draggedOriginalName);
                                // DEBUG
                                // eslint-disable-next-line no-console
                                console.log("PERSIST (virtual) ->", { object: draggedOriginalName, props: { col: colIndex, pos: newSortIndex } });
                                while (this.flexContainer.firstChild) {
                                    this.flexContainer.removeChild(this.flexContainer.firstChild);
                                }
                                let maxColUsed = 1;
                                this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex; });
                                let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                for (let i = 1; i <= maxColumnsToShow; i++) {
                                    const colDiv = document.createElement("div");
                                    colDiv.className = "dynamic-column"; 
                                    const table = document.createElement("table");
                                    colDiv.appendChild(table);
                                    const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                    const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                                    this.renderTableContent(table, colTitle, colRows, i, categories);
                                    this.flexContainer.appendChild(colDiv);
                                }
                            }
                        } else if (categories) {
                            const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                            if (draggedIndex !== -1) {
                                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, draggedIndex).createSelectionId();
                                const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                let existingProps: any = {
                                    // marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:"transparent"}},
                                    // customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                                    // bgLabel: {solid:{color:"transparent"}}, fillLabel: {solid:{color:"black"}}, italicLabel: false, boldLabel: false,
                                    // bgAmount: {solid:{color:"transparent"}}, fillAmount: {solid:{color:"black"}}, boldAmount: false
                                };
                                if (currentDraggedRow) {
                                    existingProps.marginBottom = currentDraggedRow.marginBottom;
                                    existingProps.marginTop = currentDraggedRow.marginTop;
                                    existingProps.isHidden = currentDraggedRow.isHidden;
                                    existingProps.marginColor = { solid: { color: currentDraggedRow.marginColor } };
                                    existingProps.customLabel = currentDraggedRow.customLabel || "";
                                    existingProps.customAmount = currentDraggedRow.customAmount || "";
                                    existingProps.isHeader = currentDraggedRow.isHeader;
                                    existingProps.fontSize = currentDraggedRow.fontSize;
                                    existingProps.fontFamily = currentDraggedRow.font;
                                    existingProps.bgLabel = { solid: { color: currentDraggedRow.bgLabel } };
                                    existingProps.fillLabel = { solid: { color: currentDraggedRow.colorLabel } };
                                    existingProps.italicLabel = currentDraggedRow.italicLabel;
                                    existingProps.boldLabel = currentDraggedRow.boldLabel;
                                    existingProps.bgAmount = { solid: { color: currentDraggedRow.bgAmount } };
                                    existingProps.fillAmount = { solid: { color: currentDraggedRow.colorAmount } };
                                    existingProps.boldAmount = currentDraggedRow.boldAmount;
                                } else if (categories.objects && categories.objects[draggedIndex]) {
                                    const style = categories.objects[draggedIndex]["styleLigne"];
                                    if (style) {
                                        Object.keys(style).forEach(key => { if (key !== "columnIndex" && key !== "ordreTri") existingProps[key] = style[key]; });
                                    }
                                }
                                existingProps.columnIndex = colIndex;
                                existingProps.ordreTri = newSortIndex;
                                // CLEAN undefined keys
                                Object.keys(existingProps).forEach(k => { if (existingProps[k] === undefined) delete existingProps[k]; });
                                // DEBUG before persist
                                // eslint-disable-next-line no-console
                                console.log("PERSIST (category) -> selector:", selectionId.getSelector(), "props:", existingProps);
                                // nouveau : persistance centralisée
                                this.persistStyle(selectionId.getSelector(), existingProps, "styleLigne");
                                // DEBUG after persist
                                // eslint-disable-next-line no-console
                                console.log("PERSIST DONE (category) for", draggedOriginalName);
                                const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                if (draggedRowData) {
                                    draggedRowData.columnIndex = colIndex;
                                    draggedRowData.sortIndex = newSortIndex;
                                    this.pendingChanges.set(draggedOriginalName, {
                                        columnIndex: colIndex, sortIndex: newSortIndex,
                                        marginBottom: draggedRowData.marginBottom, marginTop: draggedRowData.marginTop, isHidden: draggedRowData.isHidden,
                                        marginColor: draggedRowData.marginColor, customLabel: draggedRowData.customLabel, customAmount: draggedRowData.customAmount,
                                        isHeader: draggedRowData.isHeader, fontSize: draggedRowData.fontSize, font: draggedRowData.font,
                                        bgLabel: draggedRowData.bgLabel, colorLabel: draggedRowData.colorLabel, italicLabel: draggedRowData.italicLabel,
                                        boldLabel: draggedRowData.boldLabel, bgAmount: draggedRowData.bgAmount, colorAmount: draggedRowData.colorAmount,
                                        boldAmount: draggedRowData.boldAmount, timestamp: Date.now()
                                    });
                                    while (this.flexContainer.firstChild) { this.flexContainer.removeChild(this.flexContainer.firstChild); }
                                    let maxColUsed = 1;
                                    this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex; });
                                    let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                    for (let i = 1; i <= maxColumnsToShow; i++) {
                                        const colDiv = document.createElement("div");
                                        colDiv.className = "dynamic-column"; 
                                        const table = document.createElement("table");
                                        colDiv.appendChild(table);
                                        const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                        const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                                        this.renderTableContent(table, colTitle, colRows, i, categories);
                                        this.flexContainer.appendChild(colDiv);
                                    }
                                }
                            }
                        }
                    }
                }
            };

            if (!row.isVirtual) {
                tr.onclick = (e: MouseEvent) => {
                    if (tr.draggable && e.detail === 1) {
                        e.stopPropagation(); 
                        this.host.persistProperties({
                            merge: [{
                                objectName: "selectionMenu",
                                selector: null,
                                properties: { "ligneActive": row.originalName }
                            }]
                        });
                        this.showToolbar(row, tr, e.clientX, e.clientY, categories);
                    }
                };
                
                // MENU CONTEXTUEL POWER BI (clic droit)
                tr.oncontextmenu = (e: MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Récupérer l'index de la catégorie pour créer le selectionId
                    const rowIndex = categories.values.findIndex((v: any) => v.toString() === row.originalName);
                    if (rowIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withCategory(categories, rowIndex)
                            .createSelectionId();
                        
                        // Afficher le menu contextuel Power BI natif
                        this.selectionManager.showContextMenu(selectionId, {
                            x: e.clientX,
                            y: e.clientY
                        });
                    }
                };
                
                tr.title = "Cliquer pour modifier | Glisser pour déplacer | Clic droit pour options";
            } else {
                // Menu contextuel pour les lignes manuelles (sans selectionId)
                tr.oncontextmenu = (e: MouseEvent) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Pour les lignes virtuelles, menu contextuel simple
                    this.selectionManager.showContextMenu(null, {
                        x: e.clientX,
                        y: e.clientY
                    });
                };
                tr.title = "Glisser pour déplacer | Clic droit pour options";
            }

            let finalAmount = "";
            if (row.customAmount && row.customAmount.trim() !== "") {
                finalAmount = row.customAmount;
            } else {
                let rawVal = parseFloat(row.amount);
                if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    finalAmount = new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(rawVal);
                }
            }

            tr.style.fontFamily = row.font; tr.style.fontSize = row.fontSize + "px"; 
            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            const cellBg = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgLabel;
            tdName.style.backgroundColor = cellBg; tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            const borderStyle = `${row.borderWidth}px solid ${row.borderColor}`;
            tdName.style.border = borderStyle;
            tdName.style.borderRight = "none"; 
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount; 
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
            tdAmount.style.border = borderStyle;
            tdAmount.style.borderLeft = "none"; 
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);

            if (row.marginBottom > 0) {
                const trSpB = document.createElement("tr");
                trSpB.style.height = row.marginBottom + "px";
                trSpB.style.lineHeight = "0";
                trSpB.style.fontSize = "0";
                const tdSpB = document.createElement("td");
                tdSpB.colSpan = 2; 
                tdSpB.style.backgroundColor = row.marginColor; 
                tdSpB.style.border = "none";
                tdSpB.style.padding = "0";
                tdSpB.style.margin = "0";
                tdSpB.style.height = row.marginBottom + "px";
                trSpB.appendChild(tdSpB); 
                tbody.appendChild(trSpB);
            }
        });

        const dropZoneTr = document.createElement("tr");
        dropZoneTr.style.height = "40px"; 
        const dropZoneTd = document.createElement("td");
        dropZoneTd.colSpan = 2;
        dropZoneTd.style.backgroundColor = "transparent";
        dropZoneTd.style.border = "2px dashed transparent";
        dropZoneTd.style.transition = "all 0.2s";
        dropZoneTd.textContent = "";
        dropZoneTr.appendChild(dropZoneTd);

        dropZoneTr.ondragover = (e) => {
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
            dropZoneTd.style.border = "2px dashed #007acc";
            dropZoneTd.style.backgroundColor = "rgba(0, 122, 204, 0.1)";
        };
        dropZoneTr.ondragleave = (e) => {
            dropZoneTd.style.border = "2px dashed transparent";
            dropZoneTd.style.backgroundColor = "transparent";
        };
        dropZoneTr.ondrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZoneTd.style.border = "2px dashed transparent";
            dropZoneTd.style.backgroundColor = "transparent";
            if (e.dataTransfer) {
                const dataStr = e.dataTransfer.getData("text/plain");
                const data = JSON.parse(dataStr);
                const draggedOriginalName = data.originalName;
                const isVirtual = data.isVirtual;
                let lastSortIndex = 0;
                if (rows.length > 0) lastSortIndex = rows[rows.length - 1].sortIndex;
                let newSortIndex = lastSortIndex + 10;
                if (isVirtual) {
                    const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                    if (currentDraggedRow) {
                        currentDraggedRow.columnIndex = colIndex;
                        currentDraggedRow.sortIndex = newSortIndex;
                        this.pendingChanges.set(draggedOriginalName, {
                            columnIndex: colIndex,
                            sortIndex: newSortIndex,
                            timestamp: Date.now()
                        });
                        // nouveau : persistance centralisée
                        this.persistStyle(null, { col: colIndex, pos: newSortIndex }, draggedOriginalName);
                        // DEBUG
                        // eslint-disable-next-line no-console
                        console.log("PERSIST (virtual) ->", { object: draggedOriginalName, props: { col: colIndex, pos: newSortIndex } });
                        while (this.flexContainer.firstChild) {
                            this.flexContainer.removeChild(this.flexContainer.firstChild);
                        }
                        let maxColUsed = 1;
                        this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex; });
                        let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                        for (let i = 1; i <= maxColumnsToShow; i++) {
                            const colDiv = document.createElement("div");
                            colDiv.className = "dynamic-column"; 
                            const table = document.createElement("table");
                            colDiv.appendChild(table);
                            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                            const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                            this.renderTableContent(table, colTitle, colRows, i, categories);
                            this.flexContainer.appendChild(colDiv);
                        }
                    }
                } else if (categories) {
                    const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                    if (draggedIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, draggedIndex).createSelectionId();
                        const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        let existingProps: any = {
                            marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:"transparent"}},
                            customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                            bgLabel: {solid:{color:"transparent"}}, fillLabel: {solid:{color:"black"}}, italicLabel: false, boldLabel: false,
                            bgAmount: {solid:{color:"transparent"}}, fillAmount: {solid:{color:"black"}}, boldAmount: false
                        };
                        if (currentDraggedRow) {
                            existingProps.marginBottom = currentDraggedRow.marginBottom;
                            existingProps.marginTop = currentDraggedRow.marginTop;
                            existingProps.isHidden = currentDraggedRow.isHidden;
                            existingProps.marginColor = { solid: { color: currentDraggedRow.marginColor } };
                            existingProps.customLabel = currentDraggedRow.customLabel || "";
                            existingProps.customAmount = currentDraggedRow.customAmount || "";
                            existingProps.isHeader = currentDraggedRow.isHeader;
                            existingProps.fontSize = currentDraggedRow.fontSize;
                            existingProps.fontFamily = currentDraggedRow.font;
                            existingProps.bgLabel = { solid: { color: currentDraggedRow.bgLabel } };
                            existingProps.fillLabel = { solid: { color: currentDraggedRow.colorLabel } };
                            existingProps.italicLabel = currentDraggedRow.italicLabel;
                            existingProps.boldLabel = currentDraggedRow.boldLabel;
                            existingProps.bgAmount = { solid: { color: currentDraggedRow.bgAmount } };
                            existingProps.fillAmount = { solid: { color: currentDraggedRow.colorAmount } };
                            existingProps.boldAmount = currentDraggedRow.boldAmount;
                        } else if (categories.objects && categories.objects[draggedIndex]) {
                            const style = categories.objects[draggedIndex]["styleLigne"];
                            if (style) {
                                Object.keys(style).forEach(key => { if (key !== "columnIndex" && key !== "ordreTri") existingProps[key] = style[key]; });
                            }
                        }
                        existingProps.columnIndex = colIndex;
                        existingProps.ordreTri = newSortIndex;
                        // CLEAN undefined keys
                        Object.keys(existingProps).forEach(k => { if (existingProps[k] === undefined) delete existingProps[k]; });
                        // DEBUG before persist
                        // eslint-disable-next-line no-console
                        console.log("PERSIST (category) -> selector:", selectionId.getSelector(), "props:", existingProps);
                        // nouveau : persistance centralisée
                        this.persistStyle(selectionId.getSelector(), existingProps, "styleLigne");
                        // DEBUG after persist
                        // eslint-disable-next-line no-console
                        console.log("PERSIST DONE (category) for", draggedOriginalName);
                        const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        if (draggedRowData) {
                            draggedRowData.columnIndex = colIndex;
                            draggedRowData.sortIndex = newSortIndex;
                            this.pendingChanges.set(draggedOriginalName, {
                                columnIndex: colIndex, sortIndex: newSortIndex,
                                marginBottom: draggedRowData.marginBottom, marginTop: draggedRowData.marginTop, isHidden: draggedRowData.isHidden,
                                marginColor: draggedRowData.marginColor, customLabel: draggedRowData.customLabel, customAmount: draggedRowData.customAmount,
                                isHeader: draggedRowData.isHeader, fontSize: draggedRowData.fontSize, font: draggedRowData.font,
                                bgLabel: draggedRowData.bgLabel, colorLabel: draggedRowData.colorLabel, italicLabel: draggedRowData.italicLabel,
                                boldLabel: draggedRowData.boldLabel, bgAmount: draggedRowData.bgAmount, colorAmount: draggedRowData.colorAmount,
                                boldAmount: draggedRowData.boldAmount, timestamp: Date.now()
                            });
                            while (this.flexContainer.firstChild) { this.flexContainer.removeChild(this.flexContainer.firstChild); }
                            let maxColUsed = 1;
                            this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex; });
                            let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                            for (let i = 1; i <= maxColumnsToShow; i++) {
                                const colDiv = document.createElement("div");
                                colDiv.className = "dynamic-column"; 
                                const table = document.createElement("table");
                                colDiv.appendChild(table);
                                const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                                this.renderTableContent(table, colTitle, colRows, i, categories);
                                this.flexContainer.appendChild(colDiv);
                            }
                        }
                    }
                }
            }
        };
        tbody.appendChild(dropZoneTr);
        // DEBUG: drop zone logs already handled below

        targetTable.appendChild(tbody);
    }

    private showToolbar(row: RowData, tr: HTMLTableRowElement, x: number, y: number, categories: any) {
        console.log("🟢 showToolbar called for:", row.originalName);

        if (!categories) {
            console.error("🔴 Categories is null");
            return;
        }

        while (this.toolbar.firstChild) {
            this.toolbar.removeChild(this.toolbar.firstChild);
        }
        this.toolbar.style.display = "flex";

        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();

        // Positionner la toolbar
        const toolbarWidth = 400; 
        let left = x - toolbarWidth / 2;
        if (left < 10) left = 10;
        if (left + toolbarWidth > window.innerWidth) left = window.innerWidth - toolbarWidth - 10;

        let top = y - 50;
        if (top < 10) top = y + 20;

        this.toolbar.style.left = left + "px";
        this.toolbar.style.top = top + "px";

        const index = categories.values.findIndex(v => v.toString() === row.originalName);
        console.log("🟢 Index found:", index);

        if (index === -1) {
            console.error("🔴 Index not found for", row.originalName);
            return;
        }

        let selectionIdBuilder = this.host.createSelectionIdBuilder();
        selectionIdBuilder = selectionIdBuilder.withCategory(categories, index);
        const selectionId = selectionIdBuilder.createSelectionId();

        // Helper pour mettre à jour pendingChanges
        const updatePending = (props: any) => {
            const current = this.pendingChanges.get(row.originalName) || { timestamp: Date.now() };
            const updated = { ...current, ...props, timestamp: Date.now() };
            this.pendingChanges.set(row.originalName, updated);
        };

        // Helper pour récupérer les données actuelles de la ligne
        const getCurrentRow = () => {
            return this.allRowsData.find(r => r.originalName === row.originalName) || row;
        };

        // Helper pour persister TOUTES les propriétés (évite les pertes)
        const persistAllProps = (overrides: any) => {
            const currentRow = getCurrentRow();

            const fullProps: any = {
                columnIndex: currentRow.columnIndex,
                ordreTri: currentRow.sortIndex,
                marginBottom: currentRow.marginBottom,
                marginTop: currentRow.marginTop,
                isHidden: currentRow.isHidden,
                marginColor: { solid: { color: currentRow.marginColor } },
                customLabel: currentRow.customLabel || "",
                customAmount: currentRow.customAmount || "",
                isHeader: currentRow.isHeader,
                fontSize: currentRow.fontSize,
                fontFamily: currentRow.font,
                bgLabel: { solid: { color: currentRow.bgLabel } },
                fillLabel: { solid: { color: currentRow.colorLabel } },
                italicLabel: currentRow.italicLabel,
                boldLabel: currentRow.boldLabel,
                bgAmount: { solid: { color: currentRow.bgAmount } },
                fillAmount: { solid: { color: currentRow.colorAmount } },
                boldAmount: currentRow.boldAmount,
                borderWidth: currentRow.borderWidth,
                borderColor: { solid: { color: currentRow.borderColor } }
            };

            // Appliquer overrides fournis
            Object.keys(overrides || {}).forEach(k => { fullProps[k] = overrides[k]; });

            try {
                this.host.persistProperties({
                    merge: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: fullProps
                    }]
                });
                updatePending(fullProps);
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error("Erreur persistProperties:", err);
            }
        };

        // --- BOUTONS ---

        // GRAS (B)
        const btnBold = document.createElement("button");
        const bElem = document.createElement("b");
        bElem.textContent = "B";
        btnBold.appendChild(bElem);
        
        btnBold.title = "Gras";
        if (row.boldLabel) btnBold.className = "active";
        btnBold.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.boldLabel;
            btnBold.className = newVal ? "active" : "";

            row.boldLabel = newVal;
            row.boldAmount = newVal;
            const weight = newVal ? "bold" : "normal";
            if (tr.cells[0]) (tr.cells[0] as HTMLElement).style.fontWeight = weight;
            if (tr.cells[1]) (tr.cells[1] as HTMLElement).style.fontWeight = weight;

            updatePending({ boldLabel: newVal, boldAmount: newVal });
            persistAllProps({ boldLabel: newVal, boldAmount: newVal });
        };
        this.toolbar.appendChild(btnBold);

        // ITALIQUE (I)
        const btnItalic = document.createElement("button");
        const iElem = document.createElement("i");
        iElem.textContent = "I";
        btnItalic.appendChild(iElem);

        btnItalic.title = "Italique";
        if (row.italicLabel) btnItalic.className = "active";
        btnItalic.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.italicLabel;
            btnItalic.className = newVal ? "active" : "";

            row.italicLabel = newVal;
            const style = newVal ? "italic" : "normal";
            if (tr.cells[0]) (tr.cells[0] as HTMLElement).style.fontStyle = style;

            updatePending({ italicLabel: newVal });
            persistAllProps({ italicLabel: newVal });
        };
        this.toolbar.appendChild(btnItalic);

        // SEPARATEUR
        const sep1 = document.createElement("div");
        sep1.className = "separator";
        this.toolbar.appendChild(sep1);

        // TAILLE POLICE (sélecteur)
        const fontSizeWrapper = document.createElement("div");
        fontSizeWrapper.className = "font-size-wrapper";
        const lblFontSize = document.createElement("label");
        lblFontSize.innerText = "Taille";
        lblFontSize.style.marginRight = "4px";
        fontSizeWrapper.appendChild(lblFontSize);

        const selectFontSize = document.createElement("select");
        selectFontSize.title = "Taille de police";
        for (let s = 8; s <= 24; s++) {
            const opt = document.createElement("option");
            opt.value = s.toString();
            opt.innerText = s.toString();
            if (row.fontSize === s) opt.selected = true;
            selectFontSize.appendChild(opt);
        }
        selectFontSize.onchange = (e) => {
            e.stopPropagation();
            const s = parseInt(selectFontSize.value, 10);
            row.fontSize = s;
            tr.style.fontSize = s + "px";
            updatePending({ fontSize: s });
            persistAllProps({ fontSize: s });
        };
        fontSizeWrapper.appendChild(selectFontSize);
        this.toolbar.appendChild(fontSizeWrapper);

        // SEPARATEUR
        const sep3 = document.createElement("div");
        sep3.className = "separator";
        this.toolbar.appendChild(sep3);

        // POLICE (font-family)
        const fontFamilyWrapper = document.createElement("div");
        fontFamilyWrapper.className = "font-family-wrapper";
        const lblFontFamily = document.createElement("label");
        lblFontFamily.innerText = "Police";
        lblFontFamily.style.marginRight = "4px";
        fontFamilyWrapper.appendChild(lblFontFamily);

        const selectFontFamily = document.createElement("select");
        selectFontFamily.title = "Police";
        const fonts = [
            { name: "Segoe UI", value: "'Segoe UI', sans-serif" },
            { name: "Arial", value: "Arial, sans-serif" },
            { name: "Calibri", value: "Calibri, sans-serif" },
            { name: "Times New Roman", value: "'Times New Roman', serif" },
            { name: "Courier New", value: "'Courier New', monospace" }
        ];
        fonts.forEach(f => {
            const opt = document.createElement("option");
            opt.value = f.value;
            opt.innerText = f.name;
            if (row.font === f.value) opt.selected = true;
            selectFontFamily.appendChild(opt);
        });
        selectFontFamily.onchange = (e) => {
            e.stopPropagation();
            const f = selectFontFamily.value;
            row.font = f;
            tr.style.fontFamily = f;
            updatePending({ font: f });
            persistAllProps({ fontFamily: f });
        };
        fontFamilyWrapper.appendChild(selectFontFamily);
        this.toolbar.appendChild(fontFamilyWrapper);

        // BOUTON FERMER
        const btnClose = document.createElement("button");
        btnClose.className = "close-btn";
        // CORRECTION: Utiliser textContent
        btnClose.textContent = "✖";
        btnClose.onclick = (e) => {
            e.stopPropagation();
            this.toolbar.style.display = "none";
        };
        this.toolbar.appendChild(btnClose);
    }
}