"use strict";
class Person {
    constructor(name, age) {
        this._name = "";
        this.age = 0;
        this._name = name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
}
const me = new Person("Subhodeep", 20);
console.log(me.name);
