import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../services/users.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AuthJWTService} from "../../../services/authJWT.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  model: any = {};

  user: any = {};

  email : string = "";
  password: string = "";
  autenticato: boolean = false;

  constructor(private router: Router, private userService: UsersService, private authService: AuthService ,private authJWT: AuthJWTService) { }

  ngOnInit(): void {
  }

  validateUser(login: any) {
    if(this.authJWT.autenticaService(login.email, login.password)) {
      console.log(this.authJWT.autenticaService(login.email, login.password));
      this.router.navigate(['/']);
    }
  }

  gestAuth = (): void => {
    console.log(this.email);
    this.authJWT.autenticaService(this.email, this.password).subscribe({
      next: (response) => {
        console.log(response);

        this.autenticato = true;
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
        this.autenticato = false;
      }
    });
  }
}
