import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-mayiwen-tree-map-loop',
  templateUrl: './tree-map-loop.component.html',
  styleUrls: ['./tree-map-loop.component.less'],
  providers: []
})
export class MayiwenTreeMapLoopComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
