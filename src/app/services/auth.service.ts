import { Injectable } from '@angular/core';
import { UsersService } from "./users.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService: UsersService) { }


  login (email: string, password: string): boolean {
    const retVal = (email === 'test@test.com' || email === 'user@mock.com');

    if(retVal && email === 'test@test.com') {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "ADMIN");
    } else {
      sessionStorage.setItem("Utente", email);
      sessionStorage.setItem("Ruolo", "User");
    }

    return retVal;
  }


  loggedUser = () : string | null => (sessionStorage.getItem("Utente")) ? sessionStorage.getItem("Utente") : "";

  isLogged = () : boolean => !!(sessionStorage.getItem("Utente"));

  isAdmin = () : boolean => (sessionStorage.getItem("Ruolo") === "ADMIN");

}
