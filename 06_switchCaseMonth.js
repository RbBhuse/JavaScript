function monthOfYear(mothNum) {
  switch (mothNum) {
    case 1:
      console.log(` Month of year ${mothNum} ==> January`);
      break;
    case 2:
      console.log(` Month of year ${mothNum} ==> February`);
      break;
    case 3:
      console.log(` Month of year ${mothNum} ==> March`);
      break;
    case 4:
      console.log(` Month of year ${mothNum} ==> April`);
      break;
    case 5:
      console.log(` Month of year ${mothNum} ==> May`);
      break;
    case 6:
      console.log(` Month of year ${mothNum} ==> June`);
      break;
    case 7:
      console.log(` Month of year ${mothNum} ==> July`);
      break;
    case 8:
      console.log(` Month of year ${mothNum} ==> August`);
      break;
    case 9:
      console.log(` Month of year ${mothNum} ==> September`);
      break;
    case 10:
      console.log(` Month of year ${mothNum} ==> October`);
      break;
    case 11:
      console.log(` Month of year ${mothNum} ==> November`);
      break;
    case 12:
      console.log(` Month of year ${mothNum} ==> December`);
      break;

    default:
      console.log(` Invalid Input ==> Month of year ${mothNum}`);
      break;
  }
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
