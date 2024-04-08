
//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Nishant",
    "full name":"Nishant Popli",
    [mySym]:"mykey1",
    age:"21",
    location:"Dehradun",
    email:"nishant@gmail.com",
    isloggedIn:false,
    lastLoginDays: ["monday","saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
//console.log(JsUser."full name")//can't access like this
console.log(JsUser["full name"])
//console.log(JsUser.mySym)//can't access like this
console.log(JsUser[mySym])


JsUser.email = "nishant@yahoo.com"
// Object.freeze(JsUser)
JsUser.email = "nishant@google.com"//these changes wont propagate


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());