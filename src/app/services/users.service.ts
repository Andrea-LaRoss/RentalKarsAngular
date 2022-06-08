import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { User } from "../mock-data/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  createDb() {
    const users = [
      {email: "test@test.com", firstName: "Andrea", lastName: "La Rosa", password: "", birthday:"01-02-1997"},
      {email: "aldogiovanni@outlook.it", firstName: "John", lastName: "Pieri", password: "", birthday:"01-02-1997"},
      {email: "egiacomo@hotmail.com", firstName: "Al", lastName: "Bauli", password: "", birthday:"01-02-1997"},
      {email: "theripper@gmail.com", firstName: "Jack", lastName: "Raiden", password: "", birthday:"01-02-1997"},
      {email: "user@mock.com", firstName: "Mock", lastName: "User", password: "", birthday:"01-02-1997"},
      {email: "bridges@unites.com", firstName: "Sam", lastName: "Porter", password: "", birthday:"01-02-1997"},
    ];

    return {users};
  }

  constructor() { }
}
