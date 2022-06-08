import { Component, OnInit } from '@angular/core';

import { CARS } from "../../../mock-data/mock-cars";
import { Car } from "../../../mock-data/car";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  car: Car | undefined;

  model: any;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const carPlate = routeParams.get('car');
    this.car = CARS.find(c => c.numPlate === carPlate);
    this.model = this.car;
  }

  addOrUpdate (car: any) {
    console.log(car);
    if(!CARS.find(c => c === car)) {
      CARS.push(car);
    }

    this.router.navigate(['/users']);
  }

}
