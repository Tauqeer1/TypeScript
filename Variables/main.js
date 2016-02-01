var isDone = false;
var height = 6;
var name = "tauqeer";
name = 'ahmed'; //string
var list = [1, 2, 3];
var stringArray = ['abc', 'def'];
var genericArrayType = [1, 2, 3];
var stringArray1 = ['str', 'abc', 'mon'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = 0 /* Red */;

//any is a type in typescript
var notSure = 4;
notSure = "May be a string";
notSure = false;
var list1 = [1, true, "free"];
list1[1] = 100;
var list2 = ['abc', false, 20];

//function
function warnUser() {
    alert("This is warning message");
}
