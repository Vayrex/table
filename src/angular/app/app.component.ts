import {Component} from '@angular/core';
import {Table} from '../../table';
import {DATA} from '../../examples';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public title = 'table';
    public table: Table;

    public ngOnInit() {

        console.log(Table, DATA);
    }
}
