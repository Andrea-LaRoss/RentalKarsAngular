import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfigurableButtonComponent } from './components/button-template/configurable-button.component';
import { HeaderComponent } from './components/header/header.component';
import { TableTemplateComponent } from './components/table-template/table-template.component';
import { RouterModule } from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RentListComponent } from './rent-list/rent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurableButtonComponent,
    HeaderComponent,
    TableTemplateComponent,
    HomepageComponent,
    CarsListComponent,
    UsersListComponent,
    RentListComponent
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'cars', component: CarsListComponent},
      {path: 'users', component: UsersListComponent},
      {path: 'reservations', component: RentListComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
