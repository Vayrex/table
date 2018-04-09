import {RowPresenter} from "./row.presenter";
import {IRowView} from "./interface.row.view";

export class RowView implements IRowView {

  constructor(private _presenter: RowPresenter) {
    this._presenter.setView(this);
  }

  public init() {

  }
}
