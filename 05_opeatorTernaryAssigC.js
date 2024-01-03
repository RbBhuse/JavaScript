console.log("======Assignment No:1 ========");
console.log("=========Step no1 =========");
function maleMarrigeElegibility(gender, age, boyName) {
  var result =
    gender == "Male" && age >= 21
      ? `Hey ${boyName}, your eligible for marriage.`
      : `Hey ${boyName}, you are not eligible for marriage.`;
  console.log(result);
}
maleMarrigeElegibility("Male", 25, "Billgates");
maleMarrigeElegibility("Male", 17, "Stew Jobs");

console.log("=========Step no2 =========");
function femaleMarriageEligibility(gender, age, girlName) {
  var result =
    gender == "Female" && age >= 18
      ? `Hey ${girlName},your are eligible for marriage.`
      : `Hey ${girlName},your are not eligible for marriage.`;
  console.log(result);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
femaleMarriageEligibility("Female", 27, "Malinda Gates");
