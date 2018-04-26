export class NumericOperators {

  private map: { [key: string]: (value: number) => boolean };

  constructor(private _method: NumericOperatorTypes) {

  }

  static create(method: NumericOperatorTypes) {
    return new NumericOperators(NumericOperatorTypes.eq);
  }

  public setShortCut() {

  }

  public execute(value: number, filterValue: number) {
    return 1;
  }

  public equals(value: number, filterValue: number) {
    return value === filterValue;
  }

  public greaterThan(value: number, filterValue: number) {
    return value > filterValue;
  }

  public greaterThanOrEquals(value: number, filterValue: number) {
    return value >= filterValue;
  }

  public essThan(value: number, filterValue: number) {
    return value < filterValue;
  }

  public lessThanOrEquals(value: number, filterValue: number) {
    return value <= filterValue;
  }
}


let o = NumericOperators.create(NumericOperatorTypes.eq);
console.log(NumericOperatorTypes.eq(1, 1));
