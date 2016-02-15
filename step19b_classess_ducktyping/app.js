var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    Human.prototype.eat = function () {
    };
    return Human;
})();
var Animal = (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is animal and is eating");
    };
    return Animal;
})();
var h1 = new Human("Human"); //Normal object 
var a1 = new Animal("Animal Object", 200); //Normal Object
console.log("h1 is instance of of human = " + (h1 instanceof Human)); //true
console.log("h1 is instance of Animal = " + (h1 instanceof Animal)); //false
h1 = new Animal("aa", 222);
console.log("Now h1 is instance of Human = " + (h1 instanceof Human)); //false
console.log("Now h1 is instace of Animal = " + (h1 instanceof Animal)); //true
console.log("a1 is instace of of animal = " + (a1 instanceof Animal)); //true
a1 = new Human(""); //human has 1 property and animal has 3 property 3 < 2 false
console.log("a1 is instance of animal " + (a1 instanceof Animal)); //false
console.log("a1 is instance of human " + (a1 instanceof Human)); //true
//# sourceMappingURL=app.js.map