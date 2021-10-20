import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './../../../../app.component';

import { Authentication } from './../../../../models/auth/Authentication';
import { Alerts } from './../../../../common/enums/Alerts';

import { AuthService } from './../../services/auth/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  user: Authentication = new Authentication();

  load: boolean = false;


  constructor(
    private _router: Router,
    private app: AppComponent,
    private authSrv: AuthService
  ) {

  }

  ngOnInit() {

  }

  /*
  *  Metodo de inicio de sesion.
  */
  authUser() {
    this.load = true;

    this.authSrv.login(this.user)
      .then(auth_res => {
        if (auth_res.status == 200) {
          this.load = false;

          this.app.showAlert(Alerts.T_SUCCESS, Alerts.M_SUCCESS, Alerts.SUCCESS);

          this._router.navigate(['/inicio']);
        }
      })
      .catch(err => {
        this.load = false;
        this.app.showAlert(Alerts.T_ERROR, Alerts.M_ERROR, Alerts.ERROR);
      })
  }

}
