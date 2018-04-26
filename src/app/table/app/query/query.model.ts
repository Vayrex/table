/*import {Lexer} from "./lexer";
import {BooleanExpression} from "./operators/boolean.expression";
import {True} from "./operators/terminal/true";
import {False} from "./operators/terminal/false";
import {Or} from "./operators/non.terminal/or";
import {And} from "./operators/non.terminal/and";
import {Not} from "./operators/non.terminal/not";*/
import {Messanger} from "../messanger";

declare const Lexer: any;

export class QueryModel {

  private _symbol: number;
  private _root: any;
  private _lexer: any;

  constructor(
    private _messanger: Messanger,
    private _filters,
    private _operators = []
  ) {
    this.init();
  }

  private init() {
    this._messanger.onFiltersChanged.subscribe(() => {

    });
  }

  public getFilters() {
    return this._filters;
  }

  private generateOperators() {
    //this._operators = Array.apply(null, Array(this._cells.length - 1)).map(() => Operator.create());
  }

  public filter(data: any[]) {
    return data.filter(() => false);
  }

  private makeTree(): any {
    this.expression();
    let root = this._root;
    delete this._root;
    return root;
  }

  private expression(): void {
    this.term();
    while (this._symbol === Lexer.OR) {
      let or: any = {};
      or.setLeft(this._root);
      this.term();
      or.setRight(this._root);
      this._root = or;
    }
  }

  private term(): void {
    this.factor();
    while (this._symbol === Lexer.AND) {
      let and: any = {};
      and.setLeft(this._root);
      this.factor();
      and.setRight(this._root);
      this._root = and;
    }
  }

  private factor(): void {

    this._symbol = this._lexer.nextSymbol();

    if (this._symbol === Lexer.TRUE) {

      this._root = true; //this._t;
      this._symbol = this._lexer.nextSymbol();

    } else if (this._symbol === Lexer.FALSE) {

      this._root = false; //this._f;
      this._symbol = this._lexer.nextSymbol();

    } else if (this._symbol === Lexer.NOT) {

      let not: any = {}; // = new Not();
      this.factor();
      not.setChild(this._root);
      this._root = not;

    } else if (this._symbol === Lexer.LEFT) {

      this.expression();
      this._symbol = this._lexer.nextSymbol();

    } else {
      throw new Error("Expression Malformed");
    }
  }

  public toString() {
    return this._root.toString();
  }
}
