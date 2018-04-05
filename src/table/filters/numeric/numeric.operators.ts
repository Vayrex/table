import {Operator} from "../compability";

const eq:Operator<number, number> = (value: number, filterValue: number) => {
  return value == filterValue;
};

const gt:Operator<number, number> = (value: number, filterValue: number) => {
  return value > filterValue;
};

const gte:Operator<number, number> =(value: number, filterValue: number) => {
    return value >= filterValue;
};

const lt:Operator<number, number> = (value: number, filterValue: number) => {
    return value < filterValue;
  };

const lte:Operator<number, number> = (value: number, filterValue: number) => {
  return value <= filterValue;
};


const NumericOperatorsMap = {
  //equals
  '=': eq,
  'eq':eq,
  //greater then
  '>': gt,
  'gt':gt,
  //greater then or equals
  '>=': gte,
  'gte': gte,
  //less then
  '<': lt,
  'lt':lt,
  //less then or equals
  '<=': lte,
  'lte': lte
};

export type NumericOperators = keyof typeof NumericOperatorsMap;
export const getOperator = (operator: NumericOperators) => {
  return NumericOperatorsMap[operator];
};
