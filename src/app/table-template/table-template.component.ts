import {Component, Input, OnInit} from '@angular/core';
import {TableConfig} from "../table-config";

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {

  @Input() tableConfig!: TableConfig;

  @Input() data?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
