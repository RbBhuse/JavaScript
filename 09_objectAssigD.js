console.log(`===============Assignment no 1===============`);
console.log(`============= Step no 1,2,3===============`);

console.log(
  `Create object professor and add 5 prpertites: and create nested object Degree and add cerfificate array`
);
let professor = {
  name: "Jenny",
  age: 45,
  designation: "UI developer",
  qualification: "Engineer",
  teachingSubject: "Javascript",

  degree: {
    engineering: "CSC",
    PHD: "ADV Computing",
    diploma: "CSE",
    HSC: "Science with Maths",
  },
  certficate: [
    "Hacker Rank Participate",
    "Certificate in IFE course",
    "Certificate in ADV programming",
  ],
};

console.log(professor);

console.log(`============= Step no 4===============`);
console.log(`Add New property TotalExperience:`);
(professor.totalExperince = "14 Years"), console.log(professor);
console.log(`Total experience is: ${professor.totalExperince}`);

console.log(`============= Step no 5===============`);
console.log(`Modify existing property`);

console.log(
  `Before modification the value teaching subjrct is: ${professor.teachingSubject}`
);

professor.teachingSubject = "HTML";
console.log(
  `Before modification the value teaching subjrct is: ${professor.teachingSubject}`
);

console.log(`============= Step no 6===============`);
console.log(`Add new cerificate at array index 2nd`);

professor.certficate.splice(2, 0, "Oracle Certified");

console.log(professor.certficate);
console.log(`============= Step no 7===============`);
console.log(` Last element of array certificate`);
let lenthofCertificateArray = professor.certficate.length;
console.log(
  `last element of certificate array is: ${
    professor.certficate[lenthofCertificateArray - 1]
  }`
);
console.log(`============= Step no 8===============`);
console.log(` Log Complete object`);
console.log(professor);
console.log(`============= Step no 9===============`);
console.log(` Traverse array Certificate using for of loop`);

for (const element of professor.certficate) {
  console.log(element);
}
