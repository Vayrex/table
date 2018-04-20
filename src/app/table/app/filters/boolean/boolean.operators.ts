import {Operator} from "../base";

const eq: Operator<any, any> = (value: boolean, filterValue: boolean) => {
  return value === filterValue;
};

const not: Operator<any, any> = (value: boolean, filterValue: boolean) => {
  return value !== filterValue;
};

const BooleanOperatorsMap = {
  //equals
  "=": eq,
  "eq": eq,
  //not equals
  "!=": not,
  "not": not
};

export type BooleanOperators = keyof typeof BooleanOperatorsMap;
export const getOperator = (operator: BooleanOperators) => {
  return BooleanOperatorsMap[operator];
};
