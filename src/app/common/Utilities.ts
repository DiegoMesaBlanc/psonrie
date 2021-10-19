import { CustomResponse } from '../models/utilities/Customer-response';

export class Utilities {

  /* 
  *  Funcion que centraliza respuesta de los servicios.
  */
  setCustomResponse(res: any, isOk: boolean): CustomResponse {
    const customResponse = new CustomResponse();

    if (isOk) {
      customResponse.body = res.body;
    } else {
      customResponse.error = res.error;
    }

    customResponse.status = res.status;

    return customResponse;
  }

}
