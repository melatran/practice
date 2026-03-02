// Loops

// console.log('Hi MoMo')
// console.log('Hi MoMo')
// console.log('Hi MoMo')

// Loops are used to repeat a block of code until a specified condition is met. They are useful for performing repetitive tasks without having to write the same code multiple times.

// for(statement1; statement2; statement3){
    
// }

// statement1 is executed before the loop starts (initialization)
// statement2 is evaluated before each iteration (condition)
// statement3 is executed after each iteration (increment/decrement)

//for loop (for i loop)
for(let i=0; i<5; i++){
    console.log('Hi MoMo' + i) // This will print "Hi MoMo" followed by the current value of i, which ranges from 0 to 4. The loop will execute 5 times, printing "Hi MoMo0", "Hi MoMo1", "Hi MoMo2", "Hi MoMo3", and "Hi MoMo4".
}

var fruits = ['apple', 'banana', 'orange']

//loop through each item

//For of loop

for(let fruit of fruits){
    // fruit is the variable that will hold the current item in the array during each iteration of the loop. The loop will iterate through each element in the fruits array, and during each iteration, the current fruit will be assigned to the variable fruit. The console.log statement will then print the value of fruit, which will be "apple", "banana", and "orange" in successive iterations.
    console.log(fruit)
    //interupt loop if fruit is banana
    if (fruit === 'banana'){
        break // This will exit the loop immediately when the condition is met, so "orange" will not be printed.
    }   
}

//example with ES6 Syntax

fruits.forEach(fruit => {
    console.log(fruit)
})