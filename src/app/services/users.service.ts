import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  private log(message: string) {
    console.log("UsersService: ", message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(tap(_ => this.log('Utenti estratti')), catchError(this.handleError<User[]>('getUsers', [])));
  }

  getUser(id: number): Observable<User> {
    const url = this.usersUrl + '/' + id;
    return this.http.get<User>(url)
      .pipe(tap(_ => this.log('Utente estratto id: ' + id)), catchError(this.handleError<User>('getUser id=' + id)));
  }

  getUserValidate(email: string): Observable<User> {
    const url = this.usersUrl + '/email=' + email;
    return this.http.get<User>(url)
      .pipe(tap(_ => this.log('Utente estratto email: ' + email)), catchError(this.handleError<User>('getUser email=' + email)));
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions)
      .pipe(tap(_ => this.log('Aggiorna Utente id: ' + user.id)), catchError(this.handleError<any>('updateUser')));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
      .pipe(tap((newUser: User) => this.log('Utente aggiunto con id: ' + newUser.id)), catchError(this.handleError<User>('addUser')));
  }

  deleteUser(id: number): Observable<User> {
    const url = this.usersUrl + '/' + id;

    return this.http.delete<User>(url, this.httpOptions)
      .pipe(tap(_ => this.log('Eliminato utente id: ' + id)), catchError(this.handleError<User>('deleteUser')));
  }
}
