import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavSettingComponent } from './nav-setting.component';
const routes: Routes = [
  {path: '', component: NavSettingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavSettingRoutingModule { }
