import {Filter} from "../compability";
import {getOperator, DateOperators} from "./date.operators";

export class DateFilter implements Filter {

  constructor(
    private _operator: DateOperators,
    private _value: Date | [Date, Date]
  ) {

  }

  public boolean(v: Date) {
    const operator = getOperator(this._operator);
    return operator(v, this._value);
  }

  public setOperator(operator: DateOperators) {
    this._operator = operator;
  }

  public setValue(value: Date | [Date, Date]) {
    this._value = value;
  }
}
