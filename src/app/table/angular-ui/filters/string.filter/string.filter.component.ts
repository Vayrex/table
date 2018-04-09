import {Component, Input, OnInit} from "@angular/core";
import {StringFilterModel} from "../../../app/columns/filters/string/string.filter";
import {IStringOperatorsMap} from "../../../app/config/interfaces/interface.operators.config";

@Component({
  selector: "table-string-filter",
  templateUrl: "./string.filter.component.html",
  styleUrls: ["./string.filter.component.scss"]
})
export class StringFilterComponent implements OnInit {

  @Input("filter")
  private filter: StringFilterModel;

  private operators: IStringOperatorsMap;
  private operatorNames: string[] = [];
  private selectedOperatorName = "";

  public ngOnInit() {
    this.operators = this.filter.getOperators();
    this.operatorNames = Object.keys(this.operators);
    let operator = this.filter.getOperator();
    for (let key in this.operators) {
      if (operator === this.operators[key]) {
        this.selectedOperatorName = key;
        break;
      }
    }
  }

  public setOperator(operatorName: string) {
    try {
      this.filter.setOperator(this.operators[operatorName]);
      this.selectedOperatorName = operatorName;
    } catch (e) {
      console.log(e);
    }
  }
}
