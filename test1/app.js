var Human = (function () {
    function Human(n) {
        this.name = n;
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
        console.log(this.title + " is a wild animal and is eating");
    };
    return WildAnimal;
})();
var Robot = (function () {
    function Robot(n) {
        this.name = n;
    }
    return Robot;
})();
//Human has 2 property
//Animal has 2 property
//WildAnimal has 2 property
//Robot has 1 property
var h = new Human("Tom"); //Possible
var a = new Animal("Goat"); //Possible
var r = new Robot("R2-D2"); //Possible
var r0 = new Animal("Donkey"); //Possible in typescript
// console.log("r0 is instance of Robot " + (r0 instanceof Robot));    //False
// console.log("r0 is instance of Animal " + (r0 instanceof Animal));  //True
var h2 = h; //Possible
// h2.eat();
// console.log("h is instance of Human = " + (h instanceof Human));    //True
// console.log("h2 is instance of Human = " + (h2 instanceof Human));  //True
h = a;
// console.log("h is instance of Human = " + (h instanceof Human));  //false
// console.log("h is instance of Animal = " + (h instanceof Animal));  //true
// h.eat();    //Goat is eating
// console.log("name = "+h.name);  //Goat
// a.eat();    //Goat is eating
var a2 = a;
// a2.eat();   //animal
var a3 = h;
a3.eat(); //Animal
// a = r;      //2 < 1 Error
// let wild : Animal = new WildAnimal("WildAnimal");   //Property name match error 
//# sourceMappingURL=app.js.map