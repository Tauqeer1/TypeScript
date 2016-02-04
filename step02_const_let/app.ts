//These varaibles can not be changed throughout the program
const a = 5;
const b : number = 6;
const c : string = "best";

//var creates a scope in the nearest parent function 
//let creates a scope in the nearest block


// var i = "able";     //Globally scope
let me = "go";      //Globally scope
var i = 100;

function myFunction():void{
    let letvariable = "abc";    //function block scope
    var varVariable = "def";    //function block scope
    
    
    for(let i=0;i<5;i++){
        console.log("Inside for loop i "+i);
    }
    for(var j =0 ;j<5;j++){
        console.log("Inside for loop j "+j);
    }
    console.log("Outside for loop i "+i);
    console.log("Outside for loop j "+j);
}

// myFunction();
if(false){
    let z = 4;
    console.log(z);
}
else{
    let z = "string";
    console.log(z);
}
console.log("Outside "+z);