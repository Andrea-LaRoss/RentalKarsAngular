import { Component, OnInit } from '@angular/core';
import {AuthJWTService} from "../../../services/authJWT.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthJWTService) { }

  ngOnInit(): void {
  }


  logout() {
    this.authService.logout();
  }
}
