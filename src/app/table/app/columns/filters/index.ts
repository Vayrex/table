import {DateFilterModel} from "./date/date.filter";
import {NumericFilterModel} from "./numeric/numeric.filter";
import {StringFilterModel} from "./string/string.filter";
import {BooleanFilterModel} from "./boolean/boolean.filter";
import {IFilter} from "./interfaces";
import {CellModel} from "../cell/cell.model";
import {DateOperators} from "./date/date.operators";
import {StringOperators} from "./string/string.operators";
import {NumericOperators} from "./numeric/numeric.operators";
import {BooleanOperators} from "./boolean/boolean.operators";
import {DEFAULT_STRING_OPERATORS} from "../../config/defaults";
import {IFilterModelConfig} from "../../config/interfaces/interface.columns.config";

export type filterTypes = "string" | "numeric" | "date" | "boolean";

const defautOperators = {
  "string": DEFAULT_STRING_OPERATORS
};

export function createFilterModel(cell: CellModel, config: IFilterModelConfig): IFilter {

  let type = config.type,
    operators = config.operators || defautOperators[type],
    operator = config.defaultOperator;

  switch (type) {
    case "string":
      return new StringFilterModel(cell, operators, operator as StringOperators);

    case "numeric":
      return new NumericFilterModel(cell, operator as NumericOperators);

    case "date":
      return new DateFilterModel(cell, operator as DateOperators);

    case "boolean":
      return new BooleanFilterModel(cell, operator as BooleanOperators);
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
