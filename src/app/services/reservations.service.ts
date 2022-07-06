import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";

import { Reservations } from "../models/reservations";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationsUrl = 'http://localhost:8080/api/reservations';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log("RentService: ", message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getReservations(): Observable<Reservations[]> {
    return this.http.get<Reservations[]>(this.reservationsUrl)
      .pipe(tap(_ => this.log('Prenotazioni Estratte')), catchError(this.handleError<Reservations[]>('getReservations', [])));
  }

  getReservation(id: number): Observable<Reservations> {
    const url = this.reservationsUrl + '/load/' + id;
    return this.http.get<Reservations>(url)
      .pipe(tap(_ => this.log('Prenotazione estratta id: '+ id)), catchError(this.handleError<Reservations>('getReservation id='+ id)));
  }

  updateReservation(reservation: Reservations): Observable<any> {
    return this.http.put(this.reservationsUrl + "/add", reservation, this.httpOptions)
      .pipe(tap(_ => this.log('Aggiorna Prenotazione id: ' + reservation.id)), catchError(this.handleError<any>('updateReservation')));
  }

  addReservation(reservation: Reservations): Observable<Reservations> {
    return this.http.post<Reservations>(this.reservationsUrl + "/add", reservation, this.httpOptions)
      .pipe(tap((newReservation: Reservations) => this.log('Prenotazione aggiunta con id: '+ newReservation.id)), catchError(this.handleError<Reservations>('addReservation')));
  }

  deleteReservation(id: number): Observable<Reservations> {
    const url = this.reservationsUrl + '/remove/' + id;

    return this.http.delete<Reservations>(url, this.httpOptions)
      .pipe(tap(_ => this.log('Eliminata prenotazione id: '+ id)), catchError(this.handleError<Reservations>('deleteReservation')));
  }
}
