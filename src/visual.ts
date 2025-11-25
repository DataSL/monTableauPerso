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
    color: string;
    bgColor: string;
    font: string;
    fontSize: number;
    isBold: boolean;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private table: HTMLTableElement;
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    
    // Pour stocker quel nom est actuellement choisi dans la liste déroulante
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

        // 1. Récupérer le choix de l'utilisateur (Quelle ligne veut-il modifier ?)
        // On regarde dans les "objects" globaux (metadata)
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"] as string;
        }
        // Si rien n'est sélectionné, on prend la première ligne par défaut
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }

        // 2. Construire les données
        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();

            // Valeurs par défaut
            let rowSettings: RowData = {
                label: label,
                amount: values ? values.values[index]?.toString() : "",
                sortIndex: index,
                color: "black",
                bgColor: "transparent",
                font: "'Segoe UI', sans-serif",
                fontSize: 12,
                isBold: false
            };

            // Lecture des styles enregistrés
            if (categories.objects && categories.objects[index]) {
                const object = categories.objects[index];
                if (object["styleLigne"]) {
                    const style = object["styleLigne"];
                    if (style["ordreTri"] !== undefined) rowSettings.sortIndex = style["ordreTri"] as number;
                    if (style["fill"]) rowSettings.color = (style["fill"] as any).solid.color;
                    if (style["background"]) rowSettings.bgColor = (style["background"] as any).solid.color;
                    if (style["fontFamily"]) rowSettings.font = style["fontFamily"] as string;
                    if (style["fontSize"]) rowSettings.fontSize = style["fontSize"] as number;
                    if (style["bold"]) rowSettings.isBold = style["bold"] as boolean;
                }
            }
            this.allRowsData.push(rowSettings);
        });

        // 3. Trier et Afficher
        this.allRowsData.sort((a, b) => a.sortIndex - b.sortIndex);

        const tbody = document.createElement("tbody");
        this.allRowsData.forEach(row => {
            let displayAmount = "";
            if (row.amount && !isNaN(parseFloat(row.amount)) && parseFloat(row.amount) !== 0) {
                   displayAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(parseFloat(row.amount));
            }

            const tr = document.createElement("tr");
            tr.style.color = row.color;
            tr.style.backgroundColor = row.bgColor;
            tr.style.fontFamily = row.font;
            tr.style.fontSize = row.fontSize + "px";
            if (row.isBold) tr.style.fontWeight = "bold";

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = displayAmount;
            tdAmount.style.textAlign = "right";
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);
        });
        this.table.appendChild(tbody);
    }

    // --- C'EST ICI QUE SE FAIT LE TRI DU MENU ---
    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];
        if (!this.categoricalData) return instances;
        
        const categories = this.categoricalData.categories[0];

        // MENU 1 : LA LISTE DÉROULANTE
        if (options.objectName === "selectionMenu") {
            // On crée dynamiquement la liste des choix possibles (toutes les lignes du tableau)
            const rowNames = categories.values.map(v => v.toString());
            
            instances.push({
                objectName: "selectionMenu",
                selector: null, // Selecteur global
                properties: {
                    ligneActive: this.currentSelectedLabel
                },
                validValues: {
                    // C'est ça qui crée la liste déroulante dynamique !
                    ligneActive: rowNames 
                }
            });
        }

        // MENU 2 : LE STYLE (Uniquement pour la ligne sélectionnée au-dessus)
        if (options.objectName === "styleLigne") {
            
            // On cherche l'index de la ligne choisie par l'utilisateur
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);

            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();

                // On récupère les valeurs actuelles pour pré-remplir
                let currentOrdre = indexChoisi;
                let currentBold = false;
                let currentBg = ""; 
                let currentFill = "black";
                let currentFont = "";
                let currentSize = 12;

                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                         if (style["ordreTri"] !== undefined) currentOrdre = style["ordreTri"] as number;
                         if (style["bold"] !== undefined) currentBold = style["bold"] as boolean;
                         if (style["fill"]) currentFill = (style["fill"] as any).solid.color;
                         if (style["background"]) currentBg = (style["background"] as any).solid.color;
                         if (style["fontFamily"]) currentFont = style["fontFamily"] as string;
                         if (style["fontSize"]) currentSize = style["fontSize"] as number;
                    }
                }

                instances.push({
                    objectName: "styleLigne",
                    displayName: "Paramètres de : " + this.currentSelectedLabel, // Titre dynamique
                    selector: selectionId.getSelector(), // On cible uniquement cette ligne
                    properties: {
                        ordreTri: currentOrdre,
                        bold: currentBold,
                        fill: { solid: { color: currentFill } },
                        background: { solid: { color: currentBg } },
                        fontFamily: currentFont,
                        fontSize: currentSize
                    }
                });
            }
        }
        return instances;
    }
}