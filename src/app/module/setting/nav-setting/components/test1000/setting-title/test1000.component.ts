import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { createFalse } from 'typescript/lib/tsserverlibrary';
import { SelectInterface } from '../../../../../../mayiwen/components/select/o/select';
// import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-test-1000',
  templateUrl: './test1000.component.html',
  styleUrls: ['./test1000.component.less'],
  providers: []
})
export class Test1000Component implements OnInit, AfterViewInit {
  dataList: SelectInterface[] = [
    {
      v: '1111',
      value: '1111',
    },
    {
      v: '2222',
      value: '2222',
    },
    {
      v: '3333',
      value: '3333',
    },
    {
      v: '4444',
      value: '4444',
    },
    {
      v: '5',
      value: '5',
    },
    {
      v: '6',
      value: '6',
    },
  ];
  selectObj: SelectInterface = {
    v: '5',
    value: '5',
  };
  public tableDate = []; // 表格的数据
  modalAddFlag = false;
  modalupdateFlag = false;
  public alertTitle = '';
  public alertTitleUpdate = '';
  public alertTitleid ;
  private confirmModal;
  constructor(
    private cdr: ChangeDetectorRef,
    ) {

  }
  get selectObjJSON() {
    return JSON.stringify(this.selectObj);
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');

  }
  async ngOnInit() {
    this.getTableData();
  }
  getTableData() {
  }
  modalAddOk(): void {
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
  /** 点击打印的时候的 */
  change() {
    this.selectObj = {
      v: '6',
      value: '6',
    };
  }
}
