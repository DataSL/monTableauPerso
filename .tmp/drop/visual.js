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
        // 1. Lire le nom écrit par l'utilisateur
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"];
        }
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }
        // 2. Construire les données
        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();
            // Paramètres par défaut
            let rowSettings = {
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
                    if (style["ordreTri"] !== undefined)
                        rowSettings.sortIndex = style["ordreTri"];
                    if (style["fontFamily"])
                        rowSettings.font = style["fontFamily"];
                    if (style["fontSize"])
                        rowSettings.fontSize = style["fontSize"];
                    // Libellé
                    if (style["bgLabel"])
                        rowSettings.bgLabel = style["bgLabel"].solid.color;
                    if (style["fillLabel"])
                        rowSettings.colorLabel = style["fillLabel"].solid.color;
                    if (style["boldLabel"] !== undefined)
                        rowSettings.boldLabel = style["boldLabel"];
                    if (style["italicLabel"] !== undefined)
                        rowSettings.italicLabel = style["italicLabel"];
                    // Montant
                    if (style["bgAmount"])
                        rowSettings.bgAmount = style["bgAmount"].solid.color;
                    if (style["fillAmount"])
                        rowSettings.colorAmount = style["fillAmount"].solid.color;
                    if (style["boldAmount"] !== undefined)
                        rowSettings.boldAmount = style["boldAmount"];
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
            if (row.boldLabel)
                tdName.style.fontWeight = "bold";
            if (row.italicLabel)
                tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);
            // --- CELLULE MONTANT ---
            const tdAmount = document.createElement("td");
            tdAmount.innerText = displayAmount;
            tdAmount.style.textAlign = "right";
            // Style individuel
            tdAmount.style.backgroundColor = row.bgAmount; // Fond Droite
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount)
                tdAmount.style.fontWeight = "bold";
            tr.appendChild(tdAmount);
            tbody.appendChild(tr);
        });
        this.table.appendChild(tbody);
    }
    enumerateObjectInstances(options) {
        const instances = [];
        if (!this.categoricalData)
            return instances;
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
                let props = {
                    ordreTri: indexChoisi,
                    fontFamily: "",
                    fontSize: 12,
                    // Gauche
                    bgLabel: { solid: { color: "" } },
                    fillLabel: { solid: { color: "black" } },
                    boldLabel: false,
                    italicLabel: false,
                    // Droite
                    bgAmount: { solid: { color: "" } },
                    fillAmount: { solid: { color: "black" } },
                    boldAmount: false
                };
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["ordreTri"] !== undefined)
                            props.ordreTri = style["ordreTri"];
                        if (style["fontFamily"])
                            props.fontFamily = style["fontFamily"];
                        if (style["fontSize"])
                            props.fontSize = style["fontSize"];
                        if (style["bgLabel"])
                            props.bgLabel = style["bgLabel"];
                        if (style["fillLabel"])
                            props.fillLabel = style["fillLabel"];
                        if (style["boldLabel"] !== undefined)
                            props.boldLabel = style["boldLabel"];
                        if (style["italicLabel"] !== undefined)
                            props.italicLabel = style["italicLabel"];
                        if (style["bgAmount"])
                            props.bgAmount = style["bgAmount"];
                        if (style["fillAmount"])
                            props.fillAmount = style["fillAmount"];
                        if (style["boldAmount"] !== undefined)
                            props.boldAmount = style["boldAmount"];
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