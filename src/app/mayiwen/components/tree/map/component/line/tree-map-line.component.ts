import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreeItem } from '../../../o/tree.o';
import { MayiwenTreeMapService } from '../../service/tree-map.service';
@Component({
  selector: 'app-mayiwen-tree-map-line',
  templateUrl: './tree-map-line.component.html',
  styleUrls: ['./tree-map-line.component.less'],
  providers: []
})
export class MayiwenTreeMapLineComponent implements OnInit, AfterViewInit {
  @Input() data: TreeItem;
  selectTab = '1';
  constructor(private mayiwenTreeMapService: MayiwenTreeMapService) {

  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  arrow(item, type: string) {
    console.log('这是子元素的方法。')
    this.mayiwenTreeMapService.arrowSubject.next({
      type: type,
      data: item
    })
  }
  
}
