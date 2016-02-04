//Type Syntax book chapter 2
//var myString : string = "test";
var myNumber = 1;
var myBoolean = true;

// myString = myNumber;     //Not assignable - error
// myNumber = myString;     //Not assignable - error
// myNumber = myBoolean;    //Not assignable - error
// myBoolean = myNumber;    //Not assignable - error
// myBoolean = myString;    //Not assignable - error
// myString = myBoolean;    //Not assignable - error
myString = myNumber.toString(); //Convert number to string and then assign it

//Inferred Typing (book chapter 2)
var myString = "this is string";

var num;
num = 1; //data type is any of num
num = "this is number"; //data type is any of num
num = true; //data type is any of num

var anotherNumber = 2;

// anotherNumber = "mystring"; //Can not assign because type of anotherNumber is number
//Duck Typing (book chapter 2)
var complexType = { name: "myName", id: 1 };
complexType = { id: 2, name: "abc" };

// complexType = {id:2}; //error
// complexType = {name : "abc"};    //error
// complexType = { id : 3 , name : "name" , address : "address" };
var anotherObject = { name: "myName", id: 1 };

//Will not generate any error address property will be assign in object by duck typing
anotherObject = { name: "name", id: 2, address: "address" };

//Basic types Handbook
var isDone = true;
var height = 3;
var name = "bob";
name = "smith";
var list = [1, 2, 3];
var list = [1, 2, 3];

//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 0 /* Red */;
console.log("Color = " + c);
var AnotherColor;
(function (AnotherColor) {
    AnotherColor[AnotherColor["Red"] = 1] = "Red";
    AnotherColor[AnotherColor["Green"] = 2] = "Green";
    AnotherColor[AnotherColor["Blue"] = 3] = "Blue";
})(AnotherColor || (AnotherColor = {}));
;
var d = 3 /* Blue */;
console.log("Another color = " + d);

var anotherEnum;
(function (anotherEnum) {
    anotherEnum[anotherEnum["Red"] = 1] = "Red";
    anotherEnum[anotherEnum["Green"] = 223] = "Green";
    anotherEnum[anotherEnum["Blue"] = 224] = "Blue";
})(anotherEnum || (anotherEnum = {}));
;
var e = 224 /* Blue */;
console.log("Color blue " + e); //224
var ColorName;
(function (ColorName) {
    ColorName[ColorName["Red"] = 0] = "Red";
    ColorName[ColorName["Green"] = 1] = "Green";
    ColorName[ColorName["Blue"] = 2] = "Blue";
})(ColorName || (ColorName = {}));
;

var colorName = ColorName[0];
console.log("Color Name " + colorName);
