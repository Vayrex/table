import {IFilter} from "../filters/interfaces/interface.filter";
import {Cell} from "../../cell/cell/cell.model";

export class ColumnModel {
  constructor(
    private _cellModel: Cell,
    private _filterModel: IFilter
  ) {

  }

  public getFilter() {
    return this._filterModel;
  }
}
