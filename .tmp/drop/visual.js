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
                this.currentUserValidPlans = result.plans?.filter((plan) => (plan.state === 1 /* ServicePlanState.Active */ || plan.state === 2 /* ServicePlanState.Warning */));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVEQUF1RCxDQUFDLEdBQUcscURBQXFELENBQUM7QUFDN0ksQ0FBQztBQUNELGlFQUFlLHFEQUFxRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3Zpc3VhbC50cyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzPzE0YjAiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uLy50bXAvcHJlY29tcGlsZS92aXN1YWxQbHVnaW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQb3dlcmJpIHV0aWxzIGNvbXBvbmVudHMgY2xhc3NlcyBmb3IgY3VzdG9tIHZpc3VhbCBmb3JtYXR0aW5nIHBhbmUgb2JqZWN0c1xuICpcbiAqL1xuaW1wb3J0ICogYXMgRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyIGZyb20gXCIuL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzXCI7XG5jbGFzcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgQ2FyZEdyb3VwRW50aXR5IGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcbn1cbi8qKiBDb21wb3NpdGVDYXJkIGlzIHVzZSB0byBwb3B1bGF0ZSBhIGNhcmQgaW50byB0aGUgZm9ybWF0dGluZyBwYW5lIHdpdGggbXVsdGlwbGUgZ3JvdXBzICovXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlQ2FyZCBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIENhcmRHcm91cEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG4vKiogU2ltcGxlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSBpbiBhIHNpbmdsZSBncm91cCAqL1xuZXhwb3J0IGNsYXNzIFNpbXBsZUNhcmQgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIFNpbXBsZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IHNsaWNlRGlzcGxheU5hbWUgPSAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRpc3BsYXlOYW1lS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kaXNwbGF5TmFtZUtleSkgOiB0aGlzLmRpc3BsYXlOYW1lO1xuICAgICAgICBjb25zdCBzbGljZURlc2NyaXB0aW9uID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogc2xpY2VEaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzbGljZURlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdG9yOiBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCB0aGlzKSxcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHRoaXMubmFtZVxuICAgICAgICAgICAgfV07XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gKF9hID0gZGF0YVZpZXdPYmplY3RzID09PSBudWxsIHx8IGRhdGFWaWV3T2JqZWN0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YVZpZXdPYmplY3RzW29iamVjdE5hbWVdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbdGhpcy5uYW1lXTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlci5nZXRQcm9wZXJ0eVZhbHVlKHRoaXMsIG5ld1ZhbHVlLCB0aGlzLnZhbHVlKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQWxpZ25tZW50R3JvdXAgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiQWxpZ25tZW50R3JvdXBcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuQWxpZ25tZW50R3JvdXAgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBtb2RlOiB0aGlzLm1vZGUsIHN1cHBvcnRzTm9TZWxlY3Rpb246IHRoaXMuc3VwcG9ydHNOb1NlbGVjdGlvbiB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVG9nZ2xlU3dpdGNoIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRvZ2dsZVN3aXRjaFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ub2dnbGVTd2l0Y2ggKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbG9yUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbG9yUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkNvbG9yUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgZGVmYXVsdENvbG9yOiB0aGlzLmRlZmF1bHRDb2xvciwgaXNOb0ZpbGxJdGVtU3VwcG9ydGVkOiB0aGlzLmlzTm9GaWxsSXRlbVN1cHBvcnRlZCB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTnVtVXBEb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk51bVVwRG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5OdW1VcERvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBvcHRpb25zOiB0aGlzLm9wdGlvbnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlciBleHRlbmRzIE51bVVwRG93biB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2xpZGVyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlNsaWRlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEYXRlUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRhdGVQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5wbGFjZWhvbGRlcktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMucGxhY2Vob2xkZXJLZXkpIDogdGhpcy5wbGFjZWhvbGRlciwgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJdGVtRHJvcGRvd24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRHJvcGRvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRHJvcGRvd24gKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBpdGVtczogdGhpcy5pdGVtcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQXV0b0Ryb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbWVyZ2VWYWx1ZXM6IHRoaXMubWVyZ2VWYWx1ZXMsIGZpbHRlclZhbHVlczogdGhpcy5maWx0ZXJWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIER1cmF0aW9uUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkR1cmF0aW9uUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkR1cmF0aW9uUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBFcnJvclJhbmdlQ29udHJvbCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJFcnJvclJhbmdlQ29udHJvbFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5FcnJvclJhbmdlQ29udHJvbCAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmllbGRQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmllbGRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmllbGRQaWNrZXIgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMsIGFsbG93TXVsdGlwbGVWYWx1ZXM6IHRoaXMuYWxsb3dNdWx0aXBsZVZhbHVlcyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbUZsYWdzU2VsZWN0aW9uIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZsYWdzU2VsZWN0aW9uXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZsYWdzU2VsZWN0aW9uICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dElucHV0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRJbnB1dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0SW5wdXQgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBUZXh0SW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlRleHRBcmVhXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LlRleHRBcmVhICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGb250UGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRQaWNrZXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udFBpY2tlciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgR3JhZGllbnRCYXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiR3JhZGllbnRCYXJcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuR3JhZGllbnRCYXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkltYWdlVXBsb2FkXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkltYWdlVXBsb2FkICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBMaXN0RWRpdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkxpc3RFZGl0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTGlzdEVkaXRvciAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUmVhZE9ubHlUZXh0IGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlJlYWRPbmx5VGV4dFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5SZWFkT25seVRleHQgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNoYXBlTWFwU2VsZWN0b3IgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiU2hhcGVNYXBTZWxlY3RvclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TaGFwZU1hcFNlbGVjdG9yICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXNBek1hcFJlZmVyZW5jZVNlbGVjdG9yOiB0aGlzLmlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvciB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlU2xpY2UgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ1NsaWNlKG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgY29uc3QgY29udHJvbFR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50RGlzcGxheU5hbWUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAobG9jYWxpemF0aW9uTWFuYWdlciAmJiB0aGlzLmRlc2NyaXB0aW9uS2V5KSA/IGxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUodGhpcy5kZXNjcmlwdGlvbktleSkgOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdWlkOiBvYmplY3ROYW1lICsgJy0nICsgcHJvcGVydHlOYW1lLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBjb21wb25lbnREaXNwbGF5TmFtZSksIHsgY29udHJvbDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IGNvbnRyb2xUeXBlLFxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHRoaXMuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICAgICAgfSB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udENvbnRyb2wgZXh0ZW5kcyBDb21wb3NpdGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRm9udENvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRm9udENvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IHRoaXMuZm9udEZhbWlseS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuZm9udFNpemUuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGJvbGQ6IChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBpdGFsaWM6IChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHVuZGVybGluZTogKF9jID0gdGhpcy51bmRlcmxpbmUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb250RmFtaWx5LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5mb250U2l6ZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvbGQgPyB0aGlzLmJvbGQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLml0YWxpYyA/IHRoaXMuaXRhbGljLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy51bmRlcmxpbmUgPyB0aGlzLnVuZGVybGluZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgdGhpcy5mb250RmFtaWx5LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5mb250U2l6ZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYSA9IHRoaXMuYm9sZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgKF9iID0gdGhpcy5pdGFsaWMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Muc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNYXJnaW5QYWRkaW5nIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIk1hcmdpblBhZGRpbmdcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTWFyZ2luUGFkZGluZyAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnQuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB0b3A6IHRoaXMudG9wLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZnQuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnJpZ2h0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudG9wLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuYm90dG9tLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkpO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB0aGlzLmxlZnQuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLnJpZ2h0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy50b3Auc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICB0aGlzLmJvdHRvbS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lciBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXJJdGVtIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcy5tYXAiLCJpbXBvcnQgeyBDb21wb3NpdGVDYXJkLCBTaW1wbGVDYXJkIH0gZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuZXhwb3J0IGNsYXNzIEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyID0gbG9jYWxpemF0aW9uTWFuYWdlcjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWwgZnJvbSBtZXRhZGF0YSBkYXRhVmlld1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFWaWV3cyBtZXRhZGF0YSBkYXRhVmlldyBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB2aXN1YWwgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbFxuICAgICAqL1xuICAgIHBvcHVsYXRlRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwodHlwZUNsYXNzLCBkYXRhVmlldykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBsZXQgZGVmYXVsdFNldHRpbmdzID0gbmV3IHR5cGVDbGFzcygpO1xuICAgICAgICBsZXQgZGF0YVZpZXdPYmplY3RzID0gKF9hID0gZGF0YVZpZXcgPT09IG51bGwgfHwgZGF0YVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3Lm1ldGFkYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2JqZWN0cztcbiAgICAgICAgaWYgKGRhdGFWaWV3T2JqZWN0cykge1xuICAgICAgICAgICAgLy8gbG9vcCBvdmVyIGVhY2ggZm9ybWF0dGluZyBwcm9wZXJ0eSBhbmQgc2V0IGl0cyBuZXcgdmFsdWUgaWYgZXhpc3RzXG4gICAgICAgICAgICAoX2IgPSBkZWZhdWx0U2V0dGluZ3MuY2FyZHMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZClcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID8gW2NhcmRdIDogY2FyZC5ncm91cHMpO1xuICAgICAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50IHRvcCBsZXZlbCB0b2dnbGUgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAoX2IgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIChfZCA9IChfYyA9IGNhcmRHcm91cEluc3RhbmNlID09PSBudWxsIHx8IGNhcmRHcm91cEluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfYSA9IGNvbnRhaW5lckl0ZW0gPT09IG51bGwgfHwgY29udGFpbmVySXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGFpbmVySXRlbS5zbGljZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWZhdWx0U2V0dGluZ3M7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIGZvcm1hdHRpbmcgbW9kZWwgYnkgcGFyc2luZyBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIG9iamVjdFxuICAgICAqXG4gICAgICogQHJldHVybnMgcG93ZXJiaSB2aXN1YWwgZm9ybWF0dGluZyBtb2RlbFxuICAgICAqL1xuICAgIGJ1aWxkRm9ybWF0dGluZ01vZGVsKGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKSB7XG4gICAgICAgIGxldCBmb3JtYXR0aW5nTW9kZWwgPSB7XG4gICAgICAgICAgICBjYXJkczogW11cbiAgICAgICAgfTtcbiAgICAgICAgZm9ybWF0dGluZ1NldHRpbmdzTW9kZWwuY2FyZHNcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NhcmQgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZC5kaXNwbGF5TmFtZUtleSkgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY2FyZC5kaXNwbGF5TmFtZUtleSkgOiBjYXJkLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGVzY3JpcHRpb25LZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGVzY3JpcHRpb25LZXkpIDogY2FyZC5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBncm91cHM6IFtdLFxuICAgICAgICAgICAgICAgIHVpZDogY2FyZC5uYW1lICsgXCItY2FyZFwiLFxuICAgICAgICAgICAgICAgIGFuYWx5dGljc1BhbmU6IGNhcmQuYW5hbHl0aWNzUGFuZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvYmplY3ROYW1lID0gY2FyZC5uYW1lO1xuICAgICAgICAgICAgaWYgKGNhcmQudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZC50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQudG9wTGV2ZWxUb2dnbGUgPSB0b3BMZXZlbFRvZ2dsZVNsaWNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gY2FyZC5vblByZVByb2Nlc3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKGNhcmQpO1xuICAgICAgICAgICAgY29uc3QgaXNTaW1wbGVDYXJkID0gY2FyZCBpbnN0YW5jZW9mIFNpbXBsZUNhcmQ7XG4gICAgICAgICAgICBjb25zdCBjYXJkR3JvdXBJbnN0YW5jZXMgPSAoaXNTaW1wbGVDYXJkID9cbiAgICAgICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgICAgICBjYXJkLmdyb3Vwcy5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkpO1xuICAgICAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBVaWQgPSBjYXJkR3JvdXBJbnN0YW5jZS5uYW1lICsgXCItZ3JvdXBcIjtcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIGdyb3VwIGZvciBlYWNoIGdyb3VwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0dyb3VwID0ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogaXNTaW1wbGVDYXJkID8gdW5kZWZpbmVkIDogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmRHcm91cEluc3RhbmNlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzbGljZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICB1aWQ6IGdyb3VwVWlkLFxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogY2FyZEdyb3VwSW5zdGFuY2UuY29sbGFwc2libGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5U2F2ZVNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2UuZGVsYXlTYXZlU2xpY2VzLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkUmVhc29uOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNhYmxlZFJlYXNvbixcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLmdyb3Vwcy5wdXNoKGZvcm1hdHRpbmdHcm91cCk7XG4gICAgICAgICAgICAgICAgLy8gSW4gY2FzZSBmb3JtYXR0aW5nIG1vZGVsIGFkZHMgZGF0YSBwb2ludHMgb3IgdG9wIGNhdGVnb3JpZXMgKExpa2Ugd2hlbiB5b3UgbW9kaWZ5IHNwZWNpZmljIHZpc3VhbCBjYXRlZ29yeSBjb2xvcikuXG4gICAgICAgICAgICAgICAgLy8gdGhlc2UgY2F0ZWdvcmllcyB1c2Ugc2FtZSBvYmplY3QgbmFtZSBhbmQgcHJvcGVydHkgbmFtZSBmcm9tIGNhcGFiaWxpdGllcyBhbmQgdGhlIGdlbmVyYXRlZCB1aWQgd2lsbCBiZSB0aGUgc2FtZSBmb3IgdGhlc2UgZm9ybWF0dGluZyBjYXRlZ29yaWVzIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBTb2x1dGlvbiA9PiBTYXZlIHNsaWNlIG5hbWVzIHRvIG1vZGlmeSBlYWNoIHNsaWNlIHVpZCB0byBiZSB1bmlxdWUgYnkgYWRkaW5nIGNvdW50ZXIgdmFsdWUgdG8gdGhlIG5ldyBzbGljZSB1aWRcbiAgICAgICAgICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgc2xpY2UgZm9yIGVhY2ggcHJvcGVydHlcbiAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyVWlkID0gZ3JvdXBVaWQgKyBcIi1jb250YWluZXJcIjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGluZ0NvbnRhaW5lciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGlzcGxheU5hbWVLZXkpIDogY29udGFpbmVyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVyLmRlc2NyaXB0aW9uS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSkgOiBjb250YWluZXIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXJJdGVtczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lclVpZFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY29udGFpbmVySXRlbXMuZm9yRWFjaCgoY29udGFpbmVySXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbSBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckllbU5hbWUgPSBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5ID8gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJdGVtVWlkID0gY29udGFpbmVyVWlkICsgY29udGFpbmVySWVtTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0aW5nQ29udGFpbmVySXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IGNvbnRhaW5lckl0ZW1VaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlcyBhbmQgYWRkIHRoZW0gdG8gY3VycmVudCBmb3JtYXR0aW5nIGNvbnRhaW5lciBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY29udGFpbmVySXRlbS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdDb250YWluZXJJdGVtLnNsaWNlcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDb250YWluZXIuY29udGFpbmVySXRlbXMucHVzaChmb3JtYXR0aW5nQ29udGFpbmVySXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nR3JvdXAuY29udGFpbmVyID0gZm9ybWF0dGluZ0NvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvcExldmVsVG9nZ2xlU2xpY2UgPSBjYXJkR3JvdXBJbnN0YW5jZS50b3BMZXZlbFNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9wTGV2ZWxUb2dnbGVTbGljZS5zdXBwcmVzc0Rpc3BsYXlOYW1lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmb3JtYXR0aW5nR3JvdXAuZGlzcGxheU5hbWUgPT0gdW5kZWZpbmVkID8gZm9ybWF0dGluZ0NhcmQgOiBmb3JtYXR0aW5nR3JvdXApLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBCdWlsZCBmb3JtYXR0aW5nIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRGb3JtYXR0aW5nU2xpY2VzKHsgc2xpY2VzOiBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXM6IGZvcm1hdHRpbmdHcm91cC5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5yZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKTtcbiAgICAgICAgICAgIGZvcm1hdHRpbmdNb2RlbC5jYXJkcy5wdXNoKGZvcm1hdHRpbmdDYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXR0aW5nTW9kZWw7XG4gICAgfVxuICAgIGJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlcywgb2JqZWN0TmFtZSwgc2xpY2VOYW1lcywgZm9ybWF0dGluZ1NsaWNlcyB9KSB7XG4gICAgICAgIC8vIEZpbHRlciBzbGljZXMgYmFzZWQgb24gdGhlaXIgdmlzaWJpbGl0eVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybWF0dGluZ1NsaWNlID0gc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLmdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIpO1xuICAgICAgICAgICAgaWYgKGZvcm1hdHRpbmdTbGljZSkge1xuICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBmb3JtYXR0aW5nIHNsaWNlIHVpZCBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoc2xpY2VOYW1lc1tzbGljZS5uYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VOYW1lc1tzbGljZS5uYW1lXSsrO1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2UudWlkID0gYCR7Zm9ybWF0dGluZ1NsaWNlLnVpZH0tJHtzbGljZU5hbWVzW3NsaWNlLm5hbWVdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdTbGljZXMucHVzaChmb3JtYXR0aW5nU2xpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gUHJvY2VlZGVkIHNsaWNlIG5hbWVzIGFyZSBzYXZlZCB0byBwcmV2ZW50IGR1cGxpY2F0ZWQgZGVmYXVsdCBkZXNjcmlwdG9ycyBpbiBjYXNlIG9mIHVzaW5nIFxuICAgICAgICAvLyBmb3JtYXR0aW5nIGNhdGVnb3JpZXMgJiBzZWxlY3RvcnMsIHNpbmNlIHRoZXkgaGF2ZSB0aGUgc2FtZSBkZXNjcmlwdG9yIG9iamVjdE5hbWUgYW5kIHByb3BlcnR5TmFtZVxuICAgICAgICBjb25zdCBzbGljZU5hbWVzID0ge307XG4gICAgICAgIGxldCByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IFtdO1xuICAgICAgICBsZXQgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICAgICAgbGV0IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKGNhcmQgaW5zdGFuY2VvZiBDb21wb3NpdGVDYXJkICYmIGNhcmQudG9wTGV2ZWxTbGljZSlcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uKF9hID0gY2FyZC50b3BMZXZlbFNsaWNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUpKTtcbiAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkID9cbiAgICAgICAgICAgIFtjYXJkXS5maWx0ZXIoKHsgdmlzaWJsZSA9IHRydWUgfSkgPT4gdmlzaWJsZSkgOlxuICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgY2FyZEdyb3VwSW5zdGFuY2VzLmZvckVhY2goKGNhcmRHcm91cEluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcywgc2xpY2VOYW1lcywgY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZSk7XG4gICAgICAgICAgICAoX2IgPSAoX2EgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250YWluZXJJdGVtcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodGhpcy5nZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmQubmFtZSwgY29udGFpbmVySXRlbS5zbGljZXMsIHNsaWNlTmFtZXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMucHVzaCguLi5jYXJkU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxuICAgIGdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUsIHNsaWNlcywgc2xpY2VOYW1lcywgdG9wTGV2ZWxTbGljZSkge1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgaWYgKHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgIHNsaWNlTmFtZXNbdG9wTGV2ZWxTbGljZS5uYW1lXSA9IHRydWU7XG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdCh0b3BMZXZlbFNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBzbGljZXMgPT09IG51bGwgfHwgc2xpY2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZXMuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgIGlmIChzbGljZSAmJiAhc2xpY2VOYW1lc1tzbGljZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHNsaWNlLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycztcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5qcy5tYXAiLCJpbXBvcnQgKiBhcyBmb3JtYXR0aW5nU2V0dGluZ3MgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50c1wiO1xuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgZnJvbSBcIi4vRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZVwiO1xuZXhwb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkIGFuZCByZXR1cm4gZm9ybWF0dGluZyBkZXNjcmlwdG9yIGZvciBzaW1wbGUgc2xpY2VcbiAqXG4gKiBAcGFyYW0gb2JqZWN0TmFtZSBPYmplY3QgbmFtZSBmcm9tIGNhcGFiaWxpdGllc1xuICogQHBhcmFtIHNsaWNlIGZvcm1hdHRpbmcgc2ltcGxlIHNsaWNlXG4gKiBAcmV0dXJucyBzaW1wbGUgc2xpY2UgZm9ybWF0dGluZyBkZXNjcmlwdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREZXNjcmlwdG9yKG9iamVjdE5hbWUsIHNsaWNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcbiAgICAgICAgcHJvcGVydHlOYW1lOiBzbGljZS5uYW1lLFxuICAgICAgICBzZWxlY3Rvcjogc2xpY2Uuc2VsZWN0b3IsXG4gICAgICAgIGFsdENvbnN0YW50VmFsdWVTZWxlY3Rvcjogc2xpY2UuYWx0Q29uc3RhbnRTZWxlY3RvcixcbiAgICAgICAgaW5zdGFuY2VLaW5kOiBzbGljZS5pbnN0YW5jZUtpbmRcbiAgICB9O1xufVxuLyoqXG4gKiBHZXQgcHJvcGVydHkgdmFsdWUgZnJvbSBkYXRhdmlldyBvYmplY3RzIGlmIGV4aXN0c1xuICogRWxzZSByZXR1cm4gdGhlIGRlZmF1bHQgdmFsdWUgZnJvbSBmb3JtYXR0aW5nIHNldHRpbmdzIG9iamVjdFxuICpcbiAqIEBwYXJhbSB2YWx1ZSBkYXRhdmlldyBvYmplY3QgdmFsdWVcbiAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZm9ybWF0dGluZyBzZXR0aW5ncyBkZWZhdWx0IHZhbHVlXG4gKiBAcmV0dXJucyBmb3JtYXR0aW5nIHByb3BlcnR5IHZhbHVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKHNsaWNlLCB2YWx1ZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiAhdmFsdWUuc29saWQpKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGlmICh2YWx1ZS5zb2xpZCkge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnNvbGlkLmNvbG9yIH07XG4gICAgfVxuICAgIGlmIChzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2UuaXRlbXMpIHtcbiAgICAgICAgbGV0IGl0ZW1zQXJyYXkgPSBzbGljZS5pdGVtcztcbiAgICAgICAgcmV0dXJuIGl0ZW1zQXJyYXkuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT0gdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Gb3JtYXR0aW5nU2V0dGluZ3NVdGlscy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncyB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcblxyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5TaW1wbGVDYXJkO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzU2xpY2UgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2xpY2U7XHJcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCA9IGZvcm1hdHRpbmdTZXR0aW5ncy5Nb2RlbDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAwLiBUSVRSRVMgQ09MT05ORVMgKEfDqW7DqXJhdGlvbiBkeW5hbWlxdWUpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVGl0cmVzQ29sb25uZXNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0aXRyZXNDb2xvbm5lc1wiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiMC4gVElUUkVTIENPTE9OTkVTXCI7XHJcbiAgICBcclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpY2VzLnB1c2gobmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0aXRyZVwiICsgaSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlRpdHJlIENvbCBcIiArIGksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlRpdHJlLi4uXCIgLy8gQ09SUkVDVElPTjogUGxhY2Vob2xkZXIgb2JsaWdhdG9pcmVcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDEuIE1FTlUgREUgU8OJTEVDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFNlbGVjdGlvbk1lbnVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJzZWxlY3Rpb25NZW51XCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCIxLiBTw4lMRUNUSU9OIChFeGNlbClcIjtcclxuXHJcbiAgICBsaWduZUFjdGl2ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImxpZ25lQWN0aXZlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiTm9tIGV4YWN0IGRlIGxhIGxpZ25lIGFjdGl2ZVwiLFxyXG4gICAgICAgIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkV4OiBDaGlmZnJlIGQnYWZmYWlyZXNcIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFt0aGlzLmxpZ25lQWN0aXZlXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIDIuIFNUWUxFIERFIExJR05FXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgU3R5bGVMaWduZVNldHRpbmdzIGV4dGVuZHMgRm9ybWF0dGluZ1NldHRpbmdzQ2FyZCB7XHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcInN0eWxlTGlnbmVcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIjIuIFBFUlNPTk5BTElTQVRJT04gKEV4Y2VsKVwiO1xyXG4gICAgXHJcbiAgICAvLyBDT1JSRUNUSU9OOiBBam91dCBleHBsaWNpdGUgZHUgc2VsZWN0b3IgcG91ciDDqXZpdGVyIGwnZXJyZXVyIFRTXHJcbiAgICBzZWxlY3RvcjogcG93ZXJiaS5kYXRhLlNlbGVjdG9yOyBcclxuXHJcbiAgICAvLyBQb3NpdGlvbm5lbWVudFxyXG4gICAgY29sdW1uSW5kZXggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJjb2x1bW5JbmRleFwiLCBkaXNwbGF5TmFtZTogXCJOwrAgQ29sb25uZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBvcmRyZVRyaSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm9yZHJlVHJpXCIsIGRpc3BsYXlOYW1lOiBcIlBvc2l0aW9uXCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBNYXJnZXNcclxuICAgIG1hcmdpblRvcCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpblRvcFwiLCBkaXNwbGF5TmFtZTogXCJNYXJnZSBIYXV0XCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuICAgIG1hcmdpbkJvdHRvbSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpbkJvdHRvbVwiLCBkaXNwbGF5TmFtZTogXCJNYXJnZSBCYXNcIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgbWFyZ2luQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcIm1hcmdpbkNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgTWFyZ2VcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWaXNpYmlsaXTDqSAvIEhlYWRlclxyXG4gICAgaXNIaWRkZW4gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hpZGRlblwiLCBkaXNwbGF5TmFtZTogXCJNQVNRVUVSXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBpc0hlYWRlciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImlzSGVhZGVyXCIsIGRpc3BsYXlOYW1lOiBcIk1vZGUgVGl0cmVcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDb250ZW51XHJcbiAgICBjdXN0b21MYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcImN1c3RvbUxhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIlJlbm9tbWVyXCIsIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIk5vdXZlYXUgbm9tLi4uXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcbiAgICBjdXN0b21BbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJjdXN0b21BbW91bnRcIiwgZGlzcGxheU5hbWU6IFwiUmVtcGxhY2VyIE1vbnRhbnRcIiwgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVmFsZXVyIG91IHZpZGUuLi5cIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQb2xpY2VcclxuICAgIGZvbnRTaXplID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiZm9udFNpemVcIiwgZGlzcGxheU5hbWU6IFwiVGFpbGxlXCIsIHZhbHVlOiAxMlxyXG4gICAgfSk7XHJcbiAgICBmb250RmFtaWx5ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Gb250UGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRGYW1pbHlcIiwgZGlzcGxheU5hbWU6IFwiUG9saWNlXCIsIHZhbHVlOiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3R5bGUgTGliZWxsw6lcclxuICAgIGJnTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJnTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiRm9uZCBMaWJlbGzDqVwiLCB2YWx1ZTogeyB2YWx1ZTogXCJ0cmFuc3BhcmVudFwiIH1cclxuICAgIH0pO1xyXG4gICAgZmlsbExhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmaWxsTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiVGV4dGUgTGliZWxsw6lcIiwgdmFsdWU6IHsgdmFsdWU6IFwiYmxhY2tcIiB9XHJcbiAgICB9KTtcclxuICAgIGJvbGRMYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImJvbGRMYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJHcmFzIChMKVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXRhbGljTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpdGFsaWNMYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJJdGFsaXF1ZSAoTClcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTdHlsZSBQcml4XHJcbiAgICBiZ0Ftb3VudCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmdBbW91bnRcIiwgZGlzcGxheU5hbWU6IFwiRm9uZCBQcml4XCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcbiAgICBmaWxsQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmaWxsQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlIFByaXhcIiwgdmFsdWU6IHsgdmFsdWU6IFwiYmxhY2tcIiB9XHJcbiAgICB9KTtcclxuICAgIGJvbGRBbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIkdyYXMgKFApXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQm9yZHVyZXMgc3DDqWNpZmlxdWVzXHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXIgQm9yZHVyZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBCb3JkdXJlXCIsIHZhbHVlOiB7IHZhbHVlOiBcIiNlZWVcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLmNvbHVtbkluZGV4LCB0aGlzLm9yZHJlVHJpLFxyXG4gICAgICAgIHRoaXMuaXNIaWRkZW4sIHRoaXMuaXNIZWFkZXIsXHJcbiAgICAgICAgdGhpcy5tYXJnaW5Ub3AsIHRoaXMubWFyZ2luQm90dG9tLCB0aGlzLm1hcmdpbkNvbG9yLFxyXG4gICAgICAgIHRoaXMuY3VzdG9tTGFiZWwsIHRoaXMuY3VzdG9tQW1vdW50LFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsIHRoaXMuZm9udEZhbWlseSxcclxuICAgICAgICB0aGlzLmZpbGxMYWJlbCwgdGhpcy5iZ0xhYmVsLCB0aGlzLmJvbGRMYWJlbCwgdGhpcy5pdGFsaWNMYWJlbCxcclxuICAgICAgICB0aGlzLmZpbGxBbW91bnQsIHRoaXMuYmdBbW91bnQsIHRoaXMuYm9sZEFtb3VudCxcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTElHTkVTIE1BTlVFTExFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIE1hbnVhbExpbmVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgdGV4dCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICBuYW1lOiBcInRleHRcIiwgZGlzcGxheU5hbWU6IFwiVGV4dGVcIiwgdmFsdWU6IFwiTm91dmVsbGUgTGlnbmVcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJMaWJlbGzDqS4uLlwiIC8vIENPUlJFQ1RJT05cclxuICAgIH0pO1xyXG4gICAgc2hvdyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcInNob3dcIiwgZGlzcGxheU5hbWU6IFwiQWZmaWNoZXJcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGNvbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImNvbFwiLCBkaXNwbGF5TmFtZTogXCJDb2xvbm5lXCIsIHZhbHVlOiAxXHJcbiAgICB9KTtcclxuICAgIHBvcyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcInBvc1wiLCBkaXNwbGF5TmFtZTogXCJQb3NpdGlvblwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBpc0hlYWRlciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImlzSGVhZGVyXCIsIGRpc3BsYXlOYW1lOiBcIlRpdHJlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBiZ0NvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiZ0NvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkZvbmRcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuICAgIHRleHRDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwidGV4dENvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlXCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBtYXJnaW5Ub3AgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Ub3BcIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgSGF1dFwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIlRhaWxsZVwiLCB2YWx1ZTogMTJcclxuICAgIH0pO1xyXG4gICAgYm9sZCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcImJvbGRcIiwgZGlzcGxheU5hbWU6IFwiR3Jhc1wiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXRhbGljID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXRhbGljXCIsIGRpc3BsYXlOYW1lOiBcIkl0YWxpcXVlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXIgQm9yZHVyZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1ciBCb3JkdXJlXCIsIHZhbHVlOiB7IHZhbHVlOiBcIiNlZWVcIiB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLnNob3csIHRoaXMudGV4dCwgdGhpcy5jb2wsIHRoaXMucG9zLFxyXG4gICAgICAgIHRoaXMuaXNIZWFkZXIsIHRoaXMubWFyZ2luVG9wLFxyXG4gICAgICAgIHRoaXMudGV4dENvbG9yLCB0aGlzLmJnQ29sb3IsXHJcbiAgICAgICAgdGhpcy5mb250U2l6ZSwgdGhpcy5ib2xkLCB0aGlzLml0YWxpYyxcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQk9SRFVSRVMgVEFCTEVBVSBHTE9CQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBUYWJsZUJvcmRlcnNTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJ0YWJsZUJvcmRlcnNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIvCflLIgQk9SRFVSRVMgVEFCTEVBVVwiO1xyXG5cclxuICAgIGJvcmRlcldpZHRoID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyV2lkdGhcIiwgZGlzcGxheU5hbWU6IFwiTGFyZ2V1clwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyQ29sb3JcIiwgZGlzcGxheU5hbWU6IFwiQ291bGV1clwiLCB2YWx1ZTogeyB2YWx1ZTogXCJyZ2JhKDAsMCwwLDAuMjUpXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib3JkZXJTdHlsZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuSXRlbURyb3Bkb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlclN0eWxlXCIsXHJcbiAgICAgICAgZGlzcGxheU5hbWU6IFwiU3R5bGVcIixcclxuICAgICAgICB2YWx1ZTogeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJQbGVpblwiIH0sXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJzb2xpZFwiLCBkaXNwbGF5TmFtZTogXCJQbGVpblwiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZGFzaGVkXCIsIGRpc3BsYXlOYW1lOiBcIlRpcmV0c1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZG90dGVkXCIsIGRpc3BsYXlOYW1lOiBcIlBvaW50aWxsw6lzXCIgfSxcclxuICAgICAgICAgICAgeyB2YWx1ZTogXCJkb3VibGVcIiwgZGlzcGxheU5hbWU6IFwiRG91YmxlXCIgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG4gICAgYm9yZGVyUmFkaXVzID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiYm9yZGVyUmFkaXVzXCIsIGRpc3BsYXlOYW1lOiBcIkFycm9uZGlcIiwgdmFsdWU6IDhcclxuICAgIH0pO1xyXG5cclxuICAgIHNsaWNlczogQXJyYXk8Rm9ybWF0dGluZ1NldHRpbmdzU2xpY2U+ID0gW1xyXG4gICAgICAgIHRoaXMuYm9yZGVyV2lkdGgsIHRoaXMuYm9yZGVyQ29sb3IsIHRoaXMuYm9yZGVyU3R5bGUsIHRoaXMuYm9yZGVyUmFkaXVzXHJcbiAgICBdO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTU9Ew4hMRSBQUklOQ0lQQUxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsIHtcclxuICAgIHRpdHJlc0NvbG9ubmVzID0gbmV3IFRpdHJlc0NvbG9ubmVzU2V0dGluZ3MoKTtcclxuICAgIHNlbGVjdGlvbk1lbnUgPSBuZXcgU2VsZWN0aW9uTWVudVNldHRpbmdzKCk7XHJcbiAgICBzdHlsZUxpZ25lID0gbmV3IFN0eWxlTGlnbmVTZXR0aW5ncygpO1xyXG4gICAgdGFibGVCb3JkZXJzID0gbmV3IFRhYmxlQm9yZGVyc1NldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIGNhcmRzOiBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkW10gPSBbXHJcbiAgICAgICAgdGhpcy50aXRyZXNDb2xvbm5lcyxcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1lbnUsXHJcbiAgICAgICAgdGhpcy5zdHlsZUxpZ25lLFxyXG4gICAgICAgIHRoaXMudGFibGVCb3JkZXJzXHJcbiAgICBdO1xyXG59IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5pbXBvcnQgVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XHJcbmltcG9ydCBWaXN1YWxVcGRhdGVPcHRpb25zID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxVcGRhdGVPcHRpb25zO1xyXG5pbXBvcnQgSVZpc3VhbCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbDtcclxuaW1wb3J0IElWaXN1YWxIb3N0ID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsSG9zdDtcclxuXHJcbi8vIEltcG9ydGF0aW9uIGRlcyB0eXBlcyBwb3VyIGxhIGdlc3Rpb24gZGVzIGxpY2VuY2VzIChBUEkgNC43KylcclxuaW1wb3J0IElWaXN1YWxMaWNlbnNlTWFuYWdlciA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS5JVmlzdWFsTGljZW5zZU1hbmFnZXI7XHJcbmltcG9ydCBMaWNlbnNlSW5mb1Jlc3VsdCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuTGljZW5zZUluZm9SZXN1bHQ7XHJcbmltcG9ydCBTZXJ2aWNlUGxhbiA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuU2VydmljZVBsYW47XHJcbmltcG9ydCBTZXJ2aWNlUGxhblN0YXRlID0gcG93ZXJiaS5TZXJ2aWNlUGxhblN0YXRlO1xyXG5pbXBvcnQgTGljZW5zZU5vdGlmaWNhdGlvblR5cGUgPSBwb3dlcmJpLkxpY2Vuc2VOb3RpZmljYXRpb25UeXBlO1xyXG5cclxuLy8gSW1wb3J0YXRpb24gZHUgU2VydmljZSBkZSBmb3JtYXRhZ2UgKEZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UpXHJcbmltcG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9IGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsXCI7XHJcbmltcG9ydCB7IFZpc3VhbEZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLCBNYW51YWxMaW5lU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXR0aW5nc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3R5bGUvdmlzdWFsLmxlc3NcIjtcclxuXHJcbmludGVyZmFjZSBSb3dEYXRhIHtcclxuICAgIG9yaWdpbmFsTmFtZTogc3RyaW5nO1xyXG4gICAgbGFiZWw6IHN0cmluZztcclxuICAgIGFtb3VudDogc3RyaW5nO1xyXG4gICAgY29sdW1uSW5kZXg6IG51bWJlcjtcclxuICAgIHNvcnRJbmRleDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBtYXJnaW5Cb3R0b206IG51bWJlcjtcclxuICAgIG1hcmdpblRvcDogbnVtYmVyO1xyXG4gICAgbWFyZ2luQ29sb3I6IHN0cmluZztcclxuICAgIGlzSGlkZGVuOiBib29sZWFuO1xyXG4gICAgaXNIZWFkZXI6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGlzVmlydHVhbDogYm9vbGVhbjtcclxuXHJcbiAgICBmb250OiBzdHJpbmc7IGZvbnRTaXplOiBudW1iZXI7XHJcbiAgICBiZ0xhYmVsOiBzdHJpbmc7IGNvbG9yTGFiZWw6IHN0cmluZzsgYm9sZExhYmVsOiBib29sZWFuOyBpdGFsaWNMYWJlbDogYm9vbGVhbjtcclxuICAgIGJnQW1vdW50OiBzdHJpbmc7IGNvbG9yQW1vdW50OiBzdHJpbmc7IGJvbGRBbW91bnQ6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGN1c3RvbUFtb3VudDogc3RyaW5nO1xyXG4gICAgY3VzdG9tTGFiZWw/OiBzdHJpbmc7XHJcbiAgICBcclxuICAgIC8vIEJvcmR1cmVzIGNvbXBsw6h0ZXMgKDQgY8O0dMOpcylcclxuICAgIGJvcmRlcldpZHRoOiBudW1iZXI7XHJcbiAgICBib3JkZXJDb2xvcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlzdWFsIGltcGxlbWVudHMgSVZpc3VhbCB7XHJcbiAgICBwcml2YXRlIHRhcmdldDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGhvc3Q6IElWaXN1YWxIb3N0O1xyXG4gICAgcHJpdmF0ZSBkaXZDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBmbGV4Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhbGxSb3dzRGF0YTogUm93RGF0YVtdID0gW107XHJcbiAgICBwcml2YXRlIGNhdGVnb3JpY2FsRGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50U2VsZWN0ZWRMYWJlbDogc3RyaW5nID0gXCJcIjsgXHJcbiAgICBwcml2YXRlIGNvbHVtblRpdGxlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHByaXZhdGUgbWV0YWRhdGE6IGFueTtcclxuICAgIHByaXZhdGUgdG9vbGJhcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHByaXZhdGUgcGVuZGluZ0NoYW5nZXM6IE1hcDxzdHJpbmcsIGFueT4gPSBuZXcgTWFwKCk7XHJcbiAgICBwcml2YXRlIG1hbnVhbExpbmVLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgc2VsZWN0aW9uTWFuYWdlcjogcG93ZXJiaS5leHRlbnNpYmlsaXR5LklTZWxlY3Rpb25NYW5hZ2VyO1xyXG5cclxuICAgIC8vIEJvcmR1cmVzIGdsb2JhbGVzIGR1IHRhYmxlYXVcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJDb2xvcjogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMjUpXCI7XHJcbiAgICBwcml2YXRlIHRhYmxlQm9yZGVyU3R5bGU6IHN0cmluZyA9IFwic29saWRcIjtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgLy8gTW9kw6hsZSBkZSBmb3JtYXRhZ2UgKEFQSSA1LjEpXHJcbiAgICBwcml2YXRlIGZvcm1hdHRpbmdTZXR0aW5nczogVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWw7XHJcbiAgICAvLyBTZXJ2aWNlIGRlIGZvcm1hdGFnZSAoTsOpY2Vzc2FpcmUgcG91ciBidWlsZEZvcm1hdHRpbmdNb2RlbClcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuXHJcbiAgICAvLyBMaWNlbnNlIHJlbGF0ZWQgcHJvcGVydGllc1xyXG4gICAgcHJpdmF0ZSBsaWNlbnNlTWFuYWdlcjogSVZpc3VhbExpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VXNlclZhbGlkUGxhbnM6IFNlcnZpY2VQbGFuW10gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGhhc1NlcnZpY2VQbGFuczogYm9vbGVhbiB8IHVuZGVmaW5lZDtcclxuICAgIHByaXZhdGUgaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcbiAgICBwcml2YXRlIGlzTGljZW5zZUluZm9BdmFpbGFibGU6IGJvb2xlYW4gfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gSGVscGVyIGNlbnRyYWxpc8OpIHBvdXIgcGVyc2lzdGVyIGxlcyBwcm9wcmnDqXTDqXMgZCd1bmUgbGlnbmUgKG1lcmdlIHNhZmUgKyBsb2dzKVxyXG4gICAgcHJpdmF0ZSBwZXJzaXN0U3R5bGUoc2VsZWN0b3I6IGFueSwgcHJvcGVydGllczogYW55LCBvYmplY3ROYW1lOiBzdHJpbmcgPSBcInN0eWxlTGlnbmVcIikge1xyXG4gICAgICAgIC8vIG5ldHRveWVyIGxlcyBjbMOpcyB1bmRlZmluZWRcclxuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzIHx8IHt9KS5mb3JFYWNoKGsgPT4geyBpZiAocHJvcGVydGllc1trXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgcHJvcGVydGllc1trXTsgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIFNUWUxFIC0+IG9iamVjdDpcIiwgb2JqZWN0TmFtZSwgXCJzZWxlY3RvcjpcIiwgc2VsZWN0b3IsIFwicHJvcHM6XCIsIHByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogb2JqZWN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCBTVFlMRSBPSyAtPlwiLCBvYmplY3ROYW1lKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlBFUlNJU1QgU1RZTEUgRVJST1I6XCIsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlTGljZW5zZU5vdGlmaWNhdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0xpY2Vuc2VVbnN1cHBvcnRlZEVudikge1xyXG4gICAgICAgICAgICAgdGhpcy5saWNlbnNlTWFuYWdlci5ub3RpZnlMaWNlbnNlUmVxdWlyZWQoTGljZW5zZU5vdGlmaWNhdGlvblR5cGUuVW5zdXBwb3J0ZWRFbnYpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaGFzU2VydmljZVBsYW5zKSB7XHJcbiAgICAgICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyLm5vdGlmeUxpY2Vuc2VSZXF1aXJlZChMaWNlbnNlTm90aWZpY2F0aW9uVHlwZS5WaXN1YWxJc0Jsb2NrZWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgc2VydmljZSBkZSBmb3JtYXRhZ2VcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG5cclxuICAgICAgICAvLyBMaWNlbnNlIE1hbmFnZW1lbnRcclxuICAgICAgICB0aGlzLmxpY2Vuc2VNYW5hZ2VyID0gb3B0aW9ucy5ob3N0LmxpY2Vuc2VNYW5hZ2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubGljZW5zZU1hbmFnZXIuZ2V0QXZhaWxhYmxlU2VydmljZVBsYW5zKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdDogTGljZW5zZUluZm9SZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnYgPSByZXN1bHQuaXNMaWNlbnNlVW5zdXBwb3J0ZWRFbnY7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGljZW5zZUluZm9BdmFpbGFibGUgPSByZXN1bHQuaXNMaWNlbnNlSW5mb0F2YWlsYWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xpY2Vuc2VJbmZvQXZhaWxhYmxlICYmICF0aGlzLmlzTGljZW5zZVVuc3VwcG9ydGVkRW52KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclZhbGlkUGxhbnMgPSByZXN1bHQucGxhbnM/LmZpbHRlcigocGxhbjogU2VydmljZVBsYW4pID0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGxhbi5zdGF0ZSA9PT0gU2VydmljZVBsYW5TdGF0ZS5BY3RpdmUgfHwgcGxhbi5zdGF0ZSA9PT0gU2VydmljZVBsYW5TdGF0ZS5XYXJuaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTZXJ2aWNlUGxhbnMgPSAhIXRoaXMuY3VycmVudFVzZXJWYWxpZFBsYW5zPy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMaWNlbnNlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTGljZW5zZSBjaGVjayBmYWlsZWQ6XCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyVmFsaWRQbGFucyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzU2VydmljZVBsYW5zID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBnZXN0aW9ubmFpcmUgZGUgc8OpbGVjdGlvbiBwb3VyIGxlcyBtZW51cyBjb250ZXh0dWVsc1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgZ2VzdGlvbm5haXJlIGRlIHPDqWxlY3Rpb24gcG91ciBsZXMgbWVudXMgY29udGV4dHVlbHNcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uTWFuYWdlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIuY2xhc3NOYW1lID0gXCJzY3JvbGwtd3JhcHBlclwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZGl2Q29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFjY291bnRpbmctY29udGFpbmVyXCI7XHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuY2xhc3NOYW1lID0gXCJmbG9hdGluZy10b29sYmFyXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9vbGJhcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiICYmIFxyXG4gICAgICAgICAgICAgICAgIXRoaXMudG9vbGJhci5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIG1vZMOobGUgZGUgZm9ybWF0YWdlXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoKTtcclxuXHJcbiAgICAgICAgLy8gTmV0dG95YWdlIHPDqWN1cmlzw6lcclxuICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbGxSb3dzRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMubWFudWFsTGluZUtleXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gZGF0YVZpZXcgPyBkYXRhVmlldy5tZXRhZGF0YSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWNhbERhdGEgPSBkYXRhVmlldyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbCA/IGRhdGFWaWV3LmNhdGVnb3JpY2FsIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgYm9yZHVyZXMgZ2xvYmFsZXMgZHUgdGFibGVhdVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGIgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl07XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQpIHRoaXMudGFibGVCb3JkZXJXaWR0aCA9IHRiW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJDb2xvclwiXSkgdGhpcy50YWJsZUJvcmRlckNvbG9yID0gKHRiW1wiYm9yZGVyQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyU3R5bGVcIl0pIHRoaXMudGFibGVCb3JkZXJTdHlsZSA9IHRiW1wiYm9yZGVyU3R5bGVcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJSYWRpdXNcIl0gIT09IHVuZGVmaW5lZCkgdGhpcy50YWJsZUJvcmRlclJhZGl1cyA9IHRiW1wiYm9yZGVyUmFkaXVzXCJdIGFzIG51bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+UsiBCT1JEVVJFUyBDSEFSR8OJRVM6XCIsIHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMudGFibGVCb3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGFibGVCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgc3R5bGU6IHRoaXMudGFibGVCb3JkZXJTdHlsZSxcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnRhYmxlQm9yZGVyUmFkaXVzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDEuIFRJVFJFUyAtIEluaXRpYWxpc2F0aW9uIGR5bmFtaXF1ZVxyXG4gICAgICAgIHRoaXMuY29sdW1uVGl0bGVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gXCJ0aXRyZVwiICsgaTtcclxuICAgICAgICAgICAgICAgIGlmICh0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRpdGxlc1tpLTFdID0gdFtrZXldIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMi4gRE9OTsOJRVMgRVhDRUxcclxuICAgICAgICBsZXQgbWF4Q29sdW1uSW5kZXhVc2VkID0gMTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWNhbERhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhLnZhbHVlcyA/IHRoaXMuY2F0ZWdvcmljYWxEYXRhLnZhbHVlc1swXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInNlbGVjdGlvbk1lbnVcIl1bXCJsaWduZUFjdGl2ZVwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsICYmIGNhdGVnb3JpZXMudmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwgPSBjYXRlZ29yaWVzLnZhbHVlc1swXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLnZhbHVlcy5mb3JFYWNoKChjYXRWYWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTmFtZSA9IGNhdFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93OiBSb3dEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZTogb3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZXMgPyB2YWx1ZXMudmFsdWVzW2luZGV4XT8udG9TdHJpbmcoKSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IDEsIHNvcnRJbmRleDogaW5kZXggKiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogMCwgaXNIaWRkZW46IGZhbHNlLCBtYXJnaW5Db2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBmYWxzZSwgaXNWaXJ0dWFsOiBmYWxzZSwgY3VzdG9tQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvckxhYmVsOiBcImJsYWNrXCIsIGJvbGRMYWJlbDogZmFsc2UsIGl0YWxpY0xhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvckFtb3VudDogXCJibGFja1wiLCBib2xkQW1vdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZWVlXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0W1wic3R5bGVMaWduZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IG9iamVjdFtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImNvbHVtbkluZGV4XCJdKSByb3cuY29sdW1uSW5kZXggPSBzdHlsZVtcImNvbHVtbkluZGV4XCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5jb2x1bW5JbmRleCA8IDEpIHJvdy5jb2x1bW5JbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm9yZHJlVHJpXCJdICE9PSB1bmRlZmluZWQpIHJvdy5zb3J0SW5kZXggPSBzdHlsZVtcIm9yZHJlVHJpXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm1hcmdpbkJvdHRvbVwiXSAhPT0gdW5kZWZpbmVkKSByb3cubWFyZ2luQm90dG9tID0gc3R5bGVbXCJtYXJnaW5Cb3R0b21cIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJtYXJnaW5Ub3BcIl0gIT09IHVuZGVmaW5lZCkgcm93Lm1hcmdpblRvcCA9IHN0eWxlW1wibWFyZ2luVG9wXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiaXNIaWRkZW5cIl0pIHJvdy5pc0hpZGRlbiA9IHN0eWxlW1wiaXNIaWRkZW5cIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQ29sb3JcIl0pIHJvdy5tYXJnaW5Db2xvciA9IChzdHlsZVtcIm1hcmdpbkNvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImN1c3RvbUxhYmVsXCJdKSByb3cubGFiZWwgPSBzdHlsZVtcImN1c3RvbUxhYmVsXCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY3VzdG9tQW1vdW50XCJdKSByb3cuY3VzdG9tQW1vdW50ID0gc3R5bGVbXCJjdXN0b21BbW91bnRcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpc0hlYWRlclwiXSkgcm93LmlzSGVhZGVyID0gc3R5bGVbXCJpc0hlYWRlclwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmb250U2l6ZVwiXSkgcm93LmZvbnRTaXplID0gc3R5bGVbXCJmb250U2l6ZVwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZvbnRGYW1pbHlcIl0pIHJvdy5mb250ID0gc3R5bGVbXCJmb250RmFtaWx5XCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYmdMYWJlbFwiXSkgcm93LmJnTGFiZWwgPSAoc3R5bGVbXCJiZ0xhYmVsXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZpbGxMYWJlbFwiXSkgcm93LmNvbG9yTGFiZWwgPSAoc3R5bGVbXCJmaWxsTGFiZWxcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9sZExhYmVsXCJdICE9PSB1bmRlZmluZWQpIHJvdy5ib2xkTGFiZWwgPSBzdHlsZVtcImJvbGRMYWJlbFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpdGFsaWNMYWJlbFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuaXRhbGljTGFiZWwgPSBzdHlsZVtcIml0YWxpY0xhYmVsXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJnQW1vdW50XCJdKSByb3cuYmdBbW91bnQgPSAoc3R5bGVbXCJiZ0Ftb3VudFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmaWxsQW1vdW50XCJdKSByb3cuY29sb3JBbW91bnQgPSAoc3R5bGVbXCJmaWxsQW1vdW50XCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvbGRBbW91bnRcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvbGRBbW91bnQgPSBzdHlsZVtcImJvbGRBbW91bnRcIl0gYXMgYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQpIHJvdy5ib3JkZXJXaWR0aCA9IHN0eWxlW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib3JkZXJDb2xvclwiXSkgcm93LmJvcmRlckNvbG9yID0gKHN0eWxlW1wiYm9yZGVyQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFwcGxpcXVlciBsZXMgY2hhbmdlbWVudHMgZW4gYXR0ZW50ZSAob3B0aW1pc3RlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZ0NoYW5nZXMuaGFzKG9yaWdpbmFsTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5wZW5kaW5nQ2hhbmdlcy5nZXQob3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHBlbmRpbmcudGltZXN0YW1wIDwgMzAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbE1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZW5kaW5nKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpbWVzdGFtcFwiKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGVuZGluZ1trZXldID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygcm93W2tleV0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBNYXRoLmFicyhwZW5kaW5nW2tleV0gLSByb3dba2V5XSkgPCAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHBlbmRpbmdba2V5XSA9PT0gcm93W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93W2tleV0gPSBwZW5kaW5nW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbE1hdGNoZWQpIHRoaXMucGVuZGluZ0NoYW5nZXMuZGVsZXRlKG9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5kZWxldGUob3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuY29sdW1uSW5kZXggPiBtYXhDb2x1bW5JbmRleFVzZWQpIG1heENvbHVtbkluZGV4VXNlZCA9IHJvdy5jb2x1bW5JbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIExJR05FUyBNQU5VRUxMRVMgRFlOQU1JUVVFU1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhLm9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIm1hbnVhbExpbmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbnVhbExpbmVLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJzaG93XCJdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBzW1widGV4dFwiXSA/IHNbXCJ0ZXh0XCJdIGFzIHN0cmluZyA6IFwiTm91dmVsbGUgTGlnbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IHNbXCJjb2xcIl0gPyBzW1wiY29sXCJdIGFzIG51bWJlciA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBzW1wicG9zXCJdID8gc1tcInBvc1wiXSBhcyBudW1iZXIgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNIZWFkID0gc1tcImlzSGVhZGVyXCJdID8gc1tcImlzSGVhZGVyXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJnID0gc1tcImJnQ29sb3JcIl0gPyAoc1tcImJnQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvciA6IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gc1tcInRleHRDb2xvclwiXSA/IChzW1widGV4dENvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3IgOiBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdCA9IHNbXCJtYXJnaW5Ub3BcIl0gPyBzW1wibWFyZ2luVG9wXCJdIGFzIG51bWJlciA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcyA9IHNbXCJmb250U2l6ZVwiXSA/IHNbXCJmb250U2l6ZVwiXSBhcyBudW1iZXIgOiAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvID0gc1tcImJvbGRcIl0gPyBzW1wiYm9sZFwiXSBhcyBib29sZWFuIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdCA9IHNbXCJpdGFsaWNcIl0gPyBzW1wiaXRhbGljXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ3ID0gc1tcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQgPyBzW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJjID0gc1tcImJvcmRlckNvbG9yXCJdID8gKHNbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCIjZWVlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdlJvdzogUm93RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHR4dCwgYW1vdW50OiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2wsIHNvcnRJbmRleDogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IG10LCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogaXNIZWFkLCBpc1ZpcnR1YWw6IHRydWUsIGN1c3RvbUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogZnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBiZywgY29sb3JMYWJlbDogY29sb3IsIGJvbGRMYWJlbDogYm8sIGl0YWxpY0xhYmVsOiBpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBiZywgY29sb3JBbW91bnQ6IGNvbG9yLCBib2xkQW1vdW50OiBibyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBidyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBiY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLnB1c2godlJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIFJFTkRVXHJcbiAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2x1bW5JbmRleFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlcldpZHRoID0gYCR7dGhpcy50YWJsZUJvcmRlcldpZHRofXB4YDtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyU3R5bGUgPSB0aGlzLnRhYmxlQm9yZGVyU3R5bGU7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy50YWJsZUJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHt0aGlzLnRhYmxlQm9yZGVyUmFkaXVzfXB4YDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YSA/IHRoaXMuY2F0ZWdvcmljYWxEYXRhLmNhdGVnb3JpZXNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQm91dG9ucyBkJ2FjdGlvbnNcclxuICAgICAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICB0b2dnbGVCdG4uY2xhc3NOYW1lID0gXCJ0b2dnbGUtYWN0aW9ucy1idXR0b25cIjtcclxuICAgICAgICB0b2dnbGVCdG4udGV4dENvbnRlbnQgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCLil4BcIiA6IFwi4pa2XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnRpdGxlID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiTWFzcXVlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiIDogXCJBZmZpY2hlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLm1pbldpZHRoID0gXCIzMnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmhlaWdodCA9IFwiMzJweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuY29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5tYXJnaW4gPSBcIjZweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDgpXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjEpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0b2dnbGVCdG4ub25tb3VzZW91dCA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNiM2Q3ZmZcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID0gIXRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGU7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIuKXgFwiIDogXCLilrZcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnRpdGxlID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiTWFzcXVlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiIDogXCJBZmZpY2hlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVDb2x1bW5EaXYpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdG4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZENvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5jbGFzc05hbWUgPSBcImFkZC1jb2x1bW4tYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWluV2lkdGggPSBcIjQwcHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMnNcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY29sb3IgPSBcIiM2NjZcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkICNjY2NcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjEycHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnRleHRDb250ZW50ID0gXCLinpVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYudGl0bGUgPSBcIkFqb3V0ZXIgdW5lIG5vdXZlbGxlIGNvbG9ubmVcIjtcclxuICAgICAgICBcclxuICAgICAgICBhZGRDb2x1bW5EaXYub25tb3VzZW92ZXIgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiOyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYub25tb3VzZW91dCA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2NjY1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQWRkQ29sdW1uID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IFwiQ09MT05ORSBcIiArIG5ld0luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgW1widGl0cmVcIiArIG5ld0luZGV4XTogbmV3VGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRDb2x1bW4sIHRydWUpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sIHRydWUpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ29sdW1uRGl2KTtcclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUNvbHVtbkRpdjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAobWF4Q29sdW1uc1RvU2hvdyA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlDb2xzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkgJiYgIXIuaXNIaWRkZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFJvd3MubGVuZ3RoID09PSAwKSBlbXB0eUNvbHMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVtcHR5Q29scy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LmNsYXNzTmFtZSA9IFwicmVtb3ZlLWNvbHVtbi1idXR0b25cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLm1pbldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjJzXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5jb2xvciA9IFwiI2MwMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCAjYzAwXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi50ZXh0Q29udGVudCA9IFwi8J+Xke+4j1wiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnRpdGxlID0gYFN1cHByaW1lciB0b3V0ZXMgbGVzIGNvbG9ubmVzIHZpZGVzICgke2VtcHR5Q29scy5qb2luKFwiLCBcIil9KWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlDb2xzLmZvckVhY2goY29sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgW1widGl0cmVcIiArIGNvbF06IHVuZGVmaW5lZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQ29sdW1uRGl2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTGluZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkTGluZUJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBhZGRMaW5lQnRuLmNsYXNzTmFtZSA9IFwiYWRkLWxpbmUtYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmdhcCA9IFwiNnB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUud2lkdGggPSBcIjIycHhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmhlaWdodCA9IFwiMjJweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgYnRuSWNvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgICAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuVGV4dC5zdHlsZS5jb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIGJ0blRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICBidG5UZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xyXG4gICAgICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSBcIkxpZ25lXCI7XHJcblxyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5JY29uKTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICBhZGRMaW5lQnRuLnRpdGxlID0gXCJBam91dGVyIHVuZSBub3V2ZWxsZSBsaWduZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUubWFyZ2luID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCAxMnB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxOHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDQpXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZm9udEZhbWlseSA9IFwiJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWZcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZExpbmVCdG4ub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjYjNkN2ZmXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRMaW5lQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYW51YWxMaW5lS2V5cy5pbmNsdWRlcyhcIm1hbnVhbExpbmVcIiArIG5leHRJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IFwibWFudWFsTGluZVwiICsgbmV4dEluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogbmV3S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOb3V2ZWxsZSBMaWduZSBcIiArIG5leHRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjogeyBzb2xpZDogeyBjb2xvcjogXCJ0cmFuc3BhcmVudFwiIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiBcImJsYWNrXCIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0YWxpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRMaW5lQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5PVVZFTExFIE3DiVRIT0RFIE9CTElHQVRPSVJFIEFQSSA1LjErXHJcbiAgICAgKiBSZW1wbGFjZSBlbnVtZXJhdGVPYmplY3RJbnN0YW5jZXMgcG91ciBsYSBjZXJ0aWZpY2F0aW9uIFBvd2VyIEJJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nczsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQS4gVElUUkVTIENPTE9OTkVTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRPYmogPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXTtcclxuICAgICAgICAgICAgbW9kZWwudGl0cmVzQ29sb25uZXMuc2xpY2VzLmZvckVhY2goc2xpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRPYmpbc2xpY2UubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAoc2xpY2UgYXMgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCkudmFsdWUgPSB0T2JqW3NsaWNlLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEIuIE1FTlUgU8OJTEVDVElPTlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdKSB7XHJcbiAgICAgICAgICAgIG1vZGVsLnNlbGVjdGlvbk1lbnUubGlnbmVBY3RpdmUudmFsdWUgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdW1wibGlnbmVBY3RpdmVcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDLiBTVFlMRSBERSBMSUdORSAoTG9naXF1ZSBjb250ZXh0dWVsbGUpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmljYWxEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YS5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleENob2lzaSA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCh2ID0+IHYudG9TdHJpbmcoKSA9PT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXhDaG9pc2kgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZUNhcmQgPSBtb2RlbC5zdHlsZUxpZ25lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaW5kZXhDaG9pc2kpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbmVyIGxlIHPDqWxlY3RldXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlQ2FyZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgLy8gQ09SUkVDVElPTjogYXNzaWduZXIgYXVzc2kgbGUgc2VsZWN0b3Igw6AgQ0hBUVVFIHNsaWNlIHBvdXIgcXVlIGxlcyBwZXJzaXN0UHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgLy8gZMOpY2xlbmNow6lzIGRlcHVpcyBsZSBwYW5uZWF1IGRlIGZvcm1hdCBjaWJsZW50IGJpZW4gbGEgbGlnbmUgc8OpbGVjdGlvbm7DqWUuXHJcbiAgICAgICAgICAgICAgICAoc3R5bGVDYXJkLnNsaWNlcyB8fCBbXSkuZm9yRWFjaChzID0+IHsgKHMgYXMgYW55KS5zZWxlY3RvciA9IHNlbGVjdG9yOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbXBsaXNzYWdlIGR5bmFtaXF1ZSBkZXMgc2xpY2VzIHBhciBsZXVyIG5hbWUg4oCUIMOpdml0ZSBsZXMgcHJvYmzDqG1lcyBkZSB0eXBhZ2UgKGNvbG9yIHBpY2tlcnMsIGV0Yy4pXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0eWxlQ2FyZC5zbGljZXMgfHwgW10pLmZvckVhY2goc2xpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHNsaWNlIGFzIGFueSkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbHVtbkluZGV4XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5jb2x1bW5JbmRleDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkcmVUcmlcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LnNvcnRJbmRleDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFyZ2luVG9wXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5tYXJnaW5Ub3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmdpbkJvdHRvbVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cubWFyZ2luQm90dG9tOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJnaW5Db2xvclwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cubWFyZ2luQ29sb3IgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXNIaWRkZW5cIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmlzSGlkZGVuOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc0hlYWRlclwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuaXNIZWFkZXI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImN1c3RvbUxhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjdXN0b21BbW91bnRcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmN1c3RvbUFtb3VudCB8fCBcIlwiOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb250U2l6ZVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuZm9udFNpemU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvbnRGYW1pbHlcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmZvbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJnTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmJnTGFiZWwgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbExhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5jb2xvckxhYmVsIH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvbGRMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuYm9sZExhYmVsOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpdGFsaWNMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuaXRhbGljTGFiZWw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJnQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5iZ0Ftb3VudCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5jb2xvckFtb3VudCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib2xkQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5ib2xkQW1vdW50OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3JkZXJXaWR0aFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuYm9yZGVyV2lkdGg7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvcmRlckNvbG9yXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5ib3JkZXJDb2xvciB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBELiBMSUdORVMgTUFOVUVMTEVTIChEeW5hbWlxdWUpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhLm9iamVjdHMpLmZpbHRlcihrID0+IGsuc3RhcnRzV2l0aChcIm1hbnVhbExpbmVcIikpLnNvcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFudWFsT2JqID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hbnVhbENhcmQgPSBuZXcgTWFudWFsTGluZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmRpc3BsYXlOYW1lID0gbWFudWFsT2JqW1widGV4dFwiXSA/IFN0cmluZyhtYW51YWxPYmpbXCJ0ZXh0XCJdKSA6IGtleTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC50ZXh0LnZhbHVlID0gbWFudWFsT2JqW1widGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuc2hvdy52YWx1ZSA9IG1hbnVhbE9ialtcInNob3dcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmNvbC52YWx1ZSA9IG1hbnVhbE9ialtcImNvbFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQucG9zLnZhbHVlID0gbWFudWFsT2JqW1wicG9zXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5pc0hlYWRlci52YWx1ZSA9IG1hbnVhbE9ialtcImlzSGVhZGVyXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbE9ialtcImJnQ29sb3JcIl0pIG1hbnVhbENhcmQuYmdDb2xvci52YWx1ZSA9IG1hbnVhbE9ialtcImJnQ29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbE9ialtcInRleHRDb2xvclwiXSkgbWFudWFsQ2FyZC50ZXh0Q29sb3IudmFsdWUgPSBtYW51YWxPYmpbXCJ0ZXh0Q29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5tYXJnaW5Ub3AudmFsdWUgPSBtYW51YWxPYmpbXCJtYXJnaW5Ub3BcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmZvbnRTaXplLnZhbHVlID0gbWFudWFsT2JqW1wiZm9udFNpemVcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmJvbGQudmFsdWUgPSBtYW51YWxPYmpbXCJib2xkXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5pdGFsaWMudmFsdWUgPSBtYW51YWxPYmpbXCJpdGFsaWNcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmJvcmRlcldpZHRoLnZhbHVlID0gbWFudWFsT2JqW1wiYm9yZGVyV2lkdGhcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsT2JqW1wiYm9yZGVyQ29sb3JcIl0pIG1hbnVhbENhcmQuYm9yZGVyQ29sb3IudmFsdWUgPSBtYW51YWxPYmpbXCJib3JkZXJDb2xvclwiXVtcInNvbGlkXCJdW1wiY29sb3JcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlciBsYSBjYXJ0ZSBtYW51ZWxsZSDDoCBsYSBsaXN0ZSBkZXMgY2FydGVzIGR1IG1vZMOobGVcclxuICAgICAgICAgICAgICAgIG1vZGVsLmNhcmRzLnB1c2gobWFudWFsQ2FyZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRS4gQk9SRFVSRVMgR0xPQkFMRVNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGFibGVCb3JkZXJzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvcmRlck9iaiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXTtcclxuICAgICAgICAgICAgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlcldpZHRoLnZhbHVlID0gYm9yZGVyT2JqW1wiYm9yZGVyV2lkdGhcIl07XHJcbiAgICAgICAgICAgIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJSYWRpdXMudmFsdWUgPSBib3JkZXJPYmpbXCJib3JkZXJSYWRpdXNcIl07XHJcbiAgICAgICAgICAgIGlmIChib3JkZXJPYmpbXCJib3JkZXJDb2xvclwiXSkgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlckNvbG9yLnZhbHVlID0gYm9yZGVyT2JqW1wiYm9yZGVyQ29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICBpZiAoYm9yZGVyT2JqW1wiYm9yZGVyU3R5bGVcIl0pIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJTdHlsZS52YWx1ZSA9IHsgdmFsdWU6IGJvcmRlck9ialtcImJvcmRlclN0eWxlXCJdIGFzIHN0cmluZywgZGlzcGxheU5hbWU6IGJvcmRlck9ialtcImJvcmRlclN0eWxlXCJdIGFzIHN0cmluZyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ09SUkVDVElPTiBNQUpFVVJFOiBVdGlsaXNlciBsZSBzZXJ2aWNlIHBvdXIgY29uc3RydWlyZSBsZSBtb2TDqGxlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbChtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWJsZUNvbnRlbnQodGFyZ2V0VGFibGU6IEhUTUxUYWJsZUVsZW1lbnQsIHRpdGxlOiBzdHJpbmcsIHJvd3M6IFJvd0RhdGFbXSwgY29sSW5kZXg6IG51bWJlciwgY2F0ZWdvcmllczogYW55KSB7XHJcbiAgICAgICAgLy8gW0NvbnRlbnUgaW5jaGFuZ8OpIHBvdXIgbGUgcmVuZHVdXHJcbiAgICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiBhLnNvcnRJbmRleCAtIGIuc29ydEluZGV4KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICBjb25zdCB0ckhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguY29sU3BhbiA9IDI7XHJcbiAgICAgICAgdGguc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGguc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aXRsZVNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgIHRoLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS50b3AgPSBcIjUwJVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC01MCUpXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yc1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDZweFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgZWRpdEJ0bi50aXRsZSA9IFwiUmVub21tZXIgY2V0dGUgY29sb25uZVwiO1xyXG4gICAgICAgIGVkaXRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IH07XHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3V0ID0gKCkgPT4geyBlZGl0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiOyB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmYzY2RcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIycHggNHB4XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uZm9jdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGl0bGVTcGFuKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24/LnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24/LmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKck1wiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVTcGFuLmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChuZXdUaXRsZSAmJiBuZXdUaXRsZSAhPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgW1widGl0cmVcIiArIGNvbEluZGV4XTogbmV3VGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwi4pyP77iPXCI7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGl0bGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNhdmVFZGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinI/vuI9cIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGl0bGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID09PSBcInRydWVcIikgc2F2ZUVkaXQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAodGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHNhdmVFZGl0KCk7IGVsc2UgaGFuZGxlRWRpdChlKTtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sIHRydWUpO1xyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4gICAgICAgIHRySGVhZC5hcHBlbmRDaGlsZCh0aCk7IHRoZWFkLmFwcGVuZENoaWxkKHRySGVhZCk7IHRhcmdldFRhYmxlLmFwcGVuZENoaWxkKHRoZWFkKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3cuaXNIaWRkZW4pIHJldHVybjsgXHJcblxyXG4gICAgICAgICAgICBpZiAocm93Lm1hcmdpblRvcCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyU3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgICAgICB0clNwLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Ub3AgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRyU3Auc3R5bGUuZm9udFNpemUgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkU3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZFNwLmNvbFNwYW4gPSAyOyBcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcm93Lm1hcmdpbkNvbG9yOyBcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUubWFyZ2luID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Ub3AgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwLmFwcGVuZENoaWxkKHRkU3ApOyBcclxuICAgICAgICAgICAgICAgIHRib2R5LmFwcGVuZENoaWxkKHRyU3ApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgdHIuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdHIuc3R5bGUuY3Vyc29yID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ci5vbmRyYWdzdGFydCA9IChlOiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiByb3cubGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZTogcm93Lm9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IHJvdy5jb2x1bW5JbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZGV4OiByb3cuc29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZpcnR1YWw6IHJvdy5pc1ZpcnR1YWxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIEpTT04uc3RyaW5naWZ5KGRyYWdEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHIuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gREVCVUdcclxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRFJBRyBTVEFSVDpcIiwgZHJhZ0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcmFnZW5kID0gKGU6IERyYWdFdmVudCkgPT4geyB0ci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IH07XHJcbiAgICAgICAgICAgIC8vIERFQlVHOiBoaWdobGlnaHQgd2hlbiByb3cgcmVjZWl2ZXMgZHJvcCBldmVudHNcclxuICAgICAgICAgICAgdHIub25kcmFnb3ZlciA9IChlOiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2ZlcikgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICAgICAgdHIuc3R5bGUuYm9yZGVyVG9wID0gXCIycHggc29saWQgIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0ci5vbmRyYWdsZWF2ZSA9IChlOiBEcmFnRXZlbnQpID0+IHsgdHIuc3R5bGUuYm9yZGVyVG9wID0gXCJcIjsgfTtcclxuICAgICAgICAgICAgdHIub25kcm9wID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBERUJVR1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRFJPUCBPTiBST1dcIiwgeyB0YXJnZXQ6IHJvdy5vcmlnaW5hbE5hbWUgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhU3RyID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZE9yaWdpbmFsTmFtZSA9IGRhdGEub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlydHVhbCA9IGRhdGEuaXNWaXJ0dWFsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZE9yaWdpbmFsTmFtZSAhPT0gcm93Lm9yaWdpbmFsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXRSb3dJbmRleCA9IHJvd3MuZmluZEluZGV4KHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJldlNvcnRJbmRleCA9IC0xMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Um93SW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U29ydEluZGV4ID0gcm93c1t0YXJnZXRSb3dJbmRleCAtIDFdLnNvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTb3J0SW5kZXggPSByb3cuc29ydEluZGV4IC0gMjA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NvcnRJbmRleCA9IChwcmV2U29ydEluZGV4ICsgcm93LnNvcnRJbmRleCkgLyAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdXZlYXUgOiBwZXJzaXN0YW5jZSBjZW50cmFsaXPDqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RTdHlsZShudWxsLCB7IGNvbDogY29sSW5kZXgsIHBvczogbmV3U29ydEluZGV4IH0sIGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgKHZpcnR1YWwpIC0+XCIsIHsgb2JqZWN0OiBkcmFnZ2VkT3JpZ2luYWxOYW1lLCBwcm9wczogeyBjb2w6IGNvbEluZGV4LCBwb3M6IG5ld1NvcnRJbmRleCB9IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKS53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgZHJhZ2dlZEluZGV4KS5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1Byb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiAwLCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b21MYWJlbDogXCJcIiwgY3VzdG9tQW1vdW50OiBcIlwiLCBpc0hlYWRlcjogZmFsc2UsIGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZ0xhYmVsOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGl0YWxpY0xhYmVsOiBmYWxzZSwgYm9sZExhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmdBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIGZpbGxBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGJvbGRBbW91bnQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Cb3R0b20gPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luVG9wID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGlkZGVuID0gY3VycmVudERyYWdnZWRSb3cuaXNIaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQ29sb3IgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Db2xvciB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUFtb3VudCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUFtb3VudCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGVhZGVyID0gY3VycmVudERyYWdnZWRSb3cuaXNIZWFkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udFNpemUgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250RmFtaWx5ID0gY3VycmVudERyYWdnZWRSb3cuZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0xhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbExhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXRhbGljTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0Ftb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbEFtb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuYm9sZEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdW1wic3R5bGVMaWduZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4geyBpZiAoa2V5ICE9PSBcImNvbHVtbkluZGV4XCIgJiYga2V5ICE9PSBcIm9yZHJlVHJpXCIpIGV4aXN0aW5nUHJvcHNba2V5XSA9IHN0eWxlW2tleV07IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm9yZHJlVHJpID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENMRUFOIHVuZGVmaW5lZCBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXhpc3RpbmdQcm9wcykuZm9yRWFjaChrID0+IHsgaWYgKGV4aXN0aW5nUHJvcHNba10gPT09IHVuZGVmaW5lZCkgZGVsZXRlIGV4aXN0aW5nUHJvcHNba107IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHIGJlZm9yZSBwZXJzaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgKGNhdGVnb3J5KSAtPiBzZWxlY3RvcjpcIiwgc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgXCJwcm9wczpcIiwgZXhpc3RpbmdQcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm91dmVhdSA6IHBlcnNpc3RhbmNlIGNlbnRyYWxpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdFN0eWxlKHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksIGV4aXN0aW5nUHJvcHMsIFwic3R5bGVMaWduZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVRyBhZnRlciBwZXJzaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgRE9ORSAoY2F0ZWdvcnkpIGZvclwiLCBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkUm93RGF0YSA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Cb3R0b20sIG1hcmdpblRvcDogZHJhZ2dlZFJvd0RhdGEubWFyZ2luVG9wLCBpc0hpZGRlbjogZHJhZ2dlZFJvd0RhdGEuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQ29sb3IsIGN1c3RvbUxhYmVsOiBkcmFnZ2VkUm93RGF0YS5jdXN0b21MYWJlbCwgY3VzdG9tQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5jdXN0b21BbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZHJhZ2dlZFJvd0RhdGEuaXNIZWFkZXIsIGZvbnRTaXplOiBkcmFnZ2VkUm93RGF0YS5mb250U2l6ZSwgZm9udDogZHJhZ2dlZFJvd0RhdGEuZm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmJnTGFiZWwsIGNvbG9yTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmNvbG9yTGFiZWwsIGl0YWxpY0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYm9sZExhYmVsLCBiZ0Ftb3VudDogZHJhZ2dlZFJvd0RhdGEuYmdBbW91bnQsIGNvbG9yQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5jb2xvckFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJvbGRBbW91bnQsIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7IHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbFVzZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLmZvckVhY2gociA9PiB7IGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyb3cuaXNWaXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0ci5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHIuZHJhZ2dhYmxlICYmIGUuZGV0YWlsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJzZWxlY3Rpb25NZW51XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBcImxpZ25lQWN0aXZlXCI6IHJvdy5vcmlnaW5hbE5hbWUgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Rvb2xiYXIocm93LCB0ciwgZS5jbGllbnRYLCBlLmNsaWVudFksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIE1FTlUgQ09OVEVYVFVFTCBQT1dFUiBCSSAoY2xpYyBkcm9pdClcclxuICAgICAgICAgICAgICAgIHRyLm9uY29udGV4dG1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGwnaW5kZXggZGUgbGEgY2F0w6lnb3JpZSBwb3VyIGNyw6llciBsZSBzZWxlY3Rpb25JZFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KCh2OiBhbnkpID0+IHYudG9TdHJpbmcoKSA9PT0gcm93Lm9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0luZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCByb3dJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoZXIgbGUgbWVudSBjb250ZXh0dWVsIFBvd2VyIEJJIG5hdGlmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlci5zaG93Q29udGV4dE1lbnUoc2VsZWN0aW9uSWQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGUuY2xpZW50WVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ci50aXRsZSA9IFwiQ2xpcXVlciBwb3VyIG1vZGlmaWVyIHwgR2xpc3NlciBwb3VyIGTDqXBsYWNlciB8IENsaWMgZHJvaXQgcG91ciBvcHRpb25zXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBNZW51IGNvbnRleHR1ZWwgcG91ciBsZXMgbGlnbmVzIG1hbnVlbGxlcyAoc2FucyBzZWxlY3Rpb25JZClcclxuICAgICAgICAgICAgICAgIHRyLm9uY29udGV4dG1lbnUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBvdXIgbGVzIGxpZ25lcyB2aXJ0dWVsbGVzLCBtZW51IGNvbnRleHR1ZWwgc2ltcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShudWxsLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdHIudGl0bGUgPSBcIkdsaXNzZXIgcG91ciBkw6lwbGFjZXIgfCBDbGljIGRyb2l0IHBvdXIgb3B0aW9uc1wiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZmluYWxBbW91bnQgPSBcIlwiO1xyXG4gICAgICAgICAgICBpZiAocm93LmN1c3RvbUFtb3VudCAmJiByb3cuY3VzdG9tQW1vdW50LnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgZmluYWxBbW91bnQgPSByb3cuY3VzdG9tQW1vdW50O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhd1ZhbCA9IHBhcnNlRmxvYXQocm93LmFtb3VudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJvdy5pc1ZpcnR1YWwgJiYgIXJvdy5pc0hlYWRlciAmJiByb3cuYW1vdW50ICYmICFpc05hTihyYXdWYWwpICYmIHJhd1ZhbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQW1vdW50ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdmci1GUicsIHsgc3R5bGU6ICdkZWNpbWFsJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAwIH0pLmZvcm1hdChyYXdWYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ci5zdHlsZS5mb250RmFtaWx5ID0gcm93LmZvbnQ7IHRyLnN0eWxlLmZvbnRTaXplID0gcm93LmZvbnRTaXplICsgXCJweFwiOyBcclxuICAgICAgICAgICAgY29uc3QgdGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZE5hbWUuaW5uZXJUZXh0ID0gcm93LmxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsQmcgPSAocm93LmlzSGVhZGVyIHx8IHJvdy5pc1ZpcnR1YWwpID8gcm93LmJnTGFiZWwgOiByb3cuYmdMYWJlbDtcclxuICAgICAgICAgICAgdGROYW1lLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNlbGxCZzsgdGROYW1lLnN0eWxlLmNvbG9yID0gcm93LmNvbG9yTGFiZWw7XHJcbiAgICAgICAgICAgIGlmIChyb3cuYm9sZExhYmVsKSB0ZE5hbWUuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICBpZiAocm93Lml0YWxpY0xhYmVsKSB0ZE5hbWUuc3R5bGUuZm9udFN0eWxlID0gXCJpdGFsaWNcIjtcclxuICAgICAgICAgICAgY29uc3QgYm9yZGVyU3R5bGUgPSBgJHtyb3cuYm9yZGVyV2lkdGh9cHggc29saWQgJHtyb3cuYm9yZGVyQ29sb3J9YDtcclxuICAgICAgICAgICAgdGROYW1lLnN0eWxlLmJvcmRlciA9IGJvcmRlclN0eWxlO1xyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIm5vbmVcIjsgXHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGRBbW91bnQuaW5uZXJUZXh0ID0gZmluYWxBbW91bnQ7IFxyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IChyb3cuaXNIZWFkZXIgfHwgcm93LmlzVmlydHVhbCkgPyByb3cuYmdMYWJlbCA6IHJvdy5iZ0Ftb3VudDtcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuY29sb3IgPSByb3cuY29sb3JBbW91bnQ7XHJcbiAgICAgICAgICAgIGlmIChyb3cuYm9sZEFtb3VudCkgdGRBbW91bnQuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5ib3JkZXIgPSBib3JkZXJTdHlsZTtcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuYm9yZGVyTGVmdCA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdy5tYXJnaW5Cb3R0b20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0clNwQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Cb3R0b20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5zdHlsZS5mb250U2l6ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGRTcEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5jb2xTcGFuID0gMjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3cubWFyZ2luQ29sb3I7IFxyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Cb3R0b20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5hcHBlbmRDaGlsZCh0ZFNwQik7IFxyXG4gICAgICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHJTcEIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bab25lVHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgZHJvcFpvbmVUci5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjsgXHJcbiAgICAgICAgY29uc3QgZHJvcFpvbmVUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICBkcm9wWm9uZVRkLmNvbFNwYW4gPSAyO1xyXG4gICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4yc1wiO1xyXG4gICAgICAgIGRyb3Bab25lVGQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGRyb3Bab25lVHIuYXBwZW5kQ2hpbGQoZHJvcFpvbmVUZCk7XHJcblxyXG4gICAgICAgIGRyb3Bab25lVHIub25kcmFnb3ZlciA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkICMwMDdhY2NcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMTIyLCAyMDQsIDAuMSlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bab25lVHIub25kcmFnbGVhdmUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bab25lVHIub25kcm9wID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhU3RyID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRPcmlnaW5hbE5hbWUgPSBkYXRhLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlydHVhbCA9IGRhdGEuaXNWaXJ0dWFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RTb3J0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gMCkgbGFzdFNvcnRJbmRleCA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXS5zb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3U29ydEluZGV4ID0gbGFzdFNvcnRJbmRleCArIDEwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3V2ZWF1IDogcGVyc2lzdGFuY2UgY2VudHJhbGlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdFN0eWxlKG51bGwsIHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfSwgZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCAodmlydHVhbCkgLT5cIiwgeyBvYmplY3Q6IGRyYWdnZWRPcmlnaW5hbE5hbWUsIHByb3BzOiB7IGNvbDogY29sSW5kZXgsIHBvczogbmV3U29ydEluZGV4IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBkcmFnZ2VkSW5kZXgpLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogXCJcIiwgY3VzdG9tQW1vdW50OiBcIlwiLCBpc0hlYWRlcjogZmFsc2UsIGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbExhYmVsOiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBpdGFsaWNMYWJlbDogZmFsc2UsIGJvbGRMYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbEFtb3VudDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgYm9sZEFtb3VudDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkJvdHRvbSA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luVG9wID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pc0hpZGRlbiA9IGN1cnJlbnREcmFnZ2VkUm93LmlzSGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Db2xvciA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkNvbG9yIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21BbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21BbW91bnQgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIZWFkZXIgPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udFNpemUgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udEZhbWlseSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0xhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbExhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLml0YWxpY0xhYmVsID0gY3VycmVudERyYWdnZWRSb3cuaXRhbGljTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0Ftb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckFtb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRBbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XVtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4geyBpZiAoa2V5ICE9PSBcImNvbHVtbkluZGV4XCIgJiYga2V5ICE9PSBcIm9yZHJlVHJpXCIpIGV4aXN0aW5nUHJvcHNba2V5XSA9IHN0eWxlW2tleV07IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5vcmRyZVRyaSA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ0xFQU4gdW5kZWZpbmVkIGtleXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoZXhpc3RpbmdQcm9wcykuZm9yRWFjaChrID0+IHsgaWYgKGV4aXN0aW5nUHJvcHNba10gPT09IHVuZGVmaW5lZCkgZGVsZXRlIGV4aXN0aW5nUHJvcHNba107IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVRyBiZWZvcmUgcGVyc2lzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgKGNhdGVnb3J5KSAtPiBzZWxlY3RvcjpcIiwgc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgXCJwcm9wczpcIiwgZXhpc3RpbmdQcm9wcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdXZlYXUgOiBwZXJzaXN0YW5jZSBjZW50cmFsaXPDqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0U3R5bGUoc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgZXhpc3RpbmdQcm9wcywgXCJzdHlsZUxpZ25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBERUJVRyBhZnRlciBwZXJzaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCBET05FIChjYXRlZ29yeSkgZm9yXCIsIGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkUm93RGF0YSA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRSb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCwgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Cb3R0b20sIG1hcmdpblRvcDogZHJhZ2dlZFJvd0RhdGEubWFyZ2luVG9wLCBpc0hpZGRlbjogZHJhZ2dlZFJvd0RhdGEuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQ29sb3I6IGRyYWdnZWRSb3dEYXRhLm1hcmdpbkNvbG9yLCBjdXN0b21MYWJlbDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tTGFiZWwsIGN1c3RvbUFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBkcmFnZ2VkUm93RGF0YS5pc0hlYWRlciwgZm9udFNpemU6IGRyYWdnZWRSb3dEYXRhLmZvbnRTaXplLCBmb250OiBkcmFnZ2VkUm93RGF0YS5mb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmJnTGFiZWwsIGNvbG9yTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmNvbG9yTGFiZWwsIGl0YWxpY0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmJvbGRMYWJlbCwgYmdBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJnQW1vdW50LCBjb2xvckFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY29sb3JBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZHJhZ2dlZFJvd0RhdGEuYm9sZEFtb3VudCwgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkgeyB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLmZvckVhY2gociA9PiB7IGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2xVc2VkLCB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQoZHJvcFpvbmVUcik7XHJcbiAgICAgICAgLy8gREVCVUc6IGRyb3Agem9uZSBsb2dzIGFscmVhZHkgaGFuZGxlZCBiZWxvd1xyXG5cclxuICAgICAgICB0YXJnZXRUYWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VG9vbGJhcihyb3c6IFJvd0RhdGEsIHRyOiBIVE1MVGFibGVSb3dFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgY2F0ZWdvcmllczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5+iIHNob3dUb29sYmFyIGNhbGxlZCBmb3I6XCIsIHJvdy5vcmlnaW5hbE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIWNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIvCflLQgQ2F0ZWdvcmllcyBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy50b29sYmFyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLnJlbW92ZUNoaWxkKHRoaXMudG9vbGJhci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAgICAgLy8gU3RvcCBwcm9wYWdhdGlvbiBvbiB0aGUgdG9vbGJhciBpdHNlbGZcclxuICAgICAgICB0aGlzLnRvb2xiYXIub25tb3VzZWRvd24gPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIub25jbGljayA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbm5lciBsYSB0b29sYmFyXHJcbiAgICAgICAgY29uc3QgdG9vbGJhcldpZHRoID0gNDAwOyBcclxuICAgICAgICBsZXQgbGVmdCA9IHggLSB0b29sYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMTApIGxlZnQgPSAxMDtcclxuICAgICAgICBpZiAobGVmdCArIHRvb2xiYXJXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSBsZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLSB0b29sYmFyV2lkdGggLSAxMDtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHkgLSA1MDtcclxuICAgICAgICBpZiAodG9wIDwgMTApIHRvcCA9IHkgKyAyMDtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfn6IgSW5kZXggZm91bmQ6XCIsIGluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi8J+UtCBJbmRleCBub3QgZm91bmQgZm9yXCIsIHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uSWRCdWlsZGVyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpO1xyXG4gICAgICAgIHNlbGVjdGlvbklkQnVpbGRlciA9IHNlbGVjdGlvbklkQnVpbGRlci53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gc2VsZWN0aW9uSWRCdWlsZGVyLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIG1ldHRyZSDDoCBqb3VyIHBlbmRpbmdDaGFuZ2VzXHJcbiAgICAgICAgY29uc3QgdXBkYXRlUGVuZGluZyA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmdldChyb3cub3JpZ2luYWxOYW1lKSB8fCB7IHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0geyAuLi5jdXJyZW50LCAuLi5wcm9wcywgdGltZXN0YW1wOiBEYXRlLm5vdygpIH07XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KHJvdy5vcmlnaW5hbE5hbWUsIHVwZGF0ZWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIHLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGUgbGEgbGlnbmVcclxuICAgICAgICBjb25zdCBnZXRDdXJyZW50Um93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHJvdy5vcmlnaW5hbE5hbWUpIHx8IHJvdztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgcG91ciBwZXJzaXN0ZXIgVE9VVEVTIGxlcyBwcm9wcmnDqXTDqXMgKMOpdml0ZSBsZXMgcGVydGVzKVxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3RBbGxQcm9wcyA9IChvdmVycmlkZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gZ2V0Q3VycmVudFJvdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnVsbFByb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY3VycmVudFJvdy5jb2x1bW5JbmRleCxcclxuICAgICAgICAgICAgICAgIG9yZHJlVHJpOiBjdXJyZW50Um93LnNvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogY3VycmVudFJvdy5tYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IGN1cnJlbnRSb3cubWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgaXNIaWRkZW46IGN1cnJlbnRSb3cuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5tYXJnaW5Db2xvciB9IH0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogY3VycmVudFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQW1vdW50OiBjdXJyZW50Um93LmN1c3RvbUFtb3VudCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFkZXI6IGN1cnJlbnRSb3cuaXNIZWFkZXIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogY3VycmVudFJvdy5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGN1cnJlbnRSb3cuZm9udCxcclxuICAgICAgICAgICAgICAgIGJnTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYmdMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuY29sb3JMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBpdGFsaWNMYWJlbDogY3VycmVudFJvdy5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogY3VycmVudFJvdy5ib2xkTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBiZ0Ftb3VudDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5iZ0Ftb3VudCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsQW1vdW50OiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmNvbG9yQW1vdW50IH0gfSxcclxuICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGN1cnJlbnRSb3cuYm9sZEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBjdXJyZW50Um93LmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYm9yZGVyQ29sb3IgfSB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBBcHBsaXF1ZXIgb3ZlcnJpZGVzIGZvdXJuaXNcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3ZlcnJpZGVzIHx8IHt9KS5mb3JFYWNoKGsgPT4geyBmdWxsUHJvcHNba10gPSBvdmVycmlkZXNba107IH0pO1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwic3R5bGVMaWduZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogZnVsbFByb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlUGVuZGluZyhmdWxsUHJvcHMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHBlcnNpc3RQcm9wZXJ0aWVzOlwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gLS0tIEJPVVRPTlMgLS0tXHJcblxyXG4gICAgICAgIC8vIEdSQVMgKEIpXHJcbiAgICAgICAgY29uc3QgYnRuQm9sZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgYkVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcclxuICAgICAgICBiRWxlbS50ZXh0Q29udGVudCA9IFwiQlwiO1xyXG4gICAgICAgIGJ0bkJvbGQuYXBwZW5kQ2hpbGQoYkVsZW0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGJ0bkJvbGQudGl0bGUgPSBcIkdyYXNcIjtcclxuICAgICAgICBpZiAocm93LmJvbGRMYWJlbCkgYnRuQm9sZC5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIGJ0bkJvbGQub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9ICFyb3cuYm9sZExhYmVsO1xyXG4gICAgICAgICAgICBidG5Cb2xkLmNsYXNzTmFtZSA9IG5ld1ZhbCA/IFwiYWN0aXZlXCIgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcm93LmJvbGRMYWJlbCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgcm93LmJvbGRBbW91bnQgPSBuZXdWYWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHdlaWdodCA9IG5ld1ZhbCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgaWYgKHRyLmNlbGxzWzBdKSAodHIuY2VsbHNbMF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmZvbnRXZWlnaHQgPSB3ZWlnaHQ7XHJcbiAgICAgICAgICAgIGlmICh0ci5jZWxsc1sxXSkgKHRyLmNlbGxzWzFdIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5mb250V2VpZ2h0ID0gd2VpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGJvbGRMYWJlbDogbmV3VmFsLCBib2xkQW1vdW50OiBuZXdWYWwgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGJvbGRMYWJlbDogbmV3VmFsLCBib2xkQW1vdW50OiBuZXdWYWwgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoYnRuQm9sZCk7XHJcblxyXG4gICAgICAgIC8vIElUQUxJUVVFIChJKVxyXG4gICAgICAgIGNvbnN0IGJ0bkl0YWxpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgY29uc3QgaUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgICAgICBpRWxlbS50ZXh0Q29udGVudCA9IFwiSVwiO1xyXG4gICAgICAgIGJ0bkl0YWxpYy5hcHBlbmRDaGlsZChpRWxlbSk7XHJcblxyXG4gICAgICAgIGJ0bkl0YWxpYy50aXRsZSA9IFwiSXRhbGlxdWVcIjtcclxuICAgICAgICBpZiAocm93Lml0YWxpY0xhYmVsKSBidG5JdGFsaWMuY2xhc3NOYW1lID0gXCJhY3RpdmVcIjtcclxuICAgICAgICBidG5JdGFsaWMub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1ZhbCA9ICFyb3cuaXRhbGljTGFiZWw7XHJcbiAgICAgICAgICAgIGJ0bkl0YWxpYy5jbGFzc05hbWUgPSBuZXdWYWwgPyBcImFjdGl2ZVwiIDogXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHJvdy5pdGFsaWNMYWJlbCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBuZXdWYWwgPyBcIml0YWxpY1wiIDogXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgaWYgKHRyLmNlbGxzWzBdKSAodHIuY2VsbHNbMF0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmZvbnRTdHlsZSA9IHN0eWxlO1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGl0YWxpY0xhYmVsOiBuZXdWYWwgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGl0YWxpY0xhYmVsOiBuZXdWYWwgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoYnRuSXRhbGljKTtcclxuXHJcbiAgICAgICAgLy8gU0VQQVJBVEVVUlxyXG4gICAgICAgIGNvbnN0IHNlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNlcDEuY2xhc3NOYW1lID0gXCJzZXBhcmF0b3JcIjtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoc2VwMSk7XHJcblxyXG4gICAgICAgIC8vIFRBSUxMRSBQT0xJQ0UgKHPDqWxlY3RldXIpXHJcbiAgICAgICAgY29uc3QgZm9udFNpemVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb250U2l6ZVdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb250LXNpemUtd3JhcHBlclwiO1xyXG4gICAgICAgIGNvbnN0IGxibEZvbnRTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxibEZvbnRTaXplLmlubmVyVGV4dCA9IFwiVGFpbGxlXCI7XHJcbiAgICAgICAgbGJsRm9udFNpemUuc3R5bGUubWFyZ2luUmlnaHQgPSBcIjRweFwiO1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5hcHBlbmRDaGlsZChsYmxGb250U2l6ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEZvbnRTaXplID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICBzZWxlY3RGb250U2l6ZS50aXRsZSA9IFwiVGFpbGxlIGRlIHBvbGljZVwiO1xyXG4gICAgICAgIGZvciAobGV0IHMgPSA4OyBzIDw9IDI0OyBzKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0LnZhbHVlID0gcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBvcHQuaW5uZXJUZXh0ID0gcy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAocm93LmZvbnRTaXplID09PSBzKSBvcHQuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzZWxlY3RGb250U2l6ZS5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxlY3RGb250U2l6ZS5vbmNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBwYXJzZUludChzZWxlY3RGb250U2l6ZS52YWx1ZSwgMTApO1xyXG4gICAgICAgICAgICByb3cuZm9udFNpemUgPSBzO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5mb250U2l6ZSA9IHMgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHVwZGF0ZVBlbmRpbmcoeyBmb250U2l6ZTogcyB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgZm9udFNpemU6IHMgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb250U2l6ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Rm9udFNpemUpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChmb250U2l6ZVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBTRVBBUkFURVVSXHJcbiAgICAgICAgY29uc3Qgc2VwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VwMy5jbGFzc05hbWUgPSBcInNlcGFyYXRvclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChzZXAzKTtcclxuXHJcbiAgICAgICAgLy8gUE9MSUNFIChmb250LWZhbWlseSlcclxuICAgICAgICBjb25zdCBmb250RmFtaWx5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZm9udEZhbWlseVdyYXBwZXIuY2xhc3NOYW1lID0gXCJmb250LWZhbWlseS13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgbGJsRm9udEZhbWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBsYmxGb250RmFtaWx5LmlubmVyVGV4dCA9IFwiUG9saWNlXCI7XHJcbiAgICAgICAgbGJsRm9udEZhbWlseS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNHB4XCI7XHJcbiAgICAgICAgZm9udEZhbWlseVdyYXBwZXIuYXBwZW5kQ2hpbGQobGJsRm9udEZhbWlseSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdEZvbnRGYW1pbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdEZvbnRGYW1pbHkudGl0bGUgPSBcIlBvbGljZVwiO1xyXG4gICAgICAgIGNvbnN0IGZvbnRzID0gW1xyXG4gICAgICAgICAgICB7IG5hbWU6IFwiU2Vnb2UgVUlcIiwgdmFsdWU6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJBcmlhbFwiLCB2YWx1ZTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJDYWxpYnJpXCIsIHZhbHVlOiBcIkNhbGlicmksIHNhbnMtc2VyaWZcIiB9LFxyXG4gICAgICAgICAgICB7IG5hbWU6IFwiVGltZXMgTmV3IFJvbWFuXCIsIHZhbHVlOiBcIidUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJDb3VyaWVyIE5ld1wiLCB2YWx1ZTogXCInQ291cmllciBOZXcnLCBtb25vc3BhY2VcIiB9XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb250cy5mb3JFYWNoKGYgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHQudmFsdWUgPSBmLnZhbHVlO1xyXG4gICAgICAgICAgICBvcHQuaW5uZXJUZXh0ID0gZi5uYW1lO1xyXG4gICAgICAgICAgICBpZiAocm93LmZvbnQgPT09IGYudmFsdWUpIG9wdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGVjdEZvbnRGYW1pbHkuYXBwZW5kQ2hpbGQob3B0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxlY3RGb250RmFtaWx5Lm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgZiA9IHNlbGVjdEZvbnRGYW1pbHkudmFsdWU7XHJcbiAgICAgICAgICAgIHJvdy5mb250ID0gZjtcclxuICAgICAgICAgICAgdHIuc3R5bGUuZm9udEZhbWlseSA9IGY7XHJcbiAgICAgICAgICAgIHVwZGF0ZVBlbmRpbmcoeyBmb250OiBmIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBmb250RmFtaWx5OiBmIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZm9udEZhbWlseVdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZWN0Rm9udEZhbWlseSk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGZvbnRGYW1pbHlXcmFwcGVyKTtcclxuXHJcbiAgICAgICAgLy8gQk9VVE9OIEZFUk1FUlxyXG4gICAgICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBidG5DbG9zZS5jbGFzc05hbWUgPSBcImNsb3NlLWJ0blwiO1xyXG4gICAgICAgIC8vIENPUlJFQ1RJT046IFV0aWxpc2VyIHRleHRDb250ZW50XHJcbiAgICAgICAgYnRuQ2xvc2UudGV4dENvbnRlbnQgPSBcIuKcllwiO1xyXG4gICAgICAgIGJ0bkNsb3NlLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGJ0bkNsb3NlKTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciBtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAnbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnbW9uVGFibGVhdVBlcnNvJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVR1wiXSA9IG1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==