function add(arg1 : string | number | boolean , arg2 :  string | number | boolean) : string | number | boolean{
    
    if(typeof arg1 === "string" && typeof arg2 === "string"){
        return arg1 + arg2; 
    }
    if(typeof arg1 === "number" && typeof arg2 === "number"){
        return arg1 + arg2;
    }
    if(typeof arg1 === "boolean" && arg2 === "boolean"){
        return arg1 && arg2;
    }
    else{
        console.log("These arguments is not defined");
    }
}

console.log(add("Hello",1));
console.log(add("Hello","World"));
console.log(add(2,3));