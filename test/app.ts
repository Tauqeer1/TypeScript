//Step 0 (Hello World)

class StartUp{
     public static main():number{
        console.log("Hello World");
        return 0;
    }
}
StartUp.main();

//Step 1 (Strong Typing)

//strongly typed syntax
let a : string = "Pakistan" ;
a = "USA";
let b : number = 9;
let c : boolean = true;

//Type inference (Get the type by value)
let e = "USA";
let f = 10.9;
f = 20;
let g = false;
g = true;

//Step 2 (Const and Let)
const h = 5;
console.log(h);
// h = 10;     //h value can not be change because it is defined as the const
const i : number = 3;
const j = "best";


//if and else case for var and let
//let has blocked scope so it is always accessible within the block
//var does not have block scope in if-else case
//var example
var aa : string = "Global"; 
if(true){
    var aa : string = "Inside if";
    console.log(aa);
}
console.log(aa); //Inside if

//let example
let bb : string = "Global string";
if(true){
    //Inside bb has inner scope with in the if statement
    let bb : string = "Inside string";
    console.log(bb);
}
console.log(bb);        //Global string

//In Function case var and let work same 
var myVariable : number = 3;
let myVariable1 : number = 4;
function myFunction():void{
    //myVariable is inside function scope
    var myVariable : number = 2;  
    let myVariable1 : number = 11;  
    console.log("Inside function var " + myVariable);    //2
    console.log("Inside function let " + myVariable1);  //11
}
myFunction();
console.log("Outside function " +myVariable);    //Here myVariable is global scope variable
console.log("Outside function " +myVariable1);

//Loop case of let and  var
//let has block scope in loop case
//var has no block scope in loop case
let loopVariable : number = 1 ;
for(var loopIterator = 0 ; loopIterator < 5 ; loopIterator++){
    console.log("Inside for loop " +loopIterator);
}
console.log(loopIterator);


//Step 3 Duck Typing

let myType : { name : string , id : number};    //literal object 
myType = { name : "Tauqeer" , id : 1};  //Fresh object
myType = { id : 2 , name : "Ahmed"};    //fresh object

let x : { id : any , [index : string] : number};

// let myType2 = {id : 2 , name : "Tauqeer"};

// myType = myType2;   //OK

// let myType3 = { id : 1, name : "ahmed" , age : 22 };
// myType = myType3;       //Take excess property but can not take missing property
// myType3 = myType;   //Error myType has not age property

let y : { id : number , [index : string] : any};

// let z = { id : 1 , abc : "23"};

// y = z;  //Ok


let ab : { foo : number , id? : number};
ab = {foo : 1 , id : 23}


//Step 4 Array

let array1 : number[];

array1 = [1,2,3];

let array2 : Array<number|string|Object>;

array2 = [1,"sdds",{id : 12 , name : "sdsd"}];

// console.log(array2[2]["name"]);

//Step 5 (any type)

let aType : any = {id : 1 , name : "Tauqeer"};


aType = {id : 2 , age : 23 , name : "Ahmed"};
console.log(aType.name);


//Step 6 (explicit casting)

let abb : number = 2;

let abbc : boolean = <any> abb;
console.log(typeof abbc);



//In const enum we can not get colorName with index value

let tuple : [number ,string, number] = [1,"Hello",2];


type arr1 = number[] | string[] | boolean[] | any[];
type arr2 = Array<number|string|boolean>;
type arr3 = Array<number> | Array<string> | Array<boolean> | Array<any>;
let var1 : arr1;
let var2 : arr2;
let var3 : arr3;
var2 = [false,1,'sds'];
var3 = [1,2,3];
var3 = ['dsd','sdsd','sdsd'];
var3 = [false,true,false];
var1 = [1,2,3,4,5,''];
var1 = [true,false];
var1 = ['sdsd','sss','sdsds','zx'];
var1 = [false,1,"sds"];

var3 = [1,'sds',false];
let d = ((a, b) => ++a)(1,2);        
 console.log(d);