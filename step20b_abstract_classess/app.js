var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () {
        console.log("Foo method class A");
        return this.bar();
    };
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.bar = function () {
        return 1;
    };
    return B;
})(A);
var a = new A(); //Cannot create the instance of abstract class
var b = new B();
b.foo(); //Possible
//# sourceMappingURL=app.js.map