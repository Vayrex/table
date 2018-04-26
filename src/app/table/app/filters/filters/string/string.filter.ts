import {IFilter} from "../base";
import {getOperator, StringOperators} from "./string.operators";
import {Cell} from "../../../cells";
import {IStringOperatorsMap} from "../../../config/interfaces/interface.operators.config";

export class StringFilter implements IFilter {

  private _value: string | RegExp;
  private _isActive: boolean;

  constructor(
    private _cell: Cell,
    private _operatorsMap: IStringOperatorsMap,
    private _operator: StringOperators = "="
  ) {

  }

  public boolean(row) {
    return getOperator(this._operator)(this._cell.getValue(row), this._value);
  }

  public setOperator(operator: StringOperators) {
    this._operator = operator;
  }

  public setValue(value: string | RegExp) {
    this._value = value;
  }

  public setIsActive(active: boolean) {
    this._isActive = active;
  }

  public isActive() {
    return this._isActive;
  }

  public getOperator() {
    return this._operator;
  }

  public getOperators() {
    return this._operatorsMap;
  }
}
