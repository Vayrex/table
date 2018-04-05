import {run} from "./tests";

function test(char: string) {
  switch (char) {
    case "a":
    case "b":
      return 1;
    case "c":
    case "d":
      return 2;
    default:
      return 3;
  }
}

let start = new Date();
run("Switch case", test, ["a"]);
run("Switch case", test, ["d"]);
run("Switch case", test, ["g"]);
console.log((new Date().getTime() - start.getTime()) / 1000);
