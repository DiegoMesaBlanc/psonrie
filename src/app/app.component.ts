import { Component } from '@angular/core';

import { Alerts } from './common/enums/Alerts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  // Another variables
  alertView: boolean = false;
  alertClass: Alerts;
  alertTitle: string;
  mssAlert: string
  showAlerts: any = [];


  constructor() {
  }


  /*
  *  Metodo que muestra las alertas.
  */
  showAlert(title: string, message: string, type: Alerts) {
    this.alertView = true;
    this.showAlerts.push({
      alertTitle: title,
      mssAlert: message,
      alertClass: type,
    })

    setTimeout(() => {
      this.showAlerts = [];
      this.alertView = false;
    }, 5000)
  }

  /*
  *  Metodo que muestra las alertas.
  */
  hiddeAlert() {
    this.alertView = false;
  }

}
