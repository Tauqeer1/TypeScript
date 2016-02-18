//constructor cannot be static
//variable and method of a class can be static


class Grid {
    static orgin = { x : 0 , y : 0};
    calculateDistanceFromOrigin(point : {x : number , y : number}){
        let xDist = (point.x - Grid.orgin.x);
        let yDist = (point.y - Grid.orgin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale ;
    }
    constructor(public scale : number){
        
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x : 10 , y : 20}));
console.log(grid2.calculateDistanceFromOrigin({x : 20 , y : 20}));


class myClass {
    static foo(){
        console.log("foo");
    }
}
myClass.foo();

