import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) { }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request.clone({
      setHeaders: {
        token: "123456"
      }
    }))
      .pipe(
        tap(event => {
          // continue
          // console.log(event);
        }, error => {
          if (error.status == 404) {
            this.router.navigate(['/autenticacion', 'Sesion Caducada']);
          }
        }));
  }
}
