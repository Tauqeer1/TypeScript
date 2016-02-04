let myType = { name : "Tauqeer", id : 1};   //fresh object (object literal)

//case 1
myType = {id : 2 , name : "Tom"};       //No error

//Case 2a
myType = { id : 2 , name_person : "john" }; //Error

//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects
let x : { id : number, [index:string] : any};


x = { id : 1 , fullName : "Tauqeer Ahmed"};

//Case 3
// myType = { id : 2 , name : "Tom",age : 23};     //Case 3, Error excess property

//Cases when Stale object literal
let myType2 = {id : 2 , name : "John"};

//case 1
myType = myType2;


let myType3 = { id : 2 , name_person : "Sam"};
//Case 2a
myType = myType3;   //Can not assign myType3 to myType because of name and name_person property


//Case 2b
let y : {id : number , [index : string] : any};

let z = { id : 2 , name : "jaz"};

z = y;  //Error Can not assign y to z because of [index : string] property
y = z;  //Can be assign z to y because of [index : string] property


let myType4 = { id : 3 , name : "Tom" , age : 25};
//Case 3
myType = myType4;   //Can be assign excess property can be added in case of stale object


let a : { foo : number};
a = {foo : 1,baz : 2};      //Error excess property

let b : { foo : number , bar : string };
b = { foo : 12, baz : "abc" };      //Error name of the property is not correct 


let c : { foo : number , bar? : number};

c = { foo : 1 , bar : 23};