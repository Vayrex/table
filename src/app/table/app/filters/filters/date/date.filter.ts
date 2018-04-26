import {IFilter} from "../base";
import {getOperator, DateOperators} from "./date.operators";
import {Cell} from "../../../cells";

export class DateFilter implements IFilter {

  private _value: Date | [Date, Date];

  constructor(
    private _cell: Cell,
    private _operator: DateOperators,
  ) {

  }

  public boolean(row) {
    const operator = getOperator(this._operator);
    return operator(this._cell.getValue(row), this._value);
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
