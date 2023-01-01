import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MayiwenSelectService } from '../mayiwen-select.service';
@Component({
  selector: 'app-mayiwen-option',
  templateUrl: './mayiwen-option.component.html',
  styleUrls: ['./mayiwen-option.component.less'],
  providers: []
})
export class MayiwenOptionComponent implements OnInit, AfterViewInit {
  @Input() value = '';
  @Input() v = '';
  tabsetTitleList = [] as any;
  selectTab = 0;
  flagShow = false;
  constructor( private cdr: ChangeDetectorRef, private mayiwenSelectService: MayiwenSelectService ) {

  }
  get title() {
    return JSON.stringify(this.tabsetTitleList);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  changeTab(index) {
  }
  ngAfterViewInit() {
  }
  selectOption() {
    console.log('这是option');
    this.mayiwenSelectService.obj = {
      value: this.value,
      v: this.v
    };
    this.mayiwenSelectService.subject.next({
      value: this.value,
      v: this.v
    });
    this.mayiwenSelectService.flagShow = false;
  }

}
