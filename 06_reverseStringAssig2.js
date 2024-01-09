console.log(`============ Assignment no2============`);
console.log(`--------::::1.::::---------`);

function reverseString(str){
console.log(`Given String is:${str}`);
    let reverseString=" ";
    for (let index = str.length-1; index >=0; index--) {
        let ch=str.charAt(index);
        if(ch!=" "){
        reverseString=reverseString+str.charAt(index);
        }
    }
    console.log(`Reverse string is: ${reverseString}`);
}
reverseString('Hard work always plays back');
reverseString('Soon I will be UI IT Champ');
