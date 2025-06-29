let a: String = "hello";
let b: Number = 12;
let c: Boolean = true;
let d: Number[] = [12,13,14,15];
let e: [Number,String] = [12, "Hello"];

console.log(a,b,c,d,e);

enum Direction{
    Up="going up",
    Down="going down",
    Left="going left",
    Right="going right",
}

console.log(Direction);

interface Product{
    id: String,
    name: String,
    price: Number,
    discount?: Number
}

const greet= (name:String):void=>{
    console.log("Hello " + name);
}

greet("Subhodeep");