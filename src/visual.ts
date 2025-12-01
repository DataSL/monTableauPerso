"use strict";

import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import IVisualHost = powerbi.extensibility.visual.IVisualHost;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;

import "../style/visual.less";

interface RowData {
    originalName: string;
    label: string;      
    amount: string;
    columnIndex: number; 
    sortIndex: number;
    
    marginBottom: number;
    marginTop: number;
    marginColor: string;
    isHidden: boolean;
    isHeader: boolean;
    
    isVirtual: boolean; 

    font: string; fontSize: number;
    bgLabel: string; colorLabel: string; boldLabel: boolean; italicLabel: boolean;
    bgAmount: string; colorAmount: string; boldAmount: boolean;
    
    // Ajout customAmount pour être complet
    customAmount: string;
    customLabel?: string;
}

export class Visual implements IVisual {
    private target: HTMLElement;
    private host: IVisualHost;
    private divContainer: HTMLDivElement;
    private flexContainer: HTMLDivElement;
    
    private allRowsData: RowData[] = [];
    private categoricalData: any;
    private currentSelectedLabel: string = ""; 
    private columnTitles: string[] = [];
    private metadata: any;
    private toolbar: HTMLDivElement;
    
    // Stocker les changements en attente pour éviter le scintillement
    // On utilise 'any' pour permettre de stocker n'importe quelle propriété de RowData
    private pendingChanges: Map<string, any> = new Map();

    constructor(options: VisualConstructorOptions) {
        this.host = options.host;
        this.target = options.element;
        this.divContainer = document.createElement("div");
        this.divContainer.className = "scroll-wrapper";
        this.target.appendChild(this.divContainer);
        this.flexContainer = document.createElement("div");
        this.flexContainer.className = "accounting-container";
        this.divContainer.appendChild(this.flexContainer);

        // Initialiser la toolbar (cachée par défaut)
        this.toolbar = document.createElement("div");
        this.toolbar.className = "floating-toolbar";
        this.toolbar.style.display = "none";
        document.body.appendChild(this.toolbar); // Append to body to float over everything
        
        // Fermer la toolbar si on clique ailleurs
        document.addEventListener("mousedown", (e) => {
            if (this.toolbar.style.display !== "none" && 
                !this.toolbar.contains(e.target as Node)) {
                this.toolbar.style.display = "none";
            }
        });
    }

    public update(options: VisualUpdateOptions) {
        this.flexContainer.innerHTML = "";
        this.allRowsData = [];

        const dataView = options.dataViews[0];
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;

        // 1. TITRES - Initialisation dynamique
        this.columnTitles = [];
        if (this.metadata && this.metadata.objects && this.metadata.objects["titresColonnes"]) {
            const t = this.metadata.objects["titresColonnes"];
            // Charger tous les titres disponibles
            for (let i = 1; i <= 20; i++) {
                const key = "titre" + i;
                if (t[key]) {
                    this.columnTitles[i-1] = t[key] as string;
                }
            }
        }

        // 2. DONNÉES EXCEL
        let maxColumnIndexUsed = 1;
        
        if (this.categoricalData) {
            const categories = this.categoricalData.categories[0];
            const values = this.categoricalData.values ? this.categoricalData.values[0] : null;

            if (this.metadata && this.metadata.objects && this.metadata.objects["selectionMenu"]) {
                this.currentSelectedLabel = this.metadata.objects["selectionMenu"]["ligneActive"] as string;
            }
            if (!this.currentSelectedLabel && categories.values.length > 0) {
                this.currentSelectedLabel = categories.values[0].toString();
            }

            categories.values.forEach((catValue, index) => {
                const originalName = catValue.toString();
                let row: RowData = {
                    originalName: originalName,
                    label: originalName,
                    amount: values ? values.values[index]?.toString() : "",
                    columnIndex: 1, sortIndex: index * 10,
                    marginBottom: 0, marginTop: 0, isHidden: false, marginColor: "transparent",
                    isHeader: false, isVirtual: false, customAmount: "",
                    font: "'Segoe UI', sans-serif", fontSize: 12,
                    bgLabel: "transparent", colorLabel: "black", boldLabel: false, italicLabel: false,
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false
                };

                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        console.log("🔷 LOADING style for", originalName, ":", JSON.stringify(style));
                        if (style["columnIndex"]) row.columnIndex = style["columnIndex"] as number;
                        if (row.columnIndex < 1) row.columnIndex = 1;
                        if (style["ordreTri"] !== undefined) row.sortIndex = style["ordreTri"] as number;
                        
                        if (style["marginBottom"]) row.marginBottom = style["marginBottom"] as number;
                        if (style["marginTop"]) row.marginTop = style["marginTop"] as number;
                        if (style["isHidden"]) row.isHidden = style["isHidden"] as boolean;
                        if (style["marginColor"]) row.marginColor = (style["marginColor"] as any).solid.color;
                        if (style["customLabel"]) row.label = style["customLabel"] as string;
                        if (style["customAmount"]) row.customAmount = style["customAmount"] as string;
                        if (style["isHeader"]) row.isHeader = style["isHeader"] as boolean;
                        if (style["fontSize"]) row.fontSize = style["fontSize"] as number;
                        if (style["fontFamily"]) row.font = style["fontFamily"] as string;
                        if (style["bgLabel"]) row.bgLabel = (style["bgLabel"] as any).solid.color;
                        if (style["fillLabel"]) row.colorLabel = (style["fillLabel"] as any).solid.color;
                        if (style["boldLabel"] !== undefined) row.boldLabel = style["boldLabel"] as boolean;
                        if (style["italicLabel"] !== undefined) row.italicLabel = style["italicLabel"] as boolean;
                        if (style["bgAmount"]) row.bgAmount = (style["bgAmount"] as any).solid.color;
                        if (style["fillAmount"]) row.colorAmount = (style["fillAmount"] as any).solid.color;
                        if (style["boldAmount"] !== undefined) row.boldAmount = style["boldAmount"] as boolean;
                    }
                }
                
                // Appliquer les changements en attente (optimiste)
                if (this.pendingChanges.has(originalName)) {
                    const pending = this.pendingChanges.get(originalName);
                    console.log("🟡 PENDING CHANGES for", originalName, ":", JSON.stringify(pending));
                    // Si le changement est récent (< 30 secondes)
                    if (Date.now() - pending.timestamp < 30000) {
                        let allMatched = true;
                        
                        // Parcourir toutes les propriétés en attente (sauf timestamp)
                        Object.keys(pending).forEach(key => {
                            if (key === "timestamp") return;
                            
                            // Comparaison souple pour gérer les types (ex: number vs string)
                            // Pour les nombres flottants (sortIndex), on utilise une tolérance
                            let match = false;
                            if (typeof pending[key] === 'number' && typeof row[key] === 'number') {
                                match = Math.abs(pending[key] - row[key]) < 0.01;
                            } else {
                                match = pending[key] === row[key];
                            }
                            
                            if (match) {
                                // Power BI a rattrapé cette propriété
                            } else {
                                // Power BI n'est pas encore à jour, on force la valeur locale
                                row[key] = pending[key];
                                allMatched = false;
                            }
                        });
                        
                        if (allMatched) {
                            this.pendingChanges.delete(originalName);
                        }
                    } else {
                        // Trop vieux, on supprime
                        this.pendingChanges.delete(originalName);
                    }
                }
                
                if (row.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = row.columnIndex;
                this.allRowsData.push(row);
            });
        }

        // 3. LIGNES MANUELLES
        const manualRows = ["ligneA", "ligneB", "ligneC", "ligneD", "ligneE", "ligneF"];
        
        manualRows.forEach((key) => {
            if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                const s = this.metadata.objects[key];
                if (s["show"] === true) {
                    let txt = s["text"] ? s["text"] as string : "Ligne Manuelle";
                    let col = s["col"] ? s["col"] as number : 1;
                    let pos = s["pos"] ? s["pos"] as number : 0;
                    let isHead = s["isHeader"] ? s["isHeader"] as boolean : false;
                    let bg = s["bgColor"] ? (s["bgColor"] as any).solid.color : "transparent";
                    let color = s["textColor"] ? (s["textColor"] as any).solid.color : "black";
                    let mt = s["marginTop"] ? s["marginTop"] as number : 0;
                    let fs = s["fontSize"] ? s["fontSize"] as number : 12;
                    let bo = s["bold"] ? s["bold"] as boolean : false;
                    let it = s["italic"] ? s["italic"] as boolean : false;

                    let vRow: RowData = {
                        originalName: key,
                        label: txt, amount: "", 
                        columnIndex: col, sortIndex: pos,
                        marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                        isHeader: isHead, isVirtual: true, customAmount: "",
                        font: "'Segoe UI', sans-serif", fontSize: fs,
                        bgLabel: bg, colorLabel: color, boldLabel: bo, italicLabel: it,
                        bgAmount: bg, colorAmount: color, boldAmount: bo
                    };
                    
                    if (vRow.columnIndex > maxColumnIndexUsed) maxColumnIndexUsed = vRow.columnIndex;
                    this.allRowsData.push(vRow);
                }
            }
        });

        // 4. RENDU
        // Déterminer le nombre maximum de colonnes à afficher (max entre données et titres)
        let maxColumnsToShow = Math.max(maxColumnIndexUsed, this.columnTitles.length);
        
        for (let i = 1; i <= maxColumnsToShow; i++) {
            const colDiv = document.createElement("div");
            colDiv.className = "dynamic-column"; 
            const table = document.createElement("table");
            colDiv.appendChild(table);

            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
            const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
            // On passe l'index de colonne (1-based) pour le renommage et categories pour le drag&drop
            const categories = this.categoricalData ? this.categoricalData.categories[0] : null;
            this.renderTableContent(table, colTitle, colRows, i, categories);
            this.flexContainer.appendChild(colDiv);
        }
        
        // Bouton "Ajouter une colonne"
        const addColumnDiv = document.createElement("button");
        addColumnDiv.type = "button";
        addColumnDiv.className = "add-column-button";
        addColumnDiv.style.display = "flex";
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
        addColumnDiv.innerHTML = "➕";
        addColumnDiv.title = "Ajouter une nouvelle colonne";
        
        addColumnDiv.onmouseover = () => { 
            addColumnDiv.style.opacity = "1"; 
            addColumnDiv.style.borderColor = "#999";
        };
        addColumnDiv.onmouseout = () => { 
            addColumnDiv.style.opacity = "0.5"; 
            addColumnDiv.style.borderColor = "#ccc";
        };
        
        const handleAddColumn = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            const newIndex = this.columnTitles.length + 1;
            const newTitle = "COLONNE " + newIndex;
            
            console.log("Ajout colonne:", newIndex, newTitle); // Debug
            
            this.host.persistProperties({
                merge: [{
                    objectName: "titresColonnes",
                    selector: null,
                    properties: {
                        ["titre" + newIndex]: newTitle
                    }
                }]
            });
        };
        
        addColumnDiv.addEventListener('click', handleAddColumn, true);
        addColumnDiv.addEventListener('mousedown', (e) => { 
            e.preventDefault();
            e.stopPropagation(); 
        }, true);
        addColumnDiv.addEventListener('mouseup', (e) => { 
            e.preventDefault();
            e.stopPropagation(); 
        }, true);
        
        this.flexContainer.appendChild(addColumnDiv);
    }

    private renderTableContent(targetTable: HTMLTableElement, title: string, rows: RowData[], colIndex: number, categories: any) {
        rows.sort((a, b) => a.sortIndex - b.sortIndex);
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        const th = document.createElement("th");
        th.colSpan = 2;
        th.style.position = "relative";
        th.style.paddingRight = "30px";
        
        // Texte du titre (éditable)
        const titleSpan = document.createElement("span");
        titleSpan.innerText = title;
        titleSpan.contentEditable = "false";
        titleSpan.style.outline = "none";
        titleSpan.style.display = "inline-block";
        titleSpan.style.minWidth = "100px";
        th.appendChild(titleSpan);
        
        // Bouton d'édition
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
        
        const handleEdit = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Activer l'édition
            titleSpan.contentEditable = "true";
            titleSpan.style.backgroundColor = "#fff3cd";
            titleSpan.style.color = "#000000";
            titleSpan.style.padding = "2px 4px";
            titleSpan.style.borderRadius = "3px";
            titleSpan.focus();
            
            // Sélectionner tout le texte
            const range = document.createRange();
            range.selectNodeContents(titleSpan);
            const selection = window.getSelection();
            selection?.removeAllRanges();
            selection?.addRange(range);
            
            // Changer l'icône en validation
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
                        properties: {
                            ["titre" + colIndex]: newTitle
                        }
                    }]
                });
            }
            
            // Désactiver l'édition
            titleSpan.contentEditable = "false";
            titleSpan.style.backgroundColor = "transparent";
            titleSpan.style.color = "";
            titleSpan.style.padding = "0";
            editBtn.innerText = "✏️";
            editBtn.style.color = "";
        };
        
        // Sauvegarder avec Enter
        titleSpan.addEventListener('keydown', (e: KeyboardEvent) => {
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
        
        // Sauvegarder en perdant le focus
        titleSpan.addEventListener('blur', () => {
            if (titleSpan.contentEditable === "true") {
                saveEdit();
            }
        });
        
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            if (titleSpan.contentEditable === "true") {
                saveEdit();
            } else {
                handleEdit(e);
            }
        }, true);
        
        editBtn.addEventListener('mousedown', (e) => { e.stopPropagation(); }, true);
        editBtn.addEventListener('mouseup', (e) => { e.stopPropagation(); }, true);
        
        th.appendChild(editBtn);
        trHead.appendChild(th); thead.appendChild(trHead); targetTable.appendChild(thead);

        const tbody = document.createElement("tbody");
        rows.forEach(row => {
            if (row.isHidden) return; 

            if (row.marginTop > 0) {
                const trSp = document.createElement("tr");
                trSp.style.height = row.marginTop + "px";
                const tdSp = document.createElement("td");
                tdSp.colSpan = 2; tdSp.style.backgroundColor = row.marginColor; tdSp.style.border = "none";
                trSp.appendChild(tdSp); tbody.appendChild(trSp);
            }

            const tr = document.createElement("tr");
            
            // Drag & Drop pour déplacer les lignes (Data et Virtuelles)
            tr.draggable = true;
            tr.style.cursor = "move";
            
            tr.ondragstart = (e: DragEvent) => {
                e.stopPropagation();
                if (e.dataTransfer) {
                    e.dataTransfer.effectAllowed = "move";
                    
                    // Utiliser les données actuelles de allRowsData (avec mises à jour locales)
                    const currentRow = this.allRowsData.find(r => r.originalName === row.originalName);
                    const dragData = {
                        label: row.label,
                        originalName: row.originalName,
                        columnIndex: currentRow ? currentRow.columnIndex : row.columnIndex,
                        sortIndex: currentRow ? currentRow.sortIndex : row.sortIndex,
                        isVirtual: row.isVirtual
                    };
                    console.log("🔵 DRAG START:", dragData);
                    e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
                    tr.style.opacity = "0.5";
                }
            };
            
            tr.ondragend = (e: DragEvent) => {
                console.log("🔵 DRAG END");
                tr.style.opacity = "1";
            };

            // Autoriser le drop sur TOUTES les lignes
            tr.ondragover = (e: DragEvent) => {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = "move";
                }
                tr.style.borderTop = "2px solid #007acc";
            };
            
            tr.ondragleave = (e: DragEvent) => {
                tr.style.borderTop = "";
            };
            
            tr.ondrop = (e: DragEvent) => {
                e.preventDefault();
                e.stopPropagation();
                tr.style.borderTop = "";
                
                console.log("🟢 DROP EVENT - Target:", row.label, "Col:", colIndex, "SortIndex:", row.sortIndex);
                
                if (e.dataTransfer) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedLabel = data.label;
                    const draggedOriginalName = data.originalName || data.label;
                    const isVirtual = data.isVirtual;
                    const targetLabel = row.label;
                    const targetOriginalName = row.originalName;
                    
                    if (draggedOriginalName !== targetOriginalName) {
                        
                        // CALCUL DE LA NOUVELLE POSITION (INSERTION AVANT)
                        const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                        let prevSortIndex = -1000;
                        if (targetRowIndex > 0) {
                            prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                        } else {
                            prevSortIndex = row.sortIndex - 20;
                        }
                        let newSortIndex = (prevSortIndex + row.sortIndex) / 2;
                        console.log(`🟢 INSERTION: Entre ${prevSortIndex} et ${row.sortIndex} -> ${newSortIndex}`);

                        // CAS 1: LIGNE MANUELLE (Ligne A, B, etc.)
                        if (isVirtual) {
                            const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                            if (currentDraggedRow) {
                                // Mettre à jour l'affichage local (optimiste)
                                currentDraggedRow.columnIndex = colIndex;
                                currentDraggedRow.sortIndex = newSortIndex;
                                
                                this.pendingChanges.set(draggedOriginalName, {
                                    columnIndex: colIndex,
                                    sortIndex: newSortIndex,
                                    timestamp: Date.now()
                                });

                                // Persister pour Ligne Manuelle (propriétés 'col' et 'pos')
                                this.host.persistProperties({
                                    merge: [{
                                        objectName: draggedOriginalName, // ex: "ligneA"
                                        selector: null,
                                        properties: {
                                            col: colIndex,
                                            pos: newSortIndex
                                        }
                                    }]
                                });
                                
                                // Reconstruire l'affichage
                                this.flexContainer.innerHTML = "";
                                let maxColUsed = 1;
                                this.allRowsData.forEach(r => {
                                    if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                                });
                                let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                
                                for (let i = 1; i <= maxColumnsToShow; i++) {
                                    const colDiv = document.createElement("div");
                                    colDiv.className = "dynamic-column"; 
                                    const table = document.createElement("table");
                                    colDiv.appendChild(table);

                                    const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                    const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                                    this.renderTableContent(table, colTitle, colRows, i, categories);
                                    this.flexContainer.appendChild(colDiv);
                                }
                                
                                const addBtn = document.createElement("button");
                                addBtn.type = "button";
                                addBtn.className = "add-column-button";
                                addBtn.style.display = "flex";
                                addBtn.style.alignItems = "center";
                                addBtn.style.justifyContent = "center";
                                addBtn.style.minWidth = "40px";
                                addBtn.style.cursor = "pointer";
                                addBtn.style.opacity = "0.5";
                                addBtn.style.transition = "opacity 0.2s";
                                addBtn.style.fontSize = "18px";
                                addBtn.style.color = "#666";
                                addBtn.style.border = "2px dashed #ccc";
                                addBtn.style.borderRadius = "6px";
                                addBtn.style.margin = "10px";
                                addBtn.style.padding = "12px";
                                addBtn.style.background = "transparent";
                                addBtn.style.zIndex = "1000";
                                addBtn.innerHTML = "➕";
                                addBtn.title = "Ajouter une nouvelle colonne";
                                this.flexContainer.appendChild(addBtn);
                            }
                        }
                        // CAS 2: LIGNE DE DONNÉES (Excel)
                        else if (categories) {
                            const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                            
                            if (draggedIndex !== -1) {
                                const selectionId = this.host.createSelectionIdBuilder()
                                    .withCategory(categories, draggedIndex)
                                    .createSelectionId();
                                
                                // Récupérer les props existantes depuis allRowsData
                                const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                console.log("🔵 DRAG currentDraggedRow:", currentDraggedRow);
                                
                                let existingProps: any = {
                                    marginBottom: 0, marginTop: 0, isHidden: false, 
                                    marginColor: {solid:{color:"transparent"}},
                                    customLabel: "", customAmount: "", isHeader: false, 
                                    fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                                    bgLabel: {solid:{color:"transparent"}}, 
                                    fillLabel: {solid:{color:"black"}}, 
                                    italicLabel: false, boldLabel: false,
                                    bgAmount: {solid:{color:"transparent"}}, 
                                    fillAmount: {solid:{color:"black"}}, 
                                    boldAmount: false
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
                                } else if (categories.objects && categories.objects[draggedIndex]) {
                                    const style = categories.objects[draggedIndex]["styleLigne"];
                                    if (style) {
                                        Object.keys(style).forEach(key => {
                                            if (key !== "columnIndex" && key !== "ordreTri") {
                                                existingProps[key] = style[key];
                                            }
                                        });
                                    }
                                }
                                
                                console.log("🔵 DRAG existingProps:", JSON.stringify(existingProps));
                                
                                let instancesToPersist: any;
                                try {
                                    // Ajouter les nouvelles valeurs
                                    existingProps.columnIndex = colIndex;
                                    existingProps.ordreTri = newSortIndex;
                                    
                                    console.log("🔵 DRAG Final props to persist:", JSON.stringify(existingProps));
                                    
                                    // Mettre à jour avec merge
                                    instancesToPersist = {
                                        merge: [{
                                            objectName: "styleLigne",
                                            selector: selectionId.getSelector(),
                                            properties: existingProps
                                        }]
                                    };
                                    
                                    console.log("🟢 PERSISTING (drag):", JSON.stringify(instancesToPersist));
                                    
                                    // ⚠️ IMPORTANT: Appeler persistProperties AVANT de reconstruire le DOM
                                    // sinon le handler ondrop est détruit avant de pouvoir persister !
                                    this.host.persistProperties(instancesToPersist);
                                    console.log("✅ persistProperties called successfully (drop on row)");
                                } catch (err) {
                                    console.error("❌ ERROR during persist:", err);
                                }
                                
                                // Mettre à jour l'affichage local immédiatement (optimiste)
                                if (currentDraggedRow) {
                                    currentDraggedRow.columnIndex = colIndex;
                                    currentDraggedRow.sortIndex = newSortIndex;
                                    
                                    // IMPORTANT: Sauvegarder TOUTES les propriétés dans pendingChanges
                                    this.pendingChanges.set(draggedOriginalName, {
                                        columnIndex: colIndex,
                                        sortIndex: newSortIndex,
                                        marginBottom: currentDraggedRow.marginBottom,
                                        marginTop: currentDraggedRow.marginTop,
                                        isHidden: currentDraggedRow.isHidden,
                                        marginColor: currentDraggedRow.marginColor,
                                        customLabel: currentDraggedRow.customLabel,
                                        customAmount: currentDraggedRow.customAmount,
                                        isHeader: currentDraggedRow.isHeader,
                                        fontSize: currentDraggedRow.fontSize,
                                        font: currentDraggedRow.font,
                                        bgLabel: currentDraggedRow.bgLabel,
                                        colorLabel: currentDraggedRow.colorLabel,
                                        italicLabel: currentDraggedRow.italicLabel,
                                        boldLabel: currentDraggedRow.boldLabel,
                                        bgAmount: currentDraggedRow.bgAmount,
                                        colorAmount: currentDraggedRow.colorAmount,
                                        boldAmount: currentDraggedRow.boldAmount,
                                        timestamp: Date.now()
                                    });
                                    
                                    // Reconstruire l'affichage
                                    this.flexContainer.innerHTML = "";
                                    let maxColUsed = 1;
                                    this.allRowsData.forEach(r => {
                                        if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                                    });
                                    let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                                    
                                    for (let i = 1; i <= maxColumnsToShow; i++) {
                                        const colDiv = document.createElement("div");
                                        colDiv.className = "dynamic-column"; 
                                        const table = document.createElement("table");
                                        colDiv.appendChild(table);

                                        const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                                        const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                                        this.renderTableContent(table, colTitle, colRows, i, categories);
                                        this.flexContainer.appendChild(colDiv);
                                    }
                                    
                                    const addBtn = document.createElement("button");
                                    addBtn.type = "button";
                                    addBtn.className = "add-column-button";
                                    addBtn.style.display = "flex";
                                    addBtn.style.alignItems = "center";
                                    addBtn.style.justifyContent = "center";
                                    addBtn.style.minWidth = "40px";
                                    addBtn.style.cursor = "pointer";
                                    addBtn.style.opacity = "0.5";
                                    addBtn.style.transition = "opacity 0.2s";
                                    addBtn.style.fontSize = "18px";
                                    addBtn.style.color = "#666";
                                    addBtn.style.border = "2px dashed #ccc";
                                    addBtn.style.borderRadius = "6px";
                                    addBtn.style.margin = "10px";
                                    addBtn.style.padding = "12px";
                                    addBtn.style.background = "transparent";
                                    addBtn.style.zIndex = "1000";
                                    addBtn.innerHTML = "➕";
                                    addBtn.title = "Ajouter une nouvelle colonne";
                                    this.flexContainer.appendChild(addBtn);
                                }
                            }
                        }
                    }
                }
            };
            
            // CLIC GAUCHE SUR LIGNE (Sélection Auto + Toolbar)
            if (!row.isVirtual) {
                tr.onclick = (e: MouseEvent) => {
                    // Ne pas déclencher si on est en train de draguer
                    if (tr.draggable && e.detail === 1) {
                        e.stopPropagation(); // Empêcher la fermeture immédiate
                        
                        // 1. Sélectionner la ligne pour Power BI
                        this.host.persistProperties({
                            merge: [{
                                objectName: "selectionMenu",
                                selector: null,
                                properties: {
                                    "ligneActive": row.originalName
                                }
                            }]
                        });
                        
                        // 2. Afficher la toolbar
                        this.showToolbar(row, tr, e.clientX, e.clientY, categories);
                    }
                };
                tr.title = "Cliquer pour modifier | Glisser pour déplacer";
            }

            let finalAmount = "";
            if (row.customAmount && row.customAmount.trim() !== "") {
                finalAmount = row.customAmount;
            } else {
                let rawVal = parseFloat(row.amount);
                if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    // Formatage en mode décimal (sans symbole € automatique)
                    finalAmount = new Intl.NumberFormat('fr-FR', { style: 'decimal', minimumFractionDigits: 0 }).format(rawVal);
                }
            }

            tr.style.fontFamily = row.font; tr.style.fontSize = row.fontSize + "px"; 

            const tdName = document.createElement("td");
            tdName.innerText = row.label;
            const cellBg = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgLabel;
            
            // DEBUG: Vérifier les couleurs au moment du rendu
            if (row.colorLabel !== "black" || row.bgLabel !== "transparent") {
                console.log("🎨 RENDERING", row.label, "colorLabel:", row.colorLabel, "bgLabel:", row.bgLabel);
            }
            
            tdName.style.backgroundColor = cellBg; tdName.style.color = row.colorLabel;
            if (row.boldLabel) tdName.style.fontWeight = "bold";
            if (row.italicLabel) tdName.style.fontStyle = "italic";
            tr.appendChild(tdName);

            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount; tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount) tdAmount.style.fontWeight = "bold";
            tr.appendChild(tdAmount);

            tbody.appendChild(tr);

            if (row.marginBottom > 0) {
                const trSpB = document.createElement("tr");
                trSpB.style.height = row.marginBottom + "px";
                const tdSpB = document.createElement("td");
                tdSpB.colSpan = 2; tdSpB.style.backgroundColor = row.marginColor; tdSpB.style.border = "none";
                trSpB.appendChild(tdSpB); tbody.appendChild(trSpB);
            }
        });

        // ZONE DE DROP EN BAS DE COLONNE (Pour ajouter à la fin)
        const dropZoneTr = document.createElement("tr");
        dropZoneTr.style.height = "40px"; 
        const dropZoneTd = document.createElement("td");
        dropZoneTd.colSpan = 2;
        dropZoneTd.style.backgroundColor = "transparent";
        dropZoneTd.style.border = "2px dashed transparent";
        dropZoneTd.style.transition = "all 0.2s";
        dropZoneTd.innerHTML = "";
        dropZoneTr.appendChild(dropZoneTd);

        dropZoneTr.ondragover = (e) => {
            e.preventDefault();
            if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
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

            if (e.dataTransfer && categories) {
                const dataStr = e.dataTransfer.getData("text/plain");
                const data = JSON.parse(dataStr);
                const draggedLabel = data.label;
                const draggedOriginalName = data.originalName || data.label;
                
                const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                if (draggedIndex !== -1) {
                    const selectionId = this.host.createSelectionIdBuilder()
                        .withCategory(categories, draggedIndex)
                        .createSelectionId();
                    
                    // Récupérer les props existantes depuis allRowsData pour avoir les dernières modifs (optimistes)
                    const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);

                    let existingProps: any = {
                        marginBottom: 0, marginTop: 0, isHidden: false, 
                        marginColor: {solid:{color:"transparent"}},
                        customLabel: "", customAmount: "", isHeader: false, 
                        fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                        bgLabel: {solid:{color:"transparent"}}, 
                        fillLabel: {solid:{color:"black"}}, 
                        italicLabel: false, boldLabel: false,
                        bgAmount: {solid:{color:"transparent"}}, 
                        fillAmount: {solid:{color:"black"}}, 
                        boldAmount: false
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
                    } else if (categories.objects && categories.objects[draggedIndex]) {
                        const style = categories.objects[draggedIndex]["styleLigne"];
                        if (style) {
                            Object.keys(style).forEach(key => {
                                if (key !== "columnIndex" && key !== "ordreTri") {
                                    existingProps[key] = style[key];
                                }
                            });
                        }
                    }
                    
                    // CALCUL DE LA NOUVELLE POSITION (FIN DE COLONNE)
                    let lastSortIndex = 0;
                    if (rows.length > 0) {
                        lastSortIndex = rows[rows.length - 1].sortIndex;
                    }
                    let newSortIndex = lastSortIndex + 10;
                    
                    console.log(`🟢 INSERTION FIN: Après ${lastSortIndex} -> ${newSortIndex}`);
                    
                    console.log("🔵 DRAG (END ZONE) existingProps:", JSON.stringify(existingProps));
                    
                    existingProps.columnIndex = colIndex;
                    existingProps.ordreTri = newSortIndex;
                    
                    console.log("🔵 DRAG (END ZONE) Final props to persist:", JSON.stringify(existingProps));
                    
                    const instancesToPersist: any = {
                        merge: [{
                            objectName: "styleLigne",
                            selector: selectionId.getSelector(),
                            properties: existingProps
                        }]
                    };
                    
                    console.log("🟢 PERSISTING (drag end zone):", JSON.stringify(instancesToPersist));
                    
                    // ⚠️ IMPORTANT: Appeler persistProperties AVANT de reconstruire le DOM
                    this.host.persistProperties(instancesToPersist);
                    console.log("✅ persistProperties called successfully (drop at end)");
                    
                    // Optimistic Update
                    const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                    if (draggedRowData) {
                        draggedRowData.columnIndex = colIndex;
                        draggedRowData.sortIndex = newSortIndex;
                        
                        // IMPORTANT: Sauvegarder TOUTES les propriétés dans pendingChanges
                        this.pendingChanges.set(draggedOriginalName, {
                            columnIndex: colIndex,
                            sortIndex: newSortIndex,
                            marginBottom: draggedRowData.marginBottom,
                            marginTop: draggedRowData.marginTop,
                            isHidden: draggedRowData.isHidden,
                            marginColor: draggedRowData.marginColor,
                            customLabel: draggedRowData.customLabel,
                            customAmount: draggedRowData.customAmount,
                            isHeader: draggedRowData.isHeader,
                            fontSize: draggedRowData.fontSize,
                            font: draggedRowData.font,
                            bgLabel: draggedRowData.bgLabel,
                            colorLabel: draggedRowData.colorLabel,
                            italicLabel: draggedRowData.italicLabel,
                            boldLabel: draggedRowData.boldLabel,
                            bgAmount: draggedRowData.bgAmount,
                            colorAmount: draggedRowData.colorAmount,
                            boldAmount: draggedRowData.boldAmount,
                            timestamp: Date.now()
                        });
                        
                        this.flexContainer.innerHTML = "";
                        let maxColUsed = 1;
                        this.allRowsData.forEach(r => {
                            if (r.columnIndex > maxColUsed) maxColUsed = r.columnIndex;
                        });
                        let maxColumnsToShow = Math.max(maxColUsed, this.columnTitles.length);
                        
                        for (let i = 1; i <= maxColumnsToShow; i++) {
                            const colDiv = document.createElement("div");
                            colDiv.className = "dynamic-column"; 
                            const table = document.createElement("table");
                            colDiv.appendChild(table);

                            const colRows = this.allRowsData.filter(r => r.columnIndex === i);
                            const colTitle = this.columnTitles[i-1] || ("COLONNE " + i);
                            this.renderTableContent(table, colTitle, colRows, i, categories);
                            this.flexContainer.appendChild(colDiv);
                        }
                        
                        const addBtn = document.createElement("button");
                        addBtn.type = "button";
                        addBtn.className = "add-column-button";
                        addBtn.innerHTML = "➕";
                        addBtn.style.display = "flex";
                        addBtn.style.alignItems = "center";
                        addBtn.style.justifyContent = "center";
                        addBtn.style.minWidth = "40px";
                        addBtn.style.cursor = "pointer";
                        addBtn.style.opacity = "0.5";
                        addBtn.style.transition = "opacity 0.2s";
                        addBtn.style.fontSize = "18px";
                        addBtn.style.color = "#666";
                        addBtn.style.border = "2px dashed #ccc";
                        addBtn.style.borderRadius = "6px";
                        addBtn.style.margin = "10px";
                        addBtn.style.padding = "12px";
                        addBtn.style.background = "transparent";
                        addBtn.style.zIndex = "1000";
                        addBtn.title = "Ajouter une nouvelle colonne";
                        this.flexContainer.appendChild(addBtn);
                    }
                }
            }
        };
        tbody.appendChild(dropZoneTr);

        targetTable.appendChild(tbody);
    }

    private showToolbar(row: RowData, tr: HTMLTableRowElement, x: number, y: number, categories: any) {
        console.log("🟢 showToolbar called for:", row.originalName);

        if (!categories) {
            console.error("🔴 Categories is null");
            return;
        }

        this.toolbar.innerHTML = "";
        this.toolbar.style.display = "flex";

        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();

        // Positionner la toolbar
        const toolbarWidth = 300;
        let left = x - toolbarWidth / 2;
        if (left < 10) left = 10;
        if (left + toolbarWidth > window.innerWidth) left = window.innerWidth - toolbarWidth - 10;

        let top = y - 50;
        if (top < 10) top = y + 20;

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
        const updatePending = (props: any) => {
            const current = this.pendingChanges.get(row.originalName) || { timestamp: Date.now() };
            const updated = { ...current, ...props, timestamp: Date.now() };
            this.pendingChanges.set(row.originalName, updated);
        };

        // Helper pour récupérer les données actuelles de la ligne
        const getCurrentRow = () => {
            return this.allRowsData.find(r => r.originalName === row.originalName) || row;
        };

        // Helper pour persister TOUTES les propriétés (évite les pertes)
        const persistAllProps = (overrides: any) => {
            const currentRow = getCurrentRow();

            const fullProps: any = {
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
                boldAmount: currentRow.boldAmount
            };

            // Appliquer les surcharges
            Object.keys(overrides).forEach(key => {
                fullProps[key] = overrides[key];
            });

            console.log("🟢 Persisting ALL props:", JSON.stringify(fullProps));

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
        btnBold.innerHTML = "<b>B</b>";
        btnBold.title = "Gras";
        if (row.boldLabel) btnBold.className = "active";
        btnBold.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.boldLabel;
            btnBold.className = newVal ? "active" : "";

            row.boldLabel = newVal;
            row.boldAmount = newVal;
            const weight = newVal ? "bold" : "normal";
            if (tr.cells[0]) (tr.cells[0] as HTMLElement).style.fontWeight = weight;
            if (tr.cells[1]) (tr.cells[1] as HTMLElement).style.fontWeight = weight;

            updatePending({ boldLabel: newVal, boldAmount: newVal });
            persistAllProps({ boldLabel: newVal, boldAmount: newVal });
        };
        this.toolbar.appendChild(btnBold);

        // ITALIQUE (I)
        const btnItalic = document.createElement("button");
        btnItalic.innerHTML = "<i>I</i>";
        btnItalic.title = "Italique";
        if (row.italicLabel) btnItalic.className = "active";
        btnItalic.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.italicLabel;
            btnItalic.className = newVal ? "active" : "";

            row.italicLabel = newVal;
            const style = newVal ? "italic" : "normal";
            if (tr.cells[0]) (tr.cells[0] as HTMLElement).style.fontStyle = style;

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
            if (row.fontSize === s) opt.selected = true;
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
        const sep2 = document.createElement("div");
        sep2.className = "separator";
        this.toolbar.appendChild(sep2);

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
            if (row.font === f.value) opt.selected = true;
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
        btnClose.innerHTML = "✖";
        btnClose.onclick = (e) => {
            e.stopPropagation();
            this.toolbar.style.display = "none";
        };
        this.toolbar.appendChild(btnClose);
    }

    public enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {
        const instances: VisualObjectInstance[] = [];

        if (options.objectName === "titresColonnes") {
            const props: any = {};
            // Retourner tous les titres existants
            for (let i = 1; i <= 20; i++) {
                const titre = this.columnTitles[i-1];
                if (titre) {
                    props["titre" + i] = titre;
                }
            }
            instances.push({ 
                objectName: "titresColonnes", 
                selector: null,
                properties: props
            });
        }

        const addManualMenu = (key: string) => {
            if (options.objectName === key) {
                let props: any = { text: "Nouveau Titre", show: false, col: 1, pos: 0, isHeader: true, bgColor: {solid:{color:""}}, textColor: {solid:{color:"black"}}, marginTop: 0, fontSize: 12, bold: false, italic: false };
                if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                    const s = this.metadata.objects[key];
                    if (s["text"]) props.text = s["text"];
                    if (s["show"] !== undefined) props.show = s["show"];
                    if (s["col"]) props.col = s["col"];
                    if (s["pos"] !== undefined) props.pos = s["pos"];
                    if (s["isHeader"] !== undefined) props.isHeader = s["isHeader"];
                    if (s["bgColor"]) props.bgColor = s["bgColor"];
                    if (s["textColor"]) props.textColor = s["textColor"];
                    if (s["marginTop"]) props.marginTop = s["marginTop"];
                    if (s["fontSize"]) props.fontSize = s["fontSize"];
                    if (s["bold"] !== undefined) props.bold = s["bold"];
                    if (s["italic"] !== undefined) props.italic = s["italic"];
                }
                instances.push({ 
                    objectName: key, 
                    selector: null, // <--- AJOUTÉ ICI
                    properties: props 
                });
            }
        };

        addManualMenu("ligneA"); addManualMenu("ligneB"); addManualMenu("ligneC");
        addManualMenu("ligneD"); addManualMenu("ligneE"); addManualMenu("ligneF");

        if (!this.categoricalData) return instances;
        const categories = this.categoricalData.categories[0];

        if (options.objectName === "selectionMenu") {
            instances.push({ 
                objectName: "selectionMenu", 
                selector: null, // <--- AJOUTÉ ICI
                properties: { ligneActive: this.currentSelectedLabel } 
            });
        }

        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                
                // Récupérer les données de la ligne actuelle (avec optimistic updates)
                const rowData = this.allRowsData.find(r => r.originalName === this.currentSelectedLabel);
                
                let props: any = {
                    columnIndex: 1, ordreTri: indexChoisi, marginBottom: 0, marginTop: 0, isHidden: false, marginColor: {solid:{color:"transparent"}},
                    customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif", 
                    bgLabel: {solid:{color:"transparent"}}, fillLabel: {solid:{color:"black"}}, italicLabel: false, boldLabel: false,
                    bgAmount: {solid:{color:"transparent"}}, fillAmount: {solid:{color:"black"}}, boldAmount: false
                };
                
                // D'abord charger depuis la BD si disponible
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["columnIndex"]) props.columnIndex = style["columnIndex"];
                        if (style["ordreTri"] !== undefined) props.ordreTri = style["ordreTri"];
                        if (style["marginBottom"]) props.marginBottom = style["marginBottom"];
                        if (style["marginTop"]) props.marginTop = style["marginTop"];
                        if (style["isHidden"]) props.isHidden = style["isHidden"];
                        if (style["marginColor"]) props.marginColor = style["marginColor"];
                        if (style["customLabel"]) props.customLabel = style["customLabel"];
                        if (style["customAmount"]) props.customAmount = style["customAmount"];
                        if (style["isHeader"]) props.isHeader = style["isHeader"];
                        if (style["fontSize"]) props.fontSize = style["fontSize"];
                        if (style["fontFamily"]) props.fontFamily = style["fontFamily"];
                        if (style["bgLabel"]) props.bgLabel = style["bgLabel"];
                        if (style["fillLabel"]) props.fillLabel = style["fillLabel"];
                        if (style["boldLabel"] !== undefined) props.boldLabel = style["boldLabel"];
                        if (style["italicLabel"] !== undefined) props.italicLabel = style["italicLabel"];
                        if (style["bgAmount"]) props.bgAmount = style["bgAmount"];
                        if (style["fillAmount"]) props.fillAmount = style["fillAmount"];
                        if (style["boldAmount"] !== undefined) props.boldAmount = style["boldAmount"];
                    }
                }
                
                // Ensuite ÉCRASER avec les données optimistes de rowData (qui inclut les pendingChanges)
                if (rowData) {
                    props.columnIndex = rowData.columnIndex;
                    props.ordreTri = rowData.sortIndex;
                    props.marginBottom = rowData.marginBottom;
                    props.marginTop = rowData.marginTop;
                    props.isHidden = rowData.isHidden;
                    props.marginColor = { solid: { color: rowData.marginColor } };
                    props.customLabel = rowData.customLabel || "";
                    props.customAmount = rowData.customAmount || "";
                    props.isHeader = rowData.isHeader;
                    props.fontSize = rowData.fontSize;
                    props.fontFamily = rowData.font;
                    props.bgLabel = { solid: { color: rowData.bgLabel } };
                    props.fillLabel = { solid: { color: rowData.colorLabel } };
                    props.boldLabel = rowData.boldLabel;
                    props.italicLabel = rowData.italicLabel;
                    props.bgAmount = { solid: { color: rowData.bgAmount } };
                    props.fillAmount = { solid: { color: rowData.colorAmount } };
                    props.boldAmount = rowData.boldAmount;
                }
                
                instances.push({ objectName: "styleLigne", selector: selectionId.getSelector(), properties: props });
            }
        }
        return instances;
    }
}