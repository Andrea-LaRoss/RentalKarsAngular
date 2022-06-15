import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthJWTService } from "../../../services/authJWT.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  email : string = "";
  password: string = "";
  autenticato: boolean = false;

  constructor(private router: Router,private authJWT: AuthJWTService) { }

  ngOnInit(): void {}

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
