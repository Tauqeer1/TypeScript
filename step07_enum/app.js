var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 23] = "Blue";
    Color[Color["Green"] = 24] = "Green";
})(Color || (Color = {}));
;
var c = Color.Red;
var colorIndex = Color["Red"];
var colorName = Color[0]; //Red
;
var a = 0 /* Open */;
a = 20;
// console.log(typeof(a));
// console.log(a);
var b = 1 /* "Close" */;
// let d : string = DoorState[0];  //Error const enum can only accessed by using string literal
var A;
(function (A) {
    A[A["Red"] = 0] = "Red";
    A[A["Green"] = 1] = "Green";
    A[A["Blue"] = 10] = "Blue";
})(A || (A = {}));
var A;
(function (A) {
    A[A["Violet"] = 0] = "Violet";
    A[A["Yellow"] = 1] = "Yellow";
    A[A["Orange"] = 10] = "Orange";
})(A || (A = {}));
// console.log(A[0]);  //Red
// console.log(A["Red"]);  //0
// console.log(A[10]); //Blue
// console.log(A[3]);  //Violet
// console.log(A[1]);  //Yellow
// // console.log(A["Orange"]);   //10
// console.log(A[10]); //Orange
// console.log(A[0]);  //Violet
var AnimalFlags;
(function (AnimalFlags) {
    AnimalFlags[AnimalFlags["None"] = 0] = "None";
    AnimalFlags[AnimalFlags["HasClaws"] = 1] = "HasClaws";
    AnimalFlags[AnimalFlags["CanFly"] = 2] = "CanFly";
    AnimalFlags[AnimalFlags["EatsFish"] = 4] = "EatsFish";
    AnimalFlags[AnimalFlags["Endangered"] = 8] = "Endangered";
})(AnimalFlags || (AnimalFlags = {}));
console.log(AnimalFlags["HasClaws"]);
console.log(AnimalFlags["CanFly"]);
console.log(AnimalFlags[3]);
//# sourceMappingURL=app.js.map