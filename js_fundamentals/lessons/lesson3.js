// Objects

// Objects are a collection of key-value pairs. They are used to store data in a structured way.

var customer = {
    firstName: 'MoMo',
    lastName: 'Dang',
    fruits: ['apple', 'banana', 'orange']
}

console.log(customer) // This will print the entire customer object to the console. 

//{ firstName: 'MoMo', lastName: 'Dang' }

console.log(customer.firstName)

console.log(customer['lastName']) // This is another way to access the value of a key in an object. It is useful when the key is stored in a variable or when the key has special characters that cannot be used with dot notation.

//Dot Noation
customer.firstName = 'Lizzie' // This is how we can update the value of a key in an object. We can use either dot notation or bracket notation to do this.

console.log(customer.firstName) // This will print the updated value of the firstName key in the customer object.

//Bracket Notation
customer['lastName'] = 'McGuire' // This is another way to update the value of a key in an object. We can use either dot notation or bracket notation to do this.

console.log(customer['lastName']) // This will print the updated value of the lastName key in the customer object.

// Objects are a fundamental data structure in JavaScript and are used to represent real-world entities and their properties. They are also used to create more complex data structures, such as arrays of objects and nested objects.

console.log(`${customer.firstName} ${customer.lastName}`) // This is an example of interpolation, where we use template literals (backticks) and ${} to embed variables directly into the string. This is much easier to read and maintain, especially when we have multiple variables and strings to combine.  


// Arrays
// Arrays are a collection of values that are ordered and indexed. They are used to store multiple values in a single variable.

var fruits = ['apple', 'banana', 'orange']

console.log(fruits) // This will print the entire fruits array to the console.

//[ 'apple', 'banana', 'orange' ]

console.log(fruits[0]) // This will print the first element of the fruits array, which is 'apple'. Arrays are zero-indexed, which means that the first element is at index 0, the second element is at index 1, and so on.

fruits[1] = 'grape' // This is how we can update the value of an element in an array. We can use the index of the element to access it and assign a new value to it.

console.log(fruits[1]) // This will print the updated value of the second element in the fruits array, which is now 'grape'.

// Arrays are a fundamental data structure in JavaScript and are used to store and manipulate collections of data. They have many built-in methods that allow us to perform various operations on them, such as adding, removing, and sorting elements.

console.log(`The first fruit in the array is ${fruits[0]}`) // This is an example of interpolation, where we use template literals (backticks) and ${} to embed variables directly into the string. This is much easier to read and maintain, especially when we have multiple variables and strings to combine.

console.log(customer.fruits[2])