//ES6 came in 2015 and brought many changes in JS and one such is arrow functions
const user = {
    username: "Madhu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)    //this refers to the current context(here object) inside the block
        console.log(this);  //current context inside the object. 
    }
}

user.welcomeMessage()  //Line no.8 
user.username="sammy"   //We can also change the value of the variable present inside the object by simply referring to the object using dot operator and its variable- changed the context(of which we are talking about)
user.welcomeMessage()
console.log(this)  //in Node environment  outside the object where there is no scope and empty object is printed.  -> {}\

//Interview Question: But when we run JS in browser there is we print this in the global scope instead of printing empty object it prints Windows. This is because it is this reason because of which we are able to use all features of windows ex.clicking

//Earlier the JS used to run in browser only.But now we are having the standalone JS Engines such as node and some more are also there. 

// function chai(){
//     let username="Madhu"
//     // console.log(this.username) we can't use this. inside any function
//     console.log(this)  //printing this inside any function prints :
//     //  <ref *1> Object [global] {
//         // global: [Circular *1],
//         // clearImmediate: [Function: clearImmediate],
//         // setImmediate: [Function: setImmediate] {
//         //   [Symbol(nodejs.util.promisify.custom)]: [Getter]
//         // },
//         // clearInterval: [Function: clearInterval],
//         // clearTimeout: [Function: clearTimeout],
//         // setInterval: [Function: setInterval],
//         // setTimeout: [Function: setTimeout] {
//         //   [Symbol(nodejs.util.promisify.custom)]: [Getter]
//         // },
//         // queueMicrotask: [Function: queueMicrotask],
//         // structuredClone: [Function: structuredClone],
//         // atob: [Getter/Setter],
//         // btoa: [Getter/Setter],
//         // performance: [Getter/Setter],
//         // fetch: [Function: fetch],
//         // crypto: [Getter]
//       }

// chai()

// function as a variable 
//const chai =function () {
//let username = "madhu"
//console.log(this.username); we can't use this. inside any function
//}

//Arrow funtion just replace function() by () =>
const doodhwalichai = () => {
    let username = "madhu"
    console.log(this.username)   // Difference between arrow function and normal function : Inside arrow function if we use this. then similar to global scope the empty {} are printed
}

//Using arrow function normally 
// const addTwo = (num1,num2) => {    //when we are writing curly braces then we have compulsorily write return keyword.
//     return num1 + num2           
// }

// Another way of using arrow function when have only one line of code inside the function and that also return only.

// const addTwo = (num1,num2)=> num1+num2  //implicit return technique: in this is already assumed that you are returning something.And offcourse no need to write return keyword

//Less Confusing use of arrow functions is :
const addTwo = (num1,num2)=> (num1+num2)   //note here I have used paranthesis () and not {} (refer line no.61) for the thing which we have to return. When we use paranthesis we don't need to write return keyword. This type of thing is majorly used in react.

//But to return an object we have to compulsorily rap it inside {} and this whole to be rapped inside a parathesis.  Ex.

const addTwoNum = (num1,num2) => ({username:"madhu"})




