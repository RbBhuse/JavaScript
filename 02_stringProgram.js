
console.log(`1.Read string character by character`);

const str='developer';

for(i=0;i<str.length;i++){
  let ch=str.charAt(i);
  console.log(ch);
}

console.log(`----------------------------`);
console.log(`2.Reverse string character by character`);

const str1='Developer UI';

for(i=str1.length-1; i>=0;i--){
    let ch=str1.charAt(i);
    console.log(ch);
}
console.log(`----------------------------`);
console.log(`3.Reverse string in same line`);

let str2="Developer UI";
let reverseStr="";
for (let index = str2.length-1; index>=0; index--) {
  reverseStr=reverseStr+str2.charAt(index);
 // reverseStr=reverseStr.concat(str2.charAt(index));
}
console.log(`Reverse string is: ${reverseStr}`);

console.log(`----------------------------`);
console.log("4.Find the vowles  count in givien string");

const str3 = "Hello Team Good morning";
let vowelsCount = 0;
for (i = 0; i < str3.length; i++) {
  //it  conver capital character to small letter before checking the vowels condition

  let ch = str3.charAt(i).toLocaleLowerCase();

  if (
    ch == "a" ||
    ch == "e" ||
    ch == "i" ||
    ch == "o" ||
    (ch == "u" && ch != " ")
  ) {
    vowelsCount = vowelsCount + 1;
  }
}
console.log(vowelsCount);

console.log(`----------------------------`);
console.log(`5.count specific  letter Present in string`);

const str4='Hello Team Good morning';
let count1=0;
for (let index = 0; index < str4.length; index++) {

  let ch= str4.charAt(index).toLowerCase();

  if (ch=='o'|| ch=='i'||ch=='a'|| ch=='e'|| ch=='u' && ch!=" ") {
    count1=count1+1;
  }
  
}

console.log(`Count of letter "O" present in string is: ${count1}`);

