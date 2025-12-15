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
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        // Initialisation du service de formatage
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDdEYsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDOzRCQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBVyxDQUFDO3dCQUNyRSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUM7NEJBQUUsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFXLENBQUM7d0JBQzlFLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQzs0QkFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQVksQ0FBQzt3QkFDbkUsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDOzRCQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBVyxDQUFDO3dCQUNsRSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUM7NEJBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFXLENBQUM7d0JBQ2xFLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQzs0QkFBRSxHQUFHLENBQUMsT0FBTyxHQUFJLEtBQUssQ0FBQyxTQUFTLENBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUMxRSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUM7NEJBQUUsR0FBRyxDQUFDLFVBQVUsR0FBSSxLQUFLLENBQUMsV0FBVyxDQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQzt3QkFDakYsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUzs0QkFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQVksQ0FBQzt3QkFDcEYsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUzs0QkFBRSxHQUFHLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQVksQ0FBQzt3QkFDMUYsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDOzRCQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUksS0FBSyxDQUFDLFVBQVUsQ0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7d0JBQzdFLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQzs0QkFBRSxHQUFHLENBQUMsV0FBVyxHQUFJLEtBQUssQ0FBQyxZQUFZLENBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUNwRixJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxTQUFTOzRCQUFFLEdBQUcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBWSxDQUFDO3dCQUV2RixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTOzRCQUFFLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBVyxDQUFDO3dCQUN6RixJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7NEJBQUUsR0FBRyxDQUFDLFdBQVcsR0FBSSxLQUFLLENBQUMsYUFBYSxDQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztvQkFDMUYsQ0FBQztnQkFDTCxDQUFDO2dCQUVELG1EQUFtRDtnQkFDbkQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO29CQUN4QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDdEQsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsQ0FBQzt3QkFDekMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs0QkFDL0IsSUFBSSxHQUFHLEtBQUssV0FBVztnQ0FBRSxPQUFPOzRCQUNoQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7NEJBQ2xCLElBQUksT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dDQUNuRSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDOzRCQUNyRCxDQUFDO2lDQUFNLENBQUM7Z0NBQ0osS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ3RDLENBQUM7NEJBQ0QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2dDQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQ3hCLFVBQVUsR0FBRyxLQUFLLENBQUM7NEJBQ3ZCLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7d0JBQ0gsSUFBSSxVQUFVOzRCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM3RCxDQUFDO3lCQUFNLENBQUM7d0JBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzdDLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxJQUFJLEdBQUcsQ0FBQyxXQUFXLEdBQUcsa0JBQWtCO29CQUFFLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQy9FLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGlDQUFpQztRQUNqQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzt3QkFDckIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFXLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO3dCQUM3RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUM5RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxTQUFTLENBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7d0JBQzFFLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDM0UsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDdkQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDdEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDbEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDdEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFFM0UsSUFBSSxJQUFJLEdBQVk7NEJBQ2hCLFlBQVksRUFBRSxHQUFHOzRCQUNqQixLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFOzRCQUN0QixXQUFXLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHOzRCQUNoQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsYUFBYTs0QkFDM0UsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUFFOzRCQUNuRCxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsUUFBUSxFQUFFLEVBQUU7NEJBQzVDLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFOzRCQUM5RCxRQUFRLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUU7NEJBQ2hELFdBQVcsRUFBRSxFQUFFOzRCQUNmLFdBQVcsRUFBRSxFQUFFO3lCQUNsQixDQUFDO3dCQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoQyxDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxXQUFXO1FBQ1gsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDO1FBRXRFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztZQUNwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDcEYsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsb0JBQW9CO1FBQ3BCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDMUIsU0FBUyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUM5QyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakUsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQztRQUNsSCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMxQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO1FBQzdDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO1FBQ3pELFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFaEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0MsQ0FBQyxDQUFDO1FBRUYsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQzdELFNBQVMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNqRSxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDO1lBRWxILFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDNUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUMxRSxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ25GLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDN0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1RSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztRQUMvQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN4QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkMsWUFBWSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDL0IsWUFBWSxDQUFDLEtBQUssR0FBRyw4QkFBOEIsQ0FBQztRQUVwRCxZQUFZLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUM1QixZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDakMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUNGLFlBQVksQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFO1lBQzNCLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNuQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDNUMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBQyxDQUFRLEVBQUUsRUFBRTtZQUNqQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUM5QyxNQUFNLFFBQVEsR0FBRyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSxDQUFDO3dCQUNKLFVBQVUsRUFBRSxnQkFBZ0I7d0JBQzVCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFVBQVUsRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRTtxQkFDakQsQ0FBQzthQUNMLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFN0MsSUFBSSxlQUFlLEdBQTZCLElBQUksQ0FBQztRQUNyRCxJQUFJLGdCQUFnQixHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sU0FBUyxHQUFhLEVBQUUsQ0FBQztZQUMvQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDakYsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN2QixlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbkQsZUFBZSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ2hDLGVBQWUsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7Z0JBQ25ELGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQy9FLGVBQWUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztnQkFDNUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO2dCQUNoRCxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7Z0JBQ3hDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFDekMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUN0QyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7Z0JBQ2xELGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFDeEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUNyQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztnQkFDakQsZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMzQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO2dCQUNqRCxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3RDLGVBQWUsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxlQUFlLENBQUMsS0FBSyxHQUFHLHdDQUF3QyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBRXhGLGVBQWUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtvQkFDNUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO29CQUM3QixTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUN4QixPQUFPLEVBQUUsQ0FBQztvQ0FDTixVQUFVLEVBQUUsZ0JBQWdCO29DQUM1QixRQUFRLEVBQUUsSUFBSTtvQ0FDZCxVQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUU7aUNBQzdDLENBQUM7eUJBQ0wsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0wsQ0FBQztRQUVELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsVUFBVSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDM0IsVUFBVSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztRQUN6QyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTFFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEQsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFFL0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUN4QyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUM7UUFDM0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDbEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBRTFCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDakMsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFFOUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFckMsVUFBVSxDQUFDLEtBQUssR0FBRyw0QkFBNEIsQ0FBQztRQUNoRCxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUN0QyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztRQUM5QyxVQUFVLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7UUFDdkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsNEJBQTRCLENBQUM7UUFDMUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ3BDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN2QyxVQUFVLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7UUFDM0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsK0JBQStCLENBQUM7UUFDOUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ25DLFVBQVUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQzFCLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUN4QyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBQ0YsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDekIsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDNUQsU0FBUyxFQUFFLENBQUM7WUFDaEIsQ0FBQztZQUNELE1BQU0sTUFBTSxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUM7WUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLENBQUM7d0JBQ0osVUFBVSxFQUFFLE1BQU07d0JBQ2xCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFVBQVUsRUFBRTs0QkFDUixJQUFJLEVBQUUsaUJBQWlCLEdBQUcsU0FBUzs0QkFDbkMsSUFBSSxFQUFFLElBQUk7NEJBQ1YsR0FBRyxFQUFFLENBQUM7NEJBQ04sR0FBRyxFQUFFLENBQUM7NEJBQ04sUUFBUSxFQUFFLEtBQUs7NEJBQ2YsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFOzRCQUM1QyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7NEJBQ3hDLFNBQVMsRUFBRSxDQUFDOzRCQUNaLFFBQVEsRUFBRSxFQUFFOzRCQUNaLElBQUksRUFBRSxLQUFLOzRCQUNYLE1BQU0sRUFBRSxLQUFLO3lCQUNoQjtxQkFDSixDQUFDO2FBQ0wsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGtCQUFrQjtRQUNyQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFFdEMsNERBQTREO1FBQzVELHFCQUFxQjtRQUNyQiw0REFBNEQ7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztZQUNwRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JELEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7b0JBQ2xCLEtBQXNDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JFLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCw0REFBNEQ7UUFDNUQsb0JBQW9CO1FBQ3BCLDREQUE0RDtRQUM1RCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztZQUNuRixLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEcsQ0FBQztRQUVELDREQUE0RDtRQUM1RCwyQ0FBMkM7UUFDM0MsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRWpHLElBQUksV0FBVyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUM7Z0JBRW5DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7cUJBQ25ELFlBQVksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO3FCQUNyQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUV6Qix3QkFBd0I7Z0JBQ3hCLE1BQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0MsU0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7Z0JBQzlCLHVGQUF1RjtnQkFDdkYsNkVBQTZFO2dCQUM3RSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksQ0FBUyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFM0UsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLFVBQVUsRUFBRSxDQUFDO29CQUNiLHVHQUF1RztvQkFDdkcsQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDckMsTUFBTSxJQUFJLEdBQUksS0FBYSxDQUFDLElBQUksQ0FBQzt3QkFDakMsSUFBSSxDQUFDLElBQUk7NEJBQUUsT0FBTzt3QkFDbEIsUUFBUSxJQUFJLEVBQUUsQ0FBQzs0QkFDWCxLQUFLLGFBQWE7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2dDQUFDLE1BQU07NEJBQ3pFLEtBQUssVUFBVTtnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7Z0NBQUMsTUFBTTs0QkFDcEUsS0FBSyxXQUFXO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQ0FBQyxNQUFNOzRCQUNyRSxLQUFLLGNBQWM7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO2dDQUFDLE1BQU07NEJBQzNFLEtBQUssYUFBYTtnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzRCQUNwRixLQUFLLFVBQVU7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO2dDQUFDLE1BQU07NEJBQ25FLEtBQUssVUFBVTtnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7Z0NBQUMsTUFBTTs0QkFDbkUsS0FBSyxhQUFhO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7Z0NBQUMsTUFBTTs0QkFDL0UsS0FBSyxjQUFjO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7Z0NBQUMsTUFBTTs0QkFDakYsS0FBSyxVQUFVO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQztnQ0FBQyxNQUFNOzRCQUNuRSxLQUFLLFlBQVk7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO2dDQUFDLE1BQU07NEJBQ2pFLEtBQUssU0FBUztnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzRCQUM1RSxLQUFLLFdBQVc7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7Z0NBQUMsTUFBTTs0QkFDakYsS0FBSyxXQUFXO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztnQ0FBQyxNQUFNOzRCQUNyRSxLQUFLLGFBQWE7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2dDQUFDLE1BQU07NEJBQ3pFLEtBQUssVUFBVTtnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzRCQUM5RSxLQUFLLFlBQVk7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0NBQUMsTUFBTTs0QkFDbkYsS0FBSyxZQUFZO2dDQUFHLEtBQWEsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQztnQ0FBQyxNQUFNOzRCQUN2RSxLQUFLLGFBQWE7Z0NBQUcsS0FBYSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDO2dDQUFDLE1BQU07NEJBQ3pFLEtBQUssYUFBYTtnQ0FBRyxLQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQ0FBQyxNQUFNOzRCQUNwRixPQUFPLENBQUMsQ0FBQyxNQUFNO3dCQUNuQixDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNOLENBQUM7WUFDTixDQUFDO1FBQ0wsQ0FBQztRQUVELDREQUE0RDtRQUM1RCxrQ0FBa0M7UUFDbEMsNERBQTREO1FBQzVELElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFL0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFN0MsTUFBTSxVQUFVLEdBQUcsSUFBSSx5REFBa0IsRUFBRSxDQUFDO2dCQUM1QyxVQUFVLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDdEIsVUFBVSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUU3RSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDO29CQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUYsSUFBSSxTQUFTLENBQUMsV0FBVyxDQUFDO29CQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUNwRCxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDMUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hELElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQztvQkFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRXhHLDREQUE0RDtnQkFDNUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsNERBQTREO1FBQzVELHVCQUF1QjtRQUN2Qiw0REFBNEQ7UUFDNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDbEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDeEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRSxLQUFLLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xFLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hILElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLGFBQWEsQ0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFXLEVBQUUsQ0FBQztRQUN4SyxDQUFDO1FBRUQsb0VBQW9FO1FBQ3BFLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxXQUE2QixFQUFFLEtBQWEsRUFBRSxJQUFlLEVBQUUsUUFBZ0IsRUFBRSxVQUFlO1FBQ3ZILG1DQUFtQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBRS9CLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsU0FBUyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDNUIsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztRQUN6QyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDbkMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUUxQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNqQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztRQUMxQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssR0FBRyx3QkFBd0IsQ0FBQztRQUN6QyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUV4QixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5RCxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQVEsRUFBRSxFQUFFO1lBQzVCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFDN0IsU0FBUyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNsQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4QyxTQUFTLEVBQUUsZUFBZSxFQUFFLENBQUM7WUFDN0IsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUM7UUFDbEMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUMsSUFBSSxRQUFRLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO29CQUN4QixLQUFLLEVBQUUsQ0FBQzs0QkFDSixVQUFVLEVBQUUsZ0JBQWdCOzRCQUM1QixRQUFRLEVBQUUsSUFBSTs0QkFDZCxVQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxRQUFRLEVBQUU7eUJBQ2pELENBQUM7aUJBQ0wsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUNELFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1lBQ3BDLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUNoRCxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDM0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUM7UUFFRixTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO2dCQUNoRCxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzNCLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNwQyxJQUFJLFNBQVMsQ0FBQyxlQUFlLEtBQUssTUFBTTtnQkFBRSxRQUFRLEVBQUUsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQzdCLElBQUksU0FBUyxDQUFDLGVBQWUsS0FBSyxNQUFNO2dCQUFFLFFBQVEsRUFBRSxDQUFDOztnQkFBTSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdFLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLEdBQUcsQ0FBQyxRQUFRO2dCQUFFLE9BQU87WUFFekIsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNwQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO2dCQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQzFCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixDQUFDO1lBRUQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFekIsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQVksRUFBRSxFQUFFO2dCQUM5QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNqQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7b0JBQ3RDLE1BQU0sUUFBUSxHQUFHO3dCQUNiLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDaEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO3dCQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7d0JBQzVCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUzt3QkFDeEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO3FCQUMzQixDQUFDO29CQUNGLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9ELEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDekIsUUFBUTtvQkFDUixzQ0FBc0M7b0JBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1lBRUYsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQVksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELGlEQUFpRDtZQUNqRCxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQzdCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLENBQUMsWUFBWTtvQkFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZELEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1lBQzdDLENBQUMsQ0FBQztZQUNGLEVBQUUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3hCLFFBQVE7Z0JBQ1Isc0NBQXNDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDekQsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ2pCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNqQyxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7b0JBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBRWpDLElBQUksbUJBQW1CLEtBQUssR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO3dCQUMzQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2hGLElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUMxQixJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUN2RCxDQUFDOzZCQUFNLENBQUM7NEJBQ0osYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUN2QyxDQUFDO3dCQUNELElBQUksWUFBWSxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRXZELElBQUksU0FBUyxFQUFFLENBQUM7NEJBQ1osTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssbUJBQW1CLENBQUMsQ0FBQzs0QkFDN0YsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO2dDQUNwQixpQkFBaUIsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO2dDQUN6QyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO2dDQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTtvQ0FDekMsV0FBVyxFQUFFLFFBQVE7b0NBQ3JCLFNBQVMsRUFBRSxZQUFZO29DQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQ0FDeEIsQ0FBQyxDQUFDO2dDQUNILG9DQUFvQztnQ0FDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dDQUNuRixRQUFRO2dDQUNSLHNDQUFzQztnQ0FDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0NBQ2xILE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQ0FDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDbEUsQ0FBQztnQ0FDRCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0NBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFHLFVBQVU7b0NBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDL0YsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQ0FDekMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztvQ0FDcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQ0FDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDO29DQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQ0FDNUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQ0FDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzNDLENBQUM7NEJBQ0wsQ0FBQzt3QkFDTCxDQUFDOzZCQUFNLElBQUksVUFBVSxFQUFFLENBQUM7NEJBQ3BCLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLG1CQUFtQixDQUFDLENBQUM7NEJBQzVGLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0NBQ3RCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0NBQ3BILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLG1CQUFtQixDQUFDLENBQUM7Z0NBQzdGLElBQUksYUFBYSxHQUFRO2dDQUNyQiw4RkFBOEY7Z0NBQzlGLDJHQUEyRztnQ0FDM0csb0hBQW9IO2dDQUNwSCxrR0FBa0c7aUNBQ3JHLENBQUM7Z0NBQ0YsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO29DQUNwQixhQUFhLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQztvQ0FDNUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7b0NBQ3RELGFBQWEsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO29DQUNwRCxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7b0NBQ2hGLGFBQWEsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztvQ0FDaEUsYUFBYSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO29DQUNsRSxhQUFhLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztvQ0FDcEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7b0NBQ3BELGFBQWEsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO29DQUNsRCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7b0NBQ3hFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztvQ0FDN0UsYUFBYSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7b0NBQzFELGFBQWEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO29DQUN0RCxhQUFhLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7b0NBQzFFLGFBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztvQ0FDL0UsYUFBYSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7Z0NBQzVELENBQUM7cUNBQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQ0FDaEUsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDN0QsSUFBSSxLQUFLLEVBQUUsQ0FBQzt3Q0FDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxLQUFLLGFBQWEsSUFBSSxHQUFHLEtBQUssVUFBVTs0Q0FBRSxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzdILENBQUM7Z0NBQ0wsQ0FBQztnQ0FDRCxhQUFhLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQ0FDckMsYUFBYSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7Z0NBQ3RDLHVCQUF1QjtnQ0FDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTO29DQUFFLE9BQU8sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQzFHLHVCQUF1QjtnQ0FDdkIsc0NBQXNDO2dDQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0NBQ25HLG9DQUFvQztnQ0FDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDO2dDQUMxRSxzQkFBc0I7Z0NBQ3RCLHNDQUFzQztnQ0FDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2dDQUNoRSxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssbUJBQW1CLENBQUMsQ0FBQztnQ0FDMUYsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQ0FDakIsY0FBYyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7b0NBQ3RDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29DQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTt3Q0FDekMsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWTt3Q0FDOUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3dDQUNqSCxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDLFlBQVk7d0NBQzNILFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTt3Q0FDL0YsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQyxXQUFXO3dDQUMvRyxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVc7d0NBQy9HLFVBQVUsRUFBRSxjQUFjLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3FDQUMvRCxDQUFDLENBQUM7b0NBQ0gsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQUMsQ0FBQztvQ0FDeEcsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO29DQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVO3dDQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQy9GLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0NBQ3pDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7d0NBQ3BDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0NBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQzFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQzt3Q0FDbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0NBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7d0NBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUMzQyxDQUFDO2dDQUNMLENBQUM7NEJBQ0wsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtvQkFDM0IsSUFBSSxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzt3QkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDeEIsS0FBSyxFQUFFLENBQUM7b0NBQ0osVUFBVSxFQUFFLGVBQWU7b0NBQzNCLFFBQVEsRUFBRSxJQUFJO29DQUNkLFVBQVUsRUFBRSxFQUFFLGFBQWEsRUFBRSxHQUFHLENBQUMsWUFBWSxFQUFFO2lDQUNsRCxDQUFDO3lCQUNMLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFFRix3Q0FBd0M7Z0JBQ3hDLEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtvQkFDakMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXBCLDhEQUE4RDtvQkFDOUQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzVGLElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7NkJBQ25ELFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDOzZCQUNsQyxpQkFBaUIsRUFBRSxDQUFDO3dCQUV6Qiw2Q0FBNkM7d0JBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFOzRCQUMvQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87NEJBQ1osQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPO3lCQUNmLENBQUMsQ0FBQztvQkFDUCxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFFRixFQUFFLENBQUMsS0FBSyxHQUFHLHlFQUF5RSxDQUFDO1lBQ3pGLENBQUM7aUJBQU0sQ0FBQztnQkFDSiwrREFBK0Q7Z0JBQy9ELEVBQUUsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtvQkFDakMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXBCLHFEQUFxRDtvQkFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUU7d0JBQ3hDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTzt3QkFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87cUJBQ2YsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxHQUFHLGlEQUFpRCxDQUFDO1lBQ2pFLENBQUM7WUFFRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxHQUFHLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3JELFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ25DLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2xGLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEgsQ0FBQztZQUNMLENBQUM7WUFFRCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDeEUsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDN0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztZQUMzRSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQzNFLElBQUksR0FBRyxDQUFDLFNBQVM7Z0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3BELElBQUksR0FBRyxDQUFDLFdBQVc7Z0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQ3ZELE1BQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVcsWUFBWSxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUNsQyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXZCLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7WUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1lBQ25DLFFBQVEsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDOUYsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUN2QyxJQUFJLEdBQUcsQ0FBQyxVQUFVO2dCQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN2RCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDcEMsUUFBUSxDQUFDLEtBQUss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QUMsT0FBTyxDQUFDLHVEQUF1RCxDQUFDLEdBQUcscURBQXFELENBQUM7QUFDN0ksQ0FBQztBQUNELGlFQUFlLHFEQUFxRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3Zpc3VhbC50cyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUG93ZXJiaSB1dGlscyBjb21wb25lbnRzIGNsYXNzZXMgZm9yIGN1c3RvbSB2aXN1YWwgZm9ybWF0dGluZyBwYW5lIG9iamVjdHNcbiAqXG4gKi9cbmltcG9ydCAqIGFzIEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlciBmcm9tIFwiLi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlsc1wiO1xuY2xhc3MgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIENhcmRHcm91cEVudGl0eSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG59XG4vKiogQ29tcG9zaXRlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSB3aXRoIG11bHRpcGxlIGdyb3VwcyAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNhcmQgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuLyoqIFNpbXBsZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgaW4gYSBzaW5nbGUgZ3JvdXAgKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJkIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBzbGljZURpc3BsYXlOYW1lID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEZXNjcmlwdGlvbiA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHNsaWNlRGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2xpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcilcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgdGhpcyksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgbGV0IGRhdGFWaWV3T2JqZWN0cyA9IChfYSA9IGRhdGFWaWV3ID09PSBudWxsIHx8IGRhdGFWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlldy5tZXRhZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHM7XG4gICAgICAgIGlmIChkYXRhVmlld09iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIGZvcm1hdHRpbmcgcHJvcGVydHkgYW5kIHNldCBpdHMgbmV3IHZhbHVlIGlmIGV4aXN0c1xuICAgICAgICAgICAgKF9iID0gZGVmYXVsdFNldHRpbmdzLmNhcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQpXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/IFtjYXJkXSA6IGNhcmQuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudCB0b3AgbGV2ZWwgdG9nZ2xlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250YWluZXJJdGVtID09PSBudWxsIHx8IGNvbnRhaW5lckl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lckl0ZW0uc2xpY2VzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmb3JtYXR0aW5nIG1vZGVsIGJ5IHBhcnNpbmcgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBvd2VyYmkgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWxcbiAgICAgKi9cbiAgICBidWlsZEZvcm1hdHRpbmdNb2RlbChmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICBsZXQgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmQudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNhcmQub25QcmVQcm9jZXNzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ2FyZCA9IGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkO1xuICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGlzU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVWlkID0gY2FyZEdyb3VwSW5zdGFuY2UubmFtZSArIFwiLWdyb3VwXCI7XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBncm91cCBmb3IgZWFjaCBncm91cFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBncm91cFVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGNhcmRHcm91cEluc3RhbmNlLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBkZWxheVNhdmVTbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLmRlbGF5U2F2ZVNsaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFJlYXNvbjogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWRSZWFzb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5ncm91cHMucHVzaChmb3JtYXR0aW5nR3JvdXApO1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgZm9ybWF0dGluZyBtb2RlbCBhZGRzIGRhdGEgcG9pbnRzIG9yIHRvcCBjYXRlZ29yaWVzIChMaWtlIHdoZW4geW91IG1vZGlmeSBzcGVjaWZpYyB2aXN1YWwgY2F0ZWdvcnkgY29sb3IpLlxuICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNhdGVnb3JpZXMgdXNlIHNhbWUgb2JqZWN0IG5hbWUgYW5kIHByb3BlcnR5IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXMgYW5kIHRoZSBnZW5lcmF0ZWQgdWlkIHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZXNlIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gU29sdXRpb24gPT4gU2F2ZSBzbGljZSBuYW1lcyB0byBtb2RpZnkgZWFjaCBzbGljZSB1aWQgdG8gYmUgdW5pcXVlIGJ5IGFkZGluZyBjb3VudGVyIHZhbHVlIHRvIHRoZSBuZXcgc2xpY2UgdWlkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclVpZCA9IGdyb3VwVWlkICsgXCItY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGVzY3JpcHRpb25LZXkpIDogY29udGFpbmVyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJVaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJZW1OYW1lID0gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA/IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySXRlbVVpZCA9IGNvbnRhaW5lclVpZCArIGNvbnRhaW5lckllbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdTbGljZSA9IHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0aW5nU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2RpZnkgZm9ybWF0dGluZyBzbGljZSB1aWQgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0rKztcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlLnVpZCA9IGAke2Zvcm1hdHRpbmdTbGljZS51aWR9LSR7c2xpY2VOYW1lc1tzbGljZS5uYW1lXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2VzLnB1c2goZm9ybWF0dGluZ1NsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFByb2NlZWRlZCBzbGljZSBuYW1lcyBhcmUgc2F2ZWQgdG8gcHJldmVudCBkdXBsaWNhdGVkIGRlZmF1bHQgZGVzY3JpcHRvcnMgaW4gY2FzZSBvZiB1c2luZyBcbiAgICAgICAgLy8gZm9ybWF0dGluZyBjYXRlZ29yaWVzICYgc2VsZWN0b3JzLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgZGVzY3JpcHRvciBvYmplY3ROYW1lIGFuZCBwcm9wZXJ0eU5hbWVcbiAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZCAmJiBjYXJkLnRvcExldmVsU2xpY2UpXG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLihfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIHNsaWNlTmFtZXMsIGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBzbGljZU5hbWVzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBnZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lLCBzbGljZXMsIHNsaWNlTmFtZXMsIHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmICh0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICBzbGljZU5hbWVzW3RvcExldmVsU2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodG9wTGV2ZWxTbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2xpY2UgJiYgIXNsaWNlTmFtZXNbc2xpY2UubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChzbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMubWFwIiwiaW1wb3J0ICogYXMgZm9ybWF0dGluZ1NldHRpbmdzIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2VcIjtcbmV4cG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBCdWlsZCBhbmQgcmV0dXJuIGZvcm1hdHRpbmcgZGVzY3JpcHRvciBmb3Igc2ltcGxlIHNsaWNlXG4gKlxuICogQHBhcmFtIG9iamVjdE5hbWUgT2JqZWN0IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBzbGljZSBmb3JtYXR0aW5nIHNpbXBsZSBzbGljZVxuICogQHJldHVybnMgc2ltcGxlIHNsaWNlIGZvcm1hdHRpbmcgZGVzY3JpcHRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCBzbGljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgIHByb3BlcnR5TmFtZTogc2xpY2UubmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNsaWNlLnNlbGVjdG9yLFxuICAgICAgICBhbHRDb25zdGFudFZhbHVlU2VsZWN0b3I6IHNsaWNlLmFsdENvbnN0YW50U2VsZWN0b3IsXG4gICAgICAgIGluc3RhbmNlS2luZDogc2xpY2UuaW5zdGFuY2VLaW5kXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHByb3BlcnR5IHZhbHVlIGZyb20gZGF0YXZpZXcgb2JqZWN0cyBpZiBleGlzdHNcbiAqIEVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGZyb20gZm9ybWF0dGluZyBzZXR0aW5ncyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdmFsdWUgZGF0YXZpZXcgb2JqZWN0IHZhbHVlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGZvcm1hdHRpbmcgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZVxuICogQHJldHVybnMgZm9ybWF0dGluZyBwcm9wZXJ0eSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShzbGljZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5zb2xpZC5jb2xvciB9O1xuICAgIH1cbiAgICBpZiAoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGxldCBpdGVtc0FycmF5ID0gc2xpY2UuaXRlbXM7XG4gICAgICAgIHJldHVybiBpdGVtc0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMC4gVElUUkVTIENPTE9OTkVTIChHw6luw6lyYXRpb24gZHluYW1pcXVlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFRpdHJlc0NvbG9ubmVzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidGl0cmVzQ29sb25uZXNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIjAuIFRJVFJFUyBDT0xPTk5FU1wiO1xyXG4gICAgXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidGl0cmVcIiArIGksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJUaXRyZSBDb2wgXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRyZS4uLlwiIC8vIENPUlJFQ1RJT046IFBsYWNlaG9sZGVyIG9ibGlnYXRvaXJlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAxLiBNRU5VIERFIFPDiUxFQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25NZW51U2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwic2VsZWN0aW9uTWVudVwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiMS4gU8OJTEVDVElPTiAoRXhjZWwpXCI7XHJcblxyXG4gICAgbGlnbmVBY3RpdmUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJsaWduZUFjdGl2ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk5vbSBleGFjdCBkZSBsYSBsaWduZSBhY3RpdmVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFeDogQ2hpZmZyZSBkJ2FmZmFpcmVzXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbdGhpcy5saWduZUFjdGl2ZV07XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAyLiBTVFlMRSBERSBMSUdORVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFN0eWxlTGlnbmVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJzdHlsZUxpZ25lXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCIyLiBQRVJTT05OQUxJU0FUSU9OIChFeGNlbClcIjtcclxuICAgIFxyXG4gICAgLy8gQ09SUkVDVElPTjogQWpvdXQgZXhwbGljaXRlIGR1IHNlbGVjdG9yIHBvdXIgw6l2aXRlciBsJ2VycmV1ciBUU1xyXG4gICAgc2VsZWN0b3I6IHBvd2VyYmkuZGF0YS5TZWxlY3RvcjsgXHJcblxyXG4gICAgLy8gUG9zaXRpb25uZW1lbnRcclxuICAgIGNvbHVtbkluZGV4ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiY29sdW1uSW5kZXhcIiwgZGlzcGxheU5hbWU6IFwiTsKwIENvbG9ubmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgb3JkcmVUcmkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJvcmRyZVRyaVwiLCBkaXNwbGF5TmFtZTogXCJQb3NpdGlvblwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTWFyZ2VzXHJcbiAgICBtYXJnaW5Ub3AgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Ub3BcIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgSGF1dFwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBtYXJnaW5Cb3R0b20gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Cb3R0b21cIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgQmFzXCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuICAgIG1hcmdpbkNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Db2xvclwiLCBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIE1hcmdlXCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmlzaWJpbGl0w6kgLyBIZWFkZXJcclxuICAgIGlzSGlkZGVuID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXNIaWRkZW5cIiwgZGlzcGxheU5hbWU6IFwiTUFTUVVFUlwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXNIZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJNb2RlIFRpdHJlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29udGVudVxyXG4gICAgY3VzdG9tTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJjdXN0b21MYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJSZW5vbW1lclwiLCB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJOb3V2ZWF1IG5vbS4uLlwiIC8vIENPUlJFQ1RJT05cclxuICAgIH0pO1xyXG4gICAgY3VzdG9tQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiY3VzdG9tQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIlJlbXBsYWNlciBNb250YW50XCIsIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlZhbGV1ciBvdSB2aWRlLi4uXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUG9saWNlXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIlRhaWxsZVwiLCB2YWx1ZTogMTJcclxuICAgIH0pO1xyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsIGRpc3BsYXlOYW1lOiBcIlBvbGljZVwiLCB2YWx1ZTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCJcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFN0eWxlIExpYmVsbMOpXHJcbiAgICBiZ0xhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiZ0xhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIkZvbmQgTGliZWxsw6lcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuICAgIGZpbGxMYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZmlsbExhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlIExpYmVsbMOpXCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib2xkTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiR3JhcyAoTClcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGl0YWxpY0xhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXRhbGljTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiSXRhbGlxdWUgKEwpXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3R5bGUgUHJpeFxyXG4gICAgYmdBbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJnQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIkZvbmQgUHJpeFwiLCB2YWx1ZTogeyB2YWx1ZTogXCJ0cmFuc3BhcmVudFwiIH1cclxuICAgIH0pO1xyXG4gICAgZmlsbEFtb3VudCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZmlsbEFtb3VudFwiLCBkaXNwbGF5TmFtZTogXCJUZXh0ZSBQcml4XCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib2xkQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYm9sZEFtb3VudFwiLCBkaXNwbGF5TmFtZTogXCJHcmFzIChQKVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvcmR1cmVzIHNww6ljaWZpcXVlc1xyXG4gICAgYm9yZGVyV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJXaWR0aFwiLCBkaXNwbGF5TmFtZTogXCJMYXJnZXVyIEJvcmR1cmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgQm9yZHVyZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCIjZWVlXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5jb2x1bW5JbmRleCwgdGhpcy5vcmRyZVRyaSxcclxuICAgICAgICB0aGlzLmlzSGlkZGVuLCB0aGlzLmlzSGVhZGVyLFxyXG4gICAgICAgIHRoaXMubWFyZ2luVG9wLCB0aGlzLm1hcmdpbkJvdHRvbSwgdGhpcy5tYXJnaW5Db2xvcixcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsLCB0aGlzLmN1c3RvbUFtb3VudCxcclxuICAgICAgICB0aGlzLmZvbnRTaXplLCB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5maWxsTGFiZWwsIHRoaXMuYmdMYWJlbCwgdGhpcy5ib2xkTGFiZWwsIHRoaXMuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgdGhpcy5maWxsQW1vdW50LCB0aGlzLmJnQW1vdW50LCB0aGlzLmJvbGRBbW91bnQsXHJcbiAgICAgICAgdGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvclxyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExJR05FUyBNQU5VRUxMRVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBNYW51YWxMaW5lU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0XCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlXCIsIHZhbHVlOiBcIk5vdXZlbGxlIExpZ25lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTGliZWxsw6kuLi5cIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBjb2wgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJjb2xcIiwgZGlzcGxheU5hbWU6IFwiQ29sb25uZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBwb3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwb3NcIiwgZGlzcGxheU5hbWU6IFwiUG9zaXRpb25cIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgaXNIZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJUaXRyZVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgYmdDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmdDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJGb25kXCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcbiAgICB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJUZXh0ZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCJibGFja1wiIH1cclxuICAgIH0pO1xyXG4gICAgbWFyZ2luVG9wID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWFyZ2luVG9wXCIsIGRpc3BsYXlOYW1lOiBcIk1hcmdlIEhhdXRcIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLCBkaXNwbGF5TmFtZTogXCJUYWlsbGVcIiwgdmFsdWU6IDEyXHJcbiAgICB9KTtcclxuICAgIGJvbGQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkXCIsIGRpc3BsYXlOYW1lOiBcIkdyYXNcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGl0YWxpYyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcIml0YWxpY1wiLCBkaXNwbGF5TmFtZTogXCJJdGFsaXF1ZVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJXaWR0aFwiLCBkaXNwbGF5TmFtZTogXCJMYXJnZXVyIEJvcmR1cmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgQm9yZHVyZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCIjZWVlXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LCB0aGlzLnRleHQsIHRoaXMuY29sLCB0aGlzLnBvcyxcclxuICAgICAgICB0aGlzLmlzSGVhZGVyLCB0aGlzLm1hcmdpblRvcCxcclxuICAgICAgICB0aGlzLnRleHRDb2xvciwgdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsIHRoaXMuYm9sZCwgdGhpcy5pdGFsaWMsXHJcbiAgICAgICAgdGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvclxyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJPUkRVUkVTIFRBQkxFQVUgR0xPQkFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVGFibGVCb3JkZXJzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidGFibGVCb3JkZXJzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCLwn5SyIEJPUkRVUkVTIFRBQkxFQVVcIjtcclxuXHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXJcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIiwgdmFsdWU6IHsgdmFsdWU6IFwicmdiYSgwLDAsMCwwLjI1KVwiIH1cclxuICAgIH0pO1xyXG4gICAgYm9yZGVyU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiUGxlaW5cIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiUGxlaW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRhc2hlZFwiLCBkaXNwbGF5TmFtZTogXCJUaXJldHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRvdHRlZFwiLCBkaXNwbGF5TmFtZTogXCJQb2ludGlsbMOpc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZG91YmxlXCIsIGRpc3BsYXlOYW1lOiBcIkRvdWJsZVwiIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGJvcmRlclJhZGl1cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlclJhZGl1c1wiLCBkaXNwbGF5TmFtZTogXCJBcnJvbmRpXCIsIHZhbHVlOiA4XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlLCB0aGlzLmJvcmRlclJhZGl1c1xyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1PRMOITEUgUFJJTkNJUEFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB7XHJcbiAgICB0aXRyZXNDb2xvbm5lcyA9IG5ldyBUaXRyZXNDb2xvbm5lc1NldHRpbmdzKCk7XHJcbiAgICBzZWxlY3Rpb25NZW51ID0gbmV3IFNlbGVjdGlvbk1lbnVTZXR0aW5ncygpO1xyXG4gICAgc3R5bGVMaWduZSA9IG5ldyBTdHlsZUxpZ25lU2V0dGluZ3MoKTtcclxuICAgIHRhYmxlQm9yZGVycyA9IG5ldyBUYWJsZUJvcmRlcnNTZXR0aW5ncygpO1xyXG4gICAgXHJcbiAgICBjYXJkczogRm9ybWF0dGluZ1NldHRpbmdzQ2FyZFtdID0gW1xyXG4gICAgICAgIHRoaXMudGl0cmVzQ29sb25uZXMsXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NZW51LFxyXG4gICAgICAgIHRoaXMuc3R5bGVMaWduZSxcclxuICAgICAgICB0aGlzLnRhYmxlQm9yZGVyc1xyXG4gICAgXTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJVmlzdWFsSG9zdCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbEhvc3Q7XHJcblxyXG4vLyBJbXBvcnRhdGlvbiBkdSBTZXJ2aWNlIGRlIGZvcm1hdGFnZSAoRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSlcclxuaW1wb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IHsgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwsIE1hbnVhbExpbmVTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gICAgb3JpZ2luYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG4gICAgc29ydEluZGV4OiBudW1iZXI7XHJcbiAgICBcclxuICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wOiBudW1iZXI7XHJcbiAgICBtYXJnaW5Db2xvcjogc3RyaW5nO1xyXG4gICAgaXNIaWRkZW46IGJvb2xlYW47XHJcbiAgICBpc0hlYWRlcjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgaXNWaXJ0dWFsOiBib29sZWFuO1xyXG5cclxuICAgIGZvbnQ6IHN0cmluZzsgZm9udFNpemU6IG51bWJlcjtcclxuICAgIGJnTGFiZWw6IHN0cmluZzsgY29sb3JMYWJlbDogc3RyaW5nOyBib2xkTGFiZWw6IGJvb2xlYW47IGl0YWxpY0xhYmVsOiBib29sZWFuO1xyXG4gICAgYmdBbW91bnQ6IHN0cmluZzsgY29sb3JBbW91bnQ6IHN0cmluZzsgYm9sZEFtb3VudDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgY3VzdG9tQW1vdW50OiBzdHJpbmc7XHJcbiAgICBjdXN0b21MYWJlbD86IHN0cmluZztcclxuICAgIFxyXG4gICAgLy8gQm9yZHVyZXMgY29tcGzDqHRlcyAoNCBjw7R0w6lzKVxyXG4gICAgYm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgaG9zdDogSVZpc3VhbEhvc3Q7XHJcbiAgICBwcml2YXRlIGRpdkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGZsZXhDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGFsbFJvd3NEYXRhOiBSb3dEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcmljYWxEYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTZWxlY3RlZExhYmVsOiBzdHJpbmcgPSBcIlwiOyBcclxuICAgIHByaXZhdGUgY29sdW1uVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtZXRhZGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBwZW5kaW5nQ2hhbmdlczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgbWFudWFsTGluZUtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBcclxuICAgIHByaXZhdGUgYXJlQWN0aW9uQnV0dG9uc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3Rpb25NYW5hZ2VyOiBwb3dlcmJpLmV4dGVuc2liaWxpdHkuSVNlbGVjdGlvbk1hbmFnZXI7XHJcblxyXG4gICAgLy8gQm9yZHVyZXMgZ2xvYmFsZXMgZHUgdGFibGVhdVxyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlcldpZHRoOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlckNvbG9yOiBzdHJpbmcgPSBcInJnYmEoMCwgMCwgMCwgMC4yNSlcIjtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJTdHlsZTogc3RyaW5nID0gXCJzb2xpZFwiO1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlclJhZGl1czogbnVtYmVyID0gODtcclxuXHJcbiAgICAvLyBNb2TDqGxlIGRlIGZvcm1hdGFnZSAoQVBJIDUuMSlcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzOiBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbDtcclxuICAgIC8vIFNlcnZpY2UgZGUgZm9ybWF0YWdlIChOw6ljZXNzYWlyZSBwb3VyIGJ1aWxkRm9ybWF0dGluZ01vZGVsKVxyXG4gICAgcHJpdmF0ZSBmb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlOiBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlO1xyXG5cclxuICAgIC8vIEhlbHBlciBjZW50cmFsaXPDqSBwb3VyIHBlcnNpc3RlciBsZXMgcHJvcHJpw6l0w6lzIGQndW5lIGxpZ25lIChtZXJnZSBzYWZlICsgbG9ncylcclxuICAgIHByaXZhdGUgcGVyc2lzdFN0eWxlKHNlbGVjdG9yOiBhbnksIHByb3BlcnRpZXM6IGFueSwgb2JqZWN0TmFtZTogc3RyaW5nID0gXCJzdHlsZUxpZ25lXCIpIHtcclxuICAgICAgICAvLyBuZXR0b3llciBsZXMgY2zDqXMgdW5kZWZpbmVkXHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcyB8fCB7fSkuZm9yRWFjaChrID0+IHsgaWYgKHByb3BlcnRpZXNba10gPT09IHVuZGVmaW5lZCkgZGVsZXRlIHByb3BlcnRpZXNba107IH0pO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCBTVFlMRSAtPiBvYmplY3Q6XCIsIG9iamVjdE5hbWUsIFwic2VsZWN0b3I6XCIsIHNlbGVjdG9yLCBcInByb3BzOlwiLCBwcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBFUlNJU1QgU1RZTEUgT0sgLT5cIiwgb2JqZWN0TmFtZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQRVJTSVNUIFNUWUxFIEVSUk9SOlwiLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgc2VydmljZSBkZSBmb3JtYXRhZ2VcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpc2F0aW9uIGR1IGdlc3Rpb25uYWlyZSBkZSBzw6lsZWN0aW9uIHBvdXIgbGVzIG1lbnVzIGNvbnRleHR1ZWxzXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbk1hbmFnZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXNhdGlvbiBkdSBnZXN0aW9ubmFpcmUgZGUgc8OpbGVjdGlvbiBwb3VyIGxlcyBtZW51cyBjb250ZXh0dWVsc1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTWFuYWdlciA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25NYW5hZ2VyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmRpdkNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNjcm9sbC13cmFwcGVyXCI7XHJcbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQodGhpcy5kaXZDb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWNjb3VudGluZy1jb250YWluZXJcIjtcclxuICAgICAgICB0aGlzLmRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZsZXhDb250YWluZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5jbGFzc05hbWUgPSBcImZsb2F0aW5nLXRvb2xiYXJcIjtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy50b29sYmFyKTtcclxuICAgICAgICBcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvb2xiYXIuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCIgJiYgXHJcbiAgICAgICAgICAgICAgICAhdGhpcy50b29sYmFyLmNvbnRhaW5zKGUudGFyZ2V0IGFzIE5vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShvcHRpb25zOiBWaXN1YWxVcGRhdGVPcHRpb25zKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGlzZXIgbGUgbW9kw6hsZSBkZSBmb3JtYXRhZ2VcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5ncyA9IG5ldyBWaXN1YWxGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCgpO1xyXG5cclxuICAgICAgICAvLyBOZXR0b3lhZ2Ugc8OpY3VyaXPDqVxyXG4gICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFsbFJvd3NEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5tYW51YWxMaW5lS2V5cyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBkYXRhVmlldyA/IGRhdGFWaWV3Lm1ldGFkYXRhIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpY2FsRGF0YSA9IGRhdGFWaWV3ICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsID8gZGF0YVZpZXcuY2F0ZWdvcmljYWwgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBDaGFyZ2VyIGxlcyBib3JkdXJlcyBnbG9iYWxlcyBkdSB0YWJsZWF1XHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXTtcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyV2lkdGhcIl0gIT09IHVuZGVmaW5lZCkgdGhpcy50YWJsZUJvcmRlcldpZHRoID0gdGJbXCJib3JkZXJXaWR0aFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlckNvbG9yXCJdKSB0aGlzLnRhYmxlQm9yZGVyQ29sb3IgPSAodGJbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJTdHlsZVwiXSkgdGhpcy50YWJsZUJvcmRlclN0eWxlID0gdGJbXCJib3JkZXJTdHlsZVwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlclJhZGl1c1wiXSAhPT0gdW5kZWZpbmVkKSB0aGlzLnRhYmxlQm9yZGVyUmFkaXVzID0gdGJbXCJib3JkZXJSYWRpdXNcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SyIEJPUkRVUkVTIENIQVJHw4lFUzpcIiwge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy50YWJsZUJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50YWJsZUJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICBzdHlsZTogdGhpcy50YWJsZUJvcmRlclN0eWxlLFxyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMudGFibGVCb3JkZXJSYWRpdXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMS4gVElUUkVTIC0gSW5pdGlhbGlzYXRpb24gZHluYW1pcXVlXHJcbiAgICAgICAgdGhpcy5jb2x1bW5UaXRsZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGl0cmVzQ29sb25uZXNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBcInRpdHJlXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gPSB0W2tleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBET05Ow4lFUyBFWENFTFxyXG4gICAgICAgIGxldCBtYXhDb2x1bW5JbmRleFVzZWQgPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3JpY2FsRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEudmFsdWVzID8gdGhpcy5jYXRlZ29yaWNhbERhdGEudmFsdWVzWzBdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXVtcImxpZ25lQWN0aXZlXCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwgJiYgY2F0ZWdvcmllcy52YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCA9IGNhdGVnb3JpZXMudmFsdWVzWzBdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMudmFsdWVzLmZvckVhY2goKGNhdFZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxOYW1lID0gY2F0VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3c6IFJvd0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lOiBvcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlcyA/IHZhbHVlcy52YWx1ZXNbaW5kZXhdPy50b1N0cmluZygpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogMSwgc29ydEluZGV4OiBpbmRleCAqIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiAwLCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGZhbHNlLCBpc1ZpcnR1YWw6IGZhbHNlLCBjdXN0b21BbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBcInRyYW5zcGFyZW50XCIsIGNvbG9yTGFiZWw6IFwiYmxhY2tcIiwgYm9sZExhYmVsOiBmYWxzZSwgaXRhbGljTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBcInRyYW5zcGFyZW50XCIsIGNvbG9yQW1vdW50OiBcImJsYWNrXCIsIGJvbGRBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNlZWVcIlxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5vYmplY3RzICYmIGNhdGVnb3JpZXMub2JqZWN0c1tpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBjYXRlZ29yaWVzLm9iamVjdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3RbXCJzdHlsZUxpZ25lXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gb2JqZWN0W1wic3R5bGVMaWduZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY29sdW1uSW5kZXhcIl0pIHJvdy5jb2x1bW5JbmRleCA9IHN0eWxlW1wiY29sdW1uSW5kZXhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmNvbHVtbkluZGV4IDwgMSkgcm93LmNvbHVtbkluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wib3JkcmVUcmlcIl0gIT09IHVuZGVmaW5lZCkgcm93LnNvcnRJbmRleCA9IHN0eWxlW1wib3JkcmVUcmlcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQm90dG9tXCJdICE9PSB1bmRlZmluZWQpIHJvdy5tYXJnaW5Cb3R0b20gPSBzdHlsZVtcIm1hcmdpbkJvdHRvbVwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm1hcmdpblRvcFwiXSAhPT0gdW5kZWZpbmVkKSByb3cubWFyZ2luVG9wID0gc3R5bGVbXCJtYXJnaW5Ub3BcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpc0hpZGRlblwiXSkgcm93LmlzSGlkZGVuID0gc3R5bGVbXCJpc0hpZGRlblwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJtYXJnaW5Db2xvclwiXSkgcm93Lm1hcmdpbkNvbG9yID0gKHN0eWxlW1wibWFyZ2luQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY3VzdG9tTGFiZWxcIl0pIHJvdy5sYWJlbCA9IHN0eWxlW1wiY3VzdG9tTGFiZWxcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJjdXN0b21BbW91bnRcIl0pIHJvdy5jdXN0b21BbW91bnQgPSBzdHlsZVtcImN1c3RvbUFtb3VudFwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImlzSGVhZGVyXCJdKSByb3cuaXNIZWFkZXIgPSBzdHlsZVtcImlzSGVhZGVyXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZvbnRTaXplXCJdKSByb3cuZm9udFNpemUgPSBzdHlsZVtcImZvbnRTaXplXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZm9udEZhbWlseVwiXSkgcm93LmZvbnQgPSBzdHlsZVtcImZvbnRGYW1pbHlcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJiZ0xhYmVsXCJdKSByb3cuYmdMYWJlbCA9IChzdHlsZVtcImJnTGFiZWxcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZmlsbExhYmVsXCJdKSByb3cuY29sb3JMYWJlbCA9IChzdHlsZVtcImZpbGxMYWJlbFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib2xkTGFiZWxcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvbGRMYWJlbCA9IHN0eWxlW1wiYm9sZExhYmVsXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIml0YWxpY0xhYmVsXCJdICE9PSB1bmRlZmluZWQpIHJvdy5pdGFsaWNMYWJlbCA9IHN0eWxlW1wiaXRhbGljTGFiZWxcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYmdBbW91bnRcIl0pIHJvdy5iZ0Ftb3VudCA9IChzdHlsZVtcImJnQW1vdW50XCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZpbGxBbW91bnRcIl0pIHJvdy5jb2xvckFtb3VudCA9IChzdHlsZVtcImZpbGxBbW91bnRcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9sZEFtb3VudFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuYm9sZEFtb3VudCA9IHN0eWxlW1wiYm9sZEFtb3VudFwiXSBhcyBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9yZGVyV2lkdGhcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvcmRlcldpZHRoID0gc3R5bGVbXCJib3JkZXJXaWR0aFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvcmRlckNvbG9yXCJdKSByb3cuYm9yZGVyQ29sb3IgPSAoc3R5bGVbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQXBwbGlxdWVyIGxlcyBjaGFuZ2VtZW50cyBlbiBhdHRlbnRlIChvcHRpbWlzdGUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nQ2hhbmdlcy5oYXMob3JpZ2luYWxOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmdldChvcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gcGVuZGluZy50aW1lc3RhbXAgPCAzMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxsTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBlbmRpbmcpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwidGltZXN0YW1wXCIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwZW5kaW5nW2tleV0gPT09ICdudW1iZXInICYmIHR5cGVvZiByb3dba2V5XSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IE1hdGguYWJzKHBlbmRpbmdba2V5XSAtIHJvd1trZXldKSA8IDAuMDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gcGVuZGluZ1trZXldID09PSByb3dba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dba2V5XSA9IHBlbmRpbmdba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsTWF0Y2hlZCkgdGhpcy5wZW5kaW5nQ2hhbmdlcy5kZWxldGUob3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLmRlbGV0ZShvcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5jb2x1bW5JbmRleCA+IG1heENvbHVtbkluZGV4VXNlZCkgbWF4Q29sdW1uSW5kZXhVc2VkID0gcm93LmNvbHVtbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gTElHTkVTIE1BTlVFTExFUyBEWU5BTUlRVUVTXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGEub2JqZWN0cykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwibWFudWFsTGluZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFudWFsTGluZUtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInNob3dcIl0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IHNbXCJ0ZXh0XCJdID8gc1tcInRleHRcIl0gYXMgc3RyaW5nIDogXCJOb3V2ZWxsZSBMaWduZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gc1tcImNvbFwiXSA/IHNbXCJjb2xcIl0gYXMgbnVtYmVyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHNbXCJwb3NcIl0gPyBzW1wicG9zXCJdIGFzIG51bWJlciA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0hlYWQgPSBzW1wiaXNIZWFkZXJcIl0gPyBzW1wiaXNIZWFkZXJcIl0gYXMgYm9vbGVhbiA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmcgPSBzW1wiYmdDb2xvclwiXSA/IChzW1wiYmdDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBzW1widGV4dENvbG9yXCJdID8gKHNbXCJ0ZXh0Q29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvciA6IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG10ID0gc1tcIm1hcmdpblRvcFwiXSA/IHNbXCJtYXJnaW5Ub3BcIl0gYXMgbnVtYmVyIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZzID0gc1tcImZvbnRTaXplXCJdID8gc1tcImZvbnRTaXplXCJdIGFzIG51bWJlciA6IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm8gPSBzW1wiYm9sZFwiXSA/IHNbXCJib2xkXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ID0gc1tcIml0YWxpY1wiXSA/IHNbXCJpdGFsaWNcIl0gYXMgYm9vbGVhbiA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYncgPSBzW1wiYm9yZGVyV2lkdGhcIl0gIT09IHVuZGVmaW5lZCA/IHNbXCJib3JkZXJXaWR0aFwiXSBhcyBudW1iZXIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmMgPSBzW1wiYm9yZGVyQ29sb3JcIl0gPyAoc1tcImJvcmRlckNvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3IgOiBcIiNlZWVcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2Um93OiBSb3dEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lOiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdHh0LCBhbW91bnQ6IFwiXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbCwgc29ydEluZGV4OiBwb3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogbXQsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBpc0hlYWQsIGlzVmlydHVhbDogdHJ1ZSwgY3VzdG9tQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOiBmcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IGJnLCBjb2xvckxhYmVsOiBjb2xvciwgYm9sZExhYmVsOiBibywgaXRhbGljTGFiZWw6IGl0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdBbW91bnQ6IGJnLCBjb2xvckFtb3VudDogY29sb3IsIGJvbGRBbW91bnQ6IGJvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGJ3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGJjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEucHVzaCh2Um93KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNC4gUkVORFVcclxuICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbHVtbkluZGV4VXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyV2lkdGggPSBgJHt0aGlzLnRhYmxlQm9yZGVyV2lkdGh9cHhgO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJTdHlsZSA9IHRoaXMudGFibGVCb3JkZXJTdHlsZTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSB0aGlzLnRhYmxlQm9yZGVyQ29sb3I7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IGAke3RoaXMudGFibGVCb3JkZXJSYWRpdXN9cHhgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhID8gdGhpcy5jYXRlZ29yaWNhbERhdGEuY2F0ZWdvcmllc1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBCb3V0b25zIGQnYWN0aW9uc1xyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5jbGFzc05hbWUgPSBcInRvZ2dsZS1hY3Rpb25zLWJ1dHRvblwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIuKXgFwiIDogXCLilrZcIjtcclxuICAgICAgICB0b2dnbGVCdG4udGl0bGUgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJNYXNxdWVyIGxlcyBib3V0b25zIGQnYWN0aW9uXCIgOiBcIkFmZmljaGVyIGxlcyBib3V0b25zIGQnYWN0aW9uXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUubWluV2lkdGggPSBcIjMycHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuaGVpZ2h0ID0gXCIzMnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5jb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYjNkN2ZmXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLm1hcmdpbiA9IFwiNnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJveFNoYWRvdyA9IFwiMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wOClcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnNcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9nZ2xlQnRuLm9ubW91c2VvdmVyID0gKCkgPT4geyBcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiNlNmYyZmZcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEuMSlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5vbm1vdXNlb3V0ID0gKCkgPT4geyBcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2IzZDdmZlwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9nZ2xlQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPSAhdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZTtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnRleHRDb250ZW50ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwi4peAXCIgOiBcIuKWtlwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4udGl0bGUgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJNYXNxdWVyIGxlcyBib3V0b25zIGQnYWN0aW9uXCIgOiBcIkFmZmljaGVyIGxlcyBib3V0b25zIGQnYWN0aW9uXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUNvbHVtbkRpdikge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZ2dsZUJ0bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYWRkQ29sdW1uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LmNsYXNzTmFtZSA9IFwiYWRkLWNvbHVtbi1idXR0b25cIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuZGlzcGxheSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcImZsZXhcIiA6IFwibm9uZVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5taW5XaWR0aCA9IFwiNDBweFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yc1wiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5jb2xvciA9IFwiIzY2NlwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgI2NjY1wiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUucGFkZGluZyA9IFwiMTJweFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYudGV4dENvbnRlbnQgPSBcIuKelVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi50aXRsZSA9IFwiQWpvdXRlciB1bmUgbm91dmVsbGUgY29sb25uZVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZENvbHVtbkRpdi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiM5OTlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5vbm1vdXNlb3V0ID0gKCkgPT4geyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiOyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCIjY2NjXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVBZGRDb2x1bW4gPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCArIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gXCJDT0xPTk5FIFwiICsgbmV3SW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInRpdHJlc0NvbG9ubmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBbXCJ0aXRyZVwiICsgbmV3SW5kZXhdOiBuZXdUaXRsZSB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUFkZENvbHVtbiwgdHJ1ZSk7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDb2x1bW5EaXYpO1xyXG5cclxuICAgICAgICBsZXQgcmVtb3ZlQ29sdW1uRGl2OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGlmIChtYXhDb2x1bW5zVG9TaG93ID4gMSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbXB0eUNvbHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSAmJiAhci5pc0hpZGRlbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sUm93cy5sZW5ndGggPT09IDApIGVtcHR5Q29scy5wdXNoKGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZW1wdHlDb2xzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYudHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuY2xhc3NOYW1lID0gXCJyZW1vdmUtY29sdW1uLWJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUubWluV2lkdGggPSBcIjQwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjdcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMnNcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmNvbG9yID0gXCIjYzAwXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkICNjMDBcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLm1hcmdpbiA9IFwiMTBweFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjEycHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnRleHRDb250ZW50ID0gXCLwn5eR77iPXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYudGl0bGUgPSBgU3VwcHJpbWVyIHRvdXRlcyBsZXMgY29sb25uZXMgdmlkZXMgKCR7ZW1wdHlDb2xzLmpvaW4oXCIsIFwiKX0pYDtcclxuXHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eUNvbHMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInRpdHJlc0NvbG9ubmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBbXCJ0aXRyZVwiICsgY29sXTogdW5kZWZpbmVkIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVDb2x1bW5EaXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhZGRMaW5lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBhZGRMaW5lQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uY2xhc3NOYW1lID0gXCJhZGQtbGluZS1idXR0b25cIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidG5Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBidG5Db250YWluZXIuc3R5bGUuZ2FwID0gXCI2cHhcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS53aWR0aCA9IFwiMjJweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuaGVpZ2h0ID0gXCIyMnB4XCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuY29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcclxuICAgICAgICBidG5JY29uLnRleHRDb250ZW50ID0gXCIrXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidG5UZXh0LnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgYnRuVGV4dC5zdHlsZS5mb250U2l6ZSA9IFwiMTRweFwiO1xyXG4gICAgICAgIGJ0blRleHQuc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCI7XHJcbiAgICAgICAgYnRuVGV4dC50ZXh0Q29udGVudCA9IFwiTGlnbmVcIjtcclxuXHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkljb24pO1xyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5UZXh0KTtcclxuICAgICAgICBhZGRMaW5lQnRuLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGFkZExpbmVCdG4udGl0bGUgPSBcIkFqb3V0ZXIgdW5lIG5vdXZlbGxlIGxpZ25lXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5tYXJnaW4gPSBcIjZweFwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDEycHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjYjNkN2ZmXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE4cHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJveFNoYWRvdyA9IFwiMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wNClcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5mb250RmFtaWx5ID0gXCInU2Vnb2UgVUknLCBBcmlhbCwgc2Fucy1zZXJpZlwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLm9ubW91c2VvdmVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiNlNmYyZmZcIjtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWRkTGluZUJ0bi5vbm1vdXNlb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNiM2Q3ZmZcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZExpbmVCdG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbGV0IG5leHRJbmRleCA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLm1hbnVhbExpbmVLZXlzLmluY2x1ZGVzKFwibWFudWFsTGluZVwiICsgbmV4dEluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dEluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbmV3S2V5ID0gXCJtYW51YWxMaW5lXCIgKyBuZXh0SW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBuZXdLZXksXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk5vdXZlbGxlIExpZ25lIFwiICsgbmV4dEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2w6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0NvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiBcInRyYW5zcGFyZW50XCIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29sb3I6IHsgc29saWQ6IHsgY29sb3I6IFwiYmxhY2tcIiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib2xkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRhbGljOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZExpbmVCdG4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTk9VVkVMTEUgTcOJVEhPREUgT0JMSUdBVE9JUkUgQVBJIDUuMStcclxuICAgICAqIFJlbXBsYWNlIGVudW1lcmF0ZU9iamVjdEluc3RhbmNlcyBwb3VyIGxhIGNlcnRpZmljYXRpb24gUG93ZXIgQklcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZvcm1hdHRpbmdNb2RlbCgpOiBwb3dlcmJpLnZpc3VhbHMuRm9ybWF0dGluZ01vZGVsIHtcclxuICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzOyBcclxuICAgICAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBBLiBUSVRSRVMgQ09MT05ORVNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGl0cmVzQ29sb25uZXNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgdE9iaiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdO1xyXG4gICAgICAgICAgICBtb2RlbC50aXRyZXNDb2xvbm5lcy5zbGljZXMuZm9yRWFjaChzbGljZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodE9ialtzbGljZS5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIChzbGljZSBhcyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KS52YWx1ZSA9IHRPYmpbc2xpY2UubmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQi4gTUVOVSBTw4lMRUNUSU9OXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInNlbGVjdGlvbk1lbnVcIl0pIHtcclxuICAgICAgICAgICAgbW9kZWwuc2VsZWN0aW9uTWVudS5saWduZUFjdGl2ZS52YWx1ZSA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInNlbGVjdGlvbk1lbnVcIl1bXCJsaWduZUFjdGl2ZVwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEMuIFNUWUxFIERFIExJR05FIChMb2dpcXVlIGNvbnRleHR1ZWxsZSlcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWNhbERhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q2hvaXNpID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleENob2lzaSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlQ2FyZCA9IG1vZGVsLnN0eWxlTGlnbmU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBpbmRleENob2lzaSlcclxuICAgICAgICAgICAgICAgICAgICAuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduZXIgbGUgc8OpbGVjdGV1clxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpO1xyXG4gICAgICAgICAgICAgICAgc3R5bGVDYXJkLnNlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgICAgICAvLyBDT1JSRUNUSU9OOiBhc3NpZ25lciBhdXNzaSBsZSBzZWxlY3RvciDDoCBDSEFRVUUgc2xpY2UgcG91ciBxdWUgbGVzIHBlcnNpc3RQcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAvLyBkw6ljbGVuY2jDqXMgZGVwdWlzIGxlIHBhbm5lYXUgZGUgZm9ybWF0IGNpYmxlbnQgYmllbiBsYSBsaWduZSBzw6lsZWN0aW9ubsOpZS5cclxuICAgICAgICAgICAgICAgIChzdHlsZUNhcmQuc2xpY2VzIHx8IFtdKS5mb3JFYWNoKHMgPT4geyAocyBhcyBhbnkpLnNlbGVjdG9yID0gc2VsZWN0b3I7IH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Um93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtcGxpc3NhZ2UgZHluYW1pcXVlIGRlcyBzbGljZXMgcGFyIGxldXIgbmFtZSDigJQgw6l2aXRlIGxlcyBwcm9ibMOobWVzIGRlIHR5cGFnZSAoY29sb3IgcGlja2VycywgZXRjLilcclxuICAgICAgICAgICAgICAgICAgICAoc3R5bGVDYXJkLnNsaWNlcyB8fCBbXSkuZm9yRWFjaChzbGljZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAoc2xpY2UgYXMgYW55KS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY29sdW1uSW5kZXhcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmNvbHVtbkluZGV4OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJvcmRyZVRyaVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuc29ydEluZGV4OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJnaW5Ub3BcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93Lm1hcmdpblRvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFyZ2luQm90dG9tXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5tYXJnaW5Cb3R0b207IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmdpbkNvbG9yXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5tYXJnaW5Db2xvciB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc0hpZGRlblwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuaXNIaWRkZW47IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImlzSGVhZGVyXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5pc0hlYWRlcjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiY3VzdG9tTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmN1c3RvbUxhYmVsIHx8IFwiXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImN1c3RvbUFtb3VudFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvbnRTaXplXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5mb250U2l6ZTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZm9udEZhbWlseVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuZm9udDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmdMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cuYmdMYWJlbCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmNvbG9yTGFiZWwgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9sZExhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5ib2xkTGFiZWw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIml0YWxpY0xhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5pdGFsaWNMYWJlbDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYmdBbW91bnRcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmJnQW1vdW50IH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxBbW91bnRcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmNvbG9yQW1vdW50IH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvbGRBbW91bnRcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmJvbGRBbW91bnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvcmRlcldpZHRoXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5ib3JkZXJXaWR0aDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYm9yZGVyQ29sb3JcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmJvcmRlckNvbG9yIH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEQuIExJR05FUyBNQU5VRUxMRVMgKER5bmFtaXF1ZSlcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGEub2JqZWN0cykuZmlsdGVyKGsgPT4gay5zdGFydHNXaXRoKFwibWFudWFsTGluZVwiKSkuc29ydCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYW51YWxPYmogPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNba2V5XTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFudWFsQ2FyZCA9IG5ldyBNYW51YWxMaW5lU2V0dGluZ3MoKTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQubmFtZSA9IGtleTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuZGlzcGxheU5hbWUgPSBtYW51YWxPYmpbXCJ0ZXh0XCJdID8gU3RyaW5nKG1hbnVhbE9ialtcInRleHRcIl0pIDoga2V5O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLnRleHQudmFsdWUgPSBtYW51YWxPYmpbXCJ0ZXh0XCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5zaG93LnZhbHVlID0gbWFudWFsT2JqW1wic2hvd1wiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuY29sLnZhbHVlID0gbWFudWFsT2JqW1wiY29sXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5wb3MudmFsdWUgPSBtYW51YWxPYmpbXCJwb3NcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmlzSGVhZGVyLnZhbHVlID0gbWFudWFsT2JqW1wiaXNIZWFkZXJcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsT2JqW1wiYmdDb2xvclwiXSkgbWFudWFsQ2FyZC5iZ0NvbG9yLnZhbHVlID0gbWFudWFsT2JqW1wiYmdDb2xvclwiXVtcInNvbGlkXCJdW1wiY29sb3JcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsT2JqW1widGV4dENvbG9yXCJdKSBtYW51YWxDYXJkLnRleHRDb2xvci52YWx1ZSA9IG1hbnVhbE9ialtcInRleHRDb2xvclwiXVtcInNvbGlkXCJdW1wiY29sb3JcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLm1hcmdpblRvcC52YWx1ZSA9IG1hbnVhbE9ialtcIm1hcmdpblRvcFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuZm9udFNpemUudmFsdWUgPSBtYW51YWxPYmpbXCJmb250U2l6ZVwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuYm9sZC52YWx1ZSA9IG1hbnVhbE9ialtcImJvbGRcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLml0YWxpYy52YWx1ZSA9IG1hbnVhbE9ialtcIml0YWxpY1wiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuYm9yZGVyV2lkdGgudmFsdWUgPSBtYW51YWxPYmpbXCJib3JkZXJXaWR0aFwiXTtcclxuICAgICAgICAgICAgICAgIGlmIChtYW51YWxPYmpbXCJib3JkZXJDb2xvclwiXSkgbWFudWFsQ2FyZC5ib3JkZXJDb2xvci52YWx1ZSA9IG1hbnVhbE9ialtcImJvcmRlckNvbG9yXCJdW1wic29saWRcIl1bXCJjb2xvclwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBam91dGVyIGxhIGNhcnRlIG1hbnVlbGxlIMOgIGxhIGxpc3RlIGRlcyBjYXJ0ZXMgZHUgbW9kw6hsZVxyXG4gICAgICAgICAgICAgICAgbW9kZWwuY2FyZHMucHVzaChtYW51YWxDYXJkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBFLiBCT1JEVVJFUyBHTE9CQUxFU1xyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgYm9yZGVyT2JqID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGFibGVCb3JkZXJzXCJdO1xyXG4gICAgICAgICAgICBtb2RlbC50YWJsZUJvcmRlcnMuYm9yZGVyV2lkdGgudmFsdWUgPSBib3JkZXJPYmpbXCJib3JkZXJXaWR0aFwiXTtcclxuICAgICAgICAgICAgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlclJhZGl1cy52YWx1ZSA9IGJvcmRlck9ialtcImJvcmRlclJhZGl1c1wiXTtcclxuICAgICAgICAgICAgaWYgKGJvcmRlck9ialtcImJvcmRlckNvbG9yXCJdKSBtb2RlbC50YWJsZUJvcmRlcnMuYm9yZGVyQ29sb3IudmFsdWUgPSBib3JkZXJPYmpbXCJib3JkZXJDb2xvclwiXVtcInNvbGlkXCJdW1wiY29sb3JcIl07XHJcbiAgICAgICAgICAgIGlmIChib3JkZXJPYmpbXCJib3JkZXJTdHlsZVwiXSkgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlclN0eWxlLnZhbHVlID0geyB2YWx1ZTogYm9yZGVyT2JqW1wiYm9yZGVyU3R5bGVcIl0gYXMgc3RyaW5nLCBkaXNwbGF5TmFtZTogYm9yZGVyT2JqW1wiYm9yZGVyU3R5bGVcIl0gYXMgc3RyaW5nIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDT1JSRUNUSU9OIE1BSkVVUkU6IFV0aWxpc2VyIGxlIHNlcnZpY2UgcG91ciBjb25zdHJ1aXJlIGxlIG1vZMOobGVcclxuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmJ1aWxkRm9ybWF0dGluZ01vZGVsKG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclRhYmxlQ29udGVudCh0YXJnZXRUYWJsZTogSFRNTFRhYmxlRWxlbWVudCwgdGl0bGU6IHN0cmluZywgcm93czogUm93RGF0YVtdLCBjb2xJbmRleDogbnVtYmVyLCBjYXRlZ29yaWVzOiBhbnkpIHtcclxuICAgICAgICAvLyBbQ29udGVudSBpbmNoYW5nw6kgcG91ciBsZSByZW5kdV1cclxuICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IGEuc29ydEluZGV4IC0gYi5zb3J0SW5kZXgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IHRySGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICB0aC5jb2xTcGFuID0gMjtcclxuICAgICAgICB0aC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICB0aC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjMwcHhcIjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aXRsZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICB0aXRsZVNwYW4uc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgICAgICB0aXRsZVNwYW4uc3R5bGUubWluV2lkdGggPSBcIjEwMHB4XCI7XHJcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwi4pyP77iPXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnJpZ2h0ID0gXCI1cHhcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnRvcCA9IFwiNTAlXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTUwJSlcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjJzXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5wYWRkaW5nID0gXCIycHggNnB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICBlZGl0QnRuLnRpdGxlID0gXCJSZW5vbW1lciBjZXR0ZSBjb2xvbm5lXCI7XHJcbiAgICAgICAgZWRpdEJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0QnRuLm9ubW91c2VvdmVyID0gKCkgPT4geyBlZGl0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjsgfTtcclxuICAgICAgICBlZGl0QnRuLm9ubW91c2VvdXQgPSAoKSA9PiB7IGVkaXRCdG4uc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7IH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlRWRpdCA9IChlOiBFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjNjZFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiM3B4XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5mb2N1cygpO1xyXG4gICAgICAgICAgICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyh0aXRsZVNwYW4pO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj8ucmVtb3ZlQWxsUmFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHNlbGVjdGlvbj8uYWRkUmFuZ2UocmFuZ2UpO1xyXG4gICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwi4pyTXCI7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzYXZlRWRpdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSB0aXRsZVNwYW4uaW5uZXJUZXh0LnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKG5ld1RpdGxlICYmIG5ld1RpdGxlICE9PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBbXCJ0aXRyZVwiICsgY29sSW5kZXhdOiBuZXdUaXRsZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinI/vuI9cIjtcclxuICAgICAgICAgICAgZWRpdEJ0bi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aXRsZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZUVkaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uaW5uZXJUZXh0ID0gdGl0bGU7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgICAgICAgICAgZWRpdEJ0bi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aXRsZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSBzYXZlRWRpdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID09PSBcInRydWVcIikgc2F2ZUVkaXQoKTsgZWxzZSBoYW5kbGVFZGl0KGUpO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICAgICAgdHJIZWFkLmFwcGVuZENoaWxkKHRoKTsgdGhlYWQuYXBwZW5kQ2hpbGQodHJIZWFkKTsgdGFyZ2V0VGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG5cclxuICAgICAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvdy5pc0hpZGRlbikgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3cubWFyZ2luVG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJTcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgICAgIHRyU3Auc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpblRvcCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3Auc3R5bGUubGluZUhlaWdodCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5mb250U2l6ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGRTcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkU3AuY29sU3BhbiA9IDI7IFxyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3cubWFyZ2luQ29sb3I7IFxyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpblRvcCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3AuYXBwZW5kQ2hpbGQodGRTcCk7IFxyXG4gICAgICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHJTcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICB0ci5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ3N0YXJ0ID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHJvdy5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lOiByb3cub3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogcm93LmNvbHVtbkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IHJvdy5zb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlydHVhbDogcm93LmlzVmlydHVhbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgSlNPTi5zdHJpbmdpZnkoZHJhZ0RhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ci5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBERUJVR1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEUkFHIFNUQVJUOlwiLCBkcmFnRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ci5vbmRyYWdlbmQgPSAoZTogRHJhZ0V2ZW50KSA9PiB7IHRyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjsgfTtcclxuICAgICAgICAgICAgLy8gREVCVUc6IGhpZ2hsaWdodCB3aGVuIHJvdyByZWNlaXZlcyBkcm9wIGV2ZW50c1xyXG4gICAgICAgICAgICB0ci5vbmRyYWdvdmVyID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSBlLmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gXCJtb3ZlXCI7XHJcbiAgICAgICAgICAgICAgICB0ci5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBzb2xpZCAjMDA3YWNjXCI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ2xlYXZlID0gKGU6IERyYWdFdmVudCkgPT4geyB0ci5zdHlsZS5ib3JkZXJUb3AgPSBcIlwiOyB9O1xyXG4gICAgICAgICAgICB0ci5vbmRyb3AgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdHIuc3R5bGUuYm9yZGVyVG9wID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIC8vIERFQlVHXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJEUk9QIE9OIFJPV1wiLCB7IHRhcmdldDogcm93Lm9yaWdpbmFsTmFtZSB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTdHIgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkT3JpZ2luYWxOYW1lID0gZGF0YS5vcmlnaW5hbE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWaXJ0dWFsID0gZGF0YS5pc1ZpcnR1YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkT3JpZ2luYWxOYW1lICE9PSByb3cub3JpZ2luYWxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFJvd0luZGV4ID0gcm93cy5maW5kSW5kZXgociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gcm93Lm9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2U29ydEluZGV4ID0gLTEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRSb3dJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTb3J0SW5kZXggPSByb3dzW3RhcmdldFJvd0luZGV4IC0gMV0uc29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNvcnRJbmRleCA9IHJvdy5zb3J0SW5kZXggLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U29ydEluZGV4ID0gKHByZXZTb3J0SW5kZXggKyByb3cuc29ydEluZGV4KSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RHJhZ2dlZFJvdyA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm91dmVhdSA6IHBlcnNpc3RhbmNlIGNlbnRyYWxpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdFN0eWxlKG51bGwsIHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfSwgZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCAodmlydHVhbCkgLT5cIiwgeyBvYmplY3Q6IGRyYWdnZWRPcmlnaW5hbE5hbWUsIHByb3BzOiB7IGNvbDogY29sSW5kZXgsIHBvczogbmV3U29ydEluZGV4IH0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2xVc2VkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLmZvckVhY2gociA9PiB7IGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRJbmRleCA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCh2ID0+IHYudG9TdHJpbmcoKSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZEluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBkcmFnZ2VkSW5kZXgpLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nUHJvcHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbUxhYmVsOiBcIlwiLCBjdXN0b21BbW91bnQ6IFwiXCIsIGlzSGVhZGVyOiBmYWxzZSwgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJnTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIGZpbGxMYWJlbDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgaXRhbGljTGFiZWw6IGZhbHNlLCBib2xkTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZ0Ftb3VudDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbEFtb3VudDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgYm9sZEFtb3VudDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkJvdHRvbSA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Ub3AgPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIaWRkZW4gPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Db2xvciA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkNvbG9yIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21MYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUxhYmVsIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIZWFkZXIgPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250U2l6ZSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRGYW1pbHkgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0xhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckxhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pdGFsaWNMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93Lml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0Ftb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmJnQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRBbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcmllcy5vYmplY3RzICYmIGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF1bXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGtleSA9PiB7IGlmIChrZXkgIT09IFwiY29sdW1uSW5kZXhcIiAmJiBrZXkgIT09IFwib3JkcmVUcmlcIikgZXhpc3RpbmdQcm9wc1trZXldID0gc3R5bGVba2V5XTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMub3JkcmVUcmkgPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ0xFQU4gdW5kZWZpbmVkIGtleXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhleGlzdGluZ1Byb3BzKS5mb3JFYWNoKGsgPT4geyBpZiAoZXhpc3RpbmdQcm9wc1trXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgZXhpc3RpbmdQcm9wc1trXTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUcgYmVmb3JlIHBlcnNpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCAoY2F0ZWdvcnkpIC0+IHNlbGVjdG9yOlwiLCBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLCBcInByb3BzOlwiLCBleGlzdGluZ1Byb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3V2ZWF1IDogcGVyc2lzdGFuY2UgY2VudHJhbGlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0U3R5bGUoc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgZXhpc3RpbmdQcm9wcywgXCJzdHlsZUxpZ25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHIGFmdGVyIHBlcnNpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCBET05FIChjYXRlZ29yeSkgZm9yXCIsIGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRSb3dEYXRhID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkUm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCwgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGRyYWdnZWRSb3dEYXRhLm1hcmdpbkJvdHRvbSwgbWFyZ2luVG9wOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Ub3AsIGlzSGlkZGVuOiBkcmFnZ2VkUm93RGF0YS5pc0hpZGRlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkNvbG9yOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Db2xvciwgY3VzdG9tTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUxhYmVsLCBjdXN0b21BbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBkcmFnZ2VkUm93RGF0YS5pc0hlYWRlciwgZm9udFNpemU6IGRyYWdnZWRSb3dEYXRhLmZvbnRTaXplLCBmb250OiBkcmFnZ2VkUm93RGF0YS5mb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYmdMYWJlbCwgY29sb3JMYWJlbDogZHJhZ2dlZFJvd0RhdGEuY29sb3JMYWJlbCwgaXRhbGljTGFiZWw6IGRyYWdnZWRSb3dEYXRhLml0YWxpY0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZExhYmVsOiBkcmFnZ2VkUm93RGF0YS5ib2xkTGFiZWwsIGJnQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5iZ0Ftb3VudCwgY29sb3JBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmNvbG9yQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZHJhZ2dlZFJvd0RhdGEuYm9sZEFtb3VudCwgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHsgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJvdy5pc1ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgIHRyLm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ci5kcmFnZ2FibGUgJiYgZS5kZXRhaWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInNlbGVjdGlvbk1lbnVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFwibGlnbmVBY3RpdmVcIjogcm93Lm9yaWdpbmFsTmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbGJhcihyb3csIHRyLCBlLmNsaWVudFgsIGUuY2xpZW50WSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gTUVOVSBDT05URVhUVUVMIFBPV0VSIEJJIChjbGljIGRyb2l0KVxyXG4gICAgICAgICAgICAgICAgdHIub25jb250ZXh0bWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUsOpY3Vww6lyZXIgbCdpbmRleCBkZSBsYSBjYXTDqWdvcmllIHBvdXIgY3LDqWVyIGxlIHNlbGVjdGlvbklkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93SW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgoKHY6IGFueSkgPT4gdi50b1N0cmluZygpID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm93SW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIHJvd0luZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZmZpY2hlciBsZSBtZW51IGNvbnRleHR1ZWwgUG93ZXIgQkkgbmF0aWZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25NYW5hZ2VyLnNob3dDb250ZXh0TWVudShzZWxlY3Rpb25JZCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogZS5jbGllbnRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRyLnRpdGxlID0gXCJDbGlxdWVyIHBvdXIgbW9kaWZpZXIgfCBHbGlzc2VyIHBvdXIgZMOpcGxhY2VyIHwgQ2xpYyBkcm9pdCBwb3VyIG9wdGlvbnNcIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1lbnUgY29udGV4dHVlbCBwb3VyIGxlcyBsaWduZXMgbWFudWVsbGVzIChzYW5zIHNlbGVjdGlvbklkKVxyXG4gICAgICAgICAgICAgICAgdHIub25jb250ZXh0bWVudSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUG91ciBsZXMgbGlnbmVzIHZpcnR1ZWxsZXMsIG1lbnUgY29udGV4dHVlbCBzaW1wbGVcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1hbmFnZXIuc2hvd0NvbnRleHRNZW51KG51bGwsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeDogZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBlLmNsaWVudFlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0ci50aXRsZSA9IFwiR2xpc3NlciBwb3VyIGTDqXBsYWNlciB8IENsaWMgZHJvaXQgcG91ciBvcHRpb25zXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmaW5hbEFtb3VudCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChyb3cuY3VzdG9tQW1vdW50ICYmIHJvdy5jdXN0b21BbW91bnQudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbEFtb3VudCA9IHJvdy5jdXN0b21BbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF3VmFsID0gcGFyc2VGbG9hdChyb3cuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghcm93LmlzVmlydHVhbCAmJiAhcm93LmlzSGVhZGVyICYmIHJvdy5hbW91bnQgJiYgIWlzTmFOKHJhd1ZhbCkgJiYgcmF3VmFsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbW91bnQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywgeyBzdHlsZTogJ2RlY2ltYWwnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHJhd1ZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRGYW1pbHkgPSByb3cuZm9udDsgdHIuc3R5bGUuZm9udFNpemUgPSByb3cuZm9udFNpemUgKyBcInB4XCI7IFxyXG4gICAgICAgICAgICBjb25zdCB0ZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkTmFtZS5pbm5lclRleHQgPSByb3cubGFiZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCZyA9IChyb3cuaXNIZWFkZXIgfHwgcm93LmlzVmlydHVhbCkgPyByb3cuYmdMYWJlbCA6IHJvdy5iZ0xhYmVsO1xyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbEJnOyB0ZE5hbWUuc3R5bGUuY29sb3IgPSByb3cuY29sb3JMYWJlbDtcclxuICAgICAgICAgICAgaWYgKHJvdy5ib2xkTGFiZWwpIHRkTmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIGlmIChyb3cuaXRhbGljTGFiZWwpIHRkTmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGAke3Jvdy5ib3JkZXJXaWR0aH1weCBzb2xpZCAke3Jvdy5ib3JkZXJDb2xvcn1gO1xyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYm9yZGVyID0gYm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGROYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRkQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5pbm5lclRleHQgPSBmaW5hbEFtb3VudDsgXHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKHJvdy5pc0hlYWRlciB8fCByb3cuaXNWaXJ0dWFsKSA/IHJvdy5iZ0xhYmVsIDogcm93LmJnQW1vdW50O1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5jb2xvciA9IHJvdy5jb2xvckFtb3VudDtcclxuICAgICAgICAgICAgaWYgKHJvdy5ib2xkQW1vdW50KSB0ZEFtb3VudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmJvcmRlciA9IGJvcmRlclN0eWxlO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZEFtb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG4gICAgICAgICAgICBpZiAocm93Lm1hcmdpbkJvdHRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyU3BCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJTcEIuc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpbkJvdHRvbSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmZvbnRTaXplID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZFNwQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkU3BCLmNvbFNwYW4gPSAyOyBcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvdy5tYXJnaW5Db2xvcjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpbkJvdHRvbSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLmFwcGVuZENoaWxkKHRkU3BCKTsgXHJcbiAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0clNwQik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcFpvbmVUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBkcm9wWm9uZVRyLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyBcclxuICAgICAgICBjb25zdCBkcm9wWm9uZVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGRyb3Bab25lVGQuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzXCI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZHJvcFpvbmVUci5hcHBlbmRDaGlsZChkcm9wWm9uZVRkKTtcclxuXHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdvdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMjIsIDIwNCwgMC4xKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdsZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTdHIgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZE9yaWdpbmFsTmFtZSA9IGRhdGEub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWaXJ0dWFsID0gZGF0YS5pc1ZpcnR1YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFNvcnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiAwKSBsYXN0U29ydEluZGV4ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdLnNvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTb3J0SW5kZXggPSBsYXN0U29ydEluZGV4ICsgMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdXZlYXUgOiBwZXJzaXN0YW5jZSBjZW50cmFsaXPDqWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0U3R5bGUobnVsbCwgeyBjb2w6IGNvbEluZGV4LCBwb3M6IG5ld1NvcnRJbmRleCB9LCBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gREVCVUdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUICh2aXJ0dWFsKSAtPlwiLCB7IG9iamVjdDogZHJhZ2dlZE9yaWdpbmFsTmFtZSwgcHJvcHM6IHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2xVc2VkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2xVc2VkLCB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRJbmRleCA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCh2ID0+IHYudG9TdHJpbmcoKSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKCkud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGRyYWdnZWRJbmRleCkuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1Byb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogMCwgaXNIaWRkZW46IGZhbHNlLCBtYXJnaW5Db2xvcjoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiBcIlwiLCBjdXN0b21BbW91bnQ6IFwiXCIsIGlzSGVhZGVyOiBmYWxzZSwgZm9udFNpemU6IDEyLCBmb250RmFtaWx5OiBcIidTZWdvZSBVSScsIHNhbnMtc2VyaWZcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGl0YWxpY0xhYmVsOiBmYWxzZSwgYm9sZExhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsQW1vdW50OiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBib2xkQW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQm90dG9tID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Ub3AgPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGlkZGVuID0gY3VycmVudERyYWdnZWRSb3cuaXNIaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkNvbG9yID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cubWFyZ2luQ29sb3IgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21MYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUxhYmVsIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUFtb3VudCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUFtb3VudCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pc0hlYWRlciA9IGN1cnJlbnREcmFnZ2VkUm93LmlzSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250U2l6ZSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250RmFtaWx5ID0gY3VycmVudERyYWdnZWRSb3cuZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmJnTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckxhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXRhbGljTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYm9sZExhYmVsID0gY3VycmVudERyYWdnZWRSb3cuYm9sZExhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0Ftb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmJnQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbEFtb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYm9sZEFtb3VudCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcmllcy5vYmplY3RzICYmIGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdW1wic3R5bGVMaWduZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGtleSA9PiB7IGlmIChrZXkgIT09IFwiY29sdW1uSW5kZXhcIiAmJiBrZXkgIT09IFwib3JkcmVUcmlcIikgZXhpc3RpbmdQcm9wc1trZXldID0gc3R5bGVba2V5XTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm9yZHJlVHJpID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDTEVBTiB1bmRlZmluZWQga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhleGlzdGluZ1Byb3BzKS5mb3JFYWNoKGsgPT4geyBpZiAoZXhpc3RpbmdQcm9wc1trXSA9PT0gdW5kZWZpbmVkKSBkZWxldGUgZXhpc3RpbmdQcm9wc1trXTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHIGJlZm9yZSBwZXJzaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUEVSU0lTVCAoY2F0ZWdvcnkpIC0+IHNlbGVjdG9yOlwiLCBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLCBcInByb3BzOlwiLCBleGlzdGluZ1Byb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm91dmVhdSA6IHBlcnNpc3RhbmNlIGNlbnRyYWxpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNpc3RTdHlsZShzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLCBleGlzdGluZ1Byb3BzLCBcInN0eWxlTGlnbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERFQlVHIGFmdGVyIHBlcnNpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQRVJTSVNUIERPTkUgKGNhdGVnb3J5KSBmb3JcIiwgZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRSb3dEYXRhID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZHJhZ2dlZFJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRSb3dEYXRhLmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LCBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGRyYWdnZWRSb3dEYXRhLm1hcmdpbkJvdHRvbSwgbWFyZ2luVG9wOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Ub3AsIGlzSGlkZGVuOiBkcmFnZ2VkUm93RGF0YS5pc0hpZGRlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQ29sb3IsIGN1c3RvbUxhYmVsOiBkcmFnZ2VkUm93RGF0YS5jdXN0b21MYWJlbCwgY3VzdG9tQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5jdXN0b21BbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGRyYWdnZWRSb3dEYXRhLmlzSGVhZGVyLCBmb250U2l6ZTogZHJhZ2dlZFJvd0RhdGEuZm9udFNpemUsIGZvbnQ6IGRyYWdnZWRSb3dEYXRhLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYmdMYWJlbCwgY29sb3JMYWJlbDogZHJhZ2dlZFJvd0RhdGEuY29sb3JMYWJlbCwgaXRhbGljTGFiZWw6IGRyYWdnZWRSb3dEYXRhLml0YWxpY0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYm9sZExhYmVsLCBiZ0Ftb3VudDogZHJhZ2dlZFJvd0RhdGEuYmdBbW91bnQsIGNvbG9yQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5jb2xvckFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5ib2xkQW1vdW50LCB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7IHRoaXMuZmxleENvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCk7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2xVc2VkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZChkcm9wWm9uZVRyKTtcclxuICAgICAgICAvLyBERUJVRzogZHJvcCB6b25lIGxvZ3MgYWxyZWFkeSBoYW5kbGVkIGJlbG93XHJcblxyXG4gICAgICAgIHRhcmdldFRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUb29sYmFyKHJvdzogUm93RGF0YSwgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjYXRlZ29yaWVzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfn6Igc2hvd1Rvb2xiYXIgY2FsbGVkIGZvcjpcIiwgcm93Lm9yaWdpbmFsTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi8J+UtCBDYXRlZ29yaWVzIGlzIG51bGxcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLnRvb2xiYXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvb2xiYXIucmVtb3ZlQ2hpbGQodGhpcy50b29sYmFyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuICAgICAgICAvLyBTdG9wIHByb3BhZ2F0aW9uIG9uIHRoZSB0b29sYmFyIGl0c2VsZlxyXG4gICAgICAgIHRoaXMudG9vbGJhci5vbm1vdXNlZG93biA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5vbmNsaWNrID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9ubmVyIGxhIHRvb2xiYXJcclxuICAgICAgICBjb25zdCB0b29sYmFyV2lkdGggPSA0MDA7IFxyXG4gICAgICAgIGxldCBsZWZ0ID0geCAtIHRvb2xiYXJXaWR0aCAvIDI7XHJcbiAgICAgICAgaWYgKGxlZnQgPCAxMCkgbGVmdCA9IDEwO1xyXG4gICAgICAgIGlmIChsZWZ0ICsgdG9vbGJhcldpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIGxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHRvb2xiYXJXaWR0aCAtIDEwO1xyXG5cclxuICAgICAgICBsZXQgdG9wID0geSAtIDUwO1xyXG4gICAgICAgIGlmICh0b3AgPCAxMCkgdG9wID0geSArIDIwO1xyXG5cclxuICAgICAgICB0aGlzLnRvb2xiYXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLnRvcCA9IHRvcCArIFwicHhcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+foiBJbmRleCBmb3VuZDpcIiwgaW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLwn5S0IEluZGV4IG5vdCBmb3VuZCBmb3JcIiwgcm93Lm9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZWxlY3Rpb25JZEJ1aWxkZXIgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKCk7XHJcbiAgICAgICAgc2VsZWN0aW9uSWRCdWlsZGVyID0gc2VsZWN0aW9uSWRCdWlsZGVyLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBpbmRleCk7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSBzZWxlY3Rpb25JZEJ1aWxkZXIuY3JlYXRlU2VsZWN0aW9uSWQoKTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHBvdXIgbWV0dHJlIMOgIGpvdXIgcGVuZGluZ0NoYW5nZXNcclxuICAgICAgICBjb25zdCB1cGRhdGVQZW5kaW5nID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMucGVuZGluZ0NoYW5nZXMuZ2V0KHJvdy5vcmlnaW5hbE5hbWUpIHx8IHsgdGltZXN0YW1wOiBEYXRlLm5vdygpIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWQgPSB7IC4uLmN1cnJlbnQsIC4uLnByb3BzLCB0aW1lc3RhbXA6IERhdGUubm93KCkgfTtcclxuICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQocm93Lm9yaWdpbmFsTmFtZSwgdXBkYXRlZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gSGVscGVyIHBvdXIgcsOpY3Vww6lyZXIgbGVzIGRvbm7DqWVzIGFjdHVlbGxlcyBkZSBsYSBsaWduZVxyXG4gICAgICAgIGNvbnN0IGdldEN1cnJlbnRSb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gcm93Lm9yaWdpbmFsTmFtZSkgfHwgcm93O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIHBlcnNpc3RlciBUT1VURVMgbGVzIHByb3ByacOpdMOpcyAow6l2aXRlIGxlcyBwZXJ0ZXMpXHJcbiAgICAgICAgY29uc3QgcGVyc2lzdEFsbFByb3BzID0gKG92ZXJyaWRlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSb3cgPSBnZXRDdXJyZW50Um93KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmdWxsUHJvcHM6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjdXJyZW50Um93LmNvbHVtbkluZGV4LFxyXG4gICAgICAgICAgICAgICAgb3JkcmVUcmk6IGN1cnJlbnRSb3cuc29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBjdXJyZW50Um93Lm1hcmdpbkJvdHRvbSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogY3VycmVudFJvdy5tYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICBpc0hpZGRlbjogY3VycmVudFJvdy5pc0hpZGRlbixcclxuICAgICAgICAgICAgICAgIG1hcmdpbkNvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93Lm1hcmdpbkNvbG9yIH0gfSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiBjdXJyZW50Um93LmN1c3RvbUxhYmVsIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21BbW91bnQ6IGN1cnJlbnRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpc0hlYWRlcjogY3VycmVudFJvdy5pc0hlYWRlcixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjdXJyZW50Um93LmZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogY3VycmVudFJvdy5mb250LFxyXG4gICAgICAgICAgICAgICAgYmdMYWJlbDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5iZ0xhYmVsIH0gfSxcclxuICAgICAgICAgICAgICAgIGZpbGxMYWJlbDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5jb2xvckxhYmVsIH0gfSxcclxuICAgICAgICAgICAgICAgIGl0YWxpY0xhYmVsOiBjdXJyZW50Um93Lml0YWxpY0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgYm9sZExhYmVsOiBjdXJyZW50Um93LmJvbGRMYWJlbCxcclxuICAgICAgICAgICAgICAgIGJnQW1vdW50OiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmJnQW1vdW50IH0gfSxcclxuICAgICAgICAgICAgICAgIGZpbGxBbW91bnQ6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuY29sb3JBbW91bnQgfSB9LFxyXG4gICAgICAgICAgICAgICAgYm9sZEFtb3VudDogY3VycmVudFJvdy5ib2xkQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IGN1cnJlbnRSb3cuYm9yZGVyV2lkdGgsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5ib3JkZXJDb2xvciB9IH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGxpcXVlciBvdmVycmlkZXMgZm91cm5pc1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMgfHwge30pLmZvckVhY2goayA9PiB7IGZ1bGxQcm9wc1trXSA9IG92ZXJyaWRlc1trXTsgfSk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJzdHlsZUxpZ25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBmdWxsUHJvcHNcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVQZW5kaW5nKGZ1bGxQcm9wcyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgcGVyc2lzdFByb3BlcnRpZXM6XCIsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAtLS0gQk9VVE9OUyAtLS1cclxuXHJcbiAgICAgICAgLy8gR1JBUyAoQilcclxuICAgICAgICBjb25zdCBidG5Cb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBiRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xyXG4gICAgICAgIGJFbGVtLnRleHRDb250ZW50ID0gXCJCXCI7XHJcbiAgICAgICAgYnRuQm9sZC5hcHBlbmRDaGlsZChiRWxlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQm9sZC50aXRsZSA9IFwiR3Jhc1wiO1xyXG4gICAgICAgIGlmIChyb3cuYm9sZExhYmVsKSBidG5Cb2xkLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgYnRuQm9sZC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgIGJ0bkJvbGQuY2xhc3NOYW1lID0gbmV3VmFsID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICByb3cuYm9sZExhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICByb3cuYm9sZEFtb3VudCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gbmV3VmFsID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFdlaWdodCA9IHdlaWdodDtcclxuICAgICAgICAgICAgaWYgKHRyLmNlbGxzWzFdKSAodHIuY2VsbHNbMV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmZvbnRXZWlnaHQgPSB3ZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5Cb2xkKTtcclxuXHJcbiAgICAgICAgLy8gSVRBTElRVUUgKEkpXHJcbiAgICAgICAgY29uc3QgYnRuSXRhbGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGlFbGVtLnRleHRDb250ZW50ID0gXCJJXCI7XHJcbiAgICAgICAgYnRuSXRhbGljLmFwcGVuZENoaWxkKGlFbGVtKTtcclxuXHJcbiAgICAgICAgYnRuSXRhbGljLnRpdGxlID0gXCJJdGFsaXF1ZVwiO1xyXG4gICAgICAgIGlmIChyb3cuaXRhbGljTGFiZWwpIGJ0bkl0YWxpYy5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIGJ0bkl0YWxpYy5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgYnRuSXRhbGljLmNsYXNzTmFtZSA9IG5ld1ZhbCA/IFwiYWN0aXZlXCIgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcm93Lml0YWxpY0xhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5ld1ZhbCA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5JdGFsaWMpO1xyXG5cclxuICAgICAgICAvLyBTRVBBUkFURVVSXHJcbiAgICAgICAgY29uc3Qgc2VwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VwMS5jbGFzc05hbWUgPSBcInNlcGFyYXRvclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChzZXAxKTtcclxuXHJcbiAgICAgICAgLy8gVEFJTExFIFBPTElDRSAoc8OpbGVjdGV1cilcclxuICAgICAgICBjb25zdCBmb250U2l6ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtc2l6ZS13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgbGJsRm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGJsRm9udFNpemUuaW5uZXJUZXh0ID0gXCJUYWlsbGVcIjtcclxuICAgICAgICBsYmxGb250U2l6ZS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNHB4XCI7XHJcbiAgICAgICAgZm9udFNpemVXcmFwcGVyLmFwcGVuZENoaWxkKGxibEZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLnRpdGxlID0gXCJUYWlsbGUgZGUgcG9saWNlXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDg7IHMgPD0gMjQ7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHQudmFsdWUgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udFNpemUgPT09IHMpIG9wdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGVjdEZvbnRTaXplLmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHBhcnNlSW50KHNlbGVjdEZvbnRTaXplLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIHJvdy5mb250U2l6ZSA9IHM7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRTaXplID0gcyArIFwicHhcIjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnRTaXplOiBzIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBmb250U2l6ZTogcyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250U2l6ZSk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGZvbnRTaXplV3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIFNFUEFSQVRFVVJcclxuICAgICAgICBjb25zdCBzZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZXAzLmNsYXNzTmFtZSA9IFwic2VwYXJhdG9yXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKHNlcDMpO1xyXG5cclxuICAgICAgICAvLyBQT0xJQ0UgKGZvbnQtZmFtaWx5KVxyXG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtZmFtaWx5LXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBsYmxGb250RmFtaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxibEZvbnRGYW1pbHkuaW5uZXJUZXh0ID0gXCJQb2xpY2VcIjtcclxuICAgICAgICBsYmxGb250RmFtaWx5LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI0cHhcIjtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChsYmxGb250RmFtaWx5KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udEZhbWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0Rm9udEZhbWlseS50aXRsZSA9IFwiUG9saWNlXCI7XHJcbiAgICAgICAgY29uc3QgZm9udHMgPSBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJTZWdvZSBVSVwiLCB2YWx1ZTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkFyaWFsXCIsIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNhbGlicmlcIiwgdmFsdWU6IFwiQ2FsaWJyaSwgc2Fucy1zZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgdmFsdWU6IFwiJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvdXJpZXIgTmV3XCIsIHZhbHVlOiBcIidDb3VyaWVyIE5ldycsIG1vbm9zcGFjZVwiIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGYudmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBmLm5hbWU7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udCA9PT0gZi52YWx1ZSkgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VsZWN0Rm9udEZhbWlseS5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdEZvbnRGYW1pbHkub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBmID0gc2VsZWN0Rm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICAgICAgcm93LmZvbnQgPSBmO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5mb250RmFtaWx5ID0gZjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnQ6IGYgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGZvbnRGYW1pbHk6IGYgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250RmFtaWx5KTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoZm9udEZhbWlseVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBCT1VUT04gRkVSTUVSXHJcbiAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bkNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnRuXCI7XHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogVXRpbGlzZXIgdGV4dENvbnRlbnRcclxuICAgICAgICBidG5DbG9zZS50ZXh0Q29udGVudCA9IFwi4pyWXCI7XHJcbiAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBWaXN1YWwgfSBmcm9tIFwiLi4vLi4vc3JjL3Zpc3VhbFwiO1xuaW1wb3J0IHBvd2VyYmlWaXN1YWxzQXBpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XG5pbXBvcnQgSVZpc3VhbFBsdWdpbiA9IHBvd2VyYmlWaXN1YWxzQXBpLnZpc3VhbHMucGx1Z2lucy5JVmlzdWFsUGx1Z2luO1xuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5EaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnM7XG52YXIgcG93ZXJiaUtleTogYW55ID0gXCJwb3dlcmJpXCI7XG52YXIgcG93ZXJiaTogYW55ID0gd2luZG93W3Bvd2VyYmlLZXldO1xudmFyIG1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdtb25UYWJsZWF1UGVyc28nLFxuICAgIGNsYXNzOiAnVmlzdWFsJyxcbiAgICBhcGlWZXJzaW9uOiAnNS4zLjAnLFxuICAgIGNyZWF0ZTogKG9wdGlvbnM/OiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKFZpc3VhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWaXN1YWwob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ1Zpc3VhbCBpbnN0YW5jZSBub3QgZm91bmQnO1xuICAgIH0sXG4gICAgY3JlYXRlTW9kYWxEaWFsb2c6IChkaWFsb2dJZDogc3RyaW5nLCBvcHRpb25zOiBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMsIGluaXRpYWxTdGF0ZTogb2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZ2lzdHJ5ID0gKDxhbnk+Z2xvYmFsVGhpcykuZGlhbG9nUmVnaXN0cnk7XG4gICAgICAgIGlmIChkaWFsb2dJZCBpbiBkaWFsb2dSZWdpc3RyeSkge1xuICAgICAgICAgICAgbmV3IGRpYWxvZ1JlZ2lzdHJ5W2RpYWxvZ0lkXShvcHRpb25zLCBpbml0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjdXN0b206IHRydWVcbn07XG5pZiAodHlwZW9mIHBvd2VyYmkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBwb3dlcmJpLnZpc3VhbHMgPSBwb3dlcmJpLnZpc3VhbHMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgPSBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2luc1tcIm1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHXCJdID0gbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCBtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRzsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9