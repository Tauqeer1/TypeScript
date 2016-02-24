
interface IShape{
    color : string;
    
}
interface ISquare extends IShape {
    sideLength : number;
}


let square = <ISquare>{};
square.color = "blue";
square.sideLength = 10 ;
square.a = 5;       //Error not defined


//An interface can extends multiple interface

interface IPenStroke {
    penWidth : number;
}
interface ISquare1 extends IShape , IPenStroke {
    sideLength : number;
}

let square1 = { color : "blue" , sideLength : 10 , penWidth : 10} as ISquare1;   //Alternative for casting



