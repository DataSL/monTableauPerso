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
    // Bordures globales du tableau
    tableBorderWidth = 1;
    tableBorderColor = "rgba(0, 0, 0, 0.25)";
    tableBorderStyle = "solid";
    tableBorderRadius = 8;
    // Modèle de formatage (API 5.1)
    formattingSettings;
    // Service de formatage (Nécessaire pour buildFormattingModel)
    formattingSettingsService;
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
        // Initialisation du service de formatage
        this.formattingSettingsService = new powerbi_visuals_utils_formattingmodel__WEBPACK_IMPORTED_MODULE_0__.FormattingSettingsService();
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
                }
            };
            tr.ondragend = (e) => { tr.style.opacity = "1"; };
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
                                this.host.persistProperties({
                                    merge: [{
                                            objectName: draggedOriginalName,
                                            selector: null,
                                            properties: { col: colIndex, pos: newSortIndex }
                                        }]
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
                                this.host.persistProperties({
                                    replace: [{ objectName: "styleLigne", selector: selectionId.getSelector(), properties: existingProps }]
                                });
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
                tr.title = "Cliquer pour modifier | Glisser pour déplacer";
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
                        this.host.persistProperties({
                            merge: [{
                                    objectName: draggedOriginalName,
                                    selector: null,
                                    properties: { col: colIndex, pos: newSortIndex }
                                }]
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
                        this.host.persistProperties({
                            replace: [{ objectName: "styleLigne", selector: selectionId.getSelector(), properties: existingProps }]
                        });
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
            Object.keys(overrides).forEach(key => {
                fullProps[key] = overrides[key];
            });
            this.host.persistProperties({
                replace: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: fullProps
                    }]
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRSxDQUFDO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVEQUF1RCxDQUFDLEdBQUcscURBQXFELENBQUM7QUFDN0ksQ0FBQztBQUNELGlFQUFlLHFEQUFxRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9ub2RlX21vZHVsZXMvcG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbC9saWIvRm9ybWF0dGluZ1NldHRpbmdzQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL25vZGVfbW9kdWxlcy9wb3dlcmJpLXZpc3VhbHMtdXRpbHMtZm9ybWF0dGluZ21vZGVsL2xpYi9Gb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL2luZGV4LmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vbm9kZV9tb2R1bGVzL3Bvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWwvbGliL3V0aWxzL0Zvcm1hdHRpbmdTZXR0aW5nc1V0aWxzLmpzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3NldHRpbmdzLnRzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3JjL3Zpc3VhbC50cyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy8uL3N0eWxlL3Zpc3VhbC5sZXNzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi8udG1wL3ByZWNvbXBpbGUvdmlzdWFsUGx1Z2luLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUG93ZXJiaSB1dGlscyBjb21wb25lbnRzIGNsYXNzZXMgZm9yIGN1c3RvbSB2aXN1YWwgZm9ybWF0dGluZyBwYW5lIG9iamVjdHNcbiAqXG4gKi9cbmltcG9ydCAqIGFzIEZvcm1hdHRpbmdTZXR0aW5nc1BhcnNlciBmcm9tIFwiLi91dGlscy9Gb3JtYXR0aW5nU2V0dGluZ3NVdGlsc1wiO1xuY2xhc3MgTmFtZWRFbnRpdHkge1xufVxuZXhwb3J0IGNsYXNzIENhcmRHcm91cEVudGl0eSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBNb2RlbCB7XG59XG4vKiogQ29tcG9zaXRlQ2FyZCBpcyB1c2UgdG8gcG9wdWxhdGUgYSBjYXJkIGludG8gdGhlIGZvcm1hdHRpbmcgcGFuZSB3aXRoIG11bHRpcGxlIGdyb3VwcyAqL1xuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZUNhcmQgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG59XG5leHBvcnQgY2xhc3MgR3JvdXAgZXh0ZW5kcyBDYXJkR3JvdXBFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxufVxuLyoqIFNpbXBsZUNhcmQgaXMgdXNlIHRvIHBvcHVsYXRlIGEgY2FyZCBpbnRvIHRoZSBmb3JtYXR0aW5nIHBhbmUgaW4gYSBzaW5nbGUgZ3JvdXAgKi9cbmV4cG9ydCBjbGFzcyBTaW1wbGVDYXJkIGV4dGVuZHMgQ2FyZEdyb3VwRW50aXR5IHtcbn1cbmV4cG9ydCBjbGFzcyBTaW1wbGVTbGljZSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYmplY3QpO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICBjb25zdCBjb250cm9sVHlwZSA9IHRoaXMudHlwZTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBjb25zdCBzbGljZURpc3BsYXlOYW1lID0gKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kaXNwbGF5TmFtZUtleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGlzcGxheU5hbWVLZXkpIDogdGhpcy5kaXNwbGF5TmFtZTtcbiAgICAgICAgY29uc3Qgc2xpY2VEZXNjcmlwdGlvbiA9IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGVzY3JpcHRpb25LZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRlc2NyaXB0aW9uS2V5KSA6IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHNsaWNlRGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc2xpY2VEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcilcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSwgbG9jYWxpemF0aW9uTWFuYWdlcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVzY3JpcHRvcjogRm9ybWF0dGluZ1NldHRpbmdzUGFyc2VyLmdldERlc2NyaXB0b3Iob2JqZWN0TmFtZSwgdGhpcyksXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB0aGlzLm5hbWVcbiAgICAgICAgICAgIH1dO1xuICAgIH1cbiAgICBzZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IChfYSA9IGRhdGFWaWV3T2JqZWN0cyA9PT0gbnVsbCB8fCBkYXRhVmlld09iamVjdHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFWaWV3T2JqZWN0c1tvYmplY3ROYW1lXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW3RoaXMubmFtZV07XG4gICAgICAgIHRoaXMudmFsdWUgPSBGb3JtYXR0aW5nU2V0dGluZ3NQYXJzZXIuZ2V0UHJvcGVydHlWYWx1ZSh0aGlzLCBuZXdWYWx1ZSwgdGhpcy52YWx1ZSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEFsaWdubWVudEdyb3VwIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkFsaWdubWVudEdyb3VwXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkFsaWdubWVudEdyb3VwICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgbW9kZTogdGhpcy5tb2RlLCBzdXBwb3J0c05vU2VsZWN0aW9uOiB0aGlzLnN1cHBvcnRzTm9TZWxlY3Rpb24gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRvZ2dsZVN3aXRjaCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUb2dnbGVTd2l0Y2hcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVG9nZ2xlU3dpdGNoICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb2xvclBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJDb2xvclBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Db2xvclBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGRlZmF1bHRDb2xvcjogdGhpcy5kZWZhdWx0Q29sb3IsIGlzTm9GaWxsSXRlbVN1cHBvcnRlZDogdGhpcy5pc05vRmlsbEl0ZW1TdXBwb3J0ZWQgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE51bVVwRG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJOdW1VcERvd25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuTnVtVXBEb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgb3B0aW9uczogdGhpcy5vcHRpb25zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyBOdW1VcERvd24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNsaWRlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5TbGlkZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRGF0ZVBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EYXRlUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUsIGxvY2FsaXphdGlvbk1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMucGxhY2Vob2xkZXJLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLnBsYWNlaG9sZGVyS2V5KSA6IHRoaXMucGxhY2Vob2xkZXIsIHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSXRlbURyb3Bkb3duIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkRyb3Bkb3duXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkRyb3Bkb3duICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgaXRlbXM6IHRoaXMuaXRlbXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEF1dG9Ecm9wZG93biBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEcm9wZG93blwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5Ecm9wZG93biAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IG1lcmdlVmFsdWVzOiB0aGlzLm1lcmdlVmFsdWVzLCBmaWx0ZXJWYWx1ZXM6IHRoaXMuZmlsdGVyVmFsdWVzIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBEdXJhdGlvblBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJEdXJhdGlvblBpY2tlclwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5EdXJhdGlvblBpY2tlciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IHZhbGlkYXRvcnM6IHRoaXMudmFsaWRhdG9ycyB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRXJyb3JSYW5nZUNvbnRyb2wgZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKG9iamVjdCk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRXJyb3JSYW5nZUNvbnRyb2xcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRXJyb3JSYW5nZUNvbnRyb2wgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdXBlci5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpKSwgeyB2YWxpZGF0b3JzOiB0aGlzLnZhbGlkYXRvcnMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZpZWxkUGlja2VyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZpZWxkUGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZpZWxkUGlja2VyICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgdmFsaWRhdG9yczogdGhpcy52YWxpZGF0b3JzLCBhbGxvd011bHRpcGxlVmFsdWVzOiB0aGlzLmFsbG93TXVsdGlwbGVWYWx1ZXMgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEl0ZW1GbGFnc1NlbGVjdGlvbiBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGbGFnc1NlbGVjdGlvblwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5GbGFnc1NlbGVjdGlvbiAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGl0ZW1zOiB0aGlzLml0ZW1zIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBBdXRvRmxhZ3NTZWxlY3Rpb24gZXh0ZW5kcyBTaW1wbGVTbGljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiRmxhZ3NTZWxlY3Rpb25cIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuRmxhZ3NTZWxlY3Rpb24gKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRJbnB1dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0SW5wdXRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuVGV4dElucHV0ICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3VwZXIuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSksIHsgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgVGV4dElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJUZXh0QXJlYVwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5UZXh0QXJlYSAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRm9udFBpY2tlciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJGb250UGlja2VyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRQaWNrZXIgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEdyYWRpZW50QmFyIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkdyYWRpZW50QmFyXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkdyYWRpZW50QmFyICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJJbWFnZVVwbG9hZFwiIC8qIHZpc3VhbHMuRm9ybWF0dGluZ0NvbXBvbmVudC5JbWFnZVVwbG9hZCAqLztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTGlzdEVkaXRvciBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJMaXN0RWRpdG9yXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lkxpc3RFZGl0b3IgKi87XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFJlYWRPbmx5VGV4dCBleHRlbmRzIFNpbXBsZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJSZWFkT25seVRleHRcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuUmVhZE9ubHlUZXh0ICovO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTaGFwZU1hcFNlbGVjdG9yIGV4dGVuZHMgU2ltcGxlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIlNoYXBlTWFwU2VsZWN0b3JcIiAvKiB2aXN1YWxzLkZvcm1hdHRpbmdDb21wb25lbnQuU2hhcGVNYXBTZWxlY3RvciAqLztcbiAgICB9XG4gICAgZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN1cGVyLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkpLCB7IGlzQXpNYXBSZWZlcmVuY2VTZWxlY3RvcjogdGhpcy5pc0F6TWFwUmVmZXJlbmNlU2VsZWN0b3IgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZVNsaWNlIGV4dGVuZHMgTmFtZWRFbnRpdHkge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9iamVjdCk7XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdTbGljZShvYmplY3ROYW1lLCBsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xUeXBlID0gdGhpcy50eXBlO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudERpc3BsYXlOYW1lID0ge1xuICAgICAgICAgICAgZGlzcGxheU5hbWU6IChsb2NhbGl6YXRpb25NYW5hZ2VyICYmIHRoaXMuZGlzcGxheU5hbWVLZXkpID8gbG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZSh0aGlzLmRpc3BsYXlOYW1lS2V5KSA6IHRoaXMuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKGxvY2FsaXphdGlvbk1hbmFnZXIgJiYgdGhpcy5kZXNjcmlwdGlvbktleSkgPyBsb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKHRoaXMuZGVzY3JpcHRpb25LZXkpIDogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHVpZDogb2JqZWN0TmFtZSArICctJyArIHByb3BlcnR5TmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgY29tcG9uZW50RGlzcGxheU5hbWUpLCB7IGNvbnRyb2w6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBjb250cm9sVHlwZSxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB0aGlzLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIH0gfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZvbnRDb250cm9sIGV4dGVuZHMgQ29tcG9zaXRlU2xpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCkge1xuICAgICAgICBzdXBlcihvYmplY3QpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcIkZvbnRDb250cm9sXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50LkZvbnRDb250cm9sICovO1xuICAgIH1cbiAgICBnZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb250RmFtaWx5OiB0aGlzLmZvbnRGYW1pbHkuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLmZvbnRTaXplLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICBib2xkOiAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgaXRhbGljOiAoX2IgPSB0aGlzLml0YWxpYykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICB1bmRlcmxpbmU6IChfYyA9IHRoaXMudW5kZXJsaW5lKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0Rm9ybWF0dGluZ0NvbXBvbmVudChvYmplY3ROYW1lKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9udEZhbWlseS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMuZm9udFNpemUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5ib2xkID8gdGhpcy5ib2xkLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkgOiBbXSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5pdGFsaWMgPyB0aGlzLml0YWxpYy5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpIDogW10pXG4gICAgICAgICAgICAuY29uY2F0KHRoaXMudW5kZXJsaW5lID8gdGhpcy51bmRlcmxpbmUuZ2V0UmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihvYmplY3ROYW1lKSA6IFtdKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHRoaXMuZm9udEZhbWlseS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMuZm9udFNpemUuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2EgPSB0aGlzLmJvbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIChfYiA9IHRoaXMuaXRhbGljKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgICAgICAoX2MgPSB0aGlzLnVuZGVybGluZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWFyZ2luUGFkZGluZyBleHRlbmRzIENvbXBvc2l0ZVNsaWNlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QpIHtcbiAgICAgICAgc3VwZXIob2JqZWN0KTtcbiAgICAgICAgdGhpcy50eXBlID0gXCJNYXJnaW5QYWRkaW5nXCIgLyogdmlzdWFscy5Gb3JtYXR0aW5nQ29tcG9uZW50Lk1hcmdpblBhZGRpbmcgKi87XG4gICAgfVxuICAgIGdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0LmdldEZvcm1hdHRpbmdDb21wb25lbnQob2JqZWN0TmFtZSksXG4gICAgICAgICAgICByaWdodDogdGhpcy5yaWdodC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgdG9wOiB0aGlzLnRvcC5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbS5nZXRGb3JtYXR0aW5nQ29tcG9uZW50KG9iamVjdE5hbWUpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sZWZ0LmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3Iob2JqZWN0TmFtZSlcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5yaWdodC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLnRvcC5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKVxuICAgICAgICAgICAgLmNvbmNhdCh0aGlzLmJvdHRvbS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKG9iamVjdE5hbWUpKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5sZWZ0LnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5yaWdodC5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgb2JqZWN0TmFtZSk7XG4gICAgICAgIHRoaXMudG9wLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBvYmplY3ROYW1lKTtcbiAgICAgICAgdGhpcy5ib3R0b20uc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIG9iamVjdE5hbWUpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBOYW1lZEVudGl0eSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JqZWN0KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ29udGFpbmVySXRlbSBleHRlbmRzIE5hbWVkRW50aXR5IHtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHMuanMubWFwIiwiaW1wb3J0IHsgQ29tcG9zaXRlQ2FyZCwgU2ltcGxlQ2FyZCB9IGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmV4cG9ydCBjbGFzcyBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2NhbGl6YXRpb25NYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciA9IGxvY2FsaXphdGlvbk1hbmFnZXI7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJ1aWxkIHZpc3VhbCBmb3JtYXR0aW5nIHNldHRpbmdzIG1vZGVsIGZyb20gbWV0YWRhdGEgZGF0YVZpZXdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhVmlld3MgbWV0YWRhdGEgZGF0YVZpZXcgb2JqZWN0XG4gICAgICogQHJldHVybnMgdmlzdWFsIGZvcm1hdHRpbmcgc2V0dGluZ3MgbW9kZWxcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUZvcm1hdHRpbmdTZXR0aW5nc01vZGVsKHR5cGVDbGFzcywgZGF0YVZpZXcpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgbGV0IGRlZmF1bHRTZXR0aW5ncyA9IG5ldyB0eXBlQ2xhc3MoKTtcbiAgICAgICAgbGV0IGRhdGFWaWV3T2JqZWN0cyA9IChfYSA9IGRhdGFWaWV3ID09PSBudWxsIHx8IGRhdGFWaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhVmlldy5tZXRhZGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm9iamVjdHM7XG4gICAgICAgIGlmIChkYXRhVmlld09iamVjdHMpIHtcbiAgICAgICAgICAgIC8vIGxvb3Agb3ZlciBlYWNoIGZvcm1hdHRpbmcgcHJvcGVydHkgYW5kIHNldCBpdHMgbmV3IHZhbHVlIGlmIGV4aXN0c1xuICAgICAgICAgICAgKF9iID0gZGVmYXVsdFNldHRpbmdzLmNhcmRzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICBpZiAoY2FyZCBpbnN0YW5jZW9mIENvbXBvc2l0ZUNhcmQpXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNldFByb3BlcnRpZXNWYWx1ZXMoZGF0YVZpZXdPYmplY3RzLCBjYXJkLm5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/IFtjYXJkXSA6IGNhcmQuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICBjYXJkR3JvdXBJbnN0YW5jZXMuZm9yRWFjaCgoY2FyZEdyb3VwSW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudCB0b3AgbGV2ZWwgdG9nZ2xlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIChfYSA9IGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zZXRQcm9wZXJ0aWVzVmFsdWVzKGRhdGFWaWV3T2JqZWN0cywgY2FyZC5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gY2FyZEdyb3VwSW5zdGFuY2UgPT09IG51bGwgfHwgY2FyZEdyb3VwSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcmRHcm91cEluc3RhbmNlLnNsaWNlcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAoX2QgPSAoX2MgPSBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gbnVsbCB8fCBjYXJkR3JvdXBJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250YWluZXJJdGVtID09PSBudWxsIHx8IGNvbnRhaW5lckl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbnRhaW5lckl0ZW0uc2xpY2VzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yRWFjaCgoc2xpY2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGljZSA9PT0gbnVsbCB8fCBzbGljZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2Uuc2V0UHJvcGVydGllc1ZhbHVlcyhkYXRhVmlld09iamVjdHMsIGNhcmQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFNldHRpbmdzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBCdWlsZCBmb3JtYXR0aW5nIG1vZGVsIGJ5IHBhcnNpbmcgZm9ybWF0dGluZyBzZXR0aW5ncyBtb2RlbCBvYmplY3RcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBvd2VyYmkgdmlzdWFsIGZvcm1hdHRpbmcgbW9kZWxcbiAgICAgKi9cbiAgICBidWlsZEZvcm1hdHRpbmdNb2RlbChmb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCkge1xuICAgICAgICBsZXQgZm9ybWF0dGluZ01vZGVsID0ge1xuICAgICAgICAgICAgY2FyZHM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdHRpbmdTZXR0aW5nc01vZGVsLmNhcmRzXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpXG4gICAgICAgICAgICAuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdDYXJkID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNhcmQuZGlzcGxheU5hbWVLZXkpID8gdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyLmdldERpc3BsYXlOYW1lKGNhcmQuZGlzcGxheU5hbWVLZXkpIDogY2FyZC5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjYXJkLmRlc2NyaXB0aW9uS2V5KSA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkLmRlc2NyaXB0aW9uS2V5KSA6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgICAgICB1aWQ6IGNhcmQubmFtZSArIFwiLWNhcmRcIixcbiAgICAgICAgICAgICAgICBhbmFseXRpY3NQYW5lOiBjYXJkLmFuYWx5dGljc1BhbmUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb2JqZWN0TmFtZSA9IGNhcmQubmFtZTtcbiAgICAgICAgICAgIGlmIChjYXJkLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9wTGV2ZWxUb2dnbGVTbGljZSA9IGNhcmQudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICB0b3BMZXZlbFRvZ2dsZVNsaWNlLnN1cHByZXNzRGlzcGxheU5hbWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdHRpbmdDYXJkLnRvcExldmVsVG9nZ2xlID0gdG9wTGV2ZWxUb2dnbGVTbGljZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IGNhcmQub25QcmVQcm9jZXNzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChjYXJkKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2ltcGxlQ2FyZCA9IGNhcmQgaW5zdGFuY2VvZiBTaW1wbGVDYXJkO1xuICAgICAgICAgICAgY29uc3QgY2FyZEdyb3VwSW5zdGFuY2VzID0gKGlzU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICAgICAgW2NhcmRdLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSA6XG4gICAgICAgICAgICAgICAgY2FyZC5ncm91cHMuZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpKTtcbiAgICAgICAgICAgIGNhcmRHcm91cEluc3RhbmNlc1xuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwVWlkID0gY2FyZEdyb3VwSW5zdGFuY2UubmFtZSArIFwiLWdyb3VwXCI7XG4gICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBncm91cCBmb3IgZWFjaCBncm91cFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdHcm91cCA9IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZUtleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGlzU2ltcGxlQ2FyZCA/IHVuZGVmaW5lZCA6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY2FyZEdyb3VwSW5zdGFuY2UuZGVzY3JpcHRpb25LZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbktleSkgOiBjYXJkR3JvdXBJbnN0YW5jZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgc2xpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBncm91cFVpZCxcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGNhcmRHcm91cEluc3RhbmNlLmNvbGxhcHNpYmxlLFxuICAgICAgICAgICAgICAgICAgICBkZWxheVNhdmVTbGljZXM6IGNhcmRHcm91cEluc3RhbmNlLmRlbGF5U2F2ZVNsaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGNhcmRHcm91cEluc3RhbmNlLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFJlYXNvbjogY2FyZEdyb3VwSW5zdGFuY2UuZGlzYWJsZWRSZWFzb24sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ2FyZC5ncm91cHMucHVzaChmb3JtYXR0aW5nR3JvdXApO1xuICAgICAgICAgICAgICAgIC8vIEluIGNhc2UgZm9ybWF0dGluZyBtb2RlbCBhZGRzIGRhdGEgcG9pbnRzIG9yIHRvcCBjYXRlZ29yaWVzIChMaWtlIHdoZW4geW91IG1vZGlmeSBzcGVjaWZpYyB2aXN1YWwgY2F0ZWdvcnkgY29sb3IpLlxuICAgICAgICAgICAgICAgIC8vIHRoZXNlIGNhdGVnb3JpZXMgdXNlIHNhbWUgb2JqZWN0IG5hbWUgYW5kIHByb3BlcnR5IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXMgYW5kIHRoZSBnZW5lcmF0ZWQgdWlkIHdpbGwgYmUgdGhlIHNhbWUgZm9yIHRoZXNlIGZvcm1hdHRpbmcgY2F0ZWdvcmllcyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgLy8gU29sdXRpb24gPT4gU2F2ZSBzbGljZSBuYW1lcyB0byBtb2RpZnkgZWFjaCBzbGljZSB1aWQgdG8gYmUgdW5pcXVlIGJ5IGFkZGluZyBjb3VudGVyIHZhbHVlIHRvIHRoZSBuZXcgc2xpY2UgdWlkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIHNsaWNlIGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkR3JvdXBJbnN0YW5jZS5jb250YWluZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclVpZCA9IGdyb3VwVWlkICsgXCItY29udGFpbmVyXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRpbmdDb250YWluZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogKHRoaXMubG9jYWxpemF0aW9uTWFuYWdlciAmJiBjb250YWluZXIuZGlzcGxheU5hbWVLZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVyLmRpc3BsYXlOYW1lS2V5KSA6IGNvbnRhaW5lci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAodGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyICYmIGNvbnRhaW5lci5kZXNjcmlwdGlvbktleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMubG9jYWxpemF0aW9uTWFuYWdlci5nZXREaXNwbGF5TmFtZShjb250YWluZXIuZGVzY3JpcHRpb25LZXkpIDogY29udGFpbmVyLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJVaWRcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLmZvckVhY2goKGNvbnRhaW5lckl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIGZvcm1hdHRpbmcgY29udGFpbmVyIGl0ZW0gb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJJZW1OYW1lID0gY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSA/IGNvbnRhaW5lckl0ZW0uZGlzcGxheU5hbWVLZXkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVySXRlbVVpZCA9IGNvbnRhaW5lclVpZCArIGNvbnRhaW5lckllbU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6ICh0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIgJiYgY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmxvY2FsaXphdGlvbk1hbmFnZXIuZ2V0RGlzcGxheU5hbWUoY29udGFpbmVySXRlbS5kaXNwbGF5TmFtZUtleSkgOiBjb250YWluZXJJdGVtLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWNlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiBjb250YWluZXJJdGVtVWlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZXMgYW5kIGFkZCB0aGVtIHRvIGN1cnJlbnQgZm9ybWF0dGluZyBjb250YWluZXIgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXM6IGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nQ29udGFpbmVySXRlbS5zbGljZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0aW5nQ29udGFpbmVyLmNvbnRhaW5lckl0ZW1zLnB1c2goZm9ybWF0dGluZ0NvbnRhaW5lckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ0dyb3VwLmNvbnRhaW5lciA9IGZvcm1hdHRpbmdDb250YWluZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b3BMZXZlbFRvZ2dsZVNsaWNlID0gY2FyZEdyb3VwSW5zdGFuY2UudG9wTGV2ZWxTbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcExldmVsVG9nZ2xlU2xpY2Uuc3VwcHJlc3NEaXNwbGF5TmFtZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9ybWF0dGluZ0dyb3VwLmRpc3BsYXlOYW1lID09IHVuZGVmaW5lZCA/IGZvcm1hdHRpbmdDYXJkIDogZm9ybWF0dGluZ0dyb3VwKS50b3BMZXZlbFRvZ2dsZSA9IHRvcExldmVsVG9nZ2xlU2xpY2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZm9ybWF0dGluZyBzbGljZSBmb3IgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkRm9ybWF0dGluZ1NsaWNlcyh7IHNsaWNlczogY2FyZEdyb3VwSW5zdGFuY2Uuc2xpY2VzLCBvYmplY3ROYW1lLCBzbGljZU5hbWVzLCBmb3JtYXR0aW5nU2xpY2VzOiBmb3JtYXR0aW5nR3JvdXAuc2xpY2VzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9ybWF0dGluZ0NhcmQucmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCk7XG4gICAgICAgICAgICBmb3JtYXR0aW5nTW9kZWwuY2FyZHMucHVzaChmb3JtYXR0aW5nQ2FyZCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybWF0dGluZ01vZGVsO1xuICAgIH1cbiAgICBidWlsZEZvcm1hdHRpbmdTbGljZXMoeyBzbGljZXMsIG9iamVjdE5hbWUsIHNsaWNlTmFtZXMsIGZvcm1hdHRpbmdTbGljZXMgfSkge1xuICAgICAgICAvLyBGaWx0ZXIgc2xpY2VzIGJhc2VkIG9uIHRoZWlyIHZpc2liaWxpdHlcbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKS5mb3JFYWNoKChzbGljZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1hdHRpbmdTbGljZSA9IHNsaWNlID09PSBudWxsIHx8IHNsaWNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbGljZS5nZXRGb3JtYXR0aW5nU2xpY2Uob2JqZWN0TmFtZSwgdGhpcy5sb2NhbGl6YXRpb25NYW5hZ2VyKTtcbiAgICAgICAgICAgIGlmIChmb3JtYXR0aW5nU2xpY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBNb2RpZnkgZm9ybWF0dGluZyBzbGljZSB1aWQgaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHNsaWNlTmFtZXNbc2xpY2UubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWNlTmFtZXNbc2xpY2UubmFtZV0rKztcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGluZ1NsaWNlLnVpZCA9IGAke2Zvcm1hdHRpbmdTbGljZS51aWR9LSR7c2xpY2VOYW1lc1tzbGljZS5uYW1lXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtYXR0aW5nU2xpY2VzLnB1c2goZm9ybWF0dGluZ1NsaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIFByb2NlZWRlZCBzbGljZSBuYW1lcyBhcmUgc2F2ZWQgdG8gcHJldmVudCBkdXBsaWNhdGVkIGRlZmF1bHQgZGVzY3JpcHRvcnMgaW4gY2FzZSBvZiB1c2luZyBcbiAgICAgICAgLy8gZm9ybWF0dGluZyBjYXRlZ29yaWVzICYgc2VsZWN0b3JzLCBzaW5jZSB0aGV5IGhhdmUgdGhlIHNhbWUgZGVzY3JpcHRvciBvYmplY3ROYW1lIGFuZCBwcm9wZXJ0eU5hbWVcbiAgICAgICAgY29uc3Qgc2xpY2VOYW1lcyA9IHt9O1xuICAgICAgICBsZXQgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSBbXTtcbiAgICAgICAgbGV0IGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgICAgIGxldCBjYXJkQ29udGFpbmVyU2xpY2VzRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmIChjYXJkIGluc3RhbmNlb2YgQ29tcG9zaXRlQ2FyZCAmJiBjYXJkLnRvcExldmVsU2xpY2UpXG4gICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5wdXNoKC4uLihfYSA9IGNhcmQudG9wTGV2ZWxTbGljZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldFJldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lKSk7XG4gICAgICAgIGNvbnN0IGNhcmRHcm91cEluc3RhbmNlcyA9IChjYXJkIGluc3RhbmNlb2YgU2ltcGxlQ2FyZCA/XG4gICAgICAgICAgICBbY2FyZF0uZmlsdGVyKCh7IHZpc2libGUgPSB0cnVlIH0pID0+IHZpc2libGUpIDpcbiAgICAgICAgICAgIGNhcmQuZ3JvdXBzLmZpbHRlcigoeyB2aXNpYmxlID0gdHJ1ZSB9KSA9PiB2aXNpYmxlKSk7XG4gICAgICAgIGNhcmRHcm91cEluc3RhbmNlcy5mb3JFYWNoKChjYXJkR3JvdXBJbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGNhcmRTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMgPSB0aGlzLmdldFNsaWNlc1JldmVydFRvRGVmYXVsdERlc2NyaXB0b3IoY2FyZC5uYW1lLCBjYXJkR3JvdXBJbnN0YW5jZS5zbGljZXMsIHNsaWNlTmFtZXMsIGNhcmRHcm91cEluc3RhbmNlLnRvcExldmVsU2xpY2UpO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gY2FyZEdyb3VwSW5zdGFuY2UuY29udGFpbmVyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGFpbmVySXRlbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5mb3JFYWNoKChjb250YWluZXJJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycyA9IGNhcmRDb250YWluZXJTbGljZXNEZWZhdWx0RGVzY3JpcHRvcnMuY29uY2F0KHRoaXMuZ2V0U2xpY2VzUmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcihjYXJkLm5hbWUsIGNvbnRhaW5lckl0ZW0uc2xpY2VzLCBzbGljZU5hbWVzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLnB1c2goLi4uY2FyZFNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQoY2FyZENvbnRhaW5lclNsaWNlc0RlZmF1bHREZXNjcmlwdG9ycykpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzO1xuICAgIH1cbiAgICBnZXRTbGljZXNSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lLCBzbGljZXMsIHNsaWNlTmFtZXMsIHRvcExldmVsU2xpY2UpIHtcbiAgICAgICAgbGV0IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzID0gW107XG4gICAgICAgIGlmICh0b3BMZXZlbFNsaWNlKSB7XG4gICAgICAgICAgICBzbGljZU5hbWVzW3RvcExldmVsU2xpY2UubmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnMgPSByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycy5jb25jYXQodG9wTGV2ZWxTbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpY2VzID09PSBudWxsIHx8IHNsaWNlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xpY2VzLmZvckVhY2goKHNsaWNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2xpY2UgJiYgIXNsaWNlTmFtZXNbc2xpY2UubmFtZV0pIHtcbiAgICAgICAgICAgICAgICBzbGljZU5hbWVzW3NsaWNlLm5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9ycyA9IHJldmVydFRvRGVmYXVsdERlc2NyaXB0b3JzLmNvbmNhdChzbGljZS5nZXRSZXZlcnRUb0RlZmF1bHREZXNjcmlwdG9yKGNhcmROYW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmV2ZXJ0VG9EZWZhdWx0RGVzY3JpcHRvcnM7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UuanMubWFwIiwiaW1wb3J0ICogYXMgZm9ybWF0dGluZ1NldHRpbmdzIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc0NvbXBvbmVudHNcIjtcbmltcG9ydCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIGZyb20gXCIuL0Zvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2VcIjtcbmV4cG9ydCB7IGZvcm1hdHRpbmdTZXR0aW5ncywgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyoqXG4gKiBCdWlsZCBhbmQgcmV0dXJuIGZvcm1hdHRpbmcgZGVzY3JpcHRvciBmb3Igc2ltcGxlIHNsaWNlXG4gKlxuICogQHBhcmFtIG9iamVjdE5hbWUgT2JqZWN0IG5hbWUgZnJvbSBjYXBhYmlsaXRpZXNcbiAqIEBwYXJhbSBzbGljZSBmb3JtYXR0aW5nIHNpbXBsZSBzbGljZVxuICogQHJldHVybnMgc2ltcGxlIHNsaWNlIGZvcm1hdHRpbmcgZGVzY3JpcHRvclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVzY3JpcHRvcihvYmplY3ROYW1lLCBzbGljZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG9iamVjdE5hbWU6IG9iamVjdE5hbWUsXG4gICAgICAgIHByb3BlcnR5TmFtZTogc2xpY2UubmFtZSxcbiAgICAgICAgc2VsZWN0b3I6IHNsaWNlLnNlbGVjdG9yLFxuICAgICAgICBhbHRDb25zdGFudFZhbHVlU2VsZWN0b3I6IHNsaWNlLmFsdENvbnN0YW50U2VsZWN0b3IsXG4gICAgICAgIGluc3RhbmNlS2luZDogc2xpY2UuaW5zdGFuY2VLaW5kXG4gICAgfTtcbn1cbi8qKlxuICogR2V0IHByb3BlcnR5IHZhbHVlIGZyb20gZGF0YXZpZXcgb2JqZWN0cyBpZiBleGlzdHNcbiAqIEVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0IHZhbHVlIGZyb20gZm9ybWF0dGluZyBzZXR0aW5ncyBvYmplY3RcbiAqXG4gKiBAcGFyYW0gdmFsdWUgZGF0YXZpZXcgb2JqZWN0IHZhbHVlXG4gKiBAcGFyYW0gZGVmYXVsdFZhbHVlIGZvcm1hdHRpbmcgc2V0dGluZ3MgZGVmYXVsdCB2YWx1ZVxuICogQHJldHVybnMgZm9ybWF0dGluZyBwcm9wZXJ0eSB2YWx1ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlWYWx1ZShzbGljZSwgdmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8ICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgIXZhbHVlLnNvbGlkKSkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBpZiAodmFsdWUuc29saWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS5zb2xpZC5jb2xvciB9O1xuICAgIH1cbiAgICBpZiAoc2xpY2UgPT09IG51bGwgfHwgc2xpY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsaWNlLml0ZW1zKSB7XG4gICAgICAgIGxldCBpdGVtc0FycmF5ID0gc2xpY2UuaXRlbXM7XG4gICAgICAgIHJldHVybiBpdGVtc0FycmF5LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09IHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Rm9ybWF0dGluZ1NldHRpbmdzVXRpbHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXR0aW5nU2V0dGluZ3MgfSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLXV0aWxzLWZvcm1hdHRpbmdtb2RlbFwiO1xyXG5pbXBvcnQgcG93ZXJiaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xyXG5cclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQgPSBmb3JtYXR0aW5nU2V0dGluZ3MuU2ltcGxlQ2FyZDtcclxuaW1wb3J0IEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlID0gZm9ybWF0dGluZ1NldHRpbmdzLlNsaWNlO1xyXG5pbXBvcnQgRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgPSBmb3JtYXR0aW5nU2V0dGluZ3MuTW9kZWw7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gMC4gVElUUkVTIENPTE9OTkVTIChHw6luw6lyYXRpb24gZHluYW1pcXVlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFRpdHJlc0NvbG9ubmVzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidGl0cmVzQ29sb25uZXNcIjtcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgPSBcIjAuIFRJVFJFUyBDT0xPTk5FU1wiO1xyXG4gICAgXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWNlcy5wdXNoKG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVGV4dElucHV0KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwidGl0cmVcIiArIGksXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJUaXRyZSBDb2wgXCIgKyBpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRyZS4uLlwiIC8vIENPUlJFQ1RJT046IFBsYWNlaG9sZGVyIG9ibGlnYXRvaXJlXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAxLiBNRU5VIERFIFPDiUxFQ1RJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBTZWxlY3Rpb25NZW51U2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwic2VsZWN0aW9uTWVudVwiO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyA9IFwiMS4gU8OJTEVDVElPTiAoRXhjZWwpXCI7XHJcblxyXG4gICAgbGlnbmVBY3RpdmUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJsaWduZUFjdGl2ZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIk5vbSBleGFjdCBkZSBsYSBsaWduZSBhY3RpdmVcIixcclxuICAgICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJFeDogQ2hpZmZyZSBkJ2FmZmFpcmVzXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbdGhpcy5saWduZUFjdGl2ZV07XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyAyLiBTVFlMRSBERSBMSUdORVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNsYXNzIFN0eWxlTGlnbmVTZXR0aW5ncyBleHRlbmRzIEZvcm1hdHRpbmdTZXR0aW5nc0NhcmQge1xyXG4gICAgbmFtZTogc3RyaW5nID0gXCJzdHlsZUxpZ25lXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCIyLiBQRVJTT05OQUxJU0FUSU9OIChFeGNlbClcIjtcclxuICAgIFxyXG4gICAgLy8gQ09SUkVDVElPTjogQWpvdXQgZXhwbGljaXRlIGR1IHNlbGVjdG9yIHBvdXIgw6l2aXRlciBsJ2VycmV1ciBUU1xyXG4gICAgc2VsZWN0b3I6IHBvd2VyYmkuZGF0YS5TZWxlY3RvcjsgXHJcblxyXG4gICAgLy8gUG9zaXRpb25uZW1lbnRcclxuICAgIGNvbHVtbkluZGV4ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwiY29sdW1uSW5kZXhcIiwgZGlzcGxheU5hbWU6IFwiTsKwIENvbG9ubmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgb3JkcmVUcmkgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJvcmRyZVRyaVwiLCBkaXNwbGF5TmFtZTogXCJQb3NpdGlvblwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTWFyZ2VzXHJcbiAgICBtYXJnaW5Ub3AgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Ub3BcIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgSGF1dFwiLCB2YWx1ZTogMFxyXG4gICAgfSk7XHJcbiAgICBtYXJnaW5Cb3R0b20gPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Cb3R0b21cIiwgZGlzcGxheU5hbWU6IFwiTWFyZ2UgQmFzXCIsIHZhbHVlOiAwXHJcbiAgICB9KTtcclxuICAgIG1hcmdpbkNvbG9yID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJtYXJnaW5Db2xvclwiLCBkaXNwbGF5TmFtZTogXCJDb3VsZXVyIE1hcmdlXCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVmlzaWJpbGl0w6kgLyBIZWFkZXJcclxuICAgIGlzSGlkZGVuID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXNIaWRkZW5cIiwgZGlzcGxheU5hbWU6IFwiTUFTUVVFUlwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgaXNIZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJNb2RlIFRpdHJlXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29udGVudVxyXG4gICAgY3VzdG9tTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJjdXN0b21MYWJlbFwiLCBkaXNwbGF5TmFtZTogXCJSZW5vbW1lclwiLCB2YWx1ZTogXCJcIixcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJOb3V2ZWF1IG5vbS4uLlwiIC8vIENPUlJFQ1RJT05cclxuICAgIH0pO1xyXG4gICAgY3VzdG9tQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5UZXh0SW5wdXQoe1xyXG4gICAgICAgIG5hbWU6IFwiY3VzdG9tQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIlJlbXBsYWNlciBNb250YW50XCIsIHZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIlZhbGV1ciBvdSB2aWRlLi4uXCIgLy8gQ09SUkVDVElPTlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUG9saWNlXHJcbiAgICBmb250U2l6ZSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImZvbnRTaXplXCIsIGRpc3BsYXlOYW1lOiBcIlRhaWxsZVwiLCB2YWx1ZTogMTJcclxuICAgIH0pO1xyXG4gICAgZm9udEZhbWlseSA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuRm9udFBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJmb250RmFtaWx5XCIsIGRpc3BsYXlOYW1lOiBcIlBvbGljZVwiLCB2YWx1ZTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCJcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFN0eWxlIExpYmVsbMOpXHJcbiAgICBiZ0xhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Db2xvclBpY2tlcih7XHJcbiAgICAgICAgbmFtZTogXCJiZ0xhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIkZvbmQgTGliZWxsw6lcIiwgdmFsdWU6IHsgdmFsdWU6IFwidHJhbnNwYXJlbnRcIiB9XHJcbiAgICB9KTtcclxuICAgIGZpbGxMYWJlbCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZmlsbExhYmVsXCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlIExpYmVsbMOpXCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib2xkTGFiZWwgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiR3JhcyAoTClcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGl0YWxpY0xhYmVsID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiaXRhbGljTGFiZWxcIiwgZGlzcGxheU5hbWU6IFwiSXRhbGlxdWUgKEwpXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU3R5bGUgUHJpeFxyXG4gICAgYmdBbW91bnQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJnQW1vdW50XCIsIGRpc3BsYXlOYW1lOiBcIkZvbmQgUHJpeFwiLCB2YWx1ZTogeyB2YWx1ZTogXCJ0cmFuc3BhcmVudFwiIH1cclxuICAgIH0pO1xyXG4gICAgZmlsbEFtb3VudCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiZmlsbEFtb3VudFwiLCBkaXNwbGF5TmFtZTogXCJUZXh0ZSBQcml4XCIsIHZhbHVlOiB7IHZhbHVlOiBcImJsYWNrXCIgfVxyXG4gICAgfSk7XHJcbiAgICBib2xkQW1vdW50ID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5Ub2dnbGVTd2l0Y2goe1xyXG4gICAgICAgIG5hbWU6IFwiYm9sZEFtb3VudFwiLCBkaXNwbGF5TmFtZTogXCJHcmFzIChQKVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJvcmR1cmVzIHNww6ljaWZpcXVlc1xyXG4gICAgYm9yZGVyV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJXaWR0aFwiLCBkaXNwbGF5TmFtZTogXCJMYXJnZXVyIEJvcmR1cmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgQm9yZHVyZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCIjZWVlXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5jb2x1bW5JbmRleCwgdGhpcy5vcmRyZVRyaSxcclxuICAgICAgICB0aGlzLmlzSGlkZGVuLCB0aGlzLmlzSGVhZGVyLFxyXG4gICAgICAgIHRoaXMubWFyZ2luVG9wLCB0aGlzLm1hcmdpbkJvdHRvbSwgdGhpcy5tYXJnaW5Db2xvcixcclxuICAgICAgICB0aGlzLmN1c3RvbUxhYmVsLCB0aGlzLmN1c3RvbUFtb3VudCxcclxuICAgICAgICB0aGlzLmZvbnRTaXplLCB0aGlzLmZvbnRGYW1pbHksXHJcbiAgICAgICAgdGhpcy5maWxsTGFiZWwsIHRoaXMuYmdMYWJlbCwgdGhpcy5ib2xkTGFiZWwsIHRoaXMuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgdGhpcy5maWxsQW1vdW50LCB0aGlzLmJnQW1vdW50LCB0aGlzLmJvbGRBbW91bnQsXHJcbiAgICAgICAgdGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvclxyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExJR05FUyBNQU5VRUxMRVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBjbGFzcyBNYW51YWxMaW5lU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIHRleHQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCh7XHJcbiAgICAgICAgbmFtZTogXCJ0ZXh0XCIsIGRpc3BsYXlOYW1lOiBcIlRleHRlXCIsIHZhbHVlOiBcIk5vdXZlbGxlIExpZ25lXCIsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiTGliZWxsw6kuLi5cIiAvLyBDT1JSRUNUSU9OXHJcbiAgICB9KTtcclxuICAgIHNob3cgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJzaG93XCIsIGRpc3BsYXlOYW1lOiBcIkFmZmljaGVyXCIsIHZhbHVlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBjb2wgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJjb2xcIiwgZGlzcGxheU5hbWU6IFwiQ29sb25uZVwiLCB2YWx1ZTogMVxyXG4gICAgfSk7XHJcbiAgICBwb3MgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJwb3NcIiwgZGlzcGxheU5hbWU6IFwiUG9zaXRpb25cIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgaXNIZWFkZXIgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJpc0hlYWRlclwiLCBkaXNwbGF5TmFtZTogXCJUaXRyZVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgYmdDb2xvciA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuQ29sb3JQaWNrZXIoe1xyXG4gICAgICAgIG5hbWU6IFwiYmdDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJGb25kXCIsIHZhbHVlOiB7IHZhbHVlOiBcInRyYW5zcGFyZW50XCIgfVxyXG4gICAgfSk7XHJcbiAgICB0ZXh0Q29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcInRleHRDb2xvclwiLCBkaXNwbGF5TmFtZTogXCJUZXh0ZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCJibGFja1wiIH1cclxuICAgIH0pO1xyXG4gICAgbWFyZ2luVG9wID0gbmV3IGZvcm1hdHRpbmdTZXR0aW5ncy5OdW1VcERvd24oe1xyXG4gICAgICAgIG5hbWU6IFwibWFyZ2luVG9wXCIsIGRpc3BsYXlOYW1lOiBcIk1hcmdlIEhhdXRcIiwgdmFsdWU6IDBcclxuICAgIH0pO1xyXG4gICAgZm9udFNpemUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJmb250U2l6ZVwiLCBkaXNwbGF5TmFtZTogXCJUYWlsbGVcIiwgdmFsdWU6IDEyXHJcbiAgICB9KTtcclxuICAgIGJvbGQgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLlRvZ2dsZVN3aXRjaCh7XHJcbiAgICAgICAgbmFtZTogXCJib2xkXCIsIGRpc3BsYXlOYW1lOiBcIkdyYXNcIiwgdmFsdWU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIGl0YWxpYyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuVG9nZ2xlU3dpdGNoKHtcclxuICAgICAgICBuYW1lOiBcIml0YWxpY1wiLCBkaXNwbGF5TmFtZTogXCJJdGFsaXF1ZVwiLCB2YWx1ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyV2lkdGggPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLk51bVVwRG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJXaWR0aFwiLCBkaXNwbGF5TmFtZTogXCJMYXJnZXVyIEJvcmR1cmVcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXIgQm9yZHVyZVwiLCB2YWx1ZTogeyB2YWx1ZTogXCIjZWVlXCIgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2xpY2VzOiBBcnJheTxGb3JtYXR0aW5nU2V0dGluZ3NTbGljZT4gPSBbXHJcbiAgICAgICAgdGhpcy5zaG93LCB0aGlzLnRleHQsIHRoaXMuY29sLCB0aGlzLnBvcyxcclxuICAgICAgICB0aGlzLmlzSGVhZGVyLCB0aGlzLm1hcmdpblRvcCxcclxuICAgICAgICB0aGlzLnRleHRDb2xvciwgdGhpcy5iZ0NvbG9yLFxyXG4gICAgICAgIHRoaXMuZm9udFNpemUsIHRoaXMuYm9sZCwgdGhpcy5pdGFsaWMsXHJcbiAgICAgICAgdGhpcy5ib3JkZXJXaWR0aCwgdGhpcy5ib3JkZXJDb2xvclxyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEJPUkRVUkVTIFRBQkxFQVUgR0xPQkFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVGFibGVCb3JkZXJzU2V0dGluZ3MgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NDYXJkIHtcclxuICAgIG5hbWU6IHN0cmluZyA9IFwidGFibGVCb3JkZXJzXCI7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCLwn5SyIEJPUkRVUkVTIFRBQkxFQVVcIjtcclxuXHJcbiAgICBib3JkZXJXaWR0aCA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlcldpZHRoXCIsIGRpc3BsYXlOYW1lOiBcIkxhcmdldXJcIiwgdmFsdWU6IDFcclxuICAgIH0pO1xyXG4gICAgYm9yZGVyQ29sb3IgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkNvbG9yUGlja2VyKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlckNvbG9yXCIsIGRpc3BsYXlOYW1lOiBcIkNvdWxldXJcIiwgdmFsdWU6IHsgdmFsdWU6IFwicmdiYSgwLDAsMCwwLjI1KVwiIH1cclxuICAgIH0pO1xyXG4gICAgYm9yZGVyU3R5bGUgPSBuZXcgZm9ybWF0dGluZ1NldHRpbmdzLkl0ZW1Ecm9wZG93bih7XHJcbiAgICAgICAgbmFtZTogXCJib3JkZXJTdHlsZVwiLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIlN0eWxlXCIsXHJcbiAgICAgICAgdmFsdWU6IHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiUGxlaW5cIiB9LFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwic29saWRcIiwgZGlzcGxheU5hbWU6IFwiUGxlaW5cIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRhc2hlZFwiLCBkaXNwbGF5TmFtZTogXCJUaXJldHNcIiB9LFxyXG4gICAgICAgICAgICB7IHZhbHVlOiBcImRvdHRlZFwiLCBkaXNwbGF5TmFtZTogXCJQb2ludGlsbMOpc1wiIH0sXHJcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiZG91YmxlXCIsIGRpc3BsYXlOYW1lOiBcIkRvdWJsZVwiIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuICAgIGJvcmRlclJhZGl1cyA9IG5ldyBmb3JtYXR0aW5nU2V0dGluZ3MuTnVtVXBEb3duKHtcclxuICAgICAgICBuYW1lOiBcImJvcmRlclJhZGl1c1wiLCBkaXNwbGF5TmFtZTogXCJBcnJvbmRpXCIsIHZhbHVlOiA4XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGljZXM6IEFycmF5PEZvcm1hdHRpbmdTZXR0aW5nc1NsaWNlPiA9IFtcclxuICAgICAgICB0aGlzLmJvcmRlcldpZHRoLCB0aGlzLmJvcmRlckNvbG9yLCB0aGlzLmJvcmRlclN0eWxlLCB0aGlzLmJvcmRlclJhZGl1c1xyXG4gICAgXTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1PRMOITEUgUFJJTkNJUEFMXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY2xhc3MgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwgZXh0ZW5kcyBGb3JtYXR0aW5nU2V0dGluZ3NNb2RlbCB7XHJcbiAgICB0aXRyZXNDb2xvbm5lcyA9IG5ldyBUaXRyZXNDb2xvbm5lc1NldHRpbmdzKCk7XHJcbiAgICBzZWxlY3Rpb25NZW51ID0gbmV3IFNlbGVjdGlvbk1lbnVTZXR0aW5ncygpO1xyXG4gICAgc3R5bGVMaWduZSA9IG5ldyBTdHlsZUxpZ25lU2V0dGluZ3MoKTtcclxuICAgIHRhYmxlQm9yZGVycyA9IG5ldyBUYWJsZUJvcmRlcnNTZXR0aW5ncygpO1xyXG4gICAgXHJcbiAgICBjYXJkczogRm9ybWF0dGluZ1NldHRpbmdzQ2FyZFtdID0gW1xyXG4gICAgICAgIHRoaXMudGl0cmVzQ29sb25uZXMsXHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25NZW51LFxyXG4gICAgICAgIHRoaXMuc3R5bGVMaWduZSxcclxuICAgICAgICB0aGlzLnRhYmxlQm9yZGVyc1xyXG4gICAgXTtcclxufSIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IHBvd2VyYmkgZnJvbSBcInBvd2VyYmktdmlzdWFscy1hcGlcIjtcclxuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zO1xyXG5pbXBvcnQgVmlzdWFsVXBkYXRlT3B0aW9ucyA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuVmlzdWFsVXBkYXRlT3B0aW9ucztcclxuaW1wb3J0IElWaXN1YWwgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWw7XHJcbmltcG9ydCBJVmlzdWFsSG9zdCA9IHBvd2VyYmkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuSVZpc3VhbEhvc3Q7XHJcblxyXG4vLyBJbXBvcnRhdGlvbiBkdSBTZXJ2aWNlIGRlIGZvcm1hdGFnZSAoRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSlcclxuaW1wb3J0IHsgZm9ybWF0dGluZ1NldHRpbmdzLCBGb3JtYXR0aW5nU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSBcInBvd2VyYmktdmlzdWFscy11dGlscy1mb3JtYXR0aW5nbW9kZWxcIjtcclxuaW1wb3J0IHsgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwsIE1hbnVhbExpbmVTZXR0aW5ncyB9IGZyb20gXCIuL3NldHRpbmdzXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gICAgb3JpZ2luYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nO1xyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG4gICAgc29ydEluZGV4OiBudW1iZXI7XHJcbiAgICBcclxuICAgIG1hcmdpbkJvdHRvbTogbnVtYmVyO1xyXG4gICAgbWFyZ2luVG9wOiBudW1iZXI7XHJcbiAgICBtYXJnaW5Db2xvcjogc3RyaW5nO1xyXG4gICAgaXNIaWRkZW46IGJvb2xlYW47XHJcbiAgICBpc0hlYWRlcjogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgaXNWaXJ0dWFsOiBib29sZWFuO1xyXG5cclxuICAgIGZvbnQ6IHN0cmluZzsgZm9udFNpemU6IG51bWJlcjtcclxuICAgIGJnTGFiZWw6IHN0cmluZzsgY29sb3JMYWJlbDogc3RyaW5nOyBib2xkTGFiZWw6IGJvb2xlYW47IGl0YWxpY0xhYmVsOiBib29sZWFuO1xyXG4gICAgYmdBbW91bnQ6IHN0cmluZzsgY29sb3JBbW91bnQ6IHN0cmluZzsgYm9sZEFtb3VudDogYm9vbGVhbjtcclxuICAgIFxyXG4gICAgY3VzdG9tQW1vdW50OiBzdHJpbmc7XHJcbiAgICBjdXN0b21MYWJlbD86IHN0cmluZztcclxuICAgIFxyXG4gICAgLy8gQm9yZHVyZXMgY29tcGzDqHRlcyAoNCBjw7R0w6lzKVxyXG4gICAgYm9yZGVyV2lkdGg6IG51bWJlcjtcclxuICAgIGJvcmRlckNvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaXN1YWwgaW1wbGVtZW50cyBJVmlzdWFsIHtcclxuICAgIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgaG9zdDogSVZpc3VhbEhvc3Q7XHJcbiAgICBwcml2YXRlIGRpdkNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGZsZXhDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGFsbFJvd3NEYXRhOiBSb3dEYXRhW10gPSBbXTtcclxuICAgIHByaXZhdGUgY2F0ZWdvcmljYWxEYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTZWxlY3RlZExhYmVsOiBzdHJpbmcgPSBcIlwiOyBcclxuICAgIHByaXZhdGUgY29sdW1uVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBtZXRhZGF0YTogYW55O1xyXG4gICAgcHJpdmF0ZSB0b29sYmFyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBwZW5kaW5nQ2hhbmdlczogTWFwPHN0cmluZywgYW55PiA9IG5ldyBNYXAoKTtcclxuICAgIHByaXZhdGUgbWFudWFsTGluZUtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBcclxuICAgIHByaXZhdGUgYXJlQWN0aW9uQnV0dG9uc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIC8vIEJvcmR1cmVzIGdsb2JhbGVzIGR1IHRhYmxlYXVcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJXaWR0aDogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJDb2xvcjogc3RyaW5nID0gXCJyZ2JhKDAsIDAsIDAsIDAuMjUpXCI7XHJcbiAgICBwcml2YXRlIHRhYmxlQm9yZGVyU3R5bGU6IHN0cmluZyA9IFwic29saWRcIjtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJSYWRpdXM6IG51bWJlciA9IDg7XHJcblxyXG4gICAgLy8gTW9kw6hsZSBkZSBmb3JtYXRhZ2UgKEFQSSA1LjEpXHJcbiAgICBwcml2YXRlIGZvcm1hdHRpbmdTZXR0aW5nczogVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWw7XHJcbiAgICAvLyBTZXJ2aWNlIGRlIGZvcm1hdGFnZSAoTsOpY2Vzc2FpcmUgcG91ciBidWlsZEZvcm1hdHRpbmdNb2RlbClcclxuICAgIHByaXZhdGUgZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTogRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGlzYXRpb24gZHUgc2VydmljZSBkZSBmb3JtYXRhZ2VcclxuICAgICAgICB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nc1NlcnZpY2UgPSBuZXcgRm9ybWF0dGluZ1NldHRpbmdzU2VydmljZSgpO1xyXG5cclxuICAgICAgICB0aGlzLmRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIuY2xhc3NOYW1lID0gXCJzY3JvbGwtd3JhcHBlclwiO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuZGl2Q29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5jbGFzc05hbWUgPSBcImFjY291bnRpbmctY29udGFpbmVyXCI7XHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuY2xhc3NOYW1lID0gXCJmbG9hdGluZy10b29sYmFyXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMudG9vbGJhcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiICYmIFxyXG4gICAgICAgICAgICAgICAgIXRoaXMudG9vbGJhci5jb250YWlucyhlLnRhcmdldCBhcyBOb2RlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUob3B0aW9uczogVmlzdWFsVXBkYXRlT3B0aW9ucykge1xyXG4gICAgICAgIC8vIEluaXRpYWxpc2VyIGxlIG1vZMOobGUgZGUgZm9ybWF0YWdlXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0aW5nU2V0dGluZ3MgPSBuZXcgVmlzdWFsRm9ybWF0dGluZ1NldHRpbmdzTW9kZWwoKTtcclxuXHJcbiAgICAgICAgLy8gTmV0dG95YWdlIHPDqWN1cmlzw6lcclxuICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hbGxSb3dzRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMubWFudWFsTGluZUtleXMgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YVZpZXcgPSBvcHRpb25zLmRhdGFWaWV3c1swXTtcclxuICAgICAgICB0aGlzLm1ldGFkYXRhID0gZGF0YVZpZXcgPyBkYXRhVmlldy5tZXRhZGF0YSA6IG51bGw7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yaWNhbERhdGEgPSBkYXRhVmlldyAmJiBkYXRhVmlldy5jYXRlZ29yaWNhbCA/IGRhdGFWaWV3LmNhdGVnb3JpY2FsIDogbnVsbDtcclxuXHJcbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgYm9yZHVyZXMgZ2xvYmFsZXMgZHUgdGFibGVhdVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgdGIgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0YWJsZUJvcmRlcnNcIl07XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQpIHRoaXMudGFibGVCb3JkZXJXaWR0aCA9IHRiW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJDb2xvclwiXSkgdGhpcy50YWJsZUJvcmRlckNvbG9yID0gKHRiW1wiYm9yZGVyQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyU3R5bGVcIl0pIHRoaXMudGFibGVCb3JkZXJTdHlsZSA9IHRiW1wiYm9yZGVyU3R5bGVcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJSYWRpdXNcIl0gIT09IHVuZGVmaW5lZCkgdGhpcy50YWJsZUJvcmRlclJhZGl1cyA9IHRiW1wiYm9yZGVyUmFkaXVzXCJdIGFzIG51bWJlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+UsiBCT1JEVVJFUyBDSEFSR8OJRVM6XCIsIHtcclxuICAgICAgICAgICAgd2lkdGg6IHRoaXMudGFibGVCb3JkZXJXaWR0aCxcclxuICAgICAgICAgICAgY29sb3I6IHRoaXMudGFibGVCb3JkZXJDb2xvcixcclxuICAgICAgICAgICAgc3R5bGU6IHRoaXMudGFibGVCb3JkZXJTdHlsZSxcclxuICAgICAgICAgICAgcmFkaXVzOiB0aGlzLnRhYmxlQm9yZGVyUmFkaXVzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIDEuIFRJVFJFUyAtIEluaXRpYWxpc2F0aW9uIGR5bmFtaXF1ZVxyXG4gICAgICAgIHRoaXMuY29sdW1uVGl0bGVzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gXCJ0aXRyZVwiICsgaTtcclxuICAgICAgICAgICAgICAgIGlmICh0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtblRpdGxlc1tpLTFdID0gdFtrZXldIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMi4gRE9OTsOJRVMgRVhDRUxcclxuICAgICAgICBsZXQgbWF4Q29sdW1uSW5kZXhVc2VkID0gMTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWNhbERhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhLmNhdGVnb3JpZXNbMF07XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuY2F0ZWdvcmljYWxEYXRhLnZhbHVlcyA/IHRoaXMuY2F0ZWdvcmljYWxEYXRhLnZhbHVlc1swXSA6IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInNlbGVjdGlvbk1lbnVcIl1bXCJsaWduZUFjdGl2ZVwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsICYmIGNhdGVnb3JpZXMudmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwgPSBjYXRlZ29yaWVzLnZhbHVlc1swXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLnZhbHVlcy5mb3JFYWNoKChjYXRWYWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsTmFtZSA9IGNhdFZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcm93OiBSb3dEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZTogb3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYW1vdW50OiB2YWx1ZXMgPyB2YWx1ZXMudmFsdWVzW2luZGV4XT8udG9TdHJpbmcoKSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IDEsIHNvcnRJbmRleDogaW5kZXggKiAxMCxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogMCwgaXNIaWRkZW46IGZhbHNlLCBtYXJnaW5Db2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBmYWxzZSwgaXNWaXJ0dWFsOiBmYWxzZSwgY3VzdG9tQW1vdW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvckxhYmVsOiBcImJsYWNrXCIsIGJvbGRMYWJlbDogZmFsc2UsIGl0YWxpY0xhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDogXCJ0cmFuc3BhcmVudFwiLCBjb2xvckFtb3VudDogXCJibGFja1wiLCBib2xkQW1vdW50OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCIjZWVlXCJcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0W1wic3R5bGVMaWduZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IG9iamVjdFtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImNvbHVtbkluZGV4XCJdKSByb3cuY29sdW1uSW5kZXggPSBzdHlsZVtcImNvbHVtbkluZGV4XCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdy5jb2x1bW5JbmRleCA8IDEpIHJvdy5jb2x1bW5JbmRleCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm9yZHJlVHJpXCJdICE9PSB1bmRlZmluZWQpIHJvdy5zb3J0SW5kZXggPSBzdHlsZVtcIm9yZHJlVHJpXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm1hcmdpbkJvdHRvbVwiXSAhPT0gdW5kZWZpbmVkKSByb3cubWFyZ2luQm90dG9tID0gc3R5bGVbXCJtYXJnaW5Cb3R0b21cIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJtYXJnaW5Ub3BcIl0gIT09IHVuZGVmaW5lZCkgcm93Lm1hcmdpblRvcCA9IHN0eWxlW1wibWFyZ2luVG9wXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiaXNIaWRkZW5cIl0pIHJvdy5pc0hpZGRlbiA9IHN0eWxlW1wiaXNIaWRkZW5cIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQ29sb3JcIl0pIHJvdy5tYXJnaW5Db2xvciA9IChzdHlsZVtcIm1hcmdpbkNvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImN1c3RvbUxhYmVsXCJdKSByb3cubGFiZWwgPSBzdHlsZVtcImN1c3RvbUxhYmVsXCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY3VzdG9tQW1vdW50XCJdKSByb3cuY3VzdG9tQW1vdW50ID0gc3R5bGVbXCJjdXN0b21BbW91bnRcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpc0hlYWRlclwiXSkgcm93LmlzSGVhZGVyID0gc3R5bGVbXCJpc0hlYWRlclwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmb250U2l6ZVwiXSkgcm93LmZvbnRTaXplID0gc3R5bGVbXCJmb250U2l6ZVwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZvbnRGYW1pbHlcIl0pIHJvdy5mb250ID0gc3R5bGVbXCJmb250RmFtaWx5XCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYmdMYWJlbFwiXSkgcm93LmJnTGFiZWwgPSAoc3R5bGVbXCJiZ0xhYmVsXCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZpbGxMYWJlbFwiXSkgcm93LmNvbG9yTGFiZWwgPSAoc3R5bGVbXCJmaWxsTGFiZWxcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9sZExhYmVsXCJdICE9PSB1bmRlZmluZWQpIHJvdy5ib2xkTGFiZWwgPSBzdHlsZVtcImJvbGRMYWJlbFwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpdGFsaWNMYWJlbFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuaXRhbGljTGFiZWwgPSBzdHlsZVtcIml0YWxpY0xhYmVsXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJnQW1vdW50XCJdKSByb3cuYmdBbW91bnQgPSAoc3R5bGVbXCJiZ0Ftb3VudFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJmaWxsQW1vdW50XCJdKSByb3cuY29sb3JBbW91bnQgPSAoc3R5bGVbXCJmaWxsQW1vdW50XCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvbGRBbW91bnRcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvbGRBbW91bnQgPSBzdHlsZVtcImJvbGRBbW91bnRcIl0gYXMgYm9vbGVhbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQpIHJvdy5ib3JkZXJXaWR0aCA9IHN0eWxlW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib3JkZXJDb2xvclwiXSkgcm93LmJvcmRlckNvbG9yID0gKHN0eWxlW1wiYm9yZGVyQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFwcGxpcXVlciBsZXMgY2hhbmdlbWVudHMgZW4gYXR0ZW50ZSAob3B0aW1pc3RlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVuZGluZ0NoYW5nZXMuaGFzKG9yaWdpbmFsTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZW5kaW5nID0gdGhpcy5wZW5kaW5nQ2hhbmdlcy5nZXQob3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHBlbmRpbmcudGltZXN0YW1wIDwgMzAwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbE1hdGNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwZW5kaW5nKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpbWVzdGFtcFwiKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGVuZGluZ1trZXldID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygcm93W2tleV0gPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBNYXRoLmFicyhwZW5kaW5nW2tleV0gLSByb3dba2V5XSkgPCAwLjAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCA9IHBlbmRpbmdba2V5XSA9PT0gcm93W2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93W2tleV0gPSBwZW5kaW5nW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbE1hdGNoZWQpIHRoaXMucGVuZGluZ0NoYW5nZXMuZGVsZXRlKG9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5kZWxldGUob3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChyb3cuY29sdW1uSW5kZXggPiBtYXhDb2x1bW5JbmRleFVzZWQpIG1heENvbHVtbkluZGV4VXNlZCA9IHJvdy5jb2x1bW5JbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEucHVzaChyb3cpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDMuIExJR05FUyBNQU5VRUxMRVMgRFlOQU1JUVVFU1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhLm9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIm1hbnVhbExpbmVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbnVhbExpbmVLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJzaG93XCJdID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBzW1widGV4dFwiXSA/IHNbXCJ0ZXh0XCJdIGFzIHN0cmluZyA6IFwiTm91dmVsbGUgTGlnbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbCA9IHNbXCJjb2xcIl0gPyBzW1wiY29sXCJdIGFzIG51bWJlciA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBzW1wicG9zXCJdID8gc1tcInBvc1wiXSBhcyBudW1iZXIgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNIZWFkID0gc1tcImlzSGVhZGVyXCJdID8gc1tcImlzSGVhZGVyXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJnID0gc1tcImJnQ29sb3JcIl0gPyAoc1tcImJnQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvciA6IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gc1tcInRleHRDb2xvclwiXSA/IChzW1widGV4dENvbG9yXCJdIGFzIGFueSkuc29saWQuY29sb3IgOiBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtdCA9IHNbXCJtYXJnaW5Ub3BcIl0gPyBzW1wibWFyZ2luVG9wXCJdIGFzIG51bWJlciA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcyA9IHNbXCJmb250U2l6ZVwiXSA/IHNbXCJmb250U2l6ZVwiXSBhcyBudW1iZXIgOiAxMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJvID0gc1tcImJvbGRcIl0gPyBzW1wiYm9sZFwiXSBhcyBib29sZWFuIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdCA9IHNbXCJpdGFsaWNcIl0gPyBzW1wiaXRhbGljXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ3ID0gc1tcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQgPyBzW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJjID0gc1tcImJvcmRlckNvbG9yXCJdID8gKHNbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCIjZWVlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdlJvdzogUm93RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHR4dCwgYW1vdW50OiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2wsIHNvcnRJbmRleDogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IG10LCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogaXNIZWFkLCBpc1ZpcnR1YWw6IHRydWUsIGN1c3RvbUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogZnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBiZywgY29sb3JMYWJlbDogY29sb3IsIGJvbGRMYWJlbDogYm8sIGl0YWxpY0xhYmVsOiBpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBiZywgY29sb3JBbW91bnQ6IGNvbG9yLCBib2xkQW1vdW50OiBibyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBidyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBiY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLnB1c2godlJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIFJFTkRVXHJcbiAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2x1bW5JbmRleFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlcldpZHRoID0gYCR7dGhpcy50YWJsZUJvcmRlcldpZHRofXB4YDtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyU3R5bGUgPSB0aGlzLnRhYmxlQm9yZGVyU3R5bGU7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlckNvbG9yID0gdGhpcy50YWJsZUJvcmRlckNvbG9yO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBgJHt0aGlzLnRhYmxlQm9yZGVyUmFkaXVzfXB4YDtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YSA/IHRoaXMuY2F0ZWdvcmljYWxEYXRhLmNhdGVnb3JpZXNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY29sRGl2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQm91dG9ucyBkJ2FjdGlvbnNcclxuICAgICAgICBjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICB0b2dnbGVCdG4uY2xhc3NOYW1lID0gXCJ0b2dnbGUtYWN0aW9ucy1idXR0b25cIjtcclxuICAgICAgICB0b2dnbGVCdG4udGV4dENvbnRlbnQgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCLil4BcIiA6IFwi4pa2XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnRpdGxlID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiTWFzcXVlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiIDogXCJBZmZpY2hlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLm1pbldpZHRoID0gXCIzMnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmhlaWdodCA9IFwiMzJweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuZm9udFNpemUgPSBcIjE2cHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuY29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjUwJVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5tYXJnaW4gPSBcIjZweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDgpXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgxLjEpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0b2dnbGVCdG4ub25tb3VzZW91dCA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNiM2Q3ZmZcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMSlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRvZ2dsZUJ0bi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID0gIXRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGU7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi50ZXh0Q29udGVudCA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIuKXgFwiIDogXCLilrZcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnRpdGxlID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiTWFzcXVlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiIDogXCJBZmZpY2hlciBsZXMgYm91dG9ucyBkJ2FjdGlvblwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVDb2x1bW5EaXYpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdG4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGFkZENvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5jbGFzc05hbWUgPSBcImFkZC1jb2x1bW4tYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWluV2lkdGggPSBcIjQwcHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMnNcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY29sb3IgPSBcIiM2NjZcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkICNjY2NcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjEycHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnRleHRDb250ZW50ID0gXCLinpVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYudGl0bGUgPSBcIkFqb3V0ZXIgdW5lIG5vdXZlbGxlIGNvbG9ubmVcIjtcclxuICAgICAgICBcclxuICAgICAgICBhZGRDb2x1bW5EaXYub25tb3VzZW92ZXIgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMVwiOyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCIjOTk5XCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYub25tb3VzZW91dCA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2NjY1wiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgaGFuZGxlQWRkQ29sdW1uID0gKGU6IEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IFwiQ09MT05ORSBcIiArIG5ld0luZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgW1widGl0cmVcIiArIG5ld0luZGV4XTogbmV3VGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRDb2x1bW4sIHRydWUpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4geyBlLnByZXZlbnREZWZhdWx0KCk7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IH0sIHRydWUpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHsgZS5wcmV2ZW50RGVmYXVsdCgpOyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ29sdW1uRGl2KTtcclxuXHJcbiAgICAgICAgbGV0IHJlbW92ZUNvbHVtbkRpdjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAobWF4Q29sdW1uc1RvU2hvdyA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlDb2xzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkgJiYgIXIuaXNIaWRkZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFJvd3MubGVuZ3RoID09PSAwKSBlbXB0eUNvbHMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVtcHR5Q29scy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LmNsYXNzTmFtZSA9IFwicmVtb3ZlLWNvbHVtbi1idXR0b25cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLm1pbldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjJzXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5jb2xvciA9IFwiI2MwMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCAjYzAwXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi50ZXh0Q29udGVudCA9IFwi8J+Xke+4j1wiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnRpdGxlID0gYFN1cHByaW1lciB0b3V0ZXMgbGVzIGNvbG9ubmVzIHZpZGVzICgke2VtcHR5Q29scy5qb2luKFwiLCBcIil9KWA7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlDb2xzLmZvckVhY2goY29sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgW1widGl0cmVcIiArIGNvbF06IHVuZGVmaW5lZCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQ29sdW1uRGl2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYWRkTGluZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkTGluZUJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBhZGRMaW5lQnRuLmNsYXNzTmFtZSA9IFwiYWRkLWxpbmUtYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmdhcCA9IFwiNnB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUud2lkdGggPSBcIjIycHhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmhlaWdodCA9IFwiMjJweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgYnRuSWNvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgICAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuVGV4dC5zdHlsZS5jb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIGJ0blRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICBidG5UZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xyXG4gICAgICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSBcIkxpZ25lXCI7XHJcblxyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5JY29uKTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICBhZGRMaW5lQnRuLnRpdGxlID0gXCJBam91dGVyIHVuZSBub3V2ZWxsZSBsaWduZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUubWFyZ2luID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCAxMnB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxOHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDQpXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZm9udEZhbWlseSA9IFwiJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWZcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZExpbmVCdG4ub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjYjNkN2ZmXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRMaW5lQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYW51YWxMaW5lS2V5cy5pbmNsdWRlcyhcIm1hbnVhbExpbmVcIiArIG5leHRJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IFwibWFudWFsTGluZVwiICsgbmV4dEluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogbmV3S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOb3V2ZWxsZSBMaWduZSBcIiArIG5leHRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3M6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjogeyBzb2xpZDogeyBjb2xvcjogXCJ0cmFuc3BhcmVudFwiIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiBcImJsYWNrXCIgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9sZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0YWxpYzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRMaW5lQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE5PVVZFTExFIE3DiVRIT0RFIE9CTElHQVRPSVJFIEFQSSA1LjErXHJcbiAgICAgKiBSZW1wbGFjZSBlbnVtZXJhdGVPYmplY3RJbnN0YW5jZXMgcG91ciBsYSBjZXJ0aWZpY2F0aW9uIFBvd2VyIEJJXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRGb3JtYXR0aW5nTW9kZWwoKTogcG93ZXJiaS52aXN1YWxzLkZvcm1hdHRpbmdNb2RlbCB7XHJcbiAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLmZvcm1hdHRpbmdTZXR0aW5nczsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gQS4gVElUUkVTIENPTE9OTkVTXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRPYmogPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJ0aXRyZXNDb2xvbm5lc1wiXTtcclxuICAgICAgICAgICAgbW9kZWwudGl0cmVzQ29sb25uZXMuc2xpY2VzLmZvckVhY2goc2xpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRPYmpbc2xpY2UubmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAoc2xpY2UgYXMgZm9ybWF0dGluZ1NldHRpbmdzLlRleHRJbnB1dCkudmFsdWUgPSB0T2JqW3NsaWNlLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIC8vIEIuIE1FTlUgU8OJTEVDVElPTlxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdKSB7XHJcbiAgICAgICAgICAgIG1vZGVsLnNlbGVjdGlvbk1lbnUubGlnbmVBY3RpdmUudmFsdWUgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdW1wibGlnbmVBY3RpdmVcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBDLiBTVFlMRSBERSBMSUdORSAoTG9naXF1ZSBjb250ZXh0dWVsbGUpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmljYWxEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB0aGlzLmNhdGVnb3JpY2FsRGF0YS5jYXRlZ29yaWVzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleENob2lzaSA9IGNhdGVnb3JpZXMudmFsdWVzLmZpbmRJbmRleCh2ID0+IHYudG9TdHJpbmcoKSA9PT0gdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXhDaG9pc2kgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZUNhcmQgPSBtb2RlbC5zdHlsZUxpZ25lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgICAgIC53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaW5kZXhDaG9pc2kpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbmVyIGxlIHPDqWxlY3RldXJcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlQ2FyZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xyXG4gICAgICAgICAgICAgICAgLy8gQ09SUkVDVElPTjogYXNzaWduZXIgYXVzc2kgbGUgc2VsZWN0b3Igw6AgQ0hBUVVFIHNsaWNlIHBvdXIgcXVlIGxlcyBwZXJzaXN0UHJvcGVydGllc1xyXG4gICAgICAgICAgICAgICAgLy8gZMOpY2xlbmNow6lzIGRlcHVpcyBsZSBwYW5uZWF1IGRlIGZvcm1hdCBjaWJsZW50IGJpZW4gbGEgbGlnbmUgc8OpbGVjdGlvbm7DqWUuXHJcbiAgICAgICAgICAgICAgICAoc3R5bGVDYXJkLnNsaWNlcyB8fCBbXSkuZm9yRWFjaChzID0+IHsgKHMgYXMgYW55KS5zZWxlY3RvciA9IHNlbGVjdG9yOyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbXBsaXNzYWdlIGR5bmFtaXF1ZSBkZXMgc2xpY2VzIHBhciBsZXVyIG5hbWUg4oCUIMOpdml0ZSBsZXMgcHJvYmzDqG1lcyBkZSB0eXBhZ2UgKGNvbG9yIHBpY2tlcnMsIGV0Yy4pXHJcbiAgICAgICAgICAgICAgICAgICAgKHN0eWxlQ2FyZC5zbGljZXMgfHwgW10pLmZvckVhY2goc2xpY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gKHNsaWNlIGFzIGFueSkubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuYW1lKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNvbHVtbkluZGV4XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5jb2x1bW5JbmRleDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwib3JkcmVUcmlcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LnNvcnRJbmRleDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWFyZ2luVG9wXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5tYXJnaW5Ub3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1hcmdpbkJvdHRvbVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cubWFyZ2luQm90dG9tOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtYXJnaW5Db2xvclwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IHsgdmFsdWU6IGN1cnJlbnRSb3cubWFyZ2luQ29sb3IgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiaXNIaWRkZW5cIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmlzSGlkZGVuOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpc0hlYWRlclwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuaXNIZWFkZXI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImN1c3RvbUxhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjdXN0b21BbW91bnRcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmN1c3RvbUFtb3VudCB8fCBcIlwiOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmb250U2l6ZVwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuZm9udFNpemU7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZvbnRGYW1pbHlcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSBjdXJyZW50Um93LmZvbnQ7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJnTGFiZWxcIjogKHNsaWNlIGFzIGFueSkudmFsdWUgPSB7IHZhbHVlOiBjdXJyZW50Um93LmJnTGFiZWwgfTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZmlsbExhYmVsXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5jb2xvckxhYmVsIH07IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvbGRMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuYm9sZExhYmVsOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJpdGFsaWNMYWJlbFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuaXRhbGljTGFiZWw7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJnQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5iZ0Ftb3VudCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5jb2xvckFtb3VudCB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib2xkQW1vdW50XCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0gY3VycmVudFJvdy5ib2xkQW1vdW50OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJib3JkZXJXaWR0aFwiOiAoc2xpY2UgYXMgYW55KS52YWx1ZSA9IGN1cnJlbnRSb3cuYm9yZGVyV2lkdGg7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImJvcmRlckNvbG9yXCI6IChzbGljZSBhcyBhbnkpLnZhbHVlID0geyB2YWx1ZTogY3VycmVudFJvdy5ib3JkZXJDb2xvciB9OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICAvLyBELiBMSUdORVMgTUFOVUVMTEVTIChEeW5hbWlxdWUpXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhLm9iamVjdHMpLmZpbHRlcihrID0+IGsuc3RhcnRzV2l0aChcIm1hbnVhbExpbmVcIikpLnNvcnQoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFudWFsT2JqID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hbnVhbENhcmQgPSBuZXcgTWFudWFsTGluZVNldHRpbmdzKCk7XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLm5hbWUgPSBrZXk7XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmRpc3BsYXlOYW1lID0gbWFudWFsT2JqW1widGV4dFwiXSA/IFN0cmluZyhtYW51YWxPYmpbXCJ0ZXh0XCJdKSA6IGtleTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC50ZXh0LnZhbHVlID0gbWFudWFsT2JqW1widGV4dFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQuc2hvdy52YWx1ZSA9IG1hbnVhbE9ialtcInNob3dcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmNvbC52YWx1ZSA9IG1hbnVhbE9ialtcImNvbFwiXTtcclxuICAgICAgICAgICAgICAgIG1hbnVhbENhcmQucG9zLnZhbHVlID0gbWFudWFsT2JqW1wicG9zXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5pc0hlYWRlci52YWx1ZSA9IG1hbnVhbE9ialtcImlzSGVhZGVyXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbE9ialtcImJnQ29sb3JcIl0pIG1hbnVhbENhcmQuYmdDb2xvci52YWx1ZSA9IG1hbnVhbE9ialtcImJnQ29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbE9ialtcInRleHRDb2xvclwiXSkgbWFudWFsQ2FyZC50ZXh0Q29sb3IudmFsdWUgPSBtYW51YWxPYmpbXCJ0ZXh0Q29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5tYXJnaW5Ub3AudmFsdWUgPSBtYW51YWxPYmpbXCJtYXJnaW5Ub3BcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmZvbnRTaXplLnZhbHVlID0gbWFudWFsT2JqW1wiZm9udFNpemVcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmJvbGQudmFsdWUgPSBtYW51YWxPYmpbXCJib2xkXCJdO1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2FyZC5pdGFsaWMudmFsdWUgPSBtYW51YWxPYmpbXCJpdGFsaWNcIl07XHJcbiAgICAgICAgICAgICAgICBtYW51YWxDYXJkLmJvcmRlcldpZHRoLnZhbHVlID0gbWFudWFsT2JqW1wiYm9yZGVyV2lkdGhcIl07XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsT2JqW1wiYm9yZGVyQ29sb3JcIl0pIG1hbnVhbENhcmQuYm9yZGVyQ29sb3IudmFsdWUgPSBtYW51YWxPYmpbXCJib3JkZXJDb2xvclwiXVtcInNvbGlkXCJdW1wiY29sb3JcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWpvdXRlciBsYSBjYXJ0ZSBtYW51ZWxsZSDDoCBsYSBsaXN0ZSBkZXMgY2FydGVzIGR1IG1vZMOobGVcclxuICAgICAgICAgICAgICAgIG1vZGVsLmNhcmRzLnB1c2gobWFudWFsQ2FyZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgLy8gRS4gQk9SRFVSRVMgR0xPQkFMRVNcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGFibGVCb3JkZXJzXCJdKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvcmRlck9iaiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXTtcclxuICAgICAgICAgICAgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlcldpZHRoLnZhbHVlID0gYm9yZGVyT2JqW1wiYm9yZGVyV2lkdGhcIl07XHJcbiAgICAgICAgICAgIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJSYWRpdXMudmFsdWUgPSBib3JkZXJPYmpbXCJib3JkZXJSYWRpdXNcIl07XHJcbiAgICAgICAgICAgIGlmIChib3JkZXJPYmpbXCJib3JkZXJDb2xvclwiXSkgbW9kZWwudGFibGVCb3JkZXJzLmJvcmRlckNvbG9yLnZhbHVlID0gYm9yZGVyT2JqW1wiYm9yZGVyQ29sb3JcIl1bXCJzb2xpZFwiXVtcImNvbG9yXCJdO1xyXG4gICAgICAgICAgICBpZiAoYm9yZGVyT2JqW1wiYm9yZGVyU3R5bGVcIl0pIG1vZGVsLnRhYmxlQm9yZGVycy5ib3JkZXJTdHlsZS52YWx1ZSA9IHsgdmFsdWU6IGJvcmRlck9ialtcImJvcmRlclN0eWxlXCJdIGFzIHN0cmluZywgZGlzcGxheU5hbWU6IGJvcmRlck9ialtcImJvcmRlclN0eWxlXCJdIGFzIHN0cmluZyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ09SUkVDVElPTiBNQUpFVVJFOiBVdGlsaXNlciBsZSBzZXJ2aWNlIHBvdXIgY29uc3RydWlyZSBsZSBtb2TDqGxlXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0dGluZ1NldHRpbmdzU2VydmljZS5idWlsZEZvcm1hdHRpbmdNb2RlbChtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXJUYWJsZUNvbnRlbnQodGFyZ2V0VGFibGU6IEhUTUxUYWJsZUVsZW1lbnQsIHRpdGxlOiBzdHJpbmcsIHJvd3M6IFJvd0RhdGFbXSwgY29sSW5kZXg6IG51bWJlciwgY2F0ZWdvcmllczogYW55KSB7XHJcbiAgICAgICAgLy8gW0NvbnRlbnUgaW5jaGFuZ8OpIHBvdXIgbGUgcmVuZHVdXHJcbiAgICAgICAgcm93cy5zb3J0KChhLCBiKSA9PiBhLnNvcnRJbmRleCAtIGIuc29ydEluZGV4KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0aGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICBjb25zdCB0ckhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguY29sU3BhbiA9IDI7XHJcbiAgICAgICAgdGguc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XHJcbiAgICAgICAgdGguc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCIzMHB4XCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICB0aXRsZVNwYW4uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLm1pbldpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgIHRoLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS50b3AgPSBcIjUwJVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC01MCUpXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yc1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDZweFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgZWRpdEJ0bi50aXRsZSA9IFwiUmVub21tZXIgY2V0dGUgY29sb25uZVwiO1xyXG4gICAgICAgIGVkaXRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IH07XHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3V0ID0gKCkgPT4geyBlZGl0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiOyB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmYzY2RcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCIjMDAwMDAwXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIycHggNHB4XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjNweFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uZm9jdXMoKTtcclxuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHModGl0bGVTcGFuKTtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24/LnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgICAgICBzZWxlY3Rpb24/LmFkZFJhbmdlKHJhbmdlKTtcclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKck1wiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVTcGFuLmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChuZXdUaXRsZSAmJiBuZXdUaXRsZSAhPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFtcInRpdHJlXCIgKyBjb2xJbmRleF06IG5ld1RpdGxlIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlRWRpdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwi4pyP77iPXCI7XHJcbiAgICAgICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHNhdmVFZGl0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSBzYXZlRWRpdCgpOyBlbHNlIGhhbmRsZUVkaXQoZSk7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZSkgPT4geyBlLnN0b3BQcm9wYWdhdGlvbigpOyB9LCB0cnVlKTtcclxuICAgICAgICBcclxuICAgICAgICB0aC5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgICAgICB0ckhlYWQuYXBwZW5kQ2hpbGQodGgpOyB0aGVhZC5hcHBlbmRDaGlsZCh0ckhlYWQpOyB0YXJnZXRUYWJsZS5hcHBlbmRDaGlsZCh0aGVhZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHJvd3MuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm93LmlzSGlkZGVuKSByZXR1cm47IFxyXG5cclxuICAgICAgICAgICAgaWYgKHJvdy5tYXJnaW5Ub3AgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0clNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luVG9wICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5saW5lSGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0clNwLnN0eWxlLmZvbnRTaXplID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZFNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5jb2xTcGFuID0gMjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvdy5tYXJnaW5Db2xvcjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5oZWlnaHQgPSByb3cubWFyZ2luVG9wICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5hcHBlbmRDaGlsZCh0ZFNwKTsgXHJcbiAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0clNwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIHRyLmRyYWdnYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmN1cnNvciA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcmFnc3RhcnQgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogcm93LmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbE5hbWU6IHJvdy5vcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiByb3cuY29sdW1uSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogcm93LnNvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXJ0dWFsOiByb3cuaXNWaXJ0dWFsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwidGV4dC9wbGFpblwiLCBKU09OLnN0cmluZ2lmeShkcmFnRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcmFnZW5kID0gKGU6IERyYWdFdmVudCkgPT4geyB0ci5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IH07XHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ292ZXIgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgICAgIHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiMnB4IHNvbGlkICMwMDdhY2NcIjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdHIub25kcmFnbGVhdmUgPSAoZTogRHJhZ0V2ZW50KSA9PiB7IHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiXCI7IH07XHJcbiAgICAgICAgICAgIHRyLm9uZHJvcCA9IChlOiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0ci5zdHlsZS5ib3JkZXJUb3AgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVN0ciA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRPcmlnaW5hbE5hbWUgPSBkYXRhLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZpcnR1YWwgPSBkYXRhLmlzVmlydHVhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRPcmlnaW5hbE5hbWUgIT09IHJvdy5vcmlnaW5hbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0Um93SW5kZXggPSByb3dzLmZpbmRJbmRleChyID0+IHIub3JpZ2luYWxOYW1lID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZTb3J0SW5kZXggPSAtMTAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFJvd0luZGV4ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNvcnRJbmRleCA9IHJvd3NbdGFyZ2V0Um93SW5kZXggLSAxXS5zb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2U29ydEluZGV4ID0gcm93LnNvcnRJbmRleCAtIDIwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTb3J0SW5kZXggPSAocHJldlNvcnRJbmRleCArIHJvdy5zb3J0SW5kZXgpIC8gMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IGRyYWdnZWRPcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb25JZCA9IHRoaXMuaG9zdC5jcmVhdGVTZWxlY3Rpb25JZEJ1aWxkZXIoKS53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgZHJhZ2dlZEluZGV4KS5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ1Byb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiAwLCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogXCJcIiwgY3VzdG9tQW1vdW50OiBcIlwiLCBpc0hlYWRlcjogZmFsc2UsIGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGl0YWxpY0xhYmVsOiBmYWxzZSwgYm9sZExhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIGZpbGxBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGJvbGRBbW91bnQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Cb3R0b20gPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luVG9wID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGlkZGVuID0gY3VycmVudERyYWdnZWRSb3cuaXNIaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQ29sb3IgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Db2xvciB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUFtb3VudCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUFtb3VudCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGVhZGVyID0gY3VycmVudERyYWdnZWRSb3cuaXNIZWFkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udFNpemUgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250RmFtaWx5ID0gY3VycmVudERyYWdnZWRSb3cuZm9udDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0xhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbExhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXRhbGljTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0Ftb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbEFtb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuYm9sZEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdW1wic3R5bGVMaWduZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4geyBpZiAoa2V5ICE9PSBcImNvbHVtbkluZGV4XCIgJiYga2V5ICE9PSBcIm9yZHJlVHJpXCIpIGV4aXN0aW5nUHJvcHNba2V5XSA9IHN0eWxlW2tleV07IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm9yZHJlVHJpID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7IG9iamVjdE5hbWU6IFwic3R5bGVMaWduZVwiLCBzZWxlY3Rvcjogc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgcHJvcGVydGllczogZXhpc3RpbmdQcm9wcyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRSb3dEYXRhID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkUm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCwgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IGRyYWdnZWRSb3dEYXRhLm1hcmdpbkJvdHRvbSwgbWFyZ2luVG9wOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Ub3AsIGlzSGlkZGVuOiBkcmFnZ2VkUm93RGF0YS5pc0hpZGRlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkNvbG9yOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Db2xvciwgY3VzdG9tTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUxhYmVsLCBjdXN0b21BbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBkcmFnZ2VkUm93RGF0YS5pc0hlYWRlciwgZm9udFNpemU6IGRyYWdnZWRSb3dEYXRhLmZvbnRTaXplLCBmb250OiBkcmFnZ2VkUm93RGF0YS5mb250LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYmdMYWJlbCwgY29sb3JMYWJlbDogZHJhZ2dlZFJvd0RhdGEuY29sb3JMYWJlbCwgaXRhbGljTGFiZWw6IGRyYWdnZWRSb3dEYXRhLml0YWxpY0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZExhYmVsOiBkcmFnZ2VkUm93RGF0YS5ib2xkTGFiZWwsIGJnQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5iZ0Ftb3VudCwgY29sb3JBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmNvbG9yQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZHJhZ2dlZFJvd0RhdGEuYm9sZEFtb3VudCwgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHsgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJvdy5pc1ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgICAgIHRyLm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ci5kcmFnZ2FibGUgJiYgZS5kZXRhaWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInNlbGVjdGlvbk1lbnVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7IFwibGlnbmVBY3RpdmVcIjogcm93Lm9yaWdpbmFsTmFtZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbGJhcihyb3csIHRyLCBlLmNsaWVudFgsIGUuY2xpZW50WSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRyLnRpdGxlID0gXCJDbGlxdWVyIHBvdXIgbW9kaWZpZXIgfCBHbGlzc2VyIHBvdXIgZMOpcGxhY2VyXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmaW5hbEFtb3VudCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChyb3cuY3VzdG9tQW1vdW50ICYmIHJvdy5jdXN0b21BbW91bnQudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbEFtb3VudCA9IHJvdy5jdXN0b21BbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF3VmFsID0gcGFyc2VGbG9hdChyb3cuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghcm93LmlzVmlydHVhbCAmJiAhcm93LmlzSGVhZGVyICYmIHJvdy5hbW91bnQgJiYgIWlzTmFOKHJhd1ZhbCkgJiYgcmF3VmFsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbW91bnQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywgeyBzdHlsZTogJ2RlY2ltYWwnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHJhd1ZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRGYW1pbHkgPSByb3cuZm9udDsgdHIuc3R5bGUuZm9udFNpemUgPSByb3cuZm9udFNpemUgKyBcInB4XCI7IFxyXG4gICAgICAgICAgICBjb25zdCB0ZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkTmFtZS5pbm5lclRleHQgPSByb3cubGFiZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCZyA9IChyb3cuaXNIZWFkZXIgfHwgcm93LmlzVmlydHVhbCkgPyByb3cuYmdMYWJlbCA6IHJvdy5iZ0xhYmVsO1xyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2VsbEJnOyB0ZE5hbWUuc3R5bGUuY29sb3IgPSByb3cuY29sb3JMYWJlbDtcclxuICAgICAgICAgICAgaWYgKHJvdy5ib2xkTGFiZWwpIHRkTmFtZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIGlmIChyb3cuaXRhbGljTGFiZWwpIHRkTmFtZS5zdHlsZS5mb250U3R5bGUgPSBcIml0YWxpY1wiO1xyXG4gICAgICAgICAgICBjb25zdCBib3JkZXJTdHlsZSA9IGAke3Jvdy5ib3JkZXJXaWR0aH1weCBzb2xpZCAke3Jvdy5ib3JkZXJDb2xvcn1gO1xyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYm9yZGVyID0gYm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiOyBcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGROYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRkQW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5pbm5lclRleHQgPSBmaW5hbEFtb3VudDsgXHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gKHJvdy5pc0hlYWRlciB8fCByb3cuaXNWaXJ0dWFsKSA/IHJvdy5iZ0xhYmVsIDogcm93LmJnQW1vdW50O1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5jb2xvciA9IHJvdy5jb2xvckFtb3VudDtcclxuICAgICAgICAgICAgaWYgKHJvdy5ib2xkQW1vdW50KSB0ZEFtb3VudC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmJvcmRlciA9IGJvcmRlclN0eWxlO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCJub25lXCI7IFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZEFtb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0cik7XHJcblxyXG4gICAgICAgICAgICBpZiAocm93Lm1hcmdpbkJvdHRvbSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyU3BCID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICAgICAgdHJTcEIuc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpbkJvdHRvbSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmxpbmVIZWlnaHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmZvbnRTaXplID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZFNwQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkU3BCLmNvbFNwYW4gPSAyOyBcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJvdy5tYXJnaW5Db2xvcjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpbkJvdHRvbSArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3BCLmFwcGVuZENoaWxkKHRkU3BCKTsgXHJcbiAgICAgICAgICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZCh0clNwQik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcFpvbmVUciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBkcm9wWm9uZVRyLnN0eWxlLmhlaWdodCA9IFwiNDBweFwiOyBcclxuICAgICAgICBjb25zdCBkcm9wWm9uZVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgIGRyb3Bab25lVGQuY29sU3BhbiA9IDI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgdHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjJzXCI7XHJcbiAgICAgICAgZHJvcFpvbmVUZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZHJvcFpvbmVUci5hcHBlbmRDaGlsZChkcm9wWm9uZVRkKTtcclxuXHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdvdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMjIsIDIwNCwgMC4xKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdsZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFTdHIgPSBlLmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dC9wbGFpblwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZE9yaWdpbmFsTmFtZSA9IGRhdGEub3JpZ2luYWxOYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNWaXJ0dWFsID0gZGF0YS5pc1ZpcnR1YWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFNvcnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiAwKSBsYXN0U29ydEluZGV4ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdLnNvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdTb3J0SW5kZXggPSBsYXN0U29ydEluZGV4ICsgMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNWaXJ0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZW5kaW5nQ2hhbmdlcy5zZXQoZHJhZ2dlZE9yaWdpbmFsTmFtZSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBkcmFnZ2VkT3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHsgY29sOiBjb2xJbmRleCwgcG9zOiBuZXdTb3J0SW5kZXggfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHsgaWYgKHIuY29sdW1uSW5kZXggPiBtYXhDb2xVc2VkKSBtYXhDb2xVc2VkID0gci5jb2x1bW5JbmRleDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbERpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBkcmFnZ2VkSW5kZXgpLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogXCJcIiwgY3VzdG9tQW1vdW50OiBcIlwiLCBpc0hlYWRlcjogZmFsc2UsIGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdMYWJlbDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbExhYmVsOiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBpdGFsaWNMYWJlbDogZmFsc2UsIGJvbGRMYWJlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbEFtb3VudDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgYm9sZEFtb3VudDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREcmFnZ2VkUm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkJvdHRvbSA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luVG9wID0gY3VycmVudERyYWdnZWRSb3cubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pc0hpZGRlbiA9IGN1cnJlbnREcmFnZ2VkUm93LmlzSGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Db2xvciA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkNvbG9yIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21BbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5jdXN0b21BbW91bnQgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIZWFkZXIgPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udFNpemUgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZm9udEZhbWlseSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0xhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuZmlsbExhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLml0YWxpY0xhYmVsID0gY3VycmVudERyYWdnZWRSb3cuaXRhbGljTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuYmdBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0Ftb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxBbW91bnQgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckFtb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRBbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNhdGVnb3JpZXMub2JqZWN0cyAmJiBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBjYXRlZ29yaWVzLm9iamVjdHNbZHJhZ2dlZEluZGV4XVtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChrZXkgPT4geyBpZiAoa2V5ICE9PSBcImNvbHVtbkluZGV4XCIgJiYga2V5ICE9PSBcIm9yZHJlVHJpXCIpIGV4aXN0aW5nUHJvcHNba2V5XSA9IHN0eWxlW2tleV07IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5vcmRyZVRyaSA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7IG9iamVjdE5hbWU6IFwic3R5bGVMaWduZVwiLCBzZWxlY3Rvcjogc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSwgcHJvcGVydGllczogZXhpc3RpbmdQcm9wcyB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZFJvd0RhdGEgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkUm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnZWRSb3dEYXRhLnNvcnRJbmRleCA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KGRyYWdnZWRPcmlnaW5hbE5hbWUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQm90dG9tLCBtYXJnaW5Ub3A6IGRyYWdnZWRSb3dEYXRhLm1hcmdpblRvcCwgaXNIaWRkZW46IGRyYWdnZWRSb3dEYXRhLmlzSGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkNvbG9yOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Db2xvciwgY3VzdG9tTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUxhYmVsLCBjdXN0b21BbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZHJhZ2dlZFJvd0RhdGEuaXNIZWFkZXIsIGZvbnRTaXplOiBkcmFnZ2VkUm93RGF0YS5mb250U2l6ZSwgZm9udDogZHJhZ2dlZFJvd0RhdGEuZm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5iZ0xhYmVsLCBjb2xvckxhYmVsOiBkcmFnZ2VkUm93RGF0YS5jb2xvckxhYmVsLCBpdGFsaWNMYWJlbDogZHJhZ2dlZFJvd0RhdGEuaXRhbGljTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZExhYmVsOiBkcmFnZ2VkUm93RGF0YS5ib2xkTGFiZWwsIGJnQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5iZ0Ftb3VudCwgY29sb3JBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmNvbG9yQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJvbGRBbW91bnQsIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHsgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1heENvbFVzZWQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4geyBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4OyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRib2R5LmFwcGVuZENoaWxkKGRyb3Bab25lVHIpO1xyXG5cclxuICAgICAgICB0YXJnZXRUYWJsZS5hcHBlbmRDaGlsZCh0Ym9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VG9vbGJhcihyb3c6IFJvd0RhdGEsIHRyOiBIVE1MVGFibGVSb3dFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgY2F0ZWdvcmllczogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5+iIHNob3dUb29sYmFyIGNhbGxlZCBmb3I6XCIsIHJvdy5vcmlnaW5hbE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIWNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIvCflLQgQ2F0ZWdvcmllcyBpcyBudWxsXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy50b29sYmFyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLnJlbW92ZUNoaWxkKHRoaXMudG9vbGJhci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHJcbiAgICAgICAgLy8gU3RvcCBwcm9wYWdhdGlvbiBvbiB0aGUgdG9vbGJhciBpdHNlbGZcclxuICAgICAgICB0aGlzLnRvb2xiYXIub25tb3VzZWRvd24gPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIub25jbGljayA9IChlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbm5lciBsYSB0b29sYmFyXHJcbiAgICAgICAgY29uc3QgdG9vbGJhcldpZHRoID0gNDAwOyBcclxuICAgICAgICBsZXQgbGVmdCA9IHggLSB0b29sYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMTApIGxlZnQgPSAxMDtcclxuICAgICAgICBpZiAobGVmdCArIHRvb2xiYXJXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSBsZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLSB0b29sYmFyV2lkdGggLSAxMDtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHkgLSA1MDtcclxuICAgICAgICBpZiAodG9wIDwgMTApIHRvcCA9IHkgKyAyMDtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfn6IgSW5kZXggZm91bmQ6XCIsIGluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi8J+UtCBJbmRleCBub3QgZm91bmQgZm9yXCIsIHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uSWRCdWlsZGVyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpO1xyXG4gICAgICAgIHNlbGVjdGlvbklkQnVpbGRlciA9IHNlbGVjdGlvbklkQnVpbGRlci53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gc2VsZWN0aW9uSWRCdWlsZGVyLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIG1ldHRyZSDDoCBqb3VyIHBlbmRpbmdDaGFuZ2VzXHJcbiAgICAgICAgY29uc3QgdXBkYXRlUGVuZGluZyA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmdldChyb3cub3JpZ2luYWxOYW1lKSB8fCB7IHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0geyAuLi5jdXJyZW50LCAuLi5wcm9wcywgdGltZXN0YW1wOiBEYXRlLm5vdygpIH07XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KHJvdy5vcmlnaW5hbE5hbWUsIHVwZGF0ZWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIHLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGUgbGEgbGlnbmVcclxuICAgICAgICBjb25zdCBnZXRDdXJyZW50Um93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHJvdy5vcmlnaW5hbE5hbWUpIHx8IHJvdztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgcG91ciBwZXJzaXN0ZXIgVE9VVEVTIGxlcyBwcm9wcmnDqXTDqXMgKMOpdml0ZSBsZXMgcGVydGVzKVxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3RBbGxQcm9wcyA9IChvdmVycmlkZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gZ2V0Q3VycmVudFJvdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnVsbFByb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY3VycmVudFJvdy5jb2x1bW5JbmRleCxcclxuICAgICAgICAgICAgICAgIG9yZHJlVHJpOiBjdXJyZW50Um93LnNvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogY3VycmVudFJvdy5tYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IGN1cnJlbnRSb3cubWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgaXNIaWRkZW46IGN1cnJlbnRSb3cuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5tYXJnaW5Db2xvciB9IH0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogY3VycmVudFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQW1vdW50OiBjdXJyZW50Um93LmN1c3RvbUFtb3VudCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFkZXI6IGN1cnJlbnRSb3cuaXNIZWFkZXIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogY3VycmVudFJvdy5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGN1cnJlbnRSb3cuZm9udCxcclxuICAgICAgICAgICAgICAgIGJnTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYmdMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuY29sb3JMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBpdGFsaWNMYWJlbDogY3VycmVudFJvdy5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogY3VycmVudFJvdy5ib2xkTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBiZ0Ftb3VudDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5iZ0Ftb3VudCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsQW1vdW50OiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmNvbG9yQW1vdW50IH0gfSxcclxuICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGN1cnJlbnRSb3cuYm9sZEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBjdXJyZW50Um93LmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYm9yZGVyQ29sb3IgfSB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGZ1bGxQcm9wc1trZXldID0gb3ZlcnJpZGVzW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJzdHlsZUxpZ25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogZnVsbFByb3BzXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAtLS0gQk9VVE9OUyAtLS1cclxuXHJcbiAgICAgICAgLy8gR1JBUyAoQilcclxuICAgICAgICBjb25zdCBidG5Cb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBiRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xyXG4gICAgICAgIGJFbGVtLnRleHRDb250ZW50ID0gXCJCXCI7XHJcbiAgICAgICAgYnRuQm9sZC5hcHBlbmRDaGlsZChiRWxlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQm9sZC50aXRsZSA9IFwiR3Jhc1wiO1xyXG4gICAgICAgIGlmIChyb3cuYm9sZExhYmVsKSBidG5Cb2xkLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgYnRuQm9sZC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgIGJ0bkJvbGQuY2xhc3NOYW1lID0gbmV3VmFsID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICByb3cuYm9sZExhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICByb3cuYm9sZEFtb3VudCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gbmV3VmFsID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFdlaWdodCA9IHdlaWdodDtcclxuICAgICAgICAgICAgaWYgKHRyLmNlbGxzWzFdKSAodHIuY2VsbHNbMV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmZvbnRXZWlnaHQgPSB3ZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5Cb2xkKTtcclxuXHJcbiAgICAgICAgLy8gSVRBTElRVUUgKEkpXHJcbiAgICAgICAgY29uc3QgYnRuSXRhbGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBjb25zdCBpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGlFbGVtLnRleHRDb250ZW50ID0gXCJJXCI7XHJcbiAgICAgICAgYnRuSXRhbGljLmFwcGVuZENoaWxkKGlFbGVtKTtcclxuXHJcbiAgICAgICAgYnRuSXRhbGljLnRpdGxlID0gXCJJdGFsaXF1ZVwiO1xyXG4gICAgICAgIGlmIChyb3cuaXRhbGljTGFiZWwpIGJ0bkl0YWxpYy5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIGJ0bkl0YWxpYy5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgYnRuSXRhbGljLmNsYXNzTmFtZSA9IG5ld1ZhbCA/IFwiYWN0aXZlXCIgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcm93Lml0YWxpY0xhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5ld1ZhbCA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5JdGFsaWMpO1xyXG5cclxuICAgICAgICAvLyBTRVBBUkFURVVSXHJcbiAgICAgICAgY29uc3Qgc2VwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VwMS5jbGFzc05hbWUgPSBcInNlcGFyYXRvclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChzZXAxKTtcclxuXHJcbiAgICAgICAgLy8gVEFJTExFIFBPTElDRSAoc8OpbGVjdGV1cilcclxuICAgICAgICBjb25zdCBmb250U2l6ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtc2l6ZS13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgbGJsRm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGJsRm9udFNpemUuaW5uZXJUZXh0ID0gXCJUYWlsbGVcIjtcclxuICAgICAgICBsYmxGb250U2l6ZS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNHB4XCI7XHJcbiAgICAgICAgZm9udFNpemVXcmFwcGVyLmFwcGVuZENoaWxkKGxibEZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLnRpdGxlID0gXCJUYWlsbGUgZGUgcG9saWNlXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDg7IHMgPD0gMjQ7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHQudmFsdWUgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udFNpemUgPT09IHMpIG9wdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGVjdEZvbnRTaXplLmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHBhcnNlSW50KHNlbGVjdEZvbnRTaXplLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIHJvdy5mb250U2l6ZSA9IHM7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRTaXplID0gcyArIFwicHhcIjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnRTaXplOiBzIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBmb250U2l6ZTogcyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250U2l6ZSk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGZvbnRTaXplV3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIFNFUEFSQVRFVVJcclxuICAgICAgICBjb25zdCBzZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZXAzLmNsYXNzTmFtZSA9IFwic2VwYXJhdG9yXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKHNlcDMpO1xyXG5cclxuICAgICAgICAvLyBQT0xJQ0UgKGZvbnQtZmFtaWx5KVxyXG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtZmFtaWx5LXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBsYmxGb250RmFtaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxibEZvbnRGYW1pbHkuaW5uZXJUZXh0ID0gXCJQb2xpY2VcIjtcclxuICAgICAgICBsYmxGb250RmFtaWx5LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI0cHhcIjtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChsYmxGb250RmFtaWx5KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udEZhbWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0Rm9udEZhbWlseS50aXRsZSA9IFwiUG9saWNlXCI7XHJcbiAgICAgICAgY29uc3QgZm9udHMgPSBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJTZWdvZSBVSVwiLCB2YWx1ZTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkFyaWFsXCIsIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNhbGlicmlcIiwgdmFsdWU6IFwiQ2FsaWJyaSwgc2Fucy1zZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgdmFsdWU6IFwiJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvdXJpZXIgTmV3XCIsIHZhbHVlOiBcIidDb3VyaWVyIE5ldycsIG1vbm9zcGFjZVwiIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGYudmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBmLm5hbWU7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udCA9PT0gZi52YWx1ZSkgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VsZWN0Rm9udEZhbWlseS5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdEZvbnRGYW1pbHkub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBmID0gc2VsZWN0Rm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICAgICAgcm93LmZvbnQgPSBmO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5mb250RmFtaWx5ID0gZjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnQ6IGYgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGZvbnRGYW1pbHk6IGYgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250RmFtaWx5KTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoZm9udEZhbWlseVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBCT1VUT04gRkVSTUVSXHJcbiAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bkNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnRuXCI7XHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogVXRpbGlzZXIgdGV4dENvbnRlbnRcclxuICAgICAgICBidG5DbG9zZS50ZXh0Q29udGVudCA9IFwi4pyWXCI7XHJcbiAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG4gICAgfVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBWaXN1YWwgfSBmcm9tIFwiLi4vLi4vc3JjL3Zpc3VhbFwiO1xuaW1wb3J0IHBvd2VyYmlWaXN1YWxzQXBpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XG5pbXBvcnQgSVZpc3VhbFBsdWdpbiA9IHBvd2VyYmlWaXN1YWxzQXBpLnZpc3VhbHMucGx1Z2lucy5JVmlzdWFsUGx1Z2luO1xuaW1wb3J0IFZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucyA9IHBvd2VyYmlWaXN1YWxzQXBpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcbmltcG9ydCBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5EaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnM7XG52YXIgcG93ZXJiaUtleTogYW55ID0gXCJwb3dlcmJpXCI7XG52YXIgcG93ZXJiaTogYW55ID0gd2luZG93W3Bvd2VyYmlLZXldO1xudmFyIG1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHOiBJVmlzdWFsUGx1Z2luID0ge1xuICAgIG5hbWU6ICdtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRycsXG4gICAgZGlzcGxheU5hbWU6ICdtb25UYWJsZWF1UGVyc28nLFxuICAgIGNsYXNzOiAnVmlzdWFsJyxcbiAgICBhcGlWZXJzaW9uOiAnNS4zLjAnLFxuICAgIGNyZWF0ZTogKG9wdGlvbnM/OiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpID0+IHtcbiAgICAgICAgaWYgKFZpc3VhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWaXN1YWwob3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgJ1Zpc3VhbCBpbnN0YW5jZSBub3QgZm91bmQnO1xuICAgIH0sXG4gICAgY3JlYXRlTW9kYWxEaWFsb2c6IChkaWFsb2dJZDogc3RyaW5nLCBvcHRpb25zOiBEaWFsb2dDb25zdHJ1Y3Rvck9wdGlvbnMsIGluaXRpYWxTdGF0ZTogb2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZ2lzdHJ5ID0gKDxhbnk+Z2xvYmFsVGhpcykuZGlhbG9nUmVnaXN0cnk7XG4gICAgICAgIGlmIChkaWFsb2dJZCBpbiBkaWFsb2dSZWdpc3RyeSkge1xuICAgICAgICAgICAgbmV3IGRpYWxvZ1JlZ2lzdHJ5W2RpYWxvZ0lkXShvcHRpb25zLCBpbml0aWFsU3RhdGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjdXN0b206IHRydWVcbn07XG5pZiAodHlwZW9mIHBvd2VyYmkgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBwb3dlcmJpLnZpc3VhbHMgPSBwb3dlcmJpLnZpc3VhbHMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgPSBwb3dlcmJpLnZpc3VhbHMucGx1Z2lucyB8fCB7fTtcbiAgICBwb3dlcmJpLnZpc3VhbHMucGx1Z2luc1tcIm1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHXCJdID0gbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUc7XG59XG5leHBvcnQgZGVmYXVsdCBtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRzsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9