
interface ClockInterface {
    new (hour : number , minutes : number);     //this defines the constructor signature
    
}


class Clock1 implements ClockInterface {    //Error class incorrectly implements interface
    currentTime : Date;
    constructor(h : number , m : number){}
}


interface IclockStatic {
    new (hour : number , minutes : number);
}
interface ImyClockInterface { 
    currentTime : Date;
}

class Clock implements ImyClockInterface {
    currentTime : Date;
    constructor(h : number , m : number){}
}


let cs : IclockStatic = Clock;

let newClock : ImyClockInterface = new cs(7,30);




