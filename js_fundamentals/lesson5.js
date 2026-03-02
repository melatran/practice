// Logical "And"

console.log(true && true);   // true (all values have to be true for expression to be true)
console.log(true && false);  // false (one value is false, so expression is false)
console.log(false && true);  // false (one value is false, so expression is false)
console.log(false && false); // false (all values are false, so expression is false)

// Logical "Or"


console.log(true || true);   // true (at least one value is true, so expression is true)
console.log(true || false);  // true (at least one value is true, so expression is true)
console.log(false || true);  // true (at least one value is true, so expression is true)
console.log(false || false); // false (all values are false, so expression is false)        

var ageIsMoreThanEighteen
var isUSCitizen

ageIsMoreThanEighteen = true
isUSCitizen = false

console.log('This cusumer is eligible to vote: ' + (ageIsMoreThanEighteen && isUSCitizen)) // This will print false because both ageIsMoreThanEighteen and isUSCitizen are undefined, which is a falsy value in JavaScript. Therefore, the expression evaluates to false.

ageIsMoreThanEighteen = false
isUSCitizen = true

console.log('This cusumer is eligible to vote: ' + (ageIsMoreThanEighteen && isUSCitizen)) // This will print false because isUSCitizen is false, which makes the entire expression false.

ageIsMoreThanEighteen = true
isUSCitizen = true

console.log('This cusumer is eligible to vote: ' + (ageIsMoreThanEighteen && isUSCitizen)) // This will print true because isUSCitizen is true, which makes the entire expression true.

console.log('This cusumer is eligible to vote: ' + (ageIsMoreThanEighteen || isUSCitizen)) // This will print true because ageIsMoreThanEighteen is true, which makes the entire expression true.

//Logical "Not"

console.log(!true);
console.log(!false);

var isRaining = true
console.log('Is it not raining? ' + !isRaining) // This will print false because isRaining is true, and the logical NOT operator (!) negates it to false.

isRaining = false
console.log('Is it not raining? ' + !isRaining) // This will print true because isRaining is false, and the logical NOT operator (!) negates it to true.    