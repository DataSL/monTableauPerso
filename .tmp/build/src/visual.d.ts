import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
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
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private renderTableContent;
    private showToolbar;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
}
