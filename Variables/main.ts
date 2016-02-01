var isDone : boolean = false; //Boolean
var height : number = 6;    //number
var name : string = "tauqeer";      //string
name = 'ahmed';     //string
var list : number[] = [1,2,3];      //numberArray
var stringArray : string[] = ['abc','def'];     //stringArray
var genericArrayType : Array<number> = [1,2,3]; //number array of generic type
var stringArray1 : Array<string> = ['str','abc','mon'];     //string array of generic type
enum Color {Red,Green,Blue};    //Define the enum
var c : Color = Color.Red;      //initialize the variable c with enum 


//any is a type in typescript
var notSure : any = 4;
notSure = "May be a string";
notSure = false;
var list1 : any[] = [1,true,"free"];
list1[1] = 100;
var list2 : Array<any> = ['abc',false,20];

//function 
function warnUser() : void{
    alert("This is warning message");
}

//null and undefined can not be used as type
// var testUser : null;    //Error type excepted
// var testUser : undefined;   //Error can not find name undefined
