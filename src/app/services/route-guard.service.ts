import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(!this.authService.isLogged()){
      this.router.navigate(['/login_form']);
      return false;
    } else {
      return true;
    }

  }

  constructor(private authService: AuthService, private router: Router) { }
}
