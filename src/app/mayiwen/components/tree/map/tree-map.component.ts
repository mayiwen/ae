import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-mayiwen-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.less'],
  providers: []
})
export class MayiwenTreeMapComponent implements OnInit, AfterViewInit {
  @Input() data: any;
  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
