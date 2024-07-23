/*JavaScript  'Date' Objects represent a single moment in time ina platform-independent format.
    Date objects encapsulte an integral number that represents milliseconds since the midnight at the bed=ginning of 
    January 1, 1970,UTC*/

    let myDate = new Date()
    console.log(myDate);                      //Output -2024-06-27T17:24:03.807Z  
    console.log(myDate.toString());          //Thu Jun 27 2024 22:54:03 GMT+0530 (India Standard Time)
    console.log(myDate.toISOString());      //Output -2024-06-27T17:24:03.807Z  
    console.log(myDate.toDateString());    //Thu Jun 27 2024
    console.log(myDate.toJSON());         //Result of First(with no function)(Output comes in pink color), ISO String and this one(output came in white color) is same. That is - 2024-06-27T17:24:03.807Z  
    console.log(myDate.toLocaleString()); //27/6/2024, 11:00:00 pm    
    console.log(typeof myDate);               //Type of date is object -INTERVIEW QUESTION date is an object

    let myCreatedDate = new Date(2023,0,23)      //In JavaScript Month starts from 0 when we write commas- Format YY,MM,DD
    console.log(myCreatedDate.toDateString());   //Mon Jan 23 2023
    let mySecondCreatedDate = new Date(2023,0,23,5,3)   //Format -(Year,Month,Date,Hours,Minutes)
    console.log(mySecondCreatedDate.toLocaleString());  //23/1/2023, 5:03:00 am
    console.log(mySecondCreatedDate.toDateString());  //Mon Jan 23 2023
    let myAnotherDate = new Date("2023-10-14")    // But when we write hypen(-) then month starts from 1 |YY-MM-DD 
    console.log(myAnotherDate.toLocaleString());   // 14/10/2023, 5:30:00 am
    let anotherDate = new Date("01-14-2023");   // MM-DD-YY
    console.log(anotherDate.toLocaleString());  // 14/1/2023, 12:00:00 am
    console.log(anotherDate.toDateString()); // Sat Jan 14 2023
     //TimeStamps are useful when we making quizes and polls
    let myTimeStamp = Date.now();   // time is calculated from midnight at the beginning of 1 January 1970 till now in miliseconds
    console.log(myTimeStamp);       //1719510174078
    console.log(myCreatedDate.getTime());  // time is calculated from midnight at the beginning of 1 Jan 1970 till our given date in milliseconds - 1674412200000 
    //Now we can easily compare the above two 
    console.log(Math.floor(Date.now()/1000)); //To get value in seconds
    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth()+1);
    console.log(newDate.getDay());  //4 -4th day of week
    newDate.toLocaleString('default'/* for Internationalisation  */ ,{
        weekday:"long"  /** monday instead of mon */
    })
 /** More than one property can be used for above case, timezone can also be there */