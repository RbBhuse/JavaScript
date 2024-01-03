console.log("=======Assignment no 2========");
console.log("========= step no1==========");

function Expression(a) {
  if (a % 2 == 0) {
    console.log(`Given Number is:${a},It is Even number`);
  } else {
    console.log(`Given Number is:${a},It is odd number`);
  }
}
Expression(45);
Expression(70);
Expression(67);
Expression(90);

console.log("========= step no2==========");
function Vote(age) {
  if (age >= 18) {
    console.log(`Person is eligible for voting`);
  } else {
    console.log(`Person is not eligible for voting`);
  }
}
Vote(18);
Vote(20);
Vote(17);
Vote(40);
console.log("========= step no3==========");
function strLength(givenstring) {
  if (givenstring.length >= 10) {
    console.log(
      `Given string is :"${givenstring}",which is contain more than 10 character`
    );
  } else {
    console.log(
      `Given string is : "${givenstring}" , which is not contain more than 10 character`
    );
  }
}

strLength("JavaScript-ES6");
strLength("HTML");
function strCheck(givenstring) {
  if (givenstring.startsWith("Java")) {
    console.log(
      `Given string is: "${givenstring}",It is start with word "Java"`
    );
  } else {
    console.log(
      `Given string is :"${givenstring}",It is not start with word "Java"`
    );
  }
}
strCheck("JavaScript Language");
strCheck("C Language");
