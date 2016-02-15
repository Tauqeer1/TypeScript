class MyClass1 {
    text : string;
}
class MyClass2 {
    text : string;
    num : number;
   
}

let myClass1 : MyClass1 = new MyClass1(); //No Error 
let myClass2 : MyClass2 = new MyClass2(); //No Error 

// myClass1 = myClass2 ;   //Possible in typescript because of duck typing
// myClass2 = myClass1;    //Not possible 

class A {
    text : string;
}
class B{
    text : number;
}
let a1 : A = new A();
let b1 : B = new B();

// a1 = b1;    //Not assignable because both classes have different property type

class C {
    text : string;
    text1 : number;
}
class D {
    text : string;
    text1 : number;
}
let c : C = new C();
let d : D = new D();

c = d;

let x = (a : number) => 0;
let y = (b : number , s : string) => 0;

x = y;  //Error
y = x;

let x1 = {name : "tauqeer",age : 23};
let x2 = {age : 22,name : "ahmed"};
x1 = x2;
x2 = x1;