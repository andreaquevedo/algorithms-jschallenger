// Calculate the sum of an array of numbers

// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

function myFunction(a){
    return a.reduce((acc, item) => acc + item)
}

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000,1]))
console.log(myFunction([-50,0,50,200]))
