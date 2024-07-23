// admin -get full access
// subadmin - gets access to create/delete
// testprep - gets access to create/delete tests
// user -gets access to consume content
//Other -Trial User
//GO THROUGH THIS VIDEO NO. 15 AGAIN -- NOT UNDERSTOOD
var name = "abc";

function getUserRole(name, role)
{
switch (name) {
    case "admin":
        return `${name} get full access`
        break;
        case "subadmin" :
            return `${name} get access to create/delete courses`;
        break;
        case "testprep" :
            return `${name} gets access to create/delete tests`;
        break;
        case "user" :
            return `${name}gets access to consume content`;
        break;
    default:  
    return `${name} Trial user`;
        break;
}
}
console.log(getUserRole("Madhu","testprep"));