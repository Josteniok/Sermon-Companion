// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});

contextBridge.exposeInMainWorld('apis', {
  requestSermonData: () => ipcRenderer.send('sermon-data-requested'),
  recieveSermonData: new Promise((resolve) => {
    ipcRenderer.on('sermon-data-retrieved', (event, data) => {
      resolve(data);
    });
  })
})