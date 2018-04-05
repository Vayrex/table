import {Table} from "./table";

describe.skip("Table", () => {

  let table: Table;

  beforeEach(() => {
    let data = [
      {id: 1, name: "a"},
      {id: 2, name: "b"}
    ];
    table = new Table(data);
  });

  describe("paginatable", () => {

    describe("should be able to set per page", () => {

      it("should throw an error. (perPage = 0)", () => {
        expect(() => {
          table.setPerPage(0)
        }).toThrow();
      });

      it("should return one item. (perPage = 1)", () => {
        table.setPerPage(1);
        expect(table.getCurrentData().length).toEqual(1);
      });

      it("should return 2 items. (perPage = 2)", () => {
        table.setPerPage(1);
        expect(table.getCurrentData().length).toEqual(2);
      });

    });

  });
});