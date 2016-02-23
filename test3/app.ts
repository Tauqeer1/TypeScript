class Animal {
    name : string;
    constructor(theName : string){
        this.name = theName;
    }
    move(meters : number = 0){
        console.log(this.name + " moved " + meters + "m");
    }
}
class Snake extends Animal {
    constructor(name : string){
        super(name);
    }
    move(meters = 5){
        console.log("Slithering...");
        super.move(meters);
    }
    bite(){
        console.log("bites");
    }
}
class Horse extends Animal {
    constructor(name : string){
        super(name);
    }
    move(meters = 45){
        console.log("Galloping");
        super.move(meters);
    }
}

class Donkey extends Animal {
    distance : number ;
    constructor(name : string , distance : number){
        this.distance = distance;
        super(name);
    }
    move(meters = 45){
        console.log("moving");
        super.move(meters);
    }
}

class Cat extends Animal {
    constructor(name : string) {
        super(name);
    }
    move(meters = 1){
        console.log("Jumping");
        super.move(meters);
    }
}


let a : Animal = new Snake("Python");
// a.move(5);
// console.log(a instanceof Animal);   //true
// console.log(a instanceof Snake);    //true

let a1 : Animal = new Horse("Rocket");

let h : Horse = a1; //Possible due to duck typing and dont required explicit casting because both child and parent class have same properties

let h2 : Horse = a1 as Horse;   //We can do explicit casting but not required


let a2 : Animal = new Donkey("Worker",200);     //2 < 3 = true
let h3 : Donkey = a2  as Donkey;      //Explicit casting required because child object have additional properties and function
let h4 : Donkey = a2; //3 < 2 = false (Error explicit casting required )


let d1 : Horse = new Donkey("Worker", 200); //2 < 3 = true

// console.log(d1 instanceof Animal);  //true
// console.log(d1 instanceof Donkey);  //true
// console.log(d1 instanceof Horse);   //false

let d2 : Donkey = d1 as Donkey;  //3 < 2 = false (Eplicit casting required)

let s1 : Snake = <Snake> a;         //3 < 2 = false (Explicit casting required)
let s2 : Snake = a as Snake;    //Alternative syntax of explicit casting

let h1 : Horse = new Cat("kitten"); //Allowed in typescript

// console.log(h1 instanceof Horse);   //false
// console.log(h1 instanceof Animal);  //true
// console.log(h1 instanceof Cat);     //true


class A {
    name : string ;
    constructor(theName : string , age : number){
        this.name = theName;
        // console.log("A contructor");
    }
}
class B extends A {
    
}

let aa : A = new A("A",4);      //This is working as expected
let bb : B = new B("B",2);      //This is working too as child class use parent contructor
// console.log(bb.name);   //A
let c : B = new B();    //This is not working because child must use parent constructor
let d : B = new B("");  //This is also not working because child must use parent constructor with axact signature


class C {
    
}
class D extends C {
    name : string;
    constructor(theName : string , age : number) {
        this.name = theName;
        // console.log("D constructor");
        super();
    }
}
let c1 : C = new C();   //Working normally as expected
let d0 : D = new D();   //This is not working because child class constructor has two argument
let d4 : D = new D("D",3);      //This is working as expected


class E {
    name : string;
    constructor(theName : string , age : number){
        this.name = theName;
        // console.log("E constructor");
    }
    displayName() : void {
        console.log("Name = "+ this.name);
    }
}
class F extends E {
    name : string;
    constructor(theName : string){
        this.name = theName;
        // console.log("F constructor");
        super(theName , 4);     //Must call super with 2 argument
        
        // super("anothe",2);        //Also working may be some special case
    }
}

let e : E = new E("E",1);
let f : F = new F("my name ");
console.log("f name calling"+f.name);
// console.log(e.name);
f.displayName();    //mynam


class Animal1 {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
    move(meters : number){
        console.log(this.name + " moved " + meters + "m");
    }
} 

let ani = new Animal1("Cat");//.name;
console.log("ani " + ani.name); //private member and onl accessible with in the class