function buildName(firstName : string, ...abc : string[]){
    return firstName + ' ' + abc.join(" ");
}


let employeeName = buildName("Tauqeer","ahmed","Shakir","Shoaib","Zohaib");
// console.log(employeeName);



//Rest , Optional and default parameter must be a last parameter in the function declaration
let buildNameFunc : (fname : string , ...rest : string[]) => string;


buildNameFunc = function(fn :  string , ...a : string[])  { 
    
    return fn + '' + a.join(" ");
}

// console.log(buildNameFunc("Tauqeer"));


function concatString(a : string , b : string , c ?: string){
    console.log("Value of c = " + c);
    return a + b + c; 
}
// console.log(concatString('a','b','d'));
// console.log(concatString('a','b'));


function testParam(...argArray : any[]){
    if(argArray.length > 0){
        for(let i = 0 ; i<argArray.length;i++){
            console.log("argArray " + i + " = "+argArray[i]);
        }
    }
    else{
        console.log("No Argument");
    }
}

// testParam();
// testParam(1,2,3);
// testParam("one","two","three");

// let z:number = 10;

function addToZ(x:number,y:number):number{
    let z:number = 0;
    return x + y + z;
}
// console.log(addToZ(1,2));

function anotherFunction(x:number,y:string){
    console.log(x + ' ' + y);
}
let a : number = 1;
let b : string = "name";

// anotherFunction(a,b);

function func(firstName: string , lastName : string){
    console.log(firstName + ' ' + lastName);   
}

let buildN : (f : string , l : string) => void = func;


buildN("tauqeer","ahmed1");