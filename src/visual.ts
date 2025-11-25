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
    label: string;
    amount: string;
    sortIndex: number;
    font: string;
    fontSize: number;
    bgLabel: string;
    colorLabel: string;
    boldLabel: boolean;
    italicLabel: boolean;
    bgAmount: string;
    colorAmount: string;
    boldAmount: boolean;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private table: HTMLTableElement;
    private divContainer: HTMLDivElement; // <--- NOUVEAU CONTRÔLEUR
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    private currentSelectedLabel: string = ""; 

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;

        // 1. Création du conteneur de scroll
        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper"; // Lien avec le CSS
        this.target.appendChild(this.divContainer);

        // 2. Le tableau est ajouté DANS le conteneur (et plus directement dans target)
        this.table = document.createElement("table");
        this.divContainer.appendChild(this.table);
    }

    public update(options: VisualUpdateOptions) {
        this.table.innerHTML = "";
        this.allRowsData = [];

        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories) return;

        this.categoricalData = dataView.categorical;
        const categories = dataView.categorical.categories[0];
        const values = dataView.categorical.values ? dataView.categorical.values[0] : null;

        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"] as string;
        }
        
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }

        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();

            let rowSettings: RowData = {
                label: label,
                amount: values ? values.values[index]?.toString() : "",
                sortIndex: index,
                font: "'Segoe UI', sans-serif",
                fontSize: 12,
                bgLabel: "transparent",
                colorLabel: "black",
                boldLabel: false,
                italicLabel: false,
                bgAmount: "transparent",
                colorAmount: "black",
                boldAmount: false
            };

            if (categories.objects && categories.objects[index]) {
                const object = categories.objects[index];
                if (object["styleLigne"]) {
                    const style = object["styleLigne"];
                    if (style["ordreTri"] !== undefined) rowSettings.sortIndex = style["ordreTri"] as number;
                    if (style["fontFamily"]) rowSettings.font = style["fontFamily"] as string;
                    if (style["fontSize"]) rowSettings.fontSize = style["fontSize"] as number;
                    if (style["bgLabel"]) rowSettings.bgLabel = (style["bgLabel"] as any).solid.color;
                    if (style["fillLabel"]) rowSettings.colorLabel = (style["fillLabel"] as any).solid.color;
                    if (style["boldLabel"] !== undefined) rowSettings.boldLabel = style["boldLabel"] as boolean;
                    if (style["italicLabel"] !== undefined) rowSettings.italicLabel = style["italicLabel"] as boolean;
                    if (style["bgAmount"]) rowSettings.bgAmount = (style["bgAmount"] as any).solid.color;
                    if (style["fillAmount"]) rowSettings.colorAmount = (style["fillAmount"] as any).solid.color;
                    if (style["boldAmount"] !== undefined) rowSettings.boldAmount = style["boldAmount"] as boolean;
                }
            }
            this.allRowsData.push(rowSettings);
        });

        this.allRowsData.sort((a, b) => a.sortIndex - b.sortIndex);

        // --- AJOUT DE L'EN-TÊTE DU TABLEAU (THEAD) POUR LE STICKY HEADER ---
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        
        const th1 = document.createElement("th");
        th1.innerText = categories.source.displayName || "Libellé";
        trHead.appendChild(th1);

        const th2 = document.createElement("th");
        th2.innerText = values ? values.source.displayName : "Montant";
        th2.style.textAlign = "right";
        trHead.appendChild(th2);

        thead.appendChild(trHead);
        this.table.appendChild(thead);
        // -------------------------------------------------------------------

        const tbody = document.createElement("tbody");
        this.allRowsData.forEach(row => {
            let displayAmount = "";
            let rawVal = parseFloat(row.amount);
            if (row.amount && !isNaN(rawVal) && rawVal !== 0) {
                   displayAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(rawVal);
            }

            const tr = document.createElement("tr");
            tr.style.fontFamily = row.font;
            tr.style.fontSize = row.fontSize + "px";

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            tdName.style.backgroundColor = row.bgLabel; 
            tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = displayAmount;
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = row.bgAmount; 
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

        if (options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu",
                selector: null, 
                properties: {
                    ligneActive: this.currentSelectedLabel
                }
            });
        }

        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);

            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();

                let props: any = {
                    ordreTri: indexChoisi,
                    fontFamily: "",
                    fontSize: 12,
                    bgLabel: { solid: { color: "" } },
                    fillLabel: { solid: { color: "black" } },
                    boldLabel: false,
                    italicLabel: false,
                    bgAmount: { solid: { color: "" } },
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