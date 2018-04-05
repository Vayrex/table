import {Filter} from "../compability";
import {getOperator, DateOperators} from "./date.operators";

export class DateFilter implements Filter{

  constructor(
    private _operator:DateOperators,
    private _value: Date | [Date, Date]
  ) {

  }

  public filter(data: Date[]) {
    if (!data.length) {
      return [];
    }

    let operator = getOperator(this._operator);

    return data.filter((v: Date) => {
      return operator(v, this._value);
    });
  }

  public setOperator(operator: DateOperators) {
    this._operator = operator;
  }

  public setValue(value: Date | [Date, Date]) {
    this._value = value;
  }
};