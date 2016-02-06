function buildName(firstName) {
    var abc = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        abc[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + abc.join(" ");
}
var employeeName = buildName("Tauqeer", "ahmed", "Shakir", "Shoaib", "Zohaib");
// console.log(employeeName);
//Rest , Optional and default parameter must be a last parameter in the function declaration
var buildNameFunc;
buildNameFunc = function (fn) {
    var a = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        a[_i - 1] = arguments[_i];
    }
    return fn + '' + a.join(" ");
};
// console.log(buildNameFunc("Tauqeer"));
function concatString(a, b, c) {
    console.log("Value of c = " + c);
    return a + b + c;
}
// console.log(concatString('a','b','d'));
// console.log(concatString('a','b'));
function testParam() {
    var argArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argArray[_i - 0] = arguments[_i];
    }
    if (argArray.length > 0) {
        for (var i = 0; i < argArray.length; i++) {
            console.log("argArray " + i + " = " + argArray[i]);
        }
    }
    else {
        console.log("No Argument");
    }
}
// testParam();
// testParam(1,2,3);
// testParam("one","two","three");
// let z:number = 10;
function addToZ(x, y) {
    var z = 0;
    return x + y + z;
}
// console.log(addToZ(1,2));
function anotherFunction(x, y) {
    console.log(x + ' ' + y);
}
var a = 1;
var b = "name";
// anotherFunction(a,b);
function func(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
var buildN = func;
buildN("tauqeer", "ahmed1");
//# sourceMappingURL=app.js.map