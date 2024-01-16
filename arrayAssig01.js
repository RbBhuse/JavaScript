console.log("======== Assignment no 1=========");
console.log("===============Step 1 ====================");
console.log(`First and Last element in Array`);
const fruit_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`First Element of array: ${fruit_seasonal[0]}`);
console.log(
  `Last Element of array: ${fruit_seasonal[fruit_seasonal.length - 1]}`
);

console.log("===============Step 2 ====================");

console.log(`Add Papaya before the element "Banana"`);
const fruit_seasonalOne = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`original Array value:${fruit_seasonalOne}`);
fruit_seasonalOne.unshift("Papaya");
console.log(fruit_seasonalOne);

console.log("================= Step 3==================");
const fruit_seasonalTwo = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`original Array value:${fruit_seasonalTwo}`);
console.log(`Remove "Mango" from array`);
fruit_seasonalTwo.splice(3, 1);
console.log(`Result: ${fruit_seasonalTwo}`);

console.log("================= Step 4==================");
const fruit_seasonalThree = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log(`original Array value:${fruit_seasonalThree}`);
console.log(`Insert value "Pineapple" at last of array`);
fruit_seasonalThree.push("Pineapple");
console.log(`Result: ${fruit_seasonalThree}`);

console.log("================= Step 5==================");
const fruit_seasonalFour = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log(`original Array value:${fruit_seasonalFour}`);
console.log(`Insert an element-"Dragon Fruit" before "Water Melon"`);
fruit_seasonalFour.splice(4, 0, "Dragon Fruit");
console.log(`Result: ${fruit_seasonalFour}`);

console.log("================= Step 6==================");
const fruit_seasonalFifth = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log(`original Array value:${fruit_seasonalFifth}`);
console.log(`Replace an element "Orange" with "Kiwi"`);
fruit_seasonalFifth.splice(1, 1, "Kiwi");
console.log(`Result: ${fruit_seasonalFifth}`);

console.log("================= Step 7==================");
const fruit_seasonalSix = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`original Array value:${fruit_seasonalSix}`);
console.log(`Element starting from 1 to 4`);
const result1 = fruit_seasonalSix.slice(1, 4);
console.log(`Result: ${result1}`);
console.log("================= Step 8==================");
const fruit_seasonalSeven = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Water Melon",
];
console.log(`original Array value:${fruit_seasonalSeven}`);
console.log(`Select last three element`);

/* result2 = fruit_seasonalSeven.slice(3);
console.log(`Result: ${result2}`);*/

for (let index = 2; index <= fruit_seasonalSeven.length-1; index++) {
  let element = fruit_seasonalSeven[index];
  console.log(element);
}

