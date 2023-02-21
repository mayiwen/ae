import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { MayiwenService } from './mayiwen.service';
import { MayiwenTabsComponent } from './components/tabs/mayiwen-tabs.component';
import { MayiwenTabSetComponent } from './components/tabs/tabset/mayiwen-tabsetcomponent';
import { MayiwenSelectComponent } from './components/select/mayiwen-select.component';
import { MayiwenOptionComponent } from './components/select/option/mayiwen-option.component';
import { MayiwenTableComponent } from './components/table/mayiwen-table.component';
import { MayiwenModalComponent } from './components/modal/mayiwen-modal.component';
import { MayiwenButtonComponent } from './components/button/mayiwen-button.component';
import { MayiwenTreeMapComponent } from './components/tree/map/tree-map.component';
import { MayiwenJsonService } from './util/json/json';

const components = [
  MayiwenTabsComponent,
  MayiwenTabSetComponent,
  MayiwenSelectComponent,
  MayiwenOptionComponent,
  MayiwenTableComponent,
  MayiwenModalComponent,
  MayiwenButtonComponent,
  MayiwenTreeMapComponent
];
@NgModule({
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
  ],
  providers: [MayiwenService, MayiwenJsonService],
})
export class MayiwenModule { }
