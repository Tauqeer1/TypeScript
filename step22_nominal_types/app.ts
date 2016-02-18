/* When classess have private field then the comparing of 
both class object is of nominal type not of structure(duck) type
*/

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
        console.log(this.name + " is a animal and is eating");
    }
}
class Robot {
    private name : string;
    constructor(name : string){
        this.name = name;
    }
}


let h : Human = new Human("Tom");
let a : Animal = new Animal("Goat");
let r : Robot = new Robot("R2-D2");


let r0 : Robot = new Animal("Donkey");  //Now it is not possible because both have private field name

let h2 = h ;
h = a; //Only those property match that are public private property does not match

h.eat();    //Animal eating

let a2 = a;
let r2 = r;
r = a;

