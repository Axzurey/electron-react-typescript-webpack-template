"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('muon', {
    dialogOpen: function () { return electron_1.ipcRenderer.invoke('muon_dialog_open'); },
    getFileContent: function (fpath) { return electron_1.ipcRenderer.invoke('muon_file_content', fpath); }
});
//# sourceMappingURL=preload.js.map