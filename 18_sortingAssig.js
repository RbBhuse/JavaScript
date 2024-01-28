console.log(`=============Assignment No:1=============`);
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Original array Value: ${arrayRollNumbers}`);

console.log(`===============Step no:1===================`);
console.log(`Reverse array`);

const reverseArray=arrayRollNumbers.reverse();//here we use reverse method
console.log(`Reverse array value= ${reverseArray}`);

console.log(`===============Step no:2===================`);
console.log(`Use "sort()" method without any custome logic`);

const sort=arrayRollNumbers.sort();
console.log(sort);

console.log(`===============Step no:3===================`);
console.log(`Sort array in accesnding order`);
 
let accesnding_Array=arrayRollNumbers.sort((a, b)=>{

 return a>b? 1:-1;
});
console.log(`Array value in accesnding order: ${accesnding_Array}`);

console.log(`===============Step no:4===================`);
console.log(`Greatest number from  given array`);
console.log(`Gratest number: ${accesnding_Array[accesnding_Array.length-1]}`);

console.log(`===============Step no:5===================`);
console.log(`Smallest number from  given array`);
console.log(`Gratest number: ${accesnding_Array[0]}`);

console.log(`===============Step no:6===================`);
console.log(`Remove Duplicate element from array`);

let uniqueArray=[...new Set(accesnding_Array)];

console.log(`Unique array value: ${uniqueArray}`);
