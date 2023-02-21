import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MindMapComponent } from './mind-map.component';
import { MindMapRoutingModule } from './mind-map-routing.module';
import { WangEditorComponent } from './editor/wangeditor/wangeditor.component';
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
  ],
  bootstrap: [
    MindMapComponent
  ],
  providers: [],
})
export class MindMapModule { }
