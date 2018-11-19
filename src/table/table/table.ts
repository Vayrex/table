import {Paginator} from '../../paginator';

export class Table {

    protected _columns: any[];
    protected _paginator: Paginator;
    protected _currentRows: any[] = [];

    constructor(
        protected _rows: any[],
        protected _config?: any
    ) {
        this.init();
    }

    private init() {
        this.initPagination();
    }

    private initPagination() {
        this._paginator = new Paginator(this._rows.length, 10);
        this._currentRows = this._paginator.sliceArray(this._rows);
    }

    /************************************ Pagination **************************************************/
    public setPage(page: number) {
        try {
            this._paginator.setPage(page);
        } catch (e) {
            throw new Error(e.message);
        }
        this._currentRows = this._paginator.sliceArray(this._rows);
    }

    public listToLastPage() {
        let totalPages = this._paginator.getNumberOfPages();
        this.setPage(totalPages);
    }

    public listToFirstPage() {
        this.setPage(1);
    }

    public listToNextPage() {
        let currentPage = this._paginator.getCurrentPage();
        this.setPage(currentPage + 1);
    }

    public listToPrevPage() {
        let currentPage = this._paginator.getCurrentPage();
        this.setPage(currentPage - 1);
    }


    /************************************ Cells *******************************************************/
    public getRowAt(index: number) {

    }

    public swapRows(a: number, b: number) {

    }

    /************************************ Columns *****************************************************/
    public getColumnAt(index: number) {

    }

    public swapColumns(a: number, b: number) {

    }

    /************************************ Configurations **********************************************/
    public getConfig() {
        return this._config;
    }

    public toJSON() {

    }
}
