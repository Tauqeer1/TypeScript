
/* To determine if two classes are assignable, TypeScript uses what it 
calls "structural subtyping." With structural subtyping, TypeScript 
compares the properties and methods on the two objects. If the variable on the 
left-hand side of the equals sign has all the properties and the methods 
of the object on the right-hand side of the equals sign, then the two objects are assignable. 
This is a form of "duck typing" (from the old saying: "If it looks like a duck, walks 
like a duck and quacks like a duck, then it's a duck"). */

/*With structural subtyping, it's perfectly OK for the object on the left-hand side 
to have more properties than the object on the right, it just can't have fewer properties. 
Obviously, any class that derives from another class will have all of the properties of 
the base interface, so my second line (assigning the base class to a variable type to the 
extended class) works just fine. */
class Animal {
    name : string;          //p1
    constructor(theName : string){
        this.name = theName;
    }
    move(meters : number = 0){      //p2
        console.log(this.name + " moved " + meters + "m");
    }
}
class Snake extends Animal {
    constructor(name : string){
        super(name);
    }
    move(meters = 5){       //p1
        console.log("Slithring...");
        super.move(meters);
    }
    bite(){             //p2
        console.log("bites");
    }
}
class Horse extends Animal {
    constructor(name : string){
        super(name);
    }
    move(meters = 45){  //p1
        // alert("Galloping...");
        super.move(meters);
    }
}
class Donkey extends Animal {
    distance : number;      //p1
    constructor(name : string , dist : number){
        super(name);
        this.distance = dist;
    }
    move(meters = 1){       //p2
        // alert("Jumping...");
        super.move(meters);
    }
}

let a : Animal = new Snake("Python");
// a.move(5);      //Snake method is called not Animal because of polymorphism

let a1 : Animal = new Horse("Rocket");
let h : Horse = a1;     //explicit casting not required because child class have same properties
let h2 : Horse = a1 as Horse;   //explicit will work but not needed


let a2 : Animal = new Donkey("Worker",100);
let h3 : Donkey = a2 as Donkey; //explicit casting because child object have additional properties
let h4 : Donkey = h3;       //Possible h3 and h4 both are of type Donkey
let h5 : Donkey = a2;       //Not possible explicit casting are required
// console.log("h3 distance  " +h3.distance);   //100
// console.log("h3 name " + h3.name);  //Worker
// h3.move();      //1
// console.log("h3 instance of Animal " + (h3 instanceof Animal)); //true
// console.log("h3 instance of Donkey " + (h3 instanceof Donkey)); //true

let d1 : Horse = new Donkey("Worker",50);   //Possible 2 prop in horse < 3 prop in Donkey


// console.log("d1 is instance of Horse " +(d1 instanceof Horse));     //false
// console.log("d1 is instance of Donkey " +(d1 instanceof Donkey));   //true
// console.log("d1 is instance of Animal " + (d1 instanceof Animal));  //true


let d2 : Donkey = <Donkey> d1 ;     //explicit casting alternative way
let s1 : Snake = a as Snake;    //explicit casting
let s2 : Snake = <Snake> a;     //alternative syntax of explicit casting
class A {
    constructor(){
        this.MyVirtualMethod();
    }
    protected MyVirtualMethod() : void{
        console.log("A");
    }
}

class B extends A {
    
    private testString : string = "B";
    public MyVitualMethod() : void{
        console.log(this.testString);
    }
}
// let b = new B();
// b.MyVitualMethod();


class Foo{
    
}
class Bar extends Foo {
    
}
class Bas {
    
}
var bar = new Bar();
// console.log("bar instace of Foo " +(bar instanceof Foo));   //true
// console.log("bar instance of Bar " + (bar instanceof Bar)); //true
// console.log("bar instance of Bas " + (bar instanceof Bas)); //false
// console.log("bar instance of Objct " + (bar instanceof Object));    //true


class Dog{
    woof(){
        console.log("Dog woof");
    }
}
class Cat {
   woof(){
       console.log("Cat woof");
   } 
}
class Parrot {
    woof(){
        console.log("Parrot woof");
    }
}
let pet : Cat | Dog ;

pet = new Parrot();

//type guard
if(pet instanceof Dog){
    console.log("pet is instance of Dog " +(pet instanceof Dog));
    pet.woof();
}
else{
    console.log("pet is not an instance of Dog");
}