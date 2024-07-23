//Allow user to access course if he is:
//logged in from email
//logged in from Google
//logged in from Facebook

var email = false;
var Facebook = false;
var Google = true;
// if(email)
//     {
//         console.log("Login Success");
//     }
//     else if(Google)
//         {
//             console.log("Login Success")
//         }
//     else if(Facebook)
//         {
//             console.log("Login Success");
//         }
//         else
//         {
//             console.log("Login Unsuccess");
//         }    OR
if(email || Facebook || Google)
    {
        console.log("Login Success");
    }