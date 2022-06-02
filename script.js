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
// //     console.log(`${firstName} retires in ${retirement} years.`);
// //     return retirement;
// //   } else {
// //     console.log(`${firstName} has already retired.`);
// //     return -1;
// //   }
// // }
// // console.log(yearsUntilRetirement(1999, "Jonas"));

// //
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2009, 2020);

// console.log(friends[2]);
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // We cannot reinitialize array
// // friends = ["Bob", "Alice"];

// const firstName = "Jonas";
// const jonas = [firstName, "Schinder", 2037 - 1991, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// const friends = ["Jay", "Michael", "Steven"];
// const newList = friends.push("Ram");
// console.log(friends);
// console.log(newList);

// friends.unshift("Hari");
// console.log(friends);

// friends.pop();
// const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf("Bahubali"));

// friends.push("Ram");
// console.log(friends.includes("Ram"));
// console.log(friends.includes("Shanoj"));

// if (friends.includes("Ram")) {
//   console.log(`Jay Shree Ram`);
// }
// const calcTip = (bill) => {
//   return bill >= 50 && bill >= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmadm",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas.friends, jonas.lastName);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
// );
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmadm",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's liscense`;
//   },
// };

// console.log(jonas.getSummary());
// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.calcAge(jonas.birthYear));
// console.log(jonas["calcAge"](1991));

// (jonas.hasDriversLicense = true)
//   ? console.log(
//       `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has a driver's license.`
//     )
//   : console.log(
//       `${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, he has no driver's license.`
//     );
// BMI = Mass / Height * Height

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };
// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / (this.height * this.height);
//   },
// };

// john.calcBMI > mark.calcBMI
//   ? console.log(
//       `${john.firstName}'s BMI (${john.calcBMI()}) is higher than ${
//         mark.firstName
//       }'s BMI (${mark.calcBMI()}) ! `
//     )
//   : console.log(
//       `${mark.firstName}'s BMI (${mark.calcBMI()}) is higher than ${
//         john.firstName
//       }'s BMI (${john.calcBMI()}) ! `
//     );

// for (let i = 1; i <= 10; ) {
//   console.log(i);
//   i++;
// }

// for (let rep = 1; rep <= 10; ) {
//   console.log(`Lifting weights ${rep}`);
//   rep++;
// }

//
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1919, 1987, 1965, 1945, 1976];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   let age = 2022 - years[i];
//   ages.push(age);
// }
// console.log(ages);

// continue and break
// const jonas = [
//   "Jonas",
//   "Schmdn",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];
// console.log("--- CONTINUE");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log(" --- BREAK");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas);
// }
// const jonas = [
//   "Jonas",
//   "Schmdn",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

// For Loop
// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }
// //While Loop
// let rep = 1;
// while (rep <= 5) {
//   console.log(`Lifting weights repetition ${rep}`);
//   rep++;
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice == 6) {
//     console.log(`The loop is about to end.`);
//   }
// }
// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   total.push(tip + bills[i]);
// }
// // console.log(bills, tips, total);

// const calcAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(total));
// console.log(calcAverage(tips));

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number ";
// document.querySelector(".number").textContent = "20";
// document.querySelector(".score").textContent = 13;
// document.querySelector(".guess").value = 50;
// console.log(document.querySelector(".guess").value);

////// Guess The number Game

// let secretNumber = Math.floor(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);

//   //When there is no input
//   if (!guess) {
//     displayMessage("No number selected 🚫");

//     //If player wins
//   } else if (guess === secretNumber) {
//     displayMessage("✌️ Correct Numer ");

//     document.querySelector(".number").textContent = secretNumber;

//     document.querySelector("body").style.backgroundColor = "#60b347";

//     document.querySelector(".number").style.width = "30rem";

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }

//     //When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? " ⬆️ Too high" : " ⬇️ Too low");

//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       displayMessage("😭 You lost the Game");
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });
// document.querySelector(".again").addEventListener("click", function () {
//   score = 20;
//   secretNumber = Math.floor(Math.random() * 20) + 1;
//   displayMessage("Start Guessing... ");
//   document.querySelector(".score").textContent = score;
//   document.querySelector(".number").textContent = "?";
//   document.querySelector("body").style.backgroundColor = "#222";
//   document.querySelector(".guess").value = "";
//   document.querySelector(".number").style.width = "15rem";
// });

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnCloseModal = document.querySelector(".close-modal");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// btnCloseModal.addEventListener("click", closeModal);

// overlay.addEventListener("click", closeModal);

// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

//Selecting elements

// const player0El = document.querySelector(".player--0");
// const player1El = document.querySelector(".player--1");
// const score0El = document.querySelector("#score--0");
// const score1El = document.getElementById("score--1");
// const current0El = document.getElementById("current--0");
// const current1El = document.getElementById("current--1");

// const diceEl = document.querySelector(".dice");
// const btnNew = document.querySelector(".btn--new");
// const btnRoll = document.querySelector(".btn--roll");
// const btnHold = document.querySelector(".btn--hold");

// let scores, currentScore, activePlayer, playing;

// //Starting conditions

// const init = function () {
//   const scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add("hidden");
//   player0El.classList.remove("player--winner");
//   player1El.classList.remove("player--winner");
//   player0El.classList.add("player--active");
//   player1El.classList.remove("player--active");
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle("player--active");
//   player1El.classList.toggle("player--active");
// };

// //Rolling dice functionality
// btnRoll.addEventListener("click", function () {
//   if (playing) {
//     //1. Generating a rondom dice roll
//     const dice = Math.floor(Math.random() * 6) + 1;
//     console.log(dice);

//     //2. Display dice
//     diceEl.classList.remove("hidden");
//     diceEl.src = `dice-${dice}.png`;

//     //3. Check for rolled 1: if true, switch to next player
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener("click", function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;

//     // scores[1] = scores[1] + currentScore
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2 Check if the score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add("hidden");
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add("player--winner");
//       documemnt
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove("player--active");
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener("click", init);

// // Scoping in Practice

// /*
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';
//       // Reasssigning outer scope's variable
//       output = 'NEW OUTPUT!';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str);
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
// const firstName = 'Jonas';
// calcAge(1991);
// // console.log(age);
// // printAge();
////////////////////////////////////////////

// // Hoisting and TDZ in practise

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "suraj";
// let job = "developer";
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// console.log(addArrow);
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log("All products deleted");
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// This keyword

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const suraj = {
//   year: 1991,
//   place: "Nepal",
//   calcAge: function () {
//     console.log(this);
//   },
// };
// suraj.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = suraj.calcAge;
// matilda.calcAge();

// const f = suraj.calcAge;
// f(); //Gives undefined as it is a regular function expression

// var firstName = "Matilda";

// const suraj = {
//   firstName: "Suraj",
//   year: 1996,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // We cannot directly use this keyword here here
//     //   const self = this;
//     //   const isMillenial = function () {
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     //   };
//     //   console.log(self);
//     //   isMillenial();
//     // },

//     // Solution 2
//     // Here we can use this because arrow function inherits this keyword from the parent scope...
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     console.log(this);
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };
// suraj.calcAge();
// suraj.greet();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 7);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Suraj",
//   age: 25,
// };

// const friend = me;
// friend.age = 27;
// console.log("Friend:", friend);
// console.log("Me", me);

// Note : While using const only primitive values remains unchanged but reference values can be changed or manipulated..

// // Primitive types
// let lastName = "Williams";
// let oldLastName = lastName;
// lastName = "Davis";
// console.log(lastName, oldLastName);

// //Reference types
// const jessica = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = "Davis";
// console.log("Before marriage", jessica);
// console.log("After Marriage", marriedJessica);

// //Copying objects

// const jessica2 = {
//   firstName: "Jessica",
//   lastName: "Williams",
//   age: 27,
//   family: ["Alice", "Bob"],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = "Davis";
// console.log("Before Marriage:", jessica2);
// console.log("After Marriage:", jessicaCopy);

// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");
// console.log("Before Marriage:", jessica2);
// console.log("After Marriage:", jessicaCopy);

/////////  ///    Destructuring array /// ///////

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze , Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

/// /// Destructuring Objects /// //////
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  openingHours,
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngridient, ...otherIngridient) {
    console.log(mainIngridient);
    console.log(otherIngridient);
  },
};

// restaurant.orderDelivery({
//   time: "23:30",
//   address: "Via del Sole,21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({
//   address: "Via del Sole,21",
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnooci"];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menuAll = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menuAll);

// // Iterables : arrays, strings, maps, sets. NOT objects
// const str = "Suraj";
// const letters = [...str, "", "S."];
// console.log(letters);
// console.log(...str);
// //Real-world example
// const ingredients = [
//   // prompt("Lets's make pasta! Ingridient 1?"),
//   // prompt("Lets's make pasta! Ingridient 2?"),
//   // prompt("Lets's make pasta! Ingridient 3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// // 1Destructuring
// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Gizzale" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristornte Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// // // SPREAD, because on Right side of =
// const arr1 = [1, 2, ...[3, 4]];
// console.log(arr1);

// //// // REST, because on LEFT side of =
// const [aa, ba, ...others] = [1, 2, 3, 4, 5];
// console.log(aa, ba, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 6, 3, 7, 8);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("Mushroom", "onion", "olives", "spinach");
// restaurant.orderPizza("mushroom");

// // Use any datatype, return any datatype, short-circuiting

// console.log("---- OR ----");

// console.log("Suraj" || 3);
// console.log("" || "Suraj");
// console.log(true || 0);
// console.log(undefined || null);
// console.log(null || 4);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// // Hello here is is the most truthy value in the chain of OR operators

// // restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log("---- AND ----");
// console.log(0 && "suraj");
// console.log(7 && "Suraj");

// console.log("hello" && 23 && null && "Suraj");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

// // restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or "")
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals("Kimmich", "Goretzka", "Coman", "Muller");
printGoals("Davies", "Muller");
printGoals(...game.scored);

team1 < team2 && console.log("Team1 is more likely to win");
team1 > team2 && console.log("Team1 is more likely to win");

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
console.log(restaurant);

// With optional chaining
if (restaurant && restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant?.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of days) {
  restaurant.openingHours[day];
  const open = restaurant.openingHours[day]?.open ?? "Closed";
  const close = restaurant.openingHours[day]?.close ?? "Closed ";
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

// Arrays
const users = [{ name: "Suraj", email: "surajdev9886@gmail.com" }];

console.log(users[0]?.name ?? "User array is empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array is empty");
