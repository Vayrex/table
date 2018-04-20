import {DateFilter} from "./date.filter";

describe("Date filter", () => {

  let dateFilter = new DateFilter("eq", new Date());

  describe("must return empty array when there is no data", () => {

    test("equals operator", () => {
      dateFilter.setOperator("eq");
      expect(dateFilter.filter([])).toHaveLength(0);
    });
    
  });

  describe("Operators", () => {
    let data = [
      new Date('2017-10-01'),
      new Date('2017-10-02'),
      new Date('2017-10-03'),
      new Date('2017-10-03 12:55:55'),
      new Date('2017-10-04'),
      new Date('2017-10-05')
    ];

    let results: Date[];

    describe('Equals', () => {

      beforeEach(() => {
        dateFilter.setOperator('eq');
      });

      test("Must return 2 items with date 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-03'), new Date('2017-10-03 12:55:55')]);
      });

      test("Shortcut '=' must return same result as 'eq'", () => {
        dateFilter.setOperator('=');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });

    describe('Greater then', () => {

      beforeEach(() => {
        dateFilter.setOperator('gt');
      });

      test("Must return 2 items with date > 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-04'), new Date('2017-10-05')]);
      });

      test("Shortcut '>' must return same result as 'gt'", () => {
        dateFilter.setOperator('>');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });

    describe('Greater then or equals', () => {

      beforeEach(() => {
        dateFilter.setOperator('gte');
      });

      test("Must return 4 items with date >= 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-03'), new Date('2017-10-03 12:55:55'), new Date('2017-10-04'), new Date('2017-10-05')]);
      });

      test("Shortcut '>=' must return same result as 'gte'", () => {
        dateFilter.setOperator('>=');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });

    describe('Less then', () => {

      beforeEach(() => {
        dateFilter.setOperator('lt');
      });

      test("Must return 2 items with date < 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-01'), new Date('2017-10-02')]);
      });

      test("Shortcut '<' must return same result as 'lt'", () => {
        dateFilter.setOperator('<');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });

    describe('Less then or equals', () => {

      beforeEach(() => {
        dateFilter.setOperator('lte');
      });

      test("Must return 4 items with date <= 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-01'), new Date('2017-10-02'), new Date('2017-10-03'), new Date('2017-10-03 12:55:55')]);
      });

      test("Shortcut '<=' must return same result as 'lte'", () => {
        dateFilter.setOperator('<=');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });

    describe('Less then or equals', () => {

      beforeEach(() => {
        dateFilter.setOperator('lte');
      });

      test("Must return 4 items with date <= 2017-10-03", () => {
        dateFilter.setValue(new Date('2017-10-03'));
        results = dateFilter.filter(data);
        expect(results).toEqual([new Date('2017-10-01'), new Date('2017-10-02'), new Date('2017-10-03'), new Date('2017-10-03 12:55:55')]);
      });

      test("Shortcut '<=' must return same result as 'lte'", () => {
        dateFilter.setOperator('<=');
        expect(dateFilter.filter(data)).toEqual(results);
      });
    });
  });

});