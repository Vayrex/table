import {Formatter} from '../../types';

export class Cell<T> {

    private _column: any;

    constructor(
        private _formatter?: Formatter<T>
    ) {

    }

    public setValueFormatter(formatter: Formatter<T>) {
        this._formatter = formatter;
    }

    public getValueFormatter() {
        return this._formatter;
    }

    public formatValue(value: T): string {
        return this._formatter ? this._formatter(value) : value + '';
    }
}
