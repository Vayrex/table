import {Observable} from "rxjs/Observable";

export class Messanger {

  public onFiltersChanged = new Observable();
  public onQueryModelChanged = new Observable();
}
