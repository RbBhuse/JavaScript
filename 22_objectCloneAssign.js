console.log(`===========Assignment no1==========`);

const arrayNums=[20,3,4,56,90,400,49];

console.log(`===========step no:1===========`);
//Perform shallow cloning and cloned array 55 66 using push()

let arrayClone=arrayNums;//shallow clone-->not a indepedent copy
arrayClone.push(55);
arrayClone.push(66);

console.log(`Original array Value: ${arrayNums}`);
console.log(`Cloned array value: ${arrayClone}`);

console.log(`===========step no:2===========`);
//perform deep clone using sprade operator and 
//update original array value 10,25 at middle possion before 90
//log orginal and cloned array


let dclonedArray=[...arrayNums];
arrayNums.splice(4,0,10,25);
console.log(` Original array value after adding "10,25" before "90": ${arrayNums}`);
console.log(`Deep cloned array Value: ${dclonedArray}`);

console.log(`===========step no:3===========`);
//merge both below array using sprade operator
//log value

console.log(`Merged array using sprade operator`);

const arrayEven=[2,30,14,8];
const mergedArray=[...arrayNums, ...arrayEven];
console.log(`merged array Value: ${mergedArray}`);

console.log(`===========step no:4===========`);


const employee_info={
    emp_id:27,
    emp_name:"John Doe",
    salary:{
             july_month:"40,0000INR",
             aug_month:"50,0000INR",
             jun_month:"65,0000INR",
    },
    address:{
              locality:{
                         colony:"OM vrindhavan Society",
                         street:"Kanch Pokli, 431202",
              },
            city:"Mumbai",
            state:"Maharashtra",
            country:"India",  
    },

  mobiles:["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"],
}

console.log(`created employee_info object`);
console.log(`===========step no:5===========`);

console.log(`=========== "A" ===========`);
console.log('Log Employee details like Address: Locality, city, state,country');

console.log(`1. Locality: \n    colony:${employee_info.address.locality.colony} \n    street: ${employee_info.address.locality.street} `);
console.log(`2.City: ${employee_info.address.city}`);
console.log(`3.State: ${employee_info.address.state}`);
console.log(`4.Country: ${employee_info.address.country}`);

console.log(`=========== "B" ===========`);

console.log(`Mobile Numbers: ${employee_info.mobiles}`);

console.log(`===========step no:6===========`);

console.log(`Perform Deeep cloning usin "JSON Stringfy"`);
console.log(`===========step no:6.a===========`);

const clonedObj = JSON.parse(JSON.stringify(employee_info));
console.log(`=========== "A B C" ===========`);

clonedObj.salary.july_month="80,000INR";
employee_info.address.country="United Kingdom";

console.log(`Original value of july_month Salary: ${employee_info.salary.july_month}`);
console.log(`Update value of july_month Salary: ${clonedObj.salary.july_month}`);

console.log(`Original value of address fileld country: ${clonedObj.address.country}`);
console.log(`Update value of address fileld country: ${employee_info.address.country}`);








