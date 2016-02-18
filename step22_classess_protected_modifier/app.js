/*
Protected keyword allows subclass to gain visibility into
parent class without exposing the API
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ListString = (function () {
    function ListString() {
        this.contents = []; //initializing the empty array
    }
    ListString.prototype.setElement = function (index, item) {
        this.contents[index] = item;
    };
    return ListString;
})();
var StackString = (function (_super) {
    __extends(StackString, _super);
    function StackString() {
        _super.call(this);
        this.currentIndex = 0;
    }
    StackString.prototype.push = function (item) {
        this.setElement(this.currentIndex, item);
        this.currentIndex++;
    };
    return StackString;
})(ListString);
var stack = new StackString();
stack.push("Tauqeer");
stack.push("Ahmed");
stack.push("Shakir");
console.log(stack);
var anotherStack = new StackString();
anotherStack.push("Tauqeer");
anotherStack.push("Ahmed");
anotherStack.push("Shakir");
console.log(anotherStack);
stack.setElement(0, 1); //Error can not access outside the class because of protected
//# sourceMappingURL=app.js.map