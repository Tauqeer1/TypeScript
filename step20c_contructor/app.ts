
//case 1
/* if parent class provide constructor and child class doesnot provide
 then child class will use parent class constructor and child object creation will 
 required use of parent's constructor parameters */
class A {
    name : string;
    constructor(theName : string , age : number){
        this.name = theName;
        console.log("A constructor");
    }
}
class B extends A {
    
}
let a : A = new A("A",4);   //Possible working normally
let b : B = new B("C",5);   //child class must use parent class constructor
// let c : B = new B();        //Not possible child class must use parent's class constructor
// let d : B = new B("B");     //Not possible



//case 2
/* If parent class does not provide constructor and child class provide constrcutor then 
child class must call super() within child's class constructor
call to super can be at any line in constructor unlike any other object oriented 
language with call to super must be as first line */

class C {
    
}
class D extends C {
    name : string;
    constructor(theName : string , age : number){
        this.name = theName;
        console.log("D constructor");
        super();
    }
}

let aa : C = new C();   //Possible working as expected
// let bb : D = new D();   //Not possible constrcutor signature doesnot match
let cc : D = new D("sdsd",5);   //Working as expected


//case 3
/* If parent class and child class both provide constructor then child class 
must call super with same parameters as they are in parent's constructor    
call to super can be at any line in constructor unlike any other object 
oriented language with call to super must be as first line */

class E {
    name : string;
    constructor(theName : string,age : number){
        this.name = theName;
        console.log("E constrcutor");
    }
    displayName() : void {
        console.log("Name = " + this.name);
    }
}
class F extends E {
    name : string;
    constructor(theName : string){
        this.name = theName;
        console.log("F constrcutor");
        super(theName,4);   //must call super with two arguments
        // super("hello",5);    //Multiple super call working , No error here , seem some special case
        
    }
}

let e : E = new E("sdsds",2);   //Working as expected
let f : F = new F("F");         //Working as expected
f.displayName();    //F