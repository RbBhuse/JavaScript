console.log(`==================Assignment no: 2===============`);

console.log(`========== Step no 1==========`);

class Employee {
  // Data member or properties
  // Constructor
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Ratha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "olnali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`=============Step no1=============`);
console.log(`Find out "TCS " employee details and log name and comapany`);
const arrayEmployeeFromTcs = arrayOfEmployee.filter((element) => {
  return element.emp_company == "TCS";
});
console.log(arrayEmployeeFromTcs);
arrayEmployeeFromTcs.forEach((element) => {
  console.log(
    `Employee Name is :${element.emp_name} and Company name is: ${element.emp_company}`
  );
});
console.log(`=============Step no2=============`);
console.log(`Find out employee details whose salary grater than 50000`);

const arrayEmpSalary = arrayOfEmployee.filter((element) => {
  return element.emp_salary >= 50000;
});

arrayEmpSalary.forEach((element) => {
  console.log(
    `Employee  ID: ${element.emp_id}, Employee Name: :${element.emp_name} ,Department: ${element.emp_dept},Emplyoee Salary:${element.emp_salary}, Company name is: ${element.emp_company}`
  );
});
console.log(`=============Step no3=============`);
console.log(`Sum of all employee salary`);
let sumofSalary = 0;
arrayOfEmployee.forEach((element) => {
  sumofSalary = sumofSalary + element.emp_salary;
});
console.log(`Sum of Salary is ${sumofSalary}`);

console.log(`=============Step no4=============`);
console.log(`Find average salary`);
let average = 0;
let arrayLength = arrayOfEmployee.length;
arrayOfEmployee.forEach((element) => {
  average = sumofSalary / arrayLength;
});
console.log(`Average Salary is: ${average}`);

console.log(`=============Step no5=============`);
console.log(
  `Find employee details whose salary is greater tahn equal 75000 and DEPT IS "IT" OR "HR"`
);

const empDetails = arrayOfEmployee.filter((element) => {
  return (
    (element.emp_salary >= 75000 && element.emp_dept == "IT") ||
    element.emp_dept == "HR"
  );
});

empDetails.forEach((element) => {
  console.log(
    `Employee  ID: ${element.emp_id}, Employee Name: :${element.emp_name} ,Department: ${element.emp_dept},Emplyoee Salary:${element.emp_salary}, Company name is: ${element.emp_company}`
  );
});
