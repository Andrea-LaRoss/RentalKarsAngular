import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthJWTService} from "./authJWT.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {JWTRolesService} from "./jwtroles.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  ruoli: string[] = [];

  constructor(private authService: AuthJWTService, private router: Router, private roles: JWTRolesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.ruoli = this.roles.getRoles();

    if(!this.authService.isLogged()){

      this.router.navigate(['/login_form']);
      return false;

    } else {

      let roles: string[] = [];
      roles = [];//route.data['roles'];

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

}
