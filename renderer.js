// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron'),
    dialog = remote.dialog;
dialog.showOpenDialog(remote.getCurrentWindow(), {
      properties: ['openFile',],
      title: "Please select your audio file",
      filters: [
        { name: 'All files', extensions: ['mp3', 'wav', 'flac'] },
      ]}, () => {})