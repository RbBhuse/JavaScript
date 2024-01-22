console.log(`==========Assignment no:2===========`);
console.log(`=========== step no:1 and 2 ===========`);
console.log(`Create a constructor function with name→ Bank and add the data member such as bankName, location, ifscCode, branchCode`);

function Bank(bankName, location, ifscCode, branchCode){

    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
// Method inside the constructor
    this.deatails = function(){
  
        console.log(`Bank Name: ${this.bankName} `);
    }

//when we create object the details method automatically callled.
    this.deatails();
}

//creating object

let bank1= new Bank("yesBank","Sangola","HDFC12345",12340);
let bank2= new Bank("sbiBank","Solapur","SBI12345",56780);
let bank3= new Bank("mahBank","Mumbai","MAHA12345",910110);
let bank4= new Bank("axisBank","Pune","AXI12345",121314);
console.log(`=========== step no:3,4,5,6,7===========`);
console.log(`Add the data member → openTime = “9 AM IST” on prototype object`);
// Adding a data member to the prototype object
Bank.prototype.openTime = "9 AM IST";
//Add one more data member → closeTime =”6 PM IST” on prototype object
Bank.prototype.closeTime ="6 PM IST";
console.log(` SBI Bank opening and closing time is:  Open Time:  ${bank2.openTime} closeTime: ${bank2.closeTime}`);

console.log(` Bank Name: ${bank4.bankName}  closeTime: ${bank4.closeTime}`);

console.log(` Bank Name: ${bank1.bankName}  Branchcode: ${bank1.branchCode} Open Time:  ${bank1.openTime}`);



