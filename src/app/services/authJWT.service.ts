import { Injectable } from '@angular/core';
import { UsersService } from "./users.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  server: string = environment.server;
  port : string = environment.port;

  constructor(private http: HttpClient) {}

  autenticaService(email: string, password: string) {

    let AuthString: string = "Basic " + window.btoa(email + ":" + password);

    let headers = new HttpHeaders(
      {Authorization: AuthString}
    )

    return this.http.get<any>(
      'http://' + this.server + ":" + this.port, {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem("Utente", email);
            sessionStorage.setItem("AuthToken", AuthString);

            return data;
          }
        )
    )
  }
}
