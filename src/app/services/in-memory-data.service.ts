import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

import { Car } from "../mock-data/car";
import { User } from "../mock-data/user";
import { Reservations } from "../mock-data/reservations";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    let cars: Car[] = [
      {brand: "Fiat", model: "Panda", type: "Utilitaria", numPlate: "AA000AA", regDate: "01-02-1990"},
      {brand: "Renault", model: "Clio", type: "Hatchback", numPlate: "AA001AA", regDate: "01-02-1990"},
      {brand: "Ford", model: "Fiesta", type: "Compatta", numPlate: "AA002AA", regDate: "01-02-1990"},
      {brand: "Alfa Romeo", model: "Mito", type: "Sportiva", numPlate: "AA003AA", regDate: "01-02-1990"},
      {brand: "Audi", model: "A1", type: "Ho finito i nomi", numPlate: "AA004AA", regDate: "01-02-1990"},
      {brand: "Bmw", model: "118d", type: "Coupé", numPlate: "AA005AA", regDate: "01-02-1990"}
    ];

    let users: User[] = [
      {email: "test@test.com", firstName: "Andrea", lastName: "La Rosa", password: "", birthday:"01-02-1997"},
      {email: "aldogiovanni@outlook.it", firstName: "John", lastName: "Pieri", password: "", birthday:"01-02-1997"},
      {email: "egiacomo@hotmail.com", firstName: "Al", lastName: "Bauli", password: "", birthday:"01-02-1997"},
      {email: "theripper@gmail.com", firstName: "Jack", lastName: "Raiden", password: "", birthday:"01-02-1997"},
      {email: "user@mock.com", firstName: "Mock", lastName: "User", password: "", birthday:"01-02-1997"},
      {email: "bridges@unites.com", firstName: "Sam", lastName: "Porter", password: "", birthday:"01-02-1997"},
    ];

    let reservations: Reservations[] = [
      {startDate: "01-01-2022", endDate:"02-01-2022", car: cars[0].brand + ' ' + cars[0].model, user: users[0].email},
      {startDate: "03-01-2022", endDate:"04-01-2022", car: cars[1].brand + ' ' + cars[1].model, user: users[1].email},
      {startDate: "05-01-2022", endDate:"06-01-2022", car: cars[2].brand + ' ' + cars[2].model, user: users[2].email},
      {startDate: "07-01-2022", endDate:"08-01-2022", car: cars[3].brand + ' ' + cars[3].model, user: users[3].email},
      {startDate: "09-01-2022", endDate:"10-01-2022", car: cars[4].brand + ' ' + cars[4].model, user: users[4].email},
      {startDate: "11-01-2022", endDate:"12-01-2022", car: cars[5].brand + ' ' + cars[5].model, user: users[5].email},
    ];

    return {cars, users, reservations};
  }
}
