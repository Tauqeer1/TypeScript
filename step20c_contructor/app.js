var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//case 1
/* if parent class provide constructor and child class doesnot provide
 then child class will use parent class constructor and child object creation will
 required use of parent's constructor parameters */
var A = (function () {
    function A(theName, age) {
        this.name = theName;
        console.log("A constructor");
    }
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    return B;
})(A);
var a = new A("A", 4); //Possible working normally
var b = new B("C", 5); //child class must use parent class constructor
// let c : B = new B();        //Not possible child class must use parent's class constructor
// let d : B = new B("B");     //Not possible
//case 2
/* If parent class does not provide constructor and child class provide constrcutor then
child class must call super() within child's class constructor
call to super can be at any line in constructor unlike any other object oriented
language with call to super must be as first line */
var C = (function () {
    function C() {
    }
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D(theName, age) {
        this.name = theName;
        console.log("D constructor");
        _super.call(this);
    }
    return D;
})(C);
var aa = new C(); //Possible working as expected
// let bb : D = new D();   //Not possible constrcutor signature doesnot match
var cc = new D("sdsd", 5); //Working as expected
//case 3
/* If parent class and child class both provide constructor then child class
must call super with same parameters as they are in parent's constructor
call to super can be at any line in constructor unlike any other object
oriented language with call to super must be as first line */
var E = (function () {
    function E(theName, age) {
        this.name = theName;
        console.log("E constrcutor");
    }
    E.prototype.displayName = function () {
        console.log("Name = " + this.name);
    };
    return E;
})();
var F = (function (_super) {
    __extends(F, _super);
    function F(theName) {
        this.name = theName;
        console.log("F constrcutor");
        _super.call(this, theName, 4); //must call super with two arguments
        // super("hello",5);    //Multiple super call working , No error here , seem some special case
    }
    return F;
})(E);
var e = new E("sdsds", 2); //Working as expected
var f = new F("F"); //Working as expected
f.displayName(); //F
//# sourceMappingURL=app.js.map