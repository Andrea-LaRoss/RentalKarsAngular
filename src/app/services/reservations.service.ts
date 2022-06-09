import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { Reservations } from "../mock-data/reservations";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  private reservationsUrl = 'api/reservations';

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log("RentService: ", message);
  }

  getReservations(): Observable<Reservations[]> {
    this.log("Prenotazioni abbuscate");
    return this.http.get<Reservations[]>(this.reservationsUrl);
  }
}
