function myCallBack(text) {
    console.log("Inside call back" + text);
}
function myCallingFunction(initialText, callback) {
    callback(initialText);
}
function anotherCallback() {
    console.log("Another callback");
    return 0;
}
//Error should be on anotherCallback but compiler is not giving any error
myCallingFunction("myText", anotherCallback);
//# sourceMappingURL=app.js.map