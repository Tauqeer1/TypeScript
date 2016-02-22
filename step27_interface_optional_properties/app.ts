
interface SquareConfig {
    color? : string;
    width? : number
}

function createSquare(config : SquareConfig) : {color : string ; area : number}{
    
    let newSquare = { color : "White",area : 100};
    
    if(config.color){
        newSquare.color = config.color;
    }
    if(config.width){
        newSquare.area = config.width * config.width;
    }
    
    return newSquare;
}


let mySquare = createSquare({width : 2});
console.log(mySquare.color);    //white
console.log(mySquare.area); //4