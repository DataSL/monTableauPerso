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
    
    columnIndex: number; 
    sortIndex: number;
    
    // Espacement
    marginBottom: number;
    marginTop: number; // <--- NOUVEAU
    marginColor: string;
    isHidden: boolean; // <--- NOUVEAU

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
    private divContainer: HTMLDivElement;
    private flexContainer: HTMLDivElement;
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    private currentSelectedLabel: string = ""; 
    
    private columnTitles: string[] = ["COLONNE 1", "COLONNE 2", "COLONNE 3", "COLONNE 4"];

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;

        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper";
        this.target.appendChild(this.divContainer);

        this.flexContainer = document.createElement("div");
        this.flexContainer.className = "accounting-container";
        this.divContainer.appendChild(this.flexContainer);
    }

    public update(options: VisualUpdateOptions) {
        this.flexContainer.innerHTML = "";
        this.allRowsData = [];

        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories) return;

        this.categoricalData = dataView.categorical;
        const categories = dataView.categorical.categories[0];
        const values = dataView.categorical.values ? dataView.categorical.values[0] : null;

        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["titresColonnes"]) {
            const t = dataView.metadata.objects["titresColonnes"];
            if (t["titre1"]) this.columnTitles[0] = t["titre1"] as string;
            if (t["titre2"]) this.columnTitles[1] = t["titre2"] as string;
            if (t["titre3"]) this.columnTitles[2] = t["titre3"] as string;
            if (t["titre4"]) this.columnTitles[3] = t["titre4"] as string;
        }

        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"] as string;
        }
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }

        let maxColumnIndexUsed = 1;

        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();

            let row: RowData = {
                label: label,
                amount: values ? values.values[index]?.toString() : "",
                columnIndex: 1, 
                sortIndex: index,
                marginBottom: 0,
                marginTop: 0,
                isHidden: false,
                marginColor: "transparent",
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
                    
                    if (style["columnIndex"]) row.columnIndex = style["columnIndex"] as number;
                    if (row.columnIndex < 1) row.columnIndex = 1;
                    if (style["ordreTri"] !== undefined) row.sortIndex = style["ordreTri"] as number;
                    
                    // Lecture Espacements
                    if (style["marginBottom"]) row.marginBottom = style["marginBottom"] as number;
                    if (style["marginTop"]) row.marginTop = style["marginTop"] as number; // <--- Nouveau
                    if (style["isHidden"]) row.isHidden = style["isHidden"] as boolean; // <--- Nouveau
                    if (style["marginColor"]) row.marginColor = (style["marginColor"] as any).solid.color;

                    if (style["fontFamily"]) row.font = style["fontFamily"] as string;
                    if (style["fontSize"]) row.fontSize = style["fontSize"] as number;
                    if (style["bgLabel"]) row.bgLabel = (style["bgLabel"] as any).solid.color;
                    if (style["fillLabel"]) row.colorLabel = (style["fillLabel"] as any).solid.color;
                    if (style["boldLabel"] !== undefined) row.boldLabel = style["boldLabel"] as boolean;
                    if (style["italicLabel"] !== undefined) row.italicLabel = style["italicLabel"] as boolean;
                    if (style["bgAmount"]) row.bgAmount = (style["bgAmount"] as any).solid.color;
                    if (style["fillAmount"]) row.colorAmount = (style["fillAmount"] as any).solid.color;
                    if (style["boldAmount"] !== undefined) row.boldAmount = style["boldAmount"] as boolean;
                }
            }
            
            if (row.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = row.columnIndex;
            this.allRowsData.push(row);
        });

        for (let i = 1; i <= maxColumnIndexUsed; i++) {
            const colDiv = document.createElement("div");
            colDiv.className = "dynamic-column"; 
            const table = document.createElement("table");
            colDiv.appendChild(table);

            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
            const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);

            this.renderTableContent(table, colTitle, colRows);
            this.flexContainer.appendChild(colDiv);
        }
    }

    private renderTableContent(targetTable: HTMLTableElement, title: string, rows: RowData[]) {
        rows.sort((a, b) => a.sortIndex - b.sortIndex);

        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.innerText = title;
        trHead.appendChild(th);
        thead.appendChild(trHead);
        targetTable.appendChild(thead);

        const tbody = document.createElement("tbody");
        
        rows.forEach(row => {
            // --- 1. SI MASQUÉE, ON PASSE À LA SUIVANTE ---
            if (row.isHidden) return; 

            // --- 2. GESTION MARGE HAUT (Espace avant) ---
            if (row.marginTop > 0) {
                const trSpacerTop = document.createElement("tr");
                trSpacerTop.style.height = row.marginTop + "px";
                const tdSpacer = document.createElement("td");
                tdSpacer.colSpan = 2;
                tdSpacer.style.backgroundColor = row.marginColor; // Utilise la même couleur
                tdSpacer.style.border = "none";
                trSpacerTop.appendChild(tdSpacer);
                tbody.appendChild(trSpacerTop);
            }

            // --- 3. LIGNE DE DONNÉES ---
            const tr = document.createElement("tr");
            
            let finalAmount = "";
            let rawVal = parseFloat(row.amount);
            if (row.amount && !isNaN(rawVal) && rawVal !== 0) {
                finalAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(rawVal);
            }

            tr.style.fontFamily = row.font;
            tr.style.fontSize = row.fontSize + "px";
            tr.style.height = "30px";

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            tdName.style.backgroundColor = row.bgLabel;
            tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount;
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);

            // --- 4. GESTION MARGE BAS (Espace après) ---
            if (row.marginBottom > 0) {
                const trSpacerBottom = document.createElement("tr");
                trSpacerBottom.style.height = row.marginBottom + "px";
                const tdSpacer = document.createElement("td");
                tdSpacer.colSpan = 2;
                tdSpacer.style.backgroundColor = row.marginColor;
                tdSpacer.style.border = "none";
                trSpacerBottom.appendChild(tdSpacer);
                tbody.appendChild(trSpacerBottom);
            }
        });
        targetTable.appendChild(tbody);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];
        if (!this.categoricalData) return instances;
        const categories = this.categoricalData.categories[0];

        if (options.objectName === "titresColonnes") {
            instances.push({
                objectName: "titresColonnes", selector: null,
                properties: { 
                    titre1: this.columnTitles[0], titre2: this.columnTitles[1], 
                    titre3: this.columnTitles[2], titre4: this.columnTitles[3] 
                }
            });
        }

        if (options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu", selector: null, 
                properties: { ligneActive: this.currentSelectedLabel }
            });
        }

        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                
                let props: any = {
                    columnIndex: 1, ordreTri: indexChoisi,
                    marginBottom: 0, marginTop: 0, isHidden: false, // <--- Defaults
                    marginColor: { solid: { color: "" } },

                    fontFamily: "", fontSize: 12,
                    bgLabel: { solid: { color: "" } }, fillLabel: { solid: { color: "black" } },
                    boldLabel: false, italicLabel: false,
                    bgAmount: { solid: { color: "" } }, fillAmount: { solid: { color: "black" } }, boldAmount: false
                };

                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                         if (style["columnIndex"]) props.columnIndex = style["columnIndex"];
                         if (style["ordreTri"] !== undefined) props.ordreTri = style["ordreTri"];
                         
                         if (style["marginBottom"] !== undefined) props.marginBottom = style["marginBottom"];
                         if (style["marginTop"] !== undefined) props.marginTop = style["marginTop"];
                         if (style["isHidden"] !== undefined) props.isHidden = style["isHidden"];
                         if (style["marginColor"]) props.marginColor = style["marginColor"];

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
                    selector: selectionId.getSelector(), 
                    properties: props
                });
            }
        }
        return instances;
    }
}