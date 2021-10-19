import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { InitViewRoutingModule } from './init-view-routing.module';
import { InitViewComponent } from './components/init-view/init-view.component';

// Components



@NgModule({
  declarations: [
    InitViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InitViewRoutingModule,
  ],
  providers: [
    
  ]
})


export class InitViewModule { }
