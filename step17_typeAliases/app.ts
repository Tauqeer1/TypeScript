type StringNumberBoolean = string | number | boolean; //Define new data type

let a : StringNumberBoolean;        // a data type is StringNumberBoolean means it can take string number or boolean

a = 2;      //Here a is number
a = false;  //Here a is boolean
a = "this is string";   //Here a is string

//Define data type array named PrimitiveArray it can take an array of string or number or boolean or mix of these
type PrimitiveArray = Array<string|number|boolean>; 

type myNumber = number;
let b : PrimitiveArray;

b = ["this is index 1",1,false];
b = ["1","2","3","g"];
b = [1,2,3,4,5,6];
b = [true,false,true,false]
let c : myNumber;

type callbackTypeOfFunction = (x : string) => void;


function callingFunction(x : string , callback : callbackTypeOfFunction):void{
    console.log("Calling function");
    callback("This is another string");
    
}

function myFunction(para : string):void{
    console.log("This is inside myFunction " + para);
}

callingFunction("calling the callingFunction",myFunction);