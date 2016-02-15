class Human {
    name : string;
    constructor(name : string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is a human and is eating");
    }
}
class Animal {
    name : string;
    constructor(name : string){
        this.name = name;
    }
    eat(){
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal {
    title : string;
    constructor(title : string){
        this.title = title;
    }
    eat(){
        console.log(this.title + " is a Wild Animal and is eating");
    }
}
class Robot {
    name : string;
    constructor(name : string){
        this.name = name;
    }
}
let h : Human = new Human("Human");
let a : Animal = new Animal("Animal");
let r : Robot = new Robot("Robot");
let r0 : Robot = new Animal("Donkey");   //Should not possible but it is not giving any error and is running
// console.log(r0.name);

let isRobot = r0 instanceof Robot;
// console.log(isRobot);   //false
let isAnimal = r0 instanceof Animal;
// console.log(isAnimal);  //true

let h2 = h;     //Possible
h = a;  //Possible
// h.eat();    //Animal

let a2 = a ;    //Possible
// a2.eat();   //Animal

let r2 = r ;
// a = r2;     //property missing error
r = a;  //Possible
// r.eat();

let hum : Human = new Animal("Dog");    //Possible in typescript
// let wild : Animal = new WildAnimal(""); //Error missing name property in WildAnimal