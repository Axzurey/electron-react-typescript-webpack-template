import { app, BrowserWindow, dialog, ipcMain } from 'electron';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

let win: BrowserWindow | null = null;

function createWindow() {
	win = new BrowserWindow({
		width: 1000,
		height: 700,
		minHeight: 700,
		minWidth: 1000,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: true,
		}
	})

	if (isDev) {
		win.loadURL('http://localhost:3000/index.html');
	} else {
		// 'build/index.html'
		win.loadURL(`file://${__dirname}/../index.html`);
	}

	win.on('closed', () => win = null);

	// DevTools
	installExtension(REACT_DEVELOPER_TOOLS)
		.then((name) => console.log(`Added Extension:  ${name}`))
		.catch((err) => console.log('An error occurred: ', err));

	if (isDev) {
		win.webContents.openDevTools();
	}
}

app.on('ready', () => {
	createWindow()
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});