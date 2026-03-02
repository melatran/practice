// Hello World

console.log("Hello World");

// ran `node lesson1.js` in terminal to execute this file and see the output in the terminal.

// Variables

var firstName = 'John'
let lastName = 'Smith'

console.log(firstName);
console.log(lastName);

var age, dateofBirth, sex
age = '15'
dateofBirth = '01/01/2000'
sex = 'Male'
age = '4'

console.log(age);
console.log(dateofBirth);
console.log(sex);

//Constants

const occupation = 'Software Engineer'
console.log(occupation);
occuptation = 'Doctor' // This will throw an error because occupation is a constant and cannot be reassigned.
console.log(occupation)

// variables hold information for a time and can be reassigned, while constants hold information that cannot be changed once it is assigned.

// Data Types

var middleName = 'Michael' // String
var ageOfBrother = 23 // Number
var isMarried = false // Boolean
var yearsInMarriage = null // Null is a special value that represents the absence of any value. It is often used to indicate that a variable has been declared but has not yet been assigned a value.
var children = undefined // Undefined is a special value that represents the absence of a value. It is often used to indicate that a variable has been declared but has not yet been assigned a value. The difference between null and undefined is that null is an intentional assignment of no value, while undefined is the default value of a variable that has not been assigned a value.
