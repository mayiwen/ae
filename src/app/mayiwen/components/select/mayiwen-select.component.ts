import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MayiwenSelectService } from './mayiwen-select.service';
@Component({
  selector: 'app-mayiwen-select',
  templateUrl: './mayiwen-select.component.html',
  styleUrls: ['./mayiwen-select.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MayiwenSelectComponent),
      multi: true,
    },
    MayiwenSelectService,
  ],
})
export class MayiwenSelectComponent
  implements OnInit, AfterViewInit, ControlValueAccessor
{
  @Input() w = 120;
  // @Input() w = 120;
  tabsetTitleList = [] as any;
  selectTab = 0;
  flagShow = false;
  inputValue = '111';
  /** 父组件把ngModel传进来的时候绑定的值 */
  _fatherNgModel: any = {};
  data: any;
  constructor(
    private cdr: ChangeDetectorRef,
    public mayiwenSelectService: MayiwenSelectService
  ) {
    // this.childData = 2;
  }
  get title() {
    return JSON.stringify(this.tabsetTitleList);
  }
  get width() {
    return parseInt(this.w + '', 10) + 4;
  }
  get fatherNgModel () {
    // eslint-disable-next-line no-underscore-dangle
    return this._fatherNgModel;
  }
  set fatherNgModel (data: any) {
    // eslint-disable-next-line no-underscore-dangle
    this._fatherNgModel = data;
    this.change(this.fatherNgModel);
  }
  ngAfterViewInit() {
    this.mayiwenSelectService.subject.subscribe({
      next: (dat) => {
        console.log(dat);
        this.fatherNgModel = (dat as any);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  add() {
    // this.childData++;
  }
  change = (value: any) => {
    console.log('changge');
    console.log(value);
  }; // 先定义一个方法，很重要，用于接收registerOnChange()方法里传递回来的方法，然后通过这个方法就能通知到外部组件数据更新。

  writeValue(val): void {
    // 初始化时，获取并监听父组件通过ngModel传递进来的数据
    if (val) {
      this.fatherNgModel = val;
    }
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange');
    // 初始化后，执行该方法，并保存控件接收到 change 事件后，调用的函数
    this.change = fn;
  }
  registerOnTouched(fn: any): void {}

  ngOnInit(): void {}
  changeTab(index) {}

}
