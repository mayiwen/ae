import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { createFalse } from 'typescript/lib/tsserverlibrary';
import { SelectInterface } from '../../../../../../mayiwen/components/select/o/select';
// import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.less'],
  providers: []
})
export class AppCardComponent  {
  @ContentChild('header', { static: true }) headerTemplate: TemplateRef<any>;
  public title = 'Test';
  public otherDate = {
    auth: 'me',
    name: 'appCard'
  };
  constructor(
    private cdr: ChangeDetectorRef,
    ) {
  }
}
