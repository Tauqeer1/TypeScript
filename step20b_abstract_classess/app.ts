
abstract class A {
    foo() : number {
        console.log("Foo method class A");
        return this.bar();
    }
    abstract bar() : number;
}
class B extends A {
    bar(){
        return 1;
    }
}
let a : A = new A();    //Cannot create the instance of abstract class
let b : A = new B();
b.foo();    //Possible



