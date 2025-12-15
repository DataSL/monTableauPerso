import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private host;
    private divContainer;
    private flexContainer;
    private allRowsData;
    private categoricalData;
    private currentSelectedLabel;
    private columnTitles;
    private metadata;
    private toolbar;
    private pendingChanges;
    private manualLineKeys;
    private areActionButtonsVisible;
    private selectionManager;
    private tableBorderWidth;
    private tableBorderColor;
    private tableBorderStyle;
    private tableBorderRadius;
    private formattingSettings;
    private formattingSettingsService;
    private persistStyle;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    /**
     * NOUVELLE MÉTHODE OBLIGATOIRE API 5.1+
     * Remplace enumerateObjectInstances pour la certification Power BI
     */
    getFormattingModel(): powerbi.visuals.FormattingModel;
    private renderTableContent;
    private showToolbar;
}
