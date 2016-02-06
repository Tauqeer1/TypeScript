//Named Function 
function add(x, y) {
    return x + y;
}
//Anonymous function
var add1 = function (x, y) {
    return x + y;
};
//function declaration with explicit datatype
var add2;
add2 = function (a, b) {
    var c = a + b;
    return c;
};
console.log("Adding function " + add2(1, 2)); //3
add2 = function (c, d) {
    var e = c * d;
    return e;
};
console.log("Multiply function " + add2(1, 2)); //2
//Lambda function
var add3 = function (a, b) { return a + b; };
//Lambda function
add2 = function (x, y) { return x + y; };
console.log(add2(1, 2));
//# sourceMappingURL=app.js.map