import {Filter} from "../compability";
import {getOperator, BooleanOperators} from "./boolean.operators";

export class BooleanFilter implements Filter{

  constructor(
    private _operator:BooleanOperators,
    private _value: any
  ) {

  }

  public filter(data: any[]) {
    if (!data.length) {
      return [];
    }

    let operator = getOperator(this._operator);

    return data.filter((v: number) => {
      return operator(v, this._value);
    });
  }

  public setOperator(operator: BooleanOperators) {
    this._operator = operator;
  }

  public setValue(value: any) {
    this._value = value;
  }
};