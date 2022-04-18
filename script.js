"use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");
// function logger() {
//   console.log("My name is  Suraj");
// }
// //calling / running / invoking function
// logger();
// logger();

function fruitProcessor(apple, orange) {
  const juice = `Juice with ${apple} apples and ${orange} oranges.`;
  return juice;
}
const MixJuice = fruitProcessor(5, 2);
console.log(MixJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
