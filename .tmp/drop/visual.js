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
    host;
    table;
    allRowsData = [];
    categoricalData;
    // Pour stocker quel nom est actuellement choisi dans la liste déroulante
    currentSelectedLabel = "";
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        this.table = document.createElement("table");
        this.target.appendChild(this.table);
    }
    update(options) {
        this.table.innerHTML = "";
        this.allRowsData = [];
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories)
            return;
        this.categoricalData = dataView.categorical;
        const categories = dataView.categorical.categories[0];
        const values = dataView.categorical.values ? dataView.categorical.values[0] : null;
        // 1. Récupérer le choix de l'utilisateur (Quelle ligne veut-il modifier ?)
        // On regarde dans les "objects" globaux (metadata)
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"];
        }
        // Si rien n'est sélectionné, on prend la première ligne par défaut
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }
        // 2. Construire les données
        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();
            // Valeurs par défaut
            let rowSettings = {
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
                    if (style["ordreTri"] !== undefined)
                        rowSettings.sortIndex = style["ordreTri"];
                    if (style["fill"])
                        rowSettings.color = style["fill"].solid.color;
                    if (style["background"])
                        rowSettings.bgColor = style["background"].solid.color;
                    if (style["fontFamily"])
                        rowSettings.font = style["fontFamily"];
                    if (style["fontSize"])
                        rowSettings.fontSize = style["fontSize"];
                    if (style["bold"])
                        rowSettings.isBold = style["bold"];
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
            if (row.isBold)
                tr.style.fontWeight = "bold";
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
    enumerateObjectInstances(options) {
        const instances = [];
        if (!this.categoricalData)
            return instances;
        const categories = this.categoricalData.categories[0];
        // MENU 1 : LA LISTE DÉROULANTE
        if (options.objectName === "selectionMenu") {
            // On crée dynamiquement la liste des choix possibles (toutes les lignes du tableau)
            const rowNames = categories.values.map(v => v.toString());
            instances.push({
                objectName: "selectionMenu",
                selector: null,
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
                        if (style["ordreTri"] !== undefined)
                            currentOrdre = style["ordreTri"];
                        if (style["bold"] !== undefined)
                            currentBold = style["bold"];
                        if (style["fill"])
                            currentFill = style["fill"].solid.color;
                        if (style["background"])
                            currentBg = style["background"].solid.color;
                        if (style["fontFamily"])
                            currentFont = style["fontFamily"];
                        if (style["fontSize"])
                            currentSize = style["fontSize"];
                    }
                }
                instances.push({
                    objectName: "styleLigne",
                    displayName: "Paramètres de : " + this.currentSelectedLabel,
                    selector: selectionId.getSelector(),
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