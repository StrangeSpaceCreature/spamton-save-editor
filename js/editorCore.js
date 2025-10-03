
var EditorCore = (function () {
    var cfg, currentKey, originalLines, originalName, allowBrokenParty;


    function init(chapterKey) {
        cfg = window.chaptersConfig[chapterKey];
        currentKey = chapterKey; 
        if (!cfg) {
            console.error("Unknown chapterKey:", chapterKey);
            return;
        }
        originalLines = [];
        originalName = "";
        allowBrokenParty = false;

        wireFileInput();
        document.getElementById("toEditor")
            .addEventListener("click", onLoadClick);
    }

    function wireFileInput() {
        var fileInput = document.getElementById("saveFile");
        var label = document.getElementById("saveFileLabel");
        var textDiv = document.getElementById("saveFileText");

        fileInput.addEventListener("change", function () {
            var f = this.files[0];
            if (!f) return;
            originalName = f.name;
            textDiv.textContent = originalName;
        });

        ["dragover", "dragenter"].forEach(function (evt) {
            label.addEventListener(evt, function (e) {
                e.preventDefault();
                textDiv.textContent = "Drop to load";
            });
        });

        ["dragleave", "dragend", "drop"].forEach(function (evt) {
            label.addEventListener(evt, function (e) {
                e.preventDefault();
                textDiv.textContent = originalName || "Click or drag your save here";
            });
        });

        label.addEventListener("drop", function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            fileInput.files = files;
            originalName = files[0].name;
            textDiv.textContent = originalName;
        });
    }

    function onLoadClick() {
        var f = document.getElementById("saveFile").files[0];
        if (!f) {
            alert("Please select your save file first.");
            return;
        }
        var reader = new FileReader();
        reader.onload = function (ev) {
            var fullText = ev.target.result.replace(/\r?\n/g, "\r\n");
            originalLines = fullText.split("\r\n");
            if (originalLines.length !== cfg.length) {
                alert("Invalid save: expected " + cfg.length +
                    " lines, got " + originalLines.length);
                return;
            }
            openEditor(fullText);
        };
        reader.readAsText(f);
    }

    function openEditor(fullText) {
        document.getElementById("uploadView").style.display = "none";
        document.getElementById("editorView").style.display = "block";


        var saveData = window.saveToJson(currentKey, fullText);

        window._col1 = colorToRGB(saveData["_" + cfg.thrash[0]]);
        window._col2 = colorToRGB(saveData["_" + cfg.thrash[1]]);
        window._col3 = colorToRGB(saveData["_" + cfg.thrash[2]]);

        var tabsDiv = document.getElementById("page_tabs"),
            html = "";
        cfg.tabs.forEach(function (t) {
            var label = t.charAt(0).toUpperCase() + t.slice(1);
            html += '<div class="tab_click" tab="tab_' + t + '">' + label + "</div>";
        });
        tabsDiv.innerHTML = html;


        tabsDiv.addEventListener("click", function (evt) {
            if (!evt.target.classList.contains("tab_click")) return;
            var tab = evt.target.getAttribute("tab");
            switchTab(tab);
        });

        document.getElementById("saveData").innerHTML =
            window.generateForm(saveData);

        wireAfterRender();
        switchTab("tab_main");
    }

    function switchTab(tab) {
        var allTabs = document.querySelectorAll(".tab");
        allTabs.forEach(function (el) {
            el.style.display = (tab === "tab_all") ? "" : "none";
        });
        if (tab !== "tab_all") {
            document.getElementById(tab).style.display = "";
        }
        document.querySelectorAll(".tab_click").forEach(function (el) {
            el.classList.toggle("tab_selected",
                el.getAttribute("tab") === tab);
        });
    }

    function wireAfterRender() {
        var saveDataDiv = document.getElementById("saveData");

        saveDataDiv.querySelectorAll("select").forEach(function (sel) {
            sel.addEventListener("change", function () {
                var ok = !(this.value === "0" &&
                    this.parentElement.classList.contains("grey_disable"));
                this.style.color = ok ? "#fff" : "#777";

                if (["_8", "_9", "_10"].indexOf(this.name) >= 0) {
                    SetValidParty(
                        +document.querySelector('select[name="_8"]').value,
                        +document.querySelector('select[name="_9"]').value,
                        +document.querySelector('select[name="_10"]').value
                    );
                }
                if (cfg.thrashOptions.indexOf(this.name) >= 0) {
                    updateThrasher();
                }
            });
        });

        saveDataDiv.querySelectorAll("input").forEach(function (inp) {
            inp.addEventListener("change", function () {
                if (this.name === "allow_broken_party") {
                    allowBrokenParty = this.checked;
                    SetValidParty(
                        +document.querySelector('select[name="_8"]').value,
                        +document.querySelector('select[name="_9"]').value,
                        +document.querySelector('select[name="_10"]').value
                    );
                }
                var gkeys = cfg.gonerIndices.map(function (i) { return "_" + i; });
                if (gkeys.indexOf(this.name) >= 0) {
                    updateGoner(cfg.gonerIndices[0],
                        cfg.gonerIndices[1],
                        cfg.gonerIndices[2]);
                }
            });
        });

        saveDataDiv.querySelectorAll(".spells_title")
            .forEach(function (el) {
                el.addEventListener("click", function () {
                    var w = this.parentElement.querySelector(".spell_wrapper");
                    if (w.style.display === "flex") {
                        w.style.display = "none";
                        this.innerHTML = "<center>v Spells v</center>";
                    } else {
                        w.style.display = "flex";
                        this.innerHTML = "<center>^ Spells ^</center>";
                    }
                });
            });

        var parts = ["head", "body", "feet"];
        parts.forEach(function (part, i) {
            $("#thrash_" + part + "_c_slider").slider({
                min: 0, max: 31,
                value: +document.querySelector('input[name="_'
                    + cfg.thrash[i] + '"]').value,
                slide: function (e, ui) {
                    document.querySelector('input[name="_'
                        + cfg.thrash[i] + '"]').value = ui.value;
                    updateThrasher();
                }
            });
        });

        updateThrasher();
        updateGoner(cfg.gonerIndices[0],
            cfg.gonerIndices[1],
            cfg.gonerIndices[2]);
        SetValidParty(
            +document.querySelector('select[name="_8"]').value,
            +document.querySelector('select[name="_9"]').value,
            +document.querySelector('select[name="_10"]').value
        );


        document.getElementById("downloadSave")
            .addEventListener("click", function () {
                var formVals = {};
                saveDataDiv.querySelectorAll("select,input")
                    .forEach(function (el) {
                        if (!el.name) return;
                        if (el.type === "checkbox") {
                            var off = el.getAttribute("off") || "0",
                                on = el.getAttribute("on") || "1";
                            formVals[el.name] = el.checked ? on : off;
                        } else {
                            formVals[el.name] = el.value;
                        }
                    });

                cfg.exportLines.forEach(function (n) {
                    var key = "_" + n;
                    if (formVals[key] != null) {
                        originalLines[n - 1] = formVals[key];
                    }
                });

                var out = originalLines.join("\r\n");
                saveAs(new Blob([out], { type: "text/plain" }), originalName);
            });
    }

    function SetValidParty(a, b, c) {
        var A = [1], B = [0], C = [0];
        if (allowBrokenParty) {
            A = B = C = [0, 1, 2, 3, 4];
        } else {
            A = [1]; B = []; C = [];
            if (b !== 0) {
                if (c === 0) B.push(0);
                for (var i = 2; i < 5; i++) if (i !== c) B.push(i);
                C.push(0);
                for (i = 2; i < 5; i++) if (i !== b) C.push(i);
            } else {
                B = [2, 3, 4]; C = [0];
            }
        }
        [A, B, C].forEach(function (set, i) {
            document.querySelectorAll(
                'select[name="_' + (i + 8) + '"] option'
            ).forEach(function (opt) {
                opt.classList.toggle(
                    'broken_party',
                    set.indexOf(+opt.value) < 0
                );
            });
        });

        var disp = document.getElementById("party_display"),
            html = [a, b, c].map(function (v) {
                switch (v) {
                    case 1: return "<img src='images/Kris.png'>";
                    case 2: return "<img src='images/Susie.png'>";
                    case 3: return "<img src='images/Ralsei.png'>";
                    case 4: return "<img src='images/Noelle.png'>";
                }
                return "<span style='width:40px;height:40px;display:inline-block;'></span>";
            }).join(" ");
        disp.innerHTML = html;

    }

    function updateThrasher() {
        const patternEls = cfg.thrashOptions.slice(0, 3).map(name => document.querySelector(`select[name="${name}"]`));
        
        const colorEls = cfg.thrash.map(i => document.querySelector(`input[name="_${i}"]`));
        
        if (patternEls.some(e => !e) || colorEls.some(e => !e)) {
            console.warn("Issue parsing data", {
                patterns: cfg.thrashOptions.slice(0, 3),
                colors: cfg.thrash
            });
            return;
        }
        
        const patterns = patternEls.map(el => el.value);
        const cols = colorEls.map(el => colorToRGB(el.value));
    
        GenerateThrasher(patterns[0], patterns[1], patterns[2],cols[0], cols[1], cols[2]);
    
        document.getElementById("thrash_head_c").style.backgroundColor = `rgb(${cols[0].join(",")})`;
        document.getElementById("thrash_body_c").style.backgroundColor = `rgb(${cols[1].join(",")})`;
        document.getElementById("thrash_feet_c").style.backgroundColor = `rgb(${cols[2].join(",")})`;
    }

    return {
    init: init
    };
})();
