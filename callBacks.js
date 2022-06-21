// setTimeout(function (){
//     console.log("Hello world 1");
// },4000);
// setTimeout(function (){
//     console.log("Hello world 3");
// },5000);
// setTimeout(function (){
//     console.log("Hello world 4");
// },6000);
// // Annoymous function 
// // 1. IIFE
// // 2. Callbacks
// function a(){
//     console.log("Hello world 2");
// }
// // let b = a();
// a();

setTimeout(()=>{
    console.log("Hello world 1");
}, 3000);

setTimeout(()=>{
    console.log("Hello world 2");
}, 3000);
setTimeout(()=>{
    console.log("Hello world 3");
}, 3000);

function a(){
    console.log("Hello world");
}
a();


setTimeout(()=>{
    let fact= 1;
    for(let i=1;i<=5;i++){
        fact *= i;
    }
    console.log(fact);
},4000)





















