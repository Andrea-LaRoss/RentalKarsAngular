import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output() generalEvent = new EventEmitter();

  ngOnInit(): void {
  }

  printLog() {
    this.generalEvent.emit(this.config.text)
  }
}
