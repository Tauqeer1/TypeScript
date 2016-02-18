//In typescript each member is public by default
class Animal {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
    move(meters : number){
        console.log(this.name + " moved " + meters + "m.");
    }
    
}


let a : Animal = new Animal("Goat");
console.log(a);


class Ani {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
}
class Rhino extends Ani {
    constructor(){
        super("Rhino");
        
    }
}
class Employee {
    private name : string;
    constructor(theName : string){
        this.name = theName;
    }
}

let ani : Ani = new Ani("Goat");
let rhi : Rhino = new Rhino();
let emp : Employee = new Employee("emp");

// 1 < 0 = true
ani = rhi;
ani = emp;      //Both are not equal due to private name property are different in both classess


