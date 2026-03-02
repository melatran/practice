// Conditional Statement

//if(condition) {
    //execute this code if condition is true
//} else {
    //execute this code if condition is false
//}

// If hour between 6 and 12, print "good morning"
// If hour between 12 and 18, print "good afternoon"
// Otherwise, print "good evening"

var hour = 5 // returns good evening because hour is less than 6, which makes the condition in the if statement false. Therefore, the code in the else block will be executed, printing "good evening".
var hour = 6 // returns good morning because hour is greater than or equal to 6 and less than 12, which makes the condition in the if statement true. Therefore, the code in the if block will be executed, printing "good morning".
var hour = 13 // returns good afternoon because hour is greater than or equal to 12 and less than 18, which makes the condition in the else if statement true. Therefore, the code in the else if block will be executed, printing "good afternoon".
var hour = 18 // returns good evening because hour is greater than or equal to 18, which makes the condition in the else block true. Therefore, the code in the else block will be executed, printing "good evening".

if (hour >=6 && hour < 12){
    console.log('good morning')
} else if (hour >= 12 && hour < 18){
    console.log('good afternoon')
} else {
    console.log('good evening') 
}

var ageIsMoreThanEighteen = true
var isUSCitizen = false

if (ageIsMoreThanEighteen && isUSCitizen){
    console.log('This cusumer is eligible to vote')
} else {
    console.log('This cusumer is not eligible to vote') 
}