var marriageEligibility = function (gender, age) {
  if ((gender == "Male" && age >= 21) || (gender == "Female" && age >= 18)) {
    console.log(`Gender is:${gender} Age=${age}`);
    console.log(`You are eligible for marriage`);
    console.log(`=====================`);
  } else if ((gender == "Other" && age >= 21) || age >= 18) {
    console.log(`Gender is:${gender} Age=${age}`);
    console.log(`You are eligible for marriage`);
    console.log(`=====================`);
  } else {
    console.log(`Gender is:${gender} Age=${age}`);
    console.log(`You are not eligible for marriage`);
    console.log(`=====================`);
  }
};

marriageEligibility("Male", 17);
marriageEligibility("Male", 25);
marriageEligibility("Female", 28);
marriageEligibility("Female", 16);
marriageEligibility("Other", 35);
marriageEligibility("Other", 41);
marriageEligibility("Other", 12);
