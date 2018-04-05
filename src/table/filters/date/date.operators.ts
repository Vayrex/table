import {Operator} from "../compability";

const eq: Operator<Date, Date> = (value: Date, filterValue: Date) => {
  if(value.getFullYear() != filterValue.getFullYear()){
    return false;
  }
  if(value.getMonth() != filterValue.getMonth()){
    return false;
  }
  if(value.getDate() != filterValue.getDate()){
    return false
  }
  return true;
};

const gte: Operator<Date, Date> = (value: Date, filterValue: Date) => {
  if(value.getFullYear() < filterValue.getFullYear()){
    return false;
  }
  if(value.getMonth() < filterValue.getMonth()){
    return false;
  }
  if(value.getDate() < filterValue.getDate()){
    return false;
  }
  return true;
};

const gt: Operator<Date, Date> = (value: Date, filterValue: Date) => {
  if(!gte(value, filterValue)){
    return false;
  }
  return value.getDate() > filterValue.getDate();
};

const lte: Operator<Date, Date> = (value: Date, filterValue: Date) => {
  if(value.getFullYear() > filterValue.getFullYear()){
    return false;
  }
  if(value.getMonth() > filterValue.getFullYear()){
    return false;
  }
  if(value.getDate() > filterValue.getDate()){
    return false;
  }
  return true;
};

const lt: Operator<Date, Date> = (value: Date, filterValue: Date) => {
  if(!lte(value, filterValue)){
    return false;
  }
  return value.getDate() < filterValue.getDate();
};

const btw: Operator<Date, [Date, Date]> = (value: Date, filterValue: [Date, Date]) => {
  let from = filterValue[0],
    to = filterValue[1];
  return gte(value, to) && lte(value, from);
};

const DateOperatorsMap = {
  //equals
  "=": eq,
  "eq": eq,
  //greater then
  "gt": gt,
  ">": gt,
  //greater then or equals
  ">=": gte,
  "gte": gte,
  //less then
  "lt": lt,
  "<": lt,
  //less then or equals
  "<=": lte,
  "lte": lte,
  //between
  "btw":btw,
  "><":btw
};

export type DateOperators = keyof typeof DateOperatorsMap;
export const getOperator = (operator: DateOperators) => {
  return DateOperatorsMap[operator] as Operator<Date, Date | [Date, Date]>;
};
