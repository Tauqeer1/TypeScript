
function add(arg1 : string , arg2 : string): string ;
function add(arg1 : number , arg2 : number): string;
function add(arg1 : number , arg2 : number): number;
function add(arg1 : boolean , arg2 : boolean):boolean;
function add(arg1 : number , arg2 : string) : void;
function add(arg1 : string , arg2 : number) : void;
function add(arg1 : any , arg2 : any) : any {
    return arg1 + arg2;
}

console.log(add(1,2));
console.log(add('Hello','world'));
console.log(add('Hi','Hello'));
console.log(add(true,false));
console.log(add(1,'hello'));
console.log(add('Hello',1));


function myFunction(a : any , b : any) : any{
     
}