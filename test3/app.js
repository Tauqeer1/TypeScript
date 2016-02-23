var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    Snake.prototype.bite = function () {
        console.log("bites");
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("Galloping");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var Donkey = (function (_super) {
    __extends(Donkey, _super);
    function Donkey(name, distance) {
        this.distance = distance;
        _super.call(this, name);
    }
    Donkey.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log("moving");
        _super.prototype.move.call(this, meters);
    };
    return Donkey;
})(Animal);
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
    }
    Cat.prototype.move = function (meters) {
        if (meters === void 0) { meters = 1; }
        console.log("Jumping");
        _super.prototype.move.call(this, meters);
    };
    return Cat;
})(Animal);
var a = new Snake("Python");
// a.move(5);
// console.log(a instanceof Animal);   //true
// console.log(a instanceof Snake);    //true
var a1 = new Horse("Rocket");
var h = a1; //Possible due to duck typing and dont required explicit casting because both child and parent class have same properties
var h2 = a1; //We can do explicit casting but not required
var a2 = new Donkey("Worker", 200); //2 < 3 = true
var h3 = a2; //Explicit casting required because child object have additional properties and function
var h4 = a2; //3 < 2 = false (Error explicit casting required )
var d1 = new Donkey("Worker", 200); //2 < 3 = true
// console.log(d1 instanceof Animal);  //true
// console.log(d1 instanceof Donkey);  //true
// console.log(d1 instanceof Horse);   //false
var d2 = d1; //3 < 2 = false (Eplicit casting required)
var s1 = a; //3 < 2 = false (Explicit casting required)
var s2 = a; //Alternative syntax of explicit casting
var h1 = new Cat("kitten"); //Allowed in typescript
// console.log(h1 instanceof Horse);   //false
// console.log(h1 instanceof Animal);  //true
// console.log(h1 instanceof Cat);     //true
var A = (function () {
    function A(theName, age) {
        this.name = theName;
        // console.log("A contructor");
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
var aa = new A("A", 4); //This is working as expected
var bb = new B("B", 2); //This is working too as child class use parent contructor
// console.log(bb.name);   //A
var c = new B(); //This is not working because child must use parent constructor
var d = new B(""); //This is also not working because child must use parent constructor with axact signature
var C = (function () {
    function C() {
    }
    return C;
})();
var D = (function (_super) {
    __extends(D, _super);
    function D(theName, age) {
        this.name = theName;
        // console.log("D constructor");
        _super.call(this);
    }
    return D;
})(C);
var c1 = new C(); //Working normally as expected
var d0 = new D(); //This is not working because child class constructor has two argument
var d4 = new D("D", 3); //This is working as expected
var E = (function () {
    function E(theName, age) {
        this.name = theName;
        // console.log("E constructor");
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
        // console.log("F constructor");
        _super.call(this, theName, 4); //Must call super with 2 argument
        // super("anothe",2);        //Also working may be some special case
    }
    return F;
})(E);
var e = new E("E", 1);
var f = new F("my name ");
console.log("f name calling" + f.name);
// console.log(e.name);
f.displayName(); //mynam
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m");
    };
    return Animal1;
})();
var ani = new Animal1("Cat"); //.name;
console.log("ani " + ani.name);
//# sourceMappingURL=app.js.map