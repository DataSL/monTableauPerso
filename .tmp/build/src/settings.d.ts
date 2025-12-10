import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import powerbi from "powerbi-visuals-api";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
export declare class TitresColonnesSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    slices: Array<FormattingSettingsSlice>;
    constructor();
}
export declare class SelectionMenuSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    ligneActive: formattingSettings.TextInput;
    slices: Array<FormattingSettingsSlice>;
}
export declare class StyleLigneSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    selector: powerbi.data.Selector;
    columnIndex: formattingSettings.NumUpDown;
    ordreTri: formattingSettings.NumUpDown;
    marginTop: formattingSettings.NumUpDown;
    marginBottom: formattingSettings.NumUpDown;
    marginColor: formattingSettings.ColorPicker;
    isHidden: formattingSettings.ToggleSwitch;
    isHeader: formattingSettings.ToggleSwitch;
    customLabel: formattingSettings.TextInput;
    customAmount: formattingSettings.TextInput;
    fontSize: formattingSettings.NumUpDown;
    fontFamily: formattingSettings.FontPicker;
    bgLabel: formattingSettings.ColorPicker;
    fillLabel: formattingSettings.ColorPicker;
    boldLabel: formattingSettings.ToggleSwitch;
    italicLabel: formattingSettings.ToggleSwitch;
    bgAmount: formattingSettings.ColorPicker;
    fillAmount: formattingSettings.ColorPicker;
    boldAmount: formattingSettings.ToggleSwitch;
    borderWidth: formattingSettings.NumUpDown;
    borderColor: formattingSettings.ColorPicker;
    slices: Array<FormattingSettingsSlice>;
}
export declare class ManualLineSettings extends FormattingSettingsCard {
    text: formattingSettings.TextInput;
    show: formattingSettings.ToggleSwitch;
    col: formattingSettings.NumUpDown;
    pos: formattingSettings.NumUpDown;
    isHeader: formattingSettings.ToggleSwitch;
    bgColor: formattingSettings.ColorPicker;
    textColor: formattingSettings.ColorPicker;
    marginTop: formattingSettings.NumUpDown;
    fontSize: formattingSettings.NumUpDown;
    bold: formattingSettings.ToggleSwitch;
    italic: formattingSettings.ToggleSwitch;
    borderWidth: formattingSettings.NumUpDown;
    borderColor: formattingSettings.ColorPicker;
    slices: Array<FormattingSettingsSlice>;
}
export declare class TableBordersSettings extends FormattingSettingsCard {
    name: string;
    displayName: string;
    borderWidth: formattingSettings.NumUpDown;
    borderColor: formattingSettings.ColorPicker;
    borderStyle: formattingSettings.ItemDropdown;
    borderRadius: formattingSettings.NumUpDown;
    slices: Array<FormattingSettingsSlice>;
}
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    titresColonnes: TitresColonnesSettings;
    selectionMenu: SelectionMenuSettings;
    styleLigne: StyleLigneSettings;
    tableBorders: TableBordersSettings;
    cards: FormattingSettingsCard[];
}
