import {IFilter} from "../interfaces";
import {getOperator, DateOperators} from "./date.operators";
import {CellModel} from "../../cell/cell.model";

export class DateFilterModel implements IFilter {

  private _value: Date | [Date, Date];

  constructor(
    private _cellModel: CellModel,
    private _operator: DateOperators,
  ) {

  }

  public boolean(row) {
    const operator = getOperator(this._operator);
    return operator(this._cellModel.getValue(row), this._value);
  }

  public setOperator(operator: DateOperators) {
    this._operator = operator;
  }

  public setValue(value: Date | [Date, Date]) {
    this._value = value;
  }

  public isActive() {
    return !!this._value;
  }
}
