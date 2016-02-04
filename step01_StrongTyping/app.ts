
//Type Syntax book chapter 2
//var myString : string = "test";
var myNumber : number =  1;
var myBoolean : boolean = true;


// myString = myNumber;     //Not assignable - error
// myNumber = myString;     //Not assignable - error
// myNumber = myBoolean;    //Not assignable - error
// myBoolean = myNumber;    //Not assignable - error
// myBoolean = myString;    //Not assignable - error
// myString = myBoolean;    //Not assignable - error


myString = myNumber.toString();     //Convert number to string and then assign it

//Inferred Typing (book chapter 2)
var myString = "this is string";

var num;
num = 1;    //data type is any of num
num = "this is number";     //data type is any of num
num = true;         //data type is any of num


var anotherNumber = 2;
// anotherNumber = "mystring"; //Can not assign because type of anotherNumber is number

//Duck Typing (book chapter 2)
var complexType = {name : "myName", id : 1};
complexType = { id : 2 , name : "abc" };
// complexType = {id:2}; //error
// complexType = {name : "abc"};    //error
// complexType = { id : 3 , name : "name" , address : "address" };

var anotherObject = { name : "myName" , id : 1 };
//Will not generate any error address property will be assign in object by duck typing
anotherObject = {name: "name", id: 2 , address: "address"};     


//Basic types Handbook 

var isDone : boolean = true;
var height : number = 3;
var name : string = "bob";
name = "smith";
var list :  number[] = [1,2,3]; //Number array (1st way)
var list : Array<number> = [1,2,3]; //Number array (2nd way)
//Enum 
enum Color {
    Red,Green,Blue
};
var c : Color = Color.Red;  //Assign enum value
console.log("Color = "+c);
enum AnotherColor {
    Red = 1,
    Green = 2,
    Blue = 3
};
var d : AnotherColor = AnotherColor.Blue;
console.log("Another color = "+d);

enum anotherEnum {
    Red = 1,
    Green = 223,
    Blue
};
var e : anotherEnum = anotherEnum.Blue;
console.log("Color blue "+e);   //224
enum ColorName {
    Red,
    Green,
    Blue
};

var colorName : string = ColorName[0];  //Red
console.log("Color Name "+colorName);