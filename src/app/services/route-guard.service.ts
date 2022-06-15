import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthJWTService} from "./authJWT.service";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  token: string = '';
  ruoli: string[] = [];
  items: any;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.token = this.authService.getAuthToken();

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.token);

    this.items = decodedToken['role'];

    if(!Array.isArray(this.items)) {
      this.ruoli.push(this.items);
    } else {
      this.ruoli = this.items;
    }

    if(!this.authService.isLogged()){

      this.router.navigate(['/login_form']);
      return false;

    } else {

      let roles: string[] = [];
      roles = route.data['roles'];

      if(roles === null || roles.length === 0) {
        return true;
      } else if (this.ruoli.some(r => roles.includes(r))) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

    }

  }

  constructor(private authService: AuthJWTService, private router: Router) { }
}
