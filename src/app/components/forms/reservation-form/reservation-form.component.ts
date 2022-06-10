import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import {ReservationsService} from "../../../services/reservations.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationId: any;
  model: any = {};

  constructor(private router: Router, private route: ActivatedRoute, private reservationsService: ReservationsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.reservationId = routeParams.get('reservationId');
    this.reservationsService.getReservation(+this.reservationId).subscribe((result: any) => {
      this.model = result;
    });
  }

  addOrUpdate (reservation: any) {
    if(this.reservationId == null) {
      console.log("Aggiunta");
      this.reservationsService.addReservation(reservation).subscribe(() => this.router.navigate(['/reservations']))
    } else {
      console.log("Modifica");
      this.reservationsService.updateReservation(reservation).subscribe(() => this.router.navigate(['/reservations']));
    }
  }

}
