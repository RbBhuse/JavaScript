console.log(`=========Assignment 2 ==========`);
function stringHandOn() {
  console.log(`========== step no1==========`);
  var givenString = "  Hey you are doing good, keep it up  ";
  console.log(`Given String is:${givenString}`);
  console.log(`========== step no2==========`);
  var totalChar = givenString.length;
  console.log(`Length of given string is:${totalChar}`);
  console.log(`========== step no3==========`);
  var trimResult = givenString.trim();
  console.log(`String after removing the spaces:${trimResult}`);
  var lengthOfTrimString = trimResult.length;
  console.log(
    `Length of given string after removing white spaces:${lengthOfTrimString}`
  );
  console.log(`========== step no4==========`);
  var totalnoOfExtraSpaces = totalChar - lengthOfTrimString;
  console.log(
    `Total no of extra count removed in Given string: ${totalnoOfExtraSpaces}`
  );
  console.log(`========== step no5==========`);
  console.log(`First charater of string after trim:${trimResult.charAt(0)}`);
  console.log(
    `Last character of string Aafter trim:${trimResult.charAt(
      trimResult.length - 1
    )}`
  );
  console.log(`========== step no6==========`);
  console.log(
    `Total no of words in string are: ${trimResult.match(/\w+/g).length}`
  );
  console.log(`========== step no7==========`);
  var index = givenString.indexOf("good");
  console.log(`Index of  word "good": ${index}`);
  console.log(`========== step no8==========`);
  console.log(
    `Substring start from Index 22: ${givenString.substring(22, totalChar)}`
  );
  console.log(`Result using slice method: ${givenString.slice(22, totalChar)}`);
  console.log(`========== step no9==========`);
  var isAvailable = trimResult.endsWith("up");
  console.log(`string end with "up" :${isAvailable}`);
  console.log(`========== step no10==========`);
  var ispresent = trimResult.startsWith("Hey");
  console.log(`string start with "Hey" :${ispresent}`);
}

stringHandOn();
