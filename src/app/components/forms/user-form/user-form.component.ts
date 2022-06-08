import { Component, OnInit } from '@angular/core';

import { USERS } from "../../../mock-data/mock-users";
import { User } from "../../../mock-data/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  addOrUpdate (user: any) {
    if(!USERS.find(u => u === user)) {
      USERS.push(user);
    }
  }

}
