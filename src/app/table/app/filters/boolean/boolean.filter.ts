import {IFilter} from "../interfaces";
import {getOperator, BooleanOperators} from "./boolean.operators";
import {CellModel} from "../../../cell/cell.model";

export class BooleanFilterModel implements IFilter {

  private _value: boolean;

  constructor(
    private _cellModel: CellModel,
    private _operator: BooleanOperators
  ) {

  }

  public boolean(row) {
    const operator = getOperator(this._operator);
    return operator(!!this._cellModel.getValue(row), this._value);
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
