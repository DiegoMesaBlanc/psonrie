export class Storage {
  token = 'token';
  session = 'session';
  chooseProd = 'chooseProd'

  methodSaveData = sessionStorage;


  /* 
  *  Guardar datos en el STORAGE.
  */
  setToken(data) {
    this.methodSaveData.setItem(this.token, data);
  }

  setSession(user) {
    this.methodSaveData.setItem(this.session, btoa(JSON.stringify(user)));
  }

  setChoosenProd(prod) {
    this.methodSaveData.setItem(this.chooseProd, btoa(JSON.stringify(prod)));
  }




  /* 
  *  Obtener datos del STORAGE.
  */
  getToken() {
    return this.valid(this.methodSaveData.getItem(this.token)) ? this.methodSaveData.getItem(this.token) : '';
  }

  getSession() {
    return this.valid(this.methodSaveData.getItem(this.session)) ? JSON.parse(atob(this.methodSaveData.getItem(this.session))) : null;
  }

  getChoosenProd() {
    return this.valid(this.methodSaveData.getItem(this.chooseProd)) ? JSON.parse(atob(this.methodSaveData.getItem(this.chooseProd))) : null;
  }



  /* 
  *  Eliminar datos en el STORAGE.
  */
  delChoosenProd() {
    this.methodSaveData.removeItem(this.chooseProd);
  }



  /* 
  *  Validación de datos nulos en el STORAGE.
  */
  valid(opc) {
    let r = true;

    if (!opc || opc == null || opc == '' || opc == 'undefined') {
      r = false
    }

    return r;
  }
}
