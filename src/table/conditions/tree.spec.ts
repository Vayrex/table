import {CNode, FNode} from "./tree";

function tree(data: any[]) {
  let left, right, operator;

  if (Array.isArray(data[0])) {
    left = tree(data[0]);
    operator = data[1];
    right = new FNode(data[2]);
  } else if (data.length == 3) {
    left = new FNode(data[0]);
    operator = data[1];
    right = new FNode(data[2]);
  } else {
    left = new CNode(new FNode(data[0]), new FNode(data[2]), data[1]);
    operator = data[3];
    right = new FNode(data[4]);
  }

  return new CNode(left, right, operator);
}

describe("Logical tree", () => {


  test("must return same tree", () => {
    let a = ["a", "&&", "b", "&&", "c"],
      b = [["a", "&&", "b"], "&&", "c"];

    let result = new CNode(new CNode(new FNode("a"), new FNode("b"), "&&"), new FNode("c"), "&&");

    expect(tree(a)).toEqual(result);
    expect(tree(b)).toEqual(result);
  });

  test('must return same results', () => {
    let a = ["a", "&&", "b", "&&", "c", "&&","d"],
      b = [["a", "&&", "b"], "&&", "c","&&","d"],
      c = [[["a", "&&", "b"], "&&", "c"], "&&","d"];

    expect(tree(c)).toEqual(tree(a));
  });
});



