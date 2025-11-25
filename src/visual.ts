"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;

import "../style/visual.less";

export class Visual implements IVisual {
    private target: HTMLElement;

    constructor(options: VisualConstructorOptions) {
        this.target = options.element;
    }

    public update(options: VisualUpdateOptions) {
        this.target.innerHTML = "";

        const dataView = options.dataViews[0];
        if (!dataView || !dataView.table) return;

        const table = dataView.table;
        let rows = table.rows; // On récupère les lignes
        
        // --- 1. REPERER LES INDEX ---
        let indexLibelle = -1;
        let indexMontant = -1;
        let indexCote = -1;
        let indexType = -1;
        let indexOrder = -1; // Nouvel index pour le tri

        table.columns.forEach((col, index) => {
            if (col.roles) {
                if (col.roles["category"]) indexLibelle = index;
                if (col.roles["measure"]) indexMontant = index;
                if (col.roles["position"]) indexCote = index;
                if (col.roles["rowType"]) indexType = index;
                if (col.roles["order"]) indexOrder = index; // On repère la colonne Ordre
            }
        });

        // --- 2. TRIER LES LIGNES (CORRECTION DU PROBLEME) ---
        // Si on a trouvé la colonne ordre, on trie le tableau rows
        if (indexOrder >= 0) {
            rows = rows.sort((rowA, rowB) => {
                const valA = rowA[indexOrder] as number;
                const valB = rowB[indexOrder] as number;
                return valA - valB; // Tri croissant (1, 2, 3...)
            });
        }

        // --- 3. CREATION HTML ---
        const container = document.createElement("div");
        container.className = "container";

        const leftDiv = document.createElement("div");
        leftDiv.className = "column-block";
        leftDiv.innerHTML = "<div class='header-main'>CHARGES</div>";
        const leftTable = document.createElement("table");
        leftDiv.appendChild(leftTable);

        const rightDiv = document.createElement("div");
        rightDiv.className = "column-block";
        rightDiv.innerHTML = "<div class='header-main'>PRODUITS</div>";
        const rightTable = document.createElement("table");
        rightDiv.appendChild(rightTable);

        // --- 4. BOUCLE D'AFFICHAGE ---
        rows.forEach(row => {
            let label = (indexLibelle >= 0 && row[indexLibelle]) ? row[indexLibelle].toString() : "";
            const rawAmount = (indexMontant >= 0 && row[indexMontant] != null) ? row[indexMontant] : null;
            const position = (indexCote >= 0 && row[indexCote]) ? row[indexCote].toString().toLowerCase() : "g";
            const type = (indexType >= 0 && row[indexType]) ? row[indexType].toString().toLowerCase() : "normal";
            if (!label || label.trim() === "") {
                label = "\u00A0"; 
            }
            // Formatage Monétaire
            let displayAmount = "";
            
            // CORRECTION ICI : On vérifie si c'est 0
            // On convertit en nombre pour être sûr
            const numericAmount = rawAmount !== null ? Number(rawAmount) : 0;

            if (rawAmount !== null && rawAmount !== "") {
                // Si c'est 0 sur une ligne normale, on veut du vide (pas "0 €")
                if (numericAmount === 0 && type === "normal") {
                    displayAmount = ""; 
                } else {
                    displayAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(numericAmount);
                }
            }

            const tr = document.createElement("tr");

            // Gestion des styles
            if (type.includes("header") || type.includes("titre")) {
                tr.className = "row-header";
                displayAmount = ""; // Toujours vide pour les titres
            } else if (type.includes("total")) {
                tr.className = "row-total";
            } else {
                tr.className = "row-normal";
            }

            const tdName = document.createElement("td");
            tdName.innerText = label;
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.className = "amount-cell";
            tdAmount.innerText = displayAmount;
            tr.appendChild(tdAmount);

            if (position.includes("d") || position.includes("right")) {
                rightTable.appendChild(tr);
            } else {
                leftTable.appendChild(tr);
            }
        });

        container.appendChild(leftDiv);
        container.appendChild(rightDiv);
        this.target.appendChild(container);
    }
}