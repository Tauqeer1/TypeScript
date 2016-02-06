
//Explicit type casting way 1
let myType = <any> { name : "Tom" , id : 1};
console.log(typeof(myType));
myType = {id : 1 , name : "tom" , age : 21}; //fresh object
myType = "This is string";
myType = true;

//Explicit type casting way 2
let myType1 = {name : "John", id : 1} as any;

myType1 = false;
myType1 = "this is string";
myType1 = 2;

let a = "string" as any;
a = 2;
a = false;
a = { name  : "Remmy" , age : 21 , listArray : [1,2,3,"string"]};