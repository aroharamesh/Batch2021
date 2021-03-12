// const first = [1, 2, 3];
// const second = [4, 5, 6];

//Concat method

// const combined = first.concat(second);
// console.log(combined);

// const combined = [...first, ...second];
//console.log(combined);

//Slicing an array

//first way of slicing

// console.log(combined.slice(-4, -2)); // [3,4]
// console.log(combined.slice(-2, -4)); // returns empty array

//3rd way of slicing
// console.log(combined.slice());

//Both the concat and slice does the same thing on the primitive types
//Both the arrays are copied by values

// const first = [{ id: 1 }]
// const second = [4, 5, 6];
// console.log(first.concat(second));

//Iterating an array

// const numbers = [1, 2, 3, 4];

//first way
// for (let number of numbers) console.log(number);

//second way
// numbers.forEach((number) => {
//   console.log(number);
// });

// numbers.forEach((number, index) => console.log(number, index));

//Joining an array

// const numbers = [1, 2, 3];
// console.log(numbers.join('-'))

// const messages = "this is my message";
// console.log(messages.split())

//slug
// const messages = "this is my message";
// const parts = messages.split(' ');
// console.log(parts.join('-'))

//Sorting arrays

// const numbers = [3, 2, 6];
// console.log(numbers.sort(function(a, b) { return b - a; }));

const courses = [
  { id: 1, name: "Nodejs" },
  { id: 2, name: "js" },
];
console.log(
  courses.sort(function (a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  })
);
