export class QueryPresenter {

  private isStrict = true;
  //private _layers: Layer[] = [];
  private _view: any;

  constructor() {

  }

  public setView(view: any) {
    //this._view = view;
    //this._view.init(this._cells, this._operators, this._layers);
  }

  public addLayer(cells: any[]) {

    if (cells.length < 2) {
      throw new Error("Layer can be created for 2 cells minimum.");
    }

    if (this.isStrict) {

    } else {

    }
  }

  /*
  public removeLayer(layer: Layer) {

  }

  public swapCells(a: Cell, b: Cell) {

  }*/
}
