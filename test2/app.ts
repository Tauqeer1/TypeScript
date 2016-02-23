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
    
    constructor(n : string){
        this.name = n;
    }
    eat(){
        console.log(this.name + " is a animal and is eating");
    }
}

class WildAnimal {
    title : string;
    
    constructor(t : string){
        this.title = t;
    }
    eat(){
        console.log(this.title + " is a WildAnimal and is eating");
    }
}

class Robot {
    
    name : string;
    constructor(name : string){
        this.name = name;
    }
}


let h : Human = new Human("Tom");
let a : Animal = new Animal("Goat");
let r : Robot = new Robot("R2-D2");
let r0 : Robot = new Animal("ani");

// console.log(r0 instanceof Robot);   //false
// console.log(r0 instanceof Animal);  //true

let h2 = h; //possible
h = a;  //possible

// console.log(h instanceof Human);    //false
// console.log(h instanceof Animal);   //true

// h.eat();    //Call animal eat method

let a2 = a;
let r2 = r;
r = a; //1 < 2 = true
a = r;  //2 < 1 = false
a = r2; //2 < 1 = false

let hum : Human = new Animal("Dog");    //Possible
let wild : Animal = new WildAnimal("wild animal");  //Property missing or renamed

//step 19b

class Human1 {
    name : string ;
    constructor(name : string){
        this.name = name;
    }
}
class Animal1 {
    name : string;
    age : number;
    constructor(name : string, age : number){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(this.name + " is a human and is eating");
    }
}


let h1 = new Human(""); //Possible
let a1 = new Animal1("",2);     //possible
h1 = new Animal1("",2);     //Possible

// console.log(h1 instanceof Animal1);     //true
// console.log(h1 instanceof Human1);      //false

a1 = new Human1("");    //3 < 1 = false


let a3 = { name : "tauqeer"};
a3 = {name : "ahmed" , age : 23};   //not possible


//Step 19c 

class Human2 {
    name : string;
    constructor(n : string){
        this.name = n;
    }
}
class Animal2 {
    name : string;
    age : number;
    
    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    }
    eat(quantity : number){
        console.log(this.name + " is animal and is eating");
    }
}

let d = { name : "Tauqeer", age : 4};   //Possible normal
let h3 : Human2 = { name : "tauqeer"};      //Possible due to structure typing or duck typing
let h4 : Human2 = d;    //1 < 2 = true

let isHuman : boolean = h3 instanceof Human2;
// console.log(isHuman);   //false


let a4 : Animal2 = {name : "Cat" , age : 2};    //3 < 2 = false not possible missing property

let a5 : Animal2 = { name : "Dog" , age : 3 , eat : function(num : number){}};  //possible due to structure or duck typing

a5.eat();   //Not allowed parameter does not match
a5.eat(3);  //Now allowed



