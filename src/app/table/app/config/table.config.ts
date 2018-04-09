import {IColumnsConfig} from "./interfaces/interface.columns.config";
import {IPaginationConfig} from "./interfaces/interface.pagination.config";
import {ITableConfig} from "./interfaces/interface.table.config";

export class TableConfig {

  private _paginationConfig: IPaginationConfig;
  private _columnsConfig: IColumnsConfig;
  private _tableConfig: any;

  constructor(config: ITableConfig) {
    this.init(config);
  }

  private init(config: ITableConfig) {
    this.setPaginationConfig(config.pagination);
    this.setColumnsConfig(config.columns);
  }

  public getColumnsConfig() {
    return this._columnsConfig;
  }

  public setQueryConfig() {

  }

  public setColumnsConfig(config: IColumnsConfig) {
    this._columnsConfig = config;
  }

  public setPaginationConfig(config: IPaginationConfig) {
    this._paginationConfig = config;
  }


  public toJSON() {
    return {};
  }
}
