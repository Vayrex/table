import {IPaginationConfig, ITableConfig} from "../table/app/config";
import {IColumnConfigItem} from "../table/app/config/interfaces/interface.columns.config";


export class DataService {

  public getConfig(): ITableConfig {
    return {
      "table": this.getTableConfig(),
      "columns": this.getColumnsConfig(),
      "pagination": this.getPaginationConfig()
    };
  }

  public getPaginationConfig(): IPaginationConfig {
    return {
      page: 1,
      perPage: 10
    };
  }

  public getTableConfig() {
    return false;
  }

  public getColumnsConfig(): IColumnConfigItem[] {
    return [
      {
        title: "Name",
        filter: {
          type: "string",
          defaultOperator: "="
        },
        cell: {
          valueGetter: "name",
          valueFormatter: (v: string) => v.toUpperCase()
        }
      }, {
        title: "Surname",
        filter: {
          type: "string",
          defaultOperator: "="
        },
        cell: {
          valueGetter: "surname",
          valueFormatter: (v: string) => v.toUpperCase()
        }
      }, {
        title: "Email",
        filter: {
          type: "string",
          defaultOperator: "="
        },
        cell: {
          valueGetter: "email",
          valueFormatter: (v: string) => v.toUpperCase()
        }
      }, {
        title: "Skype",
        filter: {
          type: "string",
          defaultOperator: "="
        },
        cell: {
          valueGetter: "skype",
          valueFormatter: (v: string) => v.toUpperCase()
        }
      }, {
        title: "Viber",
        filter: {
          type: "string",
          defaultOperator: "="
        },
        cell: {
          valueGetter: "viber",
          valueFormatter: (v: string) => v.toUpperCase()
        }
      }];
  }

  public getData() {
    return [{
      "name": "test1",
      "surname": "test1",
      "email": "test1",
      "skype": "test1",
      "viber": "test1"
    }, {
      "name": "test2",
      "surname": "test2",
      "email": "test2",
      "skype": "test2",
      "viber": "test2"
    }, {
      "name": "test3",
      "surname": "test3",
      "email": "test3",
      "skype": "test3",
      "viber": "test3"
    }];
  }
}
