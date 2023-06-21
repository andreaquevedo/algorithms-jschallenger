// Sum object values

// Write a function that takes an object (a) as argument. Return the sum of all object values.

function myFunction(a){
    return Object.values(a).reduce((acc, item) => acc + item)
}

console.log(myFunction({a:1,b:2,c:3}))
console.log(myFunction({j:9,i:2,x:3,z:4}))
console.log(myFunction({w:15,x:22,y:13}))