// Return the longest string from an array of strings

// Write a function that takes an array of strings as argument. Return the longest string.

function myFunction(arr){
    return arr.reduce((acc, item) => acc.length > item.length ? acc : item)
   
   /* Solución secundaria
   const arrLength = arr.map((item) => item.length)
   const max = Math.max(...arrLength)
   return arr.find((item) => item.length === max)*/
}

console.log(myFunction(['help', 'me']))
console.log(myFunction(['I', 'need', 'candy']))
