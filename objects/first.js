// singleton
// Object.create()


// object literals
const mySym = Symbol("key1")
const userObj = {
    name:"Abhi",
    "full name":"Abhinay Jangde",
    age:22,
    location: "Mungeli",
    email:"abhi@codebhaiya.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "valueOfKey1"
}

console.log(userObj["full name"])
console.log(userObj["lastLoginDays"])
// console.log(typeof userObj.mySym) // not used as Symbol
console.log(userObj[mySym])

userObj.email = "abhinayjangde@gmail.com"
// Object.freeze(userObj)
// userObj.email = "fake@fake.com"
userObj.greet = function(){
    console.log("Hello JS Bro")
}
console.log(userObj.greet)
userObj.greet()


// Object Destructuring
const {name} = userObj;
console.log(name)
