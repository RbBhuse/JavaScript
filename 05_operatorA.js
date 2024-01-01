console.log("=======Assignment no 1=======");
console.log("===== Step 1=====");
function squareWordLength(givenString) {
  var lengthOfWord = givenString.length;
  var squofLength = lengthOfWord * lengthOfWord;
  console.log(
    `Length of word: ${lengthOfWord} and Squaere of length is${squofLength}`
  );
}
squareWordLength("JavaScript");
squareWordLength("Google Chrome");
squareWordLength("Developer Smart");

console.log("===== Step 2=====");

function strLength() {
  var givenString = "I am Angular Developer";
  var strLength = givenString.length;
  var totalWords = givenString.match(/\w+/g).length;
  console.log(`Total number of words word: ${totalWords}`);
  var result = strLength / totalWords;
  console.log(
    `String Length is: ${strLength} and String Length divide by total no of words: ${result}`
  );
  var result1 = strLength * totalWords;
  console.log(
    `string Length is: ${strLength} and Mutiple by total number of word available in string:${result1}`
  );
}
strLength();
