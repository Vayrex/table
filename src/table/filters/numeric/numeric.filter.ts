import {Filter} from "../compability";
import {getOperator, NumericOperators} from "./numeric.operators";

export class NumericFilter implements Filter {

  constructor(
    private _operator: NumericOperators,
    private _value: number
  ) {

  }

  public boolean(v: number) {
    const operator = getOperator(this._operator);
    return operator(v, this._value);
  }

  public setOperator(operator: NumericOperators) {
    this._operator = operator;
  }

  public setValue(value: number) {
    this._value = value;
  }
}
