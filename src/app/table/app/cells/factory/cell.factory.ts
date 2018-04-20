import {ICellConfig} from "../base/interface.cell.config";
import {Cell} from "../cell/cell";

export function createCell(config: ICellConfig) {
  return new Cell(config.valueGetter, config.valueFormatter);
}
