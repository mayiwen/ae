import { AfterViewInit, ChangeDetectorRef, Component, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MayiwenTabSetComponent } from './tabset/mayiwen-tabsetcomponent';
@Component({
  selector: 'app-mayiwen-tabs',
  templateUrl: './mayiwen-tabs.component.html',
  styleUrls: ['./mayiwen-tabs.component.less'],
  providers: []
})
export class MayiwenTabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(MayiwenTabSetComponent) tabsetList: QueryList<MayiwenTabSetComponent>;
  tabsetTitleList = [] as any;
  selectTab = 0;
  // ngAfterViewInit(): void {
  //   // throw new Error('Method not implemented.');
  // }
  constructor( private cdr: ChangeDetectorRef ) {

  }
  get title() {
    return JSON.stringify(this.tabsetTitleList);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  changeTab(index) {
    this.selectTab = index;
    this.tabsetList.forEach((item, indexi) => {
      if (indexi === this.selectTab) {
        item.flagShow = true;
      } else {
        item.flagShow = false;
      }
      item.selectTab = indexi;
      item.nextTick();
    });
  }
  ngAfterViewInit() {
    this.tabsetList.forEach((item, index) => {
      if (index === this.selectTab) {
        item.flagShow = true;
      } else {
        item.flagShow = false;
      }
      item.selectTab = index;
      item.nextTick();
    });
    this.tabsetList.forEach((item, index) => {
      this.tabsetTitleList.push({
        mywTitle: item.mywTitle,
        index,
      });
    });
    this.cdr.detectChanges();
    this.cdr.markForCheck();
  }

}
