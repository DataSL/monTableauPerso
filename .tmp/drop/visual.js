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
    divContainer;
    flexContainer;
    leftColumn;
    rightColumn;
    tableLeft;
    tableRight;
    allRowsData = [];
    categoricalData;
    currentSelectedLabel = "";
    // Titres par défaut
    titleLeft = "CHARGES";
    titleRight = "PRODUITS";
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper";
        this.target.appendChild(this.divContainer);
        this.flexContainer = document.createElement("div");
        this.flexContainer.className = "accounting-container";
        this.divContainer.appendChild(this.flexContainer);
        this.leftColumn = document.createElement("div");
        this.leftColumn.className = "half-column";
        this.tableLeft = document.createElement("table");
        this.leftColumn.appendChild(this.tableLeft);
        this.flexContainer.appendChild(this.leftColumn);
        this.rightColumn = document.createElement("div");
        this.rightColumn.className = "half-column";
        this.tableRight = document.createElement("table");
        this.rightColumn.appendChild(this.tableRight);
        this.flexContainer.appendChild(this.rightColumn);
    }
    update(options) {
        this.tableLeft.innerHTML = "";
        this.tableRight.innerHTML = "";
        this.allRowsData = [];
        const dataView = options.dataViews[0];
        if (!dataView || !dataView.categorical || !dataView.categorical.categories)
            return;
        this.categoricalData = dataView.categorical;
        const categories = dataView.categorical.categories[0];
        const values = dataView.categorical.values ? dataView.categorical.values[0] : null;
        // 1. Lecture des Titres personnalisés (Menu 0)
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["enTetes"]) {
            const titles = dataView.metadata.objects["enTetes"];
            if (titles["titleLeft"])
                this.titleLeft = titles["titleLeft"];
            if (titles["titleRight"])
                this.titleRight = titles["titleRight"];
        }
        // 2. Lecture Sélection (Menu 1)
        if (dataView.metadata && dataView.metadata.objects && dataView.metadata.objects["selectionMenu"]) {
            this.currentSelectedLabel = dataView.metadata.objects["selectionMenu"]["ligneActive"];
        }
        if (!this.currentSelectedLabel && categories.values.length > 0) {
            this.currentSelectedLabel = categories.values[0].toString();
        }
        // 3. Boucle Données
        categories.values.forEach((catValue, index) => {
            const label = catValue.toString();
            let row = {
                label: label,
                amount: values ? values.values[index]?.toString() : "",
                columnSide: "left",
                sortIndex: index,
                marginBottom: 0,
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
                    if (style["columnPosition"])
                        row.columnSide = style["columnPosition"];
                    if (style["ordreTri"] !== undefined)
                        row.sortIndex = style["ordreTri"];
                    // Lecture de la marge
                    if (style["marginBottom"])
                        row.marginBottom = style["marginBottom"];
                    if (style["fontFamily"])
                        row.font = style["fontFamily"];
                    if (style["fontSize"])
                        row.fontSize = style["fontSize"];
                    if (style["bgLabel"])
                        row.bgLabel = style["bgLabel"].solid.color;
                    if (style["fillLabel"])
                        row.colorLabel = style["fillLabel"].solid.color;
                    if (style["boldLabel"] !== undefined)
                        row.boldLabel = style["boldLabel"];
                    if (style["italicLabel"] !== undefined)
                        row.italicLabel = style["italicLabel"];
                    if (style["bgAmount"])
                        row.bgAmount = style["bgAmount"].solid.color;
                    if (style["fillAmount"])
                        row.colorAmount = style["fillAmount"].solid.color;
                    if (style["boldAmount"] !== undefined)
                        row.boldAmount = style["boldAmount"];
                }
            }
            this.allRowsData.push(row);
        });
        const renderTable = (targetTable, title, rows) => {
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
                const tr = document.createElement("tr");
                let finalAmount = "";
                let rawVal = parseFloat(row.amount);
                if (row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    finalAmount = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0 }).format(rawVal);
                }
                tr.style.fontFamily = row.font;
                tr.style.fontSize = row.fontSize + "px";
                // --- GESTION DE L'ESPACE SANS DONNÉES VIDES ---
                if (row.marginBottom > 0) {
                    // On triche : on ajoute une bordure transparente en bas de la ligne
                    // Cela crée un espace visuel qui pousse la ligne suivante
                    const spacerHeight = row.marginBottom + "px";
                    // Pour que ça marche bien sur les td
                    tr.style.height = `calc(30px + ${spacerHeight})`;
                }
                const tdName = document.createElement("td");
                tdName.innerText = row.label;
                tdName.style.backgroundColor = row.bgLabel;
                tdName.style.color = row.colorLabel;
                if (row.boldLabel)
                    tdName.style.fontWeight = "bold";
                if (row.italicLabel)
                    tdName.style.fontStyle = "italic";
                // Application de la marge sur les cellules
                if (row.marginBottom > 0) {
                    tdName.style.borderBottom = `${row.marginBottom}px solid transparent`;
                    tdName.style.backgroundClip = "padding-box"; // Important pour ne pas colorer la bordure
                }
                tr.appendChild(tdName);
                const tdAmount = document.createElement("td");
                tdAmount.innerText = finalAmount;
                tdAmount.style.textAlign = "right";
                tdAmount.style.backgroundColor = row.bgAmount;
                tdAmount.style.color = row.colorAmount;
                if (row.boldAmount)
                    tdAmount.style.fontWeight = "bold";
                // Application de la marge sur les cellules
                if (row.marginBottom > 0) {
                    tdAmount.style.borderBottom = `${row.marginBottom}px solid transparent`;
                    tdAmount.style.backgroundClip = "padding-box";
                }
                tr.appendChild(tdAmount);
                tbody.appendChild(tr);
            });
            targetTable.appendChild(tbody);
        };
        const leftRows = this.allRowsData.filter(r => r.columnSide !== "right");
        const rightRows = this.allRowsData.filter(r => r.columnSide === "right");
        renderTable(this.tableLeft, this.titleLeft, leftRows);
        renderTable(this.tableRight, this.titleRight, rightRows);
    }
    enumerateObjectInstances(options) {
        const instances = [];
        if (!this.categoricalData)
            return instances;
        const categories = this.categoricalData.categories[0];
        // MENU 0 : TITRES
        if (options.objectName === "enTetes") {
            instances.push({
                objectName: "enTetes", selector: null,
                properties: { titleLeft: this.titleLeft, titleRight: this.titleRight }
            });
        }
        // MENU 1
        if (options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu", selector: null,
                properties: { ligneActive: this.currentSelectedLabel }
            });
        }
        // --- MENU 2 ---
        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();
                let props = {
                    columnPosition: "left", marginBottom: 0, ordreTri: indexChoisi,
                    fontFamily: "", fontSize: 12,
                    bgLabel: { solid: { color: "" } }, fillLabel: { solid: { color: "black" } },
                    boldLabel: false, italicLabel: false,
                    bgAmount: { solid: { color: "" } }, fillAmount: { solid: { color: "black" } }, boldAmount: false
                };
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["columnPosition"])
                            props.columnPosition = style["columnPosition"];
                        if (style["marginBottom"] !== undefined)
                            props.marginBottom = style["marginBottom"];
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
                    // CORRECTION ICI : Nom statique pour forcer l'affichage des propriétés
                    displayName: "Réglages de la ligne",
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