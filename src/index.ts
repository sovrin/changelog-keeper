import {app, ipcMain, BrowserWindow} from 'electron';
import * as io from './io';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: any;

if (require('electron-squirrel-startup')) {
    app.quit();
}

/**
 *
 */
const createWindow = (): void => {
    const mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: false,
        webPreferences: {
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    mainWindow.webContents.openDevTools();

    ipcMain.on('window.close', () => mainWindow.destroy());
    ipcMain.on('window.maximize', () => mainWindow.maximize());
    ipcMain.on('window.minimize', () => mainWindow.minimize());
    ipcMain.on('window.devTools', () => mainWindow.webContents.openDevTools());
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on('read', io.read);

