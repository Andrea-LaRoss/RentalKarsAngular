import {Component, Input, OnInit} from '@angular/core';
import { ButtonConfig } from "../button-config";

@Component({
  selector: 'app-configurable-button',
  templateUrl: './configurable-button.component.html',
  styleUrls: ['./configurable-button.component.css']
})

export class ConfigurableButtonComponent implements OnInit {

  constructor() { }

  @Input() config: ButtonConfig = {
    css: "",
    text: "",
    type: ""
  };

  ngOnInit(): void {
  }
}
