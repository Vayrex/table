import {BooleanExpression} from "../boolean.expression";

export abstract class NonTerminal implements BooleanExpression {

  protected _left: BooleanExpression;
  protected _right: BooleanExpression;

  public setLeft(left:BooleanExpression): void {
    this._left = left;
  }

  public setRight(right: BooleanExpression): void {
    this._right = right;
  }

  abstract interpret(): boolean;
}