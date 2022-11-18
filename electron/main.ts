import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  console.log("window created!!!")

  // and load the index.html of the app.
  if (isDev) {
		win.loadURL('http://localhost:3000/index.html');
	} else {
		// 'build/index.html'
		win.loadURL(`file://${__dirname}/../index.html`);
	}
}

app.on('ready', createWindow);