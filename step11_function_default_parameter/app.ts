//Name function with default and optional parameter
function buildName(firstName?:string,lastName:string = "ahmed"):string{
    
    
    if(lastName){
        return firstName + ' ' + lastName;
    }
    else{
        return firstName;
    }
    
}

let myName = buildName('tauqeer');
let anotherName = buildName('tauqeer','shakir');
// console.log(myName);
let another = buildName();
// console.log(another);
// console.log("anotherName " + anotherName);

let buildName1 : (firstName : string , lastName? :string) => string;


buildName1 = function(firstName : string , lastName = "ahmed"):string{
    
    if(lastName){
        return firstName + ' ' + lastName;
    }
}

console.log(buildName1('tauqeer','shakir'));    //tauqeer shakir
console.log(buildName1('tauqeer')); //tauqeer ahmed
