enum OperatorTypes {
  AND,
  OR
}

export class Operator {

  constructor(private _operator: OperatorTypes){

  }

  static create(operator?: OperatorTypes){
    operator = operator || OperatorTypes.AND;
    return new Operator(operator);
  }

  public setType(operator:OperatorTypes){
    this._operator = operator;
  }
}
