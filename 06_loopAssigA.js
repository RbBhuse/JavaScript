console.log(`============ Assignment no1============`);
console.log(`--------::::1::::---------`);

function vowelsCount(str) {
  console.log(`Given String is:${str}`);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i).toLowerCase();

    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      (char == "u" && char != " ")
    ) {
      count = count + 1;
    }
  }
  console.log(`Vowels present in given String is: ${count}`);
}
vowelsCount("I am very good It Developer");

console.log(`--------::::2::::---------`);

function sumOfCube() {
  let sum = 0;
  for (let index = 1; index <= 5; index++) {
    sum = sum + index * index * index;
  }
  console.log(`Sum of cube number from 1 to 5 is: ${sum}`);
}

sumOfCube();
console.log(`--------::::3::::---------`);

console.log(`Character at odd position `);

function oddPositionChar(str) {
  console.log(`Given String is:${str}`);
  console.log(`character at odd position of given String:`);
  for (let index = 0; index < str.length; index++) {
    let ch = str.charAt(index);
    if (index % 2 != 0 && ch != " ") {
      let charatOddPosition = str.charAt(index);
      console.log(charatOddPosition);
    }
  }
}

oddPositionChar("Hard work always plays back");

oddPositionChar("Soon I will be UI IT Champ");
