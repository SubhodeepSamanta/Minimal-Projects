"use strict";
let a = "hello";
let b = 12;
let c = true;
let d = [12, 13, 14, 15];
let e = [12, "Hello"];
console.log(a, b, c, d, e);
var Direction;
(function (Direction) {
    Direction["Up"] = "going up";
    Direction["Down"] = "going down";
    Direction["Left"] = "going left";
    Direction["Right"] = "going right";
})(Direction || (Direction = {}));
console.log(Direction);
const greet = (name) => {
    console.log("Hello" + name);
};
greet("Subhodeep");
