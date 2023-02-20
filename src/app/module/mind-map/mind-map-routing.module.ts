import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MindMapComponent } from './mind-map.component'

const routes: Routes = [
  {path: '', component: MindMapComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MindMapRoutingModule { }
