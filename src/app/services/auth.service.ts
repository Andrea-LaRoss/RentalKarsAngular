import { Injectable } from '@angular/core';
import { UsersService } from "./users.service";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "api/users";

  constructor(private userService: UsersService, private http: HttpClient) { }


  login (email: string, password: string): Observable<User> {
    return this.http.post<User>( this.loginUrl, {email, password});
  }


  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

}
