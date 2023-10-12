class rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;      
    } 
}
let a = new rectangle(5,10)
let b = new rectangle(3,7)
let a1 = a.length * a.breadth;
let a2 = 2 * (a.length + a.breadth)
let b1 = b.length * b.breadth;
let b2 = 2 * (b.length + b.breadth)
console.log("Area of Rectangle a is : " + a1 + "\n" + "Perimeter of Rectangle a is : " + a2);
console.log("Area of Rectangle b is : " + b1 + "\n" + "Perimeter of Rectangle b is : " + b2);


