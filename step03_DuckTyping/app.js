var myType = { name: "Tauqeer", id: 1 }; //fresh object (object literal)
//case 1
myType = { id: 2, name: "Tom" }; //No error
//Case 2a
myType = { id: 2, name_person: "john" }; //Error
//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects
var x;
x = { id: 1, fullName: "Tauqeer Ahmed" };
//Case 3
// myType = { id : 2 , name : "Tom",age : 23};     //Case 3, Error excess property
//Cases when Stale object literal
var myType2 = { id: 2, name: "John" };
//case 1
myType = myType2;
var myType3 = { id: 2, name_person: "Sam" };
//Case 2a
myType = myType3; //Can not assign myType3 to myType because of name and name_person property
//Case 2b
var y;
var z = { id: 2, name: "jaz" };
z = y; //Error Can not assign y to z because of [index : string] property
y = z; //Can be assign z to y because of [index : string] property
var myType4 = { id: 3, name: "Tom", age: 25 };
//Case 3
myType = myType4; //Can be assign excess property can be added in case of stale object
var a;
a = { foo: 1, baz: 2 }; //Error excess property
var b;
b = { foo: 12, baz: "abc" }; //Error name of the property is not correct 
//# sourceMappingURL=app.js.map