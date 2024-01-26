console.log(`==============Assignment no:1 =============`);
console.log(`=============Step no1==============`);
console.log(`Check whether given string is palindrome or not.`);

const isPalindrome = function(str){
  
    let newStr =str.toLowerCase();
    const reversedStr = newStr.split('').reverse().join('');
  
    if(newStr==reversedStr){
        console.log(`Given string is palindrom: ${newStr}`);
    }
    else{
        console.log(`Given string is not palindrom: ${newStr}`);
    }
}

isPalindrome("madam");
isPalindrome("dad");
isPalindrome("hello");
console.log(`=============Step no2==============`);
console.log(`Check whether given function is anagram or not`);
// ANAGRAM

function isAnagram(str1,str2){
 
const resultStr1 = str1.toLowerCase().split("").sort().join("");
const  resultStr2 = str2.toLowerCase().split("").sort().join("");

console.log(resultStr1==resultStr2? true : false);

}

isAnagram("Silent","Listen");
isAnagram("Hello","World");
isAnagram("such","much")
