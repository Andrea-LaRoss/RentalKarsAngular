import { Component, OnInit } from '@angular/core';
import {AuthJWTService} from "../../services/authJWT.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthJWTService) { }

  ngOnInit(): void {
  }

}
