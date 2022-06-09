import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../mock-data/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carsUrl = 'api/cars';

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log("CarService: ", message)
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }
}
