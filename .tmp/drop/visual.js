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
    table;
    host;
    categories;
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        this.table = document.createElement("table");
        this.target.appendChild(this.table);
    }
    update(options) {
        this.table.innerHTML = "";
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories)
            return;
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
        if (valuesColumns) {
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
                        textColor = props["couleurTexte"].solid.color;
                    // Couleur Fond (<--- NOUVEAU)
                    if (props["arrierePlan"])
                        bgColor = props["arrierePlan"].solid.color;
                    // Taille
                    if (props["taillePolice"])
                        fontSize = props["taillePolice"];
                    // Police (<--- NOUVEAU)
                    if (props["police"])
                        fontFamily = props["police"];
                }
            }
            // 3. Application du style CSS
            tr.style.color = textColor;
            tr.style.backgroundColor = bgColor; // <--- NOUVEAU
            tr.style.fontSize = fontSize + "px";
            tr.style.fontFamily = fontFamily; // <--- NOUVEAU
            // Remplissage des cellules
            const tdCat = document.createElement("td");
            tdCat.innerText = categoryValue.toString();
            tr.appendChild(tdCat);
            if (valuesColumns) {
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
    enumerateObjectInstances(options) {
        const instances = [];
        if (!this.categories)
            return instances;
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
                            currentTextColor = obj["configLigne"]["couleurTexte"].solid.color;
                        // Lecture Fond (<--- NOUVEAU)
                        if (obj["configLigne"]["arrierePlan"])
                            currentBgColor = obj["configLigne"]["arrierePlan"].solid.color;
                        // Lecture Taille
                        if (obj["configLigne"]["taillePolice"])
                            currentSize = obj["configLigne"]["taillePolice"];
                        // Lecture Police (<--- NOUVEAU)
                        if (obj["configLigne"]["police"])
                            currentFont = obj["configLigne"]["police"];
                    }
                }
                instances.push({
                    objectName: "configLigne",
                    displayName: value.toString(),
                    selector: selectionId.getSelector(),
                    properties: {
                        couleurTexte: { solid: { color: currentTextColor } },
                        arrierePlan: { solid: { color: currentBgColor } },
                        taillePolice: currentSize,
                        police: currentFont // <--- NOUVEAU
                    }
                });
            });
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