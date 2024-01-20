console.log(`==========Assignment no:1===========`);
console.log(`=========== step no:1 ===========`);
console.log(`Add 10 into each element and log new array result on console`);
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`Original array: ${arrayNumbers}`);
const array_addition = arrayNumbers.map((element, index) => {
  return element + 10;
});

console.log(array_addition);

console.log(`=========== step no:2 ===========`);

console.log(`Cube the each array element and log on console`);
console.log(`Original array: ${arrayNumbers}`);
const array_cube = arrayNumbers.map((element) => {
  return element * element * element;
});

console.log(array_cube);

console.log(`=========== step no:3 ===========`);

console.log(
  `Add the index value into its corresponding each array element and log new array result on console`
);
const array_index = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(array_index);
