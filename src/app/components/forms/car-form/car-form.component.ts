import { Component, OnInit } from '@angular/core';

import { CARS } from "../../../mock-data/mock-cars";
import { Car } from "../../../mock-data/car";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  car!: Car;

  constructor() { }

  ngOnInit(): void {
  }

  addOrUpdate (car: any) {
    console.log(car);
    if(!CARS.find(c => c === car)) {
      CARS.push(car);
    }
  }

}
