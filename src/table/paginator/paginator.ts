export class Paginator {

  private _page: number;
  private _perPage: number;
  private _numberOfPages: number;

  constructor(
    private _totalRecords: number,
    perPage = 1,
    page = 1
  ) {
    this.setPerPage(perPage);
    this.setPage(page);
  }

  public setTotalNumberOfRecords(totalRecords) {
    this._totalRecords = totalRecords;
    this._page = 1;
    this.setNumberOfPages();
  }

  public setPage(page: number) {
    if (page <= 0) {
      throw new Error("Page can not be negative or zero");
    }
    if (page > this._numberOfPages) {
      throw new Error("Page can not be greater then total number of pages");
    }
    this._page = page;
  }

  public setPerPage(perPage: number) {
    if (perPage <= 0) {
      throw new Error("Records per page can not be negative or zero");
    }
    this._perPage = perPage;
    this._page = 1;
    this.setNumberOfPages();
  }

  private setNumberOfPages() {
    this._numberOfPages = Math.ceil(this._totalRecords / this._perPage) || 1;
  }

  public getRecordsOnPage() {

    if (this._totalRecords == 0) {
      return 0;
    }

    if (this._page == this._numberOfPages) {
      let left = this._totalRecords % this._perPage;
      return (left) ? left : this._perPage;
    }

    return this._perPage;
  }

  public getRecordsPerPage() {
    return this._perPage;
  }

  public getCurrentPage() {
    return this._page;
  }

  public getNumberOfPages() {
    return this._numberOfPages;
  }

  public getLimitOffset(): [number, number] {
    let limit = this._perPage,
      offset = this._totalRecords ? (this._page + 1) * this._perPage : 0;
    return [limit, offset];
  }

  public getSlice(): [number, number] {
    let start = (this._page - 1) * this._perPage,
      end = this._totalRecords ? start + this._perPage : 0;
    return [start, end];
  }

  public sliceArray<T>(data: T[]): T[] {
    return Array.prototype.slice.apply(data, this.getSlice());
  }
}


