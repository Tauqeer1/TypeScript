//constructor cannot be static
//variable and method of a class can be static
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.orgin.x);
        var yDist = (point.y - Grid.orgin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.orgin = { x: 0, y: 0 };
    return Grid;
})();
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 20 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 20, y: 20 }));
var myClass = (function () {
    function myClass() {
    }
    myClass.foo = function () {
        console.log("foo");
    };
    return myClass;
})();
myClass.foo();
//# sourceMappingURL=app.js.map