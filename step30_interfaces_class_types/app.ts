interface ClockInterface {
    currentTime : Date;
    setTime(d : Date);
}

class Clock implements ClockInterface {
    currentTime : Date;
    setTime(d : Date) {
        this.currentTime = d;
        console.log(this.currentTime);
    }
    constructor(h : number, m : number){
        this.currentTime = new Date();
    }
}

let a : Clock = new Clock(2,2);
a.setTime(new Date());
// console.log(a.currentTime);
