import { NgModule  } from '@angular/core';
import { CommonModule  } from '@angular/common';


import { TopComponent } from './top/top.component';
import { LeftComponent } from './left/left.component';
import { RouterModule } from '@angular/router';
const components = [TopComponent,LeftComponent ];
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...components],
  exports: [...components]
})
export class BaseModule {}
