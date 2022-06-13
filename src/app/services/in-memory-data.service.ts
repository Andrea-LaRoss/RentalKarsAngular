import { Injectable } from '@angular/core';

import { Car } from "../interfaces/car";
import { User } from "../interfaces/user";
import { Reservations } from "../interfaces/reservations";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    let cars: Car[] = [
      {id: 1, brand: "Fiat", model: "Panda", type: "Utilitaria", numPlate: "AA000AA", regDate: "1990-02-01"},
      {id: 2, brand: "Renault", model: "Clio", type: "Hatchback", numPlate: "AA001AA", regDate: "1990-02-01"},
      {id: 3, brand: "Ford", model: "Fiesta", type: "Compatta", numPlate: "AA002AA", regDate: "1990-02-01"},
      {id: 4, brand: "Alfa Romeo", model: "Mito", type: "Sportiva", numPlate: "AA003AA", regDate: "1990-02-01"},
      {id: 5, brand: "Audi", model: "A1", type: "Ho finito i nomi", numPlate: "AA004AA", regDate: "1990-02-01"},
      {id: 6, brand: "Bmw", model: "118d", type: "Coupé", numPlate: "AA005AA", regDate: "1990-02-01"}
    ];

    let users: User[] = [
      {id: 1, email: "test@test.com", firstName: "Andrea", lastName: "La Rosa", password: "", birthday:"1997-02-01"},
      {id: 2, email: "aldogiovanni@outlook.it", firstName: "John", lastName: "Pieri", password: "", birthday:"1997-02-01"},
      {id: 3, email: "egiacomo@hotmail.com", firstName: "Al", lastName: "Bauli", password: "", birthday:"1997-02-01"},
      {id: 4, email: "theripper@gmail.com", firstName: "Jack", lastName: "Raiden", password: "", birthday:"1997-02-01"},
      {id: 5, email: "user@mock.com", firstName: "Mock", lastName: "User", password: "", birthday:"1997-02-01"},
      {id: 6, email: "bridges@unites.com", firstName: "Sam", lastName: "Porter", password: "", birthday:"1997-02-01"},
    ];

    let reservations: Reservations[] = [
      {id: 1, startDate: "2022-01-01", endDate:"2022-01-02", car: cars[0].brand + ' ' + cars[0].model, user: users[0].email},
      {id: 2, startDate: "2022-01-03", endDate:"2022-01-04", car: cars[1].brand + ' ' + cars[1].model, user: users[1].email},
      {id: 3, startDate: "2022-01-05", endDate:"2022-01-06", car: cars[2].brand + ' ' + cars[2].model, user: users[2].email},
      {id: 4, startDate: "2022-01-07", endDate:"2022-01-08", car: cars[3].brand + ' ' + cars[3].model, user: users[3].email},
      {id: 5, startDate: "2022-01-09", endDate:"2022-01-10", car: cars[4].brand + ' ' + cars[4].model, user: users[4].email},
      {id: 6, startDate: "2022-01-11", endDate:"2022-01-12", car: cars[5].brand + ' ' + cars[5].model, user: users[5].email},
    ];

    return {cars, users, reservations};
  }

  genCarId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 0;
  }

  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 0;
  }

  genId(reservations: Reservations[]): number {
    return reservations.length > 0 ? Math.max(...reservations.map(reservation => reservation.id)) + 1 : 0;
  }
}
