console.log(`==================Assignment no: 2===============`);

console.log(`========== Step no 1==========`);

console.log(`Get the list of all employee salary & log new array on console.`);
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

const employee_Salary = arrayOfEmployee.map((element) => {
  return element.emp_salary;
});
console.log(employee_Salary);
console.log(`========== Step no 2==========`);
console.log(`Get the list of departments & log on console `);

const employee_dept = arrayOfEmployee.map((element) => {
  return element.emp_dept;
});
console.log(employee_dept);
console.log(`========== Step no 3==========`);
console.log(`Get the list of employee id’s and log on console `);

const employee_id = arrayOfEmployee.map((element) => {
  return element.emp_id;
});
console.log(employee_id);
