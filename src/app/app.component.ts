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
    text:"Modifica",
    type:"button"
  };

  bottone2: ButtonConfig = {
    css: "btn btn-success",
    text:"Aggiungi",
    type:"button"
  };

  testModifica(text: string) {
    console.log("Premuto il tasto: ", text);
  }

  testAggiungi(text: string) {
    console.log("Premuto il tasto: ", text);
  }
}
