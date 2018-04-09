import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {QueryModel} from "../../app/query/query.model";


@Component({
  selector: "table-query",
  templateUrl: "./query.component.html",
  styleUrls: ["./query.component.scss"]
})
export class QueryComponent implements OnInit, AfterViewInit {

  @Input("query")
  private query: QueryModel;

  public ngOnInit() {

  }

  public ngAfterViewInit() {

  }
}
