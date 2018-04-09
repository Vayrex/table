import {QueryModel} from "./query/query.model";
import {ColumnsCollectionModel} from "./columns/collection/columns.collection.model";
import {createColumnsCollection} from "./columns/index";
import {Paginator} from "./paginator/paginator";
import {ITableConfig, TableConfig} from "./config/index";


export class TableApp {

  private _columnsCollection: ColumnsCollectionModel;
  private _query: QueryModel;
  private _paginator: Paginator;
  private _config: TableConfig;

  constructor(
    private _data: any[],
    config: ITableConfig
  ) {
    this.init(config);
  }

  private init(config: ITableConfig) {
    this._config = new TableConfig(config);
    this._columnsCollection = createColumnsCollection(this._config);
    this._query = new QueryModel(this._columnsCollection.getActiveFilters());
  }

  public getQuery() {
    return this._query;
  }

  public getColumnsModel() {
    return this._columnsCollection;
  }

  public getFilters() {
    return this._columnsCollection.getFilters();
  }

  public getConfig() {

  }
}

