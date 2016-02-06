var myType;
myType = { name: "John", id: 1 }; //Assign any thing due to  type any
myType = { name: "Tauqeer" }; //Can assign any thing due to type any
myType = 23;
myType = "This is a string";
myType = false;
myType = { name: "abc", id: 12, list: [1, 2, 3], obj: { name: "tau" }, listString: ["one", "two", "three"], boolArray: [true, false, true, false], anyArray: [1, false, "string", 12] };
myType = function () {
    console.log("Assign any thing due to type any");
    return 0;
};
console.log(typeof (myType));
var ab = myType();
console.log(ab);
var a;
var b;
var c;
console.log(a.DoSome()); //Can be run due to any
console.log(b.DoSome()); //Method does not exist in b object
console.log(c.DoSome()); //Method does not exist in c object
//# sourceMappingURL=app.js.map