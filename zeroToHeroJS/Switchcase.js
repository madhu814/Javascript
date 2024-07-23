// admin -get full access
// subadmin - gets access to create/delete
// testprep - gets access to create/delete tests
// user -gets access to consume content
//Other -Trial User
var user = "abc";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
        case "subadmin" :
        console.log("gets access to create/delete courses");
        break;
        case "testprep" :
            console.log("gets access to create/delete tests");
            break;
            case "user" :
        console.log("gets access to consume content");
        break;
    default:  
    console.log("Trial user");
        break;
}