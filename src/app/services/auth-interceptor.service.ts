import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {AuthJWTService} from "./authJWT.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthJWTService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    let email: string = "test@test.com";
    let password: string = "1234";
    */
    let AuthToken = this.authService.getAuthToken();

    if(this.authService.loggedUser()) {
      req = req.clone({
        setHeaders : {Authorization : AuthToken}
      })
    }

    return next.handle(req);

  }
}
