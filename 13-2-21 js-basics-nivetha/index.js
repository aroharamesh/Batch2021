// const numbers = [1, 2, 3, 4];

//Testing the elements of an array

//every method
// const allPositives = numbers.every((value) => {
//   return value >= 0;
// });

// console.log(allPositives);

// const atLeastOnePositive = numbers.some(function (value) {
//   return value >= 0;
// })

// console.log(atLeastOnePositive);

// const filtered_values = numbers.filter(value =>
//   value > 0
// );
// console.log(filtered_values);

// //

// const items = filtered_values.map(n => "<li>" + n + "</li>");
// console.log(items);

// const html = '<ul>' + items.join('\n') + '</ul>';
// document.getElementById('list').innerHTML = html;
// console.log(html);

// const string_numbers = "1,2,3,4";

// const number = string_numbers.split(',').map((n) => { return parseInt(n) });
// console.log(number);
// console.log(string_numbers.map(parseInt, string_numbers.split()));

// const items = filtered_values.map(n => { const obj = { value: n }; return obj; })
// console.log(items);

// const items = numbers.filter(n => n >= 0).map(n => ({ values: n })).filter(obj => obj.value > 1).map(obj => obj.value);
// console.log(items);

// let sum = 0;
// for (let number of numbers) {
//     sum += number;
// }
// console.log(sum);

// const sum2 = numbers.reduce((accumulator, currentValue) => {
//     // console.log(accumulator,currentValue);
//     return accumulator + currentValue;
// }, 0)
// console.log(sum2);
// const numbers = arrayFromRange(1, 10);
// console.log(numbers);

// function arrayFromRange(min,max) {
//     const output = [];
//     for (let i = min; i <= max; i++) {
//         output.unshift(i);
//     }
//     return output;
// }

//create function which accepts array and searchElement and the output will be true or false

// const numbers = [1, 2, 3, 4];

// let includes = (array,searchElement) => {
//     for (let element of array) {
//         if (element === searchElement) {
//             return true;
//         }
//         return false;
//     }
// }

// console.log(includes(numbers, 1));

//count occurrences - pass array and searchElement - Output should be number of occurrences.

// function countOccurences(arr, searchElement) {
//     count = 0;
//     for (i of arr)
//         if (i === searchElement)
//             count++;
//     return count;
// }

// console.log(countOccurences([1, 2, 3, 4, 5, 1], 1));

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  {
    title: "b",
    year: 2018,
    rating: 4.7,
  },
  {
    title: "c",
    year: 2018,
    rating: 3,
  },
  {
    title: "d",
    year: 2017,
    rating: 4.5,
  },
];

function chaining(movies) {
  const movie = movies.filter((n) => n.rating > 4).map((n) => n.title).sort((a, b) => { console.log(a.rating);return a.rating - b.rating;});
  // const m = movies.filter((obj) => { let arr = []; arr.push(obj); arr.sortBy(arr.rating); return arr;});
  console.log(movie);
}
chaining(movies);

//use chaining for the below result
//get all the movies in 2018 with rating > 4 //
//Sort them by their rating - descending
//display their title

//Functions
//Function declarations vs Expressions

//hoisting

//when JS engine starts executing our js code, it moves all the function declaration to the top.

//function declarations
// function walk() {
//   console.log("Walk");
// }

// walk();

//Function expressions

// let run = function () {   //anonymous function -  can use either let or const keyword
//   console.log("Run");
// }
// run();
// let move = run;
// move();

// let walk = () => console.log("Walk");
// walk();

// console.log(sum(1)) //NaN
// function sum(a,b) {
//   return a + b;
// }

// console.log(sum(1,2,3,4))  //3
// function sum(a,b) {
//   return a + b;
// }

//arguments keyword
// console.log(sum(1,2,3,4))
// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) {
//     total += value;
//   }
//   return total;
// }

//Every function in a js will have this special object called arguments

// console.log(sum(1,2,3,4))
// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum(1,2,3,4,5,6))
// function sum(...args) { //Rest operator - args is an array of elements
//   return args.reduce((a, b) => a + b);
// }

// console.log(sum(0.1, 20, 30, 50));
// function sum(discount,...prices) {
//   let total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

//Rest operator should be always last parameter
// console.log(sum(20, 30, 50,0.1));
// function sum(...prices,discount) { //throws an error
//   let total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

//adding null as parameter       - changes nothing
//adding undefined as parameter  - returns NaN
//adding true or false as parameter - adds 1 or 0 to the total

// console.log(sum(0.1, 20, 30, 50));
// function sum(discount,...prices) {
//   let total = prices.reduce((a, b) => a + b);
//   return total * (1 - discount);
// }

//Default parameter
// console.log(interest(10000))

// function interest(principal, rate, years) {
//   rate = rate || 3.5;
//   years = years || 3;
//   return principal * rate / 100 * years;
// }

// console.log(interest(10000,2)) //rate= 2 years = undefined so returns NaN as value

// function interest(principal, rate = 3.5, years) {
//   return principal * rate / 100 * years;
// }

// console.log(interest(10000,undefined,2)) //rate=undefined years = 2

// function interest(principal, rate = 3.5, years) {
//   return principal * rate / 100 * years;
// }

//Getters and Setters

// const person = {
//   firstName: "Nivetha",
//   lastName: "Rathnavel",
//   get fullName() {
//     return person.firstName + " " + person.lastName;
//   },
//   set fullName(person) {
//     let parts = person.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// // person.fullName = "Aroha Technologies";
// console.log(person.fullName);

//try catch

// const person = {
//   firstName: "Nivetha",
//   lastName: "Rathnavel",
//   get fullName() {
//     return person.firstName + " " + person.lastName;
//   },
//   set fullName(person) {
//     if (typeof person !== 'string') throw new Error("Value isn't a string");
//     if (person.length !== 2) throw new Error("Enter first name and last name");
//     let parts = person.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// try {
//   person.fullName = "Nivetha";
// }
// catch (e) {
//   console.log(e);
// }

//Local Vs Global scope
// let message = "hi";
// console.log(message);

//A scope of a variable or a constant determines where that variable or constant is accessing
//Scope of a variable or constant is limited to the block where it is defined

// {
//   let message = "hi";
// }

// console.log(message);
