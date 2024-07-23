//Falsy Values
//undefined
//null
// 0
//''
//NaN

 var user = "null";  //Representing some value so will take it as true
 if(user) 
     {
         console.log("True");
     }
     var user = null;  //Representing as nothing so taking condition as false
     if(user)   
         {
             console.log("True");
         }
     var user = undefined;   //Representing as not defined so taking condition as false
     if(user)   
         {
             console.log("True");
       } 
     var user = 0;  //Representing no. zero which basically means false 
     if(user)   
         {
             console.log("True");
         } 
     var user ='';  //Representing as nothing(no character) so taking condition as false
     if(user)   
         {
             console.log("True");
         } 
    var user = "";  //Representing as nothing(no string) so taking condition as false
    if(user)   
             {
                 console.log("True");
           } 
           var user = NaN;  //Representing as nothing(Not a number) so taking condition as false
           if(user)   
                    {
                        console.log("True");
                  } 