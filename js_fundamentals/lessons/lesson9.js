
// Importing Class

// import { CustomerDetails } from '../helpers/printHelper.js' // This will import the CustomerDetails class from the printHelper.js file located in the helpers directory, which is one level up from the current file.   


// var customerDetails = new CustomerDetails() // This will create a new instance of the CustomerDetails class and assign it to the variable customer.

// customerDetails.printFirstName('MoMo') // This will call the printFirstName method of the CustomerDetails class with the argument 'MoMo', and it will print "MoMo" to the console.

// customerDetails.printLastName('Tran') // This will call the printLastName method of the CustomerDetails class with the argument 'Tran', and it will print "Tran" to the console.


// Importing just the const

import { customerDetails } from '../helpers/printHelper.js' // This will import the customerDetails constant from the printHelper.js file located in the helpers directory, which is one level up from the current file.

customerDetails.printFirstName('Bubba') // This will call the printFirstName method of the CustomerDetails class with the argument 'MoMo', and it will print "MoMo" to the console.

customerDetails.printLastName('Cake')

// you can do the /** */ to add description to the method, which will be helpful for other developers who are using this method in the future. It provides information about what the method does and what parameters it takes. This is a good practice for code documentation and helps improve code readability and maintainability.