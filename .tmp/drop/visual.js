var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SC: () => (/* binding */ VisualFormattingSettingsModel),
/* harmony export */   gj: () => (/* binding */ ManualLineSettings)
/* harmony export */ });
/* unused harmony exports TitresColonnesSettings, SelectionMenuSettings, StyleLigneSettings, TableBordersSettings */
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.SimpleCard */ .z.Tn;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.Model */ .z.Kx;
// =========================================================
// 0. TITRES COLONNES (Génération dynamique)
// =========================================================
class TitresColonnesSettings extends FormattingSettingsCard {
    name = "titresColonnes";
    displayName = "0. TITRES COLONNES";
    slices = [];
    constructor() {
        super();
        for (let i = 1; i <= 20; i++) {
            this.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
                name: "titre" + i,
                displayName: "Titre Col " + i,
                value: "",
                placeholder: "Titre..." // CORRECTION: Placeholder obligatoire
            }));
        }
    }
}
// =========================================================
// 1. MENU DE SÉLECTION
// =========================================================
class SelectionMenuSettings extends FormattingSettingsCard {
    name = "selectionMenu";
    displayName = "1. SÉLECTION (Excel)";
    ligneActive = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "ligneActive",
        displayName: "Nom exact de la ligne active",
        value: "",
        placeholder: "Ex: Chiffre d'affaires" // CORRECTION
    });
    slices = [this.ligneActive];
}
// =========================================================
// 2. STYLE DE LIGNE
// =========================================================
class StyleLigneSettings extends FormattingSettingsCard {
    name = "styleLigne";
    displayName = "2. PERSONNALISATION (Excel)";
    // CORRECTION: Ajout explicite du selector pour éviter l'erreur TS
    selector;
    // Positionnement
    columnIndex = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "columnIndex", displayName: "N° Colonne", value: 1
    });
    ordreTri = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "ordreTri", displayName: "Position", value: 0
    });
    // Marges
    marginTop = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    marginBottom = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "marginBottom", displayName: "Marge Bas", value: 0
    });
    marginColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "marginColor", displayName: "Couleur Marge", value: { value: "transparent" }
    });
    // Visibilité / Header
    isHidden = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "isHidden", displayName: "MASQUER", value: false
    });
    isHeader = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "isHeader", displayName: "Mode Titre", value: false
    });
    // Contenu
    customLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "customLabel", displayName: "Renommer", value: "",
        placeholder: "Nouveau nom..." // CORRECTION
    });
    customAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "customAmount", displayName: "Remplacer Montant", value: "",
        placeholder: "Valeur ou vide..." // CORRECTION
    });
    // Police
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize", displayName: "Taille", value: 12
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.FontPicker */ .z.Cx({
        name: "fontFamily", displayName: "Police", value: "'Segoe UI', sans-serif"
    });
    // Style Libellé
    bgLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "bgLabel", displayName: "Fond Libellé", value: { value: "transparent" }
    });
    fillLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fillLabel", displayName: "Texte Libellé", value: { value: "black" }
    });
    boldLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "boldLabel", displayName: "Gras (L)", value: false
    });
    italicLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "italicLabel", displayName: "Italique (L)", value: false
    });
    // Style Prix
    bgAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "bgAmount", displayName: "Fond Prix", value: { value: "transparent" }
    });
    fillAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "fillAmount", displayName: "Texte Prix", value: { value: "black" }
    });
    boldAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "boldAmount", displayName: "Gras (P)", value: false
    });
    // Bordures spécifiques
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "borderColor", displayName: "Couleur Bordure", value: { value: "#eee" }
    });
    slices = [
        this.columnIndex, this.ordreTri,
        this.isHidden, this.isHeader,
        this.marginTop, this.marginBottom, this.marginColor,
        this.customLabel, this.customAmount,
        this.fontSize, this.fontFamily,
        this.fillLabel, this.bgLabel, this.boldLabel, this.italicLabel,
        this.fillAmount, this.bgAmount, this.boldAmount,
        this.borderWidth, this.borderColor
    ];
}
// =========================================================
// LIGNES MANUELLES
// =========================================================
class ManualLineSettings extends FormattingSettingsCard {
    text = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.TextInput */ .z.ks({
        name: "text", displayName: "Texte", value: "Nouvelle Ligne",
        placeholder: "Libellé..." // CORRECTION
    });
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "show", displayName: "Afficher", value: false
    });
    col = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "col", displayName: "Colonne", value: 1
    });
    pos = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "pos", displayName: "Position", value: 0
    });
    isHeader = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "isHeader", displayName: "Titre", value: false
    });
    bgColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "bgColor", displayName: "Fond", value: { value: "transparent" }
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "textColor", displayName: "Texte", value: { value: "black" }
    });
    marginTop = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "fontSize", displayName: "Taille", value: 12
    });
    bold = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "bold", displayName: "Gras", value: false
    });
    italic = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ToggleSwitch */ .z.jF({
        name: "italic", displayName: "Italique", value: false
    });
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "borderColor", displayName: "Couleur Bordure", value: { value: "#eee" }
    });
    slices = [
        this.show, this.text, this.col, this.pos,
        this.isHeader, this.marginTop,
        this.textColor, this.bgColor,
        this.fontSize, this.bold, this.italic,
        this.borderWidth, this.borderColor
    ];
}
// =========================================================
// BORDURES TABLEAU GLOBAL
// =========================================================
class TableBordersSettings extends FormattingSettingsCard {
    name = "tableBorders";
    displayName = "🔲 BORDURES TABLEAU";
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "borderWidth", displayName: "Largeur", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ColorPicker */ .z.sk({
        name: "borderColor", displayName: "Couleur", value: { value: "rgba(0,0,0,0.25)" }
    });
    borderStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.ItemDropdown */ .z.PA({
        name: "borderStyle",
        displayName: "Style",
        value: { value: "solid", displayName: "Plein" },
        items: [
            { value: "solid", displayName: "Plein" },
            { value: "dashed", displayName: "Tirets" },
            { value: "dotted", displayName: "Pointillés" },
            { value: "double", displayName: "Double" }
        ]
    });
    borderRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .formattingSettings.NumUpDown */ .z.iB({
        name: "borderRadius", displayName: "Arrondi", value: 8
    });
    slices = [
        this.borderWidth, this.borderColor, this.borderStyle, this.borderRadius
    ];
}
// =========================================================
// MODÈLE PRINCIPAL
// =========================================================
class VisualFormattingSettingsModel extends FormattingSettingsModel {
    titresColonnes = new TitresColonnesSettings();
    selectionMenu = new SelectionMenuSettings();
    styleLigne = new StyleLigneSettings();
    tableBorders = new TableBordersSettings();
    cards = [
        this.titresColonnes,
        this.selectionMenu,
        this.styleLigne,
        this.tableBorders
    ];
}


/***/ }),

/***/ 639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getPropertyValue),
/* harmony export */   y: () => (/* binding */ getDescriptor)
/* harmony export */ });
/**
 * Build and return formatting descriptor for simple slice
 *
 * @param objectName Object name from capabilities
 * @param slice formatting simple slice
 * @returns simple slice formatting descriptor
 */
function getDescriptor(objectName, slice) {
    return {
        objectName: objectName,
        propertyName: slice.name,
        selector: slice.selector,
        altConstantValueSelector: slice.altConstantSelector,
        instanceKind: slice.instanceKind
    };
}
/**
 * Get property value from dataview objects if exists
 * Else return the default value from formatting settings object
 *
 * @param value dataview object value
 * @param defaultValue formatting settings default value
 * @returns formatting property value
 */
function getPropertyValue(slice, value, defaultValue) {
    if (value == null || (typeof value === "object" && !value.solid)) {
        return defaultValue;
    }
    if (value.solid) {
        return { value: value === null || value === void 0 ? void 0 : value.solid.color };
    }
    if (slice === null || slice === void 0 ? void 0 : slice.items) {
        let itemsArray = slice.items;
        return itemsArray.find(item => item.value == value);
    }
    return value;
}
//# sourceMappingURL=FormattingSettingsUtils.js.map

/***/ }),

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export FormattingSettingsService */
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);

class FormattingSettingsService {
    constructor(localizationManager) {
        this.localizationManager = localizationManager;
    }
    /**
     * Build visual formatting settings model from metadata dataView
     *
     * @param dataViews metadata dataView object
     * @returns visual formatting settings model
     */
    populateFormattingSettingsModel(typeClass, dataView) {
        var _a, _b;
        let defaultSettings = new typeClass();
        let dataViewObjects = (_a = dataView === null || dataView === void 0 ? void 0 : dataView.metadata) === null || _a === void 0 ? void 0 : _a.objects;
        if (dataViewObjects) {
            // loop over each formatting property and set its new value if exists
            (_b = defaultSettings.cards) === null || _b === void 0 ? void 0 : _b.forEach((card) => {
                var _a;
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ? [card] : card.groups);
                cardGroupInstances.forEach((cardGroupInstance) => {
                    var _a, _b, _c, _d;
                    // Set current top level toggle value
                    (_a = cardGroupInstance.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                    (_b = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.slices) === null || _b === void 0 ? void 0 : _b.forEach((slice) => {
                        slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                    });
                    (_d = (_c = cardGroupInstance === null || cardGroupInstance === void 0 ? void 0 : cardGroupInstance.container) === null || _c === void 0 ? void 0 : _c.containerItems) === null || _d === void 0 ? void 0 : _d.forEach((containerItem) => {
                        var _a;
                        (_a = containerItem === null || containerItem === void 0 ? void 0 : containerItem.slices) === null || _a === void 0 ? void 0 : _a.forEach((slice) => {
                            slice === null || slice === void 0 ? void 0 : slice.setPropertiesValues(dataViewObjects, card.name);
                        });
                    });
                });
            });
        }
        return defaultSettings;
    }
    /**
     * Build formatting model by parsing formatting settings model object
     *
     * @returns powerbi visual formatting model
     */
    buildFormattingModel(formattingSettingsModel) {
        let formattingModel = {
            cards: []
        };
        formattingSettingsModel.cards
            .filter(({ visible = true }) => visible)
            .forEach((card) => {
            var _a;
            let formattingCard = {
                displayName: (this.localizationManager && card.displayNameKey) ? this.localizationManager.getDisplayName(card.displayNameKey) : card.displayName,
                description: (this.localizationManager && card.descriptionKey) ? this.localizationManager.getDisplayName(card.descriptionKey) : card.description,
                groups: [],
                uid: card.name + "-card",
                analyticsPane: card.analyticsPane,
            };
            const objectName = card.name;
            if (card.topLevelSlice) {
                let topLevelToggleSlice = card.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                topLevelToggleSlice.suppressDisplayName = true;
                formattingCard.topLevelToggle = topLevelToggleSlice;
            }
            (_a = card.onPreProcess) === null || _a === void 0 ? void 0 : _a.call(card);
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn;
            const cardGroupInstances = (isSimpleCard ?
                [card].filter(({ visible = true }) => visible) :
                card.groups.filter(({ visible = true }) => visible));
            cardGroupInstances
                .forEach((cardGroupInstance) => {
                const groupUid = cardGroupInstance.name + "-group";
                // Build formatting group for each group
                const formattingGroup = {
                    displayName: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.displayNameKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.displayNameKey) : cardGroupInstance.displayName,
                    description: isSimpleCard ? undefined : (this.localizationManager && cardGroupInstance.descriptionKey)
                        ? this.localizationManager.getDisplayName(cardGroupInstance.descriptionKey) : cardGroupInstance.description,
                    slices: [],
                    uid: groupUid,
                    collapsible: cardGroupInstance.collapsible,
                    delaySaveSlices: cardGroupInstance.delaySaveSlices,
                    disabled: cardGroupInstance.disabled,
                    disabledReason: cardGroupInstance.disabledReason,
                };
                formattingCard.groups.push(formattingGroup);
                // In case formatting model adds data points or top categories (Like when you modify specific visual category color).
                // these categories use same object name and property name from capabilities and the generated uid will be the same for these formatting categories properties
                // Solution => Save slice names to modify each slice uid to be unique by adding counter value to the new slice uid
                const sliceNames = {};
                // Build formatting container slice for each property
                if (cardGroupInstance.container) {
                    const container = cardGroupInstance.container;
                    const containerUid = groupUid + "-container";
                    const formattingContainer = {
                        displayName: (this.localizationManager && container.displayNameKey)
                            ? this.localizationManager.getDisplayName(container.displayNameKey) : container.displayName,
                        description: (this.localizationManager && container.descriptionKey)
                            ? this.localizationManager.getDisplayName(container.descriptionKey) : container.description,
                        containerItems: [],
                        uid: containerUid
                    };
                    container.containerItems.forEach((containerItem) => {
                        // Build formatting container item object
                        const containerIemName = containerItem.displayNameKey ? containerItem.displayNameKey : containerItem.displayName;
                        const containerItemUid = containerUid + containerIemName;
                        let formattingContainerItem = {
                            displayName: (this.localizationManager && containerItem.displayNameKey)
                                ? this.localizationManager.getDisplayName(containerItem.displayNameKey) : containerItem.displayName,
                            slices: [],
                            uid: containerItemUid
                        };
                        // Build formatting slices and add them to current formatting container item
                        this.buildFormattingSlices({ slices: containerItem.slices, objectName, sliceNames, formattingSlices: formattingContainerItem.slices });
                        formattingContainer.containerItems.push(formattingContainerItem);
                    });
                    formattingGroup.container = formattingContainer;
                }
                if (cardGroupInstance.slices) {
                    if (cardGroupInstance.topLevelSlice) {
                        let topLevelToggleSlice = cardGroupInstance.topLevelSlice.getFormattingSlice(objectName, this.localizationManager);
                        topLevelToggleSlice.suppressDisplayName = true;
                        (formattingGroup.displayName == undefined ? formattingCard : formattingGroup).topLevelToggle = topLevelToggleSlice;
                    }
                    // Build formatting slice for each property
                    this.buildFormattingSlices({ slices: cardGroupInstance.slices, objectName, sliceNames, formattingSlices: formattingGroup.slices });
                }
            });
            formattingCard.revertToDefaultDescriptors = this.getRevertToDefaultDescriptor(card);
            formattingModel.cards.push(formattingCard);
        });
        return formattingModel;
    }
    buildFormattingSlices({ slices, objectName, sliceNames, formattingSlices }) {
        // Filter slices based on their visibility
        slices === null || slices === void 0 ? void 0 : slices.filter(({ visible = true }) => visible).forEach((slice) => {
            let formattingSlice = slice === null || slice === void 0 ? void 0 : slice.getFormattingSlice(objectName, this.localizationManager);
            if (formattingSlice) {
                // Modify formatting slice uid if needed
                if (sliceNames[slice.name] === undefined) {
                    sliceNames[slice.name] = 0;
                }
                else {
                    sliceNames[slice.name]++;
                    formattingSlice.uid = `${formattingSlice.uid}-${sliceNames[slice.name]}`;
                }
                formattingSlices.push(formattingSlice);
            }
        });
    }
    getRevertToDefaultDescriptor(card) {
        var _a;
        // Proceeded slice names are saved to prevent duplicated default descriptors in case of using 
        // formatting categories & selectors, since they have the same descriptor objectName and propertyName
        const sliceNames = {};
        let revertToDefaultDescriptors = [];
        let cardSlicesDefaultDescriptors;
        let cardContainerSlicesDefaultDescriptors = [];
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .CompositeCard */ .St && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__/* .SimpleCard */ .Tn ?
            [card].filter(({ visible = true }) => visible) :
            card.groups.filter(({ visible = true }) => visible));
        cardGroupInstances.forEach((cardGroupInstance) => {
            var _a, _b;
            cardSlicesDefaultDescriptors = this.getSlicesRevertToDefaultDescriptor(card.name, cardGroupInstance.slices, sliceNames, cardGroupInstance.topLevelSlice);
            (_b = (_a = cardGroupInstance.container) === null || _a === void 0 ? void 0 : _a.containerItems) === null || _b === void 0 ? void 0 : _b.forEach((containerItem) => {
                cardContainerSlicesDefaultDescriptors = cardContainerSlicesDefaultDescriptors.concat(this.getSlicesRevertToDefaultDescriptor(card.name, containerItem.slices, sliceNames));
            });
            revertToDefaultDescriptors.push(...cardSlicesDefaultDescriptors.concat(cardContainerSlicesDefaultDescriptors));
        });
        return revertToDefaultDescriptors;
    }
    getSlicesRevertToDefaultDescriptor(cardName, slices, sliceNames, topLevelSlice) {
        let revertToDefaultDescriptors = [];
        if (topLevelSlice) {
            sliceNames[topLevelSlice.name] = true;
            revertToDefaultDescriptors = revertToDefaultDescriptors.concat(topLevelSlice.getRevertToDefaultDescriptor(cardName));
        }
        slices === null || slices === void 0 ? void 0 : slices.forEach((slice) => {
            if (slice && !sliceNames[slice.name]) {
                sliceNames[slice.name] = true;
                revertToDefaultDescriptors = revertToDefaultDescriptors.concat(slice.getRevertToDefaultDescriptor(cardName));
            }
        });
        return revertToDefaultDescriptors;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormattingSettingsService);
//# sourceMappingURL=FormattingSettingsService.js.map

/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   z: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(754);
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(667);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cx: () => (/* binding */ FontPicker),
/* harmony export */   Kx: () => (/* binding */ Model),
/* harmony export */   PA: () => (/* binding */ ItemDropdown),
/* harmony export */   St: () => (/* binding */ CompositeCard),
/* harmony export */   Tn: () => (/* binding */ SimpleCard),
/* harmony export */   iB: () => (/* binding */ NumUpDown),
/* harmony export */   jF: () => (/* binding */ ToggleSwitch),
/* harmony export */   ks: () => (/* binding */ TextInput),
/* harmony export */   sk: () => (/* binding */ ColorPicker)
/* harmony export */ });
/* unused harmony exports CardGroupEntity, Group, SimpleSlice, AlignmentGroup, Slider, DatePicker, AutoDropdown, DurationPicker, ErrorRangeControl, FieldPicker, ItemFlagsSelection, AutoFlagsSelection, TextArea, GradientBar, ImageUpload, ListEditor, ReadOnlyText, ShapeMapSelector, CompositeSlice, FontControl, MarginPadding, Container, ContainerItem */
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(639);
/**
 * Powerbi utils components classes for custom visual formatting pane objects
 *
 */

class NamedEntity {
}
class CardGroupEntity extends NamedEntity {
}
class Model {
}
/** CompositeCard is use to populate a card into the formatting pane with multiple groups */
class CompositeCard extends NamedEntity {
}
class Group extends CardGroupEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
/** SimpleCard is use to populate a card into the formatting pane in a single group */
class SimpleCard extends CardGroupEntity {
}
class SimpleSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const sliceDisplayName = (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName;
        const sliceDescription = (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description;
        const componentDisplayName = {
            displayName: sliceDisplayName,
            description: sliceDescription,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName, localizationManager)
            } });
    }
    getFormattingComponent(objectName, localizationManager) {
        return {
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getDescriptor */ .y(objectName, this),
            value: this.value,
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return [{
                objectName: objectName,
                propertyName: this.name
            }];
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a;
        let newValue = (_a = dataViewObjects === null || dataViewObjects === void 0 ? void 0 : dataViewObjects[objectName]) === null || _a === void 0 ? void 0 : _a[this.name];
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__/* .getPropertyValue */ .D(this, newValue, this.value);
    }
}
class AlignmentGroup extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "AlignmentGroup" /* visuals.FormattingComponent.AlignmentGroup */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mode: this.mode, supportsNoSelection: this.supportsNoSelection });
    }
}
class ToggleSwitch extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ToggleSwitch" /* visuals.FormattingComponent.ToggleSwitch */;
    }
}
class ColorPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ColorPicker" /* visuals.FormattingComponent.ColorPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { defaultColor: this.defaultColor, isNoFillItemSupported: this.isNoFillItemSupported });
    }
}
class NumUpDown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "NumUpDown" /* visuals.FormattingComponent.NumUpDown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { options: this.options });
    }
}
class Slider extends NumUpDown {
    constructor() {
        super(...arguments);
        this.type = "Slider" /* visuals.FormattingComponent.Slider */;
    }
}
class DatePicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DatePicker" /* visuals.FormattingComponent.DatePicker */;
    }
    getFormattingComponent(objectName, localizationManager) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: (localizationManager && this.placeholderKey) ? localizationManager.getDisplayName(this.placeholderKey) : this.placeholder, validators: this.validators });
    }
}
class ItemDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoDropdown extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "Dropdown" /* visuals.FormattingComponent.Dropdown */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { mergeValues: this.mergeValues, filterValues: this.filterValues });
    }
}
class DurationPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "DurationPicker" /* visuals.FormattingComponent.DurationPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class ErrorRangeControl extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ErrorRangeControl" /* visuals.FormattingComponent.ErrorRangeControl */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators });
    }
}
class FieldPicker extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FieldPicker" /* visuals.FormattingComponent.FieldPicker */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { validators: this.validators, allowMultipleValues: this.allowMultipleValues });
    }
}
class ItemFlagsSelection extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { items: this.items });
    }
}
class AutoFlagsSelection extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FlagsSelection" /* visuals.FormattingComponent.FlagsSelection */;
    }
}
class TextInput extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "TextInput" /* visuals.FormattingComponent.TextInput */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { placeholder: this.placeholder });
    }
}
class TextArea extends TextInput {
    constructor() {
        super(...arguments);
        this.type = "TextArea" /* visuals.FormattingComponent.TextArea */;
    }
}
class FontPicker extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "FontPicker" /* visuals.FormattingComponent.FontPicker */;
    }
}
class GradientBar extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "GradientBar" /* visuals.FormattingComponent.GradientBar */;
    }
}
class ImageUpload extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ImageUpload" /* visuals.FormattingComponent.ImageUpload */;
    }
}
class ListEditor extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ListEditor" /* visuals.FormattingComponent.ListEditor */;
    }
}
class ReadOnlyText extends SimpleSlice {
    constructor() {
        super(...arguments);
        this.type = "ReadOnlyText" /* visuals.FormattingComponent.ReadOnlyText */;
    }
}
class ShapeMapSelector extends SimpleSlice {
    constructor(object) {
        super(object);
        this.type = "ShapeMapSelector" /* visuals.FormattingComponent.ShapeMapSelector */;
    }
    getFormattingComponent(objectName) {
        return Object.assign(Object.assign({}, super.getFormattingComponent(objectName)), { isAzMapReferenceSelector: this.isAzMapReferenceSelector });
    }
}
class CompositeSlice extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
    getFormattingSlice(objectName, localizationManager) {
        const controlType = this.type;
        const propertyName = this.name;
        const componentDisplayName = {
            displayName: (localizationManager && this.displayNameKey) ? localizationManager.getDisplayName(this.displayNameKey) : this.displayName,
            description: (localizationManager && this.descriptionKey) ? localizationManager.getDisplayName(this.descriptionKey) : this.description,
            uid: objectName + '-' + propertyName,
        };
        return Object.assign(Object.assign({}, componentDisplayName), { control: {
                type: controlType,
                properties: this.getFormattingComponent(objectName)
            } });
    }
}
class FontControl extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "FontControl" /* visuals.FormattingComponent.FontControl */;
    }
    getFormattingComponent(objectName) {
        var _a, _b, _c;
        return {
            fontFamily: this.fontFamily.getFormattingComponent(objectName),
            fontSize: this.fontSize.getFormattingComponent(objectName),
            bold: (_a = this.bold) === null || _a === void 0 ? void 0 : _a.getFormattingComponent(objectName),
            italic: (_b = this.italic) === null || _b === void 0 ? void 0 : _b.getFormattingComponent(objectName),
            underline: (_c = this.underline) === null || _c === void 0 ? void 0 : _c.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.fontFamily.getRevertToDefaultDescriptor(objectName)
            .concat(this.fontSize.getRevertToDefaultDescriptor(objectName))
            .concat(this.bold ? this.bold.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.italic ? this.italic.getRevertToDefaultDescriptor(objectName) : [])
            .concat(this.underline ? this.underline.getRevertToDefaultDescriptor(objectName) : []);
    }
    setPropertiesValues(dataViewObjects, objectName) {
        var _a, _b, _c;
        this.fontFamily.setPropertiesValues(dataViewObjects, objectName);
        this.fontSize.setPropertiesValues(dataViewObjects, objectName);
        (_a = this.bold) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, objectName);
        (_b = this.italic) === null || _b === void 0 ? void 0 : _b.setPropertiesValues(dataViewObjects, objectName);
        (_c = this.underline) === null || _c === void 0 ? void 0 : _c.setPropertiesValues(dataViewObjects, objectName);
    }
}
class MarginPadding extends CompositeSlice {
    constructor(object) {
        super(object);
        this.type = "MarginPadding" /* visuals.FormattingComponent.MarginPadding */;
    }
    getFormattingComponent(objectName) {
        return {
            left: this.left.getFormattingComponent(objectName),
            right: this.right.getFormattingComponent(objectName),
            top: this.top.getFormattingComponent(objectName),
            bottom: this.bottom.getFormattingComponent(objectName)
        };
    }
    getRevertToDefaultDescriptor(objectName) {
        return this.left.getRevertToDefaultDescriptor(objectName)
            .concat(this.right.getRevertToDefaultDescriptor(objectName))
            .concat(this.top.getRevertToDefaultDescriptor(objectName))
            .concat(this.bottom.getRevertToDefaultDescriptor(objectName));
    }
    setPropertiesValues(dataViewObjects, objectName) {
        this.left.setPropertiesValues(dataViewObjects, objectName);
        this.right.setPropertiesValues(dataViewObjects, objectName);
        this.top.setPropertiesValues(dataViewObjects, objectName);
        this.bottom.setPropertiesValues(dataViewObjects, objectName);
    }
}
class Container extends NamedEntity {
    constructor(object) {
        super();
        Object.assign(this, object);
    }
}
class ContainerItem extends (/* unused pure expression or super */ null && (NamedEntity)) {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(674);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(480);

// Importation du Service de formatage (FormattingSettingsService)



const DEV_MODE = false; // Passez à false pour la prod
class Visual {
    target;
    host;
    divContainer;
    flexContainer;
    allRowsData = [];
    categoricalData;
    currentSelectedLabel = "";
    columnTitles = [];
    metadata;
    toolbar;
    pendingChanges = new Map();
    manualLineKeys = [];
    areActionButtonsVisible = true;
    selectionManager;
    // Bordures globales du tableau
    tableBorderWidth = 1;
    tableBorderColor = "rgba(0, 0, 0, 0.25)";
    tableBorderStyle = "solid";
    tableBorderRadius = 8;
    // Modèle de formatage (API 5.1)
    formattingSettings;
    // Service de formatage (Nécessaire pour buildFormattingModel)
    formattingSettingsService;
    // License related properties
    licenseManager;
    currentUserValidPlans;
    hasServicePlans;
    isLicenseUnsupportedEnv;
    isLicenseInfoAvailable;
    // Helper centralisé pour persister les propriétés d'une ligne (merge safe + logs)
    persistStyle(selector, properties, objectName = "styleLigne") {
        // nettoyer les clés undefined
        Object.keys(properties || {}).forEach(k => { if (properties[k] === undefined)
            delete properties[k]; });
        try {
            // eslint-disable-next-line no-console
            console.log("PERSIST STYLE -> object:", objectName, "selector:", selector, "props:", properties);
            this.host.persistProperties({
                merge: [{
                        objectName: objectName,
                        selector: selector,
                        properties: properties
                    }]
            });
            // eslint-disable-next-line no-console
            console.log("PERSIST STYLE OK ->", objectName);
        }
        catch (err) {
            // eslint-disable-next-line no-console
            console.error("PERSIST STYLE ERROR:", err);
        }
    }
    handleLicenseNotification() {
        if (DEV_MODE)
            return; // Désactive tout en dev
        if (this.isLicenseUnsupportedEnv) {
            this.licenseManager.notifyLicenseRequired(1 /* LicenseNotificationType.UnsupportedEnv */);
        }
        else if (!this.hasServicePlans) {
            this.licenseManager.notifyLicenseRequired(2 /* LicenseNotificationType.VisualIsBlocked */);
        }
    }
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        // Initialisation du service de formatage
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__/* .FormattingSettingsService */ .O();
        // License Management
        this.licenseManager = options.host.licenseManager;
        this.licenseManager.getAvailableServicePlans()
            .then((result) => {
            this.isLicenseUnsupportedEnv = result.isLicenseUnsupportedEnv;
            this.isLicenseInfoAvailable = result.isLicenseInfoAvailable;
            if (this.isLicenseInfoAvailable && !this.isLicenseUnsupportedEnv) {
                this.currentUserValidPlans = result.plans?.filter((plan) => 
                // OPTIONNEL : Si vous voulez restreindre à un plan spécifique défini dans l'Espace Partenaires
                // (plan.spIdentifier === "mon_id_de_plan_partner_center") &&
                (plan.state === 1 /* ServicePlanState.Active */ || plan.state === 2 /* ServicePlanState.Warning */));
                this.hasServicePlans = !!this.currentUserValidPlans?.length;
            }
            this.handleLicenseNotification();
        })
            .catch((err) => {
            console.error("License check failed:", err);
            this.currentUserValidPlans = undefined;
            this.hasServicePlans = undefined;
        });
        // Initialisation du gestionnaire de sélection pour les menus contextuels
        this.selectionManager = this.host.createSelectionManager();
        // Initialisation du gestionnaire de sélection pour les menus contextuels
        this.selectionManager = this.host.createSelectionManager();
        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper";
        this.target.appendChild(this.divContainer);
        this.flexContainer = document.createElement("div");
        this.flexContainer.className = "accounting-container";
        this.divContainer.appendChild(this.flexContainer);
        this.toolbar = document.createElement("div");
        this.toolbar.className = "floating-toolbar";
        this.toolbar.style.display = "none";
        document.body.appendChild(this.toolbar);
        document.addEventListener("mousedown", (e) => {
            if (this.toolbar.style.display !== "none" &&
                !this.toolbar.contains(e.target)) {
                this.toolbar.style.display = "none";
            }
        });
    }
    update(options) {
        // Initialiser le modèle de formatage
        this.formattingSettings = new _settings__WEBPACK_IMPORTED_MODULE_1__/* .VisualFormattingSettingsModel */ .SC();
        // Nettoyage sécurisé
        while (this.flexContainer.firstChild) {
            this.flexContainer.removeChild(this.flexContainer.firstChild);
        }
        this.allRowsData = [];
        this.manualLineKeys = [];
        const dataView = options.dataViews[0];
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;
        // Charger les bordures globales du tableau
        if (this.metadata && this.metadata.objects && this.metadata.objects["tableBorders"]) {
            const tb = this.metadata.objects["tableBorders"];
            if (tb["borderWidth"] !== undefined)
                this.tableBorderWidth = tb["borderWidth"];
            if (tb["borderColor"])
                this.tableBorderColor = tb["borderColor"].solid.color;
            if (tb["borderStyle"])
                this.tableBorderStyle = tb["borderStyle"];
            if (tb["borderRadius"] !== undefined)
                this.tableBorderRadius = tb["borderRadius"];
        }
        console.log("🔲 BORDURES CHARGÉES:", {
            width: this.tableBorderWidth,
            color: this.tableBorderColor,
            style: this.tableBorderStyle,
            radius: this.tableBorderRadius
        });
        // 1. TITRES - Initialisation dynamique
        this.columnTitles = [];
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const t = this.metadata.objects["titresColonnes"];
            for (let i = 1; i <= 20; i++) {
                const key = "titre" + i;
                if (t[key]) {
                    this.columnTitles[i - 1] = t[key];
                }
            }
        }
        // 2. DONNÉES EXCEL
        let maxColumnIndexUsed = 1;
        if (this.categoricalData) {
            const categories = this.categoricalData.categories[0];
            const values = this.categoricalData.values ? this.categoricalData.values[0] : null;
            if (this.metadata && this.metadata.objects && this.metadata.objects["selectionMenu"]) {
                this.currentSelectedLabel = this.metadata.objects["selectionMenu"]["ligneActive"];
            }
            if (!this.currentSelectedLabel && categories.values.length > 0) {
                this.currentSelectedLabel = categories.values[0].toString();
            }
            categories.values.forEach((catValue, index) => {
                const originalName = catValue.toString();
                let row = {
                    originalName: originalName,
                    label: originalName,
                    amount: values ? values.values[index]?.toString() : "",
                    columnIndex: 1, sortIndex: index * 10,
                    marginBottom: 0, marginTop: 0, isHidden: false, marginColor: "transparent",
                    isHeader: false, isVirtual: false, customAmount: "",
                    font: "'Segoe UI', sans-serif", fontSize: 12,
                    bgLabel: "transparent", colorLabel: "black", boldLabel: false, italicLabel: false,
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false,
                    borderWidth: 1,
                    borderColor: "#eee"
                };
                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        if (style["columnIndex"])
                            row.columnIndex = style["columnIndex"];
                        if (row.columnIndex < 1)
                            row.columnIndex = 1;
                        if (style["ordreTri"] !== undefined)
                            row.sortIndex = style["ordreTri"];
                        if (style["marginBottom"] !== undefined)
                            row.marginBottom = style["marginBottom"];
                        if (style["marginTop"] !== undefined)
                            row.marginTop = style["marginTop"];
                        if (style["isHidden"])
                            row.isHidden = style["isHidden"];
                        if (style["marginColor"])
                            row.marginColor = style["marginColor"].solid.color;
                        if (style["customLabel"])
                            row.label = style["customLabel"];
                        if (style["customAmount"])
                            row.customAmount = style["customAmount"];
                        if (style["isHeader"])
                            row.isHeader = style["isHeader"];
                        if (style["fontSize"])
                            row.fontSize = style["fontSize"];
                        if (style["fontFamily"])
                            row.font = style["fontFamily"];
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
                        if (style["borderWidth"] !== undefined)
                            row.borderWidth = style["borderWidth"];
                        if (style["borderColor"])
                            row.borderColor = style["borderColor"].solid.color;
                    }
                }
                // Appliquer les changements en attente (optimiste)
                if (this.pendingChanges.has(originalName)) {
                    const pending = this.pendingChanges.get(originalName);
                    if (Date.now() - pending.timestamp < 30000) {
                        let allMatched = true;
                        Object.keys(pending).forEach(key => {
                            if (key === "timestamp")
                                return;
                            let match = false;
                            if (typeof pending[key] === 'number' && typeof row[key] === 'number') {
                                match = Math.abs(pending[key] - row[key]) < 0.01;
                            }
                            else {
                                match = pending[key] === row[key];
                            }
                            if (!match) {
                                row[key] = pending[key];
                                allMatched = false;
                            }
                        });
                        if (allMatched)
                            this.pendingChanges.delete(originalName);
                    }
                    else {
                        this.pendingChanges.delete(originalName);
                    }
                }
                if (row.columnIndex > maxColumnIndexUsed)
                    maxColumnIndexUsed = row.columnIndex;
                this.allRowsData.push(row);
            });
        }
        // 3. LIGNES MANUELLES DYNAMIQUES
        if (this.metadata && this.metadata.objects) {
            Object.keys(this.metadata.objects).forEach(key => {
                if (key.startsWith("manualLine")) {
                    this.manualLineKeys.push(key);
                    const s = this.metadata.objects[key];
                    if (s["show"] === true) {
                        let txt = s["text"] ? s["text"] : "Nouvelle Ligne";
                        let col = s["col"] ? s["col"] : 1;
                        let pos = s["pos"] ? s["pos"] : 0;
                        let isHead = s["isHeader"] ? s["isHeader"] : false;
                        let bg = s["bgColor"] ? s["bgColor"].solid.color : "transparent";
                        let color = s["textColor"] ? s["textColor"].solid.color : "black";
                        let mt = s["marginTop"] ? s["marginTop"] : 0;
                        let fs = s["fontSize"] ? s["fontSize"] : 12;
                        let bo = s["bold"] ? s["bold"] : false;
                        let it = s["italic"] ? s["italic"] : false;
                        let bw = s["borderWidth"] !== undefined ? s["borderWidth"] : 1;
                        let bc = s["borderColor"] ? s["borderColor"].solid.color : "#eee";
                        let vRow = {
                            originalName: key,
                            label: txt, amount: "",
                            columnIndex: col, sortIndex: pos,
                            marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                            isHeader: isHead, isVirtual: true, customAmount: "",
                            font: "'Segoe UI', sans-serif", fontSize: fs,
                            bgLabel: bg, colorLabel: color, boldLabel: bo, italicLabel: it,
                            bgAmount: bg, colorAmount: color, boldAmount: bo,
                            borderWidth: bw,
                            borderColor: bc
                        };
                        this.allRowsData.push(vRow);
                    }
                }
            });
        }
        // 4. RENDU
        let maxColumnsToShow = Math.max(maxColumnIndexUsed, this.columnTitles.length);
        this.flexContainer.style.borderWidth = `${this.tableBorderWidth}px`;
        this.flexContainer.style.borderStyle = this.tableBorderStyle;
        this.flexContainer.style.borderColor = this.tableBorderColor;
        this.flexContainer.style.borderRadius = `${this.tableBorderRadius}px`;
        for (let i = 1; i <= maxColumnsToShow; i++) {
            const colDiv = document.createElement("div");
            colDiv.className = "dynamic-column";
            const table = document.createElement("table");
            colDiv.appendChild(table);
            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
            const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
            const categories = this.categoricalData ? this.categoricalData.categories[0] : null;
            this.renderTableContent(table, colTitle, colRows, i, categories);
            this.flexContainer.appendChild(colDiv);
        }
        // Boutons d'actions
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "toggle-actions-button";
        toggleBtn.textContent = this.areActionButtonsVisible ? "◀" : "▶";
        toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
        toggleBtn.style.display = "flex";
        toggleBtn.style.alignItems = "center";
        toggleBtn.style.justifyContent = "center";
        toggleBtn.style.minWidth = "32px";
        toggleBtn.style.height = "32px";
        toggleBtn.style.cursor = "pointer";
        toggleBtn.style.fontSize = "16px";
        toggleBtn.style.color = "#007acc";
        toggleBtn.style.border = "1px solid #b3d7ff";
        toggleBtn.style.borderRadius = "50%";
        toggleBtn.style.margin = "6px";
        toggleBtn.style.background = "white";
        toggleBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.08)";
        toggleBtn.style.transition = "all 0.2s";
        toggleBtn.style.zIndex = "1000";
        toggleBtn.onmouseover = () => {
            toggleBtn.style.background = "#e6f2ff";
            toggleBtn.style.borderColor = "#007acc";
            toggleBtn.style.transform = "scale(1.1)";
        };
        toggleBtn.onmouseout = () => {
            toggleBtn.style.background = "white";
            toggleBtn.style.borderColor = "#b3d7ff";
            toggleBtn.style.transform = "scale(1)";
        };
        toggleBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.areActionButtonsVisible = !this.areActionButtonsVisible;
            toggleBtn.textContent = this.areActionButtonsVisible ? "◀" : "▶";
            toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
            addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
            if (removeColumnDiv) {
                removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            }
        };
        this.flexContainer.appendChild(toggleBtn);
        const addColumnDiv = document.createElement("button");
        addColumnDiv.type = "button";
        addColumnDiv.className = "add-column-button";
        addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
        addColumnDiv.style.alignItems = "center";
        addColumnDiv.style.justifyContent = "center";
        addColumnDiv.style.minWidth = "40px";
        addColumnDiv.style.cursor = "pointer";
        addColumnDiv.style.opacity = "0.5";
        addColumnDiv.style.transition = "opacity 0.2s";
        addColumnDiv.style.fontSize = "18px";
        addColumnDiv.style.color = "#666";
        addColumnDiv.style.border = "2px dashed #ccc";
        addColumnDiv.style.borderRadius = "6px";
        addColumnDiv.style.margin = "10px";
        addColumnDiv.style.padding = "12px";
        addColumnDiv.style.background = "transparent";
        addColumnDiv.style.zIndex = "1000";
        addColumnDiv.textContent = "➕";
        addColumnDiv.title = "Ajouter une nouvelle colonne";
        addColumnDiv.onmouseover = () => {
            addColumnDiv.style.opacity = "1";
            addColumnDiv.style.borderColor = "#999";
        };
        addColumnDiv.onmouseout = () => {
            addColumnDiv.style.opacity = "0.5";
            addColumnDiv.style.borderColor = "#ccc";
        };
        const handleAddColumn = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            const newIndex = this.columnTitles.length + 1;
            const newTitle = "COLONNE " + newIndex;
            this.host.persistProperties({
                merge: [{
                        objectName: "titresColonnes",
                        selector: null,
                        properties: { ["titre" + newIndex]: newTitle }
                    }]
            });
        };
        addColumnDiv.addEventListener('click', handleAddColumn, true);
        addColumnDiv.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); }, true);
        addColumnDiv.addEventListener('mouseup', (e) => { e.preventDefault(); e.stopPropagation(); }, true);
        this.flexContainer.appendChild(addColumnDiv);
        let removeColumnDiv = null;
        if (maxColumnsToShow > 1) {
            const emptyCols = [];
            for (let i = 1; i <= maxColumnsToShow; i++) {
                const colRows = this.allRowsData.filter(r => r.columnIndex === i && !r.isHidden);
                if (colRows.length === 0)
                    emptyCols.push(i);
            }
            if (emptyCols.length > 0) {
                removeColumnDiv = document.createElement("button");
                removeColumnDiv.type = "button";
                removeColumnDiv.className = "remove-column-button";
                removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
                removeColumnDiv.style.alignItems = "center";
                removeColumnDiv.style.justifyContent = "center";
                removeColumnDiv.style.minWidth = "40px";
                removeColumnDiv.style.cursor = "pointer";
                removeColumnDiv.style.opacity = "0.7";
                removeColumnDiv.style.transition = "opacity 0.2s";
                removeColumnDiv.style.fontSize = "18px";
                removeColumnDiv.style.color = "#c00";
                removeColumnDiv.style.border = "2px dashed #c00";
                removeColumnDiv.style.borderRadius = "6px";
                removeColumnDiv.style.margin = "10px";
                removeColumnDiv.style.padding = "12px";
                removeColumnDiv.style.background = "transparent";
                removeColumnDiv.style.zIndex = "1000";
                removeColumnDiv.textContent = "🗑️";
                removeColumnDiv.title = `Supprimer toutes les colonnes vides (${emptyCols.join(", ")})`;
                removeColumnDiv.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    emptyCols.forEach(col => {
                        this.host.persistProperties({
                            replace: [{
                                    objectName: "titresColonnes",
                                    selector: null,
                                    properties: { ["titre" + col]: undefined }
                                }]
                        });
                    });
                };
                this.flexContainer.appendChild(removeColumnDiv);
            }
        }
        const addLineBtn = document.createElement("button");
        addLineBtn.type = "button";
        addLineBtn.className = "add-line-button";
        addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
        const btnContainer = document.createElement("span");
        btnContainer.style.display = "flex";
        btnContainer.style.alignItems = "center";
        btnContainer.style.gap = "6px";
        const btnIcon = document.createElement("span");
        btnIcon.style.display = "flex";
        btnIcon.style.alignItems = "center";
        btnIcon.style.justifyContent = "center";
        btnIcon.style.width = "22px";
        btnIcon.style.height = "22px";
        btnIcon.style.background = "#e6f2ff";
        btnIcon.style.borderRadius = "50%";
        btnIcon.style.border = "1px solid #b3d7ff";
        btnIcon.style.color = "#007acc";
        btnIcon.style.fontSize = "16px";
        btnIcon.style.fontWeight = "bold";
        btnIcon.style.boxSizing = "border-box";
        btnIcon.textContent = "+";
        const btnText = document.createElement("span");
        btnText.style.color = "#007acc";
        btnText.style.fontSize = "14px";
        btnText.style.fontWeight = "500";
        btnText.textContent = "Ligne";
        btnContainer.appendChild(btnIcon);
        btnContainer.appendChild(btnText);
        addLineBtn.appendChild(btnContainer);
        addLineBtn.title = "Ajouter une nouvelle ligne";
        addLineBtn.style.margin = "6px";
        addLineBtn.style.padding = "2px 12px";
        addLineBtn.style.background = "white";
        addLineBtn.style.border = "1px solid #b3d7ff";
        addLineBtn.style.borderRadius = "18px";
        addLineBtn.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
        addLineBtn.style.cursor = "pointer";
        addLineBtn.style.alignItems = "center";
        addLineBtn.style.justifyContent = "center";
        addLineBtn.style.fontFamily = "'Segoe UI', Arial, sans-serif";
        addLineBtn.style.fontSize = "14px";
        addLineBtn.onmouseover = () => {
            addLineBtn.style.background = "#e6f2ff";
            addLineBtn.style.borderColor = "#007acc";
        };
        addLineBtn.onmouseout = () => {
            addLineBtn.style.background = "white";
            addLineBtn.style.borderColor = "#b3d7ff";
        };
        addLineBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            let nextIndex = 1;
            while (this.manualLineKeys.includes("manualLine" + nextIndex)) {
                nextIndex++;
            }
            const newKey = "manualLine" + nextIndex;
            this.host.persistProperties({
                merge: [{
                        objectName: newKey,
                        selector: null,
                        properties: {
                            text: "Nouvelle Ligne " + nextIndex,
                            show: true,
                            col: 1,
                            pos: 0,
                            isHeader: false,
                            bgColor: { solid: { color: "transparent" } },
                            textColor: { solid: { color: "black" } },
                            marginTop: 0,
                            fontSize: 12,
                            bold: false,
                            italic: false
                        }
                    }]
            });
        };
        this.flexContainer.appendChild(addLineBtn);
    }
    /**
     * NOUVELLE MÉTHODE OBLIGATOIRE API 5.1+
     * Remplace enumerateObjectInstances pour la certification Power BI
     */
    getFormattingModel() {
        const model = this.formattingSettings;
        // ---------------------------------------------------------
        // A. TITRES COLONNES
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const tObj = this.metadata.objects["titresColonnes"];
            model.titresColonnes.slices.forEach(slice => {
                if (tObj[slice.name]) {
                    slice.value = tObj[slice.name];
                }
            });
        }
        // ---------------------------------------------------------
        // B. MENU SÉLECTION
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["selectionMenu"]) {
            model.selectionMenu.ligneActive.value = this.metadata.objects["selectionMenu"]["ligneActive"];
        }
        // ---------------------------------------------------------
        // C. STYLE DE LIGNE (Logique contextuelle)
        // ---------------------------------------------------------
        if (this.categoricalData) {
            const categories = this.categoricalData.categories[0];
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const styleCard = model.styleLigne;
                const selectionId = this.host.createSelectionIdBuilder()
                    .withCategory(categories, indexChoisi)
                    .createSelectionId();
                // Assigner le sélecteur
                const selector = selectionId.getSelector();
                styleCard.selector = selector;
                // CORRECTION: assigner aussi le selector à CHAQUE slice pour que les persistProperties
                // déclenchés depuis le panneau de format ciblent bien la ligne sélectionnée.
                (styleCard.slices || []).forEach(s => { s.selector = selector; });
                const currentRow = this.allRowsData.find(r => r.originalName === this.currentSelectedLabel);
                if (currentRow) {
                    // Remplissage dynamique des slices par leur name — évite les problèmes de typage (color pickers, etc.)
                    (styleCard.slices || []).forEach(slice => {
                        const name = slice.name;
                        if (!name)
                            return;
                        switch (name) {
                            case "columnIndex":
                                slice.value = currentRow.columnIndex;
                                break;
                            case "ordreTri":
                                slice.value = currentRow.sortIndex;
                                break;
                            case "marginTop":
                                slice.value = currentRow.marginTop;
                                break;
                            case "marginBottom":
                                slice.value = currentRow.marginBottom;
                                break;
                            case "marginColor":
                                slice.value = { value: currentRow.marginColor };
                                break;
                            case "isHidden":
                                slice.value = currentRow.isHidden;
                                break;
                            case "isHeader":
                                slice.value = currentRow.isHeader;
                                break;
                            case "customLabel":
                                slice.value = currentRow.customLabel || "";
                                break;
                            case "customAmount":
                                slice.value = currentRow.customAmount || "";
                                break;
                            case "fontSize":
                                slice.value = currentRow.fontSize;
                                break;
                            case "fontFamily":
                                slice.value = currentRow.font;
                                break;
                            case "bgLabel":
                                slice.value = { value: currentRow.bgLabel };
                                break;
                            case "fillLabel":
                                slice.value = { value: currentRow.colorLabel };
                                break;
                            case "boldLabel":
                                slice.value = currentRow.boldLabel;
                                break;
                            case "italicLabel":
                                slice.value = currentRow.italicLabel;
                                break;
                            case "bgAmount":
                                slice.value = { value: currentRow.bgAmount };
                                break;
                            case "fillAmount":
                                slice.value = { value: currentRow.colorAmount };
                                break;
                            case "boldAmount":
                                slice.value = currentRow.boldAmount;
                                break;
                            case "borderWidth":
                                slice.value = currentRow.borderWidth;
                                break;
                            case "borderColor":
                                slice.value = { value: currentRow.borderColor };
                                break;
                            default: break;
                        }
                    });
                }
            }
        }
        // ---------------------------------------------------------
        // D. LIGNES MANUELLES (Dynamique)
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects) {
            const keys = Object.keys(this.metadata.objects).filter(k => k.startsWith("manualLine")).sort();
            keys.forEach(key => {
                const manualObj = this.metadata.objects[key];
                const manualCard = new _settings__WEBPACK_IMPORTED_MODULE_1__/* .ManualLineSettings */ .gj();
                manualCard.name = key;
                manualCard.displayName = manualObj["text"] ? String(manualObj["text"]) : key;
                manualCard.text.value = manualObj["text"];
                manualCard.show.value = manualObj["show"];
                manualCard.col.value = manualObj["col"];
                manualCard.pos.value = manualObj["pos"];
                manualCard.isHeader.value = manualObj["isHeader"];
                if (manualObj["bgColor"])
                    manualCard.bgColor.value = manualObj["bgColor"]["solid"]["color"];
                if (manualObj["textColor"])
                    manualCard.textColor.value = manualObj["textColor"]["solid"]["color"];
                manualCard.marginTop.value = manualObj["marginTop"];
                manualCard.fontSize.value = manualObj["fontSize"];
                manualCard.bold.value = manualObj["bold"];
                manualCard.italic.value = manualObj["italic"];
                manualCard.borderWidth.value = manualObj["borderWidth"];
                if (manualObj["borderColor"])
                    manualCard.borderColor.value = manualObj["borderColor"]["solid"]["color"];
                // Ajouter la carte manuelle à la liste des cartes du modèle
                model.cards.push(manualCard);
            });
        }
        // ---------------------------------------------------------
        // E. BORDURES GLOBALES
        // ---------------------------------------------------------
        if (this.metadata && this.metadata.objects && this.metadata.objects["tableBorders"]) {
            const borderObj = this.metadata.objects["tableBorders"];
            model.tableBorders.borderWidth.value = borderObj["borderWidth"];
            model.tableBorders.borderRadius.value = borderObj["borderRadius"];
            if (borderObj["borderColor"])
                model.tableBorders.borderColor.value = borderObj["borderColor"]["solid"]["color"];
            if (borderObj["borderStyle"])
                model.tableBorders.borderStyle.value = { value: borderObj["borderStyle"], displayName: borderObj["borderStyle"] };
        }
        // CORRECTION MAJEURE: Utiliser le service pour construire le modèle
        return this.formattingSettingsService.buildFormattingModel(model);
    }
    renderTableContent(targetTable, title, rows, colIndex, categories) {
        // [Contenu inchangé pour le rendu]
        rows.sort((a, b) => a.sortIndex - b.sortIndex);
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.style.position = "relative";
        th.style.paddingRight = "30px";
        const titleSpan = document.createElement("span");
        titleSpan.innerText = title;
        titleSpan.contentEditable = "false";
        titleSpan.style.outline = "none";
        titleSpan.style.display = "inline-block";
        titleSpan.style.minWidth = "100px";
        th.appendChild(titleSpan);
        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.style.position = "absolute";
        editBtn.style.right = "5px";
        editBtn.style.top = "50%";
        editBtn.style.transform = "translateY(-50%)";
        editBtn.style.cursor = "pointer";
        editBtn.style.fontSize = "14px";
        editBtn.style.opacity = "0.6";
        editBtn.style.transition = "opacity 0.2s";
        editBtn.style.border = "none";
        editBtn.style.background = "transparent";
        editBtn.style.padding = "2px 6px";
        editBtn.style.zIndex = "1000";
        editBtn.title = "Renommer cette colonne";
        editBtn.type = "button";
        editBtn.onmouseover = () => { editBtn.style.opacity = "1"; };
        editBtn.onmouseout = () => { editBtn.style.opacity = "0.6"; };
        const handleEdit = (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            titleSpan.contentEditable = "true";
            titleSpan.style.backgroundColor = "#fff3cd";
            titleSpan.style.color = "#000000";
            titleSpan.style.padding = "2px 4px";
            titleSpan.style.borderRadius = "3px";
            titleSpan.focus();
            const range = document.createRange();
            range.selectNodeContents(titleSpan);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            editBtn.innerText = "✓";
            editBtn.style.color = "green";
        };
        const saveEdit = () => {
            const newTitle = titleSpan.innerText.trim();
            if (newTitle && newTitle !== title) {
                this.host.persistProperties({
                    merge: [{
                            objectName: "titresColonnes",
                            selector: null,
                            properties: { ["titre" + colIndex]: newTitle }
                        }]
                });
            }
            titleSpan.contentEditable = "false";
            titleSpan.style.backgroundColor = "transparent";
            titleSpan.style.color = "";
            titleSpan.style.padding = "0";
            editBtn.innerText = "✏️";
            editBtn.style.color = "";
        };
        titleSpan.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                saveEdit();
            }
            if (e.key === 'Escape') {
                titleSpan.innerText = title;
                titleSpan.contentEditable = "false";
                titleSpan.style.backgroundColor = "transparent";
                titleSpan.style.color = "";
                titleSpan.style.padding = "0";
                editBtn.innerText = "✏️";
                editBtn.style.color = "";
            }
        });
        titleSpan.addEventListener('blur', () => {
            if (titleSpan.contentEditable === "true")
                saveEdit();
        });
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            if (titleSpan.contentEditable === "true")
                saveEdit();
            else
                handleEdit(e);
        }, true);
        editBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); }, true);
        editBtn.addEventListener('mouseup', (e) => { e.stopPropagation(); }, true);
        th.appendChild(editBtn);
        trHead.appendChild(th);
        thead.appendChild(trHead);
        targetTable.appendChild(thead);
        const tbody = document.createElement("tbody");
        rows.forEach(row => {
            if (row.isHidden)
                return;
            if (row.marginTop > 0) {
                const trSp = document.createElement("tr");
                trSp.style.height = row.marginTop + "px";
                trSp.style.lineHeight = "0";
                trSp.style.fontSize = "0";
                const tdSp = document.createElement("td");
                tdSp.colSpan = 2;
                tdSp.style.backgroundColor = row.marginColor;
                tdSp.style.border = "none";
                tdSp.style.padding = "0";
                tdSp.style.margin = "0";
                tdSp.style.height = row.marginTop + "px";
                trSp.appendChild(tdSp);
                tbody.appendChild(trSp);
            }
            const tr = document.createElement("tr");
            tr.draggable = true;
            tr.style.cursor = "move";
            tr.ondragstart = (e) => {
                e.stopPropagation();
                if (e.dataTransfer) {
                    e.dataTransfer.effectAllowed = "move";
                    const dragData = {
                        label: row.label,
                        originalName: row.originalName,
                        columnIndex: row.columnIndex,
                        sortIndex: row.sortIndex,
                        isVirtual: row.isVirtual
                    };
                    e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
                    tr.style.opacity = "0.5";
                    // DEBUG
                    // eslint-disable-next-line no-console
                    console.log("DRAG START:", dragData);
                }
            };
            tr.ondragend = (e) => { tr.style.opacity = "1"; };
            // DEBUG: highlight when row receives drop events
            tr.ondragover = (e) => {
                e.preventDefault();
                if (e.dataTransfer)
                    e.dataTransfer.dropEffect = "move";
                tr.style.borderTop = "2px solid #007acc";
            };
            tr.ondragleave = (e) => { tr.style.borderTop = ""; };
            tr.ondrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                tr.style.borderTop = "";
                // DEBUG
                // eslint-disable-next-line no-console
                console.log("DROP ON ROW", { target: row.originalName });
                if (e.dataTransfer) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedOriginalName = data.originalName;
                    const isVirtual = data.isVirtual;
                    if (draggedOriginalName !== row.originalName) {
                        const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                        let prevSortIndex = -1000;
                        if (targetRowIndex > 0) {
                            prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                        }
                        else {
                            prevSortIndex = row.sortIndex - 20;
                        }
                        let newSortIndex = (prevSortIndex + row.sortIndex) / 2;
                        if (isVirtual) {
                            const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                            if (currentDraggedRow) {
                                currentDraggedRow.columnIndex = colIndex;
                                currentDraggedRow.sortIndex = newSortIndex;
                                this.pendingChanges.set(draggedOriginalName, {
                                    columnIndex: colIndex,
                                    sortIndex: newSortIndex,
                                    timestamp: Date.now()
                                });
                                // nouveau : persistance centralisée
                                this.persistStyle(null, { col: colIndex, pos: newSortIndex }, draggedOriginalName);
                                // DEBUG
                                // eslint-disable-next-line no-console
                                console.log("PERSIST (virtual) ->", { object: draggedOriginalName, props: { col: colIndex, pos: newSortIndex } });
                                while (this.flexContainer.firstChild) {
                                    this.flexContainer.removeChild(this.flexContainer.firstChild);
                                }
                                let maxColUsed = 1;
                                this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed)
                                    maxColUsed = r.columnIndex; });
                                let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                for (let i = 1; i <= maxColumnsToShow; i++) {
                                    const colDiv = document.createElement("div");
                                    colDiv.className = "dynamic-column";
                                    const table = document.createElement("table");
                                    colDiv.appendChild(table);
                                    const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                    const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
                                    this.renderTableContent(table, colTitle, colRows, i, categories);
                                    this.flexContainer.appendChild(colDiv);
                                }
                            }
                        }
                        else if (categories) {
                            const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                            if (draggedIndex !== -1) {
                                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, draggedIndex).createSelectionId();
                                const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                let existingProps = {
                                // marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:"transparent"}},
                                // customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                                // bgLabel: {solid:{color:"transparent"}}, fillLabel: {solid:{color:"black"}}, italicLabel: false, boldLabel: false,
                                // bgAmount: {solid:{color:"transparent"}}, fillAmount: {solid:{color:"black"}}, boldAmount: false
                                };
                                if (currentDraggedRow) {
                                    existingProps.marginBottom = currentDraggedRow.marginBottom;
                                    existingProps.marginTop = currentDraggedRow.marginTop;
                                    existingProps.isHidden = currentDraggedRow.isHidden;
                                    existingProps.marginColor = { solid: { color: currentDraggedRow.marginColor } };
                                    existingProps.customLabel = currentDraggedRow.customLabel || "";
                                    existingProps.customAmount = currentDraggedRow.customAmount || "";
                                    existingProps.isHeader = currentDraggedRow.isHeader;
                                    existingProps.fontSize = currentDraggedRow.fontSize;
                                    existingProps.fontFamily = currentDraggedRow.font;
                                    existingProps.bgLabel = { solid: { color: currentDraggedRow.bgLabel } };
                                    existingProps.fillLabel = { solid: { color: currentDraggedRow.colorLabel } };
                                    existingProps.italicLabel = currentDraggedRow.italicLabel;
                                    existingProps.boldLabel = currentDraggedRow.boldLabel;
                                    existingProps.bgAmount = { solid: { color: currentDraggedRow.bgAmount } };
                                    existingProps.fillAmount = { solid: { color: currentDraggedRow.colorAmount } };
                                    existingProps.boldAmount = currentDraggedRow.boldAmount;
                                }
                                else if (categories.objects && categories.objects[draggedIndex]) {
                                    const style = categories.objects[draggedIndex]["styleLigne"];
                                    if (style) {
                                        Object.keys(style).forEach(key => { if (key !== "columnIndex" && key !== "ordreTri")
                                            existingProps[key] = style[key]; });
                                    }
                                }
                                existingProps.columnIndex = colIndex;
                                existingProps.ordreTri = newSortIndex;
                                // CLEAN undefined keys
                                Object.keys(existingProps).forEach(k => { if (existingProps[k] === undefined)
                                    delete existingProps[k]; });
                                // DEBUG before persist
                                // eslint-disable-next-line no-console
                                console.log("PERSIST (category) -> selector:", selectionId.getSelector(), "props:", existingProps);
                                // nouveau : persistance centralisée
                                this.persistStyle(selectionId.getSelector(), existingProps, "styleLigne");
                                // DEBUG after persist
                                // eslint-disable-next-line no-console
                                console.log("PERSIST DONE (category) for", draggedOriginalName);
                                const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                if (draggedRowData) {
                                    draggedRowData.columnIndex = colIndex;
                                    draggedRowData.sortIndex = newSortIndex;
                                    this.pendingChanges.set(draggedOriginalName, {
                                        columnIndex: colIndex, sortIndex: newSortIndex,
                                        marginBottom: draggedRowData.marginBottom, marginTop: draggedRowData.marginTop, isHidden: draggedRowData.isHidden,
                                        marginColor: draggedRowData.marginColor, customLabel: draggedRowData.customLabel, customAmount: draggedRowData.customAmount,
                                        isHeader: draggedRowData.isHeader, fontSize: draggedRowData.fontSize, font: draggedRowData.font,
                                        bgLabel: draggedRowData.bgLabel, colorLabel: draggedRowData.colorLabel, italicLabel: draggedRowData.italicLabel,
                                        boldLabel: draggedRowData.boldLabel, bgAmount: draggedRowData.bgAmount, colorAmount: draggedRowData.colorAmount,
                                        boldAmount: draggedRowData.boldAmount, timestamp: Date.now()
                                    });
                                    while (this.flexContainer.firstChild) {
                                        this.flexContainer.removeChild(this.flexContainer.firstChild);
                                    }
                                    let maxColUsed = 1;
                                    this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed)
                                        maxColUsed = r.columnIndex; });
                                    let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                    for (let i = 1; i <= maxColumnsToShow; i++) {
                                        const colDiv = document.createElement("div");
                                        colDiv.className = "dynamic-column";
                                        const table = document.createElement("table");
                                        colDiv.appendChild(table);
                                        const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                        const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
                                        this.renderTableContent(table, colTitle, colRows, i, categories);
                                        this.flexContainer.appendChild(colDiv);
                                    }
                                }
                            }
                        }
                    }
                }
            };
            if (!row.isVirtual) {
                tr.onclick = (e) => {
                    if (tr.draggable && e.detail === 1) {
                        e.stopPropagation();
                        this.host.persistProperties({
                            merge: [{
                                    objectName: "selectionMenu",
                                    selector: null,
                                    properties: { "ligneActive": row.originalName }
                                }]
                        });
                        this.showToolbar(row, tr, e.clientX, e.clientY, categories);
                    }
                };
                // MENU CONTEXTUEL POWER BI (clic droit)
                tr.oncontextmenu = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Récupérer l'index de la catégorie pour créer le selectionId
                    const rowIndex = categories.values.findIndex((v) => v.toString() === row.originalName);
                    if (rowIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withCategory(categories, rowIndex)
                            .createSelectionId();
                        // Afficher le menu contextuel Power BI natif
                        this.selectionManager.showContextMenu(selectionId, {
                            x: e.clientX,
                            y: e.clientY
                        });
                    }
                };
                tr.title = "Cliquer pour modifier | Glisser pour déplacer | Clic droit pour options";
            }
            else {
                // Menu contextuel pour les lignes manuelles (sans selectionId)
                tr.oncontextmenu = (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Pour les lignes virtuelles, menu contextuel simple
                    this.selectionManager.showContextMenu(null, {
                        x: e.clientX,
                        y: e.clientY
                    });
                };
                tr.title = "Glisser pour déplacer | Clic droit pour options";
            }
            let finalAmount = "";
            if (row.customAmount && row.customAmount.trim() !== "") {
                finalAmount = row.customAmount;
            }
            else {
                let rawVal = parseFloat(row.amount);
                if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    finalAmount = new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(rawVal);
                }
            }
            tr.style.fontFamily = row.font;
            tr.style.fontSize = row.fontSize + "px";
            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            const cellBg = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgLabel;
            tdName.style.backgroundColor = cellBg;
            tdName.style.color = row.colorLabel;
            if (row.boldLabel)
                tdName.style.fontWeight = "bold";
            if (row.italicLabel)
                tdName.style.fontStyle = "italic";
            const borderStyle = `${row.borderWidth}px solid ${row.borderColor}`;
            tdName.style.border = borderStyle;
            tdName.style.borderRight = "none";
            tr.appendChild(tdName);
            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount;
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount)
                tdAmount.style.fontWeight = "bold";
            tdAmount.style.border = borderStyle;
            tdAmount.style.borderLeft = "none";
            tr.appendChild(tdAmount);
            tbody.appendChild(tr);
            if (row.marginBottom > 0) {
                const trSpB = document.createElement("tr");
                trSpB.style.height = row.marginBottom + "px";
                trSpB.style.lineHeight = "0";
                trSpB.style.fontSize = "0";
                const tdSpB = document.createElement("td");
                tdSpB.colSpan = 2;
                tdSpB.style.backgroundColor = row.marginColor;
                tdSpB.style.border = "none";
                tdSpB.style.padding = "0";
                tdSpB.style.margin = "0";
                tdSpB.style.height = row.marginBottom + "px";
                trSpB.appendChild(tdSpB);
                tbody.appendChild(trSpB);
            }
        });
        const dropZoneTr = document.createElement("tr");
        dropZoneTr.style.height = "40px";
        const dropZoneTd = document.createElement("td");
        dropZoneTd.colSpan = 2;
        dropZoneTd.style.backgroundColor = "transparent";
        dropZoneTd.style.border = "2px dashed transparent";
        dropZoneTd.style.transition = "all 0.2s";
        dropZoneTd.textContent = "";
        dropZoneTr.appendChild(dropZoneTd);
        dropZoneTr.ondragover = (e) => {
            e.preventDefault();
            if (e.dataTransfer)
                e.dataTransfer.dropEffect = "move";
            dropZoneTd.style.border = "2px dashed #007acc";
            dropZoneTd.style.backgroundColor = "rgba(0, 122, 204, 0.1)";
        };
        dropZoneTr.ondragleave = (e) => {
            dropZoneTd.style.border = "2px dashed transparent";
            dropZoneTd.style.backgroundColor = "transparent";
        };
        dropZoneTr.ondrop = (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropZoneTd.style.border = "2px dashed transparent";
            dropZoneTd.style.backgroundColor = "transparent";
            if (e.dataTransfer) {
                const dataStr = e.dataTransfer.getData("text/plain");
                const data = JSON.parse(dataStr);
                const draggedOriginalName = data.originalName;
                const isVirtual = data.isVirtual;
                let lastSortIndex = 0;
                if (rows.length > 0)
                    lastSortIndex = rows[rows.length - 1].sortIndex;
                let newSortIndex = lastSortIndex + 10;
                if (isVirtual) {
                    const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                    if (currentDraggedRow) {
                        currentDraggedRow.columnIndex = colIndex;
                        currentDraggedRow.sortIndex = newSortIndex;
                        this.pendingChanges.set(draggedOriginalName, {
                            columnIndex: colIndex,
                            sortIndex: newSortIndex,
                            timestamp: Date.now()
                        });
                        // nouveau : persistance centralisée
                        this.persistStyle(null, { col: colIndex, pos: newSortIndex }, draggedOriginalName);
                        // DEBUG
                        // eslint-disable-next-line no-console
                        console.log("PERSIST (virtual) ->", { object: draggedOriginalName, props: { col: colIndex, pos: newSortIndex } });
                        while (this.flexContainer.firstChild) {
                            this.flexContainer.removeChild(this.flexContainer.firstChild);
                        }
                        let maxColUsed = 1;
                        this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed)
                            maxColUsed = r.columnIndex; });
                        let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                        for (let i = 1; i <= maxColumnsToShow; i++) {
                            const colDiv = document.createElement("div");
                            colDiv.className = "dynamic-column";
                            const table = document.createElement("table");
                            colDiv.appendChild(table);
                            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                            const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
                            this.renderTableContent(table, colTitle, colRows, i, categories);
                            this.flexContainer.appendChild(colDiv);
                        }
                    }
                }
                else if (categories) {
                    const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                    if (draggedIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, draggedIndex).createSelectionId();
                        const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        let existingProps = {
                            marginBottom: 0, marginTop: 0, isHidden: false, marginColor: { solid: { color: "transparent" } },
                            customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif",
                            bgLabel: { solid: { color: "transparent" } }, fillLabel: { solid: { color: "black" } }, italicLabel: false, boldLabel: false,
                            bgAmount: { solid: { color: "transparent" } }, fillAmount: { solid: { color: "black" } }, boldAmount: false
                        };
                        if (currentDraggedRow) {
                            existingProps.marginBottom = currentDraggedRow.marginBottom;
                            existingProps.marginTop = currentDraggedRow.marginTop;
                            existingProps.isHidden = currentDraggedRow.isHidden;
                            existingProps.marginColor = { solid: { color: currentDraggedRow.marginColor } };
                            existingProps.customLabel = currentDraggedRow.customLabel || "";
                            existingProps.customAmount = currentDraggedRow.customAmount || "";
                            existingProps.isHeader = currentDraggedRow.isHeader;
                            existingProps.fontSize = currentDraggedRow.fontSize;
                            existingProps.fontFamily = currentDraggedRow.font;
                            existingProps.bgLabel = { solid: { color: currentDraggedRow.bgLabel } };
                            existingProps.fillLabel = { solid: { color: currentDraggedRow.colorLabel } };
                            existingProps.italicLabel = currentDraggedRow.italicLabel;
                            existingProps.boldLabel = currentDraggedRow.boldLabel;
                            existingProps.bgAmount = { solid: { color: currentDraggedRow.bgAmount } };
                            existingProps.fillAmount = { solid: { color: currentDraggedRow.colorAmount } };
                            existingProps.boldAmount = currentDraggedRow.boldAmount;
                        }
                        else if (categories.objects && categories.objects[draggedIndex]) {
                            const style = categories.objects[draggedIndex]["styleLigne"];
                            if (style) {
                                Object.keys(style).forEach(key => { if (key !== "columnIndex" && key !== "ordreTri")
                                    existingProps[key] = style[key]; });
                            }
                        }
                        existingProps.columnIndex = colIndex;
                        existingProps.ordreTri = newSortIndex;
                        // CLEAN undefined keys
                        Object.keys(existingProps).forEach(k => { if (existingProps[k] === undefined)
                            delete existingProps[k]; });
                        // DEBUG before persist
                        // eslint-disable-next-line no-console
                        console.log("PERSIST (category) -> selector:", selectionId.getSelector(), "props:", existingProps);
                        // nouveau : persistance centralisée
                        this.persistStyle(selectionId.getSelector(), existingProps, "styleLigne");
                        // DEBUG after persist
                        // eslint-disable-next-line no-console
                        console.log("PERSIST DONE (category) for", draggedOriginalName);
                        const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        if (draggedRowData) {
                            draggedRowData.columnIndex = colIndex;
                            draggedRowData.sortIndex = newSortIndex;
                            this.pendingChanges.set(draggedOriginalName, {
                                columnIndex: colIndex, sortIndex: newSortIndex,
                                marginBottom: draggedRowData.marginBottom, marginTop: draggedRowData.marginTop, isHidden: draggedRowData.isHidden,
                                marginColor: draggedRowData.marginColor, customLabel: draggedRowData.customLabel, customAmount: draggedRowData.customAmount,
                                isHeader: draggedRowData.isHeader, fontSize: draggedRowData.fontSize, font: draggedRowData.font,
                                bgLabel: draggedRowData.bgLabel, colorLabel: draggedRowData.colorLabel, italicLabel: draggedRowData.italicLabel,
                                boldLabel: draggedRowData.boldLabel, bgAmount: draggedRowData.bgAmount, colorAmount: draggedRowData.colorAmount,
                                boldAmount: draggedRowData.boldAmount, timestamp: Date.now()
                            });
                            while (this.flexContainer.firstChild) {
                                this.flexContainer.removeChild(this.flexContainer.firstChild);
                            }
                            let maxColUsed = 1;
                            this.allRowsData.forEach(r => { if (r.columnIndex > maxColUsed)
                                maxColUsed = r.columnIndex; });
                            let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                            for (let i = 1; i <= maxColumnsToShow; i++) {
                                const colDiv = document.createElement("div");
                                colDiv.className = "dynamic-column";
                                const table = document.createElement("table");
                                colDiv.appendChild(table);
                                const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
                                this.renderTableContent(table, colTitle, colRows, i, categories);
                                this.flexContainer.appendChild(colDiv);
                            }
                        }
                    }
                }
            }
        };
        tbody.appendChild(dropZoneTr);
        // DEBUG: drop zone logs already handled below
        targetTable.appendChild(tbody);
    }
    showToolbar(row, tr, x, y, categories) {
        console.log("🟢 showToolbar called for:", row.originalName);
        if (!categories) {
            console.error("🔴 Categories is null");
            return;
        }
        while (this.toolbar.firstChild) {
            this.toolbar.removeChild(this.toolbar.firstChild);
        }
        this.toolbar.style.display = "flex";
        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();
        // Positionner la toolbar
        const toolbarWidth = 400;
        let left = x - toolbarWidth / 2;
        if (left < 10)
            left = 10;
        if (left + toolbarWidth > window.innerWidth)
            left = window.innerWidth - toolbarWidth - 10;
        let top = y - 50;
        if (top < 10)
            top = y + 20;
        this.toolbar.style.left = left + "px";
        this.toolbar.style.top = top + "px";
        const index = categories.values.findIndex(v => v.toString() === row.originalName);
        console.log("🟢 Index found:", index);
        if (index === -1) {
            console.error("🔴 Index not found for", row.originalName);
            return;
        }
        let selectionIdBuilder = this.host.createSelectionIdBuilder();
        selectionIdBuilder = selectionIdBuilder.withCategory(categories, index);
        const selectionId = selectionIdBuilder.createSelectionId();
        // Helper pour mettre à jour pendingChanges
        const updatePending = (props) => {
            const current = this.pendingChanges.get(row.originalName) || { timestamp: Date.now() };
            const updated = { ...current, ...props, timestamp: Date.now() };
            this.pendingChanges.set(row.originalName, updated);
        };
        // Helper pour récupérer les données actuelles de la ligne
        const getCurrentRow = () => {
            return this.allRowsData.find(r => r.originalName === row.originalName) || row;
        };
        // Helper pour persister TOUTES les propriétés (évite les pertes)
        const persistAllProps = (overrides) => {
            const currentRow = getCurrentRow();
            const fullProps = {
                columnIndex: currentRow.columnIndex,
                ordreTri: currentRow.sortIndex,
                marginBottom: currentRow.marginBottom,
                marginTop: currentRow.marginTop,
                isHidden: currentRow.isHidden,
                marginColor: { solid: { color: currentRow.marginColor } },
                customLabel: currentRow.customLabel || "",
                customAmount: currentRow.customAmount || "",
                isHeader: currentRow.isHeader,
                fontSize: currentRow.fontSize,
                fontFamily: currentRow.font,
                bgLabel: { solid: { color: currentRow.bgLabel } },
                fillLabel: { solid: { color: currentRow.colorLabel } },
                italicLabel: currentRow.italicLabel,
                boldLabel: currentRow.boldLabel,
                bgAmount: { solid: { color: currentRow.bgAmount } },
                fillAmount: { solid: { color: currentRow.colorAmount } },
                boldAmount: currentRow.boldAmount,
                borderWidth: currentRow.borderWidth,
                borderColor: { solid: { color: currentRow.borderColor } }
            };
            // Appliquer overrides fournis
            Object.keys(overrides || {}).forEach(k => { fullProps[k] = overrides[k]; });
            try {
                this.host.persistProperties({
                    merge: [{
                            objectName: "styleLigne",
                            selector: selectionId.getSelector(),
                            properties: fullProps
                        }]
                });
                updatePending(fullProps);
            }
            catch (err) {
                // eslint-disable-next-line no-console
                console.error("Erreur persistProperties:", err);
            }
        };
        // --- BOUTONS ---
        // GRAS (B)
        const btnBold = document.createElement("button");
        const bElem = document.createElement("b");
        bElem.textContent = "B";
        btnBold.appendChild(bElem);
        btnBold.title = "Gras";
        if (row.boldLabel)
            btnBold.className = "active";
        btnBold.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.boldLabel;
            btnBold.className = newVal ? "active" : "";
            row.boldLabel = newVal;
            row.boldAmount = newVal;
            const weight = newVal ? "bold" : "normal";
            if (tr.cells[0])
                tr.cells[0].style.fontWeight = weight;
            if (tr.cells[1])
                tr.cells[1].style.fontWeight = weight;
            updatePending({ boldLabel: newVal, boldAmount: newVal });
            persistAllProps({ boldLabel: newVal, boldAmount: newVal });
        };
        this.toolbar.appendChild(btnBold);
        // ITALIQUE (I)
        const btnItalic = document.createElement("button");
        const iElem = document.createElement("i");
        iElem.textContent = "I";
        btnItalic.appendChild(iElem);
        btnItalic.title = "Italique";
        if (row.italicLabel)
            btnItalic.className = "active";
        btnItalic.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.italicLabel;
            btnItalic.className = newVal ? "active" : "";
            row.italicLabel = newVal;
            const style = newVal ? "italic" : "normal";
            if (tr.cells[0])
                tr.cells[0].style.fontStyle = style;
            updatePending({ italicLabel: newVal });
            persistAllProps({ italicLabel: newVal });
        };
        this.toolbar.appendChild(btnItalic);
        // SEPARATEUR
        const sep1 = document.createElement("div");
        sep1.className = "separator";
        this.toolbar.appendChild(sep1);
        // TAILLE POLICE (sélecteur)
        const fontSizeWrapper = document.createElement("div");
        fontSizeWrapper.className = "font-size-wrapper";
        const lblFontSize = document.createElement("label");
        lblFontSize.innerText = "Taille";
        lblFontSize.style.marginRight = "4px";
        fontSizeWrapper.appendChild(lblFontSize);
        const selectFontSize = document.createElement("select");
        selectFontSize.title = "Taille de police";
        for (let s = 8; s <= 24; s++) {
            const opt = document.createElement("option");
            opt.value = s.toString();
            opt.innerText = s.toString();
            if (row.fontSize === s)
                opt.selected = true;
            selectFontSize.appendChild(opt);
        }
        selectFontSize.onchange = (e) => {
            e.stopPropagation();
            const s = parseInt(selectFontSize.value, 10);
            row.fontSize = s;
            tr.style.fontSize = s + "px";
            updatePending({ fontSize: s });
            persistAllProps({ fontSize: s });
        };
        fontSizeWrapper.appendChild(selectFontSize);
        this.toolbar.appendChild(fontSizeWrapper);
        // SEPARATEUR
        const sep3 = document.createElement("div");
        sep3.className = "separator";
        this.toolbar.appendChild(sep3);
        // POLICE (font-family)
        const fontFamilyWrapper = document.createElement("div");
        fontFamilyWrapper.className = "font-family-wrapper";
        const lblFontFamily = document.createElement("label");
        lblFontFamily.innerText = "Police";
        lblFontFamily.style.marginRight = "4px";
        fontFamilyWrapper.appendChild(lblFontFamily);
        const selectFontFamily = document.createElement("select");
        selectFontFamily.title = "Police";
        const fonts = [
            { name: "Segoe UI", value: "'Segoe UI', sans-serif" },
            { name: "Arial", value: "Arial, sans-serif" },
            { name: "Calibri", value: "Calibri, sans-serif" },
            { name: "Times New Roman", value: "'Times New Roman', serif" },
            { name: "Courier New", value: "'Courier New', monospace" }
        ];
        fonts.forEach(f => {
            const opt = document.createElement("option");
            opt.value = f.value;
            opt.innerText = f.name;
            if (row.font === f.value)
                opt.selected = true;
            selectFontFamily.appendChild(opt);
        });
        selectFontFamily.onchange = (e) => {
            e.stopPropagation();
            const f = selectFontFamily.value;
            row.font = f;
            tr.style.fontFamily = f;
            updatePending({ font: f });
            persistAllProps({ fontFamily: f });
        };
        fontFamilyWrapper.appendChild(selectFontFamily);
        this.toolbar.appendChild(fontFamilyWrapper);
        // BOUTON FERMER
        const btnClose = document.createElement("button");
        btnClose.className = "close-btn";
        // CORRECTION: Utiliser textContent
        btnClose.textContent = "✖";
        btnClose.onclick = (e) => {
            e.stopPropagation();
            this.toolbar.style.display = "none";
        };
        this.toolbar.appendChild(btnClose);
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
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG = {
    name: 'monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG',
    displayName: 'monTableauPerso',
    class: 'Visual',
    apiVersion: '5.10.0',
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