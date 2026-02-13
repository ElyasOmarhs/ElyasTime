const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "د مدرسې مهال ویش", // د کړکۍ سرلیک
    icon: path.join(__dirname, 'public', 'icon.ico'), // دلته مو آیکون ورته وښود
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    autoHideMenuBar: true // مینو پټوي ترڅو پروګرام مسلکي ښکاره شي
  });

  // دا ډیره مهمه ده: فایل له 'dist' فولډر څخه راخلي
  win.loadFile(path.join(__dirname, 'dist', 'index.html'));
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
