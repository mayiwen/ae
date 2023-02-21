import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MindMapComponent } from './mind-map.component';
import { MindMapRoutingModule } from './mind-map-routing.module';
import { WangEditorComponent } from './editor/wangeditor/wangeditor.component';
import { MayiwenModule } from '../../mayiwen/mayiwen.module';
@NgModule({
  declarations: [
    MindMapComponent,
    WangEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MindMapRoutingModule,
    MayiwenModule
  ],
  bootstrap: [
    MindMapComponent
  ],
  providers: [],
})
export class MindMapModule { }
