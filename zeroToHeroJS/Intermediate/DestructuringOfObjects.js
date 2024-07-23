const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

//course.courseInstructor - for extracting the value of courseInstructor from course object, but if have to print/access this value multiple times than writing course.courseInstructor again and again is a hectic task so for this their is another syntax for it :
const {courseInstructor} = course  // data type{key whose value you want to extract} = Object name from which you have to extract.
console.log(courseInstructor)
//or you can do destructing of this object like this also 
const {courseInstructor : instructor} = course
console.log(instructor)
