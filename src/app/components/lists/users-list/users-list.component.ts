import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { USERS } from "../../../mock-data/mock-users";
import { Actions, TableConfig } from "../../templates/table-template/config/table-config";
import { ActionsEnum } from "../../templates/table-template/config/actions-enum";
import { TableHeaders } from "../../templates/table-template/config/table-headers";
import { TablePagination } from "../../templates/table-template/config/table-pagination";
import { OrderTable } from "../../templates/table-template/config/order-table";
import { SearchParams } from "../../templates/table-template/config/search-params";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = USERS;

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

  headersUtenti: TableHeaders[] = [
    {key: "email", label: "Email"},
    {key: "firstName", label: "Nome"},
    {key: "lastName", label: "Cognome"}
  ];

  paginationDefault: TablePagination = {
    itemPerPage: 3,
    itemPerPageOptions: [1, 2, 3, 4, 5, 6]
  }

  orderUtenti: OrderTable = {
    defaultColumn: "firstName",
    orderType: "asc"
  }

  userColumns: SearchParams = {
    column: ["email", "firstName", "lastName"]
  };

  utenti: TableConfig = {
    headers: this.headersUtenti,
    order: this.orderUtenti,
    search: this.userColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAction(object: any) {
    switch(object.action) {
      case "Aggiungi":
        this.router.navigate(['/user_form']);
        break;

      case "Modifica":
        this.router.navigate(['/user_form']);
        break;

      case "Elimina":
        console.log("Eliminazione: ", object.row);
        this.users = this.users.filter(u => u !== object.row);
    }
  }
}
