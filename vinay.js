let num = parseInt(process.argv[2])
let perf = 0;
for(let i=1;i<num;i++){
    if(num%i==0){
        perf= perf+i;
    }
}
if(perf == num){
    console.log("Perfect number")
}else{
    console.log("Not perfect number")
}