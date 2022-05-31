import { Component } from '@angular/core';
import {ButtonConfig} from "./button-config";
import {TableHeaders} from "./table-headers";
import {TableConfig} from "./table-config";
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalKars';

  bottone: ButtonConfig = {
    css: "btn btn-primary",
    text:"Modifica",
    type:"button"
  };

  bottone2: ButtonConfig = {
    css: "btn btn-success",
    text:"Aggiungi",
    type:"button"
  };

  testModifica(text: string) {
    console.log("Premuto il tasto: ", text);
  }

  testAggiungi(text: string) {
    console.log("Premuto il tasto: ", text);
  }

  headersTabella1: TableHeaders[] = [
    {key: "1", label: "Nome"},
    {key: "2", label: "Cognome"}
  ];

  headersTabella2: TableHeaders[] = [
    {key: "3", label: "Marca"},
    {key: "4", label: "Modello"}
  ];


  tabella1: TableConfig = {
    headers: this.headersTabella1
  };

  tabella2: TableConfig = {
    headers: this.headersTabella2
  };

  datiTest1: User[] = [
    {id: 1,
    email: "test@test.com",
    password: "",
    firstName: "Andrea",
    lastName: "La Rosa"},
    {id: 1,
      email: "test@test.com",
      password: "",
      firstName: "Andrea",
      lastName: "La Rosa"},
    {id: 1,
      email: "test@test.com",
      password: "",
      firstName: "Andrea",
      lastName: "La Rosa"},
  ];
}
