import {Component} from '@angular/core';
import {ButtonConfig} from "./config/button-config";
import {TableHeaders} from "./config/table-headers";
import {TableConfig} from "./config/table-config";
import {USERS} from "./classes/mock-users";
import {CARS} from "./classes/mock-cars";
import {OrderTable} from "./config/order-table";
import {SearchParams} from "./config/search-params";
import {TablePagination} from "./config/table-pagination";
import {ActionsEnum} from "./config/actions-enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RentalKars';
  users = USERS;
  cars = CARS;
  actions: ActionsEnum[] = [ActionsEnum.NEW_ROW, ActionsEnum.EDIT, ActionsEnum.DELETE];

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

  paginationDefault: TablePagination = {
    itemPerPage: 3,
    itemPerPageOptions: [ 1, 2, 3, 4, 5, 6]
  }

  userColumns: SearchParams = {
    column:["email", "firstName", "lastName"]
  };

  carColumns: SearchParams = {
    column:["brand", "model", "type", "numPlate"]
  };

  utenti: TableConfig = {
    headers: this.headersUtenti,
    order: this.orderUtenti,
    search: this.userColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };

  auto: TableConfig = {
    headers: this.headersAuto,
    order: this.orderAuto,
    search: this.carColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };

  onAction(x: any) {
    console.log(x);
  }

}
