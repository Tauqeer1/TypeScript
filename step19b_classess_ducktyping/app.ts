class Human {
    name : string;              //property 1
    
    constructor(name : string){
        this.name = name;
    }
    eat(){
        
    }
}
class Animal {
    name : string;                  //property 1
    age : number;                   //property 2
    constructor(name : string,age : number){
        this.name = name;
        this.age = age;
    }
    eat(){                          //property 3
        console.log(this.name + " is animal and is eating");   
    }
}
let h1 = new Human("Human");            //Normal object 
let a1 = new Animal("Animal Object",200);   //Normal Object

console.log("h1 is instance of of human = " + (h1 instanceof Human));   //true
console.log("h1 is instance of Animal = " + (h1 instanceof Animal));    //false


h1 = new Animal("aa",222);  

console.log("Now h1 is instance of Human = " +(h1 instanceof Human) );  //false
console.log("Now h1 is instace of Animal = " + (h1 instanceof Animal)); //true

console.log("a1 is instace of of animal = " + (a1 instanceof Animal));  //true

a1 = new Human("");         //Error

console.log("a1 is instance of animal " + (a1 instanceof Animal));  //false
console.log("a1 is instance of human " + (a1 instanceof Human));    //true


let a = {name : "Tauqeer"};
a = {name : "Ahmed",age : 22};

