import * as expect from 'expect';
import {describe, it, test, suite, beforeEach} from 'mocha';
import {Paginator} from './paginator';

suite('Paginator', () => {

    suite('Constructor', () => {

        describe('When page is negative or zero', () => {
            it('should throw an error', () => {
                expect(() => {
                    let paginator = new Paginator(0, 10, 0);
                }).toThrow();
            });
        });

        describe('When page is greater then total number of pages', () => {
            it('should throw an error', () => {
                expect(() => {
                    let paginator = new Paginator(1, 10, 4);
                }).toThrow();
            });
        });

        describe('When records per page is negative or zero', () => {
            it('should throw an error', () => {
                expect(() => {
                    let paginator = new Paginator(0, 0, 1);
                }).toThrow();
            });
        });

        describe('When total number of records is zero', () => {
            let paginator: Paginator;

            beforeEach(() => {
                paginator = new Paginator(0);
            });

            it('should have only one page', () => {
                expect(paginator.getNumberOfPages()).toEqual(1);
            });

            it('should have page with number 1', () => {
                expect(paginator.getCurrentPage()).toEqual(1);
            });

            it('should have 0 records on page', () => {
                expect(paginator.getRecordsOnPage()).toEqual(0);
            });
        });

        describe('When page is last (it can be first at the same time)', () => {

            describe('and there is modulo (11%5 = 1)', () => {
                test('records must equals to modulo', () => {
                    let paginator = new Paginator(11, 5, 3);
                    expect(paginator.getRecordsOnPage()).toEqual(1);
                });
            });

            describe('and modulo is zero', () => {
                test('records on page must equals to records per page', () => {
                    let paginator = new Paginator(25, 5, 5);
                    expect(paginator.getRecordsOnPage()).toEqual(paginator.getRecordsPerPage());
                });
            });
        });

        describe('When page is not last (if there is one page it is also last)', () => {
            describe('and total number of records is zero', () => {
                test('records on page must equals to zero', () => {
                    let paginator = new Paginator(0, 5);
                    expect(paginator.getRecordsOnPage()).toEqual(0);
                });
            });

            describe('and total nuber of records is greater then zero', () => {
                test('records on page must equals to records per page', () => {
                    let paginator = new Paginator(25, 5, 5);
                    expect(paginator.getRecordsOnPage()).toEqual(paginator.getRecordsPerPage());
                });
            });
        });
    });

    describe('State changes', () => {

        let paginator: Paginator;

        describe('when records per page is changed', () => {

            beforeEach(() => {
                paginator = new Paginator(10, 1, 2);
                paginator.setPerPage(3);
            });

            test('page must be set to 1', () => {
                expect(paginator.getCurrentPage()).toEqual(1);
            });

            test('number of pages must be changed properly', () => {
                expect(paginator.getNumberOfPages()).toEqual(4);
            });
        });

        describe('When total number of records is changed', () => {

            beforeEach(() => {
                paginator = new Paginator(10, 5, 2);
                paginator.setTotalNumberOfRecords(20);
            });

            test('page must be set to 1', () => {
                expect(paginator.getCurrentPage()).toEqual(1);
            });

            test('number of pages must be changed properly', () => {
                expect(paginator.getNumberOfPages()).toEqual(4);
            });
        });

    });

    describe('-> getLimitOffset()', () => {

        test('when total number of records is zero', () => {
            let paginator = new Paginator(0);
            expect(paginator.getLimitOffset()).toEqual([1, 0]);
        });

        test('when total number of records is greater then zero', () => {
            let paginator = new Paginator(110, 10, 5);
            expect(paginator.getLimitOffset()).toEqual([10, 60]);
        });
    });

    describe('-> getSlice()', () => {
        test('when total number of records is zero', () => {
            let paginator = new Paginator(0, 2);
            expect(paginator.getSlice()).toEqual([0, 0]);
        });

        test('when total number of records is greater then zero', () => {
            let paginator = new Paginator(100, 10, 1);
            expect(paginator.getSlice()).toEqual([0, 10]);
        });
    });

    describe('-> sliceArray()', () => {

        test('Must return empty array, when emty array is passed', () => {
            let data: any[] = [];
            let paginator = new Paginator(data.length, 4);
            expect(paginator.sliceArray(data).length).toEqual(0);
        });

        describe('Must return proper slice', () => {

            let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            let paginator = new Paginator(data.length, 4);

            test('for first page', () => {
                let slice = paginator.sliceArray(data);
                expect(slice.length).toEqual(4);
                expect(slice).toEqual([1, 2, 3, 4]);
            });

            test('for middle page', () => {
                paginator.setPage(2);
                let slice = paginator.sliceArray(data);
                expect(slice.length).toEqual(4);
                expect(slice).toEqual([5, 6, 7, 8]);
            });

            test('for last page', () => {
                paginator.setPage(3);
                let slice = paginator.sliceArray(data);
                expect(slice.length).toEqual(2);
                expect(slice).toEqual([9, 10]);
            });
        });
    });

});
