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

// Function declaration
// function calAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calAge1(1991);
// console.log(age1);

// // Function Expression
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calAge2(1991);
// console.log(age2);

//Function expression
// const calAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// console.log(calAge2(1991));

//Arrow function
// const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };
// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apple, orange) {
//   const applePiece = cutFruitPieces(apple);
//   const orangePiece = cutFruitPieces(orange);

//   const juice = `Juice with ${applePiece} piece of apple and ${orangePiece} piece of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 6));

// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }
// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }
// }
// console.log(yearsUntilRetirement(1999, "Jonas"));

const calcAverage = (score1st, score2nd, score3rd) => {
  return (score1st + score2nd + score3rd) / 3;
};

const checkWinner = (score1, score2, score3, score4, score5, score6) => {
  const avgDolhins = calcAverage(score1, score2, score3);
  const avgKoalas = calcAverage(score4, score5, score6);

  console.log(`The average score of Dolhins is ${avgDolhins}.`);
  console.log(`The average score of Koalas is ${avgKoalas}.`);

  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolhins are the winners, Congratulate them.`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas are the winners, Congratulate them.`);
  } else {
    console.log(`No one could make it.`);
  }
};

checkWinner(85, 54, 41, 23, 34, 27);
