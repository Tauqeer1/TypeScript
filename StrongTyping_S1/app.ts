
//Code from http://www.typescriptlang.org/Handbook#basic-types

var isDone : boolean = true;    //Boolean variable
var height : number  = 6;       //Number variable
var name : string = "bob";      //string variable
var array1 : number[] = [1,2,3];    //Array of number
var array2 : Array<number> = [1,2,3];   //Array of number defined by generic way
//Define the enum, the value is set by default
enum Color {
    Red,    //here red value is 0
    Green,  //here green value is 1
    Blue    //Blue value is 2
} ;
var c : Color = Color.Blue; //Initialize the c variable with enum value
//Another enum define but value is set manually
enum AnotherColor{
    Red = 1,    //red value is 1
    Green = 5,  //green value is 5
    Blue =  100 //blue value is 100
};
var d : any = AnotherColor.Blue;    //Initialize the d variable with the enum value
var colorName : string = AnotherColor[2];       //Getting the value using the enum index
//alert(colorName);

//In typescript we use any datatype if we are not sure the datatype of the variale
var notSure : any = 2;
notSure = "Tauqeer";
notSure = false;


var array3 = [1,2,3];

var array4 = [1,false,"name"];
console.log(typeof array4);

function warnUser() : void{
    console.log("Warning message");
}

//Code from Mastering TypeScript book

var myString : string = "test";
var myNumber : number = 1;
var myBoolean : boolean = false;

//We can not mix datatype in typescript as we do in javascript because typescript is strongly typed language
// myString = myNumber;    //Can not assign number to string in ts
// myBoolean = myString;       //Can not assign string to boolean in ts
// myNumber = myBoolean;       //Can not assign boolean to a number

//If we want to assign variable of different datatype to different datatype we should convert first here is example below 

myString = myNumber.toString(); //we convert number to string by using toString() method
myBoolean = (myString === "test");  //Convert to boolean and the assign
//if myBoolean is true
if(myBoolean){
    myNumber = 1;
}


class StartUp{
    public static main() : number{
        console.log('Hello World');
        return 0;
    }
}
StartUp.main();