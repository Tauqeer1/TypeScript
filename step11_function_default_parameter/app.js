//Name function with default and optional parameter
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "ahmed"; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var myName = buildName('tauqeer');
var anotherName = buildName('tauqeer', 'shakir');
// console.log(myName);
var another = buildName();
// console.log(another);
// console.log("anotherName " + anotherName);
var buildName1;
buildName1 = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "ahmed"; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
};
console.log(buildName1('tauqeer', 'shakir')); //tauqeer shakir
console.log(buildName1('tauqeer')); //tauqeer ahmed
//# sourceMappingURL=app.js.map