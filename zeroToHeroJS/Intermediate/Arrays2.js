const marvel_heros = ["thor" ,"Ironman" , "spiderman"]
const dc_heros = ["superman" ,"flash" ,"batman"]

//marvel_heros.push(dc_heros)  //Array goes inside array.Array also taken as a value    

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);  //But here one new array is made(combined of the two arrays).
console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros]   //Spread two arrays -- like concat but here more than two arrays can be used/spread.
//Here ... is spread operator. To Remember: When glass is fallen it get spreads.

console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)   // If you want the above array to come as one element at one index - infintiy represents the depth upto which you have make the array flat here it has to be 3 but infinity is nice to use if you don't the depth.
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))   //Asking if it is an array-false
console.log(Array.from("Hitesh"))  //Changing to array
console.log(Array.from({name: "hitesh"}))  //Interview Question -Empty will be returned(because does not know what it has to change into the array we have to specify whether you have to change key or value to array)

let score1 = 100
let score2 =200
let score3 = 300

console.log(Array.of(score1,score2,score3))   //Returns array from our given elements or variable 