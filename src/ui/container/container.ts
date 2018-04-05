import {Operator} from "../operator/operator";
import {Cell} from "../cell/cell";

class Container {



  constructor(
    private _cells: any[],
    private _operators?: Operator[]
  ){

  }

  private init(){
    if(this._operators){
      if(this._operators.length != (this._cells.length - 1)){
        throw new Error('Number of operators must be one less than number of cells.');
      }
    } else {
      this.generateOperators();
    }
  }

  private generateOperators(){
    this._operators = Array.apply(null, Array(this._cells.length-1)).map(() => Operator.create());
  }

  public addLayer(){

  }

  public swapCells(a:Cell, b:Cell){

  }
}
