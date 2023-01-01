"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipc = void 0;
const electron_1 = require("electron");
function ipc(win) {
    electron_1.ipcMain.handle('PING', () => 'PONG');
    // 窗口最小化
    electron_1.ipcMain.on('min', () => win.minimize());
    electron_1.ipcMain.on('max', () => {
        if (win.isMaximized()) {
            win.restore();
        }
        else {
            win.maximize();
        }
    });
    /** 窗口最大化 */
    electron_1.ipcMain.on('close', () => {
        win.close();
        electron_1.app.quit();
        electron_1.app.exit();
    });
    electron_1.ipcMain.on('f12', () => {
        console.log('this is app');
        win.webContents.openDevTools({ mode: 'detach' });
    });
    electron_1.ipcMain.on('imgIcon', (event, params) => __awaiter(this, void 0, void 0, function* () {
        console.log('这是app getFileIcon');
        if (params.value.includes('.lnk')) {
            console.log('进入了1');
            let lnk = electron_1.shell.readShortcutLink(params.value);
            console.log('这是ink-------------------------');
            console.log(lnk);
            let data = yield electron_1.app.getFileIcon(lnk.target + '', { size: 'large' });
            console.log(data);
            console.log(data.toDataURL());
            event.returnValue = data.toDataURL();
            return data.toDataURL();
        }
        const data = yield electron_1.app.getFileIcon(params.value, { size: 'large' });
        event.returnValue = data.toDataURL();
        return data.toDataURL();
    }));
    win.on('maximize', () => {
        try {
            console.log(electron_1.ipcRenderer);
            win.webContents.send('main', 'maximize!');
            console.log('调用了最大化的方法');
        }
        catch (error) {
            console.log(error);
        }
    });
    win.on('unmaximize', () => {
        try {
            console.log(electron_1.ipcRenderer);
            win.webContents.send('main', 'unmaximize!');
            console.log('调用了最大化的方法');
        }
        catch (error) {
            console.log(error);
        }
    });
    // win.on('imgIcon', (data) => {
    //   try {
    //     console.log(ipcRenderer)
    //     win.webContents.send('main', 'unmaximize!')
    //     console.log('调用了最大化的方法')
    //   } catch (error) {
    //     console.log(error)
    //   }
    // })
}
exports.ipc = ipc;
//# sourceMappingURL=ipc.js.map