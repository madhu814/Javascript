const score = 400      //since we have assigned a number to this variable so by default the datatype of this  variable is set to number 
console.log(score);

const balance = new Number(100);  // But can explicitly define a variable as number type like this 
console.log(balance);

console.log(balance.toString().length);      // Converting a number to string, and as it is changed to string we can make use of functions of strings.
console.log(balance.toFixed(2)); // Changing a number to a decimal number with two digits after the decimal.
console.log(balance.toFixed(1)); // Changing a number to a decimal number with one digit after the decimal.

 const OtherNumber= 23.8966
 const OtherNumber1= 123.8966
 const OtherNumber2= 1123.8966

 console.log(OtherNumber.toPrecision(3));    // Output 23.9
 console.log(OtherNumber1.toPrecision(3));   //Output 124
 console.log(OtherNumber1.toPrecision(4));   //Output 123.9
 console.log(OtherNumber2.toPrecision(3));    //Output 1.12e+3

 const hundreds = 1000000
 console.log(hundreds.toLocaleString());    // Commas(by default commas are added using Indian Number System) are inserted in the number


//+++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++

console.log(Math.PI);   //Prints value of PI
console.log(Math.abs(-5));
console.log(Math.round(4.6));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.9));
console.log(Math.min(4,9,3,8));
console.log(Math.max(4,3,6,7,8,2));
console.log(Math.random());     //Using random value from 0 to 1 will be printed
console.log((Math.random()*10) +1); // We are trying to print value greater than 1 , but their can be acase such that 0.012773892929 is the output of the random function so to avoid this case we are adding 1
console.log(Math.floor(Math.random()*10) +1); // Getting a proper number without decimal 

const min = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1)) +min)   // Trying to get a random number between 10 to 30.