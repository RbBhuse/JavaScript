console.log(`==========Assignment no:1===========`);
console.log(`=========== step no:1===========`);

/*Define a class for Vehicle which should contains.
Minimum 5 Properties or attributes or data members:
● Constructor
● Method to log the details of object
Create 5 objects from Vehicle class and add into array → arrayOfVehicles. Traverse it and log
the details with meaning message and not as object.*/

class Vehicle {
  // Data member or properties
  // Constructor
  constructor(v_Name, v_no, v_color, v_fuelType, v_categoty) {
    this.v_Name = v_Name;
    this.v_no = v_no;
    this.v_color = v_color;
    this.v_fuelType = v_fuelType;
  }
  // Method inside the constructor
  details = function () {
    console.log(
      `Vehicle Name: ${this.v_Name} Vehicle number:${this.v_no} Vehicle Color: ${this.v_color} Vehicle Fule Type: ${this.v_fuelType}  `
    );
  };
}

const v1 = new Vehicle("Toyota Camry", 1234, "Black", "CNG", 100000);
const v2 = new Vehicle("Honda", 7774, "Gray", "Petrol", 50000);
const v3 = new Vehicle("BMW", 9999, "Black", "CNG", 1000000);
const v4 = new Vehicle("Bolero", 6663, "Gray", "Petrol", 200000);
const v5 = new Vehicle("Swift", 4442, "white", "Dissel", 500000);
const arrayOfVehicles = [v1, v2, v3, v4, v5];

console.log(`Traverse the array `);
console.log(`Vehicles details:`);
arrayOfVehicles.forEach((element) => {
  element.details();
});

console.log(`=========== step no:2===========`);
/*Define a class for College which must contain
● Properties or attributes or data members: minimum 4
● Constructor
● Method: display() → Will log the complete object details
Create 4 objects from College class, for each object invoke method - display()*/
class College {
  // Data member or properties
  // Constructor
  constructor(c_Name, c_establishedYear, c_state, c_totalstudent) {
    this.c_Name = c_Name;
    this.c_establishedYear = c_establishedYear;
    this.c_state = c_state;
    this.c_totalstudent = c_totalstudent;
  }
  display() {
    console.log(
      `College Name: ${this.c_Name} Established Year :${this.c_establishedYear} college state : ${this.c_state} Total Students: ${this.c_totalstudent}  `
    );
  }
}

const c1 = new College("FTC", 2010, "Maharashtra", 5000);
const c2 = new College("SMS", 1963, "Maharashtra", 4000);
const c3 = new College("MHM", 1996, "Maharashtra", 700);
const c4 = new College("SVS", 1995, "Maharashtra", 800);

c1.display();
c2.display();
c3.display();
c4.display();

console.log(`=========== step no:3===========`);

let traverseObject = function (obj) {
  for (const key in obj) {
    const element = obj[key];
    console.log(`Key ==> ${key}, Value ==> ${element}`);
  }
  console.log("");
};

traverseObject(c1);
traverseObject(c2);
traverseObject(c3);
traverseObject(c4);
