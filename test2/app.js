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
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is a animal and is eating");
    };
    return Animal;
})();
var WildAnimal = (function () {
    function WildAnimal(t) {
        this.title = t;
    }
    WildAnimal.prototype.eat = function () {
        console.log(this.title + " is a WildAnimal and is eating");
    };
    return WildAnimal;
})();
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
})();
var h = new Human("Tom");
var a = new Animal("Goat");
var r = new Robot("R2-D2");
var r0 = new Animal("ani");
// console.log(r0 instanceof Robot);   //false
// console.log(r0 instanceof Animal);  //true
var h2 = h; //possible
h = a; //possible
// console.log(h instanceof Human);    //false
// console.log(h instanceof Animal);   //true
// h.eat();    //Call animal eat method
var a2 = a;
var r2 = r;
r = a; //1 < 2 = true
a = r; //2 < 1 = false
a = r2; //2 < 1 = false
var hum = new Animal("Dog"); //Possible
var wild = new WildAnimal("wild animal"); //Property missing or renamed
//step 19b
var Human1 = (function () {
    function Human1(name) {
        this.name = name;
    }
    return Human1;
})();
var Animal1 = (function () {
    function Animal1(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal1.prototype.eat = function () {
        console.log(this.name + " is a human and is eating");
    };
    return Animal1;
})();
var h1 = new Human(""); //Possible
var a1 = new Animal1("", 2); //possible
h1 = new Animal1("", 2); //Possible
// console.log(h1 instanceof Animal1);     //true
// console.log(h1 instanceof Human1);      //false
a1 = new Human1(""); //3 < 1 = false
var a3 = { name: "tauqeer" };
a3 = { name: "ahmed", age: 23 }; //not possible
//Step 19c 
var Human2 = (function () {
    function Human2(n) {
        this.name = n;
    }
    return Human2;
})();
var Animal2 = (function () {
    function Animal2(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal2.prototype.eat = function (quantity) {
        console.log(this.name + " is animal and is eating");
    };
    return Animal2;
})();
var d = { name: "Tauqeer", age: 4 }; //Possible normal
var h3 = { name: "tauqeer" }; //Possible due to structure typing or duck typing
var h4 = d; //1 < 2 = true
var isHuman = h3 instanceof Human2;
// console.log(isHuman);   //false
var a4 = { name: "Cat", age: 2 }; //3 < 2 = false not possible missing property
var a5 = { name: "Dog", age: 3, eat: function (num) { } }; //possible due to structure or duck typing
a5.eat(); //Not allowed parameter does not match
a5.eat(3); //Now allowed
//# sourceMappingURL=app.js.map