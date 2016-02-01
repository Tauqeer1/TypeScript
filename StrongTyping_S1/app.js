//Code from http://www.typescriptlang.org/Handbook#basic-types
var isDone = true;
var height = 6;
var name = "bob";
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];

//Define the enum, the value is set by default
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 2 /* Blue */;

//Another enum define but value is set manually
var AnotherColor;
(function (AnotherColor) {
    AnotherColor[AnotherColor["Red"] = 1] = "Red";
    AnotherColor[AnotherColor["Green"] = 5] = "Green";
    AnotherColor[AnotherColor["Blue"] = 100] = "Blue";
})(AnotherColor || (AnotherColor = {}));
;
var d = 100 /* Blue */;
var colorName = AnotherColor[2];

//alert(colorName);
//In typescript we use any datatype if we are not sure the datatype of the variale
var notSure = 2;
notSure = "Tauqeer";
notSure = false;

var array3 = [1, 2, 3];

var array4 = [1, false, "name"];
console.log(typeof array4);

function warnUser() {
    console.log("Warning message");
}

//Code from Mastering TypeScript book
var myString = "test";
var myNumber = 1;
var myBoolean = false;

//We can not mix datatype in typescript as we do in javascript because typescript is strongly typed language
// myString = myNumber;    //Can not assign number to string in ts
// myBoolean = myString;       //Can not assign string to boolean in ts
// myNumber = myBoolean;       //Can not assign boolean to a number
//If we want to assign variable of different datatype to different datatype we should convert first here is example below
myString = myNumber.toString(); //we convert number to string by using toString() method
myBoolean = (myString === "test"); //Convert to boolean and the assign

//if myBoolean is true
if (myBoolean) {
    myNumber = 1;
}

var StartUp = (function () {
    function StartUp() {
    }
    StartUp.main = function () {
        console.log('Hello World');
        return 0;
    };
    return StartUp;
})();
StartUp.main();
