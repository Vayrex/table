import {Terminal} from "./terminal";

export class False extends Terminal {

  constructor() {
    super(false);
  }

  public interpret() {
    return this._value;
  }
}