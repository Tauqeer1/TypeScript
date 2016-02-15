var Human = (function () {
    function Human(n) {
        this.name = n;
    }
    return Human;
})();
var Animal = (function () {
    function Animal(n, a) {
        this.name = n;
        this.age = a;
    }
    Animal.prototype.eat = function (quantity) {
        console.log(this.name + " is animal and is eating ");
    };
    return Animal;
})();
var d = { name: "Tauqeer", age: 4 }; //possible literal object
var h = { name: "Tauqeer" }; //Possible
var h1 = d; //1<2
console.log("d is instance of Human = " + (d instanceof Human)); //false
console.log("h1 is instance of Human = " + (h1 instanceof Human)); //false
var a = { name: "dog", age: 0 }; //Not possible properties are missing
var a1 = { name: "Cat", age: 2, eat: function (age) { console.log("This is object literal " + age); } }; //Possible due to structure or duck typing
a1.eat(2);
//# sourceMappingURL=app.js.map