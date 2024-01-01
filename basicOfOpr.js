console.log("===Unary operator==");
var a=10;
var b=a++;

console.log("value of b:",b);

var c=20;
var d=++c;
console.log("value of d:",d);

var e=100;
var f=--e;
console.log("value of F:",f);

var h=30;
var g=h--;

console.log("value of G:",g);

console.log("What is NAN");
var result=0/0;
console.log(result);

console.log("automatic or implicity conversion");
var result=100+true;
console.log(result);

resultValue=99-false;
console.log(resultValue);

console.log("===use of + operator");
console.log("1"+"1");

console.log("==Explicity Conversion==");
console.log("== Conver into number ==");
var s1="101";
console.log(typeof s1);
var s2=+s1;
console.log("value of s2:",s2);
console.log(typeof s2);
var d=+"200";
console.log(d);
console.log(typeof d);

var z=+"Reshma";
console.log(z);

var z=Number("101");
console.log(typeof z);

var m1="200";
var res=Number(m1);
console.log(typeof res);

var n1="200A";
var res1=Number(n1);
console.log(typeof res1);
console.log(res1);


var t;
console.log(typeof t);

var p=Boolean(100)
console.log("value of  P",p);

var q=Boolean(0)
console.log("value of  q",q);