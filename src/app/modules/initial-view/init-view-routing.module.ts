import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitViewComponent } from './components/init-view/init-view.component';
import { PsychologistComponent } from './components/psychologist/psychologist.component';


const routes: Routes = [
  { path: '', component: InitViewComponent },
  { path: 'psicologo', component: PsychologistComponent }
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