let array1 : number[] = [1,2,3];        //Array declare and initialize
console.log(array1[1]); //2

let array2 : Array<number> = [2,3,4];   //Another way to declare and initialize the array1
let array3 : number[];      //Empty array
console.log(array3);
console.log(array2);
let array4 : Array<number>;

console.log("Array 4 "+array4);

// let array5 : number[] = new number[];   //Error can not defined array like this

let array6 : number[] = [1];

array6.push(2);
array6.push(1,2,3,4);
console.log(array6);


var arrayOfNumbers : number[];
arrayOfNumbers = [1,2,3];

var anotherArray : any[];
anotherArray = [1,"Tom",false,{name : "John",age : 45},[1,2,3,4]];
console.log(anotherArray[4]);