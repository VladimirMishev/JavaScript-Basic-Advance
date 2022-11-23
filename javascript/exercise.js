// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result


// 1) Create three new variables:
let courseName = "100 days challenge, HTML - CSS - JavaScript and much more";
let coursePrice = 11.99;
let couseGoals = ['Find better job', 'Working form home', 'Increase my Income', 'Provide better life for my family'];
// 2) Output ("alert") the three variable values
console.log(courseName);
console.log(coursePrice);
console.log(couseGoals);
// 3) Try "grouping" the three variables together and still output their values thereafter
let courseInfo = {
    courseName: courseName,
    coursePrice: coursePrice,
    couseGoals: couseGoals
}
console.log(courseInfo);
// 4) Also output the second element in your "main goals" variable
console.log(couseGoals[1]);
// 5) Add a custom command that does the following:
function getListItem (arrayName, index) {
    return arrayName[index];
}
// 6) Execute your custom command from (5) and output ("alert") the result
console.log(getListItem(courseInfo.couseGoals, 1));

console.log(window);
console.log(window.document);
console.log(document);

document.body.children[1].children[0].href = "https://google.com"

console.log("Hello, I am here.")