import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreeItem } from '../../../o/tree.o';
@Component({
  selector: 'app-mayiwen-tree-map-line',
  templateUrl: './tree-map-line.component.html',
  styleUrls: ['./tree-map-line.component.less'],
  providers: []
})
export class MayiwenTreeMapLineComponent implements OnInit, AfterViewInit {
  @Input() data: TreeItem;
  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
