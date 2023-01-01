import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createFalse } from 'typescript/lib/tsserverlibrary';
import { BackendNavService } from '../../../../../backend/nav';
import { TableSetting } from '../../../../../mayiwen/components/table/o/table';
import { MayiwenJsonService } from '../../../../../mayiwen/util/json/json';

@Component({
  selector: 'app-setting-link',
  templateUrl: './setting-link.component.html',
  styleUrls: ['./setting-link.component.less'],
  providers: [BackendNavService, ],
})
export class SettingLinkComponent implements OnInit, AfterViewInit {
  @ViewChild('navRef') navRef: ElementRef;
  addOrEditForm = this.fb.group({
    title: ['', Validators.required],
    url: ['', Validators.required],
    selectObj: this.fb.group({
      v: '下载',
      value: '4'
    })
  });
  dropSaveIndex = 0;
  public tableDate = []; // 表格的数据
  public linkList = [];
  public selectObj = {} as any;
  tableSetting: TableSetting = {
    tableHead: [
      {
        value: 'id',
        v: '序号',
        w: 100,
      },
      {
        value: 'title',
        v: '标题',
        w: 200,
      },
      {
        value: 'edit',
        v: '操作',
        w: 200,
        type: 'content',
        typeKey: '.hello',
      },
    ],
  };
  /** 删除确认框 */
  modalDelete = false
  deleteObj = {} as any
  constructor(
    public mjs: MayiwenJsonService,
    private backendNavService: BackendNavService,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder
  ) {}
  async ngOnInit() {
    this.getTableData();
  }
  ngAfterViewInit(): void {
    window.onresize = () => {};
  }
  getTableData() {
    this.backendNavService.linkTitle().subscribe((res) => {
      this.tableDate = res;
      const id = this.tableDate[0].id;
      this.getLinkById(id);
      // this.cdr.markForCheck();
      // this.cdr.detectChanges();
    });
  }
  getLinkById(id) {
    this.backendNavService.linkLink(id).subscribe((res) => {
      console.log('这是打印的');
      console.log(res);
      this.linkList = res;
    });
  }
  changeSelect(e) {
    console.log('这是切换的');
    console.log(e);
    this.getLinkById(e.value);
  }
  dragStart(item, index, flag?: boolean) {
    console.log('drag start');
    console.log(item);
    console.log(index);
    this.dropSaveIndex = index;
    // this.drapType = 'm';
  }
  dragenter(e) {
    e.preventDefault();
  }
  dragleave(e) {
    e.preventDefault();
  }
  dragover(e) {
    e.preventDefault();
  }
  drop(e) {
    e.preventDefault();
    console.log('drop');
    // console.log(e.dataTransfer);
    // console.log(e.dataTransfer.files);
    // const files = [];
    // [].forEach.call(
    //   e.dataTransfer.files,
    //   function (file) {
    //     files.push(file);
    //   },
    //   false
    // );
    // console.log('这是文件');
    // console.log(files);
    // files.forEach(async (item) => {
    //   let dat = await imgIcon(item.path);
    //   item.img = dat.toDataURL();
    //   this.appList.push({
    //     /** 链接的名字，用于图标下的展示 */
    //     name: item.name,
    //     /** 链接的位置，用于点击的时候，打开的位置 */
    //     path: item.path,
    //     /** 图片的路径 */
    //     img: item.img,
    //     /** type 类型 m multiple，多个的，点击弹出单个路径  s single单个的，点击直接跳转 */
    //     type: 's',
    //   });
    //   this.localStorageSet();
    // });
  }
  dropInner(e, item, index) {
    e.preventDefault();
    console.log('这是拖进的');
    console.log(item, index);
    console.log('这是拖动的');
    console.log(this.dropSaveIndex);
    console.log('进入了1');
    console.log('dropInner');
    console.log(e, item, index);
    const itemSave = this.linkList[this.dropSaveIndex];
    this.linkList.splice(this.dropSaveIndex, 1);
    this.linkList.splice(index, 0, itemSave);
    let list = [...this.linkList].map((itemi, index) => {
      return {
        indexLink: index,
        titleId: itemi.title_id,
        title: itemi.title,
        src: itemi.src,
        id: itemi.id,
      };
    });
    this.backendNavService.patchLinkAll(list).subscribe((res) => {
      console.log(res);
      this.getLinkById(this.selectObj.value);
    });
    // let itemSave = this.appList[this.dropSaveIndex];
    // if (index === this.dropSaveIndex) {
    //   return;
    // }
    // /* 拖动的是图片的时候的处理逻辑 */
    // if (this.drapType === 'img') {
    //   this.appList[index].children.push(itemSave);
    //   this.appList.splice(this.dropSaveIndex, 1);
    // } else {
    //   if (item.type === 'm') {
    //     this.appList[index].children.push(itemSave);
    //     this.appList.splice(this.dropSaveIndex, 1);
    //   } else {
    //     this.appList.splice(this.dropSaveIndex, 1);
    //     this.appList.splice(index, 0, itemSave);
    //   }
    // }
    // this.localStorageSet();
  }
  /**
   * 重置添加的数据
   */
  reset(){
    this.addOrEditForm.patchValue({
      title: '',
      url: ''
    })
  }
  /** 这是添加的方法 */
  add() {
    console.log(this.addOrEditForm);
    if(this.addOrEditForm.invalid) {
      return alert('不可为空。');
    }
    console.log(this.addOrEditForm.getRawValue())
    const params = {
      titleId: this.addOrEditForm.getRawValue().selectObj.value,
      title: this.addOrEditForm.getRawValue().title,
      src: this.addOrEditForm.getRawValue().url
    }
    console.log(params);
    this.backendNavService.linkLinkSave(params).subscribe(res => {
      this.getLinkById(this.addOrEditForm.getRawValue().selectObj.value);
    })
  }

  delete(item) {
    console.log('这是待删除的对象');
    console.log(item);
    this.deleteObj = item
    this.modalDelete = true;
  }

  deleteClick() {
    this.backendNavService.linkLinkDeleteById(this.deleteObj.id).subscribe(res => {
      this.getLinkById(this.addOrEditForm.getRawValue().selectObj.value);
      this.modalDelete = false;
    })
  }
}
