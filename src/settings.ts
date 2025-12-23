
"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import powerbi from "powerbi-visuals-api";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

// =========================================================
// AFFICHAGE DU BOUTON D'ACTION
// =========================================================
export class ActionButtonSettings extends FormattingSettingsCard {
    name: string = "actionButton";
    displayName: string = "Bouton d'action";

    show = new formattingSettings.ToggleSwitch({
        name: "show",
        displayName: "Afficher le bouton d'action",
        value: true
    });

    slices: Array<FormattingSettingsSlice> = [this.show];
}


// =========================================================
// FOND DU CONTENEUR TABLEAU
// =========================================================
export class BackgroundContainerSettings extends FormattingSettingsCard {
    name: string = "backgroundContainer";
    displayName: string = "Fond du conteneur tableau";

    color = new formattingSettings.ColorPicker({
        name: "color",
        displayName: "Couleur de fond",
        value: { value: "#fff" }
    });

    slices: Array<FormattingSettingsSlice> = [this.color];
}

// =========================================================
// 0. TITRES COLONNES (Génération dynamique)
// =========================================================
export class TitresColonnesSettings extends FormattingSettingsCard {
    name: string = "titresColonnes";
    displayName: string = "0. TITRES COLONNES";
    
    slices: Array<FormattingSettingsSlice> = [];

    constructor() {
        super();
        for (let i = 1; i <= 20; i++) {
            this.slices.push(new formattingSettings.TextInput({
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
export class SelectionMenuSettings extends FormattingSettingsCard {
    name: string = "selectionMenu";
    displayName: string = "1. SÉLECTION (Excel)";

    ligneActive = new formattingSettings.TextInput({
        name: "ligneActive",
        displayName: "Nom exact de la ligne active",
        value: "",
        placeholder: "Ex: Chiffre d'affaires" // CORRECTION
    });

    slices: Array<FormattingSettingsSlice> = [this.ligneActive];
}

// =========================================================
// 2. STYLE DE LIGNE
// =========================================================
export class StyleLigneSettings extends FormattingSettingsCard {
    name: string = "styleLigne";
    displayName: string = "2. PERSONNALISATION (Excel)";
    
    // CORRECTION: Ajout explicite du selector pour éviter l'erreur TS
    selector: powerbi.data.Selector; 

    // Positionnement
    columnIndex = new formattingSettings.NumUpDown({
        name: "columnIndex", displayName: "N° Colonne", value: 1
    });
    ordreTri = new formattingSettings.NumUpDown({
        name: "ordreTri", displayName: "Position", value: 0
    });

    // Marges
    marginTop = new formattingSettings.NumUpDown({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    marginBottom = new formattingSettings.NumUpDown({
        name: "marginBottom", displayName: "Marge Bas", value: 0
    });
    marginColor = new formattingSettings.ColorPicker({
        name: "marginColor", displayName: "Couleur Marge", value: { value: "transparent" }
    });

    // Visibilité / Header
    isHidden = new formattingSettings.ToggleSwitch({
        name: "isHidden", displayName: "MASQUER", value: false
    });
    isHeader = new formattingSettings.ToggleSwitch({
        name: "isHeader", displayName: "Mode Titre", value: false
    });

    // Contenu
    customLabel = new formattingSettings.TextInput({
        name: "customLabel", displayName: "Renommer", value: "",
        placeholder: "Nouveau nom..." // CORRECTION
    });
    customAmount = new formattingSettings.TextInput({
        name: "customAmount", displayName: "Remplacer Montant", value: "",
        placeholder: "Valeur ou vide..." // CORRECTION
    });

    // Police
    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize", displayName: "Taille", value: 12
    });
    fontFamily = new formattingSettings.FontPicker({
        name: "fontFamily", displayName: "Police", value: "'Segoe UI', sans-serif"
    });

    // Style Libellé
    bgLabel = new formattingSettings.ColorPicker({
        name: "bgLabel", displayName: "Fond Libellé", value: { value: "transparent" }
    });
    fillLabel = new formattingSettings.ColorPicker({
        name: "fillLabel", displayName: "Texte Libellé", value: { value: "black" }
    });
    boldLabel = new formattingSettings.ToggleSwitch({
        name: "boldLabel", displayName: "Gras (L)", value: false
    });
    italicLabel = new formattingSettings.ToggleSwitch({
        name: "italicLabel", displayName: "Italique (L)", value: false
    });

    // Style Prix
    bgAmount = new formattingSettings.ColorPicker({
        name: "bgAmount", displayName: "Fond Prix", value: { value: "transparent" }
    });
    fillAmount = new formattingSettings.ColorPicker({
        name: "fillAmount", displayName: "Texte Prix", value: { value: "black" }
    });
    boldAmount = new formattingSettings.ToggleSwitch({
        name: "boldAmount", displayName: "Gras (P)", value: false
    });

    // Bordures spécifiques
    borderWidth = new formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new formattingSettings.ColorPicker({
        name: "borderColor", displayName: "Couleur Bordure", value: { value: "#eee" }
    });

    slices: Array<FormattingSettingsSlice> = [
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
export class ManualLineSettings extends FormattingSettingsCard {
    text = new formattingSettings.TextInput({
        name: "text", displayName: "Texte", value: "Nouvelle Ligne",
        placeholder: "Libellé..." // CORRECTION
    });
    show = new formattingSettings.ToggleSwitch({
        name: "show", displayName: "Afficher", value: false
    });
    col = new formattingSettings.NumUpDown({
        name: "col", displayName: "Colonne", value: 1
    });
    pos = new formattingSettings.NumUpDown({
        name: "pos", displayName: "Position", value: 0
    });
    isHeader = new formattingSettings.ToggleSwitch({
        name: "isHeader", displayName: "Titre", value: false
    });
    bgColor = new formattingSettings.ColorPicker({
        name: "bgColor", displayName: "Fond", value: { value: "transparent" }
    });
    textColor = new formattingSettings.ColorPicker({
        name: "textColor", displayName: "Texte", value: { value: "black" }
    });
    marginTop = new formattingSettings.NumUpDown({
        name: "marginTop", displayName: "Marge Haut", value: 0
    });
    fontSize = new formattingSettings.NumUpDown({
        name: "fontSize", displayName: "Taille", value: 12
    });
    bold = new formattingSettings.ToggleSwitch({
        name: "bold", displayName: "Gras", value: false
    });
    italic = new formattingSettings.ToggleSwitch({
        name: "italic", displayName: "Italique", value: false
    });
    borderWidth = new formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur Bordure", value: 1
    });
    borderColor = new formattingSettings.ColorPicker({
        name: "borderColor", displayName: "Couleur Bordure", value: { value: "#eee" }
    });

    slices: Array<FormattingSettingsSlice> = [
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
export class TableBordersSettings extends FormattingSettingsCard {
    name: string = "tableBorders";
    displayName: string = "🔲 BORDURES TABLEAU";

    borderWidth = new formattingSettings.NumUpDown({
        name: "borderWidth", displayName: "Largeur", value: 1
    });
    borderColor = new formattingSettings.ColorPicker({
        name: "borderColor", displayName: "Couleur", value: { value: "rgba(0,0,0,0.25)" }
    });
    borderStyle = new formattingSettings.ItemDropdown({
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
    borderRadius = new formattingSettings.NumUpDown({
        name: "borderRadius", displayName: "Arrondi", value: 8
    });

    slices: Array<FormattingSettingsSlice> = [
        this.borderWidth, this.borderColor, this.borderStyle, this.borderRadius
    ];
}

// =========================================================
// MODÈLE PRINCIPAL
// =========================================================
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    titresColonnes = new TitresColonnesSettings();
    selectionMenu = new SelectionMenuSettings();
    styleLigne = new StyleLigneSettings();
    tableBorders = new TableBordersSettings();
    backgroundContainer = new BackgroundContainerSettings();
    actionButton = new ActionButtonSettings();

    cards: FormattingSettingsCard[] = [
        this.titresColonnes,
        this.selectionMenu,
        this.styleLigne,
        this.tableBorders,
        this.backgroundContainer,
        this.actionButton
    ];
}