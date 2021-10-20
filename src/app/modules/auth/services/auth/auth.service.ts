import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpEventType } from '@angular/common/http'

import { environment } from '../../../../../environments/environment';

import { Utilities } from '../../../../common/Utilities';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utilities = new Utilities();


  constructor(
    private _http: HttpClient
  ) { }


  /*
  *  Servicio de autenticacion.
  */
  login(user) {
    return this._http.post<any>(environment.login.endpoint, user, { observe: 'events'}).toPromise()
      .then((res) => {
        return this.utilities.setCustomResponse(res, true);
      })
      .catch(err => {
        return this.utilities.setCustomResponse(err, false);
      })
  }
}
