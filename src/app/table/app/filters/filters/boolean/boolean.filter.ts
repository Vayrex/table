import {IFilter} from "../base";
import {getOperator, BooleanOperators} from "./boolean.operators";
import {Cell} from "../../../cells";

export class BooleanFilter implements IFilter {

  private _value: boolean;

  constructor(
    private _cell: Cell,
    private _operator: BooleanOperators
  ) {

  }

  public boolean(row) {
    const operator = getOperator(this._operator);
    return operator(!!this._cell.getValue(row), this._value);
  }

  public setOperator(operator: BooleanOperators) {
    this._operator = operator;
  }

  public setValue(value: boolean) {
    this._value = value;
  }

  public isActive() {
    return this._value !== false && !!this._value;
  }
}
