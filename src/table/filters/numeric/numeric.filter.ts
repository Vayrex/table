import {Filter} from "../compability";
import {getOperator, NumericOperators} from "./numeric.operators";

export class NumericFilter implements Filter{

  constructor(
    private _operator:NumericOperators,
    private _value: number
  ) {

  }

  public filter(data: number[]) {
    if (!data.length) {
      return [];
    }

    let operator = getOperator(this._operator);

    return data.filter((v: number) => {
      return operator(v, this._value);
    });
  }

  public setOperator(operator: NumericOperators) {
    this._operator = operator;
  }

  public setValue(value: number) {
    this._value = value;
  }
};