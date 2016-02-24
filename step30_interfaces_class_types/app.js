var Clock = (function () {
    function Clock(h, m) {
        this.currentTime = new Date();
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
        console.log(this.currentTime);
    };
    return Clock;
})();
var a = new Clock(2, 2);
a.setTime(new Date());
// console.log(a.currentTime);
//# sourceMappingURL=app.js.map