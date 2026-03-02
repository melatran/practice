// Relational or Comparison Operators
// >, <, >=, <=, ==, ===, !=, !==
// more than, less than, greater than or equal to, less than or equal to, loose equality, strict equality, loose inequality, strict inequality

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 <= 3); // false
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(5 != '5'); // false (loose inequality)
console.log(5 !== '5'); // true (strict inequality)

// Relational or comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison. They are commonly used in conditional statements and loops to control the flow of the program. 

var result = 10 < 5 
console.log(result) // This will print the value of result, which is false. (always a booleoan value)

var result2 = 5 <= 5
console.log(result2) // This will print the value of result2, which is true.

var result3 = 10 != 11
console.log (result3) // This will print the value of result3, which is true.

var result4 = 10 === '10'
console.log(result4) // This will print the value of result4, which is false. (strict equality checks for both value and type)

var result5 = 10 !== '10'
console.log(result5) // This will print the value of result5, which is true. (strict inequality checks for both value and type)

//Equality operators (== and ===) are used to compare two values for equality. The loose equality operator (==) performs type coercion, which means that it converts the operands to the same type before making the comparison. The strict equality operator (===) does not perform type coercion and returns false if the operands are of different types. It is generally recommended to use the strict equality operator (===) to avoid unexpected results due to type coercion.

var x = 1
console.log (x == '1') // true (loose equality) // This will print true because the loose equality operator (==) performs type coercion and converts the string '1' to the number 1 before making the comparison.
console.log (x === '1') // false (strict equality) // This will print false because the strict equality operator (===) does not perform type coercion and returns false if the operands are of different types. In this case, x is a number and '1' is a string, so they are not strictly equal.