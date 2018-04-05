import {Operator} from "../operator/operator";
import {Cell} from "../cell/cell";
import {Layer} from "../layer/layer";

class Container {

  private _layers: Layer[] = [];

  constructor(
    private _cells: any[],
    private _operators?: Operator[]
  ) {

  }

  public getCells() {
    return this._cells;
  }

  public getOperators() {
    return this._operators;
  }

  public getLayers() {
    return this._layers;
  }

  private init() {
    if (this._operators) {
      if (this._operators.length !== (this._cells.length - 1)) {
        throw new Error("Number of operators must be one less than number of cells.");
      }
    } else {
      this.generateOperators();
    }
  }

  private generateOperators() {
    this._operators = Array.apply(null, Array(this._cells.length - 1)).map(() => Operator.create());
  }

  public addLayer(cells: Cell[]) {

  }

  public removeLayer(layer: Layer) {

  }

  public swapCells(a: Cell, b: Cell) {

  }
}
