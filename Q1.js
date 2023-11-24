var readlineSync = require('readline-sync');
let Number = parseInt(readlineSync.question("Enter a number:"));
for (let j=1;j<=10;j++)
{
  console.log(Number,'*',j,'=',Number*j);
}
  
  


 