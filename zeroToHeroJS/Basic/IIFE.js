//Immediately Invoked Function Expressions(IIFE)

(function chai(){
    console.log('DB CONNECTED')
})();    //Functions which are executed immediately, and mainly there is a possiblity of pollution caused due global scope(theirm variables and anything) and so to remove this pollution we make use of IIFE. Interview Question: And such are invoked immediately but they don't know where to end it and so for this reason we have to place a semicolon after it.

( function aurcode()
{
    console.log('DB CONNECTED TWO');
})();

(   (name) =>{      //IIFE Arrow Function
    console.log(`DB CONNECTED TWO BY, ${name}`);
}
)("madhu")