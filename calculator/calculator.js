const addition = document.querySelector("#addition");

const fieldOne = document.querySelector("#field-one");
const fieldTwo = document.querySelector("#field-two");

const resultValue = document.querySelector("#resultValue");
addition.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne + valueTwo;

  resultValue.innerHTML = result;
});

console.log(`==========Substraction==============`);

const substraction = document.querySelector("#substraction");
substraction.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;

  const result = valueOne - valueTwo;

  resultValue.innerHTML = result;
});

console.log(`==========Multiplication==============`);

const multiplication = document.querySelector("#multiplication");

multiplication.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne * valueTwo;
  resultValue.innerHTML = result;
});

console.log(`==========Division==============`);
const division = document.querySelector("#division");

division.addEventListener("click", () => {
  const valueOne = +fieldOne.value;
  const valueTwo = +fieldTwo.value;
  const result = valueOne / valueTwo;
  resultValue.innerHTML = result;
});
console.log(`==========Reset button code==============`);
const resestValue = document.querySelector("#reset");
resestValue.addEventListener("click", () => {
  fieldOne.value = "";
  fieldTwo.value = "";
  resultValue.innerHTML = "";
});
