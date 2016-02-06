//Explicit type casting way 1
var myType = { name: "Tom", id: 1 };
console.log(typeof (myType));
myType = { id: 1, name: "tom", age: 21 }; //fresh object
myType = "This is string";
myType = true;
//Explicit type casting way 2
var myType1 = { name: "John", id: 1 };
myType1 = false;
myType1 = "this is string";
myType1 = 2;
var a = "string";
a = 2;
a = false;
a = { name: "Remmy", age: 21, listArray: [1, 2, 3, "string"] };
//# sourceMappingURL=app.js.map