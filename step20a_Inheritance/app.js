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
        console.log("Slithring...");
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
        // alert("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var Donkey = (function (_super) {
    __extends(Donkey, _super);
    function Donkey(name, dist) {
        _super.call(this, name);
        this.distance = dist;
    }
    Donkey.prototype.move = function (meters) {
        if (meters === void 0) { meters = 1; }
        // alert("Jumping...");
        _super.prototype.move.call(this, meters);
    };
    return Donkey;
})(Animal);
var a = new Snake("Python");
// a.move(5);      //Snake method is called not Animal because of polymorphism
var a1 = new Horse("Rocket");
var h = a1; //explicit casting not required because child class have same properties
var h2 = a1; //explicit will work but not needed
var a2 = new Donkey("Worker", 100);
var h3 = a2; //explicit casting because child object have additional properties
var h4 = h3; //Possible h3 and h4 both are of type Donkey
var h5 = a2; //Not possible explicit casting are required
// console.log("h3 distance  " +h3.distance);   //100
// console.log("h3 name " + h3.name);  //Worker
// h3.move();      //1
// console.log("h3 instance of Animal " + (h3 instanceof Animal)); //true
// console.log("h3 instance of Donkey " + (h3 instanceof Donkey)); //true
var d1 = new Donkey("Worker", 50); //Possible 2 prop in horse < 3 prop in Donkey
// console.log("d1 is instance of Horse " +(d1 instanceof Horse));     //false
// console.log("d1 is instance of Donkey " +(d1 instanceof Donkey));   //true
// console.log("d1 is instance of Animal " + (d1 instanceof Animal));  //true
var d2 = d1; //explicit casting alternative way
var s1 = a; //explicit casting
var s2 = a; //alternative syntax of explicit casting
var A = (function () {
    function A() {
        this.MyVirtualMethod();
    }
    A.prototype.MyVirtualMethod = function () {
        console.log("A");
    };
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
        this.testString = "B";
    }
    B.prototype.MyVitualMethod = function () {
        console.log(this.testString);
    };
    return B;
})(A);
// let b = new B();
// b.MyVitualMethod();
var Foo = (function () {
    function Foo() {
    }
    return Foo;
})();
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        _super.apply(this, arguments);
    }
    return Bar;
})(Foo);
var Bas = (function () {
    function Bas() {
    }
    return Bas;
})();
var bar = new Bar();
// console.log("bar instace of Foo " +(bar instanceof Foo));   //true
// console.log("bar instance of Bar " + (bar instanceof Bar)); //true
// console.log("bar instance of Bas " + (bar instanceof Bas)); //false
// console.log("bar instance of Objct " + (bar instanceof Object));    //true
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.woof = function () {
        console.log("Dog woof");
    };
    return Dog;
})();
var Cat = (function () {
    function Cat() {
    }
    Cat.prototype.woof = function () {
        console.log("Cat woof");
    };
    return Cat;
})();
var Parrot = (function () {
    function Parrot() {
    }
    Parrot.prototype.woof = function () {
        console.log("Parrot woof");
    };
    return Parrot;
})();
var pet;
pet = new Parrot();
//type guard
if (pet instanceof Dog) {
    console.log("pet is instance of Dog " + (pet instanceof Dog));
    pet.woof();
}
else {
    console.log("pet is not an instance of Dog");
}
//# sourceMappingURL=app.js.map