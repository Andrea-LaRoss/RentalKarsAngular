import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { JwtModule } from "@auth0/angular-jwt";

import { ConfigurableButtonComponent } from './components/templates/button-template/configurable-button.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { TableTemplateComponent } from './components/templates/table-template/table-template.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarsListComponent } from './components/lists/cars-list/cars-list.component';
import { UsersListComponent } from './components/lists/users-list/users-list.component';
import { RentListComponent } from './components/lists/rent-list/rent-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { ReservationFormComponent } from './components/forms/reservation-form/reservation-form.component';
import { CarFormComponent } from './components/forms/car-form/car-form.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RouteGuardService } from "./services/route-guard.service";
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { Ruoli } from "./models/ruoli";


@NgModule({
  declarations: [
    AppComponent,
    ConfigurableButtonComponent,
    HeaderComponent,
    TableTemplateComponent,
    HomepageComponent,
    CarsListComponent,
    UsersListComponent,
    RentListComponent,
    DashboardComponent,
    UserFormComponent,
    ReservationFormComponent,
    CarFormComponent,
    LoginFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {tokenGetter:  () => sessionStorage.getItem('AuthToken')}}),
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'cars', component: CarsListComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente,Ruoli.amministratore]}},
      {path: 'users', component: UsersListComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.amministratore]}},
      {path: 'reservations', component: RentListComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente,Ruoli.amministratore]}},
      {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente,Ruoli.amministratore]}},
      {path: 'user_form', component: UserFormComponent, data: {roles: [Ruoli.amministratore]}},
      {path: 'reservation_form', component: ReservationFormComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente]}},
      {path: 'car_form', component: CarFormComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.amministratore]}},
      {path: 'car_form/:carId', component: CarFormComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.amministratore]}},
      {path: 'user_form/:userId', component: UserFormComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente,Ruoli.amministratore]}},
      {path: 'reservation_form/:reservationId', component: ReservationFormComponent, canActivate: [RouteGuardService], data: {roles: [Ruoli.utente]}},
      {path: 'login_form', component: LoginFormComponent}],
    )
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
