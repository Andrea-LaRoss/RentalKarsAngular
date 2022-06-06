import { TableHeaders } from "./table-headers";
import { OrderTable } from "./order-table";
import { SearchParams } from "./search-params";
import { TablePagination } from "./table-pagination";

export class TableConfig {

  headers!: TableHeaders[];
  order!: OrderTable;
  search!: SearchParams;
  pagination !: TablePagination;
}
