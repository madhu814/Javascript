 console.log("2" > 1); //automatically "2" is treated as 2 
// console.log("02" > 1);

console.log(null > 0);    //false
console.log(null == 0);    //false
console.log(null >= 0)      // Conversion problem in javascript-true

console.log(undefined == 0);   //false
console.log(undefined > 0);     //false
console.log(undefined < 0);     //false

console.log("2" === 2);        //false -string and number not equal.
 //== and === work differently(example in above case num) as compared to comparision operators like > ,< >= and =<.
 //Comparisions convert null to a number,treating it as 0. That's why null>=0 is true and null>0 is false.
 //Many a times javascript does not provide predicted result of our comparasion,hence we should make sure that we compare values with same data type,a language called typescript does not allow comparasion of values of different data type.