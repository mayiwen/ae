import { app, BrowserWindow, ipcMain, ipcRenderer, shell, globalShortcut } from 'electron';
export function ipc(win: any) {
  ipcMain.handle('PING', () => 'PONG');
	// 窗口最小化
  ipcMain.on('min', () => win.minimize());
  ipcMain.on('max', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });
	/** 窗口最大化 */
  ipcMain.on('close', () => {
    win.close();
    app.quit();
    app.exit();
  });
  ipcMain.on('f12', () => {
    win.webContents.openDevTools({ mode: 'detach' });
  });
  ipcMain.on('imgIcon', async (event: any, params) => {
    
    try {
      if (params.value.includes('.lnk')) {
        let lnk = shell.readShortcutLink(params.value);
        let data = await app.getFileIcon(lnk.target + '', {size: 'large'})
        event.returnValue = data.toDataURL();
        return data.toDataURL();
      }
      const data = await app.getFileIcon(params.value, {size: 'large'})
      event.returnValue = data.toDataURL();
      return data.toDataURL();
    } catch (error) {
      event.returnValue = '';
      return ''
    }
  });

  app.whenReady().then(() => {
    // 注册一个'CommandOrControl+X' 快捷键监听器
    const ret = globalShortcut.register('CommandOrControl+q', () => {
      console.log('CommandOrControl+q is pressed')
      shell.openPath('C:\\Program Files\\Microsoft VS Code\\code.exe');
      
    })
  
    if (!ret) {
      console.log('registration failed')
    }
  
    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('CommandOrControl+q'))
  })




  win.on('maximize', () => {
    try {
      win.webContents.send('main', 'maximize!')
    } catch (error) {
      console.log(error)
    }
    
  })
  win.on('unmaximize', () => {
    try {
      win.webContents.send('main', 'unmaximize!')
    } catch (error) {
      console.log(error)
    }
  })
}
