console.log("Assigment no:1");
console.log("======= Step 1 ========");
function favHobby() {
  console.log("My favourite hoby is Playing KHo-KHO");
}

favHobby();

function favSubject() {
  console.log("My Favourite subject is JS");
}
favSubject();
console.log("======= Step 2 ========");

function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "My First name is:",
    firstName,
    ",",
    "My last name is:",
    lastName,
    ",",
    "My college name is:",
    collegeName
  );
}
personalDetails(
  "Reshma",
  "Bhuse",
  "FTC College of Engineering and Research, Sangola."
);

console.log("======= Step 3 ========");
function swapValues(a, b) {
  console.log("Values before swap:", a, b);
  var temp;
  temp = a;
  a = b;
  b = temp;
  console.log("values after swap:", a, b);
}
swapValues(2, 3);
console.log("======= Step 4 ========");
function addThreeValues(a, b, c) {
  var result = a + b + c;
  console.log("Addition of three values:", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");
