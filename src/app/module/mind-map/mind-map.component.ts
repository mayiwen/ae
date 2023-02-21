import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MindMapService } from './mind-map.service';
import { TreeItem } from './o/tree.o';
@Component({
  selector: 'app-mind-map',
  templateUrl: './mind-map.component.html',
  styleUrls: ['./mind-map.component.less'],
  providers: [MindMapService],
})
export class MindMapComponent implements OnInit, AfterViewInit {

  treeData: TreeItem[] = [
    {
      v: '1',
      value: '1',
    },
    {
      v: '2',
      value: '2',
      children: [
        {
          v: '21',
          value: '21',
          children: [
            {
              v: '211',
              value: '212',
            }
          ]
        }
      ]
    },
    {
      v: '3',
      value: '3',
    },
    {
      v: '4',
      value: '4',
    },
    {
      v: '5',
      value: '5',
    },
  ];
  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
