// Functions are the First Class Citizens.
// First Class Citizens means we can use the function as the normal variable.

// HOF
let a = (x,y)=>{
    return x+y;
}

let b = a; 
// We can pass the function into a variable

console.log(b(6,7));


// let a  = 5;
// let b = a;
// console.log(b);