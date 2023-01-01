import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-mayiwen-button',
  templateUrl: './mayiwen-button.component.html',
  styleUrls: ['./mayiwen-button.component.less'],
  providers: [
  ],
})
export class MayiwenButtonComponent{
  @Input() v;
  @Input() w?;
  @Output() close = new EventEmitter<any>();
  constructor() {
  }
  closeClick() {
    this.close.emit(true);
  }
}
