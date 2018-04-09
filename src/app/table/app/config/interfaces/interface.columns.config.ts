import {filterTypes} from "../../columns/filters/index";
import {IStringOperatorsMap} from "./interface.operators.config";

export interface IFilterModelConfig {
  type: filterTypes;
  operators?: IStringOperatorsMap;
  defaultOperator?: string;
}

interface ICellModelConfig {
  valueGetter: Function | string;
  valueFormatter: Function;
}

export interface IColumnConfigItem {
  title: string;
  cell: ICellModelConfig;
  filter?: IFilterModelConfig;
}

export type IColumnsConfig = IColumnConfigItem[];
