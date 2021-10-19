import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitViewComponent } from './components/init-view/init-view.component';


const routes: Routes = [
  { path: '', component: InitViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InitViewRoutingModule { }