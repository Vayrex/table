import {NumericFilter} from "./numeric.filter";

describe("Numeric filter", () => {

  let numericFilter = new NumericFilter("eq", 1);

  describe("must return empty array when there is no data", () => {

    test("equals operator", () => {
      numericFilter.setOperator("eq");
      expect(numericFilter.filter([])).toHaveLength(0);
    });

    test("grater then operator", () => {
      numericFilter.setOperator("gt");
      expect(numericFilter.filter([])).toHaveLength(0);
    });

    test("grater then or equals operator", () => {
      numericFilter.setOperator("gte");
      expect(numericFilter.filter([])).toHaveLength(0);
    });

    test("less then operator", () => {
      numericFilter.setOperator("lt");
      expect(numericFilter.filter([])).toHaveLength(0);
    });

    test("less then or equals operator", () => {
      numericFilter.setOperator("lte");
      expect(numericFilter.filter([])).toHaveLength(0);
    });
  });

  describe("Operators", () => {
    let data = [1, 2, 3, 4, 5, 1, 1],
      result: number[];

    describe("Equals", () => {

      test("must return array with 3 items, all of them must be 1", () => {

        numericFilter.setOperator("eq");
        numericFilter.setValue(1);
        result = numericFilter.filter(data);

        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 1, 1]);
      });

      test('"eq" and "=" param for operator must return same output', () => {
        numericFilter.setOperator('=');
        expect(numericFilter.filter(data)).toEqual(result);
      });
    });

    describe("Less then", () => {
      test("must return array with values < 2", () => {

        numericFilter.setOperator("lt");
        numericFilter.setValue(2);
        result = numericFilter.filter(data);

        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 1, 1]);
      });

      test('"lt" and "<" operator params must returns same output', () => {
        numericFilter.setOperator('<');
        expect(numericFilter.filter(data)).toEqual(result);
      });
    });

    describe('Less then or equal', () => {
      test("must return array with values <= 2", () => {

        numericFilter.setOperator("lte");
        numericFilter.setValue(2);
        result = numericFilter.filter(data);

        expect(result).toHaveLength(4);
        expect(result).toEqual([1, 2, 1, 1]);
      });

      test('"lte" and "<=" operator params must returns same output', () => {
        numericFilter.setOperator('<=');
        expect(numericFilter.filter(data)).toEqual(result);
      });
    });

    describe("Greater then", () => {
      test("must return array with values > 2", () => {

        numericFilter.setOperator("gt");
        numericFilter.setValue(2);
        result = numericFilter.filter(data);

        expect(result).toHaveLength(3);
        expect(result).toEqual([3, 4, 5]);
      });

      test('"gt" and ">" operator params must returns same output', () => {
        numericFilter.setOperator('>');
        expect(numericFilter.filter(data)).toEqual(result);
      });
    });

    describe("Greater then or equals", () => {
      test("must return array with values >= 2", () => {

        numericFilter.setOperator("gte");
        numericFilter.setValue(2);
        result = numericFilter.filter(data);

        expect(result).toHaveLength(4);
        expect(result).toEqual([2, 3, 4, 5]);
      });

      test('"gte" and ">=" operator params must returns same output', () => {
        numericFilter.setOperator('>=');
        expect(numericFilter.filter(data)).toEqual(result);
      });
    });
  });

});