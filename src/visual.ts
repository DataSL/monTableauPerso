"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import "../style/visual.less";

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
    
    // NOUVEAU: État pour masquer/afficher les boutons
    private areActionButtonsVisible: boolean = true;

    // NOUVEAU: Bordures globales du tableau
    private tableBorderWidth: number = 1;
    private tableBorderColor: string = "rgba(0, 0, 0, 0.25)";
    private tableBorderStyle: string = "solid";
    private tableBorderRadius: number = 8;

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
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
        this.flexContainer.innerHTML = "";
        this.allRowsData = [];
        this.manualLineKeys = [];

        const dataView = options.dataViews[0];
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;

        // NOUVEAU: Charger les bordures globales
        if (this.metadata && this.metadata.objects && this.metadata.objects["tableBorders"]) {
            const tb = this.metadata.objects["tableBorders"];
            if (tb["borderWidth"] !== undefined) this.tableBorderWidth = tb["borderWidth"] as number;
            if (tb["borderColor"]) this.tableBorderColor = (tb["borderColor"] as any).solid.color;
            if (tb["borderStyle"]) this.tableBorderStyle = tb["borderStyle"] as string;
            if (tb["borderRadius"] !== undefined) this.tableBorderRadius = tb["borderRadius"] as number;
        }

        // 1. TITRES - Initialisation dynamique
        this.columnTitles = [];
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const t = this.metadata.objects["titresColonnes"];
            // Charger tous les titres disponibles
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
                    // SIMPLIFIÉ: Bordures
                    borderWidth: 1,
                    borderColor: "#eee"
                };

                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        console.log("🔷 LOADING style for", originalName, ":", JSON.stringify(style));
                        if (style["columnIndex"]) row.columnIndex = style["columnIndex"] as number;
                        if (row.columnIndex < 1) row.columnIndex = 1;
                        if (style["ordreTri"] !== undefined) row.sortIndex = style["ordreTri"] as number;
                        
                        if (style["marginBottom"]) row.marginBottom = style["marginBottom"] as number;
                        if (style["marginTop"]) row.marginTop = style["marginTop"] as number;
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

                        // SIMPLIFIÉ: Charger les bordures
                        if (style["borderWidth"] !== undefined) row.borderWidth = style["borderWidth"] as number;
                        if (style["borderColor"]) row.borderColor = (style["borderColor"] as any).solid.color;
                    }
                }
                
                // Appliquer les changements en attente (optimiste)
                if (this.pendingChanges.has(originalName)) {
                    const pending = this.pendingChanges.get(originalName);
                    console.log("🟡 PENDING CHANGES for", originalName, ":", JSON.stringify(pending));
                    // Si le changement est récent (< 30 secondes)
                    if (Date.now() - pending.timestamp < 30000) {
                        let allMatched = true;
                        
                        // Parcourir toutes les propriétés en attente (sauf timestamp)
                        Object.keys(pending).forEach(key => {
                            if (key === "timestamp") return;
                            
                            // Comparaison souple pour gérer les types (ex: number vs string)
                            // Pour les nombres flottants (sortIndex), on utilise une tolérance
                            let match = false;
                            if (typeof pending[key] === 'number' && typeof row[key] === 'number') {
                                match = Math.abs(pending[key] - row[key]) < 0.01;
                            } else {
                                match = pending[key] === row[key];
                            }
                            
                            if (match) {
                                // Power BI a rattrapé cette propriété
                            } else {
                                // Power BI n'est pas encore à jour, on force la valeur locale
                                row[key] = pending[key];
                                allMatched = false;
                            }
                        });
                        
                        if (allMatched) {
                            this.pendingChanges.delete(originalName);
                        }
                    } else {
                        // Trop vieux, on supprime
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

                        let vRow: RowData = {
                            originalName: key,
                            label: txt, amount: "", 
                            columnIndex: col, sortIndex: pos,
                            marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                            isHeader: isHead, isVirtual: true, customAmount: "",
                            font: "'Segoe UI', sans-serif", fontSize: fs,
                            bgLabel: bg, colorLabel: color, boldLabel: bo, italicLabel: it,
                            bgAmount: bg, colorAmount: color, boldAmount: bo,
                            // SIMPLIFIÉ: Bordures
                            borderWidth: 1,
                            borderColor: "#eee"
                        };
                        this.allRowsData.push(vRow);
                    }
                }
            });
        }

        // 4. RENDU
        let maxColumnsToShow = Math.max(maxColumnIndexUsed, this.columnTitles.length);
        
        // Appliquer les bordures globales au conteneur
        this.flexContainer.style.border = `${this.tableBorderWidth}px ${this.tableBorderStyle} ${this.tableBorderColor}`;
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
        
        // NOUVEAU: Bouton flèche pour masquer/afficher
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "toggle-actions-button";
        toggleBtn.innerHTML = this.areActionButtonsVisible ? "◀" : "▶";
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
            toggleBtn.innerHTML = this.areActionButtonsVisible ? "◀" : "▶";
            toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
            
            // Afficher/masquer les boutons
            addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
            if (removeColumnDiv) {
                removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            }
        };
        
        this.flexContainer.appendChild(toggleBtn);
        
        // Bouton "Ajouter une colonne"
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
        addColumnDiv.innerHTML = "➕";
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
                    properties: {
                        ["titre" + newIndex]: newTitle
                    }
                }]
            });
        };
        
        addColumnDiv.addEventListener('click', handleAddColumn, true);
        addColumnDiv.addEventListener('mousedown', (e) => { 
            e.preventDefault();
            e.stopPropagation(); 
        }, true);
        addColumnDiv.addEventListener('mouseup', (e) => { 
            e.preventDefault();
            e.stopPropagation(); 
        }, true);
        
        this.flexContainer.appendChild(addColumnDiv);

        // Bouton "Supprimer toutes les colonnes vides"
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
                removeColumnDiv.innerHTML = "🗑️";
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
                                properties: {
                                    ["titre" + col]: undefined
                                }
                            }]
                        });
                    });
                };

                this.flexContainer.appendChild(removeColumnDiv);
            }
        }

        // Bouton "Ajouter une ligne manuelle"
        const addLineBtn = document.createElement("button");
addLineBtn.type = "button";
addLineBtn.className = "add-line-button";
addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
addLineBtn.innerHTML = `
    <span style="
        display: flex;
        align-items: center;
        gap: 6px;
    ">
        <span style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            background: #e6f2ff;
            border-radius: 50%;
            border: 1px solid #b3d7ff;
            color: #007acc;
            font-size: 16px;
            font-weight: bold;
            box-sizing: border-box;
        ">+</span>
        <span style="color:#007acc;font-size:14px;font-weight:500;">Ligne</span>
    </span>`;
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
    console.log("[+] Bouton ligne cliqué");

    // Trouver le prochain index disponible
    let nextIndex = 1;
    while (this.manualLineKeys.includes("manualLine" + nextIndex)) {
        nextIndex++;
    }
    const newKey = "manualLine" + nextIndex;
    console.log("[+] Création de la ligne :", newKey);

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

    console.log("[+] persistProperties appelé pour", newKey);
};
this.flexContainer.appendChild(addLineBtn);
    }

    private renderTableContent(targetTable: HTMLTableElement, title: string, rows: RowData[], colIndex: number, categories: any) {
        rows.sort((a, b) => a.sortIndex - b.sortIndex);
        
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.style.position = "relative";
        th.style.paddingRight = "30px";
        
        // Texte du titre (éditable)
        const titleSpan = document.createElement("span");
        titleSpan.innerText = title;
        titleSpan.contentEditable = "false";
        titleSpan.style.outline = "none";
        titleSpan.style.display = "inline-block";
        titleSpan.style.minWidth = "100px";
        th.appendChild(titleSpan);
        
        // Bouton d'édition
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
            
            // Activer l'édition
            titleSpan.contentEditable = "true";
            titleSpan.style.backgroundColor = "#fff3cd";
            titleSpan.style.color = "#000000";
            titleSpan.style.padding = "2px 4px";
            titleSpan.style.borderRadius = "3px";
            titleSpan.focus();
            
            // Sélectionner tout le texte
            const range = document.createRange();
            range.selectNodeContents(titleSpan);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            
            // Changer l'icône en validation
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
                        properties: {
                            ["titre" + colIndex]: newTitle
                        }
                    }]
                });
            }
            
            // Désactiver l'édition
            titleSpan.contentEditable = "false";
            titleSpan.style.backgroundColor = "transparent";
            titleSpan.style.color = "";
            titleSpan.style.padding = "0";
            editBtn.innerText = "✏️";
            editBtn.style.color = "";
        };
        
        // Sauvegarder avec Enter
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
        
        // Sauvegarder en perdant le focus
        titleSpan.addEventListener('blur', () => {
            if (titleSpan.contentEditable === "true") {
                saveEdit();
            }
        });
        
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            if (titleSpan.contentEditable === "true") {
                saveEdit();
            } else {
                handleEdit(e);
            }
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
                const tdSp = document.createElement("td");
                tdSp.colSpan = 2; tdSp.style.backgroundColor = row.marginColor; tdSp.style.border = "none";
                trSp.appendChild(tdSp); tbody.appendChild(trSp);
            }

            const tr = document.createElement("tr");
            
            // Drag & Drop pour déplacer les lignes (Data et Virtuelles)
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
                }
            };
            
            tr.ondragend = (e: DragEvent) => {
                tr.style.opacity = "1";
            };

            // Autoriser le drop sur TOUTES les lignes
            tr.ondragover = (e: DragEvent) => {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = "move";
                }
                tr.style.borderTop = "2px solid #007acc";
            };
            
            tr.ondragleave = (e: DragEvent) => {
                tr.style.borderTop = "";
            };
            
            tr.ondrop = (e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                tr.style.borderTop = "";

                if (e.dataTransfer) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedOriginalName = data.originalName;
                    const isVirtual = data.isVirtual;

                    if (draggedOriginalName !== row.originalName) {
                        // CALCUL DE LA NOUVELLE POSITION (INSERTION AVANT)
                        const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                        let prevSortIndex = -1000;
                        if (targetRowIndex > 0) {
                            prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                        } else {
                            prevSortIndex = row.sortIndex - 20;
                        }
                        let newSortIndex = (prevSortIndex + row.sortIndex) / 2;

                        // CAS 1: LIGNE MANUELLE
                        if (isVirtual) {
                            const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                            if (currentDraggedRow) {
                                // Mettre à jour l'affichage local (optimiste)
                                currentDraggedRow.columnIndex = colIndex;
                                currentDraggedRow.sortIndex = newSortIndex;

                                this.pendingChanges.set(draggedOriginalName, {
                                    columnIndex: colIndex,
                                    sortIndex: newSortIndex,
                                    timestamp: Date.now()
                                });

                                // Persister pour Ligne Manuelle (propriétés 'col' et 'pos')
                                this.host.persistProperties({
                                    merge: [{
                                        objectName: draggedOriginalName,
                                        selector: null,
                                        properties: {
                                            col: colIndex,
                                            pos: newSortIndex
                                        }
                                    }]
                                });

                                // Rafraîchir l'affichage
                                this.flexContainer.innerHTML = "";
                                let maxColUsed = 1;
                                this.allRowsData.forEach(r => {
                                    if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                                });
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
                        // CAS 2: LIGNE CLASSIQUE (Excel)
                        else if (categories) {
                            const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                            if (draggedIndex !== -1) {
                                const selectionId = this.host.createSelectionIdBuilder()
                                    .withCategory(categories, draggedIndex)
                                    .createSelectionId();
                                
                                const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);

                                let existingProps: any = {
                                    marginBottom: 0, marginTop: 0, isHidden: false, 
                                    marginColor: {solid:{color:"transparent"}},
                                    customLabel: "", customAmount: "", isHeader: false, 
                                    fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                                    bgLabel: {solid:{color:"transparent"}}, 
                                    fillLabel: {solid:{color:"black"}}, 
                                    italicLabel: false, boldLabel: false,
                                    bgAmount: {solid:{color:"transparent"}}, 
                                    fillAmount: {solid:{color:"black"}}, 
                                    boldAmount: false
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
                                        Object.keys(style).forEach(key => {
                                            if (key !== "columnIndex" && key !== "ordreTri") {
                                                existingProps[key] = style[key];
                                            }
                                        });
                                    }
                                }
                                
                                existingProps.columnIndex = colIndex;
                                existingProps.ordreTri = newSortIndex;
                                
                                this.host.persistProperties({
                                    replace: [{
                                        objectName: "styleLigne",
                                        selector: selectionId.getSelector(),
                                        properties: existingProps
                                    }]
                                });
                                
                                const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                if (draggedRowData) {
                                    draggedRowData.columnIndex = colIndex;
                                    draggedRowData.sortIndex = newSortIndex;
                                    
                                    this.pendingChanges.set(draggedOriginalName, {
                                        columnIndex: colIndex,
                                        sortIndex: newSortIndex,
                                        marginBottom: draggedRowData.marginBottom,
                                        marginTop: draggedRowData.marginTop,
                                        isHidden: draggedRowData.isHidden,
                                        marginColor: draggedRowData.marginColor,
                                        customLabel: draggedRowData.customLabel,
                                        customAmount: draggedRowData.customAmount,
                                        isHeader: draggedRowData.isHeader,
                                        fontSize: draggedRowData.fontSize,
                                        font: draggedRowData.font,
                                        bgLabel: draggedRowData.bgLabel,
                                        colorLabel: draggedRowData.colorLabel,
                                        italicLabel: draggedRowData.italicLabel,
                                        boldLabel: draggedRowData.boldLabel,
                                        bgAmount: draggedRowData.bgAmount,
                                        colorAmount: draggedRowData.colorAmount,
                                        boldAmount: draggedRowData.boldAmount,
                                        timestamp: Date.now()
                                    });
                                    
                                    this.flexContainer.innerHTML = "";
                                    let maxColUsed = 1;
                                    this.allRowsData.forEach(r => {
                                        if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                                    });
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

            // CLIC GAUCHE SUR LIGNE (Sélection Auto + Toolbar)
            if (!row.isVirtual) {
                tr.onclick = (e: MouseEvent) => {
                    // Ne pas déclencher si on est en train de draguer
                    if (tr.draggable && e.detail === 1) {
                        e.stopPropagation(); // Empêcher la fermeture immédiate
                        
                        // 1. Sélectionner la ligne pour Power BI
                        this.host.persistProperties({
                            merge: [{
                                objectName: "selectionMenu",
                                selector: null,
                                properties: {
                                    "ligneActive": row.originalName
                                }
                            }]
                        });
                        
                        // 2. Afficher la toolbar
                        this.showToolbar(row, tr, e.clientX, e.clientY, categories);
                    }
                };
                tr.title = "Cliquer pour modifier | Glisser pour déplacer";
            }

            let finalAmount = "";
            if (row.customAmount && row.customAmount.trim() !== "") {
                finalAmount = row.customAmount;
            } else {
                let rawVal = parseFloat(row.amount);
                if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    // Formatage en mode décimal (sans symbole € automatique)
                    finalAmount = new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(rawVal);
                }
            }

            tr.style.fontFamily = row.font; tr.style.fontSize = row.fontSize + "px"; 

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            const cellBg = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgLabel;
            
            // DEBUG: Vérifier les couleurs au moment du rendu
            if (row.colorLabel !== "black" || row.bgLabel !== "transparent") {
                console.log("🎨 RENDERING", row.label, "colorLabel:", row.colorLabel, "bgLabel:", row.bgLabel);
            }
            
            tdName.style.backgroundColor = cellBg; tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            
            // SIMPLIFIÉ: Bordure complète de ligne (pas de séparation label/prix)
            const borderStyle = `${row.borderWidth}px solid ${row.borderColor}`;
            
            tdName.style.border = borderStyle;
            tdName.style.borderRight = "none"; // Pas de bordure entre label et prix
            
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount; 
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
            
            // Même bordure sur les 4 côtés
            tdAmount.style.border = borderStyle;
            tdAmount.style.borderLeft = "none"; // Pas de bordure entre label et prix
            
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);

            if (row.marginBottom > 0) {
                const trSpB = document.createElement("tr");
                trSpB.style.height = row.marginBottom + "px";
                const tdSpB = document.createElement("td");
                tdSpB.colSpan = 2; tdSpB.style.backgroundColor = row.marginColor; tdSpB.style.border = "none";
                trSpB.appendChild(tdSpB); tbody.appendChild(trSpB);
            }
        });

        // ZONE DE DROP EN BAS DE COLONNE (Pour ajouter à la fin)
        const dropZoneTr = document.createElement("tr");
        dropZoneTr.style.height = "40px"; 
        const dropZoneTd = document.createElement("td");
        dropZoneTd.colSpan = 2;
        dropZoneTd.style.backgroundColor = "transparent";
        dropZoneTd.style.border = "2px dashed transparent";
        dropZoneTd.style.transition = "all 0.2s";
        dropZoneTd.innerHTML = "";
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

                // CALCUL DE LA NOUVELLE POSITION (FIN DE COLONNE)
                let lastSortIndex = 0;
                if (rows.length > 0) {
                    lastSortIndex = rows[rows.length - 1].sortIndex;
                }
                let newSortIndex = lastSortIndex + 10;

                // CAS 1: LIGNE MANUELLE
                if (isVirtual) {
                    const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                    if (currentDraggedRow) {
                        // Mettre à jour l'affichage local (optimiste)
                        currentDraggedRow.columnIndex = colIndex;
                        currentDraggedRow.sortIndex = newSortIndex;

                        this.pendingChanges.set(draggedOriginalName, {
                            columnIndex: colIndex,
                            sortIndex: newSortIndex,
                            timestamp: Date.now()
                        });

                        // Persister pour Ligne Manuelle (propriétés 'col' et 'pos')
                        this.host.persistProperties({
                            merge: [{
                                objectName: draggedOriginalName,
                                selector: null,
                                properties: {
                                    col: colIndex,
                                    pos: newSortIndex
                                }
                            }]
                        });

                        // Rafraîchir l'affichage
                        this.flexContainer.innerHTML = "";
                        let maxColUsed = 1;
                        this.allRowsData.forEach(r => {
                            if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                        });
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
                // CAS 2: LIGNE CLASSIQUE (Excel)
                else if (categories) {
                    const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                    if (draggedIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withCategory(categories, draggedIndex)
                            .createSelectionId();
                        
                        const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);

                        let existingProps: any = {
                            marginBottom: 0, marginTop: 0, isHidden: false, 
                            marginColor: {solid:{color:"transparent"}},
                            customLabel: "", customAmount: "", isHeader: false, 
                            fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                            bgLabel: {solid:{color:"transparent"}}, 
                            fillLabel: {solid:{color:"black"}}, 
                            italicLabel: false, boldLabel: false,
                            bgAmount: {solid:{color:"transparent"}}, 
                            fillAmount: {solid:{color:"black"}}, 
                            boldAmount: false
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
                                Object.keys(style).forEach(key => {
                                    if (key !== "columnIndex" && key !== "ordreTri") {
                                        existingProps[key] = style[key];
                                    }
                                });
                            }
                        }
                        
                        existingProps.columnIndex = colIndex;
                        existingProps.ordreTri = newSortIndex;
                        
                        console.log("🔵 DRAG (END ZONE) Final props to persist:", JSON.stringify(existingProps));
                        
                        const instancesToPersist: any = {
                            merge: [{
                                objectName: "styleLigne",
                                selector: selectionId.getSelector(),
                                properties: existingProps
                            }]
                        };
                        
                        console.log("🟢 PERSISTING (drag end zone):", JSON.stringify(instancesToPersist));
                        
                        this.host.persistProperties(instancesToPersist);
                        console.log("✅ persistProperties called successfully (drop at end)");
                        
                        const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        if (draggedRowData) {
                            draggedRowData.columnIndex = colIndex;
                            draggedRowData.sortIndex = newSortIndex;
                            
                            this.pendingChanges.set(draggedOriginalName, {
                                columnIndex: colIndex,
                                sortIndex: newSortIndex,
                                marginBottom: draggedRowData.marginBottom,
                                marginTop: draggedRowData.marginTop,
                                isHidden: draggedRowData.isHidden,
                                marginColor: draggedRowData.marginColor,
                                customLabel: draggedRowData.customLabel,
                                customAmount: draggedRowData.customAmount,
                                isHeader: draggedRowData.isHeader,
                                fontSize: draggedRowData.fontSize,
                                font: draggedRowData.font,
                                bgLabel: draggedRowData.bgLabel,
                                colorLabel: draggedRowData.colorLabel,
                                italicLabel: draggedRowData.italicLabel,
                                boldLabel: draggedRowData.boldLabel,
                                bgAmount: draggedRowData.bgAmount,
                                colorAmount: draggedRowData.colorAmount,
                                boldAmount: draggedRowData.boldAmount,
                                timestamp: Date.now()
                            });
                            
                            this.flexContainer.innerHTML = "";
                            let maxColUsed = 1;
                            this.allRowsData.forEach(r => {
                                if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                            });
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

        targetTable.appendChild(tbody);
    }

    private showToolbar(row: RowData, tr: HTMLTableRowElement, x: number, y: number, categories: any) {
        console.log("🟢 showToolbar called for:", row.originalName);

        if (!categories) {
            console.error("🔴 Categories is null");
            return;
        }

        this.toolbar.innerHTML = "";
        this.toolbar.style.display = "flex";

        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();

        // Positionner la toolbar
        const toolbarWidth = 300;
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
                // SIMPLIFIÉ: Bordures
                borderWidth: currentRow.borderWidth,
                borderColor: { solid: { color: currentRow.borderColor } }
            };

            Object.keys(overrides).forEach(key => {
                fullProps[key] = overrides[key];
            });

            this.host.persistProperties({
                replace: [{
                    objectName: "styleLigne",
                    selector: selectionId.getSelector(),
                    properties: fullProps
                }]
            });
        };

        // --- BOUTONS ---

        // GRAS (B)
        const btnBold = document.createElement("button");
        btnBold.innerHTML = "<b>B</b>";
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
        btnItalic.innerHTML = "<i>I</i>";
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
        const sep2 = document.createElement("div");
        sep2.className = "separator";
        this.toolbar.appendChild(sep2);

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

        // SEPARATEUR
        const sep3 = document.createElement("div");
        sep3.className = "separator";
        this.toolbar.appendChild(sep3);

        // SIMPLIFIÉ: Bouton BORDURES
        const btnBorders = document.createElement("button");
        btnBorders.innerHTML = "🔲";
        btnBorders.title = "Personnaliser les bordures";
        btnBorders.onclick = (e) => {
            e.stopPropagation();
            this.showBordersMenu(row, tr, selectionId);
        };
        this.toolbar.appendChild(btnBorders);

        // BOUTON FERMER
        const btnClose = document.createElement("button");
        btnClose.className = "close-btn";
        btnClose.innerHTML = "✖";
        btnClose.onclick = (e) => {
            e.stopPropagation();
            this.toolbar.style.display = "none";
        };
        this.toolbar.appendChild(btnClose);
    }

    // SIMPLIFIÉ: Menu de bordures
    private showBordersMenu(row: RowData, tr: HTMLTableRowElement, selectionId: any) {
        const menu = document.createElement("div");
        menu.className = "borders-menu";
        menu.style.position = "fixed";
        menu.style.zIndex = "10001";
        menu.style.background = "white";
        menu.style.border = "1px solid #e0e0e0";
        menu.style.borderRadius = "6px";
        menu.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        menu.style.padding = "16px";
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.gap = "12px";
        menu.style.width = "250px";

        const title = document.createElement("div");
        title.innerText = "Bordure de ligne";
        title.style.fontWeight = "bold";
        title.style.marginBottom = "8px";
        title.style.fontSize = "14px";
        menu.appendChild(title);

        // Largeur
        const widthWrapper = document.createElement("div");
        widthWrapper.style.display = "flex";
        widthWrapper.style.flexDirection = "column";
        widthWrapper.style.gap = "6px";
        const widthLabel = document.createElement("label");
        widthLabel.innerText = "Largeur (px)";
        widthLabel.style.fontSize = "12px";
        widthLabel.style.fontWeight = "500";
        widthWrapper.appendChild(widthLabel);
        const widthInput = document.createElement("input");
        widthInput.type = "number";
        widthInput.min = "0";
        widthInput.max = "10";
        widthInput.value = row.borderWidth.toString();
        widthInput.style.padding = "6px";
        widthInput.style.border = "1px solid #ddd";
        widthInput.style.borderRadius = "4px";
        widthInput.onchange = () => {
            const val = parseInt(widthInput.value, 10);
            row.borderWidth = val;
            this.updateBorder(row, tr, selectionId);
        };
        widthWrapper.appendChild(widthInput);
        menu.appendChild(widthWrapper);

        // Couleur
        const colorWrapper = document.createElement("div");
        colorWrapper.style.display = "flex";
        colorWrapper.style.flexDirection = "column";
        colorWrapper.style.gap = "6px";
        const colorLabel = document.createElement("label");
        colorLabel.innerText = "Couleur";
        colorLabel.style.fontSize = "12px";
        colorLabel.style.fontWeight = "500";
        colorWrapper.appendChild(colorLabel);
        const colorInput = document.createElement("input");
        colorInput.type = "color";
        colorInput.value = row.borderColor;
        colorInput.style.width = "100%";
        colorInput.style.height = "36px";
        colorInput.style.border = "1px solid #ddd";
        colorInput.style.borderRadius = "4px";
        colorInput.style.cursor = "pointer";
        colorInput.onchange = () => {
            row.borderColor = colorInput.value;
            this.updateBorder(row, tr, selectionId);
        };
        colorWrapper.appendChild(colorInput);
        menu.appendChild(colorWrapper);

        // Bouton Fermer
        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Fermer";
        closeBtn.style.marginTop = "8px";
        closeBtn.style.padding = "8px";
        closeBtn.style.cursor = "pointer";
        closeBtn.style.background = "#f5f5f5";
        closeBtn.style.border = "1px solid #ddd";
        closeBtn.style.borderRadius = "4px";
        closeBtn.onclick = () => document.body.removeChild(menu);
        menu.appendChild(closeBtn);

        // Position
        const rect = tr.getBoundingClientRect();
        menu.style.left = (rect.right + 10) + "px";
        menu.style.top = rect.top + "px";

        document.body.appendChild(menu);
    }

    // SIMPLIFIÉ: Mise à jour bordures
    private updateBorder(row: RowData, tr: HTMLTableRowElement, selectionId: any) {
        const tdName = tr.cells[0] as HTMLElement;
        const tdAmount = tr.cells[1] as HTMLElement;

        const borderStyle = `${row.borderWidth}px solid ${row.borderColor}`;

        if (tdName) {
            tdName.style.border = borderStyle;
            tdName.style.borderRight = "none";
        }

        if (tdAmount) {
            tdAmount.style.border = borderStyle;
            tdAmount.style.borderLeft = "none";
        }

        this.host.persistProperties({
            replace: [{
                objectName: "styleLigne",
                selector: selectionId.getSelector(),
                properties: {
                    borderWidth: row.borderWidth,
                    borderColor: { solid: { color: row.borderColor } }
                }
            }]
        });
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];

        // NOUVEAU: Bordures globales du tableau
        if (options.objectName === "tableBorders") {
            instances.push({
                objectName: "tableBorders",
                selector: null,
                properties: {
                    borderWidth: this.tableBorderWidth,
                    borderColor: { solid: { color: this.tableBorderColor } },
                    borderStyle: this.tableBorderStyle,
                    borderRadius: this.tableBorderRadius
                }
            });
        }

        if (options.objectName === "titresColonnes") {
            const props: any = {};
            // Retourner tous les titres existants
            for (let i = 1; i <= 20; i++) {
                const titre = this.columnTitles[i-1];
                if (titre) {
                    props["titre" + i] = titre;
                }
            }
            instances.push({ 
                objectName: "titresColonnes", 
                selector: null,
                properties: props
            });
        }

        const addManualMenu = (key: string) => {
            if (options.objectName === key) {
                let props: any = { text: "Nouveau Titre", show: false, col: 1, pos: 0, isHeader: true, bgColor: {solid:{color:""}}, textColor: {solid:{color:"black"}}, marginTop: 0, fontSize: 12, bold: false, italic: false };
                if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                    const s = this.metadata.objects[key];
                    if (s["text"]) props.text = s["text"];
                    if (s["show"] !== undefined) props.show = s["show"];
                    if (s["col"]) props.col = s["col"];
                    if (s["pos"] !== undefined) props.pos = s["pos"];
                    if (s["isHeader"] !== undefined) props.isHeader = s["isHeader"];
                    if (s["bgColor"]) props.bgColor = s["bgColor"];
                    if (s["textColor"]) props.textColor = s["textColor"];
                    if (s["marginTop"]) props.marginTop = s["marginTop"];
                    if (s["fontSize"]) props.fontSize = s["fontSize"];
                    if (s["bold"] !== undefined) props.bold = s["bold"];
                    if (s["italic"] !== undefined) props.italic = s["italic"];
                }
                instances.push({ 
                    objectName: key, 
                    selector: null,
                    properties: props 
                });
            }
        };

        addManualMenu("ligneA"); addManualMenu("ligneB"); addManualMenu("ligneC");
        addManualMenu("ligneD"); addManualMenu("ligneE"); addManualMenu("ligneF");

        // Gérer dynamiquement toutes les lignes manuelles
        if (this.metadata && this.metadata.objects) {
            Object.keys(this.metadata.objects).forEach(key => {
                if (key.startsWith("manualLine") && options.objectName === key) {
                    let props: any = { 
                        text: "Nouvelle Ligne", 
                        show: false, 
                        col: 1, 
                        pos: 0, 
                        isHeader: false, 
                        bgColor: {solid:{color:"transparent"}}, 
                        textColor: {solid:{color:"black"}}, 
                        marginTop: 0, 
                        fontSize: 12, 
                        bold: false, 
                        italic: false 
                    };
                    const s = this.metadata.objects[key];
                    if (s["text"]) props.text = s["text"];
                    if (s["show"] !== undefined) props.show = s["show"];
                    if (s["col"]) props.col = s["col"];
                    if (s["pos"] !== undefined) props.pos = s["pos"];
                    if (s["isHeader"] !== undefined) props.isHeader = s["isHeader"];
                    if (s["bgColor"]) props.bgColor = s["bgColor"];
                    if (s["textColor"]) props.textColor = s["textColor"];
                    if (s["marginTop"]) props.marginTop = s["marginTop"];
                    if (s["fontSize"]) props.fontSize = s["fontSize"];
                    if (s["bold"] !== undefined) props.bold = s["bold"];
                    if (s["italic"] !== undefined) props.italic = s["italic"];
                    
                    instances.push({ 
                        objectName: key, 
                        selector: null,
                        properties: props 
                    });
                }
            });
        }

        if (!this.categoricalData) return instances;
        const categories = this.categoricalData.categories[0];

        if (options.objectName === "selectionMenu") {
            instances.push({ 
                objectName: "selectionMenu", 
                selector: null,
                properties: { ligneActive: this.currentSelectedLabel } 
            });
        }

        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                
                const rowData = this.allRowsData.find(r => r.originalName === this.currentSelectedLabel);
                
                let props: any = {
                    columnIndex: 1, ordreTri: indexChoisi, marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:"transparent"}},
                    customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                    bgLabel: {solid:{color:"transparent"}}, fillLabel: {solid:{color:"black"}}, italicLabel: false, boldLabel: false,
                    bgAmount: {solid:{color:"transparent"}}, fillAmount: {solid:{color:"black"}}, boldAmount: false,
                    // SIMPLIFIÉ: Bordures
                    borderWidth: 1,
                    borderColor: { solid: { color: "#eee" } }
                };
                
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["columnIndex"]) props.columnIndex = style["columnIndex"];
                        if (style["ordreTri"] !== undefined) props.ordreTri = style["ordreTri"];
                        if (style["marginBottom"]) props.marginBottom = style["marginBottom"];
                        if (style["marginTop"]) props.marginTop = style["marginTop"];
                        if (style["isHidden"]) props.isHidden = style["isHidden"];
                        if (style["marginColor"]) props.marginColor = style["marginColor"];
                    }
                }
                
                if (rowData) {
                    props.columnIndex = rowData.columnIndex;
                    props.ordreTri = rowData.sortIndex;
                    props.marginBottom = rowData.marginBottom;
                    props.marginTop = rowData.marginTop;
                    props.isHidden = rowData.isHidden;
                    props.marginColor = { solid: { color: rowData.marginColor } };
                    props.customLabel = rowData.customLabel || "";
                    props.customAmount = rowData.customAmount || "";
                    props.isHeader = rowData.isHeader;
                    props.fontSize = rowData.fontSize;
                    props.fontFamily = rowData.font;
                    props.bgLabel = { solid: { color: rowData.bgLabel } };
                    props.fillLabel = { solid: { color: rowData.colorLabel } };
                    props.boldLabel = rowData.boldLabel;
                    props.italicLabel = rowData.italicLabel;
                    props.bgAmount = { solid: { color: rowData.bgAmount } };
                    props.fillAmount = { solid: { color: rowData.colorAmount } };
                    props.boldAmount = rowData.boldAmount;
                    props.borderWidth = rowData.borderWidth;
                    props.borderColor = { solid: { color: rowData.borderColor } };
                }
                
                instances.push({ objectName: "styleLigne", selector: selectionId.getSelector(), properties: props });
            }
        }
        return instances;
    }
}