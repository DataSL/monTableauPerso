var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ Visual)
/* harmony export */ });


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
    // Stocker les changements en attente pour éviter le scintillement
    // On utilise 'any' pour permettre de stocker n'importe quelle propriété de RowData
    pendingChanges = new Map();
    constructor(options) {
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
                !this.toolbar.contains(e.target)) {
                this.toolbar.style.display = "none";
            }
        });
    }
    update(options) {
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
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false
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
                        if (style["marginBottom"])
                            row.marginBottom = style["marginBottom"];
                        if (style["marginTop"])
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
                    }
                }
                // Appliquer les changements en attente (optimiste)
                if (this.pendingChanges.has(originalName)) {
                    const pending = this.pendingChanges.get(originalName);
                    // Si le changement est récent (< 30 secondes)
                    if (Date.now() - pending.timestamp < 30000) {
                        let allMatched = true;
                        // Parcourir toutes les propriétés en attente (sauf timestamp)
                        Object.keys(pending).forEach(key => {
                            if (key === "timestamp")
                                return;
                            // Comparaison souple pour gérer les types (ex: number vs string)
                            // Pour les nombres flottants (sortIndex), on utilise une tolérance
                            let match = false;
                            if (typeof pending[key] === 'number' && typeof row[key] === 'number') {
                                match = Math.abs(pending[key] - row[key]) < 0.01;
                            }
                            else {
                                match = pending[key] === row[key];
                            }
                            if (match) {
                                // Power BI a rattrapé cette propriété
                            }
                            else {
                                // Power BI n'est pas encore à jour, on force la valeur locale
                                row[key] = pending[key];
                                allMatched = false;
                            }
                        });
                        if (allMatched) {
                            this.pendingChanges.delete(originalName);
                        }
                    }
                    else {
                        // Trop vieux, on supprime
                        this.pendingChanges.delete(originalName);
                    }
                }
                if (row.columnIndex > maxColumnIndexUsed)
                    maxColumnIndexUsed = row.columnIndex;
                this.allRowsData.push(row);
            });
        }
        // 3. LIGNES MANUELLES
        const manualRows = ["ligneA", "ligneB", "ligneC", "ligneD", "ligneE", "ligneF"];
        manualRows.forEach((key) => {
            if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                const s = this.metadata.objects[key];
                if (s["show"] === true) {
                    let txt = s["text"] ? s["text"] : "Ligne Manuelle";
                    let col = s["col"] ? s["col"] : 1;
                    let pos = s["pos"] ? s["pos"] : 0;
                    let isHead = s["isHeader"] ? s["isHeader"] : false;
                    let bg = s["bgColor"] ? s["bgColor"].solid.color : "transparent";
                    let color = s["textColor"] ? s["textColor"].solid.color : "black";
                    let mt = s["marginTop"] ? s["marginTop"] : 0;
                    let fs = s["fontSize"] ? s["fontSize"] : 12;
                    let bo = s["bold"] ? s["bold"] : false;
                    let it = s["italic"] ? s["italic"] : false;
                    let vRow = {
                        originalName: key,
                        label: txt, amount: "",
                        columnIndex: col, sortIndex: pos,
                        marginBottom: 0, marginTop: mt, isHidden: false, marginColor: "transparent",
                        isHeader: isHead, isVirtual: true, customAmount: "",
                        font: "'Segoe UI', sans-serif", fontSize: fs,
                        bgLabel: bg, colorLabel: color, boldLabel: bo, italicLabel: it,
                        bgAmount: bg, colorAmount: color, boldAmount: bo
                    };
                    if (vRow.columnIndex > maxColumnIndexUsed)
                        maxColumnIndexUsed = vRow.columnIndex;
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
            const colTitle = this.columnTitles[i - 1] || ("COLONNE " + i);
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
        const handleAddColumn = (e) => {
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
    renderTableContent(targetTable, title, rows, colIndex, categories) {
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
        const handleEdit = (e) => {
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
            }
            else {
                handleEdit(e);
            }
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
                const tdSp = document.createElement("td");
                tdSp.colSpan = 2;
                tdSp.style.backgroundColor = row.marginColor;
                tdSp.style.border = "none";
                trSp.appendChild(tdSp);
                tbody.appendChild(trSp);
            }
            const tr = document.createElement("tr");
            // Drag & Drop pour déplacer les lignes
            if (!row.isVirtual) {
                tr.draggable = true;
                tr.style.cursor = "move";
                tr.ondragstart = (e) => {
                    e.stopPropagation();
                    if (e.dataTransfer) {
                        e.dataTransfer.effectAllowed = "move";
                        // Utiliser les données actuelles de allRowsData (avec mises à jour locales)
                        const currentRow = this.allRowsData.find(r => r.originalName === row.originalName);
                        const dragData = {
                            label: row.label,
                            originalName: row.originalName,
                            columnIndex: currentRow ? currentRow.columnIndex : row.columnIndex,
                            sortIndex: currentRow ? currentRow.sortIndex : row.sortIndex
                        };
                        console.log("🔵 DRAG START:", dragData);
                        e.dataTransfer.setData("text/plain", JSON.stringify(dragData));
                        tr.style.opacity = "0.5";
                    }
                };
                tr.ondragend = (e) => {
                    console.log("🔵 DRAG END");
                    tr.style.opacity = "1";
                };
            }
            // Autoriser le drop sur TOUTES les lignes (même virtuelles)
            tr.ondragover = (e) => {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = "move";
                }
                tr.style.borderTop = "2px solid #007acc";
            };
            tr.ondragleave = (e) => {
                tr.style.borderTop = "";
            };
            tr.ondrop = (e) => {
                e.preventDefault();
                e.stopPropagation();
                tr.style.borderTop = "";
                console.log("🟢 DROP EVENT - Target:", row.label, "Col:", colIndex, "SortIndex:", row.sortIndex);
                if (e.dataTransfer && categories) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedLabel = data.label;
                    const draggedOriginalName = data.originalName || data.label;
                    const targetLabel = row.label;
                    const targetOriginalName = row.originalName;
                    if (draggedOriginalName !== targetOriginalName) {
                        const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                        if (draggedIndex !== -1) {
                            const selectionId = this.host.createSelectionIdBuilder()
                                .withCategory(categories, draggedIndex)
                                .createSelectionId();
                            // Récupérer les props existantes
                            let existingProps = {
                                marginBottom: 0, marginTop: 0, isHidden: false,
                                marginColor: { solid: { color: "transparent" } },
                                customLabel: "", customAmount: "", isHeader: false,
                                fontSize: 12, fontFamily: "'Segoe UI', sans-serif",
                                bgLabel: { solid: { color: "transparent" } },
                                fillLabel: { solid: { color: "black" } },
                                italicLabel: false, boldLabel: false,
                                bgAmount: { solid: { color: "transparent" } },
                                fillAmount: { solid: { color: "black" } },
                                boldAmount: false
                            };
                            if (categories.objects && categories.objects[draggedIndex]) {
                                const style = categories.objects[draggedIndex]["styleLigne"];
                                if (style) {
                                    Object.keys(style).forEach(key => {
                                        if (key !== "columnIndex" && key !== "ordreTri") {
                                            existingProps[key] = style[key];
                                        }
                                    });
                                }
                            }
                            // CALCUL DE LA NOUVELLE POSITION (INSERTION AVANT)
                            // Trouver l'index de la ligne cible dans le tableau trié de cette colonne
                            // rows est déjà trié par sortIndex dans renderTableContent
                            const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                            let prevSortIndex = -1000;
                            if (targetRowIndex > 0) {
                                prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                            }
                            else {
                                // Si c'est la première ligne, on prend une valeur inférieure
                                prevSortIndex = row.sortIndex - 20;
                            }
                            // On insère entre la précédente et la cible
                            let newSortIndex = (prevSortIndex + row.sortIndex) / 2;
                            console.log(`🟢 INSERTION: Entre ${prevSortIndex} et ${row.sortIndex} -> ${newSortIndex}`);
                            // Ajouter les nouvelles valeurs
                            existingProps.columnIndex = colIndex;
                            existingProps.ordreTri = newSortIndex;
                            // Mettre à jour avec merge
                            const instancesToPersist = {
                                merge: [{
                                        objectName: "styleLigne",
                                        selector: selectionId.getSelector(),
                                        properties: existingProps
                                    }]
                            };
                            // Mettre à jour l'affichage local immédiatement (optimiste)
                            const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                            if (draggedRowData) {
                                draggedRowData.columnIndex = colIndex;
                                draggedRowData.sortIndex = newSortIndex;
                                this.pendingChanges.set(draggedOriginalName, {
                                    columnIndex: colIndex,
                                    sortIndex: newSortIndex,
                                    timestamp: Date.now()
                                });
                                // Reconstruire l'affichage
                                this.flexContainer.innerHTML = "";
                                let maxColUsed = 1;
                                this.allRowsData.forEach(r => {
                                    if (r.columnIndex > maxColUsed)
                                        maxColUsed = r.columnIndex;
                                });
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
                            this.host.persistProperties(instancesToPersist);
                        }
                    }
                }
            };
            // CLIC GAUCHE SUR LIGNE (Sélection Auto + Toolbar)
            if (!row.isVirtual) {
                tr.onclick = (e) => {
                    // Ne pas déclencher si on est en train de draguer
                    if (tr.draggable && e.detail === 1) {
                        e.stopPropagation(); // Empêcher la fermeture immédiate
                        // 1. Sélectionner la ligne pour Power BI
                        this.host.persistProperties({
                            merge: [{
                                    objectName: "selectionMenu",
                                    selector: null,
                                    properties: {
                                        "ligneActive": row.label
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
            }
            else {
                let rawVal = parseFloat(row.amount);
                if (!row.isVirtual && !row.isHeader && row.amount && !isNaN(rawVal) && rawVal !== 0) {
                    // Formatage en mode décimal (sans symbole € automatique)
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
            tr.appendChild(tdName);
            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount;
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount)
                tdAmount.style.fontWeight = "bold";
            tr.appendChild(tdAmount);
            tbody.appendChild(tr);
            if (row.marginBottom > 0) {
                const trSpB = document.createElement("tr");
                trSpB.style.height = row.marginBottom + "px";
                const tdSpB = document.createElement("td");
                tdSpB.colSpan = 2;
                tdSpB.style.backgroundColor = row.marginColor;
                tdSpB.style.border = "none";
                trSpB.appendChild(tdSpB);
                tbody.appendChild(trSpB);
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
                    let existingProps = {
                        marginBottom: 0, marginTop: 0, isHidden: false,
                        marginColor: { solid: { color: "transparent" } },
                        customLabel: "", customAmount: "", isHeader: false,
                        fontSize: 12, fontFamily: "'Segoe UI', sans-serif",
                        bgLabel: { solid: { color: "transparent" } },
                        fillLabel: { solid: { color: "black" } },
                        italicLabel: false, boldLabel: false,
                        bgAmount: { solid: { color: "transparent" } },
                        fillAmount: { solid: { color: "black" } },
                        boldAmount: false
                    };
                    if (categories.objects && categories.objects[draggedIndex]) {
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
                    existingProps.columnIndex = colIndex;
                    existingProps.ordreTri = newSortIndex;
                    const instancesToPersist = {
                        merge: [{
                                objectName: "styleLigne",
                                selector: selectionId.getSelector(),
                                properties: existingProps
                            }]
                    };
                    // Optimistic Update
                    const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                    if (draggedRowData) {
                        draggedRowData.columnIndex = colIndex;
                        draggedRowData.sortIndex = newSortIndex;
                        this.pendingChanges.set(draggedOriginalName, {
                            columnIndex: colIndex,
                            sortIndex: newSortIndex,
                            timestamp: Date.now()
                        });
                        this.flexContainer.innerHTML = "";
                        let maxColUsed = 1;
                        this.allRowsData.forEach(r => {
                            if (r.columnIndex > maxColUsed)
                                maxColUsed = r.columnIndex;
                        });
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
                    this.host.persistProperties(instancesToPersist);
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
        this.toolbar.innerHTML = "";
        this.toolbar.style.display = "flex";
        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();
        // Positionner la toolbar
        // S'assurer qu'elle ne sort pas de l'écran
        const toolbarWidth = 300; // Approx
        let left = x - toolbarWidth / 2;
        if (left < 10)
            left = 10;
        if (left + toolbarWidth > window.innerWidth)
            left = window.innerWidth - toolbarWidth - 10;
        let top = y - 50;
        if (top < 10)
            top = y + 20; // Afficher en dessous si trop haut
        this.toolbar.style.left = left + "px";
        this.toolbar.style.top = top + "px";
        // Créer le SelectionId pour cette ligne
        const index = categories.values.findIndex(v => v.toString() === row.originalName);
        console.log("🟢 Index found:", index);
        if (index === -1) {
            console.error("🔴 Index not found for", row.originalName);
            return;
        }
        const selectionId = this.host.createSelectionIdBuilder()
            .withCategory(categories, index)
            .createSelectionId();
        // Helper pour mettre à jour pendingChanges
        const updatePending = (props) => {
            const current = this.pendingChanges.get(row.originalName) || { timestamp: Date.now() };
            const updated = { ...current, ...props, timestamp: Date.now() };
            this.pendingChanges.set(row.originalName, updated);
        };
        // Helper pour persister une propriété
        const updateProp = (propName, value) => {
            console.log(`🟢 Persisting ${propName}:`, value);
            this.host.persistProperties({
                merge: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: {
                            [propName]: value
                        }
                    }]
            });
        };
        // --- BOUTONS ---
        // GRAS (B)
        const btnBold = document.createElement("button");
        btnBold.innerHTML = "<b>B</b>";
        btnBold.title = "Gras";
        if (row.boldLabel)
            btnBold.className = "active";
        btnBold.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.boldLabel;
            btnBold.className = newVal ? "active" : "";
            // Optimistic Update
            row.boldLabel = newVal;
            row.boldAmount = newVal;
            const weight = newVal ? "bold" : "normal";
            if (tr.cells[0])
                tr.cells[0].style.fontWeight = weight;
            if (tr.cells[1])
                tr.cells[1].style.fontWeight = weight;
            updatePending({ boldLabel: newVal, boldAmount: newVal });
            // Appliquer à Label ET Amount pour cohérence
            this.host.persistProperties({
                merge: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: {
                            boldLabel: newVal,
                            boldAmount: newVal
                        }
                    }]
            });
        };
        this.toolbar.appendChild(btnBold);
        // ITALIQUE (I)
        const btnItalic = document.createElement("button");
        btnItalic.innerHTML = "<i>I</i>";
        btnItalic.title = "Italique";
        if (row.italicLabel)
            btnItalic.className = "active";
        btnItalic.onclick = (e) => {
            e.stopPropagation();
            const newVal = !row.italicLabel;
            btnItalic.className = newVal ? "active" : "";
            // Optimistic Update
            row.italicLabel = newVal;
            const style = newVal ? "italic" : "normal";
            if (tr.cells[0])
                tr.cells[0].style.fontStyle = style;
            updatePending({ italicLabel: newVal });
            updateProp("italicLabel", newVal);
        };
        this.toolbar.appendChild(btnItalic);
        // SEPARATEUR
        const sep1 = document.createElement("div");
        sep1.className = "separator";
        this.toolbar.appendChild(sep1);
        // TAILLE POLICE (-)
        const btnMinus = document.createElement("button");
        btnMinus.innerText = "A-";
        btnMinus.title = "Diminuer la police";
        btnMinus.onclick = (e) => {
            e.stopPropagation();
            let s = row.fontSize || 12;
            if (s > 8) {
                s = s - 1;
                // Optimistic Update
                row.fontSize = s;
                tr.style.fontSize = s + "px";
                updatePending({ fontSize: s });
                updateProp("fontSize", s);
            }
        };
        this.toolbar.appendChild(btnMinus);
        // TAILLE POLICE (+)
        const btnPlus = document.createElement("button");
        btnPlus.innerText = "A+";
        btnPlus.title = "Augmenter la police";
        btnPlus.onclick = (e) => {
            e.stopPropagation();
            let s = row.fontSize || 12;
            if (s < 24) {
                s = s + 1;
                // Optimistic Update
                row.fontSize = s;
                tr.style.fontSize = s + "px";
                updatePending({ fontSize: s });
                updateProp("fontSize", s);
            }
        };
        this.toolbar.appendChild(btnPlus);
        // SEPARATEUR
        const sep2 = document.createElement("div");
        sep2.className = "separator";
        this.toolbar.appendChild(sep2);
        // COULEUR TEXTE
        const divColor = document.createElement("div");
        divColor.className = "color-picker-wrapper";
        const lblColor = document.createElement("label");
        lblColor.innerText = "T";
        lblColor.style.fontWeight = "bold";
        const inpColor = document.createElement("input");
        inpColor.type = "color";
        inpColor.title = "Couleur du texte";
        // Convertir couleur Power BI (si hex) ou nom
        // Note: row.colorLabel peut être un objet {solid:{color:...}} ou string
        // Ici on suppose que c'est déjà string grâce au parsing dans update()
        inpColor.value = (row.colorLabel && row.colorLabel.startsWith("#")) ? row.colorLabel : "#000000";
        inpColor.onclick = (e) => e.stopPropagation();
        inpColor.onchange = (e) => {
            e.stopPropagation();
            const color = inpColor.value;
            // Optimistic Update
            row.colorLabel = color;
            row.colorAmount = color;
            if (tr.cells[0])
                tr.cells[0].style.color = color;
            if (tr.cells[1])
                tr.cells[1].style.color = color;
            updatePending({ colorLabel: color, colorAmount: color });
            this.host.persistProperties({
                merge: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: {
                            fillLabel: { solid: { color: color } },
                            fillAmount: { solid: { color: color } }
                        }
                    }]
            });
        };
        divColor.appendChild(lblColor);
        divColor.appendChild(inpColor);
        this.toolbar.appendChild(divColor);
        // COULEUR FOND
        const divBg = document.createElement("div");
        divBg.className = "color-picker-wrapper";
        const lblBg = document.createElement("label");
        lblBg.innerText = "🎨";
        const inpBg = document.createElement("input");
        inpBg.type = "color";
        inpBg.title = "Couleur de fond";
        inpBg.value = (row.bgLabel && row.bgLabel.startsWith("#")) ? row.bgLabel : "#ffffff";
        inpBg.onclick = (e) => e.stopPropagation();
        inpBg.onchange = (e) => {
            e.stopPropagation();
            const color = inpBg.value;
            // Optimistic Update
            row.bgLabel = color;
            row.bgAmount = color;
            if (tr.cells[0])
                tr.cells[0].style.backgroundColor = color;
            if (tr.cells[1])
                tr.cells[1].style.backgroundColor = color;
            updatePending({ bgLabel: color, bgAmount: color });
            this.host.persistProperties({
                merge: [{
                        objectName: "styleLigne",
                        selector: selectionId.getSelector(),
                        properties: {
                            bgLabel: { solid: { color: color } },
                            bgAmount: { solid: { color: color } }
                        }
                    }]
            });
        };
        divBg.appendChild(lblBg);
        divBg.appendChild(inpBg);
        this.toolbar.appendChild(divBg);
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
    enumerateObjectInstances(options) {
        const instances = [];
        if (options.objectName === "titresColonnes") {
            const props = {};
            // Retourner tous les titres existants
            for (let i = 1; i <= 20; i++) {
                const titre = this.columnTitles[i - 1];
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
        const addManualMenu = (key) => {
            if (options.objectName === key) {
                let props = { text: "Nouveau Titre", show: false, col: 1, pos: 0, isHeader: true, bgColor: { solid: { color: "" } }, textColor: { solid: { color: "black" } }, marginTop: 0, fontSize: 12, bold: false, italic: false };
                if (this.metadata && this.metadata.objects && this.metadata.objects[key]) {
                    const s = this.metadata.objects[key];
                    if (s["text"])
                        props.text = s["text"];
                    if (s["show"] !== undefined)
                        props.show = s["show"];
                    if (s["col"])
                        props.col = s["col"];
                    if (s["pos"] !== undefined)
                        props.pos = s["pos"];
                    if (s["isHeader"] !== undefined)
                        props.isHeader = s["isHeader"];
                    if (s["bgColor"])
                        props.bgColor = s["bgColor"];
                    if (s["textColor"])
                        props.textColor = s["textColor"];
                    if (s["marginTop"])
                        props.marginTop = s["marginTop"];
                    if (s["fontSize"])
                        props.fontSize = s["fontSize"];
                    if (s["bold"] !== undefined)
                        props.bold = s["bold"];
                    if (s["italic"] !== undefined)
                        props.italic = s["italic"];
                }
                instances.push({
                    objectName: key,
                    selector: null,
                    properties: props
                });
            }
        };
        addManualMenu("ligneA");
        addManualMenu("ligneB");
        addManualMenu("ligneC");
        addManualMenu("ligneD");
        addManualMenu("ligneE");
        addManualMenu("ligneF");
        if (!this.categoricalData)
            return instances;
        const categories = this.categoricalData.categories[0];
        if (options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu",
                selector: null,
                properties: { ligneActive: this.currentSelectedLabel }
            });
        }
        if (options.objectName === "styleLigne") {
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                let props = {
                    columnIndex: 1, ordreTri: indexChoisi, marginBottom: 0, marginTop: 0, isHidden: false, marginColor: { solid: { color: "" } },
                    customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "",
                    bgLabel: { solid: { color: "" } }, fillLabel: { solid: { color: "black" } }, italicLabel: false, boldLabel: false,
                    bgAmount: { solid: { color: "" } }, fillAmount: { solid: { color: "black" } }, boldAmount: false
                };
                if (categories.objects && categories.objects[indexChoisi]) {
                    const style = categories.objects[indexChoisi]["styleLigne"];
                    if (style) {
                        if (style["columnIndex"])
                            props.columnIndex = style["columnIndex"];
                        if (style["ordreTri"] !== undefined)
                            props.ordreTri = style["ordreTri"];
                        if (style["marginBottom"])
                            props.marginBottom = style["marginBottom"];
                        if (style["marginTop"])
                            props.marginTop = style["marginTop"];
                        if (style["isHidden"])
                            props.isHidden = style["isHidden"];
                        if (style["marginColor"])
                            props.marginColor = style["marginColor"];
                        if (style["customLabel"])
                            props.customLabel = style["customLabel"];
                        if (style["customAmount"])
                            props.customAmount = style["customAmount"];
                        if (style["isHeader"])
                            props.isHeader = style["isHeader"];
                        if (style["fontSize"])
                            props.fontSize = style["fontSize"];
                        if (style["fontFamily"])
                            props.fontFamily = style["fontFamily"];
                        if (style["bgLabel"])
                            props.bgLabel = style["bgLabel"];
                        if (style["fillLabel"])
                            props.fillLabel = style["fillLabel"];
                        if (style["boldLabel"] !== undefined)
                            props.boldLabel = style["boldLabel"];
                        if (style["italicLabel"] !== undefined)
                            props.italicLabel = style["italicLabel"];
                        if (style["bgAmount"])
                            props.bgAmount = style["bgAmount"];
                        if (style["fillAmount"])
                            props.fillAmount = style["fillAmount"];
                        if (style["boldAmount"] !== undefined)
                            props.boldAmount = style["boldAmount"];
                    }
                }
                instances.push({ objectName: "styleLigne", selector: selectionId.getSelector(), properties: props });
            }
        }
        return instances;
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
    apiVersion: '5.3.0',
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