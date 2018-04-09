import {Operator} from "../interfaces";

const equals: Operator<string, string> = (value: string, filterValue: string) => {
  return value === filterValue;
};

const startsWith: Operator<string, string> = (value: string, filterValue: string) => {
  return value.startsWith(filterValue);
};

const contains: Operator<string, string> = (value: string, filterValue: string) => {
  return !!value.match(filterValue);
};

const endsWith: Operator<string, string> = (value: string, filterValue: string) => {
  return value.endsWith(filterValue);
};

const regex: Operator<string, RegExp> = (value: string, filterValue: RegExp) => {
  return filterValue.test(value);
};

const StringOperatorsMap = {
  //equals
  "=": equals,
  "eq": equals,
  //contains
  "contains": contains,
  "*": contains,
  //match
  "match": regex,
  "re": regex,
  //startsWith
  "startsWith": startsWith,
  "^": startsWith,
  //endsWith
  "endsWith": endsWith,
  "$": endsWith
};

export type StringOperators = keyof typeof StringOperatorsMap;
export const getOperator = (operator: StringOperators) => {
  return StringOperatorsMap[operator] as Operator<string, string | RegExp>;
};
