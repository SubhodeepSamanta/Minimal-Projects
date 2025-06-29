interface User{
    id: Number,
    name:String
}

interface Admin extends User{
    isAdmin: Boolean
}

type User1={
    id:Number,
    name:String
}

type Admin1 = User1 & {
    isAdmin: Boolean
}

type Dog= ()=> void;
type Cat= ()=> void;

type Animal= Cat & Dog;
type Animal1= Cat | Dog;


class Person{
    private _name:string;
    public age:number;
    constructor(name:string, age:number=0){
        this._name=name;
        this.age=age;
    }
    get name(){
        return this._name;
    }
}

const me= new Person("Subhodeep");

console.log(me.name);


const wrapInArray=<T>(value: T): T[]=>{
    return [value];
}