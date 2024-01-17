console.log(`=============== Assignment no 1==================`);
console.log(`=============== Step no:1===================`);
const arrayNum=[20,31,40,25,23,11,29,9,60,2,11];
let lengthofArray=arrayNum.length;
console.log(`Total element in array is ${arrayNum.length}`);
console.log(`=============== Step no:2===================`);
console.log(`First Element of array is: ${arrayNum[0]}`);
console.log(`First Element of array is: ${arrayNum[lengthofArray-1]}`);
console.log(`=============== Step no:3===================`);
console.log(`Third last elenment of array using length property`);

let thirLastElement= lengthofArray-3;
console.log(`Third last element in array: ${arrayNum[thirLastElement]}`);
console.log(`=============== Step no:4===================`);
console.log(`All even number using for of loop`);

for (const element of arrayNum) {
    
    if (element%2==0) {
        
        console.log(element);
    }
}

console.log(`=============== Step no:5===================`);
console.log(`All odd number using for of loop`);

for (const element of arrayNum) {
    
    if (element%2!=0) {
        
        console.log(element);
    }
}

console.log(`=============== Step no:6===================`);
console.log(`Sum of even positioned number is: using for in loop`);
let sum=0;
for (const index in arrayNum) {
    if (arrayNum[index]%2==0) {
        sum=sum+arrayNum[index];
    }
}
console.log(sum);


console.log(`=============== Step no:7===================`);
console.log(`Sum of odd positioned number is: using for in loop`);

let sum2=0;
for (const index in arrayNum) {
    if (arrayNum[index]%2!=0) {
       
        sum2=sum2+arrayNum[index];
    }
}

console.log(sum2);

console.log(`=============== Step no:8===================`);
console.log(`Sum of all element is: using for of loop`);
let sum3=0;
for (const element of arrayNum) {
    sum3=sum3+element;
}

console.log(sum3);

console.log(`=============== Step no:9===================`);
console.log(`Find the number in array which are multiple of 5`);


for (const index in arrayNum) {
    if (arrayNum[index]%5==0) {
      
        var element =arrayNum[index];
        console.log(element);
    }
}

console.log(`=============== Step no:10===================`);
console.log(`is 115 number is availabe in arrayNum`);

console.log(arrayNum.includes(115));

console.log(`=============== Step no:11===================`);
console.log(`is 23  number is availabe in arrayNum`);

console.log(arrayNum.includes(23));

console.log(`=============== Step no:12===================`);
console.log(`Insert number 55 and 66 at index 3 in arrayNum`);
arrayNum.splice(3,0,55,66)
console.log(arrayNum);

console.log(`=============== Step no:13===================`);
console.log(`Delete 3 number from index 4 in arrayNum`);

let arrayNum1=[20,31,40,25,23,11,29,9,60,2,11];
arrayNum1.splice(4,3);
console.log(arrayNum1);