import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register/register.component';
import { QuestionsComponent } from './components/questions/questions/questions.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'registrarse', component: RegisterComponent },
  { path: 'preguntas-seguridad', component: QuestionsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }