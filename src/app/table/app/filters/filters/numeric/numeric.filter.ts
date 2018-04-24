import {IFilter} from "../interfaces";
import {getOperator, NumericOperators} from "./numeric.operators";
import {CellModel} from "../../../cell/cell.model";

export class NumericFilterModel implements IFilter {

  private _value: number;

  constructor(
    private _cellModel: CellModel,
    private _operator: NumericOperators
  ) {

  }

  public boolean(row) {
    const operator = getOperator(this._operator);
    return operator(this._cellModel.getValue(row), this._value);
  }

  public setOperator(operator: NumericOperators) {
    this._operator = operator;
  }

  public setValue(value: number) {
    this._value = value;
  }

  public isActive() {
    return !!this._value;
  }
}
