import * as storeActions from './../../../../store/store.action';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppComponent } from './../../../../app.component';

import { InitialService } from './../../services/initial/initial.service';

import { Alerts } from './../../../../common/enums/Alerts';

import { Psychologist } from './../../../../models/init/Psychologist';


@Component({
  selector: 'app-init-view',
  templateUrl: './init-view.component.html',
  styleUrls: ['./init-view.component.scss']
})
export class InitViewComponent implements OnInit {

  load: boolean = true;

  psychologist: Psychologist[] = [];


  constructor(
    private initSrv: InitialService,
    private app: AppComponent,
    private _router: Router,
    private store: Store<Psychologist>,
  ) { }

  ngOnInit() {
    this.store.dispatch(new storeActions.RemovePsychologist());
    this.load = true;

    this.initSrv.getPsychologist()
      .then(ini_res => {
        if (ini_res.status == 200) {
          this.psychologist = ini_res.body;

          this.load = false;
          this.app.showAlert(Alerts.T_SUCCESS, Alerts.M_SUCCESS, Alerts.SUCCESS);
        }
      })
      .catch(err => {
        this.load = false;
        this.app.showAlert(Alerts.T_ERROR, Alerts.M_ERROR, Alerts.ERROR);
      })
  }

  /**
   *  Metodo que trae la informacion del psicologo
   */
   dataPsycho(id) {
     this.load = true;

    this.initSrv.getInfoPsycho(id)
    .then(psy_res => {
      if (psy_res.status == 200) {
        this.store.dispatch(new storeActions.addPsychologist(psy_res.body));

        this.load = false;
        this.app.showAlert(Alerts.T_SUCCESS, Alerts.M_SUCCESS, Alerts.SUCCESS);

        this._router.navigate(['/inicio/psicologo']);
      }
    })
    .catch(err => {
      this.load = false;
      this.app.showAlert(Alerts.T_ERROR, Alerts.M_ERROR, Alerts.ERROR);
    })
   }
}
