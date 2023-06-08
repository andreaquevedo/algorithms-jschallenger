// Return the average of an array of numbers

// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function myFunction(arr){
    return arr.reduce((acc, item) => acc + item) / arr.length
}

console.log(myFunction([10,100,40]))
console.log(myFunction([10,100,1000]))
console.log(myFunction([-50,0,50,200]))