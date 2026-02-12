const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true // دا کرښه مینو پټوي
  });

  // ستاسو HTML فایل راخلي
  win.loadFile(path.join(__dirname, 'dist', 'index.html'));
  
  // هغه توره د ډیویلوپر مینو مې بنده کړه
  // win.webContents.openDevTools(); 
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
