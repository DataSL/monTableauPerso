var monTableauPersoCF0BED4C19044D588EBF656397EF1EB4_DEBUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/visual.ts":
/*!***********************!*\
  !*** ./src/visual.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Visual: () => (/* binding */ Visual)
/* harmony export */ });
/* harmony import */ var _style_visual_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/visual.less */ "./style/visual.less");


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
    constructor(options) {
        this.host = options.host;
        this.target = options.element;
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
        // CORRECTION: Remplacer innerHTML = "" par une boucle de suppression sécurisée
        while (this.flexContainer.firstChild) {
            this.flexContainer.removeChild(this.flexContainer.firstChild);
        }
        this.allRowsData = [];
        this.manualLineKeys = [];
        const dataView = options.dataViews[0];
        this.metadata = dataView ? dataView.metadata : null;
        this.categoricalData = dataView && dataView.categorical ? dataView.categorical : null;
        // Charger les bordures globales du tableau AVANT toute chose
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
                    bgAmount: "transparent", colorAmount: "black", boldAmount: false,
                    // SIMPLIFIÉ: Bordures
                    borderWidth: 1,
                    borderColor: "#eee"
                };
                if (categories.objects && categories.objects[index]) {
                    const object = categories.objects[index];
                    if (object["styleLigne"]) {
                        const style = object["styleLigne"];
                        console.log("🔷 LOADING style for", originalName, ":", JSON.stringify(style));
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
                        // SIMPLIFIÉ: Charger les bordures
                        if (style["borderWidth"] !== undefined)
                            row.borderWidth = style["borderWidth"];
                        if (style["borderColor"])
                            row.borderColor = style["borderColor"].solid.color;
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
                        // Charger les bordures
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
        // CORRECTION: Appliquer les bordures SANS !important dans le TypeScript
        // Le CSS ne doit plus écraser ces valeurs
        this.flexContainer.style.borderWidth = `${this.tableBorderWidth}px`;
        this.flexContainer.style.borderStyle = this.tableBorderStyle;
        this.flexContainer.style.borderColor = this.tableBorderColor;
        this.flexContainer.style.borderRadius = `${this.tableBorderRadius}px`;
        console.log("🔲 BORDURES APPLIQUÉES au DOM:", this.flexContainer.style.border);
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
        // NOUVEAU: Bouton flèche pour masquer/afficher
        const toggleBtn = document.createElement("button");
        toggleBtn.type = "button";
        toggleBtn.className = "toggle-actions-button";
        // CORRECTION: Utiliser textContent au lieu de innerHTML
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
            // CORRECTION: Utiliser textContent
            toggleBtn.textContent = this.areActionButtonsVisible ? "◀" : "▶";
            toggleBtn.title = this.areActionButtonsVisible ? "Masquer les boutons d'action" : "Afficher les boutons d'action";
            // Afficher/masquer les boutons
            addColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
            if (removeColumnDiv) {
                removeColumnDiv.style.display = this.areActionButtonsVisible ? "flex" : "none";
            }
        };
        this.flexContainer.appendChild(toggleBtn);
        // Bouton "Ajouter une colonne"
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
        // CORRECTION: Utiliser textContent
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
        // Bouton "Supprimer toutes les colonnes vides"
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
                // CORRECTION: Utiliser textContent
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
                                    properties: {
                                        ["titre" + col]: undefined
                                    }
                                }]
                        });
                    });
                };
                this.flexContainer.appendChild(removeColumnDiv);
            }
        }
        // Bouton "Ajouter une ligne manuelle"
        const addLineBtn = document.createElement("button");
        addLineBtn.type = "button";
        addLineBtn.className = "add-line-button";
        addLineBtn.style.display = this.areActionButtonsVisible ? "flex" : "none";
        // CORRECTION: Remplacer le bloc HTML string par la création d'éléments DOM
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
            console.log("[+] Bouton ligne cliqué");
            // Trouver le prochain index disponible
            let nextIndex = 1;
            while (this.manualLineKeys.includes("manualLine" + nextIndex)) {
                nextIndex++;
            }
            const newKey = "manualLine" + nextIndex;
            console.log("[+] Création de la ligne :", newKey);
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
            console.log("[+] persistProperties appelé pour", newKey);
        };
        this.flexContainer.appendChild(addLineBtn);
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
            // Drag & Drop pour déplacer les lignes (Data et Virtuelles)
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
            tr.ondragend = (e) => {
                tr.style.opacity = "1";
            };
            // Autoriser le drop sur TOUTES les lignes
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
                if (e.dataTransfer) {
                    const dataStr = e.dataTransfer.getData("text/plain");
                    const data = JSON.parse(dataStr);
                    const draggedOriginalName = data.originalName;
                    const isVirtual = data.isVirtual;
                    if (draggedOriginalName !== row.originalName) {
                        // CALCUL DE LA NOUVELLE POSITION (INSERTION AVANT)
                        const targetRowIndex = rows.findIndex(r => r.originalName === row.originalName);
                        let prevSortIndex = -1000;
                        if (targetRowIndex > 0) {
                            prevSortIndex = rows[targetRowIndex - 1].sortIndex;
                        }
                        else {
                            prevSortIndex = row.sortIndex - 20;
                        }
                        let newSortIndex = (prevSortIndex + row.sortIndex) / 2;
                        // CAS 1: LIGNE MANUELLE
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
                                            objectName: draggedOriginalName,
                                            selector: null,
                                            properties: {
                                                col: colIndex,
                                                pos: newSortIndex
                                            }
                                        }]
                                });
                                // Rafraîchir l'affichage
                                // CORRECTION: Remplacer innerHTML = "" par une boucle de suppression sécurisée
                                while (this.flexContainer.firstChild) {
                                    this.flexContainer.removeChild(this.flexContainer.firstChild);
                                }
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
                            }
                        }
                        // CAS 2: LIGNE CLASSIQUE (Excel)
                        else if (categories) {
                            const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                            if (draggedIndex !== -1) {
                                const selectionId = this.host.createSelectionIdBuilder()
                                    .withCategory(categories, draggedIndex)
                                    .createSelectionId();
                                const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
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
                                        Object.keys(style).forEach(key => {
                                            if (key !== "columnIndex" && key !== "ordreTri") {
                                                existingProps[key] = style[key];
                                            }
                                        });
                                    }
                                }
                                existingProps.columnIndex = colIndex;
                                existingProps.ordreTri = newSortIndex;
                                this.host.persistProperties({
                                    replace: [{
                                            objectName: "styleLigne",
                                            selector: selectionId.getSelector(),
                                            properties: existingProps
                                        }]
                                });
                                const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                                if (draggedRowData) {
                                    draggedRowData.columnIndex = colIndex;
                                    draggedRowData.sortIndex = newSortIndex;
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
                                    // CORRECTION: Remplacer innerHTML = "" par une boucle de suppression sécurisée
                                    while (this.flexContainer.firstChild) {
                                        this.flexContainer.removeChild(this.flexContainer.firstChild);
                                    }
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
                                }
                            }
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
            // DEBUG: Vérifier les couleurs au moment du rendu
            if (row.colorLabel !== "black" || row.bgLabel !== "transparent") {
                console.log("🎨 RENDERING", row.label, "colorLabel:", row.colorLabel, "bgLabel:", row.bgLabel);
            }
            tdName.style.backgroundColor = cellBg;
            tdName.style.color = row.colorLabel;
            if (row.boldLabel)
                tdName.style.fontWeight = "bold";
            if (row.italicLabel)
                tdName.style.fontStyle = "italic";
            // SIMPLIFIÉ: Bordure complète de ligne (pas de séparation label/prix)
            const borderStyle = `${row.borderWidth}px solid ${row.borderColor}`;
            tdName.style.border = borderStyle;
            tdName.style.borderRight = "none"; // Pas de bordure entre label et prix
            tr.appendChild(tdName);
            const tdAmount = document.createElement("td");
            tdAmount.innerText = finalAmount;
            tdAmount.style.textAlign = "right";
            tdAmount.style.backgroundColor = (row.isHeader || row.isVirtual) ? row.bgLabel : row.bgAmount;
            tdAmount.style.color = row.colorAmount;
            if (row.boldAmount)
                tdAmount.style.fontWeight = "bold";
            // Même bordure sur les 4 côtés
            tdAmount.style.border = borderStyle;
            tdAmount.style.borderLeft = "none"; // Pas de bordure entre label et prix
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
        // ZONE DE DROP EN BAS DE COLONNE (Pour ajouter à la fin)
        const dropZoneTr = document.createElement("tr");
        dropZoneTr.style.height = "40px";
        const dropZoneTd = document.createElement("td");
        dropZoneTd.colSpan = 2;
        dropZoneTd.style.backgroundColor = "transparent";
        dropZoneTd.style.border = "2px dashed transparent";
        dropZoneTd.style.transition = "all 0.2s";
        // CORRECTION: Utiliser textContent pour vider
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
                // CALCUL DE LA NOUVELLE POSITION (FIN DE COLONNE)
                let lastSortIndex = 0;
                if (rows.length > 0) {
                    lastSortIndex = rows[rows.length - 1].sortIndex;
                }
                let newSortIndex = lastSortIndex + 10;
                // CAS 1: LIGNE MANUELLE
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
                                    objectName: draggedOriginalName,
                                    selector: null,
                                    properties: {
                                        col: colIndex,
                                        pos: newSortIndex
                                    }
                                }]
                        });
                        // Rafraîchir l'affichage
                        // CORRECTION: Remplacer innerHTML = "" par une boucle de suppression sécurisée
                        while (this.flexContainer.firstChild) {
                            this.flexContainer.removeChild(this.flexContainer.firstChild);
                        }
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
                    }
                }
                // CAS 2: LIGNE CLASSIQUE (Excel)
                else if (categories) {
                    const draggedIndex = categories.values.findIndex(v => v.toString() === draggedOriginalName);
                    if (draggedIndex !== -1) {
                        const selectionId = this.host.createSelectionIdBuilder()
                            .withCategory(categories, draggedIndex)
                            .createSelectionId();
                        const currentDraggedRow = this.allRowsData.find(r => r.originalName === draggedOriginalName);
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
                                Object.keys(style).forEach(key => {
                                    if (key !== "columnIndex" && key !== "ordreTri") {
                                        existingProps[key] = style[key];
                                    }
                                });
                            }
                        }
                        existingProps.columnIndex = colIndex;
                        existingProps.ordreTri = newSortIndex;
                        console.log("🔵 DRAG (END ZONE) Final props to persist:", JSON.stringify(existingProps));
                        const instancesToPersist = {
                            merge: [{
                                    objectName: "styleLigne",
                                    selector: selectionId.getSelector(),
                                    properties: existingProps
                                }]
                        };
                        console.log("🟢 PERSISTING (drag end zone):", JSON.stringify(instancesToPersist));
                        this.host.persistProperties(instancesToPersist);
                        console.log("✅ persistProperties called successfully (drop at end)");
                        const draggedRowData = this.allRowsData.find(r => r.originalName === draggedOriginalName);
                        if (draggedRowData) {
                            draggedRowData.columnIndex = colIndex;
                            draggedRowData.sortIndex = newSortIndex;
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
                            // CORRECTION: Remplacer innerHTML = "" par une boucle de suppression sécurisée
                            while (this.flexContainer.firstChild) {
                                this.flexContainer.removeChild(this.flexContainer.firstChild);
                            }
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
        // CORRECTION: Vider la toolbar proprement
        while (this.toolbar.firstChild) {
            this.toolbar.removeChild(this.toolbar.firstChild);
        }
        this.toolbar.style.display = "flex";
        // Stop propagation on the toolbar itself
        this.toolbar.onmousedown = (e) => e.stopPropagation();
        this.toolbar.onclick = (e) => e.stopPropagation();
        // Positionner la toolbar
        const toolbarWidth = 400; // AUGMENTÉ pour les nouveaux boutons
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
        // CORRECTION: Création DOM pour <b>B</b>
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
        // CORRECTION: Création DOM pour <i>I</i>
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
    enumerateObjectInstances(options) {
        const instances = [];
        // SECTION 0: TITRES COLONNES (toujours visible)
        if (options.objectName === "titresColonnes") {
            const props = {};
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
        // SECTION 1: SÉLECTION (uniquement si données Excel existent)
        if (this.categoricalData && options.objectName === "selectionMenu") {
            instances.push({
                objectName: "selectionMenu",
                selector: null,
                properties: { ligneActive: this.currentSelectedLabel }
            });
        }
        // SECTION 2: PERSONNALISATION (uniquement si données Excel existent et ligne sélectionnée)
        if (this.categoricalData && options.objectName === "styleLigne") {
            const categories = this.categoricalData.categories[0];
            const indexChoisi = categories.values.findIndex(v => v.toString() === this.currentSelectedLabel);
            if (indexChoisi !== -1) {
                const selectionId = this.host.createSelectionIdBuilder().withCategory(categories, indexChoisi).createSelectionId();
                const rowData = this.allRowsData.find(r => r.originalName === this.currentSelectedLabel);
                let props = {
                    columnIndex: 1, ordreTri: indexChoisi, marginBottom: 0, marginTop: 0, isHidden: false, marginColor: { solid: { color: "transparent" } },
                    customLabel: "", customAmount: "", isHeader: false, fontSize: 12, fontFamily: "'Segoe UI', sans-serif",
                    bgLabel: { solid: { color: "transparent" } }, fillLabel: { solid: { color: "black" } }, italicLabel: false, boldLabel: false,
                    bgAmount: { solid: { color: "transparent" } }, fillAmount: { solid: { color: "black" } }, boldAmount: false,
                    borderWidth: 1,
                    borderColor: { solid: { color: "#eee" } }
                };
                // Charger depuis DB
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
                    }
                }
                // Surcharger avec rowData
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
                    props.borderWidth = rowData.borderWidth;
                    props.borderColor = { solid: { color: rowData.borderColor } };
                }
                instances.push({ objectName: "styleLigne", selector: selectionId.getSelector(), properties: props });
            }
        }
        // LIGNES MANUELLES (toujours visibles)
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
        // Lignes manuelles dynamiques
        if (this.metadata && this.metadata.objects) {
            Object.keys(this.metadata.objects).forEach(key => {
                if (key.startsWith("manualLine") && options.objectName === key) {
                    let props = {
                        text: "Nouvelle Ligne",
                        show: false,
                        col: 1,
                        pos: 0,
                        isHeader: false,
                        bgColor: { solid: { color: "transparent" } },
                        textColor: { solid: { color: "black" } },
                        marginTop: 0,
                        fontSize: 12,
                        bold: false,
                        italic: false,
                        borderWidth: 1,
                        borderColor: { solid: { color: "#eee" } }
                    };
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
                    if (s["borderWidth"] !== undefined)
                        props.borderWidth = s["borderWidth"];
                    if (s["borderColor"])
                        props.borderColor = s["borderColor"];
                    instances.push({
                        objectName: key,
                        selector: null,
                        properties: props
                    });
                }
            });
        }
        // BORDURES TABLEAU (toujours visible)
        if (options.objectName === "tableBorders") {
            instances.push({
                objectName: "tableBorders",
                selector: null,
                properties: {
                    borderWidth: this.tableBorderWidth,
                    borderColor: { solid: { color: this.tableBorderColor } },
                    borderStyle: this.tableBorderStyle,
                    borderRadius: this.tableBorderRadius
                }
            });
        }
        return instances;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzlELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQzt3QkFDMUUsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsV0FBVyxDQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUMzRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUN0RCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNsRCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUV0RCx1QkFBdUI7d0JBQ3ZCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN6RSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxhQUFhLENBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBRTNFLElBQUksSUFBSSxHQUFZOzRCQUNoQixZQUFZLEVBQUUsR0FBRzs0QkFDakIsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRTs0QkFDdEIsV0FBVyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRzs0QkFDaEMsWUFBWSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGFBQWE7NEJBQzNFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFBRTs0QkFDbkQsSUFBSSxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxFQUFFOzRCQUM1QyxPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRTs0QkFDOUQsUUFBUSxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFOzRCQUNoRCxXQUFXLEVBQUUsRUFBRTs0QkFDZixXQUFXLEVBQUUsRUFBRTt5QkFDbEIsQ0FBQzt3QkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsV0FBVztRQUNYLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlFLHdFQUF3RTtRQUN4RSwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUM7UUFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxDQUFDO1FBRXRFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0UsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1lBQ3BDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNwRixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFRCwrQ0FBK0M7UUFDL0MsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUMxQixTQUFTLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQzlDLHdEQUF3RDtRQUN4RCxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDakUsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQztRQUNsSCxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDakMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMxQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO1FBQzdDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDL0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLDRCQUE0QixDQUFDO1FBQ3pELFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFaEMsU0FBUyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3ZDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBQ0YsU0FBUyxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUU7WUFDeEIsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztZQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDM0MsQ0FBQyxDQUFDO1FBRUYsU0FBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3RCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLHVCQUF1QixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQzdELG1DQUFtQztZQUNuQyxTQUFTLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDakUsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQztZQUVsSCwrQkFBK0I7WUFDL0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM1RSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFFLElBQUksZUFBZSxFQUFFLENBQUM7Z0JBQ2xCLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbkYsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTFDLCtCQUErQjtRQUMvQixNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELFlBQVksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzdCLFlBQVksQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7UUFDN0MsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM1RSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQzdDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNyQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDdEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztRQUMvQyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO1FBQzlDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN4QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUM5QyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDbkMsbUNBQW1DO1FBQ25DLFlBQVksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUM7UUFFcEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDNUIsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM1QyxDQUFDLENBQUM7UUFDRixZQUFZLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDbkMsWUFBWSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQzVDLENBQUMsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDakMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUU3QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDOUMsTUFBTSxRQUFRLEdBQUcsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUV2QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUN4QixLQUFLLEVBQUUsQ0FBQzt3QkFDSixVQUFVLEVBQUUsZ0JBQWdCO3dCQUM1QixRQUFRLEVBQUUsSUFBSTt3QkFDZCxVQUFVLEVBQUU7NEJBQ1IsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEVBQUUsUUFBUTt5QkFDakM7cUJBQ0osQ0FBQzthQUNMLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUM3QyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNULFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUMzQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdDLCtDQUErQztRQUMvQyxJQUFJLGVBQWUsR0FBNkIsSUFBSSxDQUFDO1FBQ3JELElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO1lBQy9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNqRixJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQztvQkFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7WUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRCxlQUFlLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDaEMsZUFBZSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztnQkFDbkQsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDL0UsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2dCQUM1QyxlQUFlLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUM7Z0JBQ2hELGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztnQkFDeEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN6QyxlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3RDLGVBQWUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGNBQWMsQ0FBQztnQkFDbEQsZUFBZSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO2dCQUN4QyxlQUFlLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7Z0JBQ3JDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDO2dCQUNqRCxlQUFlLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzNDLGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdEMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUN2QyxlQUFlLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7Z0JBQ2pELGVBQWUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDdEMsbUNBQW1DO2dCQUNuQyxlQUFlLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDcEMsZUFBZSxDQUFDLEtBQUssR0FBRyx3Q0FBd0MsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUV4RixlQUFlLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7b0JBQzVCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUNwQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztvQkFFN0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQzs0QkFDeEIsT0FBTyxFQUFFLENBQUM7b0NBQ04sVUFBVSxFQUFFLGdCQUFnQjtvQ0FDNUIsUUFBUSxFQUFFLElBQUk7b0NBQ2QsVUFBVSxFQUFFO3dDQUNSLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVM7cUNBQzdCO2lDQUNKLENBQUM7eUJBQ0wsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwRCxDQUFDO1FBQ0wsQ0FBQztRQUVELHNDQUFzQztRQUN0QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDekMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUUxRSwyRUFBMkU7UUFDM0UsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDcEMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUUvQixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztRQUMzQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFDdkMsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFFMUIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNqQyxPQUFPLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUU5QixZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyQyxVQUFVLENBQUMsS0FBSyxHQUFHLDRCQUE0QixDQUFDO1FBQ2hELFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDdEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDO1FBQzlDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztRQUMxRCxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDcEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztRQUMzQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRywrQkFBK0IsQ0FBQztRQUM5RCxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDbkMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7WUFDMUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUM3QyxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7WUFDdEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdDLENBQUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUV2Qyx1Q0FBdUM7WUFDdkMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQzVELFNBQVMsRUFBRSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxNQUFNLE1BQU0sR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDeEIsS0FBSyxFQUFFLENBQUM7d0JBQ0osVUFBVSxFQUFFLE1BQU07d0JBQ2xCLFFBQVEsRUFBRSxJQUFJO3dCQUNkLFVBQVUsRUFBRTs0QkFDUixJQUFJLEVBQUUsaUJBQWlCLEdBQUcsU0FBUzs0QkFDbkMsSUFBSSxFQUFFLElBQUk7NEJBQ1YsR0FBRyxFQUFFLENBQUM7NEJBQ04sR0FBRyxFQUFFLENBQUM7NEJBQ04sUUFBUSxFQUFFLEtBQUs7NEJBQ2YsT0FBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxFQUFFOzRCQUM1QyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7NEJBQ3hDLFNBQVMsRUFBRSxDQUFDOzRCQUNaLFFBQVEsRUFBRSxFQUFFOzRCQUNaLElBQUksRUFBRSxLQUFLOzRCQUNYLE1BQU0sRUFBRSxLQUFLO3lCQUNoQjtxQkFDSixDQUFDO2FBQ0wsQ0FBQyxDQUFDO1lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM3RCxDQUFDLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsV0FBNkIsRUFBRSxLQUFhLEVBQUUsSUFBZSxFQUFFLFFBQWdCLEVBQUUsVUFBZTtRQUN2SCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDZixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDL0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBRS9CLDRCQUE0QjtRQUM1QixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzVCLFNBQVMsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQ3BDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7UUFDekMsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFMUIsbUJBQW1CO1FBQ25CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDOUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxHQUFHLHdCQUF3QixDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBRXhCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztZQUU3QixvQkFBb0I7WUFDcEIsU0FBUyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDbkMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQzVDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNsQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7WUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVsQiw2QkFBNkI7WUFDN0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEMsU0FBUyxFQUFFLGVBQWUsRUFBRSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0IsZ0NBQWdDO1lBQ2hDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztRQUNsQyxDQUFDLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUFJLFFBQVEsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0JBQ3hCLEtBQUssRUFBRSxDQUFDOzRCQUNKLFVBQVUsRUFBRSxnQkFBZ0I7NEJBQzVCLFFBQVEsRUFBRSxJQUFJOzRCQUNkLFVBQVUsRUFBRTtnQ0FDUixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsRUFBRSxRQUFROzZCQUNqQzt5QkFDSixDQUFDO2lCQUNMLENBQUMsQ0FBQztZQUNQLENBQUM7WUFFRCx1QkFBdUI7WUFDdkIsU0FBUyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7WUFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO1lBQ2hELFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMzQixTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQztRQUVGLHlCQUF5QjtRQUN6QixTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBZ0IsRUFBRSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUM7WUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3JCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixTQUFTLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztnQkFDcEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO2dCQUNoRCxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzNCLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUM3QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxTQUFTLENBQUMsZUFBZSxLQUFLLE1BQU0sRUFBRSxDQUFDO2dCQUN2QyxRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBRTdCLElBQUksU0FBUyxDQUFDLGVBQWUsS0FBSyxNQUFNLEVBQUUsQ0FBQztnQkFDdkMsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDO2lCQUFNLENBQUM7Z0JBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFVCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNFLEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWxGLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUV6QixJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDMUIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLENBQUM7WUFFRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXhDLDREQUE0RDtZQUM1RCxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFekIsRUFBRSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQVksRUFBRSxFQUFFO2dCQUM5QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNqQixDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7b0JBQ3RDLE1BQU0sUUFBUSxHQUFHO3dCQUNiLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSzt3QkFDaEIsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO3dCQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7d0JBQzVCLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUzt3QkFDeEIsU0FBUyxFQUFFLEdBQUcsQ0FBQyxTQUFTO3FCQUMzQixDQUFDO29CQUNGLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7b0JBQy9ELEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUVGLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFZLEVBQUUsRUFBRTtnQkFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQzNCLENBQUMsQ0FBQztZQUVGLDBDQUEwQztZQUMxQyxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQzdCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztnQkFDdkMsQ0FBQztnQkFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztZQUM3QyxDQUFDLENBQUM7WUFFRixFQUFFLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQzlCLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUM7WUFFRixFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBWSxFQUFFLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUNwQixFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBRXhCLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO29CQUNqQixNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakMsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUM5QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUVqQyxJQUFJLG1CQUFtQixLQUFLLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFDM0MsbURBQW1EO3dCQUNuRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQ2hGLElBQUksYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUMxQixJQUFJLGNBQWMsR0FBRyxDQUFDLEVBQUUsQ0FBQzs0QkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUN2RCxDQUFDOzZCQUFNLENBQUM7NEJBQ0osYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO3dCQUN2QyxDQUFDO3dCQUNELElBQUksWUFBWSxHQUFHLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBRXZELHdCQUF3Qjt3QkFDeEIsSUFBSSxTQUFTLEVBQUUsQ0FBQzs0QkFDWixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxtQkFBbUIsQ0FBQyxDQUFDOzRCQUM3RixJQUFJLGlCQUFpQixFQUFFLENBQUM7Z0NBQ3BCLDhDQUE4QztnQ0FDOUMsaUJBQWlCLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztnQ0FDekMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztnQ0FFM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU7b0NBQ3pDLFdBQVcsRUFBRSxRQUFRO29DQUNyQixTQUFTLEVBQUUsWUFBWTtvQ0FDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7aUNBQ3hCLENBQUMsQ0FBQztnQ0FFSCw0REFBNEQ7Z0NBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7b0NBQ3hCLEtBQUssRUFBRSxDQUFDOzRDQUNKLFVBQVUsRUFBRSxtQkFBbUI7NENBQy9CLFFBQVEsRUFBRSxJQUFJOzRDQUNkLFVBQVUsRUFBRTtnREFDUixHQUFHLEVBQUUsUUFBUTtnREFDYixHQUFHLEVBQUUsWUFBWTs2Q0FDcEI7eUNBQ0osQ0FBQztpQ0FDTCxDQUFDLENBQUM7Z0NBRUgseUJBQXlCO2dDQUN6QiwrRUFBK0U7Z0NBQy9FLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQ0FDbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQ0FDbEUsQ0FBQztnQ0FDRCxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7Z0NBQ25CLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO29DQUN6QixJQUFJLENBQUMsQ0FBQyxXQUFXLEdBQUcsVUFBVTt3Q0FBRSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQ0FDL0QsQ0FBQyxDQUFDLENBQUM7Z0NBQ0gsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUV0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQ0FDekMsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztvQ0FDcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQ0FDOUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FFMUIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDO29DQUNsRSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztvQ0FDNUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztvQ0FDakUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzNDLENBQUM7NEJBQ0wsQ0FBQzt3QkFDTCxDQUFDO3dCQUNELGlDQUFpQzs2QkFDNUIsSUFBSSxVQUFVLEVBQUUsQ0FBQzs0QkFDbEIsTUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssbUJBQW1CLENBQUMsQ0FBQzs0QkFDNUYsSUFBSSxZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQ0FDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtxQ0FDbkQsWUFBWSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7cUNBQ3RDLGlCQUFpQixFQUFFLENBQUM7Z0NBRXpCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLG1CQUFtQixDQUFDLENBQUM7Z0NBRTdGLElBQUksYUFBYSxHQUFRO29DQUNyQixZQUFZLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUs7b0NBQzlDLFdBQVcsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsRUFBQztvQ0FDMUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxLQUFLO29DQUNsRCxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSx3QkFBd0I7b0NBQ2xELE9BQU8sRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsRUFBQztvQ0FDdEMsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDO29DQUNsQyxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLO29DQUNwQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7b0NBQ3ZDLFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQztvQ0FDbkMsVUFBVSxFQUFFLEtBQUs7aUNBQ3BCLENBQUM7Z0NBRUYsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO29DQUNwQixhQUFhLENBQUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQztvQ0FDNUQsYUFBYSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUM7b0NBQ3RELGFBQWEsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO29DQUNwRCxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7b0NBQ2hGLGFBQWEsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztvQ0FDaEUsYUFBYSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO29DQUNsRSxhQUFhLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztvQ0FDcEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7b0NBQ3BELGFBQWEsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDO29DQUNsRCxhQUFhLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7b0NBQ3hFLGFBQWEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQztvQ0FDN0UsYUFBYSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLENBQUM7b0NBQzFELGFBQWEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDO29DQUN0RCxhQUFhLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUM7b0NBQzFFLGFBQWEsQ0FBQyxVQUFVLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztvQ0FDL0UsYUFBYSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7Z0NBQzVELENBQUM7cUNBQU0sSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztvQ0FDaEUsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDN0QsSUFBSSxLQUFLLEVBQUUsQ0FBQzt3Q0FDUixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTs0Q0FDN0IsSUFBSSxHQUFHLEtBQUssYUFBYSxJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUUsQ0FBQztnREFDOUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs0Q0FDcEMsQ0FBQzt3Q0FDTCxDQUFDLENBQUMsQ0FBQztvQ0FDUCxDQUFDO2dDQUNMLENBQUM7Z0NBR0QsYUFBYSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7Z0NBQ3JDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO2dDQUV0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO29DQUN4QixPQUFPLEVBQUUsQ0FBQzs0Q0FDTixVQUFVLEVBQUUsWUFBWTs0Q0FDeEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUU7NENBQ25DLFVBQVUsRUFBRSxhQUFhO3lDQUM1QixDQUFDO2lDQUNMLENBQUMsQ0FBQztnQ0FFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssbUJBQW1CLENBQUMsQ0FBQztnQ0FDMUYsSUFBSSxjQUFjLEVBQUUsQ0FBQztvQ0FDakIsY0FBYyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7b0NBQ3RDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29DQUV4QyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTt3Q0FDekMsV0FBVyxFQUFFLFFBQVE7d0NBQ3JCLFNBQVMsRUFBRSxZQUFZO3dDQUN2QixZQUFZLEVBQUUsY0FBYyxDQUFDLFlBQVk7d0NBQ3pDLFNBQVMsRUFBRSxjQUFjLENBQUMsU0FBUzt3Q0FDbkMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRO3dDQUNqQyxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVc7d0NBQ3ZDLFdBQVcsRUFBRSxjQUFjLENBQUMsV0FBVzt3Q0FDdkMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxZQUFZO3dDQUN6QyxRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7d0NBQ2pDLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUTt3Q0FDakMsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJO3dDQUN6QixPQUFPLEVBQUUsY0FBYyxDQUFDLE9BQU87d0NBQy9CLFVBQVUsRUFBRSxjQUFjLENBQUMsVUFBVTt3Q0FDckMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxXQUFXO3dDQUN2QyxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVM7d0NBQ25DLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUTt3Q0FDakMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxXQUFXO3dDQUN2QyxVQUFVLEVBQUUsY0FBYyxDQUFDLFVBQVU7d0NBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3FDQUN4QixDQUFDLENBQUM7b0NBRUgsK0VBQStFO29DQUMvRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7d0NBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7b0NBQ2xFLENBQUM7b0NBQ0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO29DQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTt3Q0FDekIsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFHLFVBQVU7NENBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7b0NBQy9ELENBQUMsQ0FBQyxDQUFDO29DQUNILElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FFdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0NBQ3pDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7d0NBQ3BDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0NBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7d0NBRTFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQzt3Q0FDbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0NBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7d0NBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUMzQyxDQUFDO2dDQUNMLENBQUM7NEJBQ0wsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUMsQ0FBQztZQUVGLG1EQUFtRDtZQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixFQUFFLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7b0JBQzNCLGtEQUFrRDtvQkFDbEQsSUFBSSxFQUFFLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7d0JBQ2pDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLGtDQUFrQzt3QkFFdkQseUNBQXlDO3dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUN4QixLQUFLLEVBQUUsQ0FBQztvQ0FDSixVQUFVLEVBQUUsZUFBZTtvQ0FDM0IsUUFBUSxFQUFFLElBQUk7b0NBQ2QsVUFBVSxFQUFFO3dDQUNSLGFBQWEsRUFBRSxHQUFHLENBQUMsWUFBWTtxQ0FDbEM7aUNBQ0osQ0FBQzt5QkFDTCxDQUFDLENBQUM7d0JBRUgseUJBQXlCO3dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNoRSxDQUFDO2dCQUNMLENBQUMsQ0FBQztnQkFDRixFQUFFLENBQUMsS0FBSyxHQUFHLCtDQUErQyxDQUFDO1lBQy9ELENBQUM7WUFFRCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxHQUFHLENBQUMsWUFBWSxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7Z0JBQ3JELFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO1lBQ25DLENBQUM7aUJBQU0sQ0FBQztnQkFDSixJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2xGLHlEQUF5RDtvQkFDekQsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoSCxDQUFDO1lBQ0wsQ0FBQztZQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUV4RSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUM3QixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBRTNFLGtEQUFrRDtZQUNsRCxJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLEtBQUssYUFBYSxFQUFFLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuRyxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUMzRSxJQUFJLEdBQUcsQ0FBQyxTQUFTO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUNwRCxJQUFJLEdBQUcsQ0FBQyxXQUFXO2dCQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUV2RCxzRUFBc0U7WUFDdEUsTUFBTSxXQUFXLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxZQUFZLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVwRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMscUNBQXFDO1lBRXhFLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdkIsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM5QyxRQUFRLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDbkMsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUM5RixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQ3ZDLElBQUksR0FBRyxDQUFDLFVBQVU7Z0JBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBRXZELCtCQUErQjtZQUMvQixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7WUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMscUNBQXFDO1lBRXpFLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFekIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV0QixJQUFJLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDM0IsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDM0MsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7Z0JBQzlDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztnQkFDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO2dCQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUM3QyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILHlEQUF5RDtRQUN6RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQVUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUNqRCxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQztRQUNuRCxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDekMsOENBQThDO1FBQzlDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbkMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzFCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsQ0FBQyxZQUFZO2dCQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN2RCxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztZQUMvQyxVQUFVLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyx3QkFBd0IsQ0FBQztRQUNoRSxDQUFDLENBQUM7UUFDRixVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDM0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsd0JBQXdCLENBQUM7WUFDbkQsVUFBVSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDO1FBQ3JELENBQUMsQ0FBQztRQUNGLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLHdCQUF3QixDQUFDO1lBQ25ELFVBQVUsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztZQUVqRCxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDakIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDOUMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFFakMsa0RBQWtEO2dCQUNsRCxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDcEQsQ0FBQztnQkFDRCxJQUFJLFlBQVksR0FBRyxhQUFhLEdBQUcsRUFBRSxDQUFDO2dCQUV0Qyx3QkFBd0I7Z0JBQ3hCLElBQUksU0FBUyxFQUFFLENBQUM7b0JBQ1osTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssbUJBQW1CLENBQUMsQ0FBQztvQkFDN0YsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO3dCQUNwQiw4Q0FBOEM7d0JBQzlDLGlCQUFpQixDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7d0JBQ3pDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7d0JBRTNDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFOzRCQUN6QyxXQUFXLEVBQUUsUUFBUTs0QkFDckIsU0FBUyxFQUFFLFlBQVk7NEJBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3lCQUN4QixDQUFDLENBQUM7d0JBRUgsNERBQTREO3dCQUM1RCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDOzRCQUN4QixLQUFLLEVBQUUsQ0FBQztvQ0FDSixVQUFVLEVBQUUsbUJBQW1CO29DQUMvQixRQUFRLEVBQUUsSUFBSTtvQ0FDZCxVQUFVLEVBQUU7d0NBQ1IsR0FBRyxFQUFFLFFBQVE7d0NBQ2IsR0FBRyxFQUFFLFlBQVk7cUNBQ3BCO2lDQUNKLENBQUM7eUJBQ0wsQ0FBQyxDQUFDO3dCQUVILHlCQUF5Qjt3QkFDekIsK0VBQStFO3dCQUMvRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7NEJBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ2xFLENBQUM7d0JBQ0QsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO3dCQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFDekIsSUFBSSxDQUFDLENBQUMsV0FBVyxHQUFHLFVBQVU7Z0NBQUUsVUFBVSxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7d0JBQy9ELENBQUMsQ0FBQyxDQUFDO3dCQUNILElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFFdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7NEJBQ3pDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzdDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7NEJBQ3BDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQzlDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRTFCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDbEUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUM7NEJBQzVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7NEJBQ2pFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMzQyxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxpQ0FBaUM7cUJBQzVCLElBQUksVUFBVSxFQUFFLENBQUM7b0JBQ2xCLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLG1CQUFtQixDQUFDLENBQUM7b0JBQzVGLElBQUksWUFBWSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQ3RCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7NkJBQ25ELFlBQVksQ0FBQyxVQUFVLEVBQUUsWUFBWSxDQUFDOzZCQUN0QyxpQkFBaUIsRUFBRSxDQUFDO3dCQUV6QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksS0FBSyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUU3RixJQUFJLGFBQWEsR0FBUTs0QkFDckIsWUFBWSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLOzRCQUM5QyxXQUFXLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7NEJBQzFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsWUFBWSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSzs0QkFDbEQsUUFBUSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsd0JBQXdCOzRCQUNsRCxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7NEJBQ3RDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQzs0QkFDbEMsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSzs0QkFDcEMsUUFBUSxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDOzRCQUN2QyxVQUFVLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLEVBQUM7NEJBQ25DLFVBQVUsRUFBRSxLQUFLO3lCQUNwQixDQUFDO3dCQUVGLElBQUksaUJBQWlCLEVBQUUsQ0FBQzs0QkFDcEIsYUFBYSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLENBQUM7NEJBQzVELGFBQWEsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDOzRCQUN0RCxhQUFhLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQzs0QkFDcEQsYUFBYSxDQUFDLFdBQVcsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDOzRCQUNoRixhQUFhLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7NEJBQ2hFLGFBQWEsQ0FBQyxZQUFZLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQzs0QkFDbEUsYUFBYSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7NEJBQ3BELGFBQWEsQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDOzRCQUNwRCxhQUFhLENBQUMsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQzs0QkFDbEQsYUFBYSxDQUFDLE9BQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDOzRCQUN4RSxhQUFhLENBQUMsU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUM7NEJBQzdFLGFBQWEsQ0FBQyxXQUFXLEdBQUcsaUJBQWlCLENBQUMsV0FBVyxDQUFDOzRCQUMxRCxhQUFhLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQzs0QkFDdEQsYUFBYSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDOzRCQUMxRSxhQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7NEJBQy9FLGFBQWEsQ0FBQyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDO3dCQUM1RCxDQUFDOzZCQUFNLElBQUksVUFBVSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7NEJBQ2hFLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBQzdELElBQUksS0FBSyxFQUFFLENBQUM7Z0NBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7b0NBQzdCLElBQUksR0FBRyxLQUFLLGFBQWEsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUM7d0NBQzlDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0NBQ3BDLENBQUM7Z0NBQ0wsQ0FBQyxDQUFDLENBQUM7NEJBQ1AsQ0FBQzt3QkFDTCxDQUFDO3dCQUVELGFBQWEsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO3dCQUNyQyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQzt3QkFFdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7d0JBRXpGLE1BQU0sa0JBQWtCLEdBQVE7NEJBQzVCLEtBQUssRUFBRSxDQUFDO29DQUNKLFVBQVUsRUFBRSxZQUFZO29DQUN4QixRQUFRLEVBQUUsV0FBVyxDQUFDLFdBQVcsRUFBRTtvQ0FDbkMsVUFBVSxFQUFFLGFBQWE7aUNBQzVCLENBQUM7eUJBQ0wsQ0FBQzt3QkFFRixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO3dCQUVsRixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLENBQUM7d0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQzt3QkFFckUsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLG1CQUFtQixDQUFDLENBQUM7d0JBQzFGLElBQUksY0FBYyxFQUFFLENBQUM7NEJBQ2pCLGNBQWMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDOzRCQUN0QyxjQUFjLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQzs0QkFFeEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU7Z0NBQ3pDLFdBQVcsRUFBRSxRQUFRO2dDQUNyQixTQUFTLEVBQUUsWUFBWTtnQ0FDdkIsWUFBWSxFQUFFLGNBQWMsQ0FBQyxZQUFZO2dDQUN6QyxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVM7Z0NBQ25DLFFBQVEsRUFBRSxjQUFjLENBQUMsUUFBUTtnQ0FDakMsV0FBVyxFQUFFLGNBQWMsQ0FBQyxXQUFXO2dDQUN2QyxXQUFXLEVBQUUsY0FBYyxDQUFDLFdBQVc7Z0NBQ3ZDLFlBQVksRUFBRSxjQUFjLENBQUMsWUFBWTtnQ0FDekMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRO2dDQUNqQyxRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7Z0NBQ2pDLElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTtnQ0FDekIsT0FBTyxFQUFFLGNBQWMsQ0FBQyxPQUFPO2dDQUMvQixVQUFVLEVBQUUsY0FBYyxDQUFDLFVBQVU7Z0NBQ3JDLFdBQVcsRUFBRSxjQUFjLENBQUMsV0FBVztnQ0FDdkMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxTQUFTO2dDQUNuQyxRQUFRLEVBQUUsY0FBYyxDQUFDLFFBQVE7Z0NBQ2pDLFdBQVcsRUFBRSxjQUFjLENBQUMsV0FBVztnQ0FDdkMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxVQUFVO2dDQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTs2QkFDeEIsQ0FBQyxDQUFDOzRCQUVILCtFQUErRTs0QkFDL0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dDQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUNsRSxDQUFDOzRCQUNELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0NBQ3pCLElBQUksQ0FBQyxDQUFDLFdBQVcsR0FBRyxVQUFVO29DQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDOzRCQUMvRCxDQUFDLENBQUMsQ0FBQzs0QkFDSCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRXRFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dDQUN6QyxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUM3QyxNQUFNLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO2dDQUNwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dDQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dDQUUxQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ2xFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dDQUM1RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dDQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDM0MsQ0FBQzt3QkFDTCxDQUFDO29CQUNMLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTlCLFdBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFZLEVBQUUsRUFBdUIsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLFVBQWU7UUFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87UUFDWCxDQUFDO1FBRUQsMENBQTBDO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXBDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFbEQseUJBQXlCO1FBQ3pCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLHFDQUFxQztRQUMvRCxJQUFJLElBQUksR0FBRyxDQUFDLEdBQUcsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksR0FBRyxFQUFFO1lBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVU7WUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRTFGLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBRXBDLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXRDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxPQUFPO1FBQ1gsQ0FBQztRQUVELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQzlELGtCQUFrQixHQUFHLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEUsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUzRCwyQ0FBMkM7UUFDM0MsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDdkYsTUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBRSxHQUFHLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFFRiwwREFBMEQ7UUFDMUQsTUFBTSxhQUFhLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDbEYsQ0FBQyxDQUFDO1FBRUYsaUVBQWlFO1FBQ2pFLE1BQU0sZUFBZSxHQUFHLENBQUMsU0FBYyxFQUFFLEVBQUU7WUFDdkMsTUFBTSxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7WUFFbkMsTUFBTSxTQUFTLEdBQVE7Z0JBQ25CLFdBQVcsRUFBRSxVQUFVLENBQUMsV0FBVztnQkFDbkMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxTQUFTO2dCQUM5QixZQUFZLEVBQUUsVUFBVSxDQUFDLFlBQVk7Z0JBQ3JDLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUztnQkFDL0IsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRO2dCQUM3QixXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN6RCxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVcsSUFBSSxFQUFFO2dCQUN6QyxZQUFZLEVBQUUsVUFBVSxDQUFDLFlBQVksSUFBSSxFQUFFO2dCQUMzQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVE7Z0JBQzdCLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUTtnQkFDN0IsVUFBVSxFQUFFLFVBQVUsQ0FBQyxJQUFJO2dCQUMzQixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNqRCxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUN0RCxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVc7Z0JBQ25DLFNBQVMsRUFBRSxVQUFVLENBQUMsU0FBUztnQkFDL0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDbkQsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDeEQsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO2dCQUNqQyxXQUFXLEVBQUUsVUFBVSxDQUFDLFdBQVc7Z0JBQ25DLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7YUFDNUQsQ0FBQztZQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNqQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLENBQUM7d0JBQ04sVUFBVSxFQUFFLFlBQVk7d0JBQ3hCLFFBQVEsRUFBRSxXQUFXLENBQUMsV0FBVyxFQUFFO3dCQUNuQyxVQUFVLEVBQUUsU0FBUztxQkFDeEIsQ0FBQzthQUNMLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQztRQUVGLGtCQUFrQjtRQUVsQixXQUFXO1FBQ1gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNqRCx5Q0FBeUM7UUFDekMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxLQUFLLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN4QixPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUNoRCxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUM5QixPQUFPLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFFM0MsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7WUFDdkIsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFDeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQ3hFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7WUFFeEUsYUFBYSxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUN6RCxlQUFlLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxDLGVBQWU7UUFDZixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELHlDQUF5QztRQUN6QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxHQUFHLENBQUMsV0FBVztZQUFFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN0QixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDcEIsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO1lBQ2hDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUU3QyxHQUFHLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUN6QixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQzNDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQWlCLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFFdEUsYUFBYSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDdkMsZUFBZSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEMsYUFBYTtRQUNiLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsNEJBQTRCO1FBQzVCLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUNoRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN0QyxlQUFlLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsY0FBYyxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUMxQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0IsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM3QixJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQztnQkFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUM1QyxjQUFjLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxjQUFjLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDN0IsYUFBYSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBQ0YsZUFBZSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUUxQyxhQUFhO1FBQ2IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQix1QkFBdUI7UUFDdkIsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQztRQUNwRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELGFBQWEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ25DLGFBQWEsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN4QyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0MsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFELGdCQUFnQixDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDbEMsTUFBTSxLQUFLLEdBQUc7WUFDVixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLHdCQUF3QixFQUFFO1lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRTtZQUNqRCxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUU7WUFDOUQsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRTtTQUM3RCxDQUFDO1FBQ0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLEtBQUs7Z0JBQUUsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDOUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsZ0JBQWdCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUNqQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUN4QixhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMzQixlQUFlLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7UUFDRixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTVDLGdCQUFnQjtRQUNoQixNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLG1DQUFtQztRQUNuQyxRQUFRLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUMzQixRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDckIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDeEMsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLHdCQUF3QixDQUFDLE9BQThDO1FBQzFFLE1BQU0sU0FBUyxHQUEyQixFQUFFLENBQUM7UUFFN0MsZ0RBQWdEO1FBQ2hELElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFDLE1BQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQztZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUNSLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMvQixDQUFDO1lBQ0wsQ0FBQztZQUNELFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsVUFBVSxFQUFFLGdCQUFnQjtnQkFDNUIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLEtBQUs7YUFDcEIsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDhEQUE4RDtRQUM5RCxJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxlQUFlLEVBQUUsQ0FBQztZQUNqRSxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNYLFVBQVUsRUFBRSxlQUFlO2dCQUMzQixRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO2FBQ3pELENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCwyRkFBMkY7UUFDM0YsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssWUFBWSxFQUFFLENBQUM7WUFDOUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFFakcsSUFBSSxXQUFXLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDbkgsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUV6RixJQUFJLEtBQUssR0FBUTtvQkFDYixXQUFXLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxFQUFDO29CQUNqSSxXQUFXLEVBQUUsRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3RHLE9BQU8sRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsRUFBQyxFQUFFLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUs7b0JBQ2hILFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxhQUFhLEVBQUMsRUFBQyxFQUFFLFVBQVUsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQyxFQUFFLFVBQVUsRUFBRSxLQUFLO29CQUMvRixXQUFXLEVBQUUsQ0FBQztvQkFDZCxXQUFXLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7aUJBQzVDLENBQUM7Z0JBRUYsb0JBQW9CO2dCQUNwQixJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO29CQUN4RCxNQUFNLEtBQUssR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUM1RCxJQUFJLEtBQUssRUFBRSxDQUFDO3dCQUNSLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQzs0QkFBRSxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDbkUsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUzs0QkFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDeEUsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDOzRCQUFFLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO3dCQUN0RSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUM7NEJBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQzdELElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQzs0QkFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQzt3QkFDMUQsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDOzRCQUFFLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN2RSxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsMEJBQTBCO2dCQUMxQixJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO29CQUNuQyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7b0JBQzFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDcEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO29CQUNsQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO29CQUM5RCxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDO29CQUM5QyxLQUFLLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO29CQUNoRCxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7b0JBQ2xDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztvQkFDbEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO29CQUNoQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO29CQUN0RCxLQUFLLENBQUMsU0FBUyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO29CQUMzRCxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLEtBQUssQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztvQkFDeEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztvQkFDeEQsS0FBSyxDQUFDLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztvQkFDN0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO29CQUN0QyxLQUFLLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7b0JBQ3hDLEtBQUssQ0FBQyxXQUFXLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7Z0JBQ2xFLENBQUM7Z0JBRUQsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN6RyxDQUFDO1FBQ0wsQ0FBQztRQUVELHVDQUF1QztRQUN2QyxNQUFNLGFBQWEsR0FBRyxDQUFDLEdBQVcsRUFBRSxFQUFFO1lBQ2xDLElBQUksT0FBTyxDQUFDLFVBQVUsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsSUFBSSxLQUFLLEdBQVEsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxFQUFDLEVBQUUsU0FBUyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxFQUFDLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNqTixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDdkUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQzt3QkFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdEMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUzt3QkFBRSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxTQUFTO3dCQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTO3dCQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUM7d0JBQUUsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQzt3QkFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDO3dCQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUM7d0JBQUUsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVM7d0JBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFNBQVM7d0JBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlELENBQUM7Z0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQztvQkFDWCxVQUFVLEVBQUUsR0FBRztvQkFDZixRQUFRLEVBQUUsSUFBSTtvQkFDZCxVQUFVLEVBQUUsS0FBSztpQkFDcEIsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUVGLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUUsOEJBQThCO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUM3RCxJQUFJLEtBQUssR0FBUTt3QkFDYixJQUFJLEVBQUUsZ0JBQWdCO3dCQUN0QixJQUFJLEVBQUUsS0FBSzt3QkFDWCxHQUFHLEVBQUUsQ0FBQzt3QkFDTixHQUFHLEVBQUUsQ0FBQzt3QkFDTixRQUFRLEVBQUUsS0FBSzt3QkFDZixPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLEVBQUM7d0JBQ3RDLFNBQVMsRUFBRSxFQUFDLEtBQUssRUFBQyxFQUFDLEtBQUssRUFBQyxPQUFPLEVBQUMsRUFBQzt3QkFDbEMsU0FBUyxFQUFFLENBQUM7d0JBQ1osUUFBUSxFQUFFLEVBQUU7d0JBQ1osSUFBSSxFQUFFLEtBQUs7d0JBQ1gsTUFBTSxFQUFFLEtBQUs7d0JBQ2IsV0FBVyxFQUFFLENBQUM7d0JBQ2QsV0FBVyxFQUFFLEVBQUMsS0FBSyxFQUFDLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxFQUFDO3FCQUN0QyxDQUFDO29CQUNGLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNyQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQVM7d0JBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3BELElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssU0FBUzt3QkFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssU0FBUzt3QkFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDO3dCQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUM7d0JBQUUsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3JELElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQzt3QkFBRSxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO3dCQUFFLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUNsRCxJ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QUFDO0lBQ2pDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7SUFDeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0lBQ3hELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHVEQUF1RCxDQUFDLEdBQUcscURBQXFELENBQUM7QUFDN0ksQ0FBQztBQUNELGlFQUFlLHFEQUFxRCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvLi9zcmMvdmlzdWFsLnRzIiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vc3R5bGUvdmlzdWFsLmxlc3M/MTRiMCIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHLy4vLnRtcC9wcmVjb21waWxlL3Zpc3VhbFBsdWdpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBwb3dlcmJpIGZyb20gXCJwb3dlcmJpLXZpc3VhbHMtYXBpXCI7XHJcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbENvbnN0cnVjdG9yT3B0aW9ucztcclxuaW1wb3J0IFZpc3VhbFVwZGF0ZU9wdGlvbnMgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLlZpc3VhbFVwZGF0ZU9wdGlvbnM7XHJcbmltcG9ydCBJVmlzdWFsID0gcG93ZXJiaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5JVmlzdWFsO1xyXG5pbXBvcnQgSVZpc3VhbEhvc3QgPSBwb3dlcmJpLmV4dGVuc2liaWxpdHkudmlzdWFsLklWaXN1YWxIb3N0O1xyXG5pbXBvcnQgVmlzdWFsT2JqZWN0SW5zdGFuY2UgPSBwb3dlcmJpLlZpc3VhbE9iamVjdEluc3RhbmNlO1xyXG5pbXBvcnQgRW51bWVyYXRlVmlzdWFsT2JqZWN0SW5zdGFuY2VzT3B0aW9ucyA9IHBvd2VyYmkuRW51bWVyYXRlVmlzdWFsT2JqZWN0SW5zdGFuY2VzT3B0aW9ucztcclxuaW1wb3J0IFZpc3VhbE9iamVjdEluc3RhbmNlRW51bWVyYXRpb25PYmplY3QgPSBwb3dlcmJpLlZpc3VhbE9iamVjdEluc3RhbmNlRW51bWVyYXRpb25PYmplY3Q7XHJcblxyXG5pbXBvcnQgXCIuLi9zdHlsZS92aXN1YWwubGVzc1wiO1xyXG5cclxuaW50ZXJmYWNlIFJvd0RhdGEge1xyXG4gICAgb3JpZ2luYWxOYW1lOiBzdHJpbmc7XHJcbiAgICBsYWJlbDogc3RyaW5nOyAgICAgIFxyXG4gICAgYW1vdW50OiBzdHJpbmc7XHJcbiAgICBjb2x1bW5JbmRleDogbnVtYmVyOyBcclxuICAgIHNvcnRJbmRleDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBtYXJnaW5Cb3R0b206IG51bWJlcjtcclxuICAgIG1hcmdpblRvcDogbnVtYmVyO1xyXG4gICAgbWFyZ2luQ29sb3I6IHN0cmluZztcclxuICAgIGlzSGlkZGVuOiBib29sZWFuO1xyXG4gICAgaXNIZWFkZXI6IGJvb2xlYW47XHJcbiAgICBcclxuICAgIGlzVmlydHVhbDogYm9vbGVhbjsgXHJcblxyXG4gICAgZm9udDogc3RyaW5nOyBmb250U2l6ZTogbnVtYmVyO1xyXG4gICAgYmdMYWJlbDogc3RyaW5nOyBjb2xvckxhYmVsOiBzdHJpbmc7IGJvbGRMYWJlbDogYm9vbGVhbjsgaXRhbGljTGFiZWw6IGJvb2xlYW47XHJcbiAgICBiZ0Ftb3VudDogc3RyaW5nOyBjb2xvckFtb3VudDogc3RyaW5nOyBib2xkQW1vdW50OiBib29sZWFuO1xyXG4gICAgXHJcbiAgICBjdXN0b21BbW91bnQ6IHN0cmluZztcclxuICAgIGN1c3RvbUxhYmVsPzogc3RyaW5nO1xyXG4gICAgXHJcbiAgICAvLyBCb3JkdXJlcyBjb21wbMOodGVzICg0IGPDtHTDqXMpXHJcbiAgICBib3JkZXJXaWR0aDogbnVtYmVyO1xyXG4gICAgYm9yZGVyQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpc3VhbCBpbXBsZW1lbnRzIElWaXN1YWwge1xyXG4gICAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBob3N0OiBJVmlzdWFsSG9zdDtcclxuICAgIHByaXZhdGUgZGl2Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgZmxleENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBcclxuICAgIHByaXZhdGUgYWxsUm93c0RhdGE6IFJvd0RhdGFbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjYXRlZ29yaWNhbERhdGE6IGFueTtcclxuICAgIHByaXZhdGUgY3VycmVudFNlbGVjdGVkTGFiZWw6IHN0cmluZyA9IFwiXCI7IFxyXG4gICAgcHJpdmF0ZSBjb2x1bW5UaXRsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBwcml2YXRlIG1ldGFkYXRhOiBhbnk7XHJcbiAgICBwcml2YXRlIHRvb2xiYXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgXHJcbiAgICBwcml2YXRlIHBlbmRpbmdDaGFuZ2VzOiBNYXA8c3RyaW5nLCBhbnk+ID0gbmV3IE1hcCgpO1xyXG4gICAgcHJpdmF0ZSBtYW51YWxMaW5lS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBhcmVBY3Rpb25CdXR0b25zVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gQm9yZHVyZXMgZ2xvYmFsZXMgZHUgdGFibGVhdVxyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlcldpZHRoOiBudW1iZXIgPSAxO1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlckNvbG9yOiBzdHJpbmcgPSBcInJnYmEoMCwgMCwgMCwgMC4yNSlcIjtcclxuICAgIHByaXZhdGUgdGFibGVCb3JkZXJTdHlsZTogc3RyaW5nID0gXCJzb2xpZFwiO1xyXG4gICAgcHJpdmF0ZSB0YWJsZUJvcmRlclJhZGl1czogbnVtYmVyID0gODtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBvcHRpb25zLmhvc3Q7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSBvcHRpb25zLmVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5kaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwic2Nyb2xsLXdyYXBwZXJcIjtcclxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZCh0aGlzLmRpdkNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuY2xhc3NOYW1lID0gXCJhY2NvdW50aW5nLWNvbnRhaW5lclwiO1xyXG4gICAgICAgIHRoaXMuZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZmxleENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIHRoaXMudG9vbGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmNsYXNzTmFtZSA9IFwiZmxvYXRpbmctdG9vbGJhclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvb2xiYXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIiAmJiBcclxuICAgICAgICAgICAgICAgICF0aGlzLnRvb2xiYXIuY29udGFpbnMoZS50YXJnZXQgYXMgTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKG9wdGlvbnM6IFZpc3VhbFVwZGF0ZU9wdGlvbnMpIHtcclxuICAgICAgICAvLyBDT1JSRUNUSU9OOiBSZW1wbGFjZXIgaW5uZXJIVE1MID0gXCJcIiBwYXIgdW5lIGJvdWNsZSBkZSBzdXBwcmVzc2lvbiBzw6ljdXJpc8OpZVxyXG4gICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFsbFJvd3NEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5tYW51YWxMaW5lS2V5cyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRhVmlldyA9IG9wdGlvbnMuZGF0YVZpZXdzWzBdO1xyXG4gICAgICAgIHRoaXMubWV0YWRhdGEgPSBkYXRhVmlldyA/IGRhdGFWaWV3Lm1ldGFkYXRhIDogbnVsbDtcclxuICAgICAgICB0aGlzLmNhdGVnb3JpY2FsRGF0YSA9IGRhdGFWaWV3ICYmIGRhdGFWaWV3LmNhdGVnb3JpY2FsID8gZGF0YVZpZXcuY2F0ZWdvcmljYWwgOiBudWxsO1xyXG5cclxuICAgICAgICAvLyBDaGFyZ2VyIGxlcyBib3JkdXJlcyBnbG9iYWxlcyBkdSB0YWJsZWF1IEFWQU5UIHRvdXRlIGNob3NlXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzICYmIHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0YiA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRhYmxlQm9yZGVyc1wiXTtcclxuICAgICAgICAgICAgaWYgKHRiW1wiYm9yZGVyV2lkdGhcIl0gIT09IHVuZGVmaW5lZCkgdGhpcy50YWJsZUJvcmRlcldpZHRoID0gdGJbXCJib3JkZXJXaWR0aFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlckNvbG9yXCJdKSB0aGlzLnRhYmxlQm9yZGVyQ29sb3IgPSAodGJbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodGJbXCJib3JkZXJTdHlsZVwiXSkgdGhpcy50YWJsZUJvcmRlclN0eWxlID0gdGJbXCJib3JkZXJTdHlsZVwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmICh0YltcImJvcmRlclJhZGl1c1wiXSAhPT0gdW5kZWZpbmVkKSB0aGlzLnRhYmxlQm9yZGVyUmFkaXVzID0gdGJbXCJib3JkZXJSYWRpdXNcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SyIEJPUkRVUkVTIENIQVJHw4lFUzpcIiwge1xyXG4gICAgICAgICAgICB3aWR0aDogdGhpcy50YWJsZUJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy50YWJsZUJvcmRlckNvbG9yLFxyXG4gICAgICAgICAgICBzdHlsZTogdGhpcy50YWJsZUJvcmRlclN0eWxlLFxyXG4gICAgICAgICAgICByYWRpdXM6IHRoaXMudGFibGVCb3JkZXJSYWRpdXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gMS4gVElUUkVTIC0gSW5pdGlhbGlzYXRpb24gZHluYW1pcXVlXHJcbiAgICAgICAgdGhpcy5jb2x1bW5UaXRsZXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW1widGl0cmVzQ29sb25uZXNcIl0pIHtcclxuICAgICAgICAgICAgY29uc3QgdCA9IHRoaXMubWV0YWRhdGEub2JqZWN0c1tcInRpdHJlc0NvbG9ubmVzXCJdO1xyXG4gICAgICAgICAgICAvLyBDaGFyZ2VyIHRvdXMgbGVzIHRpdHJlcyBkaXNwb25pYmxlc1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBcInRpdHJlXCIgKyBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gPSB0W2tleV0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAyLiBET05Ow4lFUyBFWENFTFxyXG4gICAgICAgIGxldCBtYXhDb2x1bW5JbmRleFVzZWQgPSAxO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3JpY2FsRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEudmFsdWVzID8gdGhpcy5jYXRlZ29yaWNhbERhdGEudmFsdWVzWzBdIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cyAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHNbXCJzZWxlY3Rpb25NZW51XCJdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW1wic2VsZWN0aW9uTWVudVwiXVtcImxpZ25lQWN0aXZlXCJdIGFzIHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwgJiYgY2F0ZWdvcmllcy52YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCA9IGNhdGVnb3JpZXMudmFsdWVzWzBdLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMudmFsdWVzLmZvckVhY2goKGNhdFZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxOYW1lID0gY2F0VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCByb3c6IFJvd0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lOiBvcmlnaW5hbE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IG9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBhbW91bnQ6IHZhbHVlcyA/IHZhbHVlcy52YWx1ZXNbaW5kZXhdPy50b1N0cmluZygpIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogMSwgc29ydEluZGV4OiBpbmRleCAqIDEwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCwgbWFyZ2luVG9wOiAwLCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGZhbHNlLCBpc1ZpcnR1YWw6IGZhbHNlLCBjdXN0b21BbW91bnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udDogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBcInRyYW5zcGFyZW50XCIsIGNvbG9yTGFiZWw6IFwiYmxhY2tcIiwgYm9sZExhYmVsOiBmYWxzZSwgaXRhbGljTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBcInRyYW5zcGFyZW50XCIsIGNvbG9yQW1vdW50OiBcImJsYWNrXCIsIGJvbGRBbW91bnQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNJTVBMSUZJw4k6IEJvcmR1cmVzXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2VlZVwiXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGNhdGVnb3JpZXMub2JqZWN0c1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdFtcInN0eWxlTGlnbmVcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBvYmplY3RbXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCflLcgTE9BRElORyBzdHlsZSBmb3JcIiwgb3JpZ2luYWxOYW1lLCBcIjpcIiwgSlNPTi5zdHJpbmdpZnkoc3R5bGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY29sdW1uSW5kZXhcIl0pIHJvdy5jb2x1bW5JbmRleCA9IHN0eWxlW1wiY29sdW1uSW5kZXhcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93LmNvbHVtbkluZGV4IDwgMSkgcm93LmNvbHVtbkluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wib3JkcmVUcmlcIl0gIT09IHVuZGVmaW5lZCkgcm93LnNvcnRJbmRleCA9IHN0eWxlW1wib3JkcmVUcmlcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQm90dG9tXCJdICE9PSB1bmRlZmluZWQpIHJvdy5tYXJnaW5Cb3R0b20gPSBzdHlsZVtcIm1hcmdpbkJvdHRvbVwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm1hcmdpblRvcFwiXSAhPT0gdW5kZWZpbmVkKSByb3cubWFyZ2luVG9wID0gc3R5bGVbXCJtYXJnaW5Ub3BcIl0gYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJpc0hpZGRlblwiXSkgcm93LmlzSGlkZGVuID0gc3R5bGVbXCJpc0hpZGRlblwiXSBhcyBib29sZWFuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJtYXJnaW5Db2xvclwiXSkgcm93Lm1hcmdpbkNvbG9yID0gKHN0eWxlW1wibWFyZ2luQ29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiY3VzdG9tTGFiZWxcIl0pIHJvdy5sYWJlbCA9IHN0eWxlW1wiY3VzdG9tTGFiZWxcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJjdXN0b21BbW91bnRcIl0pIHJvdy5jdXN0b21BbW91bnQgPSBzdHlsZVtcImN1c3RvbUFtb3VudFwiXSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImlzSGVhZGVyXCJdKSByb3cuaXNIZWFkZXIgPSBzdHlsZVtcImlzSGVhZGVyXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZvbnRTaXplXCJdKSByb3cuZm9udFNpemUgPSBzdHlsZVtcImZvbnRTaXplXCJdIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZm9udEZhbWlseVwiXSkgcm93LmZvbnQgPSBzdHlsZVtcImZvbnRGYW1pbHlcIl0gYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJiZ0xhYmVsXCJdKSByb3cuYmdMYWJlbCA9IChzdHlsZVtcImJnTGFiZWxcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiZmlsbExhYmVsXCJdKSByb3cuY29sb3JMYWJlbCA9IChzdHlsZVtcImZpbGxMYWJlbFwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVbXCJib2xkTGFiZWxcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvbGRMYWJlbCA9IHN0eWxlW1wiYm9sZExhYmVsXCJdIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIml0YWxpY0xhYmVsXCJdICE9PSB1bmRlZmluZWQpIHJvdy5pdGFsaWNMYWJlbCA9IHN0eWxlW1wiaXRhbGljTGFiZWxcIl0gYXMgYm9vbGVhbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYmdBbW91bnRcIl0pIHJvdy5iZ0Ftb3VudCA9IChzdHlsZVtcImJnQW1vdW50XCJdIGFzIGFueSkuc29saWQuY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImZpbGxBbW91bnRcIl0pIHJvdy5jb2xvckFtb3VudCA9IChzdHlsZVtcImZpbGxBbW91bnRcIl0gYXMgYW55KS5zb2xpZC5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9sZEFtb3VudFwiXSAhPT0gdW5kZWZpbmVkKSByb3cuYm9sZEFtb3VudCA9IHN0eWxlW1wiYm9sZEFtb3VudFwiXSBhcyBib29sZWFuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU0lNUExJRknDiTogQ2hhcmdlciBsZXMgYm9yZHVyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiYm9yZGVyV2lkdGhcIl0gIT09IHVuZGVmaW5lZCkgcm93LmJvcmRlcldpZHRoID0gc3R5bGVbXCJib3JkZXJXaWR0aFwiXSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImJvcmRlckNvbG9yXCJdKSByb3cuYm9yZGVyQ29sb3IgPSAoc3R5bGVbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQXBwbGlxdWVyIGxlcyBjaGFuZ2VtZW50cyBlbiBhdHRlbnRlIChvcHRpbWlzdGUpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZW5kaW5nQ2hhbmdlcy5oYXMob3JpZ2luYWxOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlbmRpbmcgPSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmdldChvcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+foSBQRU5ESU5HIENIQU5HRVMgZm9yXCIsIG9yaWdpbmFsTmFtZSwgXCI6XCIsIEpTT04uc3RyaW5naWZ5KHBlbmRpbmcpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaSBsZSBjaGFuZ2VtZW50IGVzdCByw6ljZW50ICg8IDMwIHNlY29uZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChEYXRlLm5vdygpIC0gcGVuZGluZy50aW1lc3RhbXAgPCAzMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxsTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJjb3VyaXIgdG91dGVzIGxlcyBwcm9wcmnDqXTDqXMgZW4gYXR0ZW50ZSAoc2F1ZiB0aW1lc3RhbXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBlbmRpbmcpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwidGltZXN0YW1wXCIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29tcGFyYWlzb24gc291cGxlIHBvdXIgZ8OpcmVyIGxlcyB0eXBlcyAoZXg6IG51bWJlciB2cyBzdHJpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3VyIGxlcyBub21icmVzIGZsb3R0YW50cyAoc29ydEluZGV4KSwgb24gdXRpbGlzZSB1bmUgdG9sw6lyYW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBlbmRpbmdba2V5XSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHJvd1trZXldID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gTWF0aC5hYnMocGVuZGluZ1trZXldIC0gcm93W2tleV0pIDwgMC4wMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBwZW5kaW5nW2tleV0gPT09IHJvd1trZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3dlciBCSSBhIHJhdHRyYXDDqSBjZXR0ZSBwcm9wcmnDqXTDqVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQb3dlciBCSSBuJ2VzdCBwYXMgZW5jb3JlIMOgIGpvdXIsIG9uIGZvcmNlIGxhIHZhbGV1ciBsb2NhbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dba2V5XSA9IHBlbmRpbmdba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFsbE1hdGNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuZGVsZXRlKG9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcm9wIHZpZXV4LCBvbiBzdXBwcmltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLmRlbGV0ZShvcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHJvdy5jb2x1bW5JbmRleCA+IG1heENvbHVtbkluZGV4VXNlZCkgbWF4Q29sdW1uSW5kZXhVc2VkID0gcm93LmNvbHVtbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5wdXNoKHJvdyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gMy4gTElHTkVTIE1BTlVFTExFUyBEWU5BTUlRVUVTXHJcbiAgICAgICAgaWYgKHRoaXMubWV0YWRhdGEgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGEub2JqZWN0cykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwibWFudWFsTGluZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFudWFsTGluZUtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInNob3dcIl0gPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHR4dCA9IHNbXCJ0ZXh0XCJdID8gc1tcInRleHRcIl0gYXMgc3RyaW5nIDogXCJOb3V2ZWxsZSBMaWduZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sID0gc1tcImNvbFwiXSA/IHNbXCJjb2xcIl0gYXMgbnVtYmVyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHNbXCJwb3NcIl0gPyBzW1wicG9zXCJdIGFzIG51bWJlciA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpc0hlYWQgPSBzW1wiaXNIZWFkZXJcIl0gPyBzW1wiaXNIZWFkZXJcIl0gYXMgYm9vbGVhbiA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmcgPSBzW1wiYmdDb2xvclwiXSA/IChzW1wiYmdDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3IgPSBzW1widGV4dENvbG9yXCJdID8gKHNbXCJ0ZXh0Q29sb3JcIl0gYXMgYW55KS5zb2xpZC5jb2xvciA6IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG10ID0gc1tcIm1hcmdpblRvcFwiXSA/IHNbXCJtYXJnaW5Ub3BcIl0gYXMgbnVtYmVyIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZzID0gc1tcImZvbnRTaXplXCJdID8gc1tcImZvbnRTaXplXCJdIGFzIG51bWJlciA6IDEyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm8gPSBzW1wiYm9sZFwiXSA/IHNbXCJib2xkXCJdIGFzIGJvb2xlYW4gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ID0gc1tcIml0YWxpY1wiXSA/IHNbXCJpdGFsaWNcIl0gYXMgYm9vbGVhbiA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYm9yZHVyZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ3ID0gc1tcImJvcmRlcldpZHRoXCJdICE9PSB1bmRlZmluZWQgPyBzW1wiYm9yZGVyV2lkdGhcIl0gYXMgbnVtYmVyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJjID0gc1tcImJvcmRlckNvbG9yXCJdID8gKHNbXCJib3JkZXJDb2xvclwiXSBhcyBhbnkpLnNvbGlkLmNvbG9yIDogXCIjZWVlXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdlJvdzogUm93RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsTmFtZToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHR4dCwgYW1vdW50OiBcIlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2wsIHNvcnRJbmRleDogcG9zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IG10LCBpc0hpZGRlbjogZmFsc2UsIG1hcmdpbkNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogaXNIZWFkLCBpc1ZpcnR1YWw6IHRydWUsIGN1c3RvbUFtb3VudDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBmb250U2l6ZTogZnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBiZywgY29sb3JMYWJlbDogY29sb3IsIGJvbGRMYWJlbDogYm8sIGl0YWxpY0xhYmVsOiBpdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBiZywgY29sb3JBbW91bnQ6IGNvbG9yLCBib2xkQW1vdW50OiBibyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBidyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBiY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFJvd3NEYXRhLnB1c2godlJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDQuIFJFTkRVXHJcbiAgICAgICAgbGV0IG1heENvbHVtbnNUb1Nob3cgPSBNYXRoLm1heChtYXhDb2x1bW5JbmRleFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogQXBwbGlxdWVyIGxlcyBib3JkdXJlcyBTQU5TICFpbXBvcnRhbnQgZGFucyBsZSBUeXBlU2NyaXB0XHJcbiAgICAgICAgLy8gTGUgQ1NTIG5lIGRvaXQgcGx1cyDDqWNyYXNlciBjZXMgdmFsZXVyc1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJXaWR0aCA9IGAke3RoaXMudGFibGVCb3JkZXJXaWR0aH1weGA7XHJcbiAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlclN0eWxlID0gdGhpcy50YWJsZUJvcmRlclN0eWxlO1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5zdHlsZS5ib3JkZXJDb2xvciA9IHRoaXMudGFibGVCb3JkZXJDb2xvcjtcclxuICAgICAgICB0aGlzLmZsZXhDb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gYCR7dGhpcy50YWJsZUJvcmRlclJhZGl1c31weGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn5SyIEJPUkRVUkVTIEFQUExJUVXDiUVTIGF1IERPTTpcIiwgdGhpcy5mbGV4Q29udGFpbmVyLnN0eWxlLmJvcmRlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4Q29sdW1uc1RvU2hvdzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGNvbERpdi5jbGFzc05hbWUgPSBcImR5bmFtaWMtY29sdW1uXCI7IFxyXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xUaXRsZSA9IHRoaXMuY29sdW1uVGl0bGVzW2ktMV0gfHwgKFwiQ09MT05ORSBcIiArIGkpO1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEgPyB0aGlzLmNhdGVnb3JpY2FsRGF0YS5jYXRlZ29yaWVzWzBdIDogbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJUYWJsZUNvbnRlbnQodGFibGUsIGNvbFRpdGxlLCBjb2xSb3dzLCBpLCBjYXRlZ29yaWVzKTtcclxuICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIE5PVVZFQVU6IEJvdXRvbiBmbMOoY2hlIHBvdXIgbWFzcXVlci9hZmZpY2hlclxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5jbGFzc05hbWUgPSBcInRvZ2dsZS1hY3Rpb25zLWJ1dHRvblwiO1xyXG4gICAgICAgIC8vIENPUlJFQ1RJT046IFV0aWxpc2VyIHRleHRDb250ZW50IGF1IGxpZXUgZGUgaW5uZXJIVE1MXHJcbiAgICAgICAgdG9nZ2xlQnRuLnRleHRDb250ZW50ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwi4peAXCIgOiBcIuKWtlwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi50aXRsZSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIk1hc3F1ZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIiA6IFwiQWZmaWNoZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5taW5XaWR0aCA9IFwiMzJweFwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS5oZWlnaHQgPSBcIjMycHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUubWFyZ2luID0gXCI2cHhcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm94U2hhZG93ID0gXCIwIDFweCA0cHggcmdiYSgwLDAsMCwwLjA4KVwiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4yc1wiO1xyXG4gICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVCdG4ub25tb3VzZW92ZXIgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMS4xKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdG9nZ2xlQnRuLm9ubW91c2VvdXQgPSAoKSA9PiB7IFxyXG4gICAgICAgICAgICB0b2dnbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgdG9nZ2xlQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjYjNkN2ZmXCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDEpXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0b2dnbGVCdG4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA9ICF0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlO1xyXG4gICAgICAgICAgICAvLyBDT1JSRUNUSU9OOiBVdGlsaXNlciB0ZXh0Q29udGVudFxyXG4gICAgICAgICAgICB0b2dnbGVCdG4udGV4dENvbnRlbnQgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCLil4BcIiA6IFwi4pa2XCI7XHJcbiAgICAgICAgICAgIHRvZ2dsZUJ0bi50aXRsZSA9IHRoaXMuYXJlQWN0aW9uQnV0dG9uc1Zpc2libGUgPyBcIk1hc3F1ZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIiA6IFwiQWZmaWNoZXIgbGVzIGJvdXRvbnMgZCdhY3Rpb25cIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFmZmljaGVyL21hc3F1ZXIgbGVzIGJvdXRvbnNcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIGlmIChyZW1vdmVDb2x1bW5EaXYpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2dnbGVCdG4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEJvdXRvbiBcIkFqb3V0ZXIgdW5lIGNvbG9ubmVcIlxyXG4gICAgICAgIGNvbnN0IGFkZENvbHVtbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5jbGFzc05hbWUgPSBcImFkZC1jb2x1bW4tYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmRpc3BsYXkgPSB0aGlzLmFyZUFjdGlvbkJ1dHRvbnNWaXNpYmxlID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWluV2lkdGggPSBcIjQwcHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuMnNcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuY29sb3IgPSBcIiM2NjZcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkICNjY2NcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XHJcbiAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLnBhZGRpbmcgPSBcIjEycHhcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogVXRpbGlzZXIgdGV4dENvbnRlbnRcclxuICAgICAgICBhZGRDb2x1bW5EaXYudGV4dENvbnRlbnQgPSBcIuKelVwiO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi50aXRsZSA9IFwiQWpvdXRlciB1bmUgbm91dmVsbGUgY29sb25uZVwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZENvbHVtbkRpdi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgXHJcbiAgICAgICAgICAgIGFkZENvbHVtbkRpdi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IFxyXG4gICAgICAgICAgICBhZGRDb2x1bW5EaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiM5OTlcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5vbm1vdXNlb3V0ID0gKCkgPT4geyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiOyBcclxuICAgICAgICAgICAgYWRkQ29sdW1uRGl2LnN0eWxlLmJvcmRlckNvbG9yID0gXCIjY2NjXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoYW5kbGVBZGRDb2x1bW4gPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSB0aGlzLmNvbHVtblRpdGxlcy5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUaXRsZSA9IFwiQ09MT05ORSBcIiArIG5ld0luZGV4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcInRpdHJlXCIgKyBuZXdJbmRleF06IG5ld1RpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRDb2x1bW4sIHRydWUpO1xyXG4gICAgICAgIGFkZENvbHVtbkRpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4geyBcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyBcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICBhZGRDb2x1bW5EaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7IFxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7IFxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDb2x1bW5EaXYpO1xyXG5cclxuICAgICAgICAvLyBCb3V0b24gXCJTdXBwcmltZXIgdG91dGVzIGxlcyBjb2xvbm5lcyB2aWRlc1wiXHJcbiAgICAgICAgbGV0IHJlbW92ZUNvbHVtbkRpdjogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgICAgICBpZiAobWF4Q29sdW1uc1RvU2hvdyA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1wdHlDb2xzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbFJvd3MgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbHRlcihyID0+IHIuY29sdW1uSW5kZXggPT09IGkgJiYgIXIuaXNIaWRkZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbFJvd3MubGVuZ3RoID09PSAwKSBlbXB0eUNvbHMucHVzaChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVtcHR5Q29scy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnR5cGUgPSBcImJ1dHRvblwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LmNsYXNzTmFtZSA9IFwicmVtb3ZlLWNvbHVtbi1idXR0b25cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLm1pbldpZHRoID0gXCI0MHB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjJzXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5jb2xvciA9IFwiI2MwMFwiO1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCAjYzAwXCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS5wYWRkaW5nID0gXCIxMnB4XCI7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYuc3R5bGUuYmFja2dyb3VuZCA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5zdHlsZS56SW5kZXggPSBcIjEwMDBcIjtcclxuICAgICAgICAgICAgICAgIC8vIENPUlJFQ1RJT046IFV0aWxpc2VyIHRleHRDb250ZW50XHJcbiAgICAgICAgICAgICAgICByZW1vdmVDb2x1bW5EaXYudGV4dENvbnRlbnQgPSBcIvCfl5HvuI9cIjtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi50aXRsZSA9IGBTdXBwcmltZXIgdG91dGVzIGxlcyBjb2xvbm5lcyB2aWRlcyAoJHtlbXB0eUNvbHMuam9pbihcIiwgXCIpfSlgO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbW92ZUNvbHVtbkRpdi5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBlbXB0eUNvbHMuZm9yRWFjaChjb2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGFjZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInRpdHJlc0NvbG9ubmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRyZVwiICsgY29sXTogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVDb2x1bW5EaXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBCb3V0b24gXCJBam91dGVyIHVuZSBsaWduZSBtYW51ZWxsZVwiXHJcbiAgICAgICAgY29uc3QgYWRkTGluZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgYWRkTGluZUJ0bi50eXBlID0gXCJidXR0b25cIjtcclxuICAgICAgICBhZGRMaW5lQnRuLmNsYXNzTmFtZSA9IFwiYWRkLWxpbmUtYnV0dG9uXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5kaXNwbGF5ID0gdGhpcy5hcmVBY3Rpb25CdXR0b25zVmlzaWJsZSA/IFwiZmxleFwiIDogXCJub25lXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogUmVtcGxhY2VyIGxlIGJsb2MgSFRNTCBzdHJpbmcgcGFyIGxhIGNyw6lhdGlvbiBkJ8OpbMOpbWVudHMgRE9NXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5Db250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLnN0eWxlLmdhcCA9IFwiNnB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUud2lkdGggPSBcIjIycHhcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmhlaWdodCA9IFwiMjJweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYmFja2dyb3VuZCA9IFwiI2U2ZjJmZlwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNiM2Q3ZmZcIjtcclxuICAgICAgICBidG5JY29uLnN0eWxlLmNvbG9yID0gXCIjMDA3YWNjXCI7XHJcbiAgICAgICAgYnRuSWNvbi5zdHlsZS5mb250U2l6ZSA9IFwiMTZweFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xyXG4gICAgICAgIGJ0bkljb24uc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XHJcbiAgICAgICAgYnRuSWNvbi50ZXh0Q29udGVudCA9IFwiK1wiO1xyXG5cclxuICAgICAgICBjb25zdCBidG5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgYnRuVGV4dC5zdHlsZS5jb2xvciA9IFwiIzAwN2FjY1wiO1xyXG4gICAgICAgIGJ0blRleHQuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcclxuICAgICAgICBidG5UZXh0LnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xyXG4gICAgICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSBcIkxpZ25lXCI7XHJcblxyXG4gICAgICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5JY29uKTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuVGV4dCk7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICBhZGRMaW5lQnRuLnRpdGxlID0gXCJBam91dGVyIHVuZSBub3V2ZWxsZSBsaWduZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUubWFyZ2luID0gXCI2cHhcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCAxMnB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2IzZDdmZlwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxOHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMXB4IDRweCByZ2JhKDAsMCwwLDAuMDQpXCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGFkZExpbmVCdG4uc3R5bGUuZm9udEZhbWlseSA9IFwiJ1NlZ29lIFVJJywgQXJpYWwsIHNhbnMtc2VyaWZcIjtcclxuICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgYWRkTGluZUJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjZTZmMmZmXCI7XHJcbiAgICAgICAgICAgIGFkZExpbmVCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiMwMDdhY2NcIjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGFkZExpbmVCdG4ub25tb3VzZW91dCA9ICgpID0+IHtcclxuICAgICAgICAgICAgYWRkTGluZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICBhZGRMaW5lQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjYjNkN2ZmXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBhZGRMaW5lQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWytdIEJvdXRvbiBsaWduZSBjbGlxdcOpXCIpO1xyXG5cclxuICAgICAgICAgICAgLy8gVHJvdXZlciBsZSBwcm9jaGFpbiBpbmRleCBkaXNwb25pYmxlXHJcbiAgICAgICAgICAgIGxldCBuZXh0SW5kZXggPSAxO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5tYW51YWxMaW5lS2V5cy5pbmNsdWRlcyhcIm1hbnVhbExpbmVcIiArIG5leHRJbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIG5leHRJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0tleSA9IFwibWFudWFsTGluZVwiICsgbmV4dEluZGV4O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlsrXSBDcsOpYXRpb24gZGUgbGEgbGlnbmUgOlwiLCBuZXdLZXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IG5ld0tleSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTm91dmVsbGUgTGlnbmUgXCIgKyBuZXh0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0hlYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IFwidHJhbnNwYXJlbnRcIiB9IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogeyBzb2xpZDogeyBjb2xvcjogXCJibGFja1wiIH0gfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGFsaWM6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlsrXSBwZXJzaXN0UHJvcGVydGllcyBhcHBlbMOpIHBvdXJcIiwgbmV3S2V5KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRMaW5lQnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlclRhYmxlQ29udGVudCh0YXJnZXRUYWJsZTogSFRNTFRhYmxlRWxlbWVudCwgdGl0bGU6IHN0cmluZywgcm93czogUm93RGF0YVtdLCBjb2xJbmRleDogbnVtYmVyLCBjYXRlZ29yaWVzOiBhbnkpIHtcclxuICAgICAgICByb3dzLnNvcnQoKGEsIGIpID0+IGEuc29ydEluZGV4IC0gYi5zb3J0SW5kZXgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoZWFkXCIpO1xyXG4gICAgICAgIGNvbnN0IHRySGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICB0aC5jb2xTcGFuID0gMjtcclxuICAgICAgICB0aC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgICAgICB0aC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjMwcHhcIjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZXh0ZSBkdSB0aXRyZSAow6lkaXRhYmxlKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5pbm5lclRleHQgPSB0aXRsZTtcclxuICAgICAgICB0aXRsZVNwYW4uY29udGVudEVkaXRhYmxlID0gXCJmYWxzZVwiO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XHJcbiAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5taW5XaWR0aCA9IFwiMTAwcHhcIjtcclxuICAgICAgICB0aC5hcHBlbmRDaGlsZCh0aXRsZVNwYW4pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEJvdXRvbiBkJ8OpZGl0aW9uXHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKcj++4j1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5yaWdodCA9IFwiNXB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS50b3AgPSBcIjUwJVwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC01MCUpXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcclxuICAgICAgICBlZGl0QnRuLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4yc1wiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUucGFkZGluZyA9IFwiMnB4IDZweFwiO1xyXG4gICAgICAgIGVkaXRCdG4uc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XHJcbiAgICAgICAgZWRpdEJ0bi50aXRsZSA9IFwiUmVub21tZXIgY2V0dGUgY29sb25uZVwiO1xyXG4gICAgICAgIGVkaXRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3ZlciA9ICgpID0+IHsgZWRpdEJ0bi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7IH07XHJcbiAgICAgICAgZWRpdEJ0bi5vbm1vdXNlb3V0ID0gKCkgPT4geyBlZGl0QnRuLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiOyB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhhbmRsZUVkaXQgPSAoZTogRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWN0aXZlciBsJ8OpZGl0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcInRydWVcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZjNjZFwiO1xyXG4gICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuY29sb3IgPSBcIiMwMDAwMDBcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjJweCA0cHhcIjtcclxuICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiM3B4XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5mb2N1cygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gU8OpbGVjdGlvbm5lciB0b3V0IGxlIHRleHRlXHJcbiAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcclxuICAgICAgICAgICAgcmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKHRpdGxlU3Bhbik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uPy5yZW1vdmVBbGxSYW5nZXMoKTtcclxuICAgICAgICAgICAgc2VsZWN0aW9uPy5hZGRSYW5nZShyYW5nZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDaGFuZ2VyIGwnaWPDtG5lIGVuIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIuKck1wiO1xyXG4gICAgICAgICAgICBlZGl0QnRuLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc2F2ZUVkaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gdGl0bGVTcGFuLmlubmVyVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgIGlmIChuZXdUaXRsZSAmJiBuZXdUaXRsZSAhPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGl0cmVzQ29sb25uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXCJ0aXRyZVwiICsgY29sSW5kZXhdOiBuZXdUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBEw6lzYWN0aXZlciBsJ8OpZGl0aW9uXHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinI/vuI9cIjtcclxuICAgICAgICAgICAgZWRpdEJ0bi5zdHlsZS5jb2xvciA9IFwiXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTYXV2ZWdhcmRlciBhdmVjIEVudGVyXHJcbiAgICAgICAgdGl0bGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNhdmVFZGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9IFwiZmFsc2VcIjtcclxuICAgICAgICAgICAgICAgIHRpdGxlU3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVNwYW4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVTcGFuLnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCLinI/vuI9cIjtcclxuICAgICAgICAgICAgICAgIGVkaXRCdG4uc3R5bGUuY29sb3IgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2F1dmVnYXJkZXIgZW4gcGVyZGFudCBsZSBmb2N1c1xyXG4gICAgICAgIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGl0bGVTcGFuLmNvbnRlbnRFZGl0YWJsZSA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHNhdmVFZGl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRpdGxlU3Bhbi5jb250ZW50RWRpdGFibGUgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBzYXZlRWRpdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlRWRpdChlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgfSwgdHJ1ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGguYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XHJcbiAgICAgICAgdHJIZWFkLmFwcGVuZENoaWxkKHRoKTsgdGhlYWQuYXBwZW5kQ2hpbGQodHJIZWFkKTsgdGFyZ2V0VGFibGUuYXBwZW5kQ2hpbGQodGhlYWQpO1xyXG5cclxuICAgICAgICBjb25zdCB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvdy5pc0hpZGRlbikgcmV0dXJuOyBcclxuXHJcbiAgICAgICAgICAgIGlmIChyb3cubWFyZ2luVG9wID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHJTcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgICAgIHRyU3Auc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpblRvcCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3Auc3R5bGUubGluZUhlaWdodCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdHJTcC5zdHlsZS5mb250U2l6ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGRTcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkU3AuY29sU3BhbiA9IDI7IFxyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3cubWFyZ2luQ29sb3I7IFxyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGRTcC5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3Auc3R5bGUuaGVpZ2h0ID0gcm93Lm1hcmdpblRvcCArIFwicHhcIjtcclxuICAgICAgICAgICAgICAgIHRyU3AuYXBwZW5kQ2hpbGQodGRTcCk7IFxyXG4gICAgICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHJTcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRHJhZyAmIERyb3AgcG91ciBkw6lwbGFjZXIgbGVzIGxpZ25lcyAoRGF0YSBldCBWaXJ0dWVsbGVzKVxyXG4gICAgICAgICAgICB0ci5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ3N0YXJ0ID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmRhdGFUcmFuc2Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHJvdy5sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxOYW1lOiByb3cub3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogcm93LmNvbHVtbkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IHJvdy5zb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlydHVhbDogcm93LmlzVmlydHVhbFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcInRleHQvcGxhaW5cIiwgSlNPTi5zdHJpbmdpZnkoZHJhZ0RhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0ci5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRyLm9uZHJhZ2VuZCA9IChlOiBEcmFnRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIC8vIEF1dG9yaXNlciBsZSBkcm9wIHN1ciBUT1VURVMgbGVzIGxpZ25lc1xyXG4gICAgICAgICAgICB0ci5vbmRyYWdvdmVyID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5kYXRhVHJhbnNmZXIuZHJvcEVmZmVjdCA9IFwibW92ZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHIuc3R5bGUuYm9yZGVyVG9wID0gXCIycHggc29saWQgIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcmFnbGVhdmUgPSAoZTogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ci5zdHlsZS5ib3JkZXJUb3AgPSBcIlwiO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIub25kcm9wID0gKGU6IERyYWdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRyLnN0eWxlLmJvcmRlclRvcCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YVN0ciA9IGUuZGF0YVRyYW5zZmVyLmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRPcmlnaW5hbE5hbWUgPSBkYXRhLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZpcnR1YWwgPSBkYXRhLmlzVmlydHVhbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRPcmlnaW5hbE5hbWUgIT09IHJvdy5vcmlnaW5hbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ0FMQ1VMIERFIExBIE5PVVZFTExFIFBPU0lUSU9OIChJTlNFUlRJT04gQVZBTlQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFJvd0luZGV4ID0gcm93cy5maW5kSW5kZXgociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gcm93Lm9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmV2U29ydEluZGV4ID0gLTEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRSb3dJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTb3J0SW5kZXggPSByb3dzW3RhcmdldFJvd0luZGV4IC0gMV0uc29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlNvcnRJbmRleCA9IHJvdy5zb3J0SW5kZXggLSAyMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U29ydEluZGV4ID0gKHByZXZTb3J0SW5kZXggKyByb3cuc29ydEluZGV4KSAvIDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDQVMgMTogTElHTkUgTUFOVUVMTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudERyYWdnZWRSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsJ2FmZmljaGFnZSBsb2NhbCAob3B0aW1pc3RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcmFnZ2VkUm93LmNvbHVtbkluZGV4ID0gY29sSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudERyYWdnZWRSb3cuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2xJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEluZGV4OiBuZXdTb3J0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJzaXN0ZXIgcG91ciBMaWduZSBNYW51ZWxsZSAocHJvcHJpw6l0w6lzICdjb2wnIGV0ICdwb3MnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogZHJhZ2dlZE9yaWdpbmFsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBuZXdTb3J0SW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmFmcmHDrmNoaXIgbCdhZmZpY2hhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDT1JSRUNUSU9OOiBSZW1wbGFjZXIgaW5uZXJIVE1MID0gXCJcIiBwYXIgdW5lIGJvdWNsZSBkZSBzdXBwcmVzc2lvbiBzw6ljdXJpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZsZXhDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5mbGV4Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxSb3dzRGF0YS5mb3JFYWNoKHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2x1bW5zVG9TaG93ID0gTWF0aC5tYXgobWF4Q29sVXNlZCwgdGhpcy5jb2x1bW5UaXRsZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyVGFibGVDb250ZW50KHRhYmxlLCBjb2xUaXRsZSwgY29sUm93cywgaSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDQVMgMjogTElHTkUgQ0xBU1NJUVVFIChFeGNlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJhZ2dlZEluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLndpdGhDYXRlZ29yeShjYXRlZ29yaWVzLCBkcmFnZ2VkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsIG1hcmdpblRvcDogMCwgaXNIaWRkZW46IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQ29sb3I6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiBcIlwiLCBjdXN0b21BbW91bnQ6IFwiXCIsIGlzSGVhZGVyOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgZm9udEZhbWlseTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbExhYmVsOiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRhbGljTGFiZWw6IGZhbHNlLCBib2xkTGFiZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2xkQW1vdW50OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpbkJvdHRvbSA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Ub3AgPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Ub3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIaWRkZW4gPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Db2xvciA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpbkNvbG9yIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5jdXN0b21MYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmN1c3RvbUxhYmVsIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIZWFkZXIgPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5mb250U2l6ZSA9IGN1cnJlbnREcmFnZ2VkUm93LmZvbnRTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRGYW1pbHkgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5iZ0xhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5jb2xvckxhYmVsIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pdGFsaWNMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93Lml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93LmJvbGRMYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0Ftb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmJnQW1vdW50IH0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJvbGRBbW91bnQgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkQW1vdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2F0ZWdvcmllcy5vYmplY3RzICYmIGNhdGVnb3JpZXMub2JqZWN0c1tkcmFnZ2VkSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF1bXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJjb2x1bW5JbmRleFwiICYmIGtleSAhPT0gXCJvcmRyZVRyaVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHNba2V5XSA9IHN0eWxlW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm9yZHJlVHJpID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInN0eWxlTGlnbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogZXhpc3RpbmdQcm9wc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRSb3dEYXRhID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkUm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBkcmFnZ2VkUm93RGF0YS5tYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0hpZGRlbjogZHJhZ2dlZFJvd0RhdGEuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21BbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBkcmFnZ2VkUm93RGF0YS5pc0hlYWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBkcmFnZ2VkUm93RGF0YS5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQ6IGRyYWdnZWRSb3dEYXRhLmZvbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5iZ0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JMYWJlbDogZHJhZ2dlZFJvd0RhdGEuY29sb3JMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0YWxpY0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYm9sZExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmJnQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JBbW91bnQ6IGRyYWdnZWRSb3dEYXRhLmNvbG9yQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZHJhZ2dlZFJvd0RhdGEuYm9sZEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENPUlJFQ1RJT046IFJlbXBsYWNlciBpbm5lckhUTUwgPSBcIlwiIHBhciB1bmUgYm91Y2xlIGRlIHN1cHByZXNzaW9uIHPDqWN1cmlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAvLyBDTElDIEdBVUNIRSBTVVIgTElHTkUgKFPDqWxlY3Rpb24gQXV0byArIFRvb2xiYXIpXHJcbiAgICAgICAgICAgIGlmICghcm93LmlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgdHIub25jbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTmUgcGFzIGTDqWNsZW5jaGVyIHNpIG9uIGVzdCBlbiB0cmFpbiBkZSBkcmFndWVyXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRyLmRyYWdnYWJsZSAmJiBlLmRldGFpbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBFbXDDqmNoZXIgbGEgZmVybWV0dXJlIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIFPDqWxlY3Rpb25uZXIgbGEgbGlnbmUgcG91ciBQb3dlciBCSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhvc3QucGVyc2lzdFByb3BlcnRpZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJzZWxlY3Rpb25NZW51XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpZ25lQWN0aXZlXCI6IHJvdy5vcmlnaW5hbE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIuIEFmZmljaGVyIGxhIHRvb2xiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VG9vbGJhcihyb3csIHRyLCBlLmNsaWVudFgsIGUuY2xpZW50WSwgY2F0ZWdvcmllcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRyLnRpdGxlID0gXCJDbGlxdWVyIHBvdXIgbW9kaWZpZXIgfCBHbGlzc2VyIHBvdXIgZMOpcGxhY2VyXCI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBmaW5hbEFtb3VudCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGlmIChyb3cuY3VzdG9tQW1vdW50ICYmIHJvdy5jdXN0b21BbW91bnQudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbEFtb3VudCA9IHJvdy5jdXN0b21BbW91bnQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF3VmFsID0gcGFyc2VGbG9hdChyb3cuYW1vdW50KTtcclxuICAgICAgICAgICAgICAgIGlmICghcm93LmlzVmlydHVhbCAmJiAhcm93LmlzSGVhZGVyICYmIHJvdy5hbW91bnQgJiYgIWlzTmFOKHJhd1ZhbCkgJiYgcmF3VmFsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0YWdlIGVuIG1vZGUgZMOpY2ltYWwgKHNhbnMgc3ltYm9sZSDigqwgYXV0b21hdGlxdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBbW91bnQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2ZyLUZSJywgeyBzdHlsZTogJ2RlY2ltYWwnLCBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDAgfSkuZm9ybWF0KHJhd1ZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRGYW1pbHkgPSByb3cuZm9udDsgdHIuc3R5bGUuZm9udFNpemUgPSByb3cuZm9udFNpemUgKyBcInB4XCI7IFxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZE5hbWUuaW5uZXJUZXh0ID0gcm93LmxhYmVsO1xyXG4gICAgICAgICAgICBjb25zdCBjZWxsQmcgPSAocm93LmlzSGVhZGVyIHx8IHJvdy5pc1ZpcnR1YWwpID8gcm93LmJnTGFiZWwgOiByb3cuYmdMYWJlbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIERFQlVHOiBWw6lyaWZpZXIgbGVzIGNvdWxldXJzIGF1IG1vbWVudCBkdSByZW5kdVxyXG4gICAgICAgICAgICBpZiAocm93LmNvbG9yTGFiZWwgIT09IFwiYmxhY2tcIiB8fCByb3cuYmdMYWJlbCAhPT0gXCJ0cmFuc3BhcmVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfjqggUkVOREVSSU5HXCIsIHJvdy5sYWJlbCwgXCJjb2xvckxhYmVsOlwiLCByb3cuY29sb3JMYWJlbCwgXCJiZ0xhYmVsOlwiLCByb3cuYmdMYWJlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjZWxsQmc7IHRkTmFtZS5zdHlsZS5jb2xvciA9IHJvdy5jb2xvckxhYmVsO1xyXG4gICAgICAgICAgICBpZiAocm93LmJvbGRMYWJlbCkgdGROYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgaWYgKHJvdy5pdGFsaWNMYWJlbCkgdGROYW1lLnN0eWxlLmZvbnRTdHlsZSA9IFwiaXRhbGljXCI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTSU1QTElGScOJOiBCb3JkdXJlIGNvbXBsw6h0ZSBkZSBsaWduZSAocGFzIGRlIHPDqXBhcmF0aW9uIGxhYmVsL3ByaXgpXHJcbiAgICAgICAgICAgIGNvbnN0IGJvcmRlclN0eWxlID0gYCR7cm93LmJvcmRlcldpZHRofXB4IHNvbGlkICR7cm93LmJvcmRlckNvbG9yfWA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ZE5hbWUuc3R5bGUuYm9yZGVyID0gYm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIHRkTmFtZS5zdHlsZS5ib3JkZXJSaWdodCA9IFwibm9uZVwiOyAvLyBQYXMgZGUgYm9yZHVyZSBlbnRyZSBsYWJlbCBldCBwcml4XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZE5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGRBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LmlubmVyVGV4dCA9IGZpbmFsQW1vdW50OyBcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICB0ZEFtb3VudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAocm93LmlzSGVhZGVyIHx8IHJvdy5pc1ZpcnR1YWwpID8gcm93LmJnTGFiZWwgOiByb3cuYmdBbW91bnQ7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmNvbG9yID0gcm93LmNvbG9yQW1vdW50O1xyXG4gICAgICAgICAgICBpZiAocm93LmJvbGRBbW91bnQpIHRkQW1vdW50LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIE3Dqm1lIGJvcmR1cmUgc3VyIGxlcyA0IGPDtHTDqXNcclxuICAgICAgICAgICAgdGRBbW91bnQuc3R5bGUuYm9yZGVyID0gYm9yZGVyU3R5bGU7XHJcbiAgICAgICAgICAgIHRkQW1vdW50LnN0eWxlLmJvcmRlckxlZnQgPSBcIm5vbmVcIjsgLy8gUGFzIGRlIGJvcmR1cmUgZW50cmUgbGFiZWwgZXQgcHJpeFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRBbW91bnQpO1xyXG5cclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJvdy5tYXJnaW5Cb3R0b20gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0clNwQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgICAgIHRyU3BCLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Cb3R0b20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5zdHlsZS5saW5lSGVpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5zdHlsZS5mb250U2l6ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGRTcEIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5jb2xTcGFuID0gMjsgXHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByb3cubWFyZ2luQ29sb3I7IFxyXG4gICAgICAgICAgICAgICAgdGRTcEIuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0ZFNwQi5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRkU3BCLnN0eWxlLmhlaWdodCA9IHJvdy5tYXJnaW5Cb3R0b20gKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICB0clNwQi5hcHBlbmRDaGlsZCh0ZFNwQik7IFxyXG4gICAgICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHJTcEIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFpPTkUgREUgRFJPUCBFTiBCQVMgREUgQ09MT05ORSAoUG91ciBham91dGVyIMOgIGxhIGZpbilcclxuICAgICAgICBjb25zdCBkcm9wWm9uZVRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgIGRyb3Bab25lVHIuc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7IFxyXG4gICAgICAgIGNvbnN0IGRyb3Bab25lVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgZHJvcFpvbmVUZC5jb2xTcGFuID0gMjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcclxuICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJvcmRlciA9IFwiMnB4IGRhc2hlZCB0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIGRyb3Bab25lVGQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMnNcIjtcclxuICAgICAgICAvLyBDT1JSRUNUSU9OOiBVdGlsaXNlciB0ZXh0Q29udGVudCBwb3VyIHZpZGVyXHJcbiAgICAgICAgZHJvcFpvbmVUZC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZHJvcFpvbmVUci5hcHBlbmRDaGlsZChkcm9wWm9uZVRkKTtcclxuXHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdvdmVyID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAoZS5kYXRhVHJhbnNmZXIpIGUuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3QgPSBcIm1vdmVcIjtcclxuICAgICAgICAgICAgZHJvcFpvbmVUZC5zdHlsZS5ib3JkZXIgPSBcIjJweCBkYXNoZWQgIzAwN2FjY1wiO1xyXG4gICAgICAgICAgICBkcm9wWm9uZVRkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAxMjIsIDIwNCwgMC4xKVwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyYWdsZWF2ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcFpvbmVUci5vbmRyb3AgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYm9yZGVyID0gXCIycHggZGFzaGVkIHRyYW5zcGFyZW50XCI7XHJcbiAgICAgICAgICAgIGRyb3Bab25lVGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKGUuZGF0YVRyYW5zZmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhU3RyID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRyYWdnZWRPcmlnaW5hbE5hbWUgPSBkYXRhLm9yaWdpbmFsTmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVmlydHVhbCA9IGRhdGEuaXNWaXJ0dWFsO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENBTENVTCBERSBMQSBOT1VWRUxMRSBQT1NJVElPTiAoRklOIERFIENPTE9OTkUpXHJcbiAgICAgICAgICAgICAgICBsZXQgbGFzdFNvcnRJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFNvcnRJbmRleCA9IHJvd3Nbcm93cy5sZW5ndGggLSAxXS5zb3J0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3U29ydEluZGV4ID0gbGFzdFNvcnRJbmRleCArIDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENBUyAxOiBMSUdORSBNQU5VRUxMRVxyXG4gICAgICAgICAgICAgICAgaWYgKGlzVmlydHVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREcmFnZ2VkUm93ID0gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsJ2FmZmljaGFnZSBsb2NhbCAob3B0aW1pc3RlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHJhZ2dlZFJvdy5zb3J0SW5kZXggPSBuZXdTb3J0SW5kZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY29sSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0SW5kZXg6IG5ld1NvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBlcnNpc3RlciBwb3VyIExpZ25lIE1hbnVlbGxlIChwcm9wcmnDqXTDqXMgJ2NvbCcgZXQgJ3BvcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBkcmFnZ2VkT3JpZ2luYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sOiBjb2xJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiBuZXdTb3J0SW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJhZnJhw65jaGlyIGwnYWZmaWNoYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENPUlJFQ1RJT046IFJlbXBsYWNlciBpbm5lckhUTUwgPSBcIlwiIHBhciB1bmUgYm91Y2xlIGRlIHN1cHByZXNzaW9uIHPDqWN1cmlzw6llXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmZsZXhDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sVXNlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyLmNvbHVtbkluZGV4ID4gbWF4Q29sVXNlZCkgbWF4Q29sVXNlZCA9IHIuY29sdW1uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhDb2x1bW5zVG9TaG93OyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xEaXYuY2xhc3NOYW1lID0gXCJkeW5hbWljLWNvbHVtblwiOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xSb3dzID0gdGhpcy5hbGxSb3dzRGF0YS5maWx0ZXIociA9PiByLmNvbHVtbkluZGV4ID09PSBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbFRpdGxlID0gdGhpcy5jb2x1bW5UaXRsZXNbaS0xXSB8fCAoXCJDT0xPTk5FIFwiICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBDQVMgMjogTElHTkUgQ0xBU1NJUVVFIChFeGNlbClcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkSW5kZXggPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IGRyYWdnZWRPcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkcmFnZ2VkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGRyYWdnZWRJbmRleClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERyYWdnZWRSb3cgPSB0aGlzLmFsbFJvd3NEYXRhLmZpbmQociA9PiByLm9yaWdpbmFsTmFtZSA9PT0gZHJhZ2dlZE9yaWdpbmFsTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXhpc3RpbmdQcm9wczogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUxhYmVsOiBcIlwiLCBjdXN0b21BbW91bnQ6IFwiXCIsIGlzSGVhZGVyOiBmYWxzZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbExhYmVsOiB7c29saWQ6e2NvbG9yOlwiYmxhY2tcIn19LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0YWxpY0xhYmVsOiBmYWxzZSwgYm9sZExhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxBbW91bnQ6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RHJhZ2dlZFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5tYXJnaW5Cb3R0b20gPSBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Cb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLm1hcmdpblRvcCA9IGN1cnJlbnREcmFnZ2VkUm93Lm1hcmdpblRvcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuaXNIaWRkZW4gPSBjdXJyZW50RHJhZ2dlZFJvdy5pc0hpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMubWFyZ2luQ29sb3IgPSB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50RHJhZ2dlZFJvdy5tYXJnaW5Db2xvciB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmN1c3RvbUxhYmVsID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tTGFiZWwgfHwgXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY3VzdG9tQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuY3VzdG9tQW1vdW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmlzSGVhZGVyID0gY3VycmVudERyYWdnZWRSb3cuaXNIZWFkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRTaXplID0gY3VycmVudERyYWdnZWRSb3cuZm9udFNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZvbnRGYW1pbHkgPSBjdXJyZW50RHJhZ2dlZFJvdy5mb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5iZ0xhYmVsID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmZpbGxMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnREcmFnZ2VkUm93LmNvbG9yTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5pdGFsaWNMYWJlbCA9IGN1cnJlbnREcmFnZ2VkUm93Lml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkTGFiZWwgPSBjdXJyZW50RHJhZ2dlZFJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzLmJnQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuYmdBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5maWxsQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogY3VycmVudERyYWdnZWRSb3cuY29sb3JBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5ib2xkQW1vdW50ID0gY3VycmVudERyYWdnZWRSb3cuYm9sZEFtb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gY2F0ZWdvcmllcy5vYmplY3RzW2RyYWdnZWRJbmRleF1bXCJzdHlsZUxpZ25lXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gXCJjb2x1bW5JbmRleFwiICYmIGtleSAhPT0gXCJvcmRyZVRyaVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Byb3BzW2tleV0gPSBzdHlsZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nUHJvcHMuY29sdW1uSW5kZXggPSBjb2xJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdQcm9wcy5vcmRyZVRyaSA9IG5ld1NvcnRJbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi8J+UtSBEUkFHIChFTkQgWk9ORSkgRmluYWwgcHJvcHMgdG8gcGVyc2lzdDpcIiwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdQcm9wcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VzVG9QZXJzaXN0OiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXJnZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBcInN0eWxlTGlnbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0aW9uSWQuZ2V0U2VsZWN0b3IoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiBleGlzdGluZ1Byb3BzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5+iIFBFUlNJU1RJTkcgKGRyYWcgZW5kIHpvbmUpOlwiLCBKU09OLnN0cmluZ2lmeShpbnN0YW5jZXNUb1BlcnNpc3QpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaG9zdC5wZXJzaXN0UHJvcGVydGllcyhpbnN0YW5jZXNUb1BlcnNpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuKchSBwZXJzaXN0UHJvcGVydGllcyBjYWxsZWQgc3VjY2Vzc2Z1bGx5IChkcm9wIGF0IGVuZClcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkcmFnZ2VkUm93RGF0YSA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSBkcmFnZ2VkT3JpZ2luYWxOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRyYWdnZWRSb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2VkUm93RGF0YS5jb2x1bW5JbmRleCA9IGNvbEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dlZFJvd0RhdGEuc29ydEluZGV4ID0gbmV3U29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBlbmRpbmdDaGFuZ2VzLnNldChkcmFnZ2VkT3JpZ2luYWxOYW1lLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IGNvbEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRJbmRleDogbmV3U29ydEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogZHJhZ2dlZFJvd0RhdGEubWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGlkZGVuOiBkcmFnZ2VkUm93RGF0YS5pc0hpZGRlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogZHJhZ2dlZFJvd0RhdGEubWFyZ2luQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmN1c3RvbUxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY3VzdG9tQW1vdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSGVhZGVyOiBkcmFnZ2VkUm93RGF0YS5pc0hlYWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogZHJhZ2dlZFJvd0RhdGEuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogZHJhZ2dlZFJvd0RhdGEuZm9udCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiBkcmFnZ2VkUm93RGF0YS5iZ0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yTGFiZWw6IGRyYWdnZWRSb3dEYXRhLmNvbG9yTGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRhbGljTGFiZWw6IGRyYWdnZWRSb3dEYXRhLml0YWxpY0xhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogZHJhZ2dlZFJvd0RhdGEuYm9sZExhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnQW1vdW50OiBkcmFnZ2VkUm93RGF0YS5iZ0Ftb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvckFtb3VudDogZHJhZ2dlZFJvd0RhdGEuY29sb3JBbW91bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9sZEFtb3VudDogZHJhZ2dlZFJvd0RhdGEuYm9sZEFtb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDT1JSRUNUSU9OOiBSZW1wbGFjZXIgaW5uZXJIVE1MID0gXCJcIiBwYXIgdW5lIGJvdWNsZSBkZSBzdXBwcmVzc2lvbiBzw6ljdXJpc8OpZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbGV4Q29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmxleENvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDb2xVc2VkID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsUm93c0RhdGEuZm9yRWFjaChyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoci5jb2x1bW5JbmRleCA+IG1heENvbFVzZWQpIG1heENvbFVzZWQgPSByLmNvbHVtbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q29sdW1uc1RvU2hvdyA9IE1hdGgubWF4KG1heENvbFVzZWQsIHRoaXMuY29sdW1uVGl0bGVzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG1heENvbHVtbnNUb1Nob3c7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmNsYXNzTmFtZSA9IFwiZHluYW1pYy1jb2x1bW5cIjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sRGl2LmFwcGVuZENoaWxkKHRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUm93cyA9IHRoaXMuYWxsUm93c0RhdGEuZmlsdGVyKHIgPT4gci5jb2x1bW5JbmRleCA9PT0gaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sVGl0bGUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdIHx8IChcIkNPTE9OTkUgXCIgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclRhYmxlQ29udGVudCh0YWJsZSwgY29sVGl0bGUsIGNvbFJvd3MsIGksIGNhdGVnb3JpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xEaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0Ym9keS5hcHBlbmRDaGlsZChkcm9wWm9uZVRyKTtcclxuXHJcbiAgICAgICAgdGFyZ2V0VGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1Rvb2xiYXIocm93OiBSb3dEYXRhLCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNhdGVnb3JpZXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+foiBzaG93VG9vbGJhciBjYWxsZWQgZm9yOlwiLCByb3cub3JpZ2luYWxOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLwn5S0IENhdGVnb3JpZXMgaXMgbnVsbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogVmlkZXIgbGEgdG9vbGJhciBwcm9wcmVtZW50XHJcbiAgICAgICAgd2hpbGUgKHRoaXMudG9vbGJhci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5yZW1vdmVDaGlsZCh0aGlzLnRvb2xiYXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG4gICAgICAgIC8vIFN0b3AgcHJvcGFnYXRpb24gb24gdGhlIHRvb2xiYXIgaXRzZWxmXHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9ubW91c2Vkb3duID0gKGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLm9uY2xpY2sgPSAoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gUG9zaXRpb25uZXIgbGEgdG9vbGJhclxyXG4gICAgICAgIGNvbnN0IHRvb2xiYXJXaWR0aCA9IDQwMDsgLy8gQVVHTUVOVMOJIHBvdXIgbGVzIG5vdXZlYXV4IGJvdXRvbnNcclxuICAgICAgICBsZXQgbGVmdCA9IHggLSB0b29sYmFyV2lkdGggLyAyO1xyXG4gICAgICAgIGlmIChsZWZ0IDwgMTApIGxlZnQgPSAxMDtcclxuICAgICAgICBpZiAobGVmdCArIHRvb2xiYXJXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSBsZWZ0ID0gd2luZG93LmlubmVyV2lkdGggLSB0b29sYmFyV2lkdGggLSAxMDtcclxuXHJcbiAgICAgICAgbGV0IHRvcCA9IHkgLSA1MDtcclxuICAgICAgICBpZiAodG9wIDwgMTApIHRvcCA9IHkgKyAyMDtcclxuXHJcbiAgICAgICAgdGhpcy50b29sYmFyLnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY2F0ZWdvcmllcy52YWx1ZXMuZmluZEluZGV4KHYgPT4gdi50b1N0cmluZygpID09PSByb3cub3JpZ2luYWxOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIvCfn6IgSW5kZXggZm91bmQ6XCIsIGluZGV4KTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi8J+UtCBJbmRleCBub3QgZm91bmQgZm9yXCIsIHJvdy5vcmlnaW5hbE5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2VsZWN0aW9uSWRCdWlsZGVyID0gdGhpcy5ob3N0LmNyZWF0ZVNlbGVjdGlvbklkQnVpbGRlcigpO1xyXG4gICAgICAgIHNlbGVjdGlvbklkQnVpbGRlciA9IHNlbGVjdGlvbklkQnVpbGRlci53aXRoQ2F0ZWdvcnkoY2F0ZWdvcmllcywgaW5kZXgpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbklkID0gc2VsZWN0aW9uSWRCdWlsZGVyLmNyZWF0ZVNlbGVjdGlvbklkKCk7XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIG1ldHRyZSDDoCBqb3VyIHBlbmRpbmdDaGFuZ2VzXHJcbiAgICAgICAgY29uc3QgdXBkYXRlUGVuZGluZyA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLnBlbmRpbmdDaGFuZ2VzLmdldChyb3cub3JpZ2luYWxOYW1lKSB8fCB7IHRpbWVzdGFtcDogRGF0ZS5ub3coKSB9O1xyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkID0geyAuLi5jdXJyZW50LCAuLi5wcm9wcywgdGltZXN0YW1wOiBEYXRlLm5vdygpIH07XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0NoYW5nZXMuc2V0KHJvdy5vcmlnaW5hbE5hbWUsIHVwZGF0ZWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIEhlbHBlciBwb3VyIHLDqWN1cMOpcmVyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGUgbGEgbGlnbmVcclxuICAgICAgICBjb25zdCBnZXRDdXJyZW50Um93ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hbGxSb3dzRGF0YS5maW5kKHIgPT4gci5vcmlnaW5hbE5hbWUgPT09IHJvdy5vcmlnaW5hbE5hbWUpIHx8IHJvdztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBIZWxwZXIgcG91ciBwZXJzaXN0ZXIgVE9VVEVTIGxlcyBwcm9wcmnDqXTDqXMgKMOpdml0ZSBsZXMgcGVydGVzKVxyXG4gICAgICAgIGNvbnN0IHBlcnNpc3RBbGxQcm9wcyA9IChvdmVycmlkZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Um93ID0gZ2V0Q3VycmVudFJvdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZnVsbFByb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5JbmRleDogY3VycmVudFJvdy5jb2x1bW5JbmRleCxcclxuICAgICAgICAgICAgICAgIG9yZHJlVHJpOiBjdXJyZW50Um93LnNvcnRJbmRleCxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogY3VycmVudFJvdy5tYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IGN1cnJlbnRSb3cubWFyZ2luVG9wLFxyXG4gICAgICAgICAgICAgICAgaXNIaWRkZW46IGN1cnJlbnRSb3cuaXNIaWRkZW4sXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Db2xvcjogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5tYXJnaW5Db2xvciB9IH0sXHJcbiAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogY3VycmVudFJvdy5jdXN0b21MYWJlbCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tQW1vdW50OiBjdXJyZW50Um93LmN1c3RvbUFtb3VudCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXNIZWFkZXI6IGN1cnJlbnRSb3cuaXNIZWFkZXIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogY3VycmVudFJvdy5mb250U2l6ZSxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGN1cnJlbnRSb3cuZm9udCxcclxuICAgICAgICAgICAgICAgIGJnTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYmdMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsTGFiZWw6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuY29sb3JMYWJlbCB9IH0sXHJcbiAgICAgICAgICAgICAgICBpdGFsaWNMYWJlbDogY3VycmVudFJvdy5pdGFsaWNMYWJlbCxcclxuICAgICAgICAgICAgICAgIGJvbGRMYWJlbDogY3VycmVudFJvdy5ib2xkTGFiZWwsXHJcbiAgICAgICAgICAgICAgICBiZ0Ftb3VudDogeyBzb2xpZDogeyBjb2xvcjogY3VycmVudFJvdy5iZ0Ftb3VudCB9IH0sXHJcbiAgICAgICAgICAgICAgICBmaWxsQW1vdW50OiB7IHNvbGlkOiB7IGNvbG9yOiBjdXJyZW50Um93LmNvbG9yQW1vdW50IH0gfSxcclxuICAgICAgICAgICAgICAgIGJvbGRBbW91bnQ6IGN1cnJlbnRSb3cuYm9sZEFtb3VudCxcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiBjdXJyZW50Um93LmJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IGN1cnJlbnRSb3cuYm9yZGVyQ29sb3IgfSB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvdmVycmlkZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGZ1bGxQcm9wc1trZXldID0gb3ZlcnJpZGVzW2tleV07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ob3N0LnBlcnNpc3RQcm9wZXJ0aWVzKHtcclxuICAgICAgICAgICAgICAgIHJlcGxhY2U6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJzdHlsZUxpZ25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3I6IHNlbGVjdGlvbklkLmdldFNlbGVjdG9yKCksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogZnVsbFByb3BzXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyAtLS0gQk9VVE9OUyAtLS1cclxuXHJcbiAgICAgICAgLy8gR1JBUyAoQilcclxuICAgICAgICBjb25zdCBidG5Cb2xkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBDT1JSRUNUSU9OOiBDcsOpYXRpb24gRE9NIHBvdXIgPGI+QjwvYj5cclxuICAgICAgICBjb25zdCBiRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xyXG4gICAgICAgIGJFbGVtLnRleHRDb250ZW50ID0gXCJCXCI7XHJcbiAgICAgICAgYnRuQm9sZC5hcHBlbmRDaGlsZChiRWxlbSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYnRuQm9sZC50aXRsZSA9IFwiR3Jhc1wiO1xyXG4gICAgICAgIGlmIChyb3cuYm9sZExhYmVsKSBidG5Cb2xkLmNsYXNzTmFtZSA9IFwiYWN0aXZlXCI7XHJcbiAgICAgICAgYnRuQm9sZC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgIGJ0bkJvbGQuY2xhc3NOYW1lID0gbmV3VmFsID8gXCJhY3RpdmVcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICByb3cuYm9sZExhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICByb3cuYm9sZEFtb3VudCA9IG5ld1ZhbDtcclxuICAgICAgICAgICAgY29uc3Qgd2VpZ2h0ID0gbmV3VmFsID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFdlaWdodCA9IHdlaWdodDtcclxuICAgICAgICAgICAgaWYgKHRyLmNlbGxzWzFdKSAodHIuY2VsbHNbMV0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmZvbnRXZWlnaHQgPSB3ZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgYm9sZExhYmVsOiBuZXdWYWwsIGJvbGRBbW91bnQ6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5Cb2xkKTtcclxuXHJcbiAgICAgICAgLy8gSVRBTElRVUUgKEkpXHJcbiAgICAgICAgY29uc3QgYnRuSXRhbGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAvLyBDT1JSRUNUSU9OOiBDcsOpYXRpb24gRE9NIHBvdXIgPGk+STwvaT5cclxuICAgICAgICBjb25zdCBpRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgICAgIGlFbGVtLnRleHRDb250ZW50ID0gXCJJXCI7XHJcbiAgICAgICAgYnRuSXRhbGljLmFwcGVuZENoaWxkKGlFbGVtKTtcclxuXHJcbiAgICAgICAgYnRuSXRhbGljLnRpdGxlID0gXCJJdGFsaXF1ZVwiO1xyXG4gICAgICAgIGlmIChyb3cuaXRhbGljTGFiZWwpIGJ0bkl0YWxpYy5jbGFzc05hbWUgPSBcImFjdGl2ZVwiO1xyXG4gICAgICAgIGJ0bkl0YWxpYy5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgbmV3VmFsID0gIXJvdy5pdGFsaWNMYWJlbDtcclxuICAgICAgICAgICAgYnRuSXRhbGljLmNsYXNzTmFtZSA9IG5ld1ZhbCA/IFwiYWN0aXZlXCIgOiBcIlwiO1xyXG5cclxuICAgICAgICAgICAgcm93Lml0YWxpY0xhYmVsID0gbmV3VmFsO1xyXG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IG5ld1ZhbCA/IFwiaXRhbGljXCIgOiBcIm5vcm1hbFwiO1xyXG4gICAgICAgICAgICBpZiAodHIuY2VsbHNbMF0pICh0ci5jZWxsc1swXSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFN0eWxlID0gc3R5bGU7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVQZW5kaW5nKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICAgICAgcGVyc2lzdEFsbFByb3BzKHsgaXRhbGljTGFiZWw6IG5ld1ZhbCB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChidG5JdGFsaWMpO1xyXG5cclxuICAgICAgICAvLyBTRVBBUkFURVVSXHJcbiAgICAgICAgY29uc3Qgc2VwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2VwMS5jbGFzc05hbWUgPSBcInNlcGFyYXRvclwiO1xyXG4gICAgICAgIHRoaXMudG9vbGJhci5hcHBlbmRDaGlsZChzZXAxKTtcclxuXHJcbiAgICAgICAgLy8gVEFJTExFIFBPTElDRSAoc8OpbGVjdGV1cilcclxuICAgICAgICBjb25zdCBmb250U2l6ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtc2l6ZS13cmFwcGVyXCI7XHJcbiAgICAgICAgY29uc3QgbGJsRm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbGJsRm9udFNpemUuaW5uZXJUZXh0ID0gXCJUYWlsbGVcIjtcclxuICAgICAgICBsYmxGb250U2l6ZS5zdHlsZS5tYXJnaW5SaWdodCA9IFwiNHB4XCI7XHJcbiAgICAgICAgZm9udFNpemVXcmFwcGVyLmFwcGVuZENoaWxkKGxibEZvbnRTaXplKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udFNpemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLnRpdGxlID0gXCJUYWlsbGUgZGUgcG9saWNlXCI7XHJcbiAgICAgICAgZm9yIChsZXQgcyA9IDg7IHMgPD0gMjQ7IHMrKykge1xyXG4gICAgICAgICAgICBjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHQudmFsdWUgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udFNpemUgPT09IHMpIG9wdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHNlbGVjdEZvbnRTaXplLmFwcGVuZENoaWxkKG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGVjdEZvbnRTaXplLm9uY2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgY29uc3QgcyA9IHBhcnNlSW50KHNlbGVjdEZvbnRTaXplLnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgIHJvdy5mb250U2l6ZSA9IHM7XHJcbiAgICAgICAgICAgIHRyLnN0eWxlLmZvbnRTaXplID0gcyArIFwicHhcIjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnRTaXplOiBzIH0pO1xyXG4gICAgICAgICAgICBwZXJzaXN0QWxsUHJvcHMoeyBmb250U2l6ZTogcyB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvbnRTaXplV3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250U2l6ZSk7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKGZvbnRTaXplV3JhcHBlcik7XHJcblxyXG4gICAgICAgIC8vIFNFUEFSQVRFVVJcclxuICAgICAgICBjb25zdCBzZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzZXAzLmNsYXNzTmFtZSA9IFwic2VwYXJhdG9yXCI7XHJcbiAgICAgICAgdGhpcy50b29sYmFyLmFwcGVuZENoaWxkKHNlcDMpO1xyXG5cclxuICAgICAgICAvLyBQT0xJQ0UgKGZvbnQtZmFtaWx5KVxyXG4gICAgICAgIGNvbnN0IGZvbnRGYW1pbHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5jbGFzc05hbWUgPSBcImZvbnQtZmFtaWx5LXdyYXBwZXJcIjtcclxuICAgICAgICBjb25zdCBsYmxGb250RmFtaWx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGxibEZvbnRGYW1pbHkuaW5uZXJUZXh0ID0gXCJQb2xpY2VcIjtcclxuICAgICAgICBsYmxGb250RmFtaWx5LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI0cHhcIjtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChsYmxGb250RmFtaWx5KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0Rm9udEZhbWlseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgc2VsZWN0Rm9udEZhbWlseS50aXRsZSA9IFwiUG9saWNlXCI7XHJcbiAgICAgICAgY29uc3QgZm9udHMgPSBbXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJTZWdvZSBVSVwiLCB2YWx1ZTogXCInU2Vnb2UgVUknLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkFyaWFsXCIsIHZhbHVlOiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNhbGlicmlcIiwgdmFsdWU6IFwiQ2FsaWJyaSwgc2Fucy1zZXJpZlwiIH0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgdmFsdWU6IFwiJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmXCIgfSxcclxuICAgICAgICAgICAgeyBuYW1lOiBcIkNvdXJpZXIgTmV3XCIsIHZhbHVlOiBcIidDb3VyaWVyIE5ldycsIG1vbm9zcGFjZVwiIH1cclxuICAgICAgICBdO1xyXG4gICAgICAgIGZvbnRzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGYudmFsdWU7XHJcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBmLm5hbWU7XHJcbiAgICAgICAgICAgIGlmIChyb3cuZm9udCA9PT0gZi52YWx1ZSkgb3B0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgc2VsZWN0Rm9udEZhbWlseS5hcHBlbmRDaGlsZChvcHQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGVjdEZvbnRGYW1pbHkub25jaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBmID0gc2VsZWN0Rm9udEZhbWlseS52YWx1ZTtcclxuICAgICAgICAgICAgcm93LmZvbnQgPSBmO1xyXG4gICAgICAgICAgICB0ci5zdHlsZS5mb250RmFtaWx5ID0gZjtcclxuICAgICAgICAgICAgdXBkYXRlUGVuZGluZyh7IGZvbnQ6IGYgfSk7XHJcbiAgICAgICAgICAgIHBlcnNpc3RBbGxQcm9wcyh7IGZvbnRGYW1pbHk6IGYgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb250RmFtaWx5V3JhcHBlci5hcHBlbmRDaGlsZChzZWxlY3RGb250RmFtaWx5KTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoZm9udEZhbWlseVdyYXBwZXIpO1xyXG5cclxuICAgICAgICAvLyBCT1VUT04gRkVSTUVSXHJcbiAgICAgICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGJ0bkNsb3NlLmNsYXNzTmFtZSA9IFwiY2xvc2UtYnRuXCI7XHJcbiAgICAgICAgLy8gQ09SUkVDVElPTjogVXRpbGlzZXIgdGV4dENvbnRlbnRcclxuICAgICAgICBidG5DbG9zZS50ZXh0Q29udGVudCA9IFwi4pyWXCI7XHJcbiAgICAgICAgYnRuQ2xvc2Uub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnRvb2xiYXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbnVtZXJhdGVPYmplY3RJbnN0YW5jZXMob3B0aW9uczogRW51bWVyYXRlVmlzdWFsT2JqZWN0SW5zdGFuY2VzT3B0aW9ucyk6IFZpc3VhbE9iamVjdEluc3RhbmNlW10gfCBWaXN1YWxPYmplY3RJbnN0YW5jZUVudW1lcmF0aW9uT2JqZWN0IHtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZXM6IFZpc3VhbE9iamVjdEluc3RhbmNlW10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gU0VDVElPTiAwOiBUSVRSRVMgQ09MT05ORVMgKHRvdWpvdXJzIHZpc2libGUpXHJcbiAgICAgICAgaWYgKG9wdGlvbnMub2JqZWN0TmFtZSA9PT0gXCJ0aXRyZXNDb2xvbm5lc1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BzOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMjA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0cmUgPSB0aGlzLmNvbHVtblRpdGxlc1tpLTFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRpdHJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbXCJ0aXRyZVwiICsgaV0gPSB0aXRyZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh7IFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0TmFtZTogXCJ0aXRyZXNDb2xvbm5lc1wiLCBcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcHNcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTRUNUSU9OIDE6IFPDiUxFQ1RJT04gKHVuaXF1ZW1lbnQgc2kgZG9ubsOpZXMgRXhjZWwgZXhpc3RlbnQpXHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcmljYWxEYXRhICYmIG9wdGlvbnMub2JqZWN0TmFtZSA9PT0gXCJzZWxlY3Rpb25NZW51XCIpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2goeyBcclxuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwic2VsZWN0aW9uTWVudVwiLCBcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllczogeyBsaWduZUFjdGl2ZTogdGhpcy5jdXJyZW50U2VsZWN0ZWRMYWJlbCB9IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNFQ1RJT04gMjogUEVSU09OTkFMSVNBVElPTiAodW5pcXVlbWVudCBzaSBkb25uw6llcyBFeGNlbCBleGlzdGVudCBldCBsaWduZSBzw6lsZWN0aW9ubsOpZSlcclxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yaWNhbERhdGEgJiYgb3B0aW9ucy5vYmplY3ROYW1lID09PSBcInN0eWxlTGlnbmVcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdGhpcy5jYXRlZ29yaWNhbERhdGEuY2F0ZWdvcmllc1swXTtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXhDaG9pc2kgPSBjYXRlZ29yaWVzLnZhbHVlcy5maW5kSW5kZXgodiA9PiB2LnRvU3RyaW5nKCkgPT09IHRoaXMuY3VycmVudFNlbGVjdGVkTGFiZWwpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGluZGV4Q2hvaXNpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSWQgPSB0aGlzLmhvc3QuY3JlYXRlU2VsZWN0aW9uSWRCdWlsZGVyKCkud2l0aENhdGVnb3J5KGNhdGVnb3JpZXMsIGluZGV4Q2hvaXNpKS5jcmVhdGVTZWxlY3Rpb25JZCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm93RGF0YSA9IHRoaXMuYWxsUm93c0RhdGEuZmluZChyID0+IHIub3JpZ2luYWxOYW1lID09PSB0aGlzLmN1cnJlbnRTZWxlY3RlZExhYmVsKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb3BzOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IDEsIG9yZHJlVHJpOiBpbmRleENob2lzaSwgbWFyZ2luQm90dG9tOiAwLCBtYXJnaW5Ub3A6IDAsIGlzSGlkZGVuOiBmYWxzZSwgbWFyZ2luQ29sb3I6IHtzb2xpZDp7Y29sb3I6XCJ0cmFuc3BhcmVudFwifX0sXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tTGFiZWw6IFwiXCIsIGN1c3RvbUFtb3VudDogXCJcIiwgaXNIZWFkZXI6IGZhbHNlLCBmb250U2l6ZTogMTIsIGZvbnRGYW1pbHk6IFwiJ1NlZ29lIFVJJywgc2Fucy1zZXJpZlwiLCBcclxuICAgICAgICAgICAgICAgICAgICBiZ0xhYmVsOiB7c29saWQ6e2NvbG9yOlwidHJhbnNwYXJlbnRcIn19LCBmaWxsTGFiZWw6IHtzb2xpZDp7Y29sb3I6XCJibGFja1wifX0sIGl0YWxpY0xhYmVsOiBmYWxzZSwgYm9sZExhYmVsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBiZ0Ftb3VudDoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgZmlsbEFtb3VudDoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgYm9sZEFtb3VudDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHsgc29saWQ6IHsgY29sb3I6IFwiI2VlZVwiIH0gfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ2hhcmdlciBkZXB1aXMgREJcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLm9iamVjdHMgJiYgY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4Q2hvaXNpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gY2F0ZWdvcmllcy5vYmplY3RzW2luZGV4Q2hvaXNpXVtcInN0eWxlTGlnbmVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcImNvbHVtbkluZGV4XCJdKSBwcm9wcy5jb2x1bW5JbmRleCA9IHN0eWxlW1wiY29sdW1uSW5kZXhcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZVtcIm9yZHJlVHJpXCJdICE9PSB1bmRlZmluZWQpIHByb3BzLm9yZHJlVHJpID0gc3R5bGVbXCJvcmRyZVRyaVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQm90dG9tXCJdKSBwcm9wcy5tYXJnaW5Cb3R0b20gPSBzdHlsZVtcIm1hcmdpbkJvdHRvbVwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luVG9wXCJdKSBwcm9wcy5tYXJnaW5Ub3AgPSBzdHlsZVtcIm1hcmdpblRvcFwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wiaXNIaWRkZW5cIl0pIHByb3BzLmlzSGlkZGVuID0gc3R5bGVbXCJpc0hpZGRlblwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlW1wibWFyZ2luQ29sb3JcIl0pIHByb3BzLm1hcmdpbkNvbG9yID0gc3R5bGVbXCJtYXJnaW5Db2xvclwiXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFN1cmNoYXJnZXIgYXZlYyByb3dEYXRhXHJcbiAgICAgICAgICAgICAgICBpZiAocm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNvbHVtbkluZGV4ID0gcm93RGF0YS5jb2x1bW5JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcmRyZVRyaSA9IHJvd0RhdGEuc29ydEluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmdpbkJvdHRvbSA9IHJvd0RhdGEubWFyZ2luQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm1hcmdpblRvcCA9IHJvd0RhdGEubWFyZ2luVG9wO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmlzSGlkZGVuID0gcm93RGF0YS5pc0hpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5tYXJnaW5Db2xvciA9IHsgc29saWQ6IHsgY29sb3I6IHJvd0RhdGEubWFyZ2luQ29sb3IgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmN1c3RvbUxhYmVsID0gcm93RGF0YS5jdXN0b21MYWJlbCB8fCBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmN1c3RvbUFtb3VudCA9IHJvd0RhdGEuY3VzdG9tQW1vdW50IHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXNIZWFkZXIgPSByb3dEYXRhLmlzSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmZvbnRTaXplID0gcm93RGF0YS5mb250U2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5mb250RmFtaWx5ID0gcm93RGF0YS5mb250O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJnTGFiZWwgPSB7IHNvbGlkOiB7IGNvbG9yOiByb3dEYXRhLmJnTGFiZWwgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmZpbGxMYWJlbCA9IHsgc29saWQ6IHsgY29sb3I6IHJvd0RhdGEuY29sb3JMYWJlbCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYm9sZExhYmVsID0gcm93RGF0YS5ib2xkTGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaXRhbGljTGFiZWwgPSByb3dEYXRhLml0YWxpY0xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJnQW1vdW50ID0geyBzb2xpZDogeyBjb2xvcjogcm93RGF0YS5iZ0Ftb3VudCB9IH07XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZmlsbEFtb3VudCA9IHsgc29saWQ6IHsgY29sb3I6IHJvd0RhdGEuY29sb3JBbW91bnQgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJvbGRBbW91bnQgPSByb3dEYXRhLmJvbGRBbW91bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYm9yZGVyV2lkdGggPSByb3dEYXRhLmJvcmRlcldpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmJvcmRlckNvbG9yID0geyBzb2xpZDogeyBjb2xvcjogcm93RGF0YS5ib3JkZXJDb2xvciB9IH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKHsgb2JqZWN0TmFtZTogXCJzdHlsZUxpZ25lXCIsIHNlbGVjdG9yOiBzZWxlY3Rpb25JZC5nZXRTZWxlY3RvcigpLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTElHTkVTIE1BTlVFTExFUyAodG91am91cnMgdmlzaWJsZXMpXHJcbiAgICAgICAgY29uc3QgYWRkTWFudWFsTWVudSA9IChrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5vYmplY3ROYW1lID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9wczogYW55ID0geyB0ZXh0OiBcIk5vdXZlYXUgVGl0cmVcIiwgc2hvdzogZmFsc2UsIGNvbDogMSwgcG9zOiAwLCBpc0hlYWRlcjogdHJ1ZSwgYmdDb2xvcjoge3NvbGlkOntjb2xvcjpcIlwifX0sIHRleHRDb2xvcjoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgbWFyZ2luVG9wOiAwLCBmb250U2l6ZTogMTIsIGJvbGQ6IGZhbHNlLCBpdGFsaWM6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZXRhZGF0YSAmJiB0aGlzLm1ldGFkYXRhLm9iamVjdHMgJiYgdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzID0gdGhpcy5tZXRhZGF0YS5vYmplY3RzW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJ0ZXh0XCJdKSBwcm9wcy50ZXh0ID0gc1tcInRleHRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJzaG93XCJdICE9PSB1bmRlZmluZWQpIHByb3BzLnNob3cgPSBzW1wic2hvd1wiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcImNvbFwiXSkgcHJvcHMuY29sID0gc1tcImNvbFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInBvc1wiXSAhPT0gdW5kZWZpbmVkKSBwcm9wcy5wb3MgPSBzW1wicG9zXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzW1wiaXNIZWFkZXJcIl0gIT09IHVuZGVmaW5lZCkgcHJvcHMuaXNIZWFkZXIgPSBzW1wiaXNIZWFkZXJcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJiZ0NvbG9yXCJdKSBwcm9wcy5iZ0NvbG9yID0gc1tcImJnQ29sb3JcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJ0ZXh0Q29sb3JcIl0pIHByb3BzLnRleHRDb2xvciA9IHNbXCJ0ZXh0Q29sb3JcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJtYXJnaW5Ub3BcIl0pIHByb3BzLm1hcmdpblRvcCA9IHNbXCJtYXJnaW5Ub3BcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJmb250U2l6ZVwiXSkgcHJvcHMuZm9udFNpemUgPSBzW1wiZm9udFNpemVcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJib2xkXCJdICE9PSB1bmRlZmluZWQpIHByb3BzLmJvbGQgPSBzW1wiYm9sZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcIml0YWxpY1wiXSAhPT0gdW5kZWZpbmVkKSBwcm9wcy5pdGFsaWMgPSBzW1wiaXRhbGljXCJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2goeyBcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBrZXksIFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHByb3BzIFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBhZGRNYW51YWxNZW51KFwibGlnbmVBXCIpOyBhZGRNYW51YWxNZW51KFwibGlnbmVCXCIpOyBhZGRNYW51YWxNZW51KFwibGlnbmVDXCIpO1xyXG4gICAgICAgIGFkZE1hbnVhbE1lbnUoXCJsaWduZURcIik7IGFkZE1hbnVhbE1lbnUoXCJsaWduZUVcIik7IGFkZE1hbnVhbE1lbnUoXCJsaWduZUZcIik7XHJcblxyXG4gICAgICAgIC8vIExpZ25lcyBtYW51ZWxsZXMgZHluYW1pcXVlc1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFkYXRhICYmIHRoaXMubWV0YWRhdGEub2JqZWN0cykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhLm9iamVjdHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChcIm1hbnVhbExpbmVcIikgJiYgb3B0aW9ucy5vYmplY3ROYW1lID09PSBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcHM6IGFueSA9IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTm91dmVsbGUgTGlnbmVcIiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sOiAxLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zOiAwLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIZWFkZXI6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjoge3NvbGlkOntjb2xvcjpcInRyYW5zcGFyZW50XCJ9fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjoge3NvbGlkOntjb2xvcjpcImJsYWNrXCJ9fSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAxMiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvbGQ6IGZhbHNlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRhbGljOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB7c29saWQ6e2NvbG9yOlwiI2VlZVwifX1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLm1ldGFkYXRhLm9iamVjdHNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInRleHRcIl0pIHByb3BzLnRleHQgPSBzW1widGV4dFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInNob3dcIl0gIT09IHVuZGVmaW5lZCkgcHJvcHMuc2hvdyA9IHNbXCJzaG93XCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzW1wiY29sXCJdKSBwcm9wcy5jb2wgPSBzW1wiY29sXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzW1wicG9zXCJdICE9PSB1bmRlZmluZWQpIHByb3BzLnBvcyA9IHNbXCJwb3NcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJpc0hlYWRlclwiXSAhPT0gdW5kZWZpbmVkKSBwcm9wcy5pc0hlYWRlciA9IHNbXCJpc0hlYWRlclwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcImJnQ29sb3JcIl0pIHByb3BzLmJnQ29sb3IgPSBzW1wiYmdDb2xvclwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcInRleHRDb2xvclwiXSkgcHJvcHMudGV4dENvbG9yID0gc1tcInRleHRDb2xvclwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcIm1hcmdpblRvcFwiXSkgcHJvcHMubWFyZ2luVG9wID0gc1tcIm1hcmdpblRvcFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcImZvbnRTaXplXCJdKSBwcm9wcy5mb250U2l6ZSA9IHNbXCJmb250U2l6ZVwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcImJvbGRcIl0gIT09IHVuZGVmaW5lZCkgcHJvcHMuYm9sZCA9IHNbXCJib2xkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzW1wiaXRhbGljXCJdICE9PSB1bmRlZmluZWQpIHByb3BzLml0YWxpYyA9IHNbXCJpdGFsaWNcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNbXCJib3JkZXJXaWR0aFwiXSAhPT0gdW5kZWZpbmVkKSBwcm9wcy5ib3JkZXJXaWR0aCA9IHNbXCJib3JkZXJXaWR0aFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc1tcImJvcmRlckNvbG9yXCJdKSBwcm9wcy5ib3JkZXJDb2xvciA9IHNbXCJib3JkZXJDb2xvclwiXTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3ROYW1lOiBrZXksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczogcHJvcHMgXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQk9SRFVSRVMgVEFCTEVBVSAodG91am91cnMgdmlzaWJsZSlcclxuICAgICAgICBpZiAob3B0aW9ucy5vYmplY3ROYW1lID09PSBcInRhYmxlQm9yZGVyc1wiKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG9iamVjdE5hbWU6IFwidGFibGVCb3JkZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogdGhpcy50YWJsZUJvcmRlcldpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiB7IHNvbGlkOiB7IGNvbG9yOiB0aGlzLnRhYmxlQm9yZGVyQ29sb3IgfSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlclN0eWxlOiB0aGlzLnRhYmxlQm9yZGVyU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiB0aGlzLnRhYmxlQm9yZGVyUmFkaXVzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcztcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgVmlzdWFsIH0gZnJvbSBcIi4uLy4uL3NyYy92aXN1YWxcIjtcbmltcG9ydCBwb3dlcmJpVmlzdWFsc0FwaSBmcm9tIFwicG93ZXJiaS12aXN1YWxzLWFwaVwiO1xuaW1wb3J0IElWaXN1YWxQbHVnaW4gPSBwb3dlcmJpVmlzdWFsc0FwaS52aXN1YWxzLnBsdWdpbnMuSVZpc3VhbFBsdWdpbjtcbmltcG9ydCBWaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnMgPSBwb3dlcmJpVmlzdWFsc0FwaS5leHRlbnNpYmlsaXR5LnZpc3VhbC5WaXN1YWxDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zID0gcG93ZXJiaVZpc3VhbHNBcGkuZXh0ZW5zaWJpbGl0eS52aXN1YWwuRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zO1xudmFyIHBvd2VyYmlLZXk6IGFueSA9IFwicG93ZXJiaVwiO1xudmFyIHBvd2VyYmk6IGFueSA9IHdpbmRvd1twb3dlcmJpS2V5XTtcbnZhciBtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVRzogSVZpc3VhbFBsdWdpbiA9IHtcbiAgICBuYW1lOiAnbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUcnLFxuICAgIGRpc3BsYXlOYW1lOiAnbW9uVGFibGVhdVBlcnNvJyxcbiAgICBjbGFzczogJ1Zpc3VhbCcsXG4gICAgYXBpVmVyc2lvbjogJzUuMy4wJyxcbiAgICBjcmVhdGU6IChvcHRpb25zPzogVmlzdWFsQ29uc3RydWN0b3JPcHRpb25zKSA9PiB7XG4gICAgICAgIGlmIChWaXN1YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmlzdWFsKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWaXN1YWwgaW5zdGFuY2Ugbm90IGZvdW5kJztcbiAgICB9LFxuICAgIGNyZWF0ZU1vZGFsRGlhbG9nOiAoZGlhbG9nSWQ6IHN0cmluZywgb3B0aW9uczogRGlhbG9nQ29uc3RydWN0b3JPcHRpb25zLCBpbml0aWFsU3RhdGU6IG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaWFsb2dSZWdpc3RyeSA9ICg8YW55Pmdsb2JhbFRoaXMpLmRpYWxvZ1JlZ2lzdHJ5O1xuICAgICAgICBpZiAoZGlhbG9nSWQgaW4gZGlhbG9nUmVnaXN0cnkpIHtcbiAgICAgICAgICAgIG5ldyBkaWFsb2dSZWdpc3RyeVtkaWFsb2dJZF0ob3B0aW9ucywgaW5pdGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3VzdG9tOiB0cnVlXG59O1xuaWYgKHR5cGVvZiBwb3dlcmJpICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcG93ZXJiaS52aXN1YWxzID0gcG93ZXJiaS52aXN1YWxzIHx8IHt9O1xuICAgIHBvd2VyYmkudmlzdWFscy5wbHVnaW5zID0gcG93ZXJiaS52aXN1YWxzLnBsdWdpbnMgfHwge307XG4gICAgcG93ZXJiaS52aXN1YWxzLnBsdWdpbnNbXCJtb25UYWJsZWF1UGVyc29DRjBCRUQ0QzE5MDQ0RDU4OEVCRjY1NjM5N0VGMUVCNF9ERUJVR1wiXSA9IG1vblRhYmxlYXVQZXJzb0NGMEJFRDRDMTkwNDRENTg4RUJGNjU2Mzk3RUYxRUI0X0RFQlVHO1xufVxuZXhwb3J0IGRlZmF1bHQgbW9uVGFibGVhdVBlcnNvQ0YwQkVENEMxOTA0NEQ1ODhFQkY2NTYzOTdFRjFFQjRfREVCVUc7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==