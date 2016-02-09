//Step 0 (Hello World)
var StartUp = (function () {
    function StartUp() {
    }
    StartUp.main = function () {
        console.log("Hello World");
        return 0;
    };
    return StartUp;
})();
StartUp.main();
//Step 1 (Strong Typing)
//strongly typed syntax
var a = "Pakistan";
a = "USA";
var b = 9;
var c = true;
//Type inference (Get the type by value)
var e = "USA";
var f = 10.9;
f = 20;
var g = false;
g = true;
//Step 2 (Const and Let)
var h = 5;
console.log(h);
// h = 10;     //h value can not be change because it is defined as the const
var i = 3;
var j = "best";
//if and else case for var and let
//let has blocked scope so it is always accessible within the block
//var does not have block scope in if-else case
//var example
var aa = "Global";
if (true) {
    var aa = "Inside if";
    console.log(aa);
}
console.log(aa); //Inside if
//let example
var bb = "Global string";
if (true) {
    //Inside bb has inner scope with in the if statement
    var bb_1 = "Inside string";
    console.log(bb_1);
}
console.log(bb); //Global string
//In Function case var and let work same 
var myVariable = 3;
var myVariable1 = 4;
function myFunction() {
    //myVariable is inside function scope
    var myVariable = 2;
    var myVariable1 = 11;
    console.log("Inside function var " + myVariable); //2
    console.log("Inside function let " + myVariable1); //11
}
myFunction();
console.log("Outside function " + myVariable); //Here myVariable is global scope variable
console.log("Outside function " + myVariable1);
//Loop case of let and  var
//let has block scope in loop case
//var has no block scope in loop case
var loopVariable = 1;
for (var loopIterator = 0; loopIterator < 5; loopIterator++) {
    console.log("Inside for loop " + loopIterator);
}
console.log(loopIterator);
//Step 3 Duck Typing
var myType; //literal object 
myType = { name: "Tauqeer", id: 1 }; //Fresh object
myType = { id: 2, name: "Ahmed" }; //fresh object
var x;
// let myType2 = {id : 2 , name : "Tauqeer"};
// myType = myType2;   //OK
// let myType3 = { id : 1, name : "ahmed" , age : 22 };
// myType = myType3;       //Take excess property but can not take missing property
// myType3 = myType;   //Error myType has not age property
var y;
// let z = { id : 1 , abc : "23"};
// y = z;  //Ok
var ab;
ab = { foo: 1, id: 23 };
//Step 4 Array
var array1;
array1 = [1, 2, 3];
var array2;
array2 = [1, "sdds", { id: 12, name: "sdsd" }];
// console.log(array2[2]["name"]);
//Step 5 (any type)
var aType = { id: 1, name: "Tauqeer" };
aType = { id: 2, age: 23, name: "Ahmed" };
console.log(aType.name);
//Step 6 (explicit casting)
var abb = 2;
var abbc = abb;
console.log(typeof abbc);
var aaa = 2;
var aab;
console.log("type of" + typeof (aab = aaa));
//In const enum we can not get colorName with index value
//# sourceMappingURL=app.js.map