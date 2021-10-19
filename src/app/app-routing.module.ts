import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path: 'autenticacion',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: 'inicio',
    loadChildren: './modules/initial-view/init-view.module#InitViewModule'
  },


  { path: '', redirectTo: 'autenticacion', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
  { path: '404', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
