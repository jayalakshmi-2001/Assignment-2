var readlineSync = require('readline-sync');
let number= parseInt(readlineSync.question("Enter the size of an array : "));
let arr=[]
for(let i=0;i<number;i++){
    arr[i]=parseInt(readlineSync.question("Enter the values of array : "));
}
console.log("Your array is here",arr);
let even=0;
for(i=0;i<=number;i++){
    if(arr[i]%2===0){
        even++;
    }
}
console.log("Number of even numbers in the given array is",even);



