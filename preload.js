// preload.js
const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronApi', {
  // Aquí puedes exponer métodos o funciones que quieras usar desde el código JavaScript en la página web
});
