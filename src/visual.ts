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

export class Visual implements IVisual {
    private target: HTMLElement;
    private table: HTMLTableElement;
    private host: IVisualHost;
    private categories: any; 

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
        this.table = document.createElement("table");
        this.target.appendChild(this.table);
    }

    public update(options: VisualUpdateOptions) {
        this.table.innerHTML = "";
        
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories) return;

        const categorical = dataView.categorical;
        const categoryColumn = categorical.categories[0];
        const valuesColumns = categorical.values;

        this.categories = categoryColumn;

        // --- En-têtes ---
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        
        const thCat = document.createElement("th");
        thCat.innerText = categoryColumn.source.displayName;
        headerRow.appendChild(thCat);

        if(valuesColumns) {
            valuesColumns.forEach(valCol => {
                const th = document.createElement("th");
                th.innerText = valCol.source.displayName;
                headerRow.appendChild(th);
            });
        }
        thead.appendChild(headerRow);
        this.table.appendChild(thead);

        // --- Corps du tableau ---
        const tbody = document.createElement("tbody");
        
        categoryColumn.values.forEach((categoryValue, index) => {
            const tr = document.createElement("tr");

            // 1. Valeurs par défaut
            let textColor = "black"; 
            let bgColor = "transparent"; // <--- NOUVEAU (Transparent par défaut)
            let fontSize = 12;
            let fontFamily = "'Segoe UI', wf_segoe-ui_normal, helvetica, arial, sans-serif"; // <--- NOUVEAU

            // 2. Lecture des objets (Saved settings)
            if (categoryColumn.objects && categoryColumn.objects[index]) {
                const obj = categoryColumn.objects[index];
                if (obj["configLigne"]) {
                     const props = obj["configLigne"];
                     
                     // Couleur Texte
                     if (props["couleurTexte"]) 
                        textColor = (props["couleurTexte"] as any).solid.color;
                     
                     // Couleur Fond (<--- NOUVEAU)
                     if (props["arrierePlan"]) 
                        bgColor = (props["arrierePlan"] as any).solid.color;

                     // Taille
                     if (props["taillePolice"])
                        fontSize = props["taillePolice"] as number;

                     // Police (<--- NOUVEAU)
                     if (props["police"])
                        fontFamily = props["police"] as string;
                }
            }

            // 3. Application du style CSS
            tr.style.color = textColor;
            tr.style.backgroundColor = bgColor; // <--- NOUVEAU
            tr.style.fontSize = fontSize + "px";
            tr.style.fontFamily = fontFamily;   // <--- NOUVEAU

            // Remplissage des cellules
            const tdCat = document.createElement("td");
            tdCat.innerText = categoryValue.toString();
            tr.appendChild(tdCat);

            if(valuesColumns) {
                valuesColumns.forEach(valCol => {
                    const td = document.createElement("td");
                    td.innerText = valCol.values[index] ? valCol.values[index].toString() : "0";
                    tr.appendChild(td);
                });
            }
            tbody.appendChild(tr);
        });
        this.table.appendChild(tbody);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];
        if (!this.categories) return instances;

        if (options.objectName === "configLigne") {
            this.categories.values.forEach((value, index) => {
                
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(this.categories, index)
                    .createSelectionId();

                // Valeurs actuelles pour le menu
                let currentTextColor = "black";
                let currentBgColor = ""; // Vide = transparent
                let currentSize = 12;
                let currentFont = "";

                if (this.categories.objects && this.categories.objects[index]) {
                    const obj = this.categories.objects[index];
                    if (obj["configLigne"]) {
                        // Lecture Texte
                        if (obj["configLigne"]["couleurTexte"]) 
                            currentTextColor = (obj["configLigne"]["couleurTexte"] as any).solid.color;
                        
                        // Lecture Fond (<--- NOUVEAU)
                        if (obj["configLigne"]["arrierePlan"]) 
                            currentBgColor = (obj["configLigne"]["arrierePlan"] as any).solid.color;

                        // Lecture Taille
                        if (obj["configLigne"]["taillePolice"]) 
                            currentSize = obj["configLigne"]["taillePolice"] as number;

                        // Lecture Police (<--- NOUVEAU)
                        if (obj["configLigne"]["police"]) 
                            currentFont = obj["configLigne"]["police"] as string;
                    }
                }

                instances.push({
                    objectName: "configLigne",
                    displayName: value.toString(),
                    selector: selectionId.getSelector(),
                    properties: {
                        couleurTexte: { solid: { color: currentTextColor } },
                        arrierePlan: { solid: { color: currentBgColor } }, // <--- NOUVEAU
                        taillePolice: currentSize,
                        police: currentFont // <--- NOUVEAU
                    }
                });
            });
        }
        return instances;
    }
}