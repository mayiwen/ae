import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root'
})
export class MainWindowService {
  /** 窗口是否最大化 */
  isMax = false;
  /** 窗口变化的时候 */
  isMaxSubject = new BehaviorSubject(false);
  constructor(private es: ElectronService) {
    this.es.ipcRenderer.on('main', (event, message) => {
      if (message === 'maximize!') {
        this.isMax = true;
        this.isMaxSubject.next(true);
      }
      if (message === 'unmaximize!') {
        this.isMax = false;
        this.isMaxSubject.next(false);
      }
    });
  }

}
