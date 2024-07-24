function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("U");
}

//sayMyName()

function addTwoNumbers(number1, number2)     //parameters
{
    let result =number1+number2
    //return result
    return number1+number2
    console.log("Madhubala");  //Unreachable code: after return in a function, the statements are it are never executed.
}
const result=addTwoNumbers(3,4)
console.log("Result:",result)
addTwoNumbers(3,4)   //passing arguments
addTwoNumbers(3,"4")  //34
addTwoNumbers(3,"A")  //3A
addTwoNumbers(3,null)

function loginUserMessage(username){  //if here for the parameter username if we write username="sam" or anything else it means that the value if username will be always be sam(and not undefined) if we have not passed any value to it.
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    return `${username} is just logged in`
}
console.log(loginUserMessage("Madhu"))
console.log(loginUserMessage())

//For e-commerce website adding unlimited items in cart and we have to continously add them when ever a new item is added.
function calculateCartPrice(val1,val2 , ...num1){  //here the name of this ... is rest operator whatever values are passed to it, it changes/adds it into an array, writing val1 and val2 takes the first two values send to function inside them and the rest of them goes into the array.
    return num1
}
console.log(calculateCartPrice(200,300,400))

const user ={
    username:"madhubala",
    price:199
}

function handleObject(anyObject){
   console.log(`Username is${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
    username:"sam",
    price:399
})

const myNewArray =[200,400,300,500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))  or can also pass array like the one given below also
console.log(returnSecondValue([200,400,600,800]))


