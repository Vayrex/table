import {IStringOperatorsMap} from "../interfaces/interface.operators.config";
import {StringOperators} from "../../columns/filters/string/string.operators";

export const DEFAULT_STRING_OPERATORS: IStringOperatorsMap = {
  "Contains": "*" as StringOperators,
  "Equals": "=" as StringOperators,
  "Starts with": "^" as StringOperators,
  "Ends with": "$" as StringOperators,
  "Regex": "match" as StringOperators,
};
