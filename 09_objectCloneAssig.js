console.log(`========== Assigment no1=========`);
console.log(`=========step no 1,2,3========`);

let bankSbi={

                bankName:"Hdfc",
                Branch:"Sangola",
                state:"Maharashtra",
                country:"India"

}

let bankLocation={
                 street:"Sangola-Pandharpur",
                 city:"Solapur",
                 pin:413317
} 

console.log(`Clone object bankSbi and banklocation`);
let newBankSbi= Object.assign({}, bankSbi);
console.log(`After cloning the object "bankSbi" value is:`);
console.log(newBankSbi);

let newbBankLocation= Object.assign({}, bankLocation);
console.log(`After cloning the object "bankLocation" value is:`);
console.log(newbBankLocation);
console.log(`=========step no4========`);

let rateOfInterest={
            homeLoanInterest: "2%",
            personalLoanInterese:"5%",
            dueInterest:"6%"
}

let sbiDetails=Object.assign({},bankSbi,bankLocation,rateOfInterest);

console.log(`SBI bank detais are after merge the three object is:`);
console.table(sbiDetails);

console.log(`=========step no5========`);
console.log(`Traversing array using for in loop`);

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}

