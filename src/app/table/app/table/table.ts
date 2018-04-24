import {QueryModel} from "../query/query.model";
import {ColumnsCollection, createCollections} from "../columns";
import {Paginator} from "../paginator/paginator";
import {ITableConfig, TableConfig} from "../config/index";
import {Messanger} from "../messanger";

export class Table {

  private _paginator: Paginator;
  private _messanger = new Messanger();

  constructor(
    private _data: any[],
    private _config: TableConfig,
    private _columnsCollection: ColumnsCollection,
    private _query: QueryModel,
  ) {

  }

  static create(data: any[], config: ITableConfig) {
    let tableConfig = new TableConfig(config);
    let {columnsCollection, filtersColection} = createCollections(tableConfig);
    return new Table(data, config, columnsCollection);
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

