import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { TableHeaders } from "../../templates/table-template/config/table-headers";
import { OrderTable } from "../../templates/table-template/config/order-table";
import { SearchParams } from "../../templates/table-template/config/search-params";
import { Actions, TableConfig } from "../../templates/table-template/config/table-config";
import { TablePagination } from "../../templates/table-template/config/table-pagination";
import { ActionsEnum } from "../../templates/table-template/config/actions-enum";
import { Car } from "../../../interfaces/car";
import { CarsService } from "../../../services/cars.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];

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
    },

    {
      action: ActionsEnum.CONFIRM,
      inRow: false
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
    column: ["Marca", "Modello", "Tipo", "Targa"]
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

  constructor(private router: Router, private carsService: CarsService) {
  }

  getCars(): void {
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }

  ngOnInit(): void {
    this.getCars();
  }

  onAction(object: any) {
    switch (object.action) {
      case "Aggiungi":
        this.router.navigate(['/car_form']);
        break;

      case "Modifica":
        this.router.navigate(['/car_form', object.row.id]);
        break;

      case "Elimina":
        this.cars = this.cars.filter(c => c !== object.row);
        this.carsService.deleteCar(object.row.id).subscribe();
    }
  }

}
