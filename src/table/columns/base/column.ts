export class Column {

    constructor(
        protected _cell: any,
        protected _filter?: any
    ) {

    }

    protected hasFilter(): boolean {
        return !!this._filter;
    }

    protected setFilter(filter: any){
        this._filter = filter;
    }

    protected getFilter(){
        return this._filter;
    }

    protected getCell(){

    }
}
