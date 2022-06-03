import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from "../table-config";
import {filter} from "rxjs";

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {


  @Input() tableConfig!: TableConfig;

  @Input() data!: any[];

  backupData !: any[];

  orderType: string = "asc";

  constructor() { }

  ngOnInit(): void {
    this.changeOrder(this.data, this.tableConfig.order.defaultColumn, this.tableConfig.order.orderType);
    this.backupData = this.data;
  }

  changeOrder(list: any[], key: string, orderType: string): void {
    if(orderType == "asc"){
      this.orderType = "desc"
      list.sort(this.compareValues(key, orderType));
    } else {
      this.orderType = "asc";
      list.sort(this.compareValues(key, orderType));
    }
  }

  compareValues(key: string, order: string) {
    return function innerSort(a: any, b: any) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
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

  search(input: any, columns: any []): any[]{
    const value = input.target.value.toLowerCase();
    const filteredList: any[] = [];
    console.log(value.toString().length);
    for(let i = 0; i < this.backupData.length; i++) {
        for(let j = 0; j < columns.length; j++) {
          if(this.backupData[i][columns[j]].includes(value)){
            if(filteredList.includes(this.backupData[i])){
              filteredList.push(this.backupData[i]);
              console.log("filteredList: ", filteredList);
            }
          }
        }
      }
    if(filteredList.length > 0 || value.toString().length > 0) {
      return filteredList;
    } else {
      return this.backupData;
    }
  }

}
