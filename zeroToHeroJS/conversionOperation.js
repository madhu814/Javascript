// let score = 33
// console.log(typeof score); //or
// console.log(typeof (score));  //For both number will be printed
// score ="33"
// console.log(typeof score); //or
// console.log(typeof (score));  //Now for both string will be printed

 let valueInNumber = Number(score); //Conversion of string type of score variable to number type, here Number is a class, we can write other the other datatypes as this also
 console.log(typeof valueInNumber);  //Change in number 
 console.log(valueInNumber)  // here the string "33" which is changed to number 33 is printed 
// // But in the string we had not put a pure number suppose instead of 33 we put 33abd then it will be changed to number type using aboove technique but when we will print its value NaN will be printed
// // Example
// score =  "33abc"
// valueInNumber = Number(score); //Conversion of string type of score variable to number type, here Number is a class, we can write other the other datatypes as this also
// console.log(typeof valueInNumber);  //Change in number 
// console.log(valueInNumber) 
// score =  null
// valueInNumber = Number(score); //Conversion of string type of score variable to number type, here Number is a class, we can write other the other datatypes as this also
// console.log(typeof valueInNumber);  // number will be printed 
// console.log(valueInNumber)  // 0 will be printed

 /*
 Conversion:   From        To 
//               "33" =>     33
//               "33anbc" => NaN
//               true => 1    false => 0
// */
// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// // 1 ==> true; 0 ==> false
// // "" ==> false
// "Madhu" ==> true
// let someNumber = 33

// let stringNumber = String(someNumber) //Number is changed into string but still it prints 33
// console.log(stringNumber);
// console.log(typeof stringNumber)

let value = 28
let negValue = -value
 console.log(negValue)
 str1 ="Hello"
 str2 = " Madhu"
 str3 = str1+str2
 console.log(str3)
 console.log(2**3)  //** means power */
 console.log("1" + 2);  // Other number is also treated as string when there are two numbers
 console.log(1 + "2");   // Other number is also treated as string when there are two numbers
 console.log("1" + 2 + 2); //When there is more than two then if first number is string other two are also treated as strings
 console.log(1 + 2 + "2");  //When first numbers are numbers then they are added and then string is mixed with them at last 
// Some more ways of conversions(not preferred) are
console.log(+true);  //true ->> 1
console.log(+"")  //"" =>> 0

let gameCounter = 100
++gameCounter; //Prefix Increment
console.log(gameCounter)
//Link to study conversion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment







