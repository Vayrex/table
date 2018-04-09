import {Operator} from "../operator/operator";
import {Cell} from "../cell/cell";
import {Layer} from "../layer/layer";

export class Container {

  private isStrict = true;
  private _view: any;

  constructor(
    private _cells: any[],
    private _operators?: Operator[],
    private _layers?: Layer[]
  ) {

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

  public setView(view: any) {
    this._view = view;
    this._view.init(this._cells, this._operators, this._layers);
  }

  public addLayer(cells: Cell[]) {

    if (cells.length < 2) {
      throw new Error("Layer can be created for 2 cells minimum.");
    }

    if (this.isStrict) {

    } else {

    }
  }

  public removeLayer(layer: Layer) {

  }

  public swapCells(a: Cell, b: Cell) {

  }
}
