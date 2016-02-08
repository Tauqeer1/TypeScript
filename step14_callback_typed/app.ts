function myCallBack(text : string){
    console.log("Inside call back"+ text);
}

function myCallingFunction(initialText : string, callback : (text  : string) => void){
    callback(initialText);
}

function anotherCallback() : number{
    console.log("Another callback");
    return 0;
}
//Error should be on anotherCallback but compiler is not giving any error
myCallingFunction("myText" , anotherCallback);      


