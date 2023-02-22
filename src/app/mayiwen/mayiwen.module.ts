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
import { MayiwenTreeMapLoopComponent } from './components/tree/map/component/loop/tree-map-loop.component'
import { MayiwenTreeMapLineComponent } from './components/tree/map/component/line/tree-map-line.component'
import { MayiwenJsonService } from './util/json/json';
import { MayiwenTreeMapService } from './components/tree/map/service/tree-map.service'

const components = [
  MayiwenTabsComponent,
  MayiwenTabSetComponent,
  MayiwenSelectComponent,
  MayiwenOptionComponent,
  MayiwenTableComponent,
  MayiwenModalComponent,
  MayiwenButtonComponent,
  MayiwenTreeMapComponent,
  MayiwenTreeMapLoopComponent,
  MayiwenTreeMapLineComponent
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
  providers: [MayiwenService, MayiwenJsonService, MayiwenTreeMapService],
})
export class MayiwenModule { }
