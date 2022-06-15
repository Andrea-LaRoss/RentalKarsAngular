import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthJWTService} from "./authJWT.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class JWTRolesService {

  constructor(private authService: AuthJWTService, private router: Router) { }

  getRoles = (): string[] => {

    let ruoli: string[] = [];
    let token: string = '';
    let items: any;

    token = this.authService.getAuthToken();

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    items = decodedToken['role'];

    if(!Array.isArray(items)) {
      ruoli.push(items);
    } else {
      ruoli = items;
    }

    return ruoli;
  }
}
