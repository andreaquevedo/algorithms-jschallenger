// Basic JavaScript math operators

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b. Then substract by c. Then multiply by d and divide by e. Finally raise to the power of f and return the result. Tipp: mind the order.

// My solution
function myFunction(a, b, c, d, e, f){
    let sum = a + b
    let substract = sum - c
    let multiply = substract * d
    let divide = multiply / e
    return Math.pow(divide, f) 
}

/* author's solution

function myFunction(a, b, c, d, e, f) {
   return (((a + b - c) * d) / e) ** f;
}
*/

console.log(myFunction(6,5,4,3,2,1))
console.log(myFunction(6,2,1,4,2,3))
console.log(myFunction(2,3,6,4,2,3))