/*
Interface types have many similarities to type aliases for object type literals, but since interface types offer more capabilities they are generally preferred to type aliases. For example, the interface type

interface Point {
    x: number;
    y: number;
}
could be written as the type alias

type Point = {
    x: number;
    y: number;
};
However, doing so means the following capabilities are lost:
• An interface can be named in an extends or implements clause, but a type alias for an object type literal cannot.
• An interface can have multiple merged declarations, but a type alias for an object type literal cannot.
• An interface can have type parameters, but a type alias for an object type literal cannot.


 */
var mySearch = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var a = mySearch("This is Tauqeer ahmed shakir", "tauqeer");
console.log(a);
var myFunc = function (a, b) {
    return;
};
var anotherFunc = function (a, b) {
    return;
};
//# sourceMappingURL=app.js.map