import {filterTypes} from "../index";
import {IStringOperatorsMap} from "../../config/base/interface.operators.config";

export interface IFilterConfig {
  type: filterTypes;
  operators?: IStringOperatorsMap;
  defaultOperator?: string;
}
