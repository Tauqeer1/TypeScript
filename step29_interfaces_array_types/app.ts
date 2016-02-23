
interface StringArray {
    [index : number] : string ;  //index signature 
    length : number;
    
}

let myArray : StringArray = ["Bob","Fred"];

let first = myArray[0];
console.log(first);

//Case 1
interface Dictionary {
    [index : string] : string;
}

let myDictionary : Dictionary = {"first" : "Bob" , "second" : "Fred"};

let first1 = myDictionary["second"];    //Fred
console.log(first1);


//Case 2
interface Dictionary1 {
    [index : string] : string;
    length : number;
}

let d1 : Dictionary1 = { "first" : "Bob" , "second" : "Fred"};  //Error will not work,property length is required
let d2 : Dictionary1 = { "first" : "Bob" , "second" : "Fred" , length : "2"};   //work

