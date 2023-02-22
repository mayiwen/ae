import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArrowObject } from '../../../o/arrow.o';
import {MayiwenTreeMapService} from '../../service/tree-map.service'
@Component({
  selector: 'app-mayiwen-tree-map-loop',
  templateUrl: './tree-map-loop.component.html',
  styleUrls: ['./tree-map-loop.component.less'],
  providers: []
})
export class MayiwenTreeMapLoopComponent implements OnInit, AfterViewInit, OnDestroy {

  $destorySubject = new Subject<null>()
  @Input() data: any;
  selectTab = '1';
  constructor(private mayiwenTreeMapService: MayiwenTreeMapService) {

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // this.mayiwenTreeMapService.arrowSubject.pipe(takeUntil(this.$destorySubject)).subscribe((data: ArrowObject) => {
    //   console.log('这是传递的data')
    //   console.log(data)
    // })

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.$destorySubject.next(null)
    this.$destorySubject.unsubscribe()
  }

}
