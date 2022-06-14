import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model: any = {};

  user: any = {};

  constructor(private router: Router, private userService: UsersService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  validateUser(login: any) {
    if(this.authService.login(login.email, login.password)) {
      console.log(this.authService.login(login.email, login.password));
      this.router.navigate(['/']);
    }
  }

}
