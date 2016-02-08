var a; // a data type is StringNumberBoolean means it can take string number or boolean
a = 2; //Here a is number
a = false; //Here a is boolean
a = "this is string"; //Here a is string
var b;
b = ["this is index 1", 1, false];
b = ["1", "2", "3", "g"];
b = [1, 2, 3, 4, 5, 6];
b = [true, false, true, false];
var c;
function callingFunction(x, callback) {
    console.log("Calling function");
    callback("This is another string");
}
function myFunction(para) {
    console.log("This is inside myFunction " + para);
}
callingFunction("calling the callingFunction", myFunction);
//# sourceMappingURL=app.js.map