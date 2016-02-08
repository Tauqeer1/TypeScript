interface Animal {
    name : string;
}
interface Cat extends Animal {
    meow();
}

function isCat(a:Animal) : a is Cat{
    return true;
}

var x : Animal;

if(isCat(x)){
    x.meow();
}


// function isNumber(x : number){
//     return true;
// }
// 
// let a : number;
// 
// if(isNumber(a)){
//     console.log("a is number");
// }
// else{
//      console.log("a is not a number");
// }
// 

