import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, Observable, of, tap } from "rxjs";
import { Car } from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl = 'http://localhost:8080/api/cars';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log("CarService: ", message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(tap(_ => this.log('Auto Estratte')), catchError(this.handleError<Car[]>('getCars', [])));
  }

  getCar(id: number): Observable<Car> {
    const url = this.carsUrl + '/load/' + id;
    return this.http.get<Car>(url)
      .pipe(tap(_ => this.log('Auto estratta id: '+ id)), catchError(this.handleError<Car>('getCar id='+ id)));
  }

  updateCar(car: Car): Observable<any> {
    return this.http.put(this.carsUrl + '/add', car, this.httpOptions)
      .pipe(tap(_ => this.log('Aggiorna Auto id: ' + car.id)), catchError(this.handleError<any>('updateCar')));
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl + '/add', car, this.httpOptions)
      .pipe(tap((newCar: Car) => this.log('Auto aggiunta con id: '+ newCar.id)), catchError(this.handleError<Car>('addCar')));
  }

  deleteCar(id: number): Observable<Car> {
    const url = this.carsUrl + '/remove/' + id;

    return this.http.delete<Car>(url, this.httpOptions)
      .pipe(tap(_ => this.log('Eliminata auto id: '+ id)), catchError(this.handleError<Car>('deleteCar')));
  }

}
