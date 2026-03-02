//Concatination and Interpolation

//var messageToPrint = 'The price of your cup is 50 dollars'

var price = 50
var item = 'cup'

var messageToPrint = 'The price of your '+item+' is '+price+' dollars' // This is called concatenation, where we combine strings and variables together using the + operator. This can be difficult to read and maintain, especially when we have multiple variables and strings to combine.
console.log(messageToPrint)

var price2 = 21
var item2 = 'teddy bear'

var messageToPrint2 = `The price of your ${item2} is ${price2} dollars` // This is called interpolation, where we use template literals (backticks) and ${} to embed variables directly into the string. This is much easier to read and maintain, especially when we have multiple variables and strings to combine.
console.log(messageToPrint2)

// Interpolation is a more modern and cleaner way to combine strings and variables, and it is recommended to use it over concatenation in most cases.

