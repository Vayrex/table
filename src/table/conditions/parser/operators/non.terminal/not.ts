import {NonTerminal} from "./non.terminal";
import {BooleanExpression} from "../boolean.expression";

export class Not extends NonTerminal {

  public setChild(child: BooleanExpression): void {
      this.setLeft(child);
  }

  public setRight(right:BooleanExpression) {
    throw new Error('Unsupported Operation');
  }

  public interpret() {
    return !this._left.interpret();
  }

  public toString() {
    return `!${this._left}`;
  }
}