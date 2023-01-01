import { app, BrowserWindow, ipcMain, ipcRenderer, shell } from 'electron';
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
    console.log('this is app')
    win.webContents.openDevTools({ mode: 'detach' });
  });
  ipcMain.on('imgIcon', async (event: any, params) => {
    console.log('这是app getFileIcon')
    if (params.value.includes('.lnk')) {
      console.log('进入了1')
      let lnk = shell.readShortcutLink(params.value);
      console.log('这是ink-------------------------')
      console.log(lnk);
      let data = await app.getFileIcon(lnk.target + '', {size: 'large'})
      console.log(data)
      console.log(data.toDataURL())
      event.returnValue = data.toDataURL();
      return data.toDataURL();
    }
    const data = await app.getFileIcon(params.value, {size: 'large'})
    event.returnValue = data.toDataURL();
    return data.toDataURL();
  });




  win.on('maximize', () => {
    try {
      console.log(ipcRenderer)
      win.webContents.send('main', 'maximize!')
      console.log('调用了最大化的方法')
    } catch (error) {
      console.log(error)
    }
    
  })
  win.on('unmaximize', () => {
    try {
      console.log(ipcRenderer)
      win.webContents.send('main', 'unmaximize!')
      console.log('调用了最大化的方法')
    } catch (error) {
      console.log(error)
    }
  })
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
