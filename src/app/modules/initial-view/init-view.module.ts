import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Routing
import { InitViewRoutingModule } from './init-view-routing.module';
import { InitViewComponent } from './components/init-view/init-view.component';
import { PsychologistComponent } from './components/psychologist/psychologist.component';

// Components



@NgModule({
  declarations: [
    InitViewComponent,
    PsychologistComponent
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
