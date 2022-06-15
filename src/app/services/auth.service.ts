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


  login (email: string, password: string): boolean {
    const retVal = (email === 'test@test.com' || email === 'user@mock.com');

    if(retVal && email === 'test@test.com') {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "ADMIN");
    } else {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "USER");
    }

    return retVal;
  }


  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

  isUser = () : boolean => (sessionStorage.getItem("Ruolo") === "USER");

  logout() {
    sessionStorage.clear();
  }

}
