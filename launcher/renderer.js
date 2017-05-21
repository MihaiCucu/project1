// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const remote = require('electron').remote;
const ipc = require('ipc');

document.getElementById('exitBtn').addEventListener('click', function(e) {
    ipc.send('close-main-window');
});