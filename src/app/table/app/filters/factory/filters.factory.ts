import {IFilter, DateFilter, StringFilter, BooleanFilter} from "../filters";
import {} from "../filters";
import {Cell} from "../../cells";

import {DEFAULT_STRING_OPERATORS} from "../../config/defaults";
import {IFilterModelConfig} from "../../config/interfaces/interface.columns.config";

export type filterTypes = "string" | "numeric" | "date" | "boolean";

const defautOperators = {
  "string": DEFAULT_STRING_OPERATORS
};

export function createFilter(cell: Cell, config: IFilterModelConfig): IFilter {

  let type = config.type,
    operators = config.operators || defautOperators[type],
    operator = config.defaultOperator;

  switch (type) {
    case "string":
      return new StringFilter(cell, operators, operator as StringOperators);

    case "numeric":
      return new NumericFilter(cell, operator as NumericOperators);

    case "date":
      return new DateFilter(cell, operator as DateOperators);

    case "boolean":
      return new BooleanFilter(cell, operator as BooleanOperators);
  }
}

export function getAllowedFilterShortcuts() {
  return ["string", "numeric", "date", "boolean"];
}

export function isOfFilterType(type: string, filter: IFilter) {
  switch (type) {
    case "string":
      return filter instanceof StringFilterModel;
  }
}
