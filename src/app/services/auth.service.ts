import { Injectable } from '@angular/core';
import { UsersService } from "./users.service";
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "/api/login";

  constructor(private userService: UsersService, private http: HttpClient) { }


  login (email: string, password: string): Observable<User> {

    return this.http.post<User>( this.url, {email, password});
    /*const retVal = (email === 'test@test.com' || email === 'user@mock.com');

    if(retVal && email === 'test@test.com') {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "ADMIN");
    } else {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "User");
    }*/

  }


  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

}
