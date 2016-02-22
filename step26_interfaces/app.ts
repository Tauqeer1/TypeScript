
//Example without named interface

function printLabel(labelledObject : {label : string}) {
    console.log(labelledObject.label);
}

//Fresh Object
//Case 1
printLabel({label : "Size 10 Object"}); //Ok , passing exact property as in function definition


//Case 2a
printLabel({myLabel : "Size 10 Object"});   //Error , renamed or missing property


//Case 2b
printLabel({label : "Size 10 Object" , name : "Tauqeer"});  //Error Passing extra property


//Case 2c 
/* A type can include an index signature to explicitly indicate
 that excess properties are permitted in with fresh object */
 
//Note now x can have any name , just that type should be of string 
function printLabelX(labelledObject : {[x : string] : any}) {
    console.log(arguments[0]);
}
printLabelX({a : 2});
printLabelX(3);
printLabelX("This is Pakistan");
printLabelX({name : "Tauqeer"});


//Case 3
printLabel({size : 10 , label : "Size of 10 Object"});  //Error no extra properties allowed


//Stale Object

//Case 1
let myObj1 = {label : "Size 10 Object"};
printLabel(myObj1);     //Ok passing exact properties

//Case 2a
let myObj2 = {myLabel : "Size 10 Object"};
printLabel(myObj2); //Error , missing or renamed property

//Case 2b
let obj3 = {name : "Tauqeer"};
printLabel(obj3);   //Error ,  missing or renamed property
printLabelX(obj3);  //OK no error

//Case 2c
let obj4 = {name : "Tauqeer", lastName : "Ahmed"};
printLabel(obj4);   //Error extra property
printLabelX(obj4);  //Ok no error if matching with the index signature

//Case 3
let obj5 = {name : "Tauqeer", label : "Size 10 Object"};
printLabel(obj5);   //Can pass extra properties in stale object 


//Sample example with named interface

interface LabeledValue {
    label : string;
}

interface LabeledValue2 {
    [x : string] : any;
}

function printLabelY(labelledObject : LabeledValue){
    console.log(labelledObject.label);
}
function printLabelY2(labelledObject : LabeledValue2){
    console.log(arguments[0]);
}

//Fresh object

//Case 1
printLabelY({label : "Size 10 Object"});    //Ok No Error

//Case 2a
printLabelY({myLabel : "Size 10 Object"});  //Error , renamed or missing property

//Case 2b
printLabelY2({myLabel : "Size 10 Object"}); //Ok , Until matched with the index signature
printLabelY2("sdsd");   //OK
printLabelY2({name : "Tauqeer"});   //Ok No error

//Case 3 
printLabelY({size : 10 , label : "Size 10 Object"});    //Error extra property not allowed


//Stale Objects 

//Case 1
let myObj = {label : "Size 10 Object"};
printLabelY(myObj);     //Ok No error

//Case 2a 
let myObjY2 = {myLabel : "Size 10 Object"};
printLabelY(myObjY2);   //Error, missing or renamed property

//Case 2b
let objY3 = {name : "Tauqeer"};
printLabelY2(objY3);    //Ok no error until index signature matched

//Case 3
let myObj4 = { label : "Size 20 Object", size : 20};
printLabelY(myObj4);    //Stale object allow extra properties
