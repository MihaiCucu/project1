'use strict';

const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const files = require('./util/files');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 1200,
    height: 1000,
    minWidth: 1000,
    minHeight: 1000,
    frame: false
  });

  // Load the apps index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the dev tools
  win.webContents.openDevTools();

  // Emitted when the window is closed
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
});


// probably need to move this to a different file
// Quit the app when the 'close-main-window' event is received
ipcMain.on('close-main-window', () => {
  app.quit();
});

ipcMain.on('get-movies', (evt) => {
  files.getAllFiles('D:/Movies/', function(filesObj) {
    evt.sender.send('got-movies', filesObj);
  });
});

ipcMain.on('set-movies-url', () => {
  return 'set movies url man...';
});
