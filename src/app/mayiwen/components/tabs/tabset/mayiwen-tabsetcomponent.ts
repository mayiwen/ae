import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-mayiwen-tabset',
  templateUrl: './mayiwen-tabset.component.html',
  styleUrls: ['./mayiwen-tabset.component.less'],
  providers: []
})
export class MayiwenTabSetComponent implements OnInit, AfterViewInit {
  @Input() mywTitle = '';
  flagShow = false;
  selectTab = 0;
  constructor(private cdr: ChangeDetectorRef) {

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  nextTick() {
    // setTimeout(() => {
      this.cdr.markForCheck();
      this.cdr.detectChanges();
    // }, 300);
  }
}
