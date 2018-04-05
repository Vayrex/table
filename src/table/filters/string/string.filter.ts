import {Filter} from "../compability";
import {getOperator, StringOperators} from "./string.operators";

export class StringFilter implements Filter{

  constructor(
    private _operator: StringOperators,
    private _value: string | RegExp
  ) {

  }

  public boolean(input: string) {
    return getOperator(this._operator)(input, this._value);
  }

  public setOperator(operator: StringOperators) {
    this._operator = operator;
  }

  public setValue(value: string | RegExp) {
    this._value = value;
  }
};


