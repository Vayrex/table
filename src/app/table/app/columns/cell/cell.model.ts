export class CellModel {

  private _valueGetter: Function;
  private _valueFormatter: Function | undefined;

  constructor(getter: Function | string, formatter?: Function) {
    this.setValueGetter(getter);
    if (typeof formatter === "function") {
      this.setValueFormatter(formatter);
    }
  }

  private setValueGetter(getter: Function | string) {
    if (typeof getter === "string") {
      this._valueGetter = function (row) {
        return row.get(getter);
      };
    } else {
      this._valueGetter = getter;
    }
  }

  private setValueFormatter(formatter: Function) {
    this._valueFormatter = formatter;
  }

  public getValue(row) {
    return this._valueGetter(row);
  }

  public getFormattedValue(row) {
    let value = this.getValue(row);
    if (!this._valueFormatter) {
      return value;
    }
    return this._valueFormatter.apply(null, value);
  }
}
