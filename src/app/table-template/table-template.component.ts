import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {

  @Input() tableConfig: any; // cambiare con l'oggetto tableConfiguration(da creare)

  @Input() data?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
