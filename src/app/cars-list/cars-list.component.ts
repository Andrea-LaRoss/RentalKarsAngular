import { Component, OnInit } from '@angular/core';
import {CARS} from "../classes/mock-cars";
import {TableHeaders} from "../components/table-template/config/table-headers";
import {OrderTable} from "../components/table-template/config/order-table";
import {SearchParams} from "../components/table-template/config/search-params";
import {Actions, TableConfig} from "../components/table-template/config/table-config";
import {TablePagination} from "../components/table-template/config/table-pagination";
import {ActionsEnum} from "../components/table-template/config/actions-enum";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars = CARS;

  actions: Actions[] = [
    {
      action: ActionsEnum.NEW_ROW,
      inRow: false
    },

    {
      action: ActionsEnum.EDIT,
      inRow: true
    },

    {
      action: ActionsEnum.DELETE,
      inRow: true
    }];

  headersAuto: TableHeaders[] = [
    {key: "brand", label: "Marca"},
    {key: "model", label: "Modello"},
    {key: "type", label: "Tipo"},
    {key: "numPlate", label: "Targa"}
  ];

  orderAuto: OrderTable = {
    defaultColumn: "numPlate",
    orderType: "asc"
  }

  carColumns: SearchParams = {
    column: ["brand", "model", "type", "numPlate"]
  };

  paginationDefault: TablePagination = {
    itemPerPage: 3,
    itemPerPageOptions: [1, 2, 3, 4, 5, 6]
  }

  auto: TableConfig = {
    headers: this.headersAuto,
    order: this.orderAuto,
    search: this.carColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };

  constructor() { }

  ngOnInit(): void {
  }

  testTasto(object: any) {
    console.log("Oggetto Passato: ", object.row);
    console.log("Bottone Premuto", object.action);
  }

}