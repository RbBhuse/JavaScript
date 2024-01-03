console.log("======= Assignment no 1 ========");
console.log("=======Step no1=======");

function greaterNumber(a, b) {
  var result = a >= b ? `Greater no is:${a}` : `Greater no is:${b}`;
  console.log(`Given Number is: ${a}  ${b}`);
  console.log("", result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("=======Step no2=======");
function isEvenOrOddNum(x) {
  var result = x % 2 == 0 ? `Given no is ${x} even` : `Given no is ${x} odd`;
  console.log(result);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log("=======Step no3=======");

function wordLenght(givenstring) {
  var len = givenstring.length;
  console.log(`Given word is:"${givenstring}" and Length of word is ${len}`);
  var result = len % 2 == 0 ? `It has even Length` : `It has odd Length`;
  console.log(result);
}

wordLenght("JavaScript");
wordLenght("developer");
wordLenght("Google");
