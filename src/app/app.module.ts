import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppComponent } from './app.component';
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
import { InMemoryDataService } from "./services/in-memory-data.service";


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
    CarFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'cars', component: CarsListComponent},
      {path: 'users', component: UsersListComponent},
      {path: 'reservations', component: RentListComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user_form', component: UserFormComponent},
      {path: 'reservation_form', component: ReservationFormComponent},
      {path: 'car_form', component: CarFormComponent},
      {path: 'car_form/:carId', component: CarFormComponent},
      {path: 'user_form/:userId', component: UserFormComponent}],)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
