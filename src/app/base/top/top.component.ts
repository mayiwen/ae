import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ElectronService, MainWindowService } from '../../core/services';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.less']
})
export class TopComponent implements OnInit, AfterViewInit, OnDestroy {
  isMax = false;
  private $destroy = new Subject();
  constructor(private electron: ElectronService, private mainWindowService:  MainWindowService, private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.mainWindowService.isMaxSubject.pipe(takeUntil(this.$destroy)).subscribe({
      next: (flag) => {
        this.isMax = flag;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  ngOnDestroy(): void {
    this.$destroy.next(null);
    this.$destroy.unsubscribe();
  }
  alert() {
    alert('暂未实现');
  }
  alertF12() {
    console.log('这是实现了');
    // openF12();

  }
  openF12() {
    this.electron.ipcRenderer.send('f12');
  }
  windowEdit(type: 'min' | 'max' | 'close'| 'f12') {
    // alert('点击了');
    // windowEdit(type);
  }
}
