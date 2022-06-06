import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from "../table-config";

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

  itemsPerPage!: number;

  page!: number;

  constructor() { }

  ngOnInit(): void {
    this.changeOrder(this.data, this.tableConfig.order.defaultColumn, this.tableConfig.order.orderType);
    this.backupData = this.data;
    this.data = this.backupData.slice(0,this.tableConfig.pagination.itemPerPage);
    this.itemsPerPage = this.tableConfig.pagination.itemPerPage;
    this.page = this.tableConfig.pagination.itemPerPage;
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

  search(input: any, columns: any ): any[]{
    const value = input.target.value.toLowerCase();
    const filteredList: any[] = [];
    for(let i = 0; i < this.backupData.length; i++) {
          if(this.backupData[i][columns].toLowerCase().includes(value)){
            console.log(this.backupData[i][columns]);
            filteredList.push(this.backupData[i]);
          }
      }
    if(filteredList.length > 0 || value.toString().length > 0) {
      return filteredList;
    } else {
      return this.backupData;
    }
  }

  changePagination(list: any[], itemsPerPage: string): any[] {
    this.itemsPerPage = Number(itemsPerPage);
    list = this.backupData.slice(0,this.itemsPerPage);
    return list;
  }

  nextPage(list: any[]): any [] {
    console.log(this.page);
    console.log("Paginazione: ",this.itemsPerPage);
    if(this.page > this.backupData.length){
      list = this.backupData.slice(this.backupData.length - this.itemsPerPage, this.backupData.length);
    } else {
      if(this.page <= this.itemsPerPage){
        this.page = this.itemsPerPage;
      } else {
        this.page += this.itemsPerPage;
      }
      list = this.backupData.slice(this.page, this.page + this.itemsPerPage);
    }
    console.log(this.page);
    return list;
  }

  prevPage(list: any[]): any[] {
    console.log(this.page);
    console.log("Paginazione: ",this.itemsPerPage);
    if(this.page < 0){
      list = this.backupData.slice(0, this.itemsPerPage);
    } else {
      if(this.page >= this.itemsPerPage){
        this.page = this.itemsPerPage;
      } else {
        this.page -= this.itemsPerPage;
      }
      list = this.backupData.slice(this.page - this.itemsPerPage, this.page);
    }
    console.log(this.page);
    return list;
  }

}
