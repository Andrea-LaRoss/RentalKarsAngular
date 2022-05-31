import { Component } from '@angular/core';
import {ButtonConfig} from "./button-config";
import {TableHeaders} from "./table-headers";
import {TableConfig} from "./table-config";
import { USERS } from "./mock-users";
import { CARS } from "./mock-cars";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RentalKars';
  users = USERS;
  cars = CARS;

  bottone: ButtonConfig = {
    css: "btn btn-primary",
    text: "Modifica",
    type: "button"
  };

  bottone2: ButtonConfig = {
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

  headersTabella1: TableHeaders[] = [
    {key: "email", label: "Email"},
    {key: "firstName", label: "Nome"},
    {key: "lastName", label: "Cognome"}
  ];

  headersTabella2: TableHeaders[] = [
    {key: "brand", label: "Marca"},
    {key: "model", label: "Modello"},
    {key: "type", label: "Tipo"},
    {key: "numPlate", label: "Targa"}
  ];

  tabella1: TableConfig = {
    headers: this.headersTabella1
  };

  tabella2: TableConfig = {
    headers: this.headersTabella2
  };

}
