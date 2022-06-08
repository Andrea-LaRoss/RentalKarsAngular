import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Car } from "../mock-data/car";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  createDb() {
    const cars = [
      {brand: "Fiat", model: "Panda", type: "Utilitaria", numPlate: "AA000AA", regDate: "01-02-1990"},
      {brand: "Renault", model: "Clio", type: "Hatchback", numPlate: "AA001AA", regDate: "01-02-1990"},
      {brand: "Ford", model: "Fiesta", type: "Compatta", numPlate: "AA002AA", regDate: "01-02-1990"},
      {brand: "Alfa Romeo", model: "Mito", type: "Sportiva", numPlate: "AA003AA", regDate: "01-02-1990"},
      {brand: "Audi", model: "A1", type: "Ho finito i nomi", numPlate: "AA004AA", regDate: "01-02-1990"},
      {brand: "Bmw", model: "118d", type: "Coupé", numPlate: "AA005AA", regDate: "01-02-1990"}
    ];

    return {cars};
  }

  constructor() { }
}
