console.log("============Assignment no:1 using while Loop ==============");

console.log(
  "============ Print number from 5 to 15 increatmented by 1=============="
);

var i = 5;
while (i <= 15) {
  console.log(i);
  i++;
}
console.log(
  "============ Print number from 50 to 40 increatmented by 1=============="
);

var i = 50;
while (i >= 40) {
  console.log(i);
  i--;
}

console.log("============ First 15 odd number ==============");

var i = 1;
while (i <= 15) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
}

console.log("============ First 10 even number ==============");
var i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

console.log("============ Print table like 5 ==============");

var i = 5;
while (i <= 50) {
  console.log(i);
  i = i + 5;
}

console.log("============ Print table like 10 ==============");

var i = 10;
while (i <= 100) {
  console.log(i);
  i = i + 10;
}
console.log("============ Print table like 10  in reverse ==============");
var i = 100;
while (i >= 10) {
  console.log(i);
  i = i - 10;
}
