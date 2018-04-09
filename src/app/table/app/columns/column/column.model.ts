import {IFilter} from "../filters/interfaces/interface.filter";
import {CellModel} from "../cell/cell.model";

export class ColumnModel {
  constructor(
    private _cellModel: CellModel,
    private _filterModel: IFilter
  ) {

  }

  public getFilter() {
    return this._filterModel;
  }
}
