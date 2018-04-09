import {BooleanFilter} from "./boolean.filter";

describe("Boolean filter", () => {

  let booleanFilter = new BooleanFilter("eq", 1);

  describe("must return empty array when there is no data", () => {

    test("equals operator", () => {
      booleanFilter.setOperator("eq");
      expect(booleanFilter.filter([])).toHaveLength(0);
    });

    test("grater then operator", () => {
      booleanFilter.setOperator("not");
      expect(booleanFilter.filter([])).toHaveLength(0);
    });
  });

  describe("Operators", () => {

    let falthy = [false, "", 0, NaN, undefined, null],
      truthly = [true, "a", 1, {}, [], Date],
      data = truthly.concat(falthy),
      result: number[];

    describe("Equals", () => {

      beforeEach(() => {
        booleanFilter.setOperator("eq");
      });

      test("must return array with truthly values", () => {
        booleanFilter.setValue(true);
        result = booleanFilter.filter(data);
        expect(result).toEqual(truthly);
      });

      test("must return array with falthy values", () => {
        booleanFilter.setValue(false);
        result = booleanFilter.filter(data);
        expect(result).toEqual(falthy);
      });

      test("Shortcut '=' must return same value as 'eq'", () =>{
        booleanFilter.setOperator('=');
        expect(booleanFilter.filter(data)).toEqual(result);
      });

    });

    describe("Not Equals", () => {

      beforeEach(() => {
        booleanFilter.setOperator("not");
      });

      test("must return array with truthly values", () => {
        booleanFilter.setValue(false);
        result = booleanFilter.filter(data);
        expect(result).toEqual(truthly);
      });

      test("must return array with falthy values", () => {
        booleanFilter.setValue(true);
        result = booleanFilter.filter(data);
        expect(result).toEqual(falthy);
      });

      test("Shortcuts '!=' must return same value as 'not'", () =>{
        booleanFilter.setOperator('!=');
        expect(booleanFilter.filter(data)).toEqual(result);
      });

    });

  });

});