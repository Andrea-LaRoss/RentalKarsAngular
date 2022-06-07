import { Component, OnInit } from '@angular/core';
import { Actions, TableConfig } from "../../templates/table-template/config/table-config";
import { ActionsEnum } from "../../templates/table-template/config/actions-enum";
import { TableHeaders } from "../../templates/table-template/config/table-headers";
import { OrderTable } from "../../templates/table-template/config/order-table";
import { SearchParams } from "../../templates/table-template/config/search-params";
import { TablePagination } from "../../templates/table-template/config/table-pagination";
import { RESERVATIONS } from "../../../mock-data/mock-reservations";

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {

  reservations = RESERVATIONS;

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

  headersPrenotazioni: TableHeaders[] = [
    {key: "startDate", label: "Inizio"},
    {key: "endDate", label: "Fine"},
    {key: "car", label: "Auto"},
    {key: "user", label: "Utente"},
  ];

  orderPrenotazioni: OrderTable = {
    defaultColumn: "startDate",
    orderType: "asc"
  };

  rentColumns: SearchParams = {
    column: ["startDate", "endDate", "car", "user"]
  };

  paginationDefault: TablePagination = {
    itemPerPage: 3,
    itemPerPageOptions: [1, 2, 3, 4, 5, 6]
  }

  prenotazioni: TableConfig = {
    headers: this.headersPrenotazioni,
    order: this.orderPrenotazioni,
    search: this.rentColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  }

  constructor() { }

  ngOnInit(): void {
  }

  testTasto(object: any) {
    console.log("Oggetto Passato: ", object.row);
    console.log("Bottone Premuto", object.action);
  }

}
