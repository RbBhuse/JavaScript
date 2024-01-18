console.log(`==================Assignment no: 1===============`);

console.log(`========== Step no 1==========`);
//1 Arrow Function with no arguments and no return value
const message = () => {
    console.log(`Good Morning, Today is Thursday `);
}
message();
console.log(`========== Step no 2==========`);

//2 Arrow Function with arguments and no return value
let multiplication=(num1, num2, num3)=>{
 let result=num1*num2*num3;
 console.log(`Multiplication is: ${result}`);
}
multiplication(5,5,2);

let multiplicationone=(num1, num2,num3=1)=>{
    
    let result=num1*num2*num3;
    console.log(`Multiplication is: ${result}`);
   }

   multiplicationone(5,5);

console.log(`========== Step no 3==========`);
let addition= (p,q,r,s,t)=>{
    
    return p+q+r+s+t;
}

let result = addition(100,100,200,349,756);

console.log(`result of  ${result}`);
let result1=addition("I am", " learning"," ES6"," feature"," depth");

console.log(`${result1}`);