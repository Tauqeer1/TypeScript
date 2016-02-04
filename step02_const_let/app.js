//These varaibles can not be changed throughout the program
var a = 5;
var b = 6;
var c = "best";
//var creates a scope in the nearest parent function 
//let creates a scope in the nearest block
// var i = "able";     //Globally scope
var me = "go"; //Globally scope
var i = 100;
function myFunction() {
    var letvariable = "abc"; //function block scope
    var varVariable = "def"; //function block scope
    for (var i_1 = 0; i_1 < 5; i_1++) {
        console.log("Inside for loop i " + i_1);
    }
    for (var j = 0; j < 5; j++) {
        console.log("Inside for loop j " + j);
    }
    console.log("Outside for loop i " + i);
    console.log("Outside for loop j " + j);
}
// myFunction();
if (false) {
    var z = 4;
    console.log(z);
}
else {
    var z = "string";
    console.log(z);
}
console.log("Outside " + z);
