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
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   openingHours,
//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
//   orderPizza: function (mainIngridient, ...otherIngridient) {
//     console.log(mainIngridient);
//     console.log(otherIngridient);
//   },
// };

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

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals("Kimmich", "Goretzka", "Coman", "Muller");
// printGoals("Davies", "Muller");
// printGoals(...game.scored);

// team1 < team2 && console.log("Team1 is more likely to win");
// team1 > team2 && console.log("Team1 is more likely to win");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }
// // console.log([...menu.entries()]);
// console.log(restaurant);

// // With optional chaining
// if (restaurant && restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant?.openingHours?.mon?.open);

// // Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   restaurant.openingHours[day];
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   const close = restaurant.openingHours[day]?.close ?? "Closed ";
//   console.log(`On ${day}, we open at ${open} and close at ${close}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? "Method doesn't exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method doesn't exist");

// // Arrays
// const users = [{ name: "Suraj", email: "surajdev9886@gmail.com" }];

// console.log(users[0]?.name ?? "User array is empty");

// if (users.length > 0) console.log(users[0].name);
// else console.log("user array is empty");

// // Looping Objects - for of loop

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days :`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key , value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}.`);
// }

// Assessment ///
// //1
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${player}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) {
//   average += odd;
// }
// average /= odds.length;
// console.log(`The average odd is ${average}`);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

///// Sets

// const orderSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);
// console.log(orderSet);

// console.log(new Set("Suraj"));
// console.log(orderSet.size);
// console.log(orderSet.has("Bread"));
// orderSet.add("Garlic bread");
// orderSet.add("Garlic bread");
// console.log(orderSet);
// orderSet.delete("Garlic bread");
// console.log(orderSet);
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// // Usecase for SET

// const staff = ["waiter", "chef", "manager", "chef", "waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// Map
// const rest = new Map();
// rest.set("name", "classico italino");
// rest.set(1, "firenze, italy");
// console.log(rest.set(2, "Libson, Portugal"));

// rest
//   .set("catagories", ["Italian", "Pizzaeria", "vegetarian", "organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are close");
// console.log(rest);
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("catagories"));
// rest.delete(2);
// // console.log(rest);
// // console.log(rest.size);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, "test");

// rest.set(document.querySelector("h1"), "heading");

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const question = new Map([
//   ["question", "what is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);
// console.log(question);

// // Convert object ot map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }
// const answer = 3;
// // const answer = Number(prompt("Your answer"));
// console.log(answer);
// 1;

// console.log(question.get(question.get("correct") === answer));

// // Conver map to an array

// console.log(...question);

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.

// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())]; /// Converting to an array
// console.log(events);

// // 2.
// gameEvents.delete(64);

// //3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// // 4.

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(airline[0]);
// console.log(airline[1]);
// console.log(airline[2]);
// console.log("A380"[2]);

// console.log(airline.length);
// console.log("A380".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));

// console.log(airline.indexOf("Portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😭");
//   else console.log("You got lucky ✌️");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// // To change cases
// console.log(airline.toLowerCase()); // To lowercase
// console.log(airline.toUpperCase()); // To UPPERCASE

// // Fix capitalization in name
// const passenger = "sUrAj"; //Suraj
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing email
// const email = "hello@suraj.io";
// const loginEmail = " Hello@Suraj.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const priceGB = "Rs89444.89";
// const priceUS = priceGB.replace("Rs", "$").replace("89444.89", "750");
// console.log(priceUS);

// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));

// // Booleans
// const planes = "Airbus A320neo";
// console.log(planes.includes("A320"));
// console.log(planes.includes("Boeing"));
// console.log(planes.startsWith("Air"));
// console.log(planes.endsWith("neo"));

// if (planes.startsWith("Airbus") && planes.endsWith("neo")) {
//   console.log("Part of the New Airbus family");
// }

// // Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are not allowed to onboard");
//   } else {
//     console.log("Welcome onboard");
//   }
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// // Split and join
// console.log("a+very+nice+string".split("+"));
// console.log("Suraj Poddar".split(" "));

// const [firstName, lastName] = "Suraj Poddar".split(" ");
// console.log(lastName, firstName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("suraj poddar");

// // Padding
// const message = "Go to gate 23!";
// console.log(message.padStart(25, "+").padEnd(30, "+"));
// console.log("Suraj Poddar".padStart(20, "#").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);

//   return last.padStart(str.length, "*");
// };
// console.log(maskCreditCard(43309845698694565));
// console.log(maskCreditCard(89678495768944855));

// // Repeat
// const message2 = "Bad weather... All Departures Delayed...";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// const getCode = (str) => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split("+")) {
//   const [type, from, to, time] = flight.split(";");
//   const output = `${type.startsWith("_Delayed") ? "🛑" : ""}${type.replaceAll(
//     "_",
//     " "
//   )} ${getCode(from)} ${getCode(to)}( ${time.replace(":", "h")})`.padStart(36);
//   console.log(output);
// }

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("LH123", 2, 800);
// createBooking("LH123", 2);
// createBooking("LH123", 5);
// createBooking("LH123", undefined, 1000);

// const flight = "LH243";
// const suraj = {
//   name: "Suraj Poddar",
//   passport: 345678876,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999";
//   passenger.name = "Mr." + passenger.name;

//   if (passenger.passport === 345678876) {
//     alert("Check in");
//   } else {
//     alert("wrong passport");
//   }
// };
// // checkIn(flight, suraj);
// // console.log(flight);
// // console.log(suraj);

// // Is same as doing...
// // const flightNum = flight;
// // const passenger = suraj;

// const newPassport = function (person) {
//   person.passport = Math.floor(Math.random() * 10000000000);
// };
// newPassport(suraj);
// checkIn(flight, suraj);

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// // JS uses callbacks all the time
// const high5 = function () {
//   console.log("🙏🙏");
// };

// document.body.addEventListener("click", high5);

// ["Suraj", "Deepak", "Keshav", "Anshu"].forEach(high5);

// const greet = (greeting) => {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet("Hey");
// greeterHey("Suraj");

// greet("Hello")("There");

// // Challenge
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArr("Hii")("Suraj");

// const luftansa = {
//   airline: "Luftansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };
// luftansa.book("283", "Suraj Poddar");
// luftansa.book("188", "Bhola Sharma");
// // console.log(luftansa);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const books = luftansa.book;

// // Does not work
// // book(23, "ThisIS");

// // Call method
// books.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// books.call(luftansa, 239, "Mary Cooper");
// console.log(luftansa);

// const swiss = {
//   airline: "Swiss Airlines",
//   iataCode: "LX",
//   bookings: [],
// };

// books.call(swiss, 583, "Mary Cooper");
// console.log(swiss);

// // Apply method

// const flightData = [7979, "George Cooper"];
// books.apply(swiss, flightData);
// console.log(swiss);

// books.call(swiss, ...flightData);

// // Bind method
// // books.call(eurowings, 23, "Sarah Williams");

// const bookEW = books.bind(eurowings);
// const bookLH = books.bind(luftansa);
// const bookLX = books.bind(swiss);

// bookEW(23, "Steven Williams");
// bookLH(67, "Dr Strange");
// bookLX(25, "Robert Downey");

// const bookEW23 = books.bind(eurowings, 23);
// bookEW23("Jonathan Miller");
// bookEW23("Martha Cooper");

// // With event listeners
// luftansa.planes = 300;
// luftansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector(".buy")
//   .addEventListener("click", luftansa.buyPlane.bind(luftansa));

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.13, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0 : JavaScript", "1 : Python", "2 : Rust", "3 : C++"],
//   // This generates [0,0,0,0].
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join("\n")}\n(Write option number)`
//       )
//     );
//     console.log(answer);

//     // Register the answer
//     typeof answer === "number" &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       // Poll results are 13, 2, 4,1
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, "string");

// Immidiately invoked function expression (IIFE) :-

// const runOnce = function () {
//   console.log("This will never run again");
// };
// runOnce();

// // IIFE
// (function () {
//   console.log("This will never run again");
//   const isPrivate = 23;
// })();
// console.log(isPrivate);
// (() => console.log("This will also not run again"))();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

// // Example 1
// let f;
// const g = function () {
//   const a = 23;

//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// console.dir(f);

// // Reassigning f function
// h();
// f();
// console.dir(f);

// // Example 2

// const boardPassengers = function (n, waitMin) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, waitMin * 1000);

//   console.log(`Will start boarding in ${waitMin} seconds.`);
// };

// // const perGroup = 1000;
// boardPassengers(180, 3);

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
// 21;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e"];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// // SPLICE

// // console.log(arr.splice(2));
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// // REVERSE
// arr = ["a", "b", "c", "d", "e"];
// const arr2 = ["i", "j", "k", "l", "m"];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join("-"));

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// }

// // forEach

// console.log("---- forEach ----");

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(mov)}`);
//   }
// });

// MAP
// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}€  </div>
        </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear the input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    /// Doing the amount transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) == currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// Assessment

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a pupppy`);
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// The map method

// const eurToUsd = 1.1;

// //const movementsToUsd = movements.map(function(mov){
// // return mov * eurToUsd;
// //})

// const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDes = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDes);

/// The Filter Method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter((mov) => mov < 0);
// console.log(` The withdrawls are ${withdrawals}`);

// The Reduce Method

// accumulator -> SNOWBALL

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr;
// }, 0);

// const balance = movements.reduce((acc, curr) => acc + curr, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
//   console.log(humanAges);
//   const adults = humanAges.filter((age) => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / adults.length,
//     0
//   );

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// PIPELINE

// const eurToUsd = 1.1;
// const totalDepositsUSd = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSd);

// Assessment
/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = (ages) =>
//   ages
//     .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// // // The Find Method

// const firstWithdrawl = movements.find((mov) => mov < 0);
// console.log(firstWithdrawl);

// console.log(accounts);

// const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// // The Some Method
// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME : CONDITION
// const anyDeposits = movements.some((mov) => mov > 1500);
// console.log(anyDeposits);

// // EVERY

// console.log(movements.every((mov) => mov > 0));
// console.log(account4.movements.every((mov) => mov > 0));

// // Separate callback
// const deposit = (mov) => mov > 0;

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const overAllBalance = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overAllBalance);
