import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    /*
    let email: string = "test@test.com";
    let password: string = "1234";
    */
    let AuthHeader : string = "";
    let AuthToken = sessionStorage.getItem("AuthToken");

    if(AuthToken != null){
      AuthHeader = AuthToken;
    }

    if(this.authService.isLogged()) {
      req = req.clone({
        setHeaders : {Authorization : AuthHeader}
      })
    }

    return next.handle(req);

  }
}
