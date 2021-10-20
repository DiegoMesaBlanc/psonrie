import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';

import { ServiceInterceptor } from './common/interceptors/serviceInterceptor';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Modules
import { AuthModule } from './modules/auth/auth.module';

import { reducer } from './store/store.reducer';


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
    FormsModule,
    StoreModule.forRoot({ psycho: reducer }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ServiceInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
