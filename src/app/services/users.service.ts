import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../mock-data/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log("UsersService: ", message);
  }

  getUsers(): Observable<User[]> {
    this.log("Utenti abbuscati");
    return this.http.get<User[]>(this.usersUrl);
  }
}
