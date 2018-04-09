import {XMLNS} from "../constants";
import {Container} from "../../ui/container/container";
import {Operator} from "../../ui/operator/operator";
import {Layer} from "../../ui/layer/layer";
import {Cell} from "../../ui/cell/cell";

class QueryView {

  public el = document.createElementNS(XMLNS, "g");

  constructor(private _presenter: Container) {
    this._presenter.setView(this);
  }

  public init(cells: Cell[], operators: Operator[], layers: Layer[]) {

  }

  private initCells() {
    // initial rendering of cells ?
  }

  private initOperators() {
    // initial rendering of operators ?
  }

  private initLayers() {
    // initial rendering of layers ?
  }

  private listen() {
    // listen for clicks drops resizes etc. and call presenter methods
  }
}
