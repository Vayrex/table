import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {FiltersComponent, QueryComponent} from "./angular-ui";
import {DataService} from "./services/data.service";
import {StringFilterComponent} from "./angular-ui/filters/string.filter/string.filter.component";


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    QueryComponent,
    StringFilterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
