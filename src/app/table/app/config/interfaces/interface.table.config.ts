import {IColumnsConfig} from "./interface.columns.config";
import {IPaginationConfig} from "./interface.pagination.config";

export interface ITableConfig {
  pagination: IPaginationConfig;
  columns: IColumnsConfig;
  table: any;
}
