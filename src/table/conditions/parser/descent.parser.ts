import {Lexer} from "./lexer";
import {BooleanExpression} from "./operators/boolean.expression";
import {True} from "./operators/terminal/true";
import {False} from "./operators/terminal/false";
import {Or} from "./operators/non.terminal/or";
import {And} from "./operators/non.terminal/and";
import {Not} from "./operators/non.terminal/not";

export class RecursiveDescentParser {

  private _symbol: number;
  private _root: BooleanExpression;
  private _t = new True();
  private _f = new False();

  constructor(private _lexer: Lexer) {

  }

  public build(): BooleanExpression  {
    this.expression();
    let root = this._root;
    delete this._root;
    return root;
  }

  private expression(): void {
    this.term();
    while (this._symbol == Lexer.OR) {
      let or = new Or();
      or.setLeft(this._root);
      this.term();
      or.setRight(this._root);
      this._root = or;
    }
  }

  private term(): void {
    this.factor();
    while (this._symbol == Lexer.AND) {
      let and = new And();
      and.setLeft(this._root);
      this.factor();
      and.setRight(this._root);
      this._root = and;
    }
  }

  private factor(): void {

    this._symbol = this._lexer.nextSymbol();

    if (this._symbol == Lexer.TRUE) {

      this._root = this._t;
      this._symbol = this._lexer.nextSymbol();

    } else if (this._symbol == Lexer.FALSE) {

      this._root = this._f;
      this._symbol = this._lexer.nextSymbol();

    } else if (this._symbol == Lexer.NOT) {

      let not = new Not();
      this.factor();
      not.setChild(this._root);
      this._root = not;

    } else if (this._symbol == Lexer.LEFT) {

      this.expression();
      this._symbol = this._lexer.nextSymbol();

    } else {
      throw new Error("Expression Malformed");
    }
  }

  public toString(){
    return this._root.toString();
  }
}