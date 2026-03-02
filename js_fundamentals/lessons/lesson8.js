// Declarative Funtions

// A function is a block of code that performs a specific task. Functions are reusable and can be called multiple times throughout your program.

function helloOne(){
    console.log('Hello One')
}

helloOne() // This will call the function helloOne and execute the code inside it, printing "Hello One" to the console.

// Annonymous function (function without a name)
var helloTwo = function(){
    console.log('Hello Two')
}

helloTwo() // This will call the anonymous function assigned to the variable helloTwo and execute the code inside it, printing "Hello Two" to the console.

// Arrow function (ES6 syntax)
var helloThree = () => {
    console.log('Hello Three')
}

helloThree() // This will call the arrow function assigned to the variable helloThree and execute the code inside it, printing "Hello Three" to the console.

// Function with arguments

function printName(name){
    console.log('Hello ' + name)
}

printName('MoMo') // This will call the function printName with the argument 'MoMo', and it will print "Hello MoMo" to the console.

function addNumbers(num1, num2){
    return num1 + num2
}

console.log(addNumbers(5, 10)) // This will call the function addNumbers with the arguments 5 and 10, and it will return the sum of these two numbers, which is 15. The console.log statement will then print 15 to the console.

function printName2 (name, last) {
    console.log('Hello ' + name + ' ' + last)
}

printName2('MoMo', 'Tran') // This will call the function printName2 with the arguments 'MoMo' and 'Tran', and it will print "Hello MoMo Tran" to the console.

// Function with return

function multipleByTwo(number){
    var result = number * 2
    return result   
}

var myResult = multipleByTwo(5) // This will call the function multipleByTwo with the argument 5, and it will return the result of multiplying 5 by 2, which is 10. The variable myResult will then hold the value 10.()
console.log(myResult) // This will print the value of myResult, which is 10, to the console.

var myResult = multipleByTwo(-4) 
console.log(myResult) 

// Importing function from another file

import { printAge } from '../helpers/printHelper.js'

printAge(25) // This will call the function printAge imported from the printHelper.js file with the argument 25, and it will print 25 to the console.
printAge(30) // This will call the function printAge imported from the printHelper.js file with the argument 30, and it will print 30 to the console.

// Import Everything

import * as helper from '../helpers/printHelper.js'
helper.printAge(2) // This will call the printAge function from the helper object, which contains all the exported functions from the printHelper.js file. It will pass the argument 35 to the printAge function, and it will print 35 to the console.