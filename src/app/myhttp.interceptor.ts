import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtenteService } from './services/utente.service';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {

  tenantID = 'fe_0421';

  constructor(private utenteService: UtenteService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    if (this.utenteService.getToken()) {
      myRequest = request.clone(
        {
          headers: request.headers
            .set("Authorization", 'Bearer ' + this.utenteService.getToken())
            .set("X-TENANT-ID", this.tenantID)
        })
    }
    else {
      myRequest = request.clone({
        headers: request.headers.set('X-TENANT-ID', this.tenantID)
      })
    }

    return next.handle(myRequest);
  }
}
