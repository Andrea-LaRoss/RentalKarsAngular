import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Actions, TableConfig } from "../../templates/table-template/config/table-config";
import { ActionsEnum } from "../../templates/table-template/config/actions-enum";
import { TableHeaders } from "../../templates/table-template/config/table-headers";
import { TablePagination } from "../../templates/table-template/config/table-pagination";
import { OrderTable } from "../../templates/table-template/config/order-table";
import { SearchParams } from "../../templates/table-template/config/search-params";

import { User } from "../../../models/user";
import { UsersService } from "../../../services/users.service";


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

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
    column: ["Email", "Nome", "Cognome"]
  };

  utenti: TableConfig = {
    headers: this.headersUtenti,
    order: this.orderUtenti,
    search: this.userColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };

  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  onAction(object: any) {
    switch (object.action) {
      case "Aggiungi":
        this.router.navigate(['/user_form']);
        break;

      case "Modifica":
        this.router.navigate(['/user_form', object.row.id]);
        break;

      case "Elimina":
        this.users = this.users.filter(u => u !== object.row);
        this.usersService.deleteUser(object.row.id).subscribe();
    }
  }
}
