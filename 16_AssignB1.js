console.log(`==================Assignment no: 2===============`);

console.log(`========== Step no 1==========`);

class Employee {
    // Data member or properties
    // Constructor
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name =emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company =emp_company;
    }
    
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Ratha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "olnali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");


const arrayOfEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`======  1.find the employee from company - TCS================`);
for (const element of arrayOfEmployee) {
    if (element.emp_company=="TCS") {
       console.log(`Name of Employee is: ${element.emp_name} and Company Name is: ${element.emp_company}`);
       
    } 
 }

 console.log(`======  2.find the employee whose department Finance================`);
 for (const element of arrayOfEmployee) {
    if (element.emp_dept=="Finance") {
       console.log(`Name of Employee is: ${element.emp_name} and Department is: ${element.emp_dept}`);
       
    } 
 }

 console.log(`======  3.find the employee  whose name start with "R" ================`);
 for (const element of arrayOfEmployee) {
    if (element.emp_name.startsWith('R') ) {
       console.log(`Employee  ID is: ${element.emp_id},Name of Employee is: ${element.emp_name},Department is: ${element.emp_dept}, Salary of Emplyoee:${element.emp_salary}, Company Name is: ${element.emp_company}`);
    } 
 }
 console.log(`======  4.find the employee  whose salary greater than "75000"================`);
 for (const element of arrayOfEmployee) {
    if (element.emp_salary>7500) {
       console.log(`Name of Employee is: ${element.emp_name},Company Name is: ${element.emp_company}, Salary of Emplyoee:${element.emp_salary}`);
    } 
 }
 console.log(`======  5.find the employee  whose salary greater than  or equal "50000" and Dept is  "IT" ================`);

 for (const element of arrayOfEmployee) {
    if(element.emp_salary>=50000 && element.emp_dept=='IT'){
        console.log(`Employee  ID is: ${element.emp_id},Name of Employee is: ${element.emp_name},Department is: ${element.emp_dept}, Salary of Emplyoee:${element.emp_salary}, Company Name is: ${element.emp_company}`);
    } 
 }
 console.log(`======  6.find the  all employee from company "Infy"  ================`);

 for (const element of arrayOfEmployee) {
    if (element.emp_company=="Infy") {
        console.log(`Employee  ID is: ${element.emp_id},Name of Employee is: ${element.emp_name},Department is: ${element.emp_dept}, Salary of Emplyoee:${element.emp_salary}, Company Name is: ${element.emp_company}`);
    } 
 }