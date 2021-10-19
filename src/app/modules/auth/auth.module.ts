import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register/register.component';
import { QuestionsComponent } from './components/questions/questions/questions.component';



@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
})


export class AuthModule { }
