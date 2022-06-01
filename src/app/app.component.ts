import { Component } from '@angular/core';
import {ButtonConfig} from "./button-config";
import {TableHeaders} from "./table-headers";
import {TableConfig} from "./table-config";
import { USERS } from "./mock-users";
import { CARS } from "./mock-cars";
import {OrderTable} from "./order-table";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RentalKars';
  users = USERS;
  cars = CARS;

  modifica: ButtonConfig = {
    css: "btn btn-primary",
    text: "Modifica",
    type: "button"
  };

  aggiungi: ButtonConfig = {
    css: "btn btn-success",
    text: "Aggiungi",
    type: "button"
  };

  testModifica(text: string) {
    console.log("Premuto il tasto: ", text);
  }

  testAggiungi(text: string) {
    console.log("Premuto il tasto: ", text);
  }

  headersUtenti: TableHeaders[] = [
    {key: "email", label: "Email"},
    {key: "firstName", label: "Nome"},
    {key: "lastName", label: "Cognome"}
  ];

  headersAuto: TableHeaders[] = [
    {key: "brand", label: "Marca"},
    {key: "model", label: "Modello"},
    {key: "type", label: "Tipo"},
    {key: "numPlate", label: "Targa"}
  ];

  orderUtenti: OrderTable = {
    defaultColumn: "firstName",
    orderType: "asc"
  }

  orderAuto: OrderTable = {
    defaultColumn: "numPlate",
    orderType: "asc"
  }

  utenti: TableConfig = {
    headers: this.headersUtenti,
    order: this.orderUtenti
  };

  auto: TableConfig = {
    headers: this.headersAuto,
    order: this.orderAuto
  };

}
