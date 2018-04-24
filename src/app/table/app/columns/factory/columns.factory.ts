import {Column} from "../column";
import {Cell} from "../../cells";
import {ColumnsCollection} from "../collection";
import {IFilter} from "../../filters/filters/base";
import {getAllowedFilterShortcuts, createFilterModel} from "./filters";
import {TableConfig} from "../../config/index";

export function createCollections(config: TableConfig) {
  let columns: Column[] = [];

  config.getColumnsConfig().forEach((item) => {

    let cell = new Cell(item.cell.valueGetter, item.cell.valueFormatter),
      filterConfig = item.filter,
      filter: IFilter;

    if (item.filter) {
      try {
        filter = createFilterModel(cell, filterConfig);
      } catch (e) {
        throw new Error("Filter type can be one of: " + getAllowedFilterShortcuts().join(", "));
      }
    }

    let column = new Column(cell, filter);
    columns.push(column);
  });

  return new ColumnsCollection(columns);
}
