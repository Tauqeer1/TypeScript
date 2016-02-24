var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is a human and is eating");
    };
    return Human;
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is animal and is eating");
    };
    return Animal;
})();
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
})();
var h = new Human("Tom"); //Normal possible
var a = new Animal("Goat"); //Normal possible
var r = new Robot("R2-D2");
var r0 = new Animal("Donkey"); //Both are not equal due to private property name
var h2 = h; //Possible
h = a; //Due to private property both are not equal
h.eat(); //Animal eat method will be called
var a2 = a;
var r2 = r;
r = a; //
a = r2;
var BigAnimal = (function () {
    function BigAnimal(theName) {
        this.name = theName;
    }
    return BigAnimal;
})();
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
    }
    return Rhino;
})(BigAnimal);
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
})();
var animal = new BigAnimal("");
var rhino = new Rhino();
var emp = new Employee("");
animal = rhino; //Ok because of inheritance both are sharing the name variable
animal = emp; //Error
//Step 24
var passcode = "secret passcode";
var Employee1 = (function () {
    function Employee1() {
    }
    Object.defineProperty(Employee1.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee1;
})();
var employee = new Employee1();
employee.fullName = "Bob smith";
if (employee.fullName) {
}
// console.log(employee.fullName);
//Step 25 
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(3);
var grid2 = new Grid(5);
var MyClass = (function () {
    function MyClass() {
    }
    MyClass.foo = function () {
        console.log("Static foo");
    };
    return MyClass;
})();
MyClass.foo();
//# sourceMappingURL=app.js.map