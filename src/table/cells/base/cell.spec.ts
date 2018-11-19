import * as expect from 'expect';
import {describe, it, suite} from 'mocha';
import {Cell} from './cell';
import {Formatter} from '../../types';

suite('Cell', () => {

    let cell: Cell<any>,
        formatter: Formatter<any>;

    describe('When having a cell without formatter', () => {
        it('should return string value representation', () => {
            let date = new Date();
            cell = new Cell<any>();
            expect(cell.formatValue(date)).toEqual(date.toString());
            expect(cell.formatValue(11)).toEqual('11');
        });
    });

    describe('When having value formatter', () => {
        it('should return properly formatted value', () => {
            formatter = (v: Date) => {
                return v.getFullYear().toString();
            };
            cell = new Cell<Date>(formatter);

            let date = new Date('2012-11-27');
            expect(cell.formatValue(date)).toEqual('2012');
        });
    });

});
