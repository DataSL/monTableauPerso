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
    
    marginBottom: number;
    marginTop: number;
    marginColor: string;
    isHidden: boolean;
    isHeader: boolean;
    isVirtual: boolean; 

    font: string; fontSize: number;
    bgLabel: string; colorLabel: string; boldLabel: boolean; italicLabel: boolean;
    bgAmount: string; colorAmount: string; boldAmount: boolean;
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
    private metadata: any;

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
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;

        // 1. TITRES
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const t = this.metadata.objects["titresColonnes"];
            if (t["titre1"]) this.columnTitles[0] = t["titre1"] as string;
            if (t["titre2"]) this.columnTitles[1] = t["titre2"] as string;
            if (t["titre3"]) this.columnTitles[2] = t["titre3"] as string;
            if (t["titre4"]) this.columnTitles[3] = t["titre4"] as string;
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
                    label: originalName,
                    amount: values ? values.values[index]?.toString() : "",
                    columnIndex: 1, sortIndex: index * 10,
                    marginBottom: 0, marginTop: 0, isHidden: false, marginColor: "transparent",
                    isHeader: false, isVirtual: false,
                    font: "'Segoe UI', sans-serif", fontSize: 12,
                    bgLabel: "transparent", colorLabel: "black", boldLabel: false, italicLabel: false,
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false
                };

                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        if (style["columnIndex"]) row.columnIndex = style["columnIndex"] as number;
                        if (row.columnIndex < 1) row.columnIndex = 1;
                        if (style["ordreTri"] !== undefined) row.sortIndex = style["ordreTri"] as number;
                        
                        if (style["marginBottom"]) row.marginBottom = style["marginBottom"] as number;
                        if (style["marginTop"]) row.marginTop = style["marginTop"] as number;
                        if (style["isHidden"]) row.isHidden = style["isHidden"] as boolean;
                        if (style["marginColor"]) row.marginColor = (style["marginColor"] as any).solid.color;
                        if (style["customLabel"]) row.label = style["customLabel"] as string;
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
                    }
                }
                if (row.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = row.columnIndex;
                this.allRowsData.push(row);
            });
        }

        // 3. INJECTION DES LIGNES MANUELLES (A à F)
        const manualRows = ["ligneA", "ligneB", "ligneC", "ligneD", "ligneE", "ligneF"];
        
        manualRows.forEach((key) => {
            if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                const s = this.metadata.objects[key];
                if (s["show"] === true) {
                    let txt = s["text"] ? s["text"] as string : "Ligne Manuelle";
                    let col = s["col"] ? s["col"] as number : 1;
                    let pos = s["pos"] ? s["pos"] as number : 0;
                    let isHead = s["isHeader"] ? s["isHeader"] as boolean : false;
                    let bg = s["bgColor"] ? (s["bgColor"] as any).solid.color : "transparent";
                    let color = s["textColor"] ? (s["textColor"] as any).solid.color : "black";
                    let mt = s["marginTop"] ? s["marginTop"] as number : 0;
                    // NOUVEAU : Lecture des styles
                    let fontSize = s["fontSize"] ? s["fontSize"] as number : 12;
                    let isBold = s["bold"] ? s["bold"] as boolean : false;
                    let isItalic = s["italic"] ? s["italic"] as boolean : false;

                    let vRow: RowData = {
                        label: txt, amount: "", 
                        columnIndex: col, sortIndex: pos,
                        marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                        isHeader: isHead, isVirtual: true,
                        font: "'Segoe UI', sans-serif", fontSize: fontSize,
                        bgLabel: bg, colorLabel: color, boldLabel: isBold, italicLabel: isItalic,
                        bgAmount: bg, colorAmount: color, boldAmount: isBold // On applique le gras partout
                    };
                    
                    if (vRow.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = vRow.columnIndex;
                    this.allRowsData.push(vRow);
                }
            }
        });

        // 4. RENDU
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
        th.colSpan = 2; th.innerText = title;
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
            let finalAmount = "";
            let rawVal = parseFloat(row.amount);
            if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                finalAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(rawVal);
            }
            tr.style.fontFamily = row.font; tr.style.fontSize = row.fontSize + "px"; tr.style.height = "30px";

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            const cellBg = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgLabel;
            tdName.style.backgroundColor = cellBg; tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount; tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
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
        targetTable.appendChild(tbody);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];

        if (options.objectName === "titresColonnes") {
            instances.push({ objectName: "titresColonnes", selector: null, properties: { 
                titre1: this.columnTitles[0], titre2: this.columnTitles[1], titre3: this.columnTitles[2], titre4: this.columnTitles[3] 
            }});
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
                    // NOUVEAU : On remplit les props du menu
                    if (s["fontSize"]) props.fontSize = s["fontSize"];
                    if (s["bold"] !== undefined) props.bold = s["bold"];
                    if (s["italic"] !== undefined) props.italic = s["italic"];
                }
                instances.push({ objectName: key, selector: null, properties: props });
            }
        };

        addManualMenu("ligneA");
        addManualMenu("ligneB");
        addManualMenu("ligneC");
        addManualMenu("ligneD");
        addManualMenu("ligneE");
        addManualMenu("ligneF");

        if (!this.categoricalData) return instances;
        const categories = this.categoricalData.categories[0];

        if (options.objectName === "selectionMenu") {
            instances.push({ objectName: "selectionMenu", selector: null, properties: { ligneActive: this.currentSelectedLabel } });
        }

        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                let props: any = { columnIndex: 1, ordreTri: indexChoisi, marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:""}}, customLabel: "", isHeader: false, fontSize: 12, bgLabel: {solid:{color:""}}, fillLabel: {solid:{color:"black"}}, bgAmount: {solid:{color:""}}, fillAmount: {solid:{color:"black"}}, boldLabel: false, boldAmount: false, italicLabel: false };
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["columnIndex"]) props.columnIndex = style["columnIndex"];
                        if (style["ordreTri"] !== undefined) props.ordreTri = style["ordreTri"];
                        if (style["marginBottom"]) props.marginBottom = style["marginBottom"];
                        if (style["marginTop"]) props.marginTop = style["marginTop"];
                        if (style["isHidden"]) props.isHidden = style["isHidden"];
                        if (style["marginColor"]) props.marginColor = style["marginColor"];
                        if (style["customLabel"]) props.customLabel = style["customLabel"];
                        if (style["isHeader"]) props.isHeader = style["isHeader"];
                        if (style["fontSize"]) props.fontSize = style["fontSize"];
                        if (style["fontFamily"]) props.fontFamily = style["fontFamily"];
                        if (style["bgLabel"]) props.bgLabel = style["bgLabel"];
                        if (style["fillLabel"]) props.fillLabel = style["fillLabel"];
                        if (style["boldLabel"] !== undefined) props.boldLabel = style["boldLabel"];
                        if (style["italicLabel"] !== undefined) props.italicLabel = style["italicLabel"];
                        if (style["bgAmount"]) props.bgAmount = style["bgAmount"];
                        if (style["fillAmount"]) props.fillAmount = style["fillAmount"];
                        if (style["boldAmount"] !== undefined) props.boldAmount = style["boldAmount"];
                    }
                }
                instances.push({ objectName: "styleLigne", selector: selectionId.getSelector(), properties: props });
            }
        }
        return instances;
    }
}