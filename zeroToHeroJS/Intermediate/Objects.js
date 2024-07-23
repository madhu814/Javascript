//There are two ways for creating object : using literals or using constructors
//Singleton: When we make objects using constructor than singleton is created means only one instance of the object is made.  ex. Object.create
//But when we create object using literals many instance of the objects are created it means here the singleton is not created.

//Object Literals:


const mySym = Symbol("key1")  //Inyterviewer can ask you to declare a symbol and initialise it in an object and print it. This the way for declaring symbol and for initialising this object look in the object.

const JsUser = {
    name: "Madhubala" ,                             //key(any type) : value(any type)
    "full name":"Madhubala Singh",
    [mySym]: "mykey1",    //This is the way of initialising the symbol inside an object. For printing this value of symbol look in the console.log outside the object declarations.
    age: 18,
    location:"Jhansi",
    email:"er.madhubalasingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}

console.log(JsUser.email)  //Accessing the key value pair of the objects  - this is the correct way but not the absolute correct way
console.log(JsUser["email"]) //another way
console.log(JsUser["full name"])  // if we are accessing the key values of the objects then for string enclose it within doub;e inverted commas. 
console.log(JsUser[mySym])   //This is how you print the symbol
//In order to modify and key value of an object you can do this by the following line :
JsUser.email="madhubalasingh@google.com"
// Object.freeze(JsUser)  //this freeze function makes all the key value pairs of the object freeze,which means any changes made to any key value pair will not be propogated to it.
JsUser.email="madhubalasingh@microsoft.com"
console.log(JsUser)

//In JS you can treat functions as variables also
JsUser.greeting = function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo = function()
{
    console.log(`Hello JS user, ${this["full name"]}  `);
}
//.this is used to access the key values of that object inside any function.


console.log(JsUser.greeting)  // [Function (anonymous)] --The function is returned back,but function is not executed. 
console.log(JsUser.greeting())//Hello JS user- here functio has executed.
console.log(JsUser.greetingTwo())




