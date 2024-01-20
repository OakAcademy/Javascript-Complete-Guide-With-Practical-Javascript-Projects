'use strict';

const company = {
  name: 'Tropic Tech',
  location: 'Istanbul, Turkey',
  categories: ['Home Appliances', 'Computers', 'Televisions', 'Electronics'],
  recentProducts: ['Fridge', 'Laptop', 'Earpad', 'Monitor'],
  popularProducts: ['Keyboard', 'Mouse', 'Dishwasher'],
  numberOfEmployees: {
    development: {
      active: 50,
      onVacation: 4,
    },
    humanResources: {
      active: 25,
      onVacation: 26,
    },
    finance: {
      active: 35,
      onVacation: 3,
    },
  },
  getProducts: function (recentIndex, popularIndex) {
    return [
      this.recentProducts[recentIndex],
      this.popularProducts[popularIndex],
    ];
  },
  buyProducts: function ({
    price = '50',
    quantity = '1',
    recentIndex,
    popularIndex,
  }) {
    console.log(price, quantity, recentIndex, popularIndex);
  },
};

//STRINGS
const carBrand = 'Toyota';
const carModel = 'Corolla Hybrid';

console.log(carModel[0]); // C
console.log('Yaris'[0]); // Y
console.log(carModel.length);
console.log('Yaris'.length);
console.log(carModel.indexOf('l'));
console.log(carModel.lastIndexOf('l'));
console.log(carModel.indexOf('Hybrid'));
console.log(carModel.slice(8)); // Substring
console.log(carModel.slice(8, 12)); // Length => 12 - 8 = 4
console.log(carModel.slice(0, carModel.indexOf(' ')));
console.log(carModel.slice(carModel.indexOf(' ') + 1));

console.log(carModel.toLowerCase());
console.log(carModel.toUpperCase());

const buyerName = 'jOhN';
const buyerNameLower = buyerName.toLowerCase();
const buyerNameFixed =
  buyerNameLower.slice(0, 1).toUpperCase() + buyerNameLower.slice(1);
console.log(buyerNameFixed);

const userEmail = 'john@doe.com';
const inputEmail = '    JoHn@DoE.CoM';
const fixedInputEmail = inputEmail.toLowerCase().trim();
console.log(fixedInputEmail);

const corollaPriceUS = '5000$';
const corollaPriceEU = corollaPriceUS.replace('$', '€');
console.log(corollaPriceEU);

const description = 'Power down your drive, power down your passion!';
console.log(description.replace('down', 'up'));
console.log(description.replaceAll('down', 'up'));

const carModelTwo = 'Land Cruiser';
console.log(carModelTwo.includes('Land'));
console.log(carModelTwo.includes('Corolla'));

console.log('this-is-great'.split('-'));
console.log('John Doe'.split(' '));

const [firstName, surname] = 'John Doe'.split(' ');
const introString = ['Hi', firstName, surname].join(' ').toUpperCase();
console.log(introString);

const capitalize = function (name) {
  const words = name.split(' ');
  const wordsCapitalize = [];

  for (const word of words) {
    wordsCapitalize.push(word[0].toUpperCase() + word.slice(1));
  }
  console.log(wordsCapitalize.join(' '));
};

capitalize('mike tyson');
capitalize('leonardo di caprio');
capitalize('lana del rey');

const paddingText = 'Test String';
console.log(paddingText.padStart(20, '-').padEnd(30, '-'));

const repeatText = 'repeated text';
console.log(repeatText.repeat(10));

// //Short Circuiting
// console.log('//////////OR OPERATOR');
// console.log(25 || 50);
// console.log(undefined || 50);
// console.log(true || '');
// console.log(null || 0);
// console.log('' || null || 'rocky' || undefined);

// company.totalSales = 0;
// const totalSales = company.totalSales ? company.totalSales : 25;
// console.log(totalSales);

// const totalSalesShort = company.totalSales || 25;
// console.log(totalSalesShort);

// console.log('//////////NULLISH OPERATOR');
// const totalSalesNullish = company.totalSales ?? 25;
// console.log(totalSalesNullish);

// console.log('//////////AND OPERATOR');
// console.log(undefined && 50);
// console.log('string' && 50);
// console.log('string' && 50 && true && 0 && true);

// //Rest Operator
// const spreadArray = ['a', 'b', ...['c', 'd']];
// const [firstLetter, secondLetter, ...restLetters] = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
// ];
// console.log(firstLetter, secondLetter, restLetters);

// const [product1, product2, ...restProducts] = [
//   ...company.recentProducts,
//   ...company.popularProducts,
// ];
// console.log(product1, product2, restProducts);

////Spread Operator
// const letters = ['d', 'e', 'f'];
// const spreadArray = ['a', 'b', 'c', ...letters];
// console.log(spreadArray);

// const newPopularProducts = [...company.popularProducts, 'Printer'];
// console.log(newPopularProducts);

// const allProducts = [...company.recentProducts, ...company.popularProducts];
// console.log(allProducts);

// const testString = 'test';
// const spreadString = [...testString];
// console.log(spreadString);

// company.buyProducts({
//   recentIndex: 1,
//   popularIndex: 2,
// });

// //Object Destructuring
// const { name, categories, numberOfEmployees } = company;
// console.log(name, categories, numberOfEmployees);

// const {
//   name: companyName,
//   numberOfEmployees: employees,
//   categories: saleFields,
// } = company;
// console.log(companyName, employees, saleFields);

// const { boardOfManagement = [], recentProducts: newProducts = [] } = company;
// console.log(boardOfManagement, newProducts);

// let var1 = 10;
// let var2 = 20;
// const testObject = {
//   var1: 50,
//   var2: 80,
//   var3: 100,
// };

// ({ var1, var2 } = testObject);
// console.log(var1, var2);

// const {
//   development: { active: activeEmployees, onVacation: onVacationEmployees },
// } = numberOfEmployees;
// console.log(activeEmployees, onVacationEmployees);

// //Array Destructuring

// // const testArray = [1, 2, 3];
// // const firstElement = testArray[0];
// // const secondElement = testArray[1];
// // const thirdElement = testArray[2];

// // const [_firstElement, _secondElement, _thirdElement] = testArray;
// // console.log(_firstElement, _secondElement, _thirdElement);
// // console.log(testArray);

// let [mainCategory, , subcategory] = company.categories;
// console.log(mainCategory, subcategory);

// // const temp = mainCategory;
// // mainCategory = subcategory;
// // subcategory = temp;

// [mainCategory, subcategory] = [subcategory, mainCategory];

// console.log(mainCategory, subcategory);

// const [recent, popular] = company.getProducts(1, 2);
// console.log(recent, popular);

// const nestedArray = [1, 2, [3, 4]];
// // const [x, , y] = nestedArray;
// let [x, , [y, z]] = nestedArray;
// console.log(x, y, z);

// [x = 0, y = 0, z = 0] = [1];
// console.log(x, y, z);
