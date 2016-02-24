

//Interface can extend multiple interface and classess

class Point {
    x : number;
    y : number;
    static a : number;
}

interface Point3d extends Point {
    z : number;
    
}

let point3d : Point3d = { x : 1 , y : 2 , z : 3};

let anotherPoint : Point3d = {z : 2 , x : 3 , y : 5 , a : 3};   //Error can not access static properties in literal object
