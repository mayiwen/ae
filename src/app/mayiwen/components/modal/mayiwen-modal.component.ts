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
  selector: 'app-mayiwen-modal',
  templateUrl: './mayiwen-modal.component.html',
  styleUrls: ['./mayiwen-modal.component.less'],
  providers: [
  ],
})
export class MayiwenModalComponent{
  @Input() v;
  @Input() w;
  @Input() h;
  @Output() close = new EventEmitter<any>();
  constructor() {
  }
  closeClick() {
    this.close.emit(true);
  }
}
