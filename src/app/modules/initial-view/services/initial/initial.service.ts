import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpEventType } from '@angular/common/http'

import { environment } from '../../../../../environments/environment';

import { Utilities } from '../../../../common/Utilities';


@Injectable({
  providedIn: 'root'
})
export class InitialService {

  utilities = new Utilities();


  constructor(
    private _http: HttpClient
  ) { }


  /*
  *  Servicio lista psicologos.
  */
  getPsychologist() {
    return this._http.get<any>(environment.psychologist.endpoint, { observe: 'events' }).toPromise()
      .then((res) => {
        return this.utilities.setCustomResponse(res, true);
      })
      .catch(err => {
        return this.utilities.setCustomResponse(err, false);
      })
  }


  /*
  *  Servicio información psicologo.
  */
  getInfoPsycho(id) {
    return this._http.get<any>(`${environment.psychologist.endpoint}/${id}`, { observe: 'events' }).toPromise()
      .then((res) => {
        return this.utilities.setCustomResponse(res, true);
      })
      .catch(err => {
        return this.utilities.setCustomResponse(err, false);
      })
  }
}
