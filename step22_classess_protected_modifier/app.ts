/*
Protected keyword allows subclass to gain visibility into 
parent class without exposing the API
 */

class ListString {
    private contents : string[];
    constructor(){
        this.contents = []; //initializing the empty array
    }
    protected setElement(index : number , item : string){
        this.contents[index] = item;
    }
}

class StackString extends ListString{
    currentIndex : number;
    constructor(){
        super();
        this.currentIndex = 0;
    }
    public push(item : string){
        this.setElement(this.currentIndex,item);
        this.currentIndex++;
    }
}

let stack = new StackString();
stack.push("Tauqeer");
stack.push("Ahmed");
stack.push("Shakir");
console.log(stack);
let anotherStack = new StackString();

anotherStack.push("Tauqeer");
anotherStack.push("Ahmed");
anotherStack.push("Shakir");
console.log(anotherStack);


stack.setElement(0,1);  //Error can not access outside the class because of protected
