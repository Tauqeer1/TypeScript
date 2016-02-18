/* When classess have private field then the comparing of
both class object is of nominal type not of structure(duck) type
*/
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
        console.log(this.name + " is a animal and is eating");
    };
    return Animal;
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
var r0 = new Animal("Donkey"); //Now it is not possible because both have private field name
var h2 = h;
h = a; //Only those property match that are public private property does not match
h.eat(); //Animal eating
var a2 = a;
//# sourceMappingURL=app.js.map