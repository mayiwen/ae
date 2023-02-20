import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'nav-setting',
    loadChildren: () => import('./module/setting/nav-setting/nav-setting.module').then((x) => x.NavSettingModule)
  },
  {
    path: 'desktop',
    loadChildren: () => import('./module/desktop/desktop.module').then((x) => x.DesktopModule)
  },
  {
    path: 'mind-map',
    loadChildren: () => import('./module/mind-map/mind-map.module').then((x) => x.MindMapModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
