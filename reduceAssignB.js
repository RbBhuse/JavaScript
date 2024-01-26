console.log(`==================Assignment no:1======================`);
class Employee{
    constructor(emp_id,emp_name,emp_dept, emp_salary, emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
    getDetails(){
        console.log(`Employee ID => '${this.emp_id}', Employee Name => '${this.emp_name}', Employee Department => '${this.emp_dept}', Employee Salary => '${this.emp_salary}', Employee Company => '${this.emp_company}'`);
    }
}

const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS"); 
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`============Step no:1==============`);

console.log(`All Employees from Wipro company :=>`);
arrayOfEmployee.filter(element => element.emp_company == 'Wipro').forEach(element => element.getDetails());

console.log(`============Step no:2==============`);

console.log(`All employee from department 'IT' or 'HR' :=>`);
arrayOfEmployee.filter(element => element.emp_dept == 'IT' || element.emp_dept == 'HR').forEach(element => element.getDetails());

console.log(`============Step no:3==============`);

console.log(`List of  employees whoes having Id greater than 50 :=>`);
arrayOfEmployee.filter(element => element.emp_id>50).forEach(element=> element.getDetails());

console.log(`============Step no:4==============`);

console.log(`The employees whoes name start with 'A' or 'V' or 'M' :=>`);
arrayOfEmployee.filter(element => element.emp_name.startsWith("A") || element.emp_name.startsWith("V") || element.emp_name.startsWith("M")).forEach(element => element.getDetails());

console.log(`============Step no:5==============`);

const sumOfSalary = arrayOfEmployee.reduce((sumSalary,element)=> sumSalary+element.emp_salary,0);
const avarageOfSalary = sumOfSalary/arrayOfEmployee.length;
console.log(`Avarage Salary of all employees  for all department :=> ${avarageOfSalary}`);

console.log(`============Step no:6==============`);

const itEmployee = arrayOfEmployee.filter(element => element.emp_dept=="IT");
const sumItSalary = itEmployee.reduce((rt,element) => rt+element.emp_salary,0);
console.log(`Avarage salary of 'IT' department :=> ${sumItSalary/itEmployee.length}`);