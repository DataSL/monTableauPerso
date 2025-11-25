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

// Structure mise à jour avec les 2 fonds
interface RowData {
    label: string;
    amount: string;
    sortIndex: number;
    // Style Global
    font: string;
    fontSize: number;
    // Style Libellé
    bgLabel: string;
    colorLabel: string;
    boldLabel: boolean;
    italicLabel: boolean;
    // Style Montant
    bgAmount: string;
    colorAmount: string;
    boldAmount: boolean;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private table: HTMLTableElement;
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    private currentSelectedLabel: string = ""; 

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
        this.table = document.createElement("table");
        this.target.appendChild(this.table);
    }

    public update(options: VisualUpdateOptions) {
        this.table.innerHTML = "";
        this.allRowsData = [];

        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories) return;

        this.categoricalData = dataView.categorical;
        const categories = dataView.categorical.categories[0];
        const values = dataView.categorical.values ? dataView.categorical.values[0] : null;

        // 1. Lire le nom écrit par l'utilisateur
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"] as string;
        }
        
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }

        // 2. Construire les données
        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();

            // Paramètres par défaut
            let rowSettings: RowData = {
                label: label,
                amount: values ? values.values[index]?.toString() : "",
                sortIndex: index,
                font: "'Segoe UI', sans-serif",
                fontSize: 12,
                // Gauche
                bgLabel: "transparent",
                colorLabel: "black",
                boldLabel: false,
                italicLabel: false,
                // Droite
                bgAmount: "transparent",
                colorAmount: "black",
                boldAmount: false
            };

            // Charger les styles sauvegardés
            if (categories.objects && categories.objects[index]) {
                const object = categories.objects[index];
                if (object["styleLigne"]) {
                    const style = object["styleLigne"];
                    
                    if (style["ordreTri"] !== undefined) rowSettings.sortIndex = style["ordreTri"] as number;
                    
                    if (style["fontFamily"]) rowSettings.font = style["fontFamily"] as string;
                    if (style["fontSize"]) rowSettings.fontSize = style["fontSize"] as number;
                    
                    // Libellé
                    if (style["bgLabel"]) rowSettings.bgLabel = (style["bgLabel"] as any).solid.color;
                    if (style["fillLabel"]) rowSettings.colorLabel = (style["fillLabel"] as any).solid.color;
                    if (style["boldLabel"] !== undefined) rowSettings.boldLabel = style["boldLabel"] as boolean;
                    if (style["italicLabel"] !== undefined) rowSettings.italicLabel = style["italicLabel"] as boolean;
                    
                    // Montant
                    if (style["bgAmount"]) rowSettings.bgAmount = (style["bgAmount"] as any).solid.color;
                    if (style["fillAmount"]) rowSettings.colorAmount = (style["fillAmount"] as any).solid.color;
                    if (style["boldAmount"] !== undefined) rowSettings.boldAmount = style["boldAmount"] as boolean;
                }
            }
            this.allRowsData.push(rowSettings);
        });

        // 3. Trier
        this.allRowsData.sort((a, b) => a.sortIndex - b.sortIndex);

        // 4. Afficher
        const tbody = document.createElement("tbody");
        this.allRowsData.forEach(row => {
            let displayAmount = "";
            let rawVal = parseFloat(row.amount);
            if (row.amount && !isNaN(rawVal) && rawVal !== 0) {
                   displayAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(rawVal);
            }

            const tr = document.createElement("tr");
            // Le style global de la police reste sur le TR
            tr.style.fontFamily = row.font;
            tr.style.fontSize = row.fontSize + "px";

            // --- CELLULE LIBELLÉ ---
            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            // Style individuel
            tdName.style.backgroundColor = row.bgLabel; // Fond Gauche
            tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);

            // --- CELLULE MONTANT ---
            const tdAmount = document.createElement("td");
            tdAmount.innerText = displayAmount;
            tdAmount.style.textAlign = "right";
            // Style individuel
            tdAmount.style.backgroundColor = row.bgAmount; // Fond Droite
            tdAmount.style.color = row.colorAmount; 
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);
        });
        this.table.appendChild(tbody);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];
        if (!this.categoricalData) return instances;
        
        const categories = this.categoricalData.categories[0];

        // MENU 1
        if (options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu",
                selector: null, 
                properties: {
                    ligneActive: this.currentSelectedLabel
                }
            });
        }

        // MENU 2 (Complet)
        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);

            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();

                // Valeurs par défaut
                let props: any = {
                    ordreTri: indexChoisi,
                    fontFamily: "",
                    fontSize: 12,
                    // Gauche
                    bgLabel: { solid: { color: "" } }, // Transparent par défaut
                    fillLabel: { solid: { color: "black" } },
                    boldLabel: false,
                    italicLabel: false,
                    // Droite
                    bgAmount: { solid: { color: "" } }, // Transparent par défaut
                    fillAmount: { solid: { color: "black" } },
                    boldAmount: false
                };

                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                         if (style["ordreTri"] !== undefined) props.ordreTri = style["ordreTri"];
                         
                         if (style["fontFamily"]) props.fontFamily = style["fontFamily"];
                         if (style["fontSize"]) props.fontSize = style["fontSize"];
                         
                         if (style["bgLabel"]) props.bgLabel = style["bgLabel"];
                         if (style["fillLabel"]) props.fillLabel = style["fillLabel"];
                         if (style["boldLabel"] !== undefined) props.boldLabel = style["boldLabel"];
                         if (style["italicLabel"] !== undefined) props.italicLabel = style["italicLabel"];
                         
                         if (style["bgAmount"]) props.bgAmount = style["bgAmount"];
                         if (style["fillAmount"]) props.fillAmount = style["fillAmount"];
                         if (style["boldAmount"] !== undefined) props.boldAmount = style["boldAmount"];
                    }
                }

                instances.push({
                    objectName: "styleLigne",
                    displayName: "Personnaliser : " + this.currentSelectedLabel,
                    selector: selectionId.getSelector(),
                    properties: props
                });
            }
        }
        return instances;
    }
}