import { Component, OnInit } from '@angular/core';

import { USERS } from "../../../mock-data/mock-users";
import { User } from "../../../mock-data/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addOrUpdate (user: any) {
    if(!USERS.find(u => u === user)) {
      USERS.push(user);
    }

    this.router.navigate(['/users']);
  }

}
