var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });


class Visual {
    target;
    constructor(options) {
        this.target = options.element;
    }
    update(options) {
        this.target.innerHTML = "";
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.table)
            return;
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
                if (col.roles["category"])
                    indexLibelle = index;
                if (col.roles["measure"])
                    indexMontant = index;
                if (col.roles["position"])
                    indexCote = index;
                if (col.roles["rowType"])
                    indexType = index;
                if (col.roles["order"])
                    indexOrder = index; // On repère la colonne Ordre
            }
        });
        // --- 2. TRIER LES LIGNES (CORRECTION DU PROBLEME) ---
        // Si on a trouvé la colonne ordre, on trie le tableau rows
        if (indexOrder >= 0) {
            rows = rows.sort((rowA, rowB) => {
                const valA = rowA[indexOrder];
                const valB = rowB[indexOrder];
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
                }
                else {
                    displayAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(numericAmount);
                }
            }
            const tr = document.createElement("tr");
            // Gestion des styles
            if (type.includes("header") || type.includes("titre")) {
                tr.className = "row-header";
                displayAmount = ""; // Toujours vide pour les titres
            }
            else if (type.includes("total")) {
                tr.className = "row-total";
            }
            else {
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
            }
            else {
                leftTable.appendChild(tr);
            }
        });
        container.appendChild(leftDiv);
        container.appendChild(rightDiv);
        this.target.appendChild(container);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it declares 'monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG' on top-level, which conflicts with the current library output.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (visualPlugin)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(370);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG = {
    name: 'monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG',
    displayName: 'monTableauPerso',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__/* .Visual */ .b(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId, options, initialState) => {
        const dialogRegistry = globalThis.dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG"] = monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
}
/* harmony default export */ const visualPlugin = (monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG);

})();

monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=https://localhost:8080/assets/visual.js.map