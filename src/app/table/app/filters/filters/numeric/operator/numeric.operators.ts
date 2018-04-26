export class NumericOperator {


  constructor(private _shortCut: NumericOperatorTypes) {

  }

  static create(operatorShortCut) {
    return new NumericOperator();
  }

  static equals(value: number, filterValue: number) {
    return value === filterValue;
  }

  private static greaterThan(value: number, filterValue: number) {
    return value > filterValue;
  }

  private static greaterThanOrEquals(value: number, filterValue: number) {
    return value >= filterValue;
  }

  private static lessThan(value: number, filterValue: number) {
    return value < filterValue;
  }

  private static lessThanOrEquals(value: number, filterValue: number) {
    return value <= filterValue;
  }

  public setShortCut() {

  }

  public execute(value: number, filterValue: number) {

  }
}
