export class TableView{
  private columns:string[];

  constructor(){
    this.columns=[];
  }
  
  addColumn(columnName:string){
    this.columns.push(columnName);
  }

  getColumns():string[]{
    return this.columns;
  }
}