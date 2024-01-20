'use strict';

/*
////////// Slice, Splice, Reverse and Concat Methods

//slice(start, end)
const fruits = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

//splice()
const numbers = [1, 2, 3, 4, 5];
const removedElements = numbers.splice(2, 2, 6, 7);
console.log(numbers);
console.log(removedElements);

//reverse()
const letters = ['a', 'b', 'c', 'd', 'e'];
const reversedLetters = letters.reverse();
console.log(reversedLetters);

//concat()
const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers);


////////// Loops: forEach() Method

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
numbers.forEach(function (number) {
  doubledNumbers.push(number * 2);
});
console.log(doubledNumbers);

const fruits = ['apple', 'banana', 'orange'];

fruits.forEach(function (fruit, index, array) {
  array[index] = fruit.toUpperCase();
});
console.log(fruits);


////////// Loops: map() Method

const numbers = [1, 2, 3, 4, 5];
const multipliedByTwo = numbers.map((number) => number * 2);
console.log(multipliedByTwo);

const products = [
  {
    id: 1,
    name: 'Apple',
    price: 0.5,
  },
  {
    id: 2,
    name: 'Banana',
    price: 0.25,
  },
  {
    id: 3,
    name: 'Orange',
    price: 0.3,
  },
];

const productNames = products.map((product) => product.name);
console.log(productNames);

const names = ['Alice', 'Bob', 'Charlie'];
const indexedNames = names.map((name, index) => `${name} is at ${index}`);
console.log(indexedNames);


////////// Filtering Arrays: filter() Method

// array.filter(() => a === b);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers);

const products = [
  {
    name: 'iPhone',
    price: 999,
  },
  {
    name: 'laptop',
    price: 1299,
  },
  {
    name: 'headphone',
    price: 49,
  },
  {
    name: 'smartwatch',
    price: 199,
  },
  {
    name: 'speakers',
    price: 75,
  },
];

const affordableProducts = products.filter((product) => product.price < 50);
console.log(affordableProducts);

const users = [
  {
    id: 1,
    name: 'John',
    age: 25,
    isActive: true,
  },
  {
    id: 2,
    name: 'Jane',
    age: 35,
    isActive: true,
  },
  {
    id: 3,
    name: 'Mike',
    age: 40,
    isActive: false,
  },
  {
    id: 4,
    name: 'Emily',
    age: 28,
    isActive: false,
  },
  {
    id: 5,
    name: 'David',
    age: 32,
    isActive: true,
  },
];

const filteredUsers = users
  .filter((user) => user.age > 30)
  .filter((user) => user.isActive);
console.log(filteredUsers);

////////// Transform Arrays: reduce() Method

//array.reduce((accumulator, currentValue) => ...)

const numbers = [1, 2, 3, 4, 5];
const some = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(some);

const words = ['Hello', ' ', 'world', '!'];
const sentence = words.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(sentence);

const grades = [80, 90, 75, 95];
const average = grades.reduce(
  (accumulator, currentValue, currentIndex, array) => {
    accumulator += currentValue;
    if (currentIndex === array.length - 1) return accumulator / array.length;
    return accumulator;
  },
  0
);
console.log(average);


////////// Search and Find First Element: find() Method

// array.find(element => element === a) ===> first element, undefined

const numbers = [2, 4, 6, 8, 10];
const foundNumber = numbers.find((number) => number > 5);
console.log(foundNumber);

const books = [
  {
    title: 'Javascript',
    author: 'Douglas',
  },
  {
    title: 'Physics',
    author: 'Martin',
  },
  {
    title: 'Engineering',
    author: 'John',
  },
];
const bookTitle = 'Physics';
const foundedBook = books.find((book) => book.title === bookTitle);
console.log(foundedBook);

const _numbers = [0, 1, 2, 3, 4, 5];
const foundElement = _numbers.find((element, index) => element === index);
console.log(foundElement);


////////// Handle Nested Arrays: flat() and flatMap() Methods

//flat()
//Syntax: array.flat(depth); default: 1

const nestedArray = [1, 2, [3, 4, [5, 6]]];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);

const deeplyNestedArray = [1, [2, [3, [4, [5]]]]];
const deeplyFlattenedArray = deeplyNestedArray.flat(Infinity);
console.log(deeplyFlattenedArray);

//flatMap()
// Syntax: array.flatMap(callBackFnc)

const numbers = [1, 2, 3, 4];
const doubledArray = numbers.flatMap((num) => [num, num * 2]);
console.log(doubledArray);


////////// Sorting Arrays

//sort() method
const fruits = ['apple', 'banana', 'orange', 'kiwi'];
fruits.sort();
console.log(fruits);

const numbers = [10, 5, 8, 2, 1];
numbers.sort((a, b) => a - b);
console.log(numbers);

const people = [
  {
    name: 'John',
    age: 25,
  },
  {
    name: 'Jane',
    age: 30,
  },
  {
    name: 'David',
    age: 20,
  },
];
// people.sort((a, b) => a.age - b.age); // Ascending
people.sort((a, b) => b.age - a.age); // Descending
console.log(people);

// Bubble Sort
function bubbleSort(array) {
  const len = array.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        //Swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}

const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers);
*/
