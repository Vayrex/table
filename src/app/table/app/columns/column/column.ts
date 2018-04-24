import {IFilter} from "../../filters/filters/base";
import {Cell} from "../../cells";

export class Column {
  constructor(
    private _cell: Cell,
    private _filter?: IFilter
  ) {

  }

  public hasFilter() {
    return !!this._filter;
  }

  public getFilter() {
    return this._filter;
  }

  public getCell() {
    return this._cell;
  }
}
