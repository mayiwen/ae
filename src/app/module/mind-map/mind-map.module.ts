import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MindMapComponent } from './mind-map.component'
import { MindMapRoutingModule } from './mind-map-routing.module'
@NgModule({
  declarations: [
    MindMapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MindMapRoutingModule,
    MindMapComponent
  ],
  bootstrap: [
    MindMapComponent
  ],
  providers: [],
})
export class MindMapModule { }
