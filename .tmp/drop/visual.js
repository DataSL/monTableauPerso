var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignmentGroup: () => (/* binding */ AlignmentGroup),
/* harmony export */   AutoDropdown: () => (/* binding */ AutoDropdown),
/* harmony export */   AutoFlagsSelection: () => (/* binding */ AutoFlagsSelection),
/* harmony export */   CardGroupEntity: () => (/* binding */ CardGroupEntity),
/* harmony export */   ColorPicker: () => (/* binding */ ColorPicker),
/* harmony export */   CompositeCard: () => (/* binding */ CompositeCard),
/* harmony export */   CompositeSlice: () => (/* binding */ CompositeSlice),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   ContainerItem: () => (/* binding */ ContainerItem),
/* harmony export */   DatePicker: () => (/* binding */ DatePicker),
/* harmony export */   DurationPicker: () => (/* binding */ DurationPicker),
/* harmony export */   ErrorRangeControl: () => (/* binding */ ErrorRangeControl),
/* harmony export */   FieldPicker: () => (/* binding */ FieldPicker),
/* harmony export */   FontControl: () => (/* binding */ FontControl),
/* harmony export */   FontPicker: () => (/* binding */ FontPicker),
/* harmony export */   GradientBar: () => (/* binding */ GradientBar),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   ImageUpload: () => (/* binding */ ImageUpload),
/* harmony export */   ItemDropdown: () => (/* binding */ ItemDropdown),
/* harmony export */   ItemFlagsSelection: () => (/* binding */ ItemFlagsSelection),
/* harmony export */   ListEditor: () => (/* binding */ ListEditor),
/* harmony export */   MarginPadding: () => (/* binding */ MarginPadding),
/* harmony export */   Model: () => (/* binding */ Model),
/* harmony export */   NumUpDown: () => (/* binding */ NumUpDown),
/* harmony export */   ReadOnlyText: () => (/* binding */ ReadOnlyText),
/* harmony export */   ShapeMapSelector: () => (/* binding */ ShapeMapSelector),
/* harmony export */   SimpleCard: () => (/* binding */ SimpleCard),
/* harmony export */   SimpleSlice: () => (/* binding */ SimpleSlice),
/* harmony export */   Slider: () => (/* binding */ Slider),
/* harmony export */   TextArea: () => (/* binding */ TextArea),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)
/* harmony export */ });
/* harmony import */ var _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/FormattingSettingsUtils */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js");
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
            descriptor: _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getDescriptor(objectName, this),
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
        this.value = _utils_FormattingSettingsUtils__WEBPACK_IMPORTED_MODULE_0__.getPropertyValue(this, newValue, this.value);
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
class ContainerItem extends NamedEntity {
}
//# sourceMappingURL=FormattingSettingsComponents.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* binding */ FormattingSettingsService),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");

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
                if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard)
                    (_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.setPropertiesValues(dataViewObjects, card.name);
                const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ? [card] : card.groups);
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
            const isSimpleCard = card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard;
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
        if (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.CompositeCard && card.topLevelSlice)
            revertToDefaultDescriptors.push(...(_a = card.topLevelSlice) === null || _a === void 0 ? void 0 : _a.getRevertToDefaultDescriptor(card.name));
        const cardGroupInstances = (card instanceof _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__.SimpleCard ?
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

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormattingSettingsService: () => (/* reexport safe */ _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   formattingSettings: () => (/* reexport module object */ _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _FormattingSettingsComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormattingSettingsComponents */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsComponents.js");
/* harmony import */ var _FormattingSettingsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormattingSettingsService */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/FormattingSettingsService.js");



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/powerbi-visuals-utils-formattingmodel/lib/utils/FormattingSettingsUtils.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDescriptor: () => (/* binding */ getDescriptor),
/* harmony export */   getPropertyValue: () => (/* binding */ getPropertyValue)
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

/***/ "./src/settings.ts":
/*!*************************!*\
  !*** ./src/settings.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ManualLineSettings: () => (/* binding */ ManualLineSettings),
/* harmony export */   SelectionMenuSettings: () => (/* binding */ SelectionMenuSettings),
/* harmony export */   StyleLigneSettings: () => (/* binding */ StyleLigneSettings),
/* harmony export */   TableBordersSettings: () => (/* binding */ TableBordersSettings),
/* harmony export */   TitresColonnesSettings: () => (/* binding */ TitresColonnesSettings),
/* harmony export */   VisualFormattingSettingsModel: () => (/* binding */ VisualFormattingSettingsModel)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");


var FormattingSettingsCard = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.SimpleCard;
var FormattingSettingsModel = powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.Model;
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
            this.slices.push(new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
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
    ligneActive = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
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
    columnIndex = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "columnIndex", displayName: "N° Colonne", value: 1
    });
    ordreTri = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "ordreTri", displayName: "Position", value: 0
    });
    // Marges
    marginTop = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    marginBottom = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "marginBottom", displayName: "Marge Bas", value: 0
    });
    marginColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "marginColor", displayName: "Couleur Marge", value: { value: "transparent" }
    });
    // Visibilité / Header
    isHidden = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "isHidden", displayName: "MASQUER", value: false
    });
    isHeader = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "isHeader", displayName: "Mode Titre", value: false
    });
    // Contenu
    customLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "customLabel", displayName: "Renommer", value: "",
        placeholder: "Nouveau nom..." // CORRECTION
    });
    customAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "customAmount", displayName: "Remplacer Montant", value: "",
        placeholder: "Valeur ou vide..." // CORRECTION
    });
    // Police
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize", displayName: "Taille", value: 12
    });
    fontFamily = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.FontPicker({
        name: "fontFamily", displayName: "Police", value: "'Segoe UI', sans-serif"
    });
    // Style Libellé
    bgLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "bgLabel", displayName: "Fond Libellé", value: { value: "transparent" }
    });
    fillLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fillLabel", displayName: "Texte Libellé", value: { value: "black" }
    });
    boldLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "boldLabel", displayName: "Gras (L)", value: false
    });
    italicLabel = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "italicLabel", displayName: "Italique (L)", value: false
    });
    // Style Prix
    bgAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "bgAmount", displayName: "Fond Prix", value: { value: "transparent" }
    });
    fillAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "fillAmount", displayName: "Texte Prix", value: { value: "black" }
    });
    boldAmount = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "boldAmount", displayName: "Gras (P)", value: false
    });
    // Bordures spécifiques
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
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
    text = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.TextInput({
        name: "text", displayName: "Texte", value: "Nouvelle Ligne",
        placeholder: "Libellé..." // CORRECTION
    });
    show = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "show", displayName: "Afficher", value: false
    });
    col = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "col", displayName: "Colonne", value: 1
    });
    pos = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "pos", displayName: "Position", value: 0
    });
    isHeader = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "isHeader", displayName: "Titre", value: false
    });
    bgColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "bgColor", displayName: "Fond", value: { value: "transparent" }
    });
    textColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "textColor", displayName: "Texte", value: { value: "black" }
    });
    marginTop = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    fontSize = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "fontSize", displayName: "Taille", value: 12
    });
    bold = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "bold", displayName: "Gras", value: false
    });
    italic = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ToggleSwitch({
        name: "italic", displayName: "Italique", value: false
    });
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
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
    borderWidth = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur", value: 1
    });
    borderColor = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ColorPicker({
        name: "borderColor", displayName: "Couleur", value: { value: "rgba(0,0,0,0.25)" }
    });
    borderStyle = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.ItemDropdown({
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
    borderRadius = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.formattingSettings.NumUpDown({
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

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Visual: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! powerbi-visuals-utils-formattingmodel */ "./node_modules/powerbi-visuals-utils-formattingmodel/lib/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/settings.ts");
/* harmony import */ var _style_visual_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/visual.less */ "./style/visual.less");

// Importation du Service de formatage (FormattingSettingsService)



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
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
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
        this.formattingSettings = new _settings__WEBPACK_IMPORTED_MODULE_1__.VisualFormattingSettingsModel();
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
                const manualCard = new _settings__WEBPACK_IMPORTED_MODULE_1__.ManualLineSettings();
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


/***/ }),

/***/ "./style/visual.less":
/*!***************************!*\
  !*** ./style/visual.less ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./.tmp/precompile/visualPlugin.ts ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_visual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/visual */ "./src/visual.ts");

var powerbiKey = "powerbi";
var powerbi = window[powerbiKey];
var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG = {
    name: 'monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG',
    displayName: 'monTableauPerso',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options) => {
        if (_src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual) {
            return new _src_visual__WEBPACK_IMPORTED_MODULE_0__.Visual(options);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG);

})();

monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzt3QkFDMUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsV0FBVyxDQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUMzRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUN0RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUN0RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDekUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsYUFBYSxDQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUUzRSxJQUFJLElBQUksR0FBWTs0QkFDaEIsWUFBWSxFQUFFLEdBQUc7NEJBQ2pCLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUU7NEJBQ3RCLFdB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QU0sRUFBRSxJQUFJO0NBQ2YsQ0FBQztBQUNGLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFLENBQUM7SUFDakMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsdURBQXVELENBQUMsR0FBRyxxREFBcUQsQ0FBQztBQUM3SSxDQUFDO0FBQ0QsaUVBQWUscURBQXFELEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NDb21wb25lbnRzLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvdXRpbHMvRm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9zcmMvc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3MiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBsZXQgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGxldCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmIChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAwLiBUSVRSRVMgQ09MT05ORVMgKEfDqW7DqXJhdGlvbiBkeW5hbWlxdWUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVGl0cmVzQ29sb25uZXNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0aXRyZXNDb2xvbm5lc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiMC4gVElUUkVTIENPTE9OTkVTXCI7XHJcbiAgICBcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0aXRyZVwiICsgaSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlRpdHJlIENvbCBcIiArIGksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlLi4uXCIgLy8gQ09SUkVDVElPTjogUGxhY2Vob2xkZXIgb2JsaWdhdG9pcmVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIE1FTlUgREUgU8OJTEVDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1lbnVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJzZWxlY3Rpb25NZW51XCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCIxLiBTw4lMRUNUSU9OIChFeGNlbClcIjtcclxuXHJcbiAgICBsaWduZUFjdGl2ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImxpZ25lQWN0aXZlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTm9tIGV4YWN0IGRlIGxhIGxpZ25lIGFjdGl2ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkV4OiBDaGlmZnJlIGQnYWZmYWlyZXNcIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFt0aGlzLmxpZ25lQWN0aXZlXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDIuIFNUWUxFIERFIExJR05FXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgU3R5bGVMaWduZVNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInN0eWxlTGlnbmVcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIjIuIFBFUlNPTk5BTElTQVRJT04gKEV4Y2VsKVwiO1xyXG4gICAgXHJcbiAgICAvLyBDT1JSRUNUSU9OOiBBam91dCBleHBsaWNpdGUgZHUgc2VsZWN0b3IgcG91ciDDqXZpdGVyIGwnZXJyZXVyIFRTXHJcbiAgICBzZWxlY3RvcjogcG93ZXJiaS5kYXRhLlNlbGVjdG9yOyBcclxuXHJcbiAgICAvLyBQb3NpdGlvbm5lbWVudFxyXG4gICAgY29sdW1uSW5kZXggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJjb2x1bW5JbmRleFwiLCBkaXNwbGF5TmFtZTogXCJOwrAgQ29sb25uZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBvcmRyZVRyaSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm9yZHJlVHJpXCIsIGRpc3BsYXlOYW1lOiBcIlBvc2l0aW9uXCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNYXJnZXNcclxuICAgIG1hcmdpblRvcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpblRvcFwiLCBkaXNwbGF5TmFtZTogXCJNYXJnZSBIYXV0XCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuICAgIG1hcmdpbkJvdHRvbSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpbkJvdHRvbVwiLCBkaXNwbGF5TmFtZTogXCJNYXJnZSBCYXNcIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgbWFyZ2luQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpbkNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgTWFyZ2VcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWaXNpYmlsaXTDqSAvIEhlYWRlclxyXG4gICAgaXNIaWRkZW4gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hpZGRlblwiLCBkaXNwbGF5TmFtZTogXCJNQVNRVUVSXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBpc0hlYWRlciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImlzSGVhZGVyXCIsIGRpc3BsYXlOYW1lOiBcIk1vZGUgVGl0cmVcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb250ZW51XHJcbiAgICBjdXN0b21MYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImN1c3RvbUxhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIlJlbm9tbWVyXCIsIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vdXZlYXUgbm9tLi4uXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcbiAgICBjdXN0b21BbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJjdXN0b21BbW91bnRcIiwgZGlzcGxheU5hbWU6IFwiUmVtcGxhY2VyIE1vbnRhbnRcIiwgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVmFsZXVyIG91IHZpZGUuLi5cIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQb2xpY2VcclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIiwgZGlzcGxheU5hbWU6IFwiVGFpbGxlXCIsIHZhbHVlOiAxMlxyXG4gICAgfSk7XHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIiwgZGlzcGxheU5hbWU6IFwiUG9saWNlXCIsIHZhbHVlOiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3R5bGUgTGliZWxsw6lcclxuICAgIGJnTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJnTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiRm9uZCBMaWJlbGzDqVwiLCB2YWx1ZTogeyB2YWx1ZTogXCJ0cmFuc3BhcmVudFwiIH1cclxuICAgIH0pO1xyXG4gICAgZmlsbExhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmaWxsTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiVGV4dGUgTGliZWxsw6lcIiwgdmFsdWU6IHsgdmFsdWU6IFwiYmxhY2tcIiB9XHJcbiAgICB9KTtcclxuICAgIGJvbGRMYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImJvbGRMYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJHcmFzIChMKVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXRhbGljTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpdGFsaWNMYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJJdGFsaXF1ZSAoTClcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdHlsZSBQcml4XHJcbiAgICBiZ0Ftb3VudCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmdBbW91bnRcIiwgZGlzcGxheU5hbWU6IFwiRm9uZCBQcml4XCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcbiAgICBmaWxsQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmaWxsQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlIFByaXhcIiwgdmFsdWU6IHsgdmFsdWU6IFwiYmxhY2tcIiB9XHJcbiAgICB9KTtcclxuICAgIGJvbGRBbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIkdyYXMgKFApXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQm9yZHVyZXMgc3DDqWNpZmlxdWVzXHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXIgQm9yZHVyZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBCb3JkdXJlXCIsIHZhbHVlOiB7IHZhbHVlOiBcIiNlZWVcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLmNvbHVtbkluZGV4LCB0aGlzLm9yZHJlVHJpLFxyXG4gICAgICAgIHRoaXMuaXNIaWRkZW4sIHRoaXMuaXNIZWFkZXIsXHJcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AsIHRoaXMubWFyZ2luQm90dG9tLCB0aGlzLm1hcmdpbkNvbG9yLFxyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWwsIHRoaXMuY3VzdG9tQW1vdW50LFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsIHRoaXMuZm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLmZpbGxMYWJlbCwgdGhpcy5iZ0xhYmVsLCB0aGlzLmJvbGRMYWJlbCwgdGhpcy5pdGFsaWNMYWJlbCxcclxuICAgICAgICB0aGlzLmZpbGxBbW91bnQsIHRoaXMuYmdBbW91bnQsIHRoaXMuYm9sZEFtb3VudCxcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTElHTkVTIE1BTlVFTExFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE1hbnVhbExpbmVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgdGV4dCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRleHRcIiwgZGlzcGxheU5hbWU6IFwiVGV4dGVcIiwgdmFsdWU6IFwiTm91dmVsbGUgTGlnbmVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJMaWJlbGzDqS4uLlwiIC8vIENPUlJFQ1RJT05cclxuICAgIH0pO1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIiwgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXJcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGNvbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImNvbFwiLCBkaXNwbGF5TmFtZTogXCJDb2xvbm5lXCIsIHZhbHVlOiAxXHJcbiAgICB9KTtcclxuICAgIHBvcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInBvc1wiLCBkaXNwbGF5TmFtZTogXCJQb3NpdGlvblwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBpc0hlYWRlciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImlzSGVhZGVyXCIsIGRpc3BsYXlOYW1lOiBcIlRpdHJlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBiZ0NvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiZ0NvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkZvbmRcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuICAgIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlXCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBtYXJnaW5Ub3AgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Ub3BcIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgSGF1dFwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIlRhaWxsZVwiLCB2YWx1ZTogMTJcclxuICAgIH0pO1xyXG4gICAgYm9sZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImJvbGRcIiwgZGlzcGxheU5hbWU6IFwiR3Jhc1wiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXRhbGljID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXRhbGljXCIsIGRpc3BsYXlOYW1lOiBcIkl0YWxpcXVlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXIgQm9yZHVyZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBCb3JkdXJlXCIsIHZhbHVlOiB7IHZhbHVlOiBcIiNlZWVcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csIHRoaXMudGV4dCwgdGhpcy5jb2wsIHRoaXMucG9zLFxyXG4gICAgICAgIHRoaXMuaXNIZWFkZXIsIHRoaXMubWFyZ2luVG9wLFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yLCB0aGlzLmJnQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSwgdGhpcy5ib2xkLCB0aGlzLml0YWxpYyxcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQk9SRFVSRVMgVEFCTEVBVSBHTE9CQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBUYWJsZUJvcmRlcnNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0YWJsZUJvcmRlcnNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIvCflLIgQk9SRFVSRVMgVEFCTEVBVVwiO1xyXG5cclxuICAgIGJvcmRlcldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyV2lkdGhcIiwgZGlzcGxheU5hbWU6IFwiTGFyZ2V1clwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLCB2YWx1ZTogeyB2YWx1ZTogXCJyZ2JhKDAsMCwwLDAuMjUpXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlclN0eWxlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R5bGVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJQbGVpblwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJQbGVpblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlRpcmV0c1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZG90dGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkb3VibGVcIiwgZGlzcGxheU5hbWU6IFwiRG91YmxlXCIgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgYm9yZGVyUmFkaXVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyUmFkaXVzXCIsIGRpc3BsYXlOYW1lOiBcIkFycm9uZGlcIiwgdmFsdWU6IDhcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUsIHRoaXMuYm9yZGVyUmFkaXVzXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTU9Ew4hMRSBQUklOQ0lQQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIHRpdHJlc0NvbG9ubmVzID0gbmV3IFRpdHJlc0NvbG9ubmVzU2V0dGluZ3MoKTtcclxuICAgIHNlbGVjdGlvbk1lbnUgPSBuZXcgU2VsZWN0aW9uTWVudVNldHRpbmdzKCk7XHJcbiAgICBzdHlsZUxpZ25lID0gbmV3IFN0eWxlTGlnbmVTZXR0aW5ncygpO1xyXG4gICAgdGFibGVCb3JkZXJzID0gbmV3IFRhYmxlQm9yZGVyc1NldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIGNhcmRzOiBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkW10gPSBbXHJcbiAgICAgICAgdGhpcy50aXRyZXNDb2xvbm5lcyxcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1lbnUsXHJcbiAgICAgICAgdGhpcy5zdHlsZUxpZ25lLFxyXG4gICAgICAgIHRoaXMudGFibGVCb3JkZXJzXHJcbiAgICBdO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElWaXN1YWxIb3N0ID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuXHJcbi8vIEltcG9ydGF0aW9uIGRlcyB0eXBlcyBwb3VyIGxhIGdlc3Rpb24gZGVzIGxpY2VuY2VzIChBUEkgNC43KylcclxuaW1wb3J0IElWaXN1YWxMaWNlbnNlTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JVmlzdWFsTGljZW5zZU1hbmFnZXI7XHJcbmltcG9ydCBMaWNlbnNlSW5mb1Jlc3VsdCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuTGljZW5zZUluZm9SZXN1bHQ7XHJcbmltcG9ydCBTZXJ2aWNlUGxhbiA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuU2VydmljZVBsYW47XHJcbmltcG9ydCBTZXJ2aWNlUGxhblN0YXRlID0gcG93ZXJiaS5TZXJ2aWNlUGxhblN0YXRlO1xyXG5pbXBvcnQgTGljZW5zZU5vdGlmaWNhdGlvblR5cGUgPSBwb3dlcmJpLkxpY2Vuc2VOb3RpZmljYXRpb25UeXBlO1xyXG5cclxuLy8gSW1wb3J0YXRpb24gZHUgU2VydmljZSBkZSBmb3JtYXRhZ2UgKEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UpXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLCBNYW51YWxMaW5lU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICAgIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGFtb3VudDogc3RyaW5nO1xyXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcjtcclxuICAgIHNvcnRJbmRleDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBtYXJnaW5Cb3R0b206IG51bWJlcjtcclxuICAgIG1hcmdpblRvcDogbnVtYmVyO1xyXG4gICAgbWFyZ2luQ29sb3I6IHN0cmluZztcclxuICAgIGlzSGlkZGVuOiBib29sZWFuO1xyXG4gICAgaXNIZWFkZXI6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGlzVmlydHVhbDogYm9vbGVhbjtcclxuXHJcbiAgICBmb250OiBzdHJpbmc7IGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBiZ0xhYmVsOiBzdHJpbmc7IGNvbG9yTGFiZWw6IHN0cmluZzsgYm9sZExhYmVsOiBib29sZWFuOyBpdGFsaWNMYWJlbDogYm9vbGVhbjtcclxuICAgIGJnQW1vdW50OiBzdHJpbmc7IGNvbG9yQW1vdW50OiBzdHJpbmc7IGJvbGRBbW91bnQ6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGN1c3RvbUFtb3VudDogc3RyaW5nO1xyXG4gICAgY3VzdG9tTGFiZWw/OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIC8vIEJvcmR1cmVzIGNvbXBsw6h0ZXMgKDQgY8O0dMOpcylcclxuICAgIGJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsIGltcGxlbWVudHMgSVZpc3VhbCB7XHJcbiAgICBwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGhvc3Q6IElWaXN1YWxIb3N0O1xyXG4gICAgcHJpdmF0ZSBkaXZDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhbGxSb3dzRGF0YTogUm93RGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGNhdGVnb3JpY2FsRGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2VsZWN0ZWRMYWJlbDogc3RyaW5nID0gXCJcIjsgXHJcbiAgICBwcml2YXRlIGNvbHVtblRpdGxlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWV0YWRhdGE6IGFueTtcclxuICAgIHByaXZhdGUgdG9vbGJhcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHByaXZhdGUgcGVuZGluZ0NoYW5nZXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIG1hbnVhbExpbmVLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc2VsZWN0aW9uTWFuYWdlcjogcG93ZXJiaS5leHRlbnNpYmlsaXR5LklTZWxlY3Rpb25NYW5hZ2VyO1xyXG5cclxuICAgIC8vIEJvcmR1cmVzIGdsb2JhbGVzIGR1IHRhYmxlYXVcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJDb2xvcjogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMjUpXCI7XHJcbiAgICBwcml2YXRlIHRhYmxlQm9yZGVyU3R5bGU6IHN0cmluZyA9IFwic29saWRcIjtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgLy8gTW9kw6hsZSBkZSBmb3JtYXRhZ2UgKEFQSSA1LjEpXHJcbiAgICBwcml2YXRlIGZvcm1hdHRpbmdTZXR0aW5nczogVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWw7XHJcbiAgICAvLyBTZXJ2aWNlIGRlIGZvcm1hdGFnZSAoTsOpY2Vzc2FpcmUgcG91ciBidWlsZEZvcm1hdHRpbmdNb2RlbClcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuXHJcbiAgICAvLyBMaWNlbnNlIHJlbGF0ZWQgcHJvcGVydGllc1xyXG4gICAgcHJpdmF0ZSBsaWNlbnNlTWFuYWdlcjogSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlclZhbGlkUGxhbnM6IFNlcnZpY2VQbGFuW10gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGhhc1NlcnZpY2VQbGFuczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTGljZW5zZUluZm9BdmFpbGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gSGVscGVyIGNlbnRyYWxpc8OpIHBvdXIgcGVyc2lzdGVyIGxlcyBwcm9wcmnDqXTDqXMgZCd1bmUgbGlnbmUgKG1lcmdlIHNhZmUgKyBsb2dzKVxyXG4gICAgcHJpdmF0ZSBwZXJzaXN0U3R5bGUoc2VsZWN0b3I6IGFueSwgcHJvcGVydGllczogYW55LCBvYmplY3ROYW1lOiBzdHJpbmcgPSBcInN0eWxlTGlnbmVcIikge1xyXG4gICAgICAgIC8vIG5ldHRveWVyIGxlcyBjbMOpcyB1bmRlZmluZWRcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzIHx8IHt9KS5mb3JFYWNoKGsgPT4geyBpZiAocHJvcGVydGllc1trXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcHJvcGVydGllc1trXTsgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIFNUWUxFIC0+IG9iamVjdDpcIiwgb2JqZWN0TmFtZSwgXCJzZWxlY3RvcjpcIiwgc2VsZWN0b3IsIFwicHJvcHM6XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCBTVFlMRSBPSyAtPlwiLCBvYmplY3ROYW1lKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBFUlNJU1QgU1RZTEUgRVJST1I6XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTGljZW5zZU5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudikge1xyXG4gICAgICAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlMaWNlbnNlUmVxdWlyZWQoTGljZW5zZU5vdGlmaWNhdGlvblR5cGUuVW5zdXBwb3J0ZWRFbnYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzU2VydmljZVBsYW5zKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZChMaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5WaXN1YWxJc0Jsb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgc2VydmljZSBkZSBmb3JtYXRhZ2VcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG5cclxuICAgICAgICAvLyBMaWNlbnNlIE1hbmFnZW1lbnRcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyID0gb3B0aW9ucy5ob3N0LmxpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIuZ2V0QXZhaWxhYmxlU2VydmljZVBsYW5zKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogTGljZW5zZUluZm9SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSByZXN1bHQuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZUluZm9BdmFpbGFibGUgPSByZXN1bHQuaXNMaWNlbnNlSW5mb0F2YWlsYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xpY2Vuc2VJbmZvQXZhaWxhYmxlICYmICF0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMgPSByZXN1bHQucGxhbnM/LmZpbHRlcigocGxhbjogU2VydmljZVBsYW4pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPUFRJT05ORUwgOiBTaSB2b3VzIHZvdWxleiByZXN0cmVpbmRyZSDDoCB1biBwbGFuIHNww6ljaWZpcXVlIGTDqWZpbmkgZGFucyBsJ0VzcGFjZSBQYXJ0ZW5haXJlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAocGxhbi5zcElkZW50aWZpZXIgPT09IFwibW9uX2lkX2RlX3BsYW5fcGFydG5lcl9jZW50ZXJcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHBsYW4uc3RhdGUgPT09IFNlcnZpY2VQbGFuU3RhdGUuQWN0aXZlIHx8IHBsYW4uc3RhdGUgPT09IFNlcnZpY2VQbGFuU3RhdGUuV2FybmluZylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gISF0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucz8ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlTGljZW5zZU5vdGlmaWNhdGlvbigpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkxpY2Vuc2UgY2hlY2sgZmFpbGVkOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc1NlcnZpY2VQbGFucyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgZ2VzdGlvbm5haXJlIGRlIHPDqWxlY3Rpb24gcG91ciBsZXMgbWVudXMgY29udGV4dHVlbHNcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uTWFuYWdlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGR1IGdlc3Rpb25uYWlyZSBkZSBzw6lsZWN0aW9uIHBvdXIgbGVzIG1lbnVzIGNvbnRleHR1ZWxzXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbk1hbmFnZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2Nyb2xsLXdyYXBwZXJcIjtcclxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLmRpdkNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuY2xhc3NOYW1lID0gXCJhY2NvdW50aW5nLWNvbnRhaW5lclwiO1xyXG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmxleENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmNsYXNzTmFtZSA9IFwiZmxvYXRpbmctdG9vbGJhclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvb2xiYXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIiAmJiBcclxuICAgICAgICAgICAgICAgICF0aGlzLnRvb2xiYXIuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICAvLyBJbml0aWFsaXNlciBsZSBtb2TDqGxlIGRlIGZvcm1hdGFnZVxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzID0gbmV3IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKCk7XHJcblxyXG4gICAgICAgIC8vIE5ldHRveWFnZSBzw6ljdXJpc8OpXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYWxsUm93c0RhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLm1hbnVhbExpbmVLZXlzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGFWaWV3ID0gb3B0aW9ucy5kYXRhVmlld3NbMF07XHJcbiAgICAgICAgdGhpcy5tZXRhZGF0YSA9IGRhdGFWaWV3ID8gZGF0YVZpZXcubWV0YWRhdGEgOiBudWxsO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmljYWxEYXRhID0gZGF0YVZpZXcgJiYgZGF0YVZpZXcuY2F0ZWdvcmljYWwgPyBkYXRhVmlldy5jYXRlZ29yaWNhbCA6IG51bGw7XHJcblxyXG4gICAgICAgIC8vIENoYXJnZXIgbGVzIGJvcmR1cmVzIGdsb2JhbGVzIGR1IHRhYmxlYXVcclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGFibGVCb3JkZXJzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRiID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGFibGVCb3JkZXJzXCJdO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJXaWR0aFwiXSAhPT0gdW5kZWZpbmVkKSB0aGlzLnRhYmxlQm9yZGVyV2lkdGggPSB0YltcImJvcmRlcldpZHRoXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyQ29sb3JcIl0pIHRoaXMudGFibGVCb3JkZXJDb2xvciA9ICh0YltcImJvcmRlckNvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlclN0eWxlXCJdKSB0aGlzLnRhYmxlQm9yZGVyU3R5bGUgPSB0YltcImJvcmRlclN0eWxlXCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyUmFkaXVzXCJdICE9PSB1bmRlZmluZWQpIHRoaXMudGFibGVCb3JkZXJSYWRpdXMgPSB0YltcImJvcmRlclJhZGl1c1wiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCflLIgQk9SRFVSRVMgQ0hBUkfDiUVTOlwiLCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiB0aGlzLnRhYmxlQm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLnRhYmxlQm9yZGVyQ29sb3IsXHJcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRhYmxlQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgIHJhZGl1czogdGhpcy50YWJsZUJvcmRlclJhZGl1c1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAxLiBUSVRSRVMgLSBJbml0aWFsaXNhdGlvbiBkeW5hbWlxdWVcclxuICAgICAgICB0aGlzLmNvbHVtblRpdGxlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0ID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGl0cmVzQ29sb25uZXNcIl07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IFwidGl0cmVcIiArIGk7XHJcbiAgICAgICAgICAgICAgICBpZiAodFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSA9IHRba2V5XSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDIuIERPTk7DiUVTIEVYQ0VMXHJcbiAgICAgICAgbGV0IG1heENvbHVtbkluZGV4VXNlZCA9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmljYWxEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YS5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YS52YWx1ZXMgPyB0aGlzLmNhdGVnb3JpY2FsRGF0YS52YWx1ZXNbMF0gOiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInNlbGVjdGlvbk1lbnVcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdW1wibGlnbmVBY3RpdmVcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCAmJiBjYXRlZ29yaWVzLnZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsID0gY2F0ZWdvcmllcy52YWx1ZXNbMF0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcmllcy52YWx1ZXMuZm9yRWFjaCgoY2F0VmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5hbWUgPSBjYXRWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJvdzogUm93RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE5hbWU6IG9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogb3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFtb3VudDogdmFsdWVzID8gdmFsdWVzLnZhbHVlc1tpbmRleF0/LnRvU3RyaW5nKCkgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiAxLCBzb3J0SW5kZXg6IGluZGV4ICogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZmFsc2UsIGlzVmlydHVhbDogZmFsc2UsIGN1c3RvbUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250OiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIiwgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IFwidHJhbnNwYXJlbnRcIiwgY29sb3JMYWJlbDogXCJibGFja1wiLCBib2xkTGFiZWw6IGZhbHNlLCBpdGFsaWNMYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdBbW91bnQ6IFwidHJhbnNwYXJlbnRcIiwgY29sb3JBbW91bnQ6IFwiYmxhY2tcIiwgYm9sZEFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGNhdGVnb3JpZXMub2JqZWN0c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdFtcInN0eWxlTGlnbmVcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBvYmplY3RbXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJjb2x1bW5JbmRleFwiXSkgcm93LmNvbHVtbkluZGV4ID0gc3R5bGVbXCJjb2x1bW5JbmRleFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3cuY29sdW1uSW5kZXggPCAxKSByb3cuY29sdW1uSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJvcmRyZVRyaVwiXSAhPT0gdW5kZWZpbmVkKSByb3cuc29ydEluZGV4ID0gc3R5bGVbXCJvcmRyZVRyaVwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJtYXJnaW5Cb3R0b21cIl0gIT09IHVuZGVmaW5lZCkgcm93Lm1hcmdpbkJvdHRvbSA9IHN0eWxlW1wibWFyZ2luQm90dG9tXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luVG9wXCJdICE9PSB1bmRlZmluZWQpIHJvdy5tYXJnaW5Ub3AgPSBzdHlsZVtcIm1hcmdpblRvcFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImlzSGlkZGVuXCJdKSByb3cuaXNIaWRkZW4gPSBzdHlsZVtcImlzSGlkZGVuXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm1hcmdpbkNvbG9yXCJdKSByb3cubWFyZ2luQ29sb3IgPSAoc3R5bGVbXCJtYXJnaW5Db2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJjdXN0b21MYWJlbFwiXSkgcm93LmxhYmVsID0gc3R5bGVbXCJjdXN0b21MYWJlbFwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImN1c3RvbUFtb3VudFwiXSkgcm93LmN1c3RvbUFtb3VudCA9IHN0eWxlW1wiY3VzdG9tQW1vdW50XCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiaXNIZWFkZXJcIl0pIHJvdy5pc0hlYWRlciA9IHN0eWxlW1wiaXNIZWFkZXJcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZm9udFNpemVcIl0pIHJvdy5mb250U2l6ZSA9IHN0eWxlW1wiZm9udFNpemVcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmb250RmFtaWx5XCJdKSByb3cuZm9udCA9IHN0eWxlW1wiZm9udEZhbWlseVwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJnTGFiZWxcIl0pIHJvdy5iZ0xhYmVsID0gKHN0eWxlW1wiYmdMYWJlbFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmaWxsTGFiZWxcIl0pIHJvdy5jb2xvckxhYmVsID0gKHN0eWxlW1wiZmlsbExhYmVsXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvbGRMYWJlbFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuYm9sZExhYmVsID0gc3R5bGVbXCJib2xkTGFiZWxcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiaXRhbGljTGFiZWxcIl0gIT09IHVuZGVmaW5lZCkgcm93Lml0YWxpY0xhYmVsID0gc3R5bGVbXCJpdGFsaWNMYWJlbFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJiZ0Ftb3VudFwiXSkgcm93LmJnQW1vdW50ID0gKHN0eWxlW1wiYmdBbW91bnRcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZmlsbEFtb3VudFwiXSkgcm93LmNvbG9yQW1vdW50ID0gKHN0eWxlW1wiZmlsbEFtb3VudFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib2xkQW1vdW50XCJdICE9PSB1bmRlZmluZWQpIHJvdy5ib2xkQW1vdW50ID0gc3R5bGVbXCJib2xkQW1vdW50XCJdIGFzIGJvb2xlYW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib3JkZXJXaWR0aFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuYm9yZGVyV2lkdGggPSBzdHlsZVtcImJvcmRlcldpZHRoXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9yZGVyQ29sb3JcIl0pIHJvdy5ib3JkZXJDb2xvciA9IChzdHlsZVtcImJvcmRlckNvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcHBsaXF1ZXIgbGVzIGNoYW5nZW1lbnRzIGVuIGF0dGVudGUgKG9wdGltaXN0ZSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlbmRpbmdDaGFuZ2VzLmhhcyhvcmlnaW5hbE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVuZGluZyA9IHRoaXMucGVuZGluZ0NoYW5nZXMuZ2V0KG9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBwZW5kaW5nLnRpbWVzdGFtcCA8IDMwMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbGxNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGVuZGluZykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ0aW1lc3RhbXBcIikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmdba2V5XSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHJvd1trZXldID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gTWF0aC5hYnMocGVuZGluZ1trZXldIC0gcm93W2tleV0pIDwgMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBwZW5kaW5nW2tleV0gPT09IHJvd1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1trZXldID0gcGVuZGluZ1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbE1hdGNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxNYXRjaGVkKSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmRlbGV0ZShvcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuZGVsZXRlKG9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAocm93LmNvbHVtbkluZGV4ID4gbWF4Q29sdW1uSW5kZXhVc2VkKSBtYXhDb2x1bW5JbmRleFVzZWQgPSByb3cuY29sdW1uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAzLiBMSUdORVMgTUFOVUVMTEVTIERZTkFNSVFVRVNcclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5tZXRhZGF0YS5vYmplY3RzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJtYW51YWxMaW5lXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW51YWxMaW5lS2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzW1wic2hvd1wiXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHh0ID0gc1tcInRleHRcIl0gPyBzW1widGV4dFwiXSBhcyBzdHJpbmcgOiBcIk5vdXZlbGxlIExpZ25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2wgPSBzW1wiY29sXCJdID8gc1tcImNvbFwiXSBhcyBudW1iZXIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gc1tcInBvc1wiXSA/IHNbXCJwb3NcIl0gYXMgbnVtYmVyIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzSGVhZCA9IHNbXCJpc0hlYWRlclwiXSA/IHNbXCJpc0hlYWRlclwiXSBhcyBib29sZWFuIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiZyA9IHNbXCJiZ0NvbG9yXCJdID8gKHNbXCJiZ0NvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3IgOiBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvciA9IHNbXCJ0ZXh0Q29sb3JcIl0gPyAoc1tcInRleHRDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCJibGFja1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXQgPSBzW1wibWFyZ2luVG9wXCJdID8gc1tcIm1hcmdpblRvcFwiXSBhcyBudW1iZXIgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnMgPSBzW1wiZm9udFNpemVcIl0gPyBzW1wiZm9udFNpemVcIl0gYXMgbnVtYmVyIDogMTI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBibyA9IHNbXCJib2xkXCJdID8gc1tcImJvbGRcIl0gYXMgYm9vbGVhbiA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXQgPSBzW1wiaXRhbGljXCJdID8gc1tcIml0YWxpY1wiXSBhcyBib29sZWFuIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidyA9IHNbXCJib3JkZXJXaWR0aFwiXSAhPT0gdW5kZWZpbmVkID8gc1tcImJvcmRlcldpZHRoXCJdIGFzIG51bWJlciA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiYyA9IHNbXCJib3JkZXJDb2xvclwiXSA/IChzW1wiYm9yZGVyQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvciA6IFwiI2VlZVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZSb3c6IFJvd0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE5hbWU6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0eHQsIGFtb3VudDogXCJcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sLCBzb3J0SW5kZXg6IHBvcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiBtdCwgaXNIaWRkZW46IGZhbHNlLCBtYXJnaW5Db2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGlzSGVhZCwgaXNWaXJ0dWFsOiB0cnVlLCBjdXN0b21BbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250OiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIiwgZm9udFNpemU6IGZzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogYmcsIGNvbG9yTGFiZWw6IGNvbG9yLCBib2xkTGFiZWw6IGJvLCBpdGFsaWNMYWJlbDogaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDogYmcsIGNvbG9yQW1vdW50OiBjb2xvciwgYm9sZEFtb3VudDogYm8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogYncsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5wdXNoKHZSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA0LiBSRU5EVVxyXG4gICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sdW1uSW5kZXhVc2VkLCB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJXaWR0aCA9IGAke3RoaXMudGFibGVCb3JkZXJXaWR0aH1weGA7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlclN0eWxlID0gdGhpcy50YWJsZUJvcmRlclN0eWxlO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMudGFibGVCb3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7dGhpcy50YWJsZUJvcmRlclJhZGl1c31weGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEgPyB0aGlzLmNhdGVnb3JpY2FsRGF0YS5jYXRlZ29yaWVzWzBdIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEJvdXRvbnMgZCdhY3Rpb25zXHJcbiAgICAgICAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0b2dnbGVCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLmNsYXNzTmFtZSA9IFwidG9nZ2xlLWFjdGlvbnMtYnV0dG9uXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnRleHRDb250ZW50ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwi4peAXCIgOiBcIuKWtlwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi50aXRsZSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIk1hc3F1ZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIiA6IFwiQWZmaWNoZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5taW5XaWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUubWFyZ2luID0gXCI2cHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm94U2hhZG93ID0gXCIwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA4KVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4yc1wiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVCdG4ub25tb3VzZW92ZXIgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4xKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9nZ2xlQnRuLm9ubW91c2VvdXQgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjYjNkN2ZmXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVCdG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA9ICF0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4udGV4dENvbnRlbnQgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCLil4BcIiA6IFwi4pa2XCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi50aXRsZSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIk1hc3F1ZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIiA6IFwiQWZmaWNoZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpZiAocmVtb3ZlQ29sdW1uRGl2KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodG9nZ2xlQnRuKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhZGRDb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuY2xhc3NOYW1lID0gXCJhZGQtY29sdW1uLWJ1dHRvblwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm1pbldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjJzXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmNvbG9yID0gXCIjNjY2XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCAjY2NjXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi50ZXh0Q29udGVudCA9IFwi4p6VXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnRpdGxlID0gXCJBam91dGVyIHVuZSBub3V2ZWxsZSBjb2xvbm5lXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkQ29sdW1uRGl2Lm9ubW91c2VvdmVyID0gKCkgPT4geyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiIzk5OVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2Lm9ubW91c2VvdXQgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNjY2NcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUFkZENvbHVtbiA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBcIkNPTE9OTkUgXCIgKyBuZXdJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFtcInRpdHJlXCIgKyBuZXdJbmRleF06IG5ld1RpdGxlIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQWRkQ29sdW1uLCB0cnVlKTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZENvbHVtbkRpdik7XHJcblxyXG4gICAgICAgIGxldCByZW1vdmVDb2x1bW5EaXY6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG1heENvbHVtbnNUb1Nob3cgPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtcHR5Q29sczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpICYmICFyLmlzSGlkZGVuKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2xSb3dzLmxlbmd0aCA9PT0gMCkgZW1wdHlDb2xzLnB1c2goaSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbXB0eUNvbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5jbGFzc05hbWUgPSBcInJlbW92ZS1jb2x1bW4tYnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5taW5XaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuN1wiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yc1wiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuY29sb3IgPSBcIiNjMDBcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgI2MwMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUucGFkZGluZyA9IFwiMTJweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYudGV4dENvbnRlbnQgPSBcIvCfl5HvuI9cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi50aXRsZSA9IGBTdXBwcmltZXIgdG91dGVzIGxlcyBjb2xvbm5lcyB2aWRlcyAoJHtlbXB0eUNvbHMuam9pbihcIiwgXCIpfSlgO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q29scy5mb3JFYWNoKGNvbCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFtcInRpdHJlXCIgKyBjb2xdOiB1bmRlZmluZWQgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUNvbHVtbkRpdik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZExpbmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGFkZExpbmVCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5jbGFzc05hbWUgPSBcImFkZC1saW5lLWJ1dHRvblwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjZweFwiO1xyXG5cclxuICAgICAgICBjb25zdCBidG5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLndpZHRoID0gXCIyMnB4XCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5oZWlnaHQgPSBcIjIycHhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJhY2tncm91bmQgPSBcIiNlNmYyZmZcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYjNkN2ZmXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5jb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xyXG4gICAgICAgIGJ0bkljb24udGV4dENvbnRlbnQgPSBcIitcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGJ0blRleHQuc3R5bGUuY29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICBidG5UZXh0LnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgYnRuVGV4dC5zdHlsZS5mb250V2VpZ2h0ID0gXCI1MDBcIjtcclxuICAgICAgICBidG5UZXh0LnRleHRDb250ZW50ID0gXCJMaWduZVwiO1xyXG5cclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuSWNvbik7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blRleHQpO1xyXG4gICAgICAgIGFkZExpbmVCdG4uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgYWRkTGluZUJ0bi50aXRsZSA9IFwiQWpvdXRlciB1bmUgbm91dmVsbGUgbGlnbmVcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLm1hcmdpbiA9IFwiNnB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5wYWRkaW5nID0gXCIycHggMTJweFwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMThweFwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm94U2hhZG93ID0gXCIwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA0KVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmZvbnRGYW1pbHkgPSBcIidTZWdvZSBVSScsIEFyaWFsLCBzYW5zLXNlcmlmXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4ub25tb3VzZW92ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRMaW5lQnRuLm9ubW91c2VvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2IzZDdmZlwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWRkTGluZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBsZXQgbmV4dEluZGV4ID0gMTtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMubWFudWFsTGluZUtleXMuaW5jbHVkZXMoXCJtYW51YWxMaW5lXCIgKyBuZXh0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0SW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBuZXdLZXkgPSBcIm1hbnVhbExpbmVcIiArIG5leHRJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG5ld0tleSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTm91dmVsbGUgTGlnbmUgXCIgKyBuZXh0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogeyBzb2xpZDogeyBjb2xvcjogXCJibGFja1wiIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGFsaWM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkTGluZUJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOT1VWRUxMRSBNw4lUSE9ERSBPQkxJR0FUT0lSRSBBUEkgNS4xK1xyXG4gICAgICogUmVtcGxhY2UgZW51bWVyYXRlT2JqZWN0SW5zdGFuY2VzIHBvdXIgbGEgY2VydGlmaWNhdGlvbiBQb3dlciBCSVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Rm9ybWF0dGluZ01vZGVsKCk6IHBvd2VyYmkudmlzdWFscy5Gb3JtYXR0aW5nTW9kZWwge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsID0gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3M7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEEuIFRJVFJFUyBDT0xPTk5FU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0T2JqID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGl0cmVzQ29sb25uZXNcIl07XHJcbiAgICAgICAgICAgIG1vZGVsLnRpdHJlc0NvbG9ubmVzLnNsaWNlcy5mb3JFYWNoKHNsaWNlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0T2JqW3NsaWNlLm5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHNsaWNlIGFzIGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQpLnZhbHVlID0gdE9ialtzbGljZS5uYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBCLiBNRU5VIFPDiUxFQ1RJT05cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXSkge1xyXG4gICAgICAgICAgICBtb2RlbC5zZWxlY3Rpb25NZW51LmxpZ25lQWN0aXZlLnZhbHVlID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXVtcImxpZ25lQWN0aXZlXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQy4gU1RZTEUgREUgTElHTkUgKExvZ2lxdWUgY29udGV4dHVlbGxlKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3JpY2FsRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhDaG9pc2kgPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4Q2hvaXNpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVDYXJkID0gbW9kZWwuc3R5bGVMaWduZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGluZGV4Q2hvaXNpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBc3NpZ25lciBsZSBzw6lsZWN0ZXVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RvciA9IHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBzdHlsZUNhcmQuc2VsZWN0b3IgPSBzZWxlY3RvcjtcclxuICAgICAgICAgICAgICAgIC8vIENPUlJFQ1RJT046IGFzc2lnbmVyIGF1c3NpIGxlIHNlbGVjdG9yIMOgIENIQVFVRSBzbGljZSBwb3VyIHF1ZSBsZXMgcGVyc2lzdFByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIC8vIGTDqWNsZW5jaMOpcyBkZXB1aXMgbGUgcGFubmVhdSBkZSBmb3JtYXQgY2libGVudCBiaWVuIGxhIGxpZ25lIHPDqWxlY3Rpb25uw6llLlxyXG4gICAgICAgICAgICAgICAgKHN0eWxlQ2FyZC5zbGljZXMgfHwgW10pLmZvckVhY2gocyA9PiB7IChzIGFzIGFueSkuc2VsZWN0b3IgPSBzZWxlY3RvcjsgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFJvdyA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1wbGlzc2FnZSBkeW5hbWlxdWUgZGVzIHNsaWNlcyBwYXIgbGV1ciBuYW1lIOKAlCDDqXZpdGUgbGVzIHByb2Jsw6htZXMgZGUgdHlwYWdlIChjb2xvciBwaWNrZXJzLCBldGMuKVxyXG4gICAgICAgICAgICAgICAgICAgIChzdHlsZUNhcmQuc2xpY2VzIHx8IFtdKS5mb3JFYWNoKHNsaWNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IChzbGljZSBhcyBhbnkpLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmFtZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjb2x1bW5JbmRleFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuY29sdW1uSW5kZXg7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm9yZHJlVHJpXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5zb3J0SW5kZXg7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmdpblRvcFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cubWFyZ2luVG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJnaW5Cb3R0b21cIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93Lm1hcmdpbkJvdHRvbTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFyZ2luQ29sb3JcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93Lm1hcmdpbkNvbG9yIH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlzSGlkZGVuXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5pc0hpZGRlbjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXNIZWFkZXJcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmlzSGVhZGVyOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjdXN0b21MYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuY3VzdG9tTGFiZWwgfHwgXCJcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3VzdG9tQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5jdXN0b21BbW91bnQgfHwgXCJcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9udFNpemVcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmZvbnRTaXplOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb250RmFtaWx5XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5mb250OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiZ0xhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5iZ0xhYmVsIH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cuY29sb3JMYWJlbCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib2xkTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmJvbGRMYWJlbDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXRhbGljTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93Lml0YWxpY0xhYmVsOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJiZ0Ftb3VudFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cuYmdBbW91bnQgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbEFtb3VudFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cuY29sb3JBbW91bnQgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9sZEFtb3VudFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuYm9sZEFtb3VudDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9yZGVyV2lkdGhcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmJvcmRlcldpZHRoOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3JkZXJDb2xvclwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cuYm9yZGVyQ29sb3IgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRC4gTElHTkVTIE1BTlVFTExFUyAoRHluYW1pcXVlKVxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cykge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5tZXRhZGF0YS5vYmplY3RzKS5maWx0ZXIoayA9PiBrLnN0YXJ0c1dpdGgoXCJtYW51YWxMaW5lXCIpKS5zb3J0KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hbnVhbE9iaiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1trZXldO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51YWxDYXJkID0gbmV3IE1hbnVhbExpbmVTZXR0aW5ncygpO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5uYW1lID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5kaXNwbGF5TmFtZSA9IG1hbnVhbE9ialtcInRleHRcIl0gPyBTdHJpbmcobWFudWFsT2JqW1widGV4dFwiXSkgOiBrZXk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQudGV4dC52YWx1ZSA9IG1hbnVhbE9ialtcInRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLnNob3cudmFsdWUgPSBtYW51YWxPYmpbXCJzaG93XCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5jb2wudmFsdWUgPSBtYW51YWxPYmpbXCJjb2xcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLnBvcy52YWx1ZSA9IG1hbnVhbE9ialtcInBvc1wiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuaXNIZWFkZXIudmFsdWUgPSBtYW51YWxPYmpbXCJpc0hlYWRlclwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxPYmpbXCJiZ0NvbG9yXCJdKSBtYW51YWxDYXJkLmJnQ29sb3IudmFsdWUgPSBtYW51YWxPYmpbXCJiZ0NvbG9yXCJdW1wic29saWRcIl1bXCJjb2xvclwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxPYmpbXCJ0ZXh0Q29sb3JcIl0pIG1hbnVhbENhcmQudGV4dENvbG9yLnZhbHVlID0gbWFudWFsT2JqW1widGV4dENvbG9yXCJdW1wic29saWRcIl1bXCJjb2xvclwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQubWFyZ2luVG9wLnZhbHVlID0gbWFudWFsT2JqW1wibWFyZ2luVG9wXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5mb250U2l6ZS52YWx1ZSA9IG1hbnVhbE9ialtcImZvbnRTaXplXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5ib2xkLnZhbHVlID0gbWFudWFsT2JqW1wiYm9sZFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuaXRhbGljLnZhbHVlID0gbWFudWFsT2JqW1wiaXRhbGljXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5ib3JkZXJXaWR0aC52YWx1ZSA9IG1hbnVhbE9ialtcImJvcmRlcldpZHRoXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbE9ialtcImJvcmRlckNvbG9yXCJdKSBtYW51YWxDYXJkLmJvcmRlckNvbG9yLnZhbHVlID0gbWFudWFsT2JqW1wiYm9yZGVyQ29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFqb3V0ZXIgbGEgY2FydGUgbWFudWVsbGUgw6AgbGEgbGlzdGUgZGVzIGNhcnRlcyBkdSBtb2TDqGxlXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5jYXJkcy5wdXNoKG1hbnVhbENhcmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEUuIEJPUkRVUkVTIEdMT0JBTEVTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXSkge1xyXG4gICAgICAgICAgICBjb25zdCBib3JkZXJPYmogPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl07XHJcbiAgICAgICAgICAgIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJXaWR0aC52YWx1ZSA9IGJvcmRlck9ialtcImJvcmRlcldpZHRoXCJdO1xyXG4gICAgICAgICAgICBtb2RlbC50YWJsZUJvcmRlcnMuYm9yZGVyUmFkaXVzLnZhbHVlID0gYm9yZGVyT2JqW1wiYm9yZGVyUmFkaXVzXCJdO1xyXG4gICAgICAgICAgICBpZiAoYm9yZGVyT2JqW1wiYm9yZGVyQ29sb3JcIl0pIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJDb2xvci52YWx1ZSA9IGJvcmRlck9ialtcImJvcmRlckNvbG9yXCJdW1wic29saWRcIl1bXCJjb2xvclwiXTtcclxuICAgICAgICAgICAgaWYgKGJvcmRlck9ialtcImJvcmRlclN0eWxlXCJdKSBtb2RlbC50YWJsZUJvcmRlcnMuYm9yZGVyU3R5bGUudmFsdWUgPSB7IHZhbHVlOiBib3JkZXJPYmpbXCJib3JkZXJTdHlsZVwiXSBhcyBzdHJpbmcsIGRpc3BsYXlOYW1lOiBib3JkZXJPYmpbXCJib3JkZXJTdHlsZVwiXSBhcyBzdHJpbmcgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENPUlJFQ1RJT04gTUFKRVVSRTogVXRpbGlzZXIgbGUgc2VydmljZSBwb3VyIGNvbnN0cnVpcmUgbGUgbW9kw6hsZVxyXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuYnVpbGRGb3JtYXR0aW5nTW9kZWwobW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyVGFibGVDb250ZW50KHRhcmdldFRhYmxlOiBIVE1MVGFibGVFbGVtZW50LCB0aXRsZTogc3RyaW5nLCByb3dzOiBSb3dEYXRhW10sIGNvbEluZGV4OiBudW1iZXIsIGNhdGVnb3JpZXM6IGFueSkge1xyXG4gICAgICAgIC8vIFtDb250ZW51IGluY2hhbmfDqSBwb3VyIGxlIHJlbmR1XVxyXG4gICAgICAgIHJvd3Muc29ydCgoYSwgYikgPT4gYS5zb3J0SW5kZXggLSBiLnNvcnRJbmRleCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIik7XHJcbiAgICAgICAgY29uc3QgdHJIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIHRoLmNvbFNwYW4gPSAyO1xyXG4gICAgICAgIHRoLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHRoLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiMzBweFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5taW5XaWR0aCA9IFwiMTAwcHhcIjtcclxuICAgICAgICB0aC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinI/vuI9cIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucmlnaHQgPSBcIjVweFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUudG9wID0gXCI1MCVcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtNTAlKVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMnNcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA2cHhcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIGVkaXRCdG4udGl0bGUgPSBcIlJlbm9tbWVyIGNldHRlIGNvbG9ubmVcIjtcclxuICAgICAgICBlZGl0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVkaXRCdG4ub25tb3VzZW92ZXIgPSAoKSA9PiB7IGVkaXRCdG4uc3R5bGUub3BhY2l0eSA9IFwiMVwiOyB9O1xyXG4gICAgICAgIGVkaXRCdG4ub25tb3VzZW91dCA9ICgpID0+IHsgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjsgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVFZGl0ID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwidHJ1ZVwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmM2NkXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5jb2xvciA9IFwiIzAwMDAwMFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDRweFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uPy5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uPy5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinJNcIjtcclxuICAgICAgICAgICAgZWRpdEJ0bi5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVFZGl0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IHRpdGxlU3Bhbi5pbm5lclRleHQudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAobmV3VGl0bGUgJiYgbmV3VGl0bGUgIT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInRpdHJlc0NvbG9ubmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFtcInRpdHJlXCIgKyBjb2xJbmRleF06IG5ld1RpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlRWRpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwi4pyP77iPXCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHNhdmVFZGl0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSBzYXZlRWRpdCgpOyBlbHNlIGhhbmRsZUVkaXQoZSk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgICAgICB0ckhlYWQuYXBwZW5kQ2hpbGQodGgpOyB0aGVhZC5hcHBlbmRDaGlsZCh0ckhlYWQpOyB0YXJnZXRUYWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmlzSGlkZGVuKSByZXR1cm47IFxyXG5cclxuICAgICAgICAgICAgaWYgKHJvdy5tYXJnaW5Ub3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0clNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luVG9wICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5saW5lSGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0clNwLnN0eWxlLmZvbnRTaXplID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZFNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5jb2xTcGFuID0gMjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvdy5tYXJnaW5Db2xvcjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luVG9wICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5hcHBlbmRDaGlsZCh0ZFNwKTsgXHJcbiAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0clNwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIHRyLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmN1cnNvciA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcmFnc3RhcnQgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcm93LmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE5hbWU6IHJvdy5vcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiByb3cuY29sdW1uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogcm93LnNvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXJ0dWFsOiByb3cuaXNWaXJ0dWFsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBKU09OLnN0cmluZ2lmeShkcmFnRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRSQUcgU1RBUlQ6XCIsIGRyYWdEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ2VuZCA9IChlOiBEcmFnRXZlbnQpID0+IHsgdHIuc3R5bGUub3BhY2l0eSA9IFwiMVwiOyB9O1xyXG4gICAgICAgICAgICAvLyBERUJVRzogaGlnaGxpZ2h0IHdoZW4gcm93IHJlY2VpdmVzIGRyb3AgZXZlbnRzXHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ292ZXIgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgICAgIHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiMnB4IHNvbGlkICMwMDdhY2NcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdHIub25kcmFnbGVhdmUgPSAoZTogRHJhZ0V2ZW50KSA9PiB7IHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiXCI7IH07XHJcbiAgICAgICAgICAgIHRyLm9uZHJvcCA9IChlOiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0ci5zdHlsZS5ib3JkZXJUb3AgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gREVCVUdcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRST1AgT04gUk9XXCIsIHsgdGFyZ2V0OiByb3cub3JpZ2luYWxOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVN0ciA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRPcmlnaW5hbE5hbWUgPSBkYXRhLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZpcnR1YWwgPSBkYXRhLmlzVmlydHVhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRPcmlnaW5hbE5hbWUgIT09IHJvdy5vcmlnaW5hbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Um93SW5kZXggPSByb3dzLmZpbmRJbmRleChyID0+IHIub3JpZ2luYWxOYW1lID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZTb3J0SW5kZXggPSAtMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFJvd0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNvcnRJbmRleCA9IHJvd3NbdGFyZ2V0Um93SW5kZXggLSAxXS5zb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U29ydEluZGV4ID0gcm93LnNvcnRJbmRleCAtIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTb3J0SW5kZXggPSAocHJldlNvcnRJbmRleCArIHJvdy5zb3J0SW5kZXgpIC8gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3V2ZWF1IDogcGVyc2lzdGFuY2UgY2VudHJhbGlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0U3R5bGUobnVsbCwgeyBjb2w6IGNvbEluZGV4LCBwb3M6IG5ld1NvcnRJbmRleCB9LCBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUICh2aXJ0dWFsKSAtPlwiLCB7IG9iamVjdDogZHJhZ2dlZE9yaWdpbmFsTmFtZSwgcHJvcHM6IHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbFVzZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2xVc2VkLCB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKCkud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGRyYWdnZWRJbmRleCkuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHJhZ2dlZFJvdyA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogMCwgaXNIaWRkZW46IGZhbHNlLCBtYXJnaW5Db2xvcjoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3VzdG9tTGFiZWw6IFwiXCIsIGN1c3RvbUFtb3VudDogXCJcIiwgaXNIZWFkZXI6IGZhbHNlLCBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmdMYWJlbDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbExhYmVsOiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBpdGFsaWNMYWJlbDogZmFsc2UsIGJvbGRMYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJnQW1vdW50OiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsQW1vdW50OiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBib2xkQW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQm90dG9tID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpblRvcCA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpblRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pc0hpZGRlbiA9IGN1cnJlbnREcmFnZ2VkUm93LmlzSGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkNvbG9yID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cubWFyZ2luQ29sb3IgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUxhYmVsID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tTGFiZWwgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21BbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21BbW91bnQgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pc0hlYWRlciA9IGN1cnJlbnREcmFnZ2VkUm93LmlzSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRTaXplID0gY3VycmVudERyYWdnZWRSb3cuZm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udEZhbWlseSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmJnTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLml0YWxpY0xhYmVsID0gY3VycmVudERyYWdnZWRSb3cuaXRhbGljTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYm9sZExhYmVsID0gY3VycmVudERyYWdnZWRSb3cuYm9sZExhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckFtb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYm9sZEFtb3VudCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XVtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHsgaWYgKGtleSAhPT0gXCJjb2x1bW5JbmRleFwiICYmIGtleSAhPT0gXCJvcmRyZVRyaVwiKSBleGlzdGluZ1Byb3BzW2tleV0gPSBzdHlsZVtrZXldOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5vcmRyZVRyaSA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDTEVBTiB1bmRlZmluZWQga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGV4aXN0aW5nUHJvcHMpLmZvckVhY2goayA9PiB7IGlmIChleGlzdGluZ1Byb3BzW2tdID09PSB1bmRlZmluZWQpIGRlbGV0ZSBleGlzdGluZ1Byb3BzW2tdOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVRyBiZWZvcmUgcGVyc2lzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIChjYXRlZ29yeSkgLT4gc2VsZWN0b3I6XCIsIHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksIFwicHJvcHM6XCIsIGV4aXN0aW5nUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdXZlYXUgOiBwZXJzaXN0YW5jZSBjZW50cmFsaXPDqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RTdHlsZShzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLCBleGlzdGluZ1Byb3BzLCBcInN0eWxlTGlnbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUcgYWZ0ZXIgcGVyc2lzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIERPTkUgKGNhdGVnb3J5KSBmb3JcIiwgZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZFJvd0RhdGEgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRSb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRSb3dEYXRhLmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRSb3dEYXRhLnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LCBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQm90dG9tLCBtYXJnaW5Ub3A6IGRyYWdnZWRSb3dEYXRhLm1hcmdpblRvcCwgaXNIaWRkZW46IGRyYWdnZWRSb3dEYXRhLmlzSGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQ29sb3I6IGRyYWdnZWRSb3dEYXRhLm1hcmdpbkNvbG9yLCBjdXN0b21MYWJlbDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tTGFiZWwsIGN1c3RvbUFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGRyYWdnZWRSb3dEYXRhLmlzSGVhZGVyLCBmb250U2l6ZTogZHJhZ2dlZFJvd0RhdGEuZm9udFNpemUsIGZvbnQ6IGRyYWdnZWRSb3dEYXRhLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5iZ0xhYmVsLCBjb2xvckxhYmVsOiBkcmFnZ2VkUm93RGF0YS5jb2xvckxhYmVsLCBpdGFsaWNMYWJlbDogZHJhZ2dlZFJvd0RhdGEuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmJvbGRMYWJlbCwgYmdBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJnQW1vdW50LCBjb2xvckFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY29sb3JBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5ib2xkQW1vdW50LCB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkgeyB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2xVc2VkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2xVc2VkLCB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcm93LmlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgdHIub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyLmRyYWdnYWJsZSAmJiBlLmRldGFpbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwic2VsZWN0aW9uTWVudVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgXCJsaWduZUFjdGl2ZVwiOiByb3cub3JpZ2luYWxOYW1lIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dUb29sYmFyKHJvdywgdHIsIGUuY2xpZW50WCwgZS5jbGllbnRZLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNRU5VIENPTlRFWFRVRUwgUE9XRVIgQkkgKGNsaWMgZHJvaXQpXHJcbiAgICAgICAgICAgICAgICB0ci5vbmNvbnRleHRtZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBSw6ljdXDDqXJlciBsJ2luZGV4IGRlIGxhIGNhdMOpZ29yaWUgcG91ciBjcsOpZXIgbGUgc2VsZWN0aW9uSWRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dJbmRleCA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCgodjogYW55KSA9PiB2LnRvU3RyaW5nKCkgPT09IHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgcm93SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFmZmljaGVyIGxlIG1lbnUgY29udGV4dHVlbCBQb3dlciBCSSBuYXRpZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KHNlbGVjdGlvbklkLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdHIudGl0bGUgPSBcIkNsaXF1ZXIgcG91ciBtb2RpZmllciB8IEdsaXNzZXIgcG91ciBkw6lwbGFjZXIgfCBDbGljIGRyb2l0IHBvdXIgb3B0aW9uc1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gTWVudSBjb250ZXh0dWVsIHBvdXIgbGVzIGxpZ25lcyBtYW51ZWxsZXMgKHNhbnMgc2VsZWN0aW9uSWQpXHJcbiAgICAgICAgICAgICAgICB0ci5vbmNvbnRleHRtZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBQb3VyIGxlcyBsaWduZXMgdmlydHVlbGxlcywgbWVudSBjb250ZXh0dWVsIHNpbXBsZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUobnVsbCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRyLnRpdGxlID0gXCJHbGlzc2VyIHBvdXIgZMOpcGxhY2VyIHwgQ2xpYyBkcm9pdCBwb3VyIG9wdGlvbnNcIjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGZpbmFsQW1vdW50ID0gXCJcIjtcclxuICAgICAgICAgICAgaWYgKHJvdy5jdXN0b21BbW91bnQgJiYgcm93LmN1c3RvbUFtb3VudC50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsQW1vdW50ID0gcm93LmN1c3RvbUFtb3VudDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCByYXdWYWwgPSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyb3cuaXNWaXJ0dWFsICYmICFyb3cuaXNIZWFkZXIgJiYgcm93LmFtb3VudCAmJiAhaXNOYU4ocmF3VmFsKSAmJiByYXdWYWwgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFtb3VudCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZnItRlInLCB7IHN0eWxlOiAnZGVjaW1hbCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMCB9KS5mb3JtYXQocmF3VmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHIuc3R5bGUuZm9udEZhbWlseSA9IHJvdy5mb250OyB0ci5zdHlsZS5mb250U2l6ZSA9IHJvdy5mb250U2l6ZSArIFwicHhcIjsgXHJcbiAgICAgICAgICAgIGNvbnN0IHRkTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGROYW1lLmlubmVyVGV4dCA9IHJvdy5sYWJlbDtcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJnID0gKHJvdy5pc0hlYWRlciB8fCByb3cuaXNWaXJ0dWFsKSA/IHJvdy5iZ0xhYmVsIDogcm93LmJnTGFiZWw7XHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsQmc7IHRkTmFtZS5zdHlsZS5jb2xvciA9IHJvdy5jb2xvckxhYmVsO1xyXG4gICAgICAgICAgICBpZiAocm93LmJvbGRMYWJlbCkgdGROYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgaWYgKHJvdy5pdGFsaWNMYWJlbCkgdGROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvcmRlclN0eWxlID0gYCR7cm93LmJvcmRlcldpZHRofXB4IHNvbGlkICR7cm93LmJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5ib3JkZXIgPSBib3JkZXJTdHlsZTtcclxuICAgICAgICAgICAgdGROYW1lLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGRBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LmlubmVyVGV4dCA9IGZpbmFsQW1vdW50OyBcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAocm93LmlzSGVhZGVyIHx8IHJvdy5pc1ZpcnR1YWwpID8gcm93LmJnTGFiZWwgOiByb3cuYmdBbW91bnQ7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmNvbG9yID0gcm93LmNvbG9yQW1vdW50O1xyXG4gICAgICAgICAgICBpZiAocm93LmJvbGRBbW91bnQpIHRkQW1vdW50LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuYm9yZGVyID0gYm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmJvcmRlckxlZnQgPSBcIm5vbmVcIjsgXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkQW1vdW50KTtcclxuXHJcbiAgICAgICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3cubWFyZ2luQm90dG9tID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJTcEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luQm90dG9tICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcEIuc3R5bGUubGluZUhlaWdodCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcEIuc3R5bGUuZm9udFNpemUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkU3BCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGRTcEIuY29sU3BhbiA9IDI7IFxyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93Lm1hcmdpbkNvbG9yOyBcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luQm90dG9tICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcEIuYXBwZW5kQ2hpbGQodGRTcEIpOyBcclxuICAgICAgICAgICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyU3BCKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wWm9uZVRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGRyb3Bab25lVHIuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7IFxyXG4gICAgICAgIGNvbnN0IGRyb3Bab25lVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5jb2xTcGFuID0gMjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGRyb3Bab25lVGQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnNcIjtcclxuICAgICAgICBkcm9wWm9uZVRkLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBkcm9wWm9uZVRyLmFwcGVuZENoaWxkKGRyb3Bab25lVGQpO1xyXG5cclxuICAgICAgICBkcm9wWm9uZVRyLm9uZHJhZ292ZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2ZlcikgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCAjMDA3YWNjXCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDEyMiwgMjA0LCAwLjEpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wWm9uZVRyLm9uZHJhZ2xlYXZlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wWm9uZVRyLm9uZHJvcCA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YVN0ciA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkT3JpZ2luYWxOYW1lID0gZGF0YS5vcmlnaW5hbE5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ZpcnR1YWwgPSBkYXRhLmlzVmlydHVhbDtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0U29ydEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA+IDApIGxhc3RTb3J0SW5kZXggPSByb3dzW3Jvd3MubGVuZ3RoIC0gMV0uc29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1NvcnRJbmRleCA9IGxhc3RTb3J0SW5kZXggKyAxMDtcclxuICAgICAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHJhZ2dlZFJvdyA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm91dmVhdSA6IHBlcnNpc3RhbmNlIGNlbnRyYWxpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RTdHlsZShudWxsLCB7IGNvbDogY29sSW5kZXgsIHBvczogbmV3U29ydEluZGV4IH0sIGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgKHZpcnR1YWwpIC0+XCIsIHsgb2JqZWN0OiBkcmFnZ2VkT3JpZ2luYWxOYW1lLCBwcm9wczogeyBjb2w6IGNvbEluZGV4LCBwb3M6IG5ld1NvcnRJbmRleCB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbFVzZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLmZvckVhY2gociA9PiB7IGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKS53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgZHJhZ2dlZEluZGV4KS5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHJhZ2dlZFJvdyA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nUHJvcHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiAwLCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6IFwiXCIsIGN1c3RvbUFtb3VudDogXCJcIiwgaXNIZWFkZXI6IGZhbHNlLCBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIGZpbGxMYWJlbDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgaXRhbGljTGFiZWw6IGZhbHNlLCBib2xkTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIGZpbGxBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGJvbGRBbW91bnQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Cb3R0b20gPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpblRvcCA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpblRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIaWRkZW4gPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQ29sb3IgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Db2xvciB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUxhYmVsID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tTGFiZWwgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGVhZGVyID0gY3VycmVudERyYWdnZWRSb3cuaXNIZWFkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRTaXplID0gY3VycmVudERyYWdnZWRSb3cuZm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRGYW1pbHkgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0xhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pdGFsaWNMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93Lml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuYm9sZEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF1bXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHsgaWYgKGtleSAhPT0gXCJjb2x1bW5JbmRleFwiICYmIGtleSAhPT0gXCJvcmRyZVRyaVwiKSBleGlzdGluZ1Byb3BzW2tleV0gPSBzdHlsZVtrZXldOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMub3JkcmVUcmkgPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENMRUFOIHVuZGVmaW5lZCBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGV4aXN0aW5nUHJvcHMpLmZvckVhY2goayA9PiB7IGlmIChleGlzdGluZ1Byb3BzW2tdID09PSB1bmRlZmluZWQpIGRlbGV0ZSBleGlzdGluZ1Byb3BzW2tdOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUcgYmVmb3JlIHBlcnNpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIChjYXRlZ29yeSkgLT4gc2VsZWN0b3I6XCIsIHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksIFwicHJvcHM6XCIsIGV4aXN0aW5nUHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3V2ZWF1IDogcGVyc2lzdGFuY2UgY2VudHJhbGlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdFN0eWxlKHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksIGV4aXN0aW5nUHJvcHMsIFwic3R5bGVMaWduZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUcgYWZ0ZXIgcGVyc2lzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgRE9ORSAoY2F0ZWdvcnkpIGZvclwiLCBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZFJvd0RhdGEgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkUm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRSb3dEYXRhLnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQm90dG9tLCBtYXJnaW5Ub3A6IGRyYWdnZWRSb3dEYXRhLm1hcmdpblRvcCwgaXNIaWRkZW46IGRyYWdnZWRSb3dEYXRhLmlzSGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkNvbG9yOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Db2xvciwgY3VzdG9tTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUxhYmVsLCBjdXN0b21BbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZHJhZ2dlZFJvd0RhdGEuaXNIZWFkZXIsIGZvbnRTaXplOiBkcmFnZ2VkUm93RGF0YS5mb250U2l6ZSwgZm9udDogZHJhZ2dlZFJvd0RhdGEuZm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5iZ0xhYmVsLCBjb2xvckxhYmVsOiBkcmFnZ2VkUm93RGF0YS5jb2xvckxhYmVsLCBpdGFsaWNMYWJlbDogZHJhZ2dlZFJvd0RhdGEuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZExhYmVsOiBkcmFnZ2VkUm93RGF0YS5ib2xkTGFiZWwsIGJnQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5iZ0Ftb3VudCwgY29sb3JBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmNvbG9yQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJvbGRBbW91bnQsIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHsgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbFVzZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKGRyb3Bab25lVHIpO1xyXG4gICAgICAgIC8vIERFQlVHOiBkcm9wIHpvbmUgbG9ncyBhbHJlYWR5IGhhbmRsZWQgYmVsb3dcclxuXHJcbiAgICAgICAgdGFyZ2V0VGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1Rvb2xiYXIocm93OiBSb3dEYXRhLCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNhdGVnb3JpZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+foiBzaG93VG9vbGJhciBjYWxsZWQgZm9yOlwiLCByb3cub3JpZ2luYWxOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLwn5S0IENhdGVnb3JpZXMgaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMudG9vbGJhci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5yZW1vdmVDaGlsZCh0aGlzLnRvb2xiYXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb24gb24gdGhlIHRvb2xiYXIgaXRzZWxmXHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9ubW91c2Vkb3duID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gUG9zaXRpb25uZXIgbGEgdG9vbGJhclxyXG4gICAgICAgIGNvbnN0IHRvb2xiYXJXaWR0aCA9IDQwMDsgXHJcbiAgICAgICAgbGV0IGxlZnQgPSB4IC0gdG9vbGJhcldpZHRoIC8gMjtcclxuICAgICAgICBpZiAobGVmdCA8IDEwKSBsZWZ0ID0gMTA7XHJcbiAgICAgICAgaWYgKGxlZnQgKyB0b29sYmFyV2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkgbGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gdG9vbGJhcldpZHRoIC0gMTA7XHJcblxyXG4gICAgICAgIGxldCB0b3AgPSB5IC0gNTA7XHJcbiAgICAgICAgaWYgKHRvcCA8IDEwKSB0b3AgPSB5ICsgMjA7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCh2ID0+IHYudG9TdHJpbmcoKSA9PT0gcm93Lm9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5+iIEluZGV4IGZvdW5kOlwiLCBpbmRleCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIvCflLQgSW5kZXggbm90IGZvdW5kIGZvclwiLCByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjdGlvbklkQnVpbGRlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKTtcclxuICAgICAgICBzZWxlY3Rpb25JZEJ1aWxkZXIgPSBzZWxlY3Rpb25JZEJ1aWxkZXIud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGluZGV4KTtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHNlbGVjdGlvbklkQnVpbGRlci5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgcG91ciBtZXR0cmUgw6Agam91ciBwZW5kaW5nQ2hhbmdlc1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVBlbmRpbmcgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5wZW5kaW5nQ2hhbmdlcy5nZXQocm93Lm9yaWdpbmFsTmFtZSkgfHwgeyB0aW1lc3RhbXA6IERhdGUubm93KCkgfTtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZCA9IHsgLi4uY3VycmVudCwgLi4ucHJvcHMsIHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9O1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChyb3cub3JpZ2luYWxOYW1lLCB1cGRhdGVkKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgcG91ciByw6ljdXDDqXJlciBsZXMgZG9ubsOpZXMgYWN0dWVsbGVzIGRlIGxhIGxpZ25lXHJcbiAgICAgICAgY29uc3QgZ2V0Q3VycmVudFJvdyA9ICgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSByb3cub3JpZ2luYWxOYW1lKSB8fCByb3c7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHBvdXIgcGVyc2lzdGVyIFRPVVRFUyBsZXMgcHJvcHJpw6l0w6lzICjDqXZpdGUgbGVzIHBlcnRlcylcclxuICAgICAgICBjb25zdCBwZXJzaXN0QWxsUHJvcHMgPSAob3ZlcnJpZGVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFJvdyA9IGdldEN1cnJlbnRSb3coKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZ1bGxQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGN1cnJlbnRSb3cuY29sdW1uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBvcmRyZVRyaTogY3VycmVudFJvdy5zb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGN1cnJlbnRSb3cubWFyZ2luQm90dG9tLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBjdXJyZW50Um93Lm1hcmdpblRvcCxcclxuICAgICAgICAgICAgICAgIGlzSGlkZGVuOiBjdXJyZW50Um93LmlzSGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cubWFyZ2luQ29sb3IgfSB9LFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6IGN1cnJlbnRSb3cuY3VzdG9tTGFiZWwgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIGN1c3RvbUFtb3VudDogY3VycmVudFJvdy5jdXN0b21BbW91bnQgfHwgXCJcIixcclxuICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBjdXJyZW50Um93LmlzSGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGN1cnJlbnRSb3cuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBjdXJyZW50Um93LmZvbnQsXHJcbiAgICAgICAgICAgICAgICBiZ0xhYmVsOiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmJnTGFiZWwgfSB9LFxyXG4gICAgICAgICAgICAgICAgZmlsbExhYmVsOiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmNvbG9yTGFiZWwgfSB9LFxyXG4gICAgICAgICAgICAgICAgaXRhbGljTGFiZWw6IGN1cnJlbnRSb3cuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBib2xkTGFiZWw6IGN1cnJlbnRSb3cuYm9sZExhYmVsLFxyXG4gICAgICAgICAgICAgICAgYmdBbW91bnQ6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYmdBbW91bnQgfSB9LFxyXG4gICAgICAgICAgICAgICAgZmlsbEFtb3VudDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5jb2xvckFtb3VudCB9IH0sXHJcbiAgICAgICAgICAgICAgICBib2xkQW1vdW50OiBjdXJyZW50Um93LmJvbGRBbW91bnQsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogY3VycmVudFJvdy5ib3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmJvcmRlckNvbG9yIH0gfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgLy8gQXBwbGlxdWVyIG92ZXJyaWRlcyBmb3VybmlzXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG92ZXJyaWRlcyB8fCB7fSkuZm9yRWFjaChrID0+IHsgZnVsbFByb3BzW2tdID0gb3ZlcnJpZGVzW2tdOyB9KTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInN0eWxlTGlnbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IGZ1bGxQcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVBlbmRpbmcoZnVsbFByb3BzKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBwZXJzaXN0UHJvcGVydGllczpcIiwgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIC0tLSBCT1VUT05TIC0tLVxyXG5cclxuICAgICAgICAvLyBHUkFTIChCKVxyXG4gICAgICAgIGNvbnN0IGJ0bkJvbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGJFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XHJcbiAgICAgICAgYkVsZW0udGV4dENvbnRlbnQgPSBcIkJcIjtcclxuICAgICAgICBidG5Cb2xkLmFwcGVuZENoaWxkKGJFbGVtKTtcclxuICAgICAgICBcclxuICAgICAgICBidG5Cb2xkLnRpdGxlID0gXCJHcmFzXCI7XHJcbiAgICAgICAgaWYgKHJvdy5ib2xkTGFiZWwpIGJ0bkJvbGQuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcclxuICAgICAgICBidG5Cb2xkLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSAhcm93LmJvbGRMYWJlbDtcclxuICAgICAgICAgICAgYnRuQm9sZC5jbGFzc05hbWUgPSBuZXdWYWwgPyBcImFjdGl2ZVwiIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJvdy5ib2xkTGFiZWwgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIHJvdy5ib2xkQW1vdW50ID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCB3ZWlnaHQgPSBuZXdWYWwgPyBcImJvbGRcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGlmICh0ci5jZWxsc1swXSkgKHRyLmNlbGxzWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5mb250V2VpZ2h0ID0gd2VpZ2h0O1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMV0pICh0ci5jZWxsc1sxXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFdlaWdodCA9IHdlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVBlbmRpbmcoeyBib2xkTGFiZWw6IG5ld1ZhbCwgYm9sZEFtb3VudDogbmV3VmFsIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBib2xkTGFiZWw6IG5ld1ZhbCwgYm9sZEFtb3VudDogbmV3VmFsIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGJ0bkJvbGQpO1xyXG5cclxuICAgICAgICAvLyBJVEFMSVFVRSAoSSlcclxuICAgICAgICBjb25zdCBidG5JdGFsaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNvbnN0IGlFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICAgICAgaUVsZW0udGV4dENvbnRlbnQgPSBcIklcIjtcclxuICAgICAgICBidG5JdGFsaWMuYXBwZW5kQ2hpbGQoaUVsZW0pO1xyXG5cclxuICAgICAgICBidG5JdGFsaWMudGl0bGUgPSBcIkl0YWxpcXVlXCI7XHJcbiAgICAgICAgaWYgKHJvdy5pdGFsaWNMYWJlbCkgYnRuSXRhbGljLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgYnRuSXRhbGljLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWwgPSAhcm93Lml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICBidG5JdGFsaWMuY2xhc3NOYW1lID0gbmV3VmFsID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICByb3cuaXRhbGljTGFiZWwgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gbmV3VmFsID8gXCJpdGFsaWNcIiA6IFwibm9ybWFsXCI7XHJcbiAgICAgICAgICAgIGlmICh0ci5jZWxsc1swXSkgKHRyLmNlbGxzWzBdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5mb250U3R5bGUgPSBzdHlsZTtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVBlbmRpbmcoeyBpdGFsaWNMYWJlbDogbmV3VmFsIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBpdGFsaWNMYWJlbDogbmV3VmFsIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGJ0bkl0YWxpYyk7XHJcblxyXG4gICAgICAgIC8vIFNFUEFSQVRFVVJcclxuICAgICAgICBjb25zdCBzZXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZXAxLmNsYXNzTmFtZSA9IFwic2VwYXJhdG9yXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKHNlcDEpO1xyXG5cclxuICAgICAgICAvLyBUQUlMTEUgUE9MSUNFIChzw6lsZWN0ZXVyKVxyXG4gICAgICAgIGNvbnN0IGZvbnRTaXplV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9udFNpemVXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9udC1zaXplLXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBsYmxGb250U2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsYmxGb250U2l6ZS5pbm5lclRleHQgPSBcIlRhaWxsZVwiO1xyXG4gICAgICAgIGxibEZvbnRTaXplLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI0cHhcIjtcclxuICAgICAgICBmb250U2l6ZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGJsRm9udFNpemUpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RGb250U2l6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0Rm9udFNpemUudGl0bGUgPSBcIlRhaWxsZSBkZSBwb2xpY2VcIjtcclxuICAgICAgICBmb3IgKGxldCBzID0gODsgcyA8PSAyNDsgcysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IHMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IHMudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHJvdy5mb250U2l6ZSA9PT0gcykgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VsZWN0Rm9udFNpemUuYXBwZW5kQ2hpbGQob3B0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZWN0Rm9udFNpemUub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBzID0gcGFyc2VJbnQoc2VsZWN0Rm9udFNpemUudmFsdWUsIDEwKTtcclxuICAgICAgICAgICAgcm93LmZvbnRTaXplID0gcztcclxuICAgICAgICAgICAgdHIuc3R5bGUuZm9udFNpemUgPSBzICsgXCJweFwiO1xyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgZm9udFNpemU6IHMgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGZvbnRTaXplOiBzIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9udFNpemVXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdEZvbnRTaXplKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoZm9udFNpemVXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gU0VQQVJBVEVVUlxyXG4gICAgICAgIGNvbnN0IHNlcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNlcDMuY2xhc3NOYW1lID0gXCJzZXBhcmF0b3JcIjtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VwMyk7XHJcblxyXG4gICAgICAgIC8vIFBPTElDRSAoZm9udC1mYW1pbHkpXHJcbiAgICAgICAgY29uc3QgZm9udEZhbWlseVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvbnRGYW1pbHlXcmFwcGVyLmNsYXNzTmFtZSA9IFwiZm9udC1mYW1pbHktd3JhcHBlclwiO1xyXG4gICAgICAgIGNvbnN0IGxibEZvbnRGYW1pbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGJsRm9udEZhbWlseS5pbm5lclRleHQgPSBcIlBvbGljZVwiO1xyXG4gICAgICAgIGxibEZvbnRGYW1pbHkuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjRweFwiO1xyXG4gICAgICAgIGZvbnRGYW1pbHlXcmFwcGVyLmFwcGVuZENoaWxkKGxibEZvbnRGYW1pbHkpO1xyXG5cclxuICAgICAgICBjb25zdCBzZWxlY3RGb250RmFtaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICBzZWxlY3RGb250RmFtaWx5LnRpdGxlID0gXCJQb2xpY2VcIjtcclxuICAgICAgICBjb25zdCBmb250cyA9IFtcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlNlZ29lIFVJXCIsIHZhbHVlOiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQXJpYWxcIiwgdmFsdWU6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ2FsaWJyaVwiLCB2YWx1ZTogXCJDYWxpYnJpLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIlRpbWVzIE5ldyBSb21hblwiLCB2YWx1ZTogXCInVGltZXMgTmV3IFJvbWFuJywgc2VyaWZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiQ291cmllciBOZXdcIiwgdmFsdWU6IFwiJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlXCIgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9udHMuZm9yRWFjaChmID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0LnZhbHVlID0gZi52YWx1ZTtcclxuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IGYubmFtZTtcclxuICAgICAgICAgICAgaWYgKHJvdy5mb250ID09PSBmLnZhbHVlKSBvcHQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZWxlY3RGb250RmFtaWx5LmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZWN0Rm9udEZhbWlseS5vbmNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGYgPSBzZWxlY3RGb250RmFtaWx5LnZhbHVlO1xyXG4gICAgICAgICAgICByb3cuZm9udCA9IGY7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRGYW1pbHkgPSBmO1xyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgZm9udDogZiB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgZm9udEZhbWlseTogZiB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvbnRGYW1pbHlXcmFwcGVyLmFwcGVuZENoaWxkKHNlbGVjdEZvbnRGYW1pbHkpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChmb250RmFtaWx5V3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIEJPVVRPTiBGRVJNRVJcclxuICAgICAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYnRuQ2xvc2UuY2xhc3NOYW1lID0gXCJjbG9zZS1idG5cIjtcclxuICAgICAgICAvLyBDT1JSRUNUSU9OOiBVdGlsaXNlciB0ZXh0Q29udGVudFxyXG4gICAgICAgIGJ0bkNsb3NlLnRleHRDb250ZW50ID0gXCLinJZcIjtcclxuICAgICAgICBidG5DbG9zZS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcbiAgICB9XHJcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZpc3VhbCB9IGZyb20gXCIuLi8uLi9zcmMvdmlzdWFsXCI7XG5pbXBvcnQgcG93ZXJiaVZpc3VhbHNBcGkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcbmltcG9ydCBJVmlzdWFsUGx1Z2luID0gcG93ZXJiaVZpc3VhbHNBcGkudmlzdWFscy5wbHVnaW5zLklWaXN1YWxQbHVnaW47XG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xuaW1wb3J0IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLkRpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucztcbnZhciBwb3dlcmJpS2V5OiBhbnkgPSBcInBvd2VyYmlcIjtcbnZhciBwb3dlcmJpOiBhbnkgPSB3aW5kb3dbcG93ZXJiaUtleV07XG52YXIgbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUc6IElWaXN1YWxQbHVnaW4gPSB7XG4gICAgbmFtZTogJ21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHJyxcbiAgICBkaXNwbGF5TmFtZTogJ21vblRhYmxlYXVQZXJzbycsXG4gICAgY2xhc3M6ICdWaXN1YWwnLFxuICAgIGFwaVZlcnNpb246ICc1LjMuMCcsXG4gICAgY3JlYXRlOiAob3B0aW9ucz86IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucykgPT4ge1xuICAgICAgICBpZiAoVmlzdWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFZpc3VhbChvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyAnVmlzdWFsIGluc3RhbmNlIG5vdCBmb3VuZCc7XG4gICAgfSxcbiAgICBjcmVhdGVNb2RhbERpYWxvZzogKGRpYWxvZ0lkOiBzdHJpbmcsIG9wdGlvbnM6IERpYWxvZ0NvbnN0cnVjdG9yT3B0aW9ucywgaW5pdGlhbFN0YXRlOiBvYmplY3QpID0+IHtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVnaXN0cnkgPSAoPGFueT5nbG9iYWxUaGlzKS5kaWFsb2dSZWdpc3RyeTtcbiAgICAgICAgaWYgKGRpYWxvZ0lkIGluIGRpYWxvZ1JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICBuZXcgZGlhbG9nUmVnaXN0cnlbZGlhbG9nSWRdKG9wdGlvbnMsIGluaXRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGN1c3RvbTogdHJ1ZVxufTtcbmlmICh0eXBlb2YgcG93ZXJiaSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHBvd2VyYmkudmlzdWFscyA9IHBvd2VyYmkudmlzdWFscyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyA9IHBvd2VyYmkudmlzdWFscy5wbHVnaW5zIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zW1wibW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUdcIl0gPSBtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRztcbn1cbmV4cG9ydCBkZWZhdWx0IG1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHOyJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=