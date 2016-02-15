class Human {
    name : string;  //p1
    constructor(n : string){
        this.name = n;
    }
}
class Animal {
    name : string;
    age : number;
    constructor(n : string , a : number){
        this.name = n;
        this.age = a;
    }
    eat(quantity : number){
        console.log(this.name + " is animal and is eating ");
    }
}


let d = {name : "Tauqeer" , age : 4};   //possible literal object
let h : Human = {name : "Tauqeer" };     //Possible

let h1 : Human = d;     //1<2


console.log("d is instance of Human = " + (d instanceof Human));    //false
console.log("h1 is instance of Human = " + (h1 instanceof Human));  //false

let a : Animal = { name : "dog" , age : 0};     //Not possible properties are missing
let a1 : Animal = {name : "Cat" , age : 2, eat : function(age : number) : void{ console.log("This is object literal " + age);}}; //Possible due to structure or duck typing
a1.eat(2);