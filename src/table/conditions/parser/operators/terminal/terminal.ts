import {BooleanExpression} from "../boolean.expression";

export abstract class Terminal implements BooleanExpression {

  constructor(protected _value: boolean) {
  }

  public toString(): string {
    return `${this._value}`;
  }

  abstract interpret(): boolean;
}