import {IFilter} from "../../base/index";
import {NumericOperators} from "../operator/numeric.operators";
import {Cell} from "../../../../cells/index";

export class NumericFilter implements IFilter {

  private _value: number;
  private _isActive: boolean;

  constructor(
    private _cell: Cell,
    private _operator: NumericOperators
  ) {

  }

  public filter(row) {
    return this._operator.execute(this._cell.getValue(row), this._value);
  }

  public setValue(value: number) {
    this._value = value;
  }

  public isActive() {
    return !!this._value;
  }

  public setIsActive(active: boolean) {
    this._isActive = active;
  }
}
