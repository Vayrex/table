import {IFilter} from "../interfaces";
import {getOperator, StringOperators} from "./string.operators";
import {CellModel} from "../../cell/cell.model";
import {IStringOperatorsMap} from "../../../config/interfaces/interface.operators.config";

export class StringFilterModel implements IFilter {

  private _value: string | RegExp;

  constructor(
    private _cellModel: CellModel,
    private _operatorsMap: IStringOperatorsMap,
    private _operator: StringOperators = "="
  ) {

  }

  public boolean(row) {
    return getOperator(this._operator)(this._cellModel.getValue(row), this._value);
  }

  public setOperator(operator: StringOperators) {
    this._operator = operator;
  }

  public setValue(value: string | RegExp) {
    this._value = value;
  }

  public isActive() {
    return !!this._value;
  }

  public getOperator() {
    return this._operator;
  }

  public getOperators() {
    return this._operatorsMap;
  }
}
