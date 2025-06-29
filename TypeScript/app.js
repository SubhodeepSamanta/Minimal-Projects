"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode["statusCode1"] = "hello";
    StatusCode["statusCode2"] = "world";
})(StatusCode || (StatusCode = {}));
const hello = (a, b) => {
    console.log(a, b);
    return a;
};
hello("Subhodeep", "hi");
hello("deep", "Hi");
hello("hey", "12");
