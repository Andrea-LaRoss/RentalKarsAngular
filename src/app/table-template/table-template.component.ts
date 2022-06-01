import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { TableConfig } from "../table-config";

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {

  @Input() tableConfig!: TableConfig;

  @Input() data!: any[];

  orderType: string = "ascending";

  constructor() { }

  ngOnInit(): void {
    this.changeOrder(this.data, "", "");
  }

  changeOrder(list: any[], key: string, orderType: string): void {
    if(orderType == "ascending"){
      this.orderType = "descending"
      list.sort(this.compareValues(key, "desc"));
    } else {
      this.orderType = "ascending";
      list.sort(this.compareValues(key, "asc"));
    }
  }

  compareValues(key: string, order: string) {
    return function innerSort(a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

}
