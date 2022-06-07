import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ButtonConfig } from "./config/button-config";

@Component({
  selector: 'app-configurable-button',
  templateUrl: './configurable-button.component.html',
  styleUrls: ['./configurable-button.component.css']
})

export class ConfigurableButtonComponent implements OnInit {

  constructor() { }

  @Input() config!: ButtonConfig;

  @Output() generalEvent = new EventEmitter();

  ngOnInit(): void {
  }

  startEvent() {
    this.generalEvent.emit()
  }
}
