// const user1 = new Object()
// const user2 = Object.create({})
// const user3 = {}
// console.log(
//     user1 === user2,
//     user1 === user3,
//     user2 === user3
// )

const obj1 = {
    a:"1",
    b:"2"
}
const obj2 = {
    c:"3",
    d:"4"
}
const obj3 = {
    e:"5",
    f:"6"
}

// const mergedObj = {obj1, obj2}
// const mergedObj = obj1 + obj2 // undefined
// const mergedObj = {...obj1, ...obj2}
const mergedObj = Object.assign({}, obj1,obj2,obj3)
// console.log("obj1 ", obj1)
// console.log(mergedObj)

const codeUser = {
    id:1,
    name:"Abhi",
    email:"abhi@gmail.com",
    age: 22
}

// console.log(codeUser)
// console.log(Object.keys(codeUser))
// console.log(Object.values(codeUser))
// console.log(Object.entries(codeUser))


// console.log(codeUser.hasOwnProperty("name"))

let {name,age} = codeUser;
// console.log(name,age)
console.log(codeUser.valueOf())