// Check if a number is a whole number

// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function myFunction(a){
    return Number.isInteger(a)
}

console.log(myFunction(4))
console.log(myFunction(1.123))
console.log(myFunction(1048))
console.log(myFunction(10.48))