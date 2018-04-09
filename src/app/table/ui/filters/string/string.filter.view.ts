function createElement(tagName: string) {

}

export class StringFilterView {

  private _element = document.createElement("div");
  private _input = document.createElement("input");
  private _select = document.createElement("select");

  constructor() {
    this._element.classList.add("filter");
    this._element.classList.add("string-filter");
  }

  private init() {
    this._element.appendChild(this._input);
  }

  private addListeners() {
    this._input.addEventListener("keydown", (e) => {

    });
  }
}
