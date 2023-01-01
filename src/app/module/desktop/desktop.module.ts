import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DesktopRoutingModule } from './desktop-routing.mdule';
import { DesktopComponent } from './desktop.component';
import { MayiwenModule } from '../../mayiwen/mayiwen.module';
@NgModule({
  declarations: [
    DesktopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MayiwenModule,
    DesktopRoutingModule
  ],
  bootstrap: [
  ],
  providers: [],
})
export class DesktopModule { }
