import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConfig } from "../config/table-config";
import {ButtonConfig} from "../config/button-config";

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})

export class TableTemplateComponent implements OnInit {

  @Input() tableConfig!: TableConfig;

  @Input() data!: any[];

  @Output() outputEvento = new EventEmitter();

  backupData !: any[];

  orderType: string = "asc";

  itemsPerPage!: number;

  page!: number;


  constructor() { }

  EDIT: ButtonConfig = {
    css: "btn btn-primary",
    text: "Modifica",
    type: "button"
  };

  NEW_ROW: ButtonConfig = {
    css: "btn btn-success",
    text: "Aggiungi",
    type: "button"
  };

  DELETE: ButtonConfig = {
    css: "btn btn-danger",
    text: "Elimina",
    type: "button"
  }


  ngOnInit(): void {
    this.changeOrder(this.data, this.tableConfig.order.defaultColumn, this.tableConfig.order.orderType);
    this.backupData = this.data;
    this.data = this.backupData.slice(0,this.tableConfig.pagination.itemPerPage);
    this.itemsPerPage = this.tableConfig.pagination.itemPerPage;
    this.page = 0;
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


  search(input: any, columns: any ): void {
    const value = input.target.value.toLowerCase();
    const filteredList: any[] = [];
    for (let i = 0; i < this.backupData.length; i++) {
      if (this.backupData[i][columns].toLowerCase().includes(value)) {
        console.log(this.backupData[i][columns]);
        filteredList.push(this.backupData[i]);
      }
    }
    if (filteredList.length > 0 || value.toString().length > 0) {
      this.data = filteredList;
    }
  }


  changePagination(itemsPerPage: string): void {
    this.itemsPerPage = Number(itemsPerPage);
    this.page = 0;
    this.data = this.backupData.slice(0,this.itemsPerPage);
  }


  nextPage(): void {
    this.page++;
    let startPage: number = this.itemsPerPage * this.page;
    let endPage: number = startPage + this.itemsPerPage;
    if(this.checkEnd(endPage)){
      this.data = this.backupData.slice(startPage);
    } else {
      this.data = this.backupData.slice(startPage, endPage);
    }
  }


  checkEnd(endPage: number): boolean {
    return endPage >= this.backupData.length;
  }


  prevPage(): void {
    this.page--;
    let startPage: number = this.itemsPerPage * this.page;
    let endPage: number = startPage + this.itemsPerPage;
    if(startPage <= 0){
      this.data = this.backupData.slice(0, this.itemsPerPage);
    } else {
      this.data = this.backupData.slice(startPage, endPage);
    }
  }

  provaEvento(object: any, action: string) {
    this.outputEvento.emit([object, action]);
  }

}
