import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { createFalse } from 'typescript/lib/tsserverlibrary';
import { SelectInterface } from '../../../../../../mayiwen/components/select/o/select';
// import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-test-1000',
  templateUrl: './test1000.component.html',
  styleUrls: ['./test1000.component.less'],
  providers: [],
})
export class Test1000Component implements AfterViewInit {
  @ViewChild('canvas') canvas: ElementRef;
  constructor(private cdr: ChangeDetectorRef) {

  }
  ngAfterViewInit(): void {
    console.log('这是打印的canvas');
    console.log(this.canvas.nativeElement);
    const canvas = this.canvas.nativeElement as any;
    const ctx = canvas.getContext('2d');
    ctx.moveTo(0,0);
    ctx.lineTo(400,200);
    ctx.moveTo(0,200);
    ctx.lineTo(200,200);
    ctx.moveTo(0,400);
    ctx.lineTo(300,300);
    ctx.moveTo(0,0);
    ctx.lineTo(400,400);
    ctx.stroke();
  }
  

}
