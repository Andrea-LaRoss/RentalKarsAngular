import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableConfig } from "./config/table-config";
import { ActionsEnum } from "./config/actions-enum";
import {AuthJWTService} from "../../../services/authJWT.service";

@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})

export class TableTemplateComponent implements OnInit {

  @Input() tableConfig!: TableConfig;

  @Input() data!: any[];

  @Output() outputEvento = new EventEmitter();

  backupData!: any[];

  orderType: string = "asc";

  itemsPerPage!: number;

  page!: number;

  maxPage!: number;


  constructor(public authService: AuthJWTService) {}

  ngOnInit(): void {
    this.changeOrder(this.data, this.tableConfig.order.defaultColumn, this.tableConfig.order.orderType);
    this.itemsPerPage = this.tableConfig.pagination.itemPerPage;
    this.page = 0;
  }

  ngOnChanges(): void {
    this.backupData = this.data;
    this.data = this.backupData.slice(0,this.itemsPerPage);
    this.maxPage = this.backupData.length/this.itemsPerPage;
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


  search(input: any, column: any ): void {
    const headersObject = this.tableConfig.headers;
    const value = input.target.value.toLowerCase();
    const filteredList: any[] = [];
    const key = headersObject.find((item:any) => item.label === column);
    if(key) {
      for (let i = 0; i < this.backupData.length; i++) {
        if (this.backupData[i][key.key].toLowerCase().includes(value)) {
          filteredList.push(this.backupData[i]);
        }
      }
      if (filteredList.length > 0 || value.toString().length > 0) {
        this.data = filteredList;
      }
    }
  }


  changePagination(itemsPerPage: any): void {
    this.itemsPerPage = Number(itemsPerPage);
    this.maxPage = Math.ceil(this.backupData.length/this.itemsPerPage);
    this.page = 0;
    this.data = this.backupData.slice(0,this.itemsPerPage);
  }


  nextPage(): void {
    this.page++;
    let startPage: number = this.itemsPerPage * this.page;
    let endPage: number = startPage + this.itemsPerPage;
    if(this.page == this.maxPage){
      this.data = this.backupData.slice(startPage);
    } else {
      this.data = this.backupData.slice(startPage, endPage);
    }
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


  takeAction(object: any, action: string) {
    this.outputEvento.emit({
      row: object,
      action: action
    });
  }


  getConfig(action: ActionsEnum) {
    return {css: 'btn btn-secondary', text: action, type: 'button'};
  }
}
