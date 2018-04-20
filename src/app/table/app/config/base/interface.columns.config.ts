import {filterTypes} from "../../filters/index";
import {IStringOperatorsMap} from "./interface.operators.config";
import {ICellConfig} from "../../cells/base";

export interface IColumnConfigItem {
  title: string;
  cell: ICellConfig;
  filter?: IFilterConfig;
}

export type IColumnsConfig = IColumnConfigItem[];
