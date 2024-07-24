//arrays

const myArr =[0,1,2,4,6,8]  //Different types of elements can also be there
//Arrays of Javascript are resizable
const heros =["shatkiman", "naagraj"];
console.log(heros[1]); //naagraj
console.log(heros[2]);  //undefined
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4,5); //Another way of declaring arrays.
console.log(myArr2);
console.log(myArr2[1]);
//In JS when we make copy of an array, shallow copies(of an object/array is a copy whose properties share the same references(point to the same underlying values) as those of the source object/array from which the copy are made) are created.
myArr.push(6);  //Value added in array.
myArr.pop();    //Removes the last value of array
myArr.unshift(9); //Used to add value in array from beginning. ex of such thing is when you add anything in the top of your to-do list.
myArr.shift()     //Removes the first value of an array
console.log(myArr)   //Prints the whole array
console.log(myArr.includes(9));  //Check whether the given number(here 9) is included/present in the array or not and gives output as a boolean value.
console.log(myArr.indexOf(4)) //Gives the index of 4 in the array and if you ask for such a value which does not exist in the array the output will be -1

const newArr = myArr.join()  //Binds the array and change it into string
console.log(myArr);       //[ 0, 1, 2, 4, 6, 8 ]
console.log(newArr);     //0,1,2,4,6,8
console.log(typeof newArr); //type of array is object

//Interview Question
// slice-return a section of array from given start and end range (end range not included),splice -return a section of array from given start and end range(included)
//Interview -- But the one more difference between splice and slice is not only above instead.. slice keeps the original array intact but splice changes(removes the part of array) the original array

console.log("A",myArr);

const myn1 = myArr.slice(1,3);  //it means include 1st,2nd but don't include 3rd

console.log(myn1);
console.log("B",myArr);   //using slice original array is not changed.

const myn2 = myArr.splice(1,3);  //includes 1st,2nd and 3rd
console.log(myn2)
console.log("C",myArr)   //using splice original array is not changed.


