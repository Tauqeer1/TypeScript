enum Color {
    Red = 1 ,
    Blue = 23,
    Green
};
let c : Color = Color.Red;
let colorIndex : number = Color["Red"];

let colorName : string = Color[0];  //Red

const enum DoorState {
    Open,
    Close,
    Ajar
};

let a : DoorState = DoorState.Open;
a = 20;
// console.log(typeof(a));
// console.log(a);
let b : DoorState = DoorState["Close"];
// let d : string = DoorState[0];  //Error const enum can only accessed by using string literal



enum A{
    Red,
    Green,
    Blue = 10
}
enum A{
    Violet = 0,
    Yellow ,
    Orange = 10
 }
// console.log(A[0]);  //Red
// console.log(A["Red"]);  //0
// console.log(A[10]); //Blue
// console.log(A[3]);  //Violet
// console.log(A[1]);  //Yellow
// // console.log(A["Orange"]);   //10
// console.log(A[10]); //Orange
// console.log(A[0]);  //Violet

enum AnimalFlags{
    None = 0,
    HasClaws = 1 << 0,
    CanFly = 1 << 1,
    EatsFish = 1 << 2,
    Endangered = 1 << 3
}
console.log(AnimalFlags["HasClaws"]);
console.log(AnimalFlags["CanFly"]);
console.log(AnimalFlags[3]);