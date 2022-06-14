import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import {CarsService} from "../../../services/cars.service";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  carId: any;
  model: any = {};


  constructor(private router: Router, private route: ActivatedRoute, private carsService: CarsService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.carId = routeParams.get('carId');
    if(this.carId != null) {
      this.carsService.getCar(+this.carId).subscribe((result: any) => {
        this.model = result;
      });
    }
  }

  addOrUpdate (car: any) {
    if(this.carId == null) {
      this.carsService.addCar(car).subscribe(() => this.router.navigate(['/cars']))
    } else {
      this.carsService.updateCar(car).subscribe(() => this.router.navigate(['/cars']));
    }
  }

}
