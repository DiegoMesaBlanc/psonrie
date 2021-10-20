import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
})


export class AuthModule { }
