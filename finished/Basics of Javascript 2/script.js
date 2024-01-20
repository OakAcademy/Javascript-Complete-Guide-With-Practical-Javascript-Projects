'use strict';

////////// Activating Strict Mode

// let isAvailable = true;
// let inMeeting = true;

// if (inMeeting) isAvailable = false;
// if (isAvailable) console.log('Person is available');
// else console.log('Person is in meeting.');

// // const public = 'Canada';
// // const private = 'room 15';
// const switch = 'open';

////////// Functions

// function welcomeText() {
//   console.log('Welcome to my page!');
// }

// welcomeText();
// welcomeText();
// welcomeText();

// function calculator(number1, number2) {
//   // console.log(number1, number2);
//   const addition = number1 + number2;
//   const resultText = `${number1} + ${number2} = ${addition}`;

//   return resultText;
// }

// const result1 = calculator(12, 24);
// console.log(result1);
// console.log(calculator(12, 24));

// const result2 = calculator(100, 200);
// console.log(result2);

////////// Function Declerations vs. Expressions

// // Declaration
// const age1 = calculateAge1(1996);

// function calculateAge1(birthYear) {
//   const currentYear = 2052;
//   // const age = currentYear - birthYear;

//   // return age;
//   return currentYear - birthYear;
// }

// // const age1 = calculateAge1(1996);
// // console.log(age1);

// // Expression
// const age2 = calculateAge2(1996);

// const calculateAge2 = function (birthYear) {
//   const currentYear = 2052;
//   // const age = currentYear - birthYear;

//   // return age;
//   return currentYear - birthYear;
// };

// // const age2 = calculateAge2(1996);
// console.log(age1, age2);

// ////////// Arrow Functions

// // Function expression
// const calculateAge2 = function (birthYear) {
//   const currentYear = 2052;
//   // const age = currentYear - birthYear;

//   // return age;
//   return currentYear - birthYear;
// };

// // Arrow function
// const calculateAge3 = (birthYear) => 2052 - birthYear;
// const age3 = calculateAge3(1996);
// console.log(age3);

// const leftYearsForLegalAge = (birthYear, name) => {
//   const currentAge = 2052 - birthYear;
//   const leftYears = 18 - currentAge;

//   // return leftYears;
//   return `${name} will be in 18 in ${leftYears} years.`;
// };

// const leftYears = leftYearsForLegalAge(2045);
// // console.log(leftYears);
// console.log(leftYearsForLegalAge(2045, 'Micheal'));
// console.log(leftYearsForLegalAge(2038, 'John'));

// ////////// Functions Calling Other Functions

// function addition(number1, number2) {
//   return number1 + number2;
// }

// function calculator(number1, number2) {
//   // const addition = number1 + number2;
//   const additionResults = addition(number1, number2);

//   const resultText = `${number1} + ${number2} = ${additionResults}`;

//   return resultText;
// }

// console.log(calculator(5, 6));

// ////////// Reviewing Functions

// const calculateCurrentAge = function (birthYear) {
//   return 2052 - birthYear;
// };

// const leftYearsForLegalAge = function (birthYear, name) {
//   const currentAge = calculateCurrentAge(birthYear);
//   const leftYears = 18 - currentAge;

//   if (leftYears > 0) {
//     console.log(`${name} will be in 18 in ${leftYears} years.`);
//     return leftYears;
//   } else {
//     console.log(`${name} is already legal.`);
//     return -1;
//   }
// };

// console.log(leftYearsForLegalAge(2045, 'Micheal'));
// console.log(leftYearsForLegalAge(2000, 'Micheal'));

////////// Introduction to Arrays

// const city1 = 'Istanbul';
// const city2 = 'Berlin';
// const city3 = 'London';

// const cities = ['Istanbul', 'Berlin', 'London'];
// console.log(cities);

// const fruits = new Array('Apple', 'Strawberry', 'Lemon', 'Melon');

// console.log(cities[0]);
// console.log(cities[2]);

// console.log(cities.length);
// console.log(cities[cities.length - 1]);

// cities[2] = 'New York';

// console.log(cities);

// // cities = ['Los Angeles', 'Madrid'];

// const population = 20000000;
// const istanbul = ['Istanbul', 'Turkey', population, cities];
// console.log(istanbul);
// console.log(istanbul.length);

// const leftYearsForLegalAge = (birthYear) => {
//   const currentAge = 2052 - birthYear;
//   const leftYears = 18 - currentAge;

//   return leftYears;
// };

// const birthDates = [2045, 2046, 2047, 2048, 2049];

// console.log(leftYearsForLegalAge(birthDates));

// const leftYears1 = leftYearsForLegalAge(birthDates[0]);
// const leftYears2 = leftYearsForLegalAge(birthDates[1]);
// const leftYears3 = leftYearsForLegalAge(birthDates[birthDates.length - 1]);

// console.log(leftYears1, leftYears2, leftYears3);

// const leftYearsArray = [leftYears1, leftYears2, leftYears3];
// console.log(leftYearsArray);

////////// Basic Array Operations (Methods)

////////// Introduction to Objects

// // Arrays

// const countryArray = [
//   'Germany',
//   'Europe',
//   80000000,
//   'Berlin',
//   ['Munich', 'Dortmund', 'Hamburg'],
// ];

// const countryObject = {
//   countryName: 'Germany',
//   region: 'Europe',
//   population: 80000000,
//   capitalCity: 'Berlin',
//   cities: ['Munich', 'Dortmund', 'Hamburg'],
// };

////////// Dot vs. Bracket Notation

// const countryObject = {
//   countryName: 'Germany',
//   regionName: 'Europe',
//   population: 80000000,
//   capitalCity: 'Berlin',
//   cities: ['Munich', 'Dortmund', 'Hamburg'],
// };

// console.log(countryObject);

// console.log(countryObject.countryName);
// console.log(countryObject['countryName']);

// const nameStr = 'Name';
// console.log(countryObject['country' + nameStr]);
// console.log(countryObject['region' + nameStr]);

// const countryProperty = prompt(
//   'Country Properties: countryName, regionName, population, capital city, cities'
// );
// console.log(countryObject[countryProperty]);

// if (countryObject[countryProperty]) {
//   console.log(countryObject[countryProperty]);
// } else {
//   console.log('Invalid property!');
// }

// countryObject.language = 'German';
// console.log(countryObject);

////////// Object Methods

// const user = {
//   name: 'John',
//   surname: 'Doe',
//   birthYear: 1975,
//   hobbies: ['Swimming', 'Painting', 'Gaming'],
//   isLegal: false,

//   // calculateAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },

//   // calculateAge: function () {
//   //   // console.log(this);
//   //   return 2022 - this.birthYear;
//   // },

//   calculateAge: function () {
//     console.log(this);
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },

//   info: function () {
//     return `User's name is ${this.name} ${
//       this.surname
//     }. User's age is ${this.calculateAge(this.birthYear)}. User's hobbies are ${
//       this.hobbies[0]
//     }, ${this.hobbies[1]} and ${this.hobbies[2]}. User is ${
//       this.isLegal ? 'an adult' : 'not an adult'
//     }.`;
//   },
// };
// console.log(user.calculateAge());

// console.log(user.age);
// console.log(user.age);
// console.log(user.age);
// console.log(user.age);
// // console.log(user['calculateAge'](1975));

// console.log(user.info());

// const testArray = [];
// testArray.push('sdad', 'asdasd', 'asdasd');
// console.log(testArray);

//////////// Iteration: The for Loop

// console.log('Text 1');
// console.log('Text 2');
// console.log('Text 3');
// console.log('Text 4');
// console.log('Text 5');

// for (let index = 1; index <= 5; index = index + 1) {
//   console.log(`Text ${index}`);
// }

// ////////// Iteration: Looping Arrays, Breaking and Continuing

// const countryArray = [
//   'Germany',
//   'Europe',
//   80000000,
//   'Berlin',
//   ['Munich', 'Dortmund', 'Hamburg'],
//   100,
// ];

// const typeOfArray = [];

// for (let index = 0; index < countryArray.length; index++) {
//   console.log(countryArray[index], typeof countryArray[index]);

//   // typeOfArray[index] = typeof countryArray[index];
//   typeOfArray.push(typeof countryArray[index]);
// }

// console.log(typeOfArray);

// const birthArray = [1985, 1999, 1947, 2023];
// const ageArray = [];
// const currentYear = 2050;

// for (let index = 0; index < birthArray.length; index++) {
//   ageArray.push(currentYear - birthArray[index]);
// }

// console.log(ageArray);

// const country = [
//   'Germany',
//   'Europe',
//   80000000,
//   'Berlin',
//   ['Munich', 'Dortmung', 'Hamburg'],
//   100,
// ];

// console.log('ONLY NUMBERS');
// for (let index = 0; index < country.length; index++) {
//   if (typeof country[index] !== 'number') continue;

//   console.log(country[index], typeof country[index]);
// }

// console.log('QUIT AFTER THE NUMBER FOUND');
// for (let index = 0; index < country.length; index++) {
//   if (typeof country[index] === 'number') break;

//   console.log(country[index], typeof country[index]);
// }

//////////// Looping Backwards and Loops in Loops

// const country = [
//   'Germany',
//   'Europe',
//   80000000,
//   'Berlin',
//   ['Munich', 'Dortmung', 'Hamburg'],
//   100,
// ];

// for (let index = country.length - 1; index >= 0; index--) {
//   console.log(index, country[index]);
// }

// for (let index = 1; index < 3; index++) {
//   console.log(`@@@@@@@This is text loop ${index}`);
//   for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Loop ${index}: Text ${rep}`);
//   }
// }

// //////////// The While Loop

// // for (let index = 1; index <= 5; index = index + 1) {
// //   console.log(`For Loop: Text ${index}`);
// // }

// let index = 1;
// while (index <= 5) {
//   // console.log(`While Loop: Text ${index}`);
//   index++;
// }

// let randomNumber = Math.trunc(Math.random() * 10) + 1;

// while (randomNumber !== 4) {
//   console.log(randomNumber);
//   randomNumber = Math.trunc(Math.random() * 10) + 1;
// }

// console.log(`You reached the number you want!!!!`);
