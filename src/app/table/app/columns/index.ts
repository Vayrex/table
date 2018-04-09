import {ColumnModel} from "./column/column.model";
import {CellModel} from "./cell/cell.model";
import {ColumnsCollectionModel} from "./collection/columns.collection.model";
import {IFilter} from "./filters/interfaces";
import {getAllowedFilterShortcuts, createFilterModel} from "./filters";
import {TableConfig} from "../config";

export function createColumnsCollection(config: TableConfig) {
  let columns: ColumnModel[] = [];

  config.getColumnsConfig().forEach((item) => {

    let cell = new CellModel(item.cell.valueGetter, item.cell.valueFormatter),
      filterConfig = item.filter,
      filter: IFilter | undefined;

    if (item.filter) {
      try {
        filter = createFilterModel(cell, filterConfig);
      } catch (e) {
        throw new Error("Filter type can be one of: " + getAllowedFilterShortcuts().join(", "));
      }
    }

    let column = new ColumnModel(cell, filter);
    columns.push(column);
  });

  return new ColumnsCollectionModel(columns);
}
