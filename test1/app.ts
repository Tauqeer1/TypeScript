class Human {
    name : string;      //p1
    constructor(n : string){
        this.name = n;
    }
    eat(){      //p2
        console.log(this.name + " is a human and is eating");
    }
}
class Animal {
    name : string;      //p1
    constructor(n : string){
        this.name = n;
    }
    eat(){      //p2
        console.log(this.name + " is a animal and is eating");
    }
}
class WildAnimal {
    title : string;     //p1
    constructor(t : string){
        this.title = t;
    }
    eat(){      //p2
        console.log(this.title + " is a wild animal and is eating");
    }
}
class Robot {
    name : string;  //p1
    constructor(n : string){
        this.name = n;
    }
}


//Human has 2 property
//Animal has 2 property
//WildAnimal has 2 property
//Robot has 1 property

let h : Human = new Human("Tom");   //Possible
let a : Animal = new Animal("Goat");    //Possible
let r : Robot = new Robot("R2-D2");     //Possible
let r0 : Robot = new Animal("Donkey");  //Possible in typescript

// console.log("r0 is instance of Robot " + (r0 instanceof Robot));    //False
// console.log("r0 is instance of Animal " + (r0 instanceof Animal));  //True
let h2 = h; //Possible
// h2.eat();
// console.log("h is instance of Human = " + (h instanceof Human));    //True
// console.log("h2 is instance of Human = " + (h2 instanceof Human));  //True
h = a;
// console.log("h is instance of Human = " + (h instanceof Human));  //false
// console.log("h is instance of Animal = " + (h instanceof Animal));  //true

// h.eat();    //Goat is eating
// console.log("name = "+h.name);  //Goat
// a.eat();    //Goat is eating
let a2 = a;
// a2.eat();   //animal

let a3 = h;
// a3.eat();   //Animal
// a = r;      //2 < 1 Error
// let wild : Animal = new WildAnimal("WildAnimal");   //Property name match error



class A {
    protected name : string;
    constructor(name){
        console.log("Parent constructor");
        this.name = "Tauqeer";
    }
}
class B extends A {
    constructor(){
        super(name);
        console.log(name);
    }
   
}
let a1 : A = new A("sds");
let b : B = new B();
// console.log(b.name);

