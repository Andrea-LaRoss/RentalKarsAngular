import { Injectable } from '@angular/core';
import { UsersService } from "./users.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import { environment } from "../../environments/environment";
import {Token} from "../models/token";

@Injectable({
  providedIn: 'root'
})
export class AuthJWTService {

  server: string = environment.server;
  port : string = environment.port;

  constructor(private http: HttpClient) {}

  autenticaService(email: string, password: string) {

    let AuthString: string = "Basic " + window.btoa(email + ":" + password);

    let headers = new HttpHeaders(
      {Authorization: AuthString}
    )

    return this.http.post<Token>(
      environment.authServerUri, {email, password}).pipe(
        map(
          data => {
            sessionStorage.setItem("Utente", email);
            sessionStorage.setItem("AuthToken", 'Bearer ' + data.token);

            return data;
          }
        )
    )
  }

  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

  isUser = () : boolean => (sessionStorage.getItem("Ruolo") === "USER");

  logout() {
    sessionStorage.clear();
  }

  getAuthToken = () : string => {

    let AuthHeader: string = "";
    var AuthToken = sessionStorage.getItem("AuthToken");

    if(AuthToken != null) {
      AuthHeader = AuthToken;
    }

    return AuthHeader;

  }
}
