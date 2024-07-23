const name='Madhubala'
const repoCount = 20
// very outdated way of concatenating -  console.log(name + repoCount + " Value");

//Modern way is
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Madhu-er')    //Another way for initialising or declaring string using this we have variety of functions we can make use of and play with String, and here string are created as a key value pairs like from 0 to (n-1)th lenght of string is assigned each consecutive character of the string

console.log(gameName[0]);   //Accessing key value pairs
console.log(gameName.__proto__); //gives output {} representing object
console.log(gameName.length);
console.log(gameName.toUpperCase());   // New string is formed in stack which is in upper case, original string is not changed-hence here also the string is immutatble.
console.log(gameName);
console.log(gameName.charAt(2));  //To get character at a certain index
console.log(gameName.indexOf('d'));  //To get the index of a certain character

const newString1 = gameName.substring(0,5);
console.log(newString1);
const newString = gameName.substring(2,-5); // In the paranthesis of substring first we write start index as from which you have to start the subvstring and second is  end index as from which you don't want to inculde in the substring of the string, and in substring if you give a negative number, it will ignore and consider it as 0 and start the substring from beginning,and here the substring starts from 0 to 1(2-1).
console.log(newString);
// In slice you can give a negative number also negative no. means starting from reverse/end
const anotherString = gameName.slice(-7,4) /*means from 6th(7-1) index from the last to 3 count.
Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
If start < -array.length or start is omitted, 0 is used.
If start >= array.length, an empty array is returned.*/
console.log(anotherString)
console.log(gameName.trim()); //trim(removes) whitespaces from start and end

const url = "https://hitesh.com/hitesh%20choudhary"   // Suppose someone has a url which has a sapce in between, but browser does not understands space so it places %20 in its place, so defintely we have to remove this %20 so we make use replace
console.log(url.replace('%20','-'));
// We can also check whether the contains a specific Substring or not using include.

console.log(url.includes('hi'));
//We can also split strings based on certain things be it space, - or something  else whatever we want using slipt() funtion,for this the output is an array containing the two separate strings on each index.
console.log(gameName.split('-'));

var str = "Pawan kumar jha";
    var a = str.startsWith("Pawan");   //startsWith(): — It is used to check whether a string begins with the specified characters.
    console.log(a);

    var str = "Pawan kumar ";
    var str1 = "Jha"
    var a = str.concat(str1);    //concat(): — It is used to combine texts of two strings and return a new string.
    console.log(a);

    var str = "Pawan kumar jha";
    var a = str.match("Pawan");     //match(): — It is used to match a regular expression against a string.
    console.log(a);

//Write artical on functions used in Strings  - in OneNote ✅
//Read MDN References for String -did not understand their better so read an artical on hashnode ✅
//You can also see functions of string by going in console( type this const gameName = new String('Madhu-er')) by inspecting any webpage and then type this variable name, click on play button of string, you will be able to see various function used in strings ✅


