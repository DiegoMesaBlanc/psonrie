import { Psychologist } from './../../../../models/init/Psychologist';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';



@Component({
  selector: 'app-psychologist',
  templateUrl: './psychologist.component.html',
  styleUrls: ['./psychologist.component.scss']
})
export class PsychologistComponent implements OnInit {

  psycho: Observable<Psychologist>;

  constructor(private store: Store<Psychologist>) { }

  ngOnInit() {
    this.store.select('psycho').subscribe(data => {
      this.psycho = data;
    });
    this.store.select(s => console.log(s))
  }

}
