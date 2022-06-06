import { TableHeaders } from "./table-headers";
import { OrderTable } from "./order-table";
import { SearchParams } from "./search-params";
import { TablePagination } from "./table-pagination";
import { ActionsEnum } from "./actions-enum";

export class TableConfig {

  headers!: TableHeaders[];
  order!: OrderTable;
  search!: SearchParams;
  pagination !: TablePagination;
  actions !: ActionsEnum[];
}
