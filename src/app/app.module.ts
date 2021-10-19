import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { Storage } from './models/utilities/Storage';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';

// Modules
import { AuthModule } from './modules/auth/auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    // AuthGuard,
    Storage,
    // { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
