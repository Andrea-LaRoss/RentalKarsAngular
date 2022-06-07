import { Component, OnInit } from '@angular/core';
import {USERS} from "../classes/mock-users";
import {Actions, TableConfig} from "../components/table-template/config/table-config";
import {ActionsEnum} from "../components/table-template/config/actions-enum";
import {TableHeaders} from "../components/table-template/config/table-headers";
import {TablePagination} from "../components/table-template/config/table-pagination";
import {OrderTable} from "../components/table-template/config/order-table";
import {SearchParams} from "../components/table-template/config/search-params";

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

  constructor() { }

  ngOnInit(): void {
  }

  testTasto(object: any) {
    console.log("Oggetto Passato: ", object.row);
    console.log("Bottone Premuto", object.action);
  }

}
