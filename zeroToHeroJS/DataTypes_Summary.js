//Based on how we place in data in memory and how we access it, DataTypes are of two types: Primitive and Non Primitive.
//Primitive DataTypes : these are call by value,their memory/reference is not given,their copy is given, and any changes done are reflected onto the copies. - 7 types: String, Number,Boolean, null, undefined, Symbol(making value unique), BigInt(For very big values)
 const score = 100  //while in TypesScript we have to write like this - const score : number = 20
 const scoreValue = 100.3   // this ia also a number 
 const isLoggedIn = false
 const outsideTemp = null
 console.log(typeof outsideTemp)
 let userEmail; /*is same as  userEmail=undefined; */
 const id = Symbol('123')
 const anotherId = Symbol('123') //id and anotherId are different
 console.log(typeof anotherId)

 console.log(id === anotherId);
 const bigNumber = 486263358471693n //n is used at the last to represent bigInt


//Non Primitive/Reference DataTypes -these are referenced type : Arrays, Objects, Functions
const heros = ["shaktiman","naagraj", "doga"]
let myObj = {
    name :"Madhu",  //Key Value Pairs
    age : 20,
}
/* function definition :  function(){} */
//Treating a function as a variable :
  const myFunction = function(){
    console.log("Hello world");
  }
  console.log(typeof myFunction)
  console.log(typeof bigNumber)

  // +++++++++++++++++++++++++++++++++++++++++++

  /* Memory Summary
      Stack (Primitive) : when a stack memory is used that means you get the copy of a variable,
       Heap(Non-Primitive) : when a heap memory is used it means that you get the reference of the original value, any changes you make gets reflected to the original variable.
      */
         //Primitive datatype ki kahani bus copy milti hai toh actual/original value change nahi hoti
       let myYoutubename = "Madhubala"

       let anothername = myYoutubename
       anothername = "madhu"

       console.log(myYoutubename);
       console.log(anothername);

       //Non-Primitive ki kahani copy nahi reference milta hai variable ka tohn agr koi changes karenge to original/actual value mei  reflect karta hai 

       let userOne = {
        email: "user@google.com",
        upi: "user@ybl"
       }

       let userTwo = userOne

       userTwo.email="madhubala@google.com"

       console.log(userOne.email);
       console.log(userTwo.email);

