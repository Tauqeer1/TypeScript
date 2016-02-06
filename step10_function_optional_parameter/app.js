//Named function with optional parameter
function buildName(firstName, lastName) {
    if (firstName && lastName) {
        return firstName + ' ' + lastName;
    }
    else if (firstName) {
        return firstName;
    }
    else {
        return "Guest";
    }
}
// console.log(buildName("Tauqeer","Ahmed"));  //tauqeer ahmed
// console.log(buildName("Tauqeer"));      //tauqeer
// console.log(buildName());
var buildName1;
buildName1 = function (fn, ln) {
    if (fn && ln) {
        return fn + ' ' + ln;
    }
    else if (fn) {
        return fn;
    }
    else {
        return "Guest";
    }
};
console.log(buildName1());
console.log(buildName1('tauqeer', 'ahmed'));
console.log(buildName1('tauqeer'));
//# sourceMappingURL=app.js.map