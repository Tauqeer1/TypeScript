//In typescript each member is public by default
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var a = new Animal("Goat");
console.log(a);
//# sourceMappingURL=app.js.map