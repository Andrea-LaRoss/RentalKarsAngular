import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map, Observable, tap} from "rxjs";
import { environment } from "../../environments/environment";
import { Token } from "../models/token";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthJWTService {

  server: string = environment.server;
  port : string = environment.port;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  autenticaService(email: string, password: string) {
    return this.http.post<Token>(
     "http://localhost:8080/api/auth", {email, password}).pipe(
       map(
         data => {
           const decoded = this.jwtHelper.decodeToken(data.token);
           sessionStorage.setItem("AuthToken", "Bearer " + data.token);
           sessionStorage.setItem("Utente",decoded.sub);
           sessionStorage.setItem("Ruolo",decoded.role);
         }
       )
    );
  }

  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

  isUser = () : boolean => (sessionStorage.getItem("Ruolo") === "USER");

  logout() { sessionStorage.clear(); }

  getAuthToken = () : string => {

    let AuthHeader: string = "";
    var AuthToken = sessionStorage.getItem("AuthToken");

    if(AuthToken != null) {
      AuthHeader = AuthToken;
    }

    return AuthHeader;

  }
}
