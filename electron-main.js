const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // دا ځینې وخت د انځورونو او سکریپټونو ستونزه حلوي
    }
  });

  // ۱. دلته موږ DevTools په زور خلاصوو ترڅو ایرور وګورو
  win.webContents.openDevTools();

  // ۲. د فایل د لارې (Path) ډیر دقیق سیستم
  // دا ګوري چې ایا موږ په پرمختیایی حالت کې یو که په EXE کې
  const startUrl = path.join(__dirname, 'dist', 'index.html');
  
  console.log("Loading file from:", startUrl); // دا به په تور کنسول کې چاپ شي
  
  win.loadFile(startUrl).catch(e => {
      console.error("Failed to load file:", e);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
