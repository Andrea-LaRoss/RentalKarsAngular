import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { USERS } from "../../../mock-data/mock-users";
import { User } from "../../../mock-data/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User | undefined;

  model:any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userMail = routeParams.get('user');
    this.user = USERS.find(c => c.email === userMail);
    this.model = this.user;
  }

  addOrUpdate (user: any) {
    if(!USERS.find(u => u.email === user.email)) {
      USERS.push(user);
    } else{
      USERS.find(u => u.email === user.email)
      console.log("Utente trovato");
    }

    this.router.navigate(['/users']);
  }

}
