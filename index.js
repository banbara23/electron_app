// Electronモジュールのrequire
const {
  app,
  BrowserWindow
} = require('electron');
const path = require('path')
const url = require('url')

let win;

// アプリケーション画面の作成
function createWindow() {
  const screen = {
    width: 800,
    height: 600
  }
  win = new BrowserWindow(screen);
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  win.on('closed', () => { win = null });
};

// アプリケーションの起動時
app.on('ready', createWindow);

// アプリケーションの終了時
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションのアクティブ時
app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});