let a=300 //Global scope
// scope -> {}
if (true) {
    let a= 10   //block scope
    const b=20
    var c= 30   //globally same 
    console.log("INNER"+a) 
}
// console.log(a)  output a is not defined because its declared inside if block(Scope) with let 
// console.log(b) output b is not defined because its declared inside if block(Scope) with const 
console.log(c)
console.log("OUTER"+a) 
//Interview Question: The global scope when ypu the code in browser is different and when you run in code environment it is different.
// for (let i=0; i< Array.length;i++)
// {    const element = array[i];
// }