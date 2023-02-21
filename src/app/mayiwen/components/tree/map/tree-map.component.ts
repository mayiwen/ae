import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TreeItem } from '../o/tree.o';
@Component({
  selector: 'app-mayiwen-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.less'],
  providers: []
})
export class MayiwenTreeMapComponent implements OnInit, AfterViewInit {
  // @Input() data: TreeItem[];
  private _data = {}
  @Input() set data(data: TreeItem) {
    console.log('这是打印的data')
    console.log(data)
    console.log(data)
    this._data = {
      children: data,
      flagRoot: true,
      flagExpand: true,
    }
    this.dataLoop(this._data)

  }
  get data() {
    return this._data
  }
  dataLoop(data: TreeItem) {
    // 最外层的数据是没有data.level，给data.level设置一个默认的值为0。
    if (!data.level) {
      data.level = 0
    }
    // 给他的孩子们设置的值为当前值+1
    if (data.children && data.children.length > 0) {
      data.children.forEach(item => {
        item.level = data.level + 1;
        item.flagExpand = true;
        this.dataLoop(item);
        
      })
    }
    // this.dataLoop()
  }

  selectTab = '1';
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
