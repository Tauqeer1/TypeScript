
let passcode = "secret passcode";


class Employee {
    private _fullName : string;
    
    
    public get fullName() : string {
        return this._fullName
    }
    public set fullName(v : string) {
        if(passcode && passcode=="secret passcode"){
            this._fullName = v;
        }
        else{
            console.log("Error ");
        }
    }
}


let employee = new Employee();

employee.fullName = "Tauqeer";
if(employee.fullName){
    console.log(employee.fullName);
}
