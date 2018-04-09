import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {IFilter} from "../../../app/columns/filters/interfaces/index";
import {filterTypes, isOfFilterType} from "../../../app/columns/filters";

@Component({
  selector: "table-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit, AfterViewInit {

  @Input("filters")
  private filters: IFilter[] = [];

  public ngOnInit() {

  }

  public ngAfterViewInit() {

  }

  public isOfFilterType(type: filterTypes, filter: IFilter) {
    return isOfFilterType(type, filter);
  }
}
