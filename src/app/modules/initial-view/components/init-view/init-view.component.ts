import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './../../../../app.component';


@Component({
  selector: 'app-init-view',
  templateUrl: './init-view.component.html',
  styleUrls: ['./init-view.component.scss']
})
export class InitViewComponent implements OnInit {
  

  constructor(
    private _router: Router,
    private app: AppComponent
  ) { }

  ngOnInit() {
    
  }

}
