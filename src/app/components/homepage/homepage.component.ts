import { Component, OnInit } from '@angular/core';
import {AuthJWTService} from "../../services/authJWT.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public authService: AuthJWTService) { }

  ngOnInit(): void {
  }

}
