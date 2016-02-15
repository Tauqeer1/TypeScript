var MyClass1 = (function () {
    function MyClass1() {
    }
    return MyClass1;
})();
var MyClass2 = (function () {
    function MyClass2() {
    }
    return MyClass2;
})();
var myClass1 = new MyClass1(); //No Error 
var myClass2 = new MyClass2(); //No Error 
// myClass1 = myClass2 ;   //Possible in typescript because of duck typing
// myClass2 = myClass1;    //Not possible 
var A = (function () {
    function A() {
    }
    return A;
})();
var B = (function () {
    function B() {
    }
    return B;
})();
var a1 = new A();
var b1 = new B();
// a1 = b1;    //Not assignable because both classes have different property type
//# sourceMappingURL=main.js.map