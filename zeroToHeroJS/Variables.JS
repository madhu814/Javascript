//JavaScrupt is a dynamically typed language/
// var fullName = "Madhubala Singh"; //Generally don't start a variable with uppercase although it will not give an error but its not a good practice to write its used for someother purpose
// // fullName
// //full-name
// //full_name
// var courseName = "React JS Bootchamp";

// var isLoggedIn  = false; //In js false and true are two boolean types and false and False(another keyword) is different

// var loggedCount = 34; // storing number
// var num1 =7;
// var 2num =6; // not valid variable name should not begin with a number
// // console.log(loggedCount);  //Printing value of loggedCount
// // console.log("loggedCount"); //Printing loggedCount as it is

// var paymentMode; //Not assigning any valuw because we don't know which payment mode will user use
// console.log(paymentMode); //undefined will be printed since till here no value is assigned to paymentMode
// paymentMode = "Credit Card";
// console.log(paymentMode);  //Value of paymentMode will be printed since the value is assigned to paymentMode before printing it
// //Reserved Keywords : if,var,const,console,log.
const uid ="abc123";                //Scope of let and const are block scope.
var firstName = "Madhubala";       //Scope of var variable is functional or global scope.
var lastName = "Singh";     //In JavaScript  it is not neccessary to write semi colon at the end.
var PhoneNo = 8888888888;
MartialStatus = "Single";  //We can also declare variable without writing var,let and const also, but it is not a good way to do so.
var Country = "India";
var district = "Jhansi";
var State ="Uttar Pradesh";
var email = "er.madhubalasingh@gmail";
var password ="123467";
var confirmPassword = "1234567";
var courseCount = 0;
var isLoggedInFromFacebook = true;
var isLoggedInFromGoogle = false;
// console.log(fullName);
// console.log("Full Name is : " +fullName); //or
// // console.log("Full Name is : " ,fullName); //Both are correct
// console.log(email);
// console.log(uid);
//A better way to display these things is : Interpolation-here we make use of back ticks(`) placed under the esc key of the keyboard, and the variable whose value we have to print is enclosed within curly braces with a $ sign before that.
console.log(`                                                        
        With Unique ID: ${uid}
        User's first Name : ${firstName}
        User's last Name : ${lastName}
        and his email is: ${email}
        and uses the password: ${password}
        Phone no is :${PhoneNo}
        Lives in :${district},${State},${Country}
`)
console.table([uid,lastName,email, password, PhoneNo]) //Used to view values of your variables in table
//Scope ->> means things inside {}
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/