console.log('============Assignment N0:1==============');
console.log(`Find factorial of given number`);
let factorialOfNum = function (num) {
    var result=1;
    if (num==0 || num==1) {
        return 1;
    }
    if (num<0 ||num==undefined ||num == null || isNaN(num)) {
        return `${num} ==> Invalid input u are given.`;
    }
       for (let i = 1; i <= num; i++) {
        result=result*i;        
    }
    return result;
}

console.log(`Factorial of 5 is '${factorialOfNum(5)}'`);

console.log(`Factorial of 3 is '${factorialOfNum(3)}'`);

console.log(factorialOfNum(null));

console.log(`Factorial of 8 is '${factorialOfNum(8)}'`);

console.log(factorialOfNum(undefined));

console.log(`Factorial of 9 is '${factorialOfNum(9)}'`);

console.log(`Factorial of 0 is '${factorialOfNum(0)}'`);
