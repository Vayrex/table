/*import {Lexer} from "./src/app/conditions/parser/lexer";
import {RecursiveDescentParser} from "./src/app/conditions/parser/descent.parser";

let lexer = new Lexer('(true && true) && false || false || false && true && false'),
  parser = new RecursiveDescentParser(lexer);

let start = new Date();

for(let i = 0; i < 100; i++){
  parser.build();
}


console.log((new Date().getTime() - start.getTime()) / 1000);
console.log(parser.toString());*/

