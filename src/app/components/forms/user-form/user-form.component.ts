import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userId: any;
  model: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.userId = routeParams.get('userId');
    if(this.userId != null) {
      this.usersService.getUser(+this.userId).subscribe((result: any) => {
        this.model = result;
      });
    }
  }

  addOrUpdate (user: any) {
    console.log(user);
    if(this.userId == null) {
      this.usersService.addUser(user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.usersService.updateUser(user).subscribe(() => this.router.navigate(['/users']));
    }
  }

}
