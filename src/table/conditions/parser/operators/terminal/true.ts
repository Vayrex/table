import {Terminal} from "./terminal";

export class True extends Terminal {

  constructor() {
    super(true);
  }

  public interpret() {
    return this._value;
  }
}