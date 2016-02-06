//Named Function 
function add(x:number,y:number){
    return x+y;
}

//Anonymous function
let add1 = function(x:number,y:number){
    return x+y;
}

//function declaration with explicit datatype
 let add2 : ( x : number , y :number) => number;
 
 
 add2 = function( a : number , b : number):number{
     
     let c = a + b;
     return c;
 }
 console.log("Adding function "+add2(1,2)); //3
 add2 = function( c : number , d : number ) : number {
     
     let e = c * d;
     return e;
     
 }
 console.log("Multiply function "+add2(1,2)); //2
 
 //Lambda function
 let add3 = (a:number,b:number) => a+b;
 
 //Lambda function
 add2 = (x:number,y:number):number => x+y;
console.log(add2(1,2));
