import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createFalse } from 'typescript/lib/tsserverlibrary';
import { BackendNavService } from '../../../../../backend/nav';
import { TableSetting } from '../../../../../mayiwen/components/table/o/table';
import { MayiwenJsonService } from '../../../../../mayiwen/util/json/json';
// import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-setting-title',
  templateUrl: './setting-title.component.html',
  styleUrls: ['./setting-title.component.less'],
  providers: [BackendNavService],
})
export class SettingTitleComponent implements OnInit, AfterViewInit {
  modal = false;
  modalDelete = false;
  myContext = { $implicit: 'World', localSk: 'Svet' };
  deleteSave = {} as any;
  items = [
    {
      name: 'zs',
      age: 1,
    },
    {
      name: 'ls',
      age: 2,
    },
  ];
  title = 'mayiwen';
  tableSetting: TableSetting = {
    tableHead: [
      {
        value: 'id',
        v: '序号',
        w: 100,
      },
      {
        value: 'edit',
        v: '操作',
        w: 100,
        type: 'content',
        typeKey: '.hello',
      },
      {
        value: 'title',
        v: '标题',
        w: 200,
      },
      
    ],
  };
  addOrEditForm = this.fb.group({
    id: [''],
    title: ['', Validators.required],
  });
  modalAddFlag = false;
  modalupdateFlag = false;
  public alertTitle = '';
  public alertTitleUpdate = '';
  public alertTitleid;
  // private confirmModal;
  public tableDate = []; // 表格的数据
  /**
   * 是否是添加 true的时候是添加，false的时候是修改
   */
  flagAddOrUpdate = true;

  constructor(
    private backendNavService: BackendNavService,
    private cdr: ChangeDetectorRef,
    public mjs: MayiwenJsonService,
    private fb: FormBuilder
  ) {}
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }
  async ngOnInit() {
    this.getTableData();
  }
  getTableData() {
    this.backendNavService.linkTitle().subscribe((res) => {
      this.tableDate = res;
    });
    // setTimeout(() => {
    //   console.log(this.tableDate);
    //   this.cdr.markForCheck();
    //   this.cdr.detectChanges();
    // }, 0);
  }
  modalAddOk(): void {
    console.log('Button ok clicked!');
    // if (!this.alertTitle.trim()) {
    //   this.message.create('error', `内容不可以为空`);
    //   return;
    // }
    this.backendNavService.linkTitlePost(this.alertTitle).subscribe((res) => {
      console.log(res);
      this.getTableData();
      this.modalAddFlag = false;
    });
  }

  modalAddCancel(): void {
    console.log('Button cancel clicked!');
    this.modalAddFlag = false;
  }
  deleteTitle(id) {
    // this.confirmModal = this.modal.confirm({
    //   nzTitle: '删除这个条目吗?',
    //   // nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
    //   nzOnOk: () =>
    //     // new Promise((resolve, reject) => {
    //     //   setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    //     // }).catch(() => console.log('Oops errors!'))
    //     this.backendNavService.linkTitleDelete(id).subscribe(res => {
    //       console.log(res);
    //       this.getTableData();
    //     })
    // });
  }
  edit(item) {
    console.log(item);
    this.modal = true;
    this.flagAddOrUpdate = false;
    this.addOrEditForm.patchValue({
      id: item.id,
      title: item.title,
    });
  }
  delete(item) {
    console.log(item);
    this.deleteSave = item;
    this.modalDelete = true;
  }
  close() {
    console.log('这是父组件调用的');
    this.modal = false;
  }
  /** 添加之前 */
  addBefore() {
    this.modal = true;
    this.flagAddOrUpdate = true;
  }
  addItem() {
    console.log(this.addOrEditForm);
    console.log(this.addOrEditForm.getRawValue());
    if (!this.addOrEditForm.getRawValue().title.trim()) {
      alert('不可为空');
      return;
    }
    this.backendNavService
      .linkTitlePost(this.addOrEditForm.getRawValue().title)
      .subscribe((res) => {
        console.log(res);
        this.getTableData();
        this.modal = false;
      });
  }
  deleteClick() {
    this.backendNavService
      .linkTitleDelete(this.deleteSave.id)
      .subscribe((res) => {
        console.log(res);
        this.getTableData();
        this.modalDelete = false;
      });
  }
  editItem() {
    this.backendNavService
      .linkTitlePacch(this.addOrEditForm.getRawValue().id, {
        id: this.addOrEditForm.getRawValue().id,
        title: this.addOrEditForm.getRawValue().title,
      })
      .subscribe((res) => {
        console.log(res);
        this.getTableData();
        this.modal = false;
      });
  }
}
