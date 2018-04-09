import {IRowView} from "./interface.row.view";

export class RowPresenter {

  private _view: IRowView;

  constructor() {

  }

  private init() {

  }

  public setView(view: IRowView) {
    this._view = view;
    this._view.init();
  }
}
