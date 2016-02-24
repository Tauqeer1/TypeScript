class Human {
    private name : string;
    constructor(name : string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is a human and is eating");
    }
}
class Animal {
    private name : string;
    constructor(name : string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is animal and is eating");
    }
}
class Robot {
    private name : string;
    constructor(name : string){
        this.name = name;
    }
}

let h : Human = new Human("Tom");   //Normal possible
let a : Animal = new Animal("Goat");    //Normal possible
let r : Robot = new Robot("R2-D2");


let r0 : Robot = new Animal("Donkey");      //Both are not equal due to private property name

let h2 = h; //Possible
h = a;      //Due to private property both are not equal
h.eat();    //Animal eat method will be called

let a2 = a;
let r2 = r;

r = a;  //
a = r2;


class BigAnimal {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
}
class Rhino extends BigAnimal {
    constructor(){
        super("Rhino");
    }
}
class Employee {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
}

let animal = new BigAnimal("");
let rhino = new Rhino();
let emp = new Employee("");


animal = rhino;     //Ok because of inheritance both are sharing the name variable
animal = emp ;      //Error



//Step 24

let passcode = "secret passcode";

class Employee1 {
    private _fullName : string;
    
    get fullName() : string {
        return this._fullName;
    }
    set fullName(newName : string){
        if(passcode && passcode == "secret passcode"){
            this._fullName = newName;
        }
        else {
            console.log("Error");
        }
    }  
}
let employee = new Employee1();
employee.fullName = "Bob smith";
if(employee.fullName){
    // console.log(employee.fullName);
}
// console.log(employee.fullName);


//Step 25 

class Grid {
    static origin = { x : 0 , y : 0};
    calculateDistanceFromOrigin(point : {x : number , y : number}){
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y)
        
        return Math.sqrt(xDist * xDist + yDist * yDist)/this.scale;
    }
    constructor(public scale : number){}
}
let grid1 = new Grid(3);
let grid2 = new Grid(5);


class MyClass {
    static foo(){
        console.log("Static foo");
    }
}
MyClass.foo();
