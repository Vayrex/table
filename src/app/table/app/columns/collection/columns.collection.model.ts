import {ColumnModel} from "../column/column.model";
import {IFilter} from "../filters/interfaces";

export class ColumnsCollectionModel {

  private _filters: IFilter[];

  constructor(
    private _columns: ColumnModel[]
  ) {
    this.init();
  }

  private init() {
    this._filters = this._columns.map((column) => column.getFilter());
  }

  public getFilters() {
    return this._filters;
  }

  public getActiveFilters() {
    return this._filters.filter((filter) => filter.isActive());
  }
}
