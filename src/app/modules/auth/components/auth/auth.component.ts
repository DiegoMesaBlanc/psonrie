import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './../../../../app.component';

import { Authentication } from './../../../../models/auth/Authentication';
import { Storage } from './../../../../models/utilities/Storage';
import { Alerts } from './../../../../common/enums/Alerts';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user = new Authentication();

  load: boolean = false;


  constructor(
    private _router: Router,
    private app: AppComponent,
    private _storage: Storage
  ) {

  }

  ngOnInit() {

  }

  /*
  *  Metodo de inicio de sesion.
  */
  authUser() {
    this.load = true;

    setTimeout(() => {
      this.load = false;
      
      this.app.showAlert(Alerts.T_SUCCESS, Alerts.M_SUCCESS, Alerts.SUCCESS);
      this._storage.setSession({ document: this.user.document });

      this._router.navigate(['/inicio']);
    }, 1500);
  }

}
