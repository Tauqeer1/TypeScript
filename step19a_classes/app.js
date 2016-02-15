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
        console.log(this.name + " is a Animal and is eating");
    };
    return Animal;
})();
var WildAnimal = (function () {
    function WildAnimal(title) {
        this.title = title;
    }
    WildAnimal.prototype.eat = function () {
        console.log(this.title + " is a Wild Animal and is eating");
    };
    return WildAnimal;
})();
var Robot = (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
})();
var h = new Human("Human");
var a = new Animal("Animal");
var r = new Robot("Robot");
var r0 = new Animal("Donkey"); //Should not possible but it is not giving any error and is running
// console.log(r0.name);
var isRobot = r0 instanceof Robot;
// console.log(isRobot);   //false
var isAnimal = r0 instanceof Animal;
// console.log(isAnimal);  //true
var h2 = h; //Possible
h = a; //Possible
// h.eat();    //Animal
var a2 = a; //Possible
// a2.eat();   //Animal
var r2 = r;
// a = r2;     //property missing error
r = a; //Possibel
// r.eat(); 
//# sourceMappingURL=app.js.map