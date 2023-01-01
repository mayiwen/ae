import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ElectronService, MainWindowService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy  {
  isMax = false;
  private $destroy = new Subject();
  constructor(
    private electronService: ElectronService,
    private translate: TranslateService,
    private mainWindowService: MainWindowService,
    private cdr: ChangeDetectorRef
  ) {
    this.translate.setDefaultLang('en');
    console.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }
  // constructor(private electron: ElectronService, private mainWindowService:  MainWindowService, private cdr: ChangeDetectorRef,) { }

  // ngOnInit(): void {
  // }
  ngAfterViewInit(): void {
    console.log(this.mainWindowService);
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
}
