const {app, BrowserWindow, ipcMain,globalShortcut} = require('electron');

let window;

app.on('ready', () => {
  const ret = globalShortcut.register('CommandOrControl+Shift+J', (event) => {
    toggleWindow();
  })
  
    window = new BrowserWindow({
    width: 500,
    height: 100,
    show: false,
    frame: false,
    resizable: false,
    alwaysOnTop: true
  })
  
  window.loadFile(__dirname + '/index.html')

  window.on('blur', () => {
    if(!window.webContents.isDevToolsOpened()) {
      window.hide()
    }
  })
})

const toggleWindow = () => {
  if (window.isVisible()) {
    window.hide()

  } else {
    showWindow()
  }
}

const showWindow = () => {
  window.show()
}

ipcMain.on('show-window', () => {
  showWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})