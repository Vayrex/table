import {NonTerminal} from "./non.terminal";

export class And extends NonTerminal {

  public interpret() {
    return this._left.interpret() && this._right.interpret();
  }

  public toString() {
    return `(${this._left} && ${this._right})`;
  }
}