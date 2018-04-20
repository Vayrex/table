import {Component, Input, OnInit} from "@angular/core";
import {QueryModel} from "../../app/query/query.model";
import {IFilter} from "../../app/columns/filters/interfaces";


@Component({
  selector: "table-query",
  templateUrl: "./query.component.html",
  styleUrls: ["./query.component.scss"]
})
export class QueryComponent implements OnInit {

  @Input("query")
  private query: QueryModel;

  private filters: IFilter[] = [];

  public ngOnInit() {
    this.filters = this.query.getFilters();
  }

}
