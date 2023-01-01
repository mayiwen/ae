import { ChangeDetectorRef, Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { table } from 'console';
import { TableSetting } from './o/table';
import { MayiwenJsonService } from '../../util/json/json';
@Component({
  selector: 'app-mayiwen-table',
  templateUrl: './mayiwen-table.component.html',
  styleUrls: ['./mayiwen-table.component.less'],
  providers: [MayiwenJsonService]
})
export class MayiwenTableComponent   {
  @Input() data;
  @Input() tableSetting: TableSetting;
  @ContentChild('header', { static: true }) headerTemplate: TemplateRef<any>;
  constructor( private cdr: ChangeDetectorRef, public mjs: MayiwenJsonService ) {
    console.log('table');
    console.log(this.data);
    // if (this.tableSetting) {
    // }
  }
  get headWidth() {
    let w = 0;
    this.tableSetting.tableHead.forEach(item => {
      w = w + (item.w ? item.w : 100) + 2;
    });
    return w;
  }
}
