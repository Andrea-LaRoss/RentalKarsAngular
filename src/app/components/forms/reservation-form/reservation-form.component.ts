import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../../services/reservations.service";
import {Car} from "../../../interfaces/car";
import {Actions, TableConfig} from "../../templates/table-template/config/table-config";
import {ActionsEnum} from "../../templates/table-template/config/actions-enum";
import {TableHeaders} from "../../templates/table-template/config/table-headers";
import {OrderTable} from "../../templates/table-template/config/order-table";
import {SearchParams} from "../../templates/table-template/config/search-params";
import {TablePagination} from "../../templates/table-template/config/table-pagination";
import {CarsService} from "../../../services/cars.service";
import {Reservations} from "../../../interfaces/reservations";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationId: any;
  model: any = {};
  reservation: any;


  constructor(private router: Router, private route: ActivatedRoute, private reservationsService: ReservationsService, private carsService: CarsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.reservationId = routeParams.get('reservationId');
    if(this.reservationId != null) {
      this.reservationsService.getReservation(+this.reservationId).subscribe((result: any) => {
        this.model = result;
      });
    }
  }

  cars: Car[] = [];

  actions: Actions[] = [
    {
      action: ActionsEnum.NEW_ROW,
      inRow: false
    },

    {
      action: ActionsEnum.EDIT,
      inRow: true
    },

    {
      action: ActionsEnum.DELETE,
      inRow: true
    }];

  headersAuto: TableHeaders[] = [
    {key: "brand", label: "Marca"},
    {key: "model", label: "Modello"},
    {key: "type", label: "Tipo"},
    {key: "numPlate", label: "Targa"}
  ];

  orderAuto: OrderTable = {
    defaultColumn: "numPlate",
    orderType: "asc"
  }

  carColumns: SearchParams = {
    column: ["brand", "model", "type", "numPlate"]
  };

  paginationDefault: TablePagination = {
    itemPerPage: 3,
    itemPerPageOptions: [1, 2, 3, 4, 5, 6]
  }

  auto: TableConfig = {
    headers: this.headersAuto,
    order: this.orderAuto,
    search: this.carColumns,
    pagination: this.paginationDefault,
    actions: this.actions
  };


  showCars(reservation: any) {
    this.reservation = reservation;
    this.carsService.getCars()
      .subscribe(cars => this.cars = cars);
  }

  onAction(object:any) {
    this.reservation.car = object.row;
    console.log(this.reservation);
    if(this.reservationId == null) {
      console.log("Aggiungi");
      this.reservationsService.addReservation(this.reservation).subscribe(() => this.router.navigate(['/reservations']));;
    } else {
      console.log("Modifica");
      this.reservationsService.updateReservation(this.reservation).subscribe(() => this.router.navigate(['/reservations']));;
    }
  }
}
