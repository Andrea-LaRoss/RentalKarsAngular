import { Component } from '@angular/core';
import {ButtonConfig} from "./button-config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentalKars';

  bottone: ButtonConfig = {
    css: "btn btn-primary",
    text:"Testing 1",
    type:"button"
  };

  bottone2: ButtonConfig = {
    css: "btn btn-success",
    text:"Testing 2",
    type:"button"
  };

  test1(): void {
    console.log("Funzione 1");
  }

  test2(): void {
    console.log("Funzione 2");
  }
}
