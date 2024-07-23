// const tinderUser ={}    -> Empty object creation using literal, it is non singleton object 
//Object creation using constructor:
const tinderUser = new Object()   //Empty singleton object will be created. 

tinderUser.id="123abc"
tinderUser.name="Honey"
tinderUser.isLoggedIn =false

console.log(tinderUser); //{}

const regularUser = {
    email: "some@gmail.com",
    fullname :
    {
        userfullname: {
            firstname: "Madhubala",
            lastname:"Singh",
        }
    }
}

console.log(regularUser.fullname)   //{ userfullname: { firstname: 'Madhubala', lastname: 'Singh' }
console.log(regularUser.fullname.userfullname) //{ firstname: 'Madhubala', lastname: 'Singh' }
console.log(regularUser.fullname.userfullname.firstname)  //Madhubala
console.log(regularUser.fullname.userfullname.lastname)   //Singh

//Optional Chaining:
console.log(regularUser.fullname?.userfullname.firstname)  //Used in case of API calling saying if fullname exist then do this otherwise not.

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}
const obj4= {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}   Output:{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } 


//In assign the first parameter is the target ans the second is source the source is merged in target and target and variable in which ypu are storing becomes equal. So for a more clearer side you can type the the target as {}  (means an empty object) so that if ypu use more objects to merge than then they are merged into an new empty object.The reason for doing so is also because since you are creating a new object and allocating a new memory than why not storing in an empty object.
const obj3 = Object.assign(obj1,obj2)
const obj5
console.log(obj3)