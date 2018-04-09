import {Component, OnInit} from "@angular/core";
import {DataService} from "./services/data.service";
import {TableApp} from "./table/app/table.app";
import {IFilter} from "./table/app/columns/filters/interfaces";
import {QueryModel} from "./table/app/query/query.model";
import {ITableConfig} from "./table/app/config";

@Component({
  selector: "table-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  private config: ITableConfig;
  private data = [];

  private table: TableApp;
  private filters: IFilter[];
  private query: QueryModel;

  constructor(private service: DataService) {
    this.data = service.getData();
    this.config = service.getConfig();
  }

  public ngOnInit() {
    this.table = new TableApp(this.data, this.config);
    this.filters = this.table.getFilters();
    this.query = this.table.getQuery();
  }
}
