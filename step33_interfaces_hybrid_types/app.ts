
//An example of hybrid type is an object that acts as both a function and an object , with additional properties


interface Counter {
    (start : number) : string;
    interval : number;
    reset() : void;
}

let c : Counter;

c(10);
c.reset();
c.interval = 10;
console.log(c);