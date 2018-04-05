import {run} from "./tests";

let map = {
  "a": 1,
  "b": 1,
  "c": 2,
  "d": 2
};

function test(char: string) {
  return map[char] || 3;
}

let start = new Date();
run("Map keys", test, ["b"]);
run("Map keys", test, ["d"]);
run("Map keys", test, ["g"]);
console.log((new Date().getTime() - start.getTime()) / 1000);
