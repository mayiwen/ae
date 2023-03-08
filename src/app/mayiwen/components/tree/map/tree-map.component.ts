import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ArrowObject } from '../o/arrow.o';
import { TreeItem } from '../o/tree.o';
import { MayiwenTreeMapService } from './service/tree-map.service';
@Component({
  selector: 'app-mayiwen-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.less'],
  providers: []
})
export class MayiwenTreeMapComponent implements OnInit, AfterViewInit, OnDestroy {
  private $destorySubject = new Subject()
  private _data = {}
  @Input() set data(data: any) {
    console.log('这是打印的data')
    console.log(data)
    console.log(data)
    this._data = {
      children: data,
      flagRoot: true,
      flagExpand: true,
    }
    this.dataLoop(this._data, '')

  }
  constructor(private mayiwenTreeMapService: MayiwenTreeMapService ) {
    this.mayiwenTreeMapService.arrowSubject.pipe(takeUntil(this.$destorySubject)).subscribe((data: ArrowObject) => {
      console.log('这是传递的data 在 treemap')
      console.log(data)
      if (data.type === 'right') {
        this.dataLoopAddChild(this._data, data.data);
      }
      if (data.type === 'left') {
        this.dataLoopAddFather(this._data, data.data);
      }

    })
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    this.$destorySubject.next(null)
    this.$destorySubject.unsubscribe()
  }
 
  get data() {
    return this._data
  }
  dataLoop(data: TreeItem, treeId) {
    // 最外层的数据是没有data.level，给data.level设置一个默认的值为0。
    if (!data.level) {
      data.level = 0
    }
    // 给他的孩子们设置的值为当前值+1
    if (data.children && data.children.length > 0) {
      data.children.forEach((item, index) => {
        item.level = data.level + 1;
        item.treeId = treeId ?  treeId + '-' + index : index + '' // 设置一个id
        item.flagExpand = true;
        this.dataLoop(item, item.treeId);
      })
    }
  }
  dataLoopAddChild(data, lockData: TreeItem) {
    if (data.treeId === lockData.treeId) {
      let treeId = ''
      if (data.children && data.children.length > 0) {
        treeId = data.treeId + '-' + data.children.length
      } else {
        data.children = []
        treeId = data.treeId + '-' + 0
      }
      data.children.push({
        level: lockData.level + 1,
        v: 'default',
        value: 'default',
        treeId,
        flagExpand: true

      })
    }
    // 给他的孩子们设置的值为当前值+1
    if (data.children && data.children.length > 0) {
      data.children.forEach((item, index) => {
        this.dataLoopAddChild(item, lockData);
      })
    }
  }
  dataLoopAddFather(data, lockData: TreeItem) {
    console.log('这是打印的')
    console.log(data)
    console.log(lockData)
    let location = lockData.treeId.split('-')
    console.log(location)
    let temp = {...data}
    for (let index = 0; index <= location.length - 1; index++) {
      let a = +location[index]
      temp = temp.children[a]
    }
    console.log('这是temp')
    console.log(temp)
    let tempCopy = {...temp}
    let b: TreeItem = {
      level: tempCopy.level ,
      v: 'default',
      value: 'default',
      treeId: tempCopy.treeId,
      flagExpand: true
    }
    b.children = []
    b.children.push({...tempCopy, treeId: tempCopy.treeId + '-' + 1 })
    console.log(temp)
    console.log(data)
    temp = b
  }

  
  
  

  selectTab = '1';

}
