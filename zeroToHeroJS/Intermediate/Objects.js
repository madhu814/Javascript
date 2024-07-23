//There are two ways for creating object : using literals or using constructors
//Singleton: When we make objects using constructor than singleton is created means only one instance of the object is made.  ex. Object.create
//But when we create object using literals many instance of the objects are created it means here the singleton is not created.

//Object Literals:


const mySym = Symbol("key1")//

const JsUser = {
    name: "Madhubala" ,                             //key(any type) : value(any type)
    "full name":"Madhubala Singh",
    age: 18,
    location:"Jhansi",
    email:"er.madhubalasingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(JsUser.email)  //Accessing the key value pair of the objects  - this is the correct way but not the absolute correct way
console.log(JsUser["email"]) //another way
console.log(JsUser["full name"])





