console.log("============Assignment no:1 using for Loop ==============");
console.log(
  "============ Print number from 5 to 15 increatmented by 1=============="
);

for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(
  "============ Print number from 50 to 40 increatmented by 1=============="
);
for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log("============ First 15 odd number ==============");
for (let index = 1; index <= 15; index++) {
  if (index % 2 != 0) {
    console.log(index);
  }
}

console.log("============ First 10 even number ==============");
for (let index = 0; index <= 10; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

console.log("============ Print table like 5 ==============");

for (let index = 5; index <= 50; index = index + 5) {
  console.log(index);
}

console.log("============ Print table like 10 ==============");
for (let index = 10; index <= 100; index = index + 10) {
  console.log(index);
}

console.log("============ Print table like 10  in reverse ==============");
for (let index = 100; index >= 10; index = index - 10) {
  console.log(index);
}
