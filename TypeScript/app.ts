enum StatusCode {
    statusCode1 = "hello",
    statusCode2 = "world",
}


const hello= <T>(a: String, b?: T):String=>{
    console.log(a,b);
    return a;
}

hello("Subhodeep", "hi");
hello("deep","Hi");
hello<String>("hey","12");