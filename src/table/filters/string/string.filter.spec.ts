import {StringFilter} from "./string.filter";

describe("String filter", () => {

  let stringFilter = new StringFilter("eq", "a");

  describe("must return empty array when there is no data", () => {

    test("Equals operator", () => {
      stringFilter.setOperator("eq");
      expect(stringFilter.filter([])).toHaveLength(0);
    });

    test("Contains operator", () => {
      stringFilter.setOperator("contains");
      expect(stringFilter.filter([])).toHaveLength(0);
    });

    test("Match operator", () => {
      stringFilter.setOperator("match");
      expect(stringFilter.filter([])).toHaveLength(0);
    });

    test("Starts with operator", () => {
      stringFilter.setOperator("startsWith");
      expect(stringFilter.filter([])).toHaveLength(0);
    });

    test("Ends with operator", () => {
      stringFilter.setOperator("endsWith");
      expect(stringFilter.filter([])).toHaveLength(0);
    });

  });

  describe("Operators", () => {
    let data = ["banana", "a", "b", "John", "Bob", "A", "alabama"],
      result: string[];

    describe("Equals", () => {

      test("Must return strings that equals to 'a'", () => {
        stringFilter.setOperator("eq");
        stringFilter.setValue("a");
        result = stringFilter.filter(data);
        expect(result).toHaveLength(1);
        expect(result).toEqual(["a"]);
      });

      test("Operator shortcut '=' must return same output as 'eq'", () => {
        stringFilter.setOperator("=");
        expect(stringFilter.filter(data)).toEqual(result);
      });
    });

    describe("Match", () => {

      test("Must throw exception if string is not formatted like valid regex ( for example '/^as/ig') ", () => {
        stringFilter.setOperator("match");
        stringFilter.setValue("a");
        expect(() => {
          stringFilter.filter(data);
        }).toThrow();
      });

      test("Must return strings that match '/aJ/i' ", () => {
        stringFilter.setOperator("match");
        stringFilter.setValue(/[aJ]/i);
        result = stringFilter.filter(data);
        expect(result).toHaveLength(5);
        expect(result).toEqual(["banana", "a", "John", "A", "alabama"]);
      });

      test("Operator shortcut 're' must return same output as 'match'", () => {
        stringFilter.setOperator("re");
        expect(stringFilter.filter(data)).toEqual(result);
      });

    });

    describe("Contains", () => {

      test("Must return strings that contains 'a'", () => {
        stringFilter.setOperator("contains");
        stringFilter.setValue("a");
        result = stringFilter.filter(data);
        expect(result).toHaveLength(3);
        expect(result).toEqual(["banana", "a", "alabama"]);
      });

      test("Operator shortcut \"*\" must return same output as \"contains\"", () => {
        stringFilter.setOperator("*");
        expect(stringFilter.filter(data)).toEqual(result);
      });

    });

    describe("Starts with", () => {

      test("Must return strings that starts with 'a'", () => {
        stringFilter.setOperator("startsWith");
        stringFilter.setValue("a");
        result = stringFilter.filter(data);
        expect(result).toHaveLength(2);
        expect(result).toEqual(["a", "alabama"]);
      });

      test("Operator shortcut \"^\" must return same output as \"startsWith\"", () => {
        stringFilter.setOperator("^");
        expect(stringFilter.filter(data)).toEqual(result);
      });
    });

    describe("Ends with", () => {

      test("Must return strings that ends with 'a'", () => {
        stringFilter.setOperator("endsWith");
        stringFilter.setValue("a");
        result = stringFilter.filter(data);
        expect(result).toHaveLength(3);
        expect(result).toEqual(["banana", "a", "alabama"]);
      });

      test("Operator shortcut \"$\" must return same output as \"endsWith\"", () => {
        stringFilter.setOperator("$");
        expect(stringFilter.filter(data)).toEqual(result);
      });

    });
  });

});