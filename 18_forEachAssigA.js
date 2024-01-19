console.log(`===========Assignment no 1============`);
const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`=============Step no1============`);

console.log(`======== Log array element with its index value =========`);

console.log(`Value array: ${arrayNumbers}`);
arrayNumbers.forEach((currentValue, index) => {
  console.log(`${index} ==> ${currentValue}`);
});

console.log(`=============Step no2============`);
console.log(`Find positive numbers:`);
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});
console.log(`=============Step no3============`);
console.log(`Find negative numbers and add into new array`);
let arrayNegative = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    arrayNegative.push(element);
  }
});
console.log(arrayNegative);
console.log(`=============Step no4============`);
console.log(`Find even numbers`);
arrayNumbers.forEach((element) => {
  if (element % 2 == -0) {
    console.log(element);
  }
});
console.log(`=============Step no5============`);
console.log(`Find sum of all numbers in array`);
let sum = 0;

arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum of element is: ${sum}`);

console.log(`=============Step no6============`);
console.log(`Find even indexed numbers in array`);
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
