import {StreamTokenizer} from "./string.tokenizer";

export class Lexer {

  public static EOL = -3;
  public static EOF = -2;
  public static INVALID = -1;
  public static NONE = 0;
  public static OR = 1;
  public static AND = 2;
  public static NOT = 3;
  public static TRUE = 4;
  public static FALSE = 5;
  public static LEFT = 6;
  public static RIGHT = 7;
  public static TRUE_LITERAL = "true";
  public static FALSE_LITERAL = "false";

  private _tokenizer: StreamTokenizer;

  constructor(private _input: string) {
    let tokenizer = new StreamTokenizer(_input);

    tokenizer.lowerCaseMode(true);
    tokenizer.wordChars('a', 'z');
    tokenizer.wordChars('A', 'Z');
    tokenizer.wordChars('&','&');
    tokenizer.wordChars('|','|');

    tokenizer.whitespaceChars('\u0000', ' ');
    tokenizer.whitespaceChars('\n', '\t');
    tokenizer.ordinaryChar('(');
    tokenizer.ordinaryChar(')');
    tokenizer.ordinaryChar('!');

    this._tokenizer = tokenizer;
  }

  public nextSymbol() {

    let symbol: number,
      token = this._tokenizer.nextToken(),
      word = this._tokenizer.sval;

    switch (token) {
      case StreamTokenizer.TT_EOL:
        symbol = -3;
        break;
      case StreamTokenizer.TT_EOF:
        symbol = -2;
        break;
      case StreamTokenizer.TT_WORD: {
        switch (word){
          case Lexer.TRUE_LITERAL:
            symbol = Lexer.TRUE;
            break;
          case Lexer.FALSE_LITERAL:
            symbol = Lexer.FALSE;
            break;
          case '&&':
            symbol = Lexer.AND;
            break;
          case '||':
            symbol = Lexer.OR;
            break;
        }
        break;
      }
      case "(".charCodeAt(0):
        symbol = Lexer.LEFT;
        break;
      case ")".charCodeAt(0):
        symbol = Lexer.RIGHT;
        break;
      case "!".charCodeAt(0):
        symbol = Lexer.NOT;
        break;
      default:
        symbol = Lexer.INVALID;
    }

    return symbol;
  }
}