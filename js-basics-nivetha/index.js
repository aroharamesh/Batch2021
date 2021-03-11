//Functions are objects

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = () => {
//         console.log("draw");
//     }
// }

// let circle1 = new Circle('a');
// let circle2 = new Circle('a');
// let circle3 = circle1;
// console.log(circle1 === circle2); //false
// console.log(circle1 === circle3); //true //because both references to the same location

// // console.log(Circle.name);
// // console.log(Circle.length);
// //constructor property will convert functions into objects internally
// Circle.call({},1);

// let variable = 1;
// let variable2 = variable;
// // variable2 = 2;
// console.log(variable === variable2);

// Arrays
//Add an element(s)
//remove an element(s)
//find an element(s)
//split an element(s)
// combine the arrays

// const numbers = [1, 2, 3, 4, 1,1];
// numbers[0] = 10;
// numbers.unshift(10); //push the element at the beginning of the array
// numbers.push(5);  //push the element at the end of the array
// numbers.shift();  //delete the element at the beginning of the array
// numbers.pop();     //delete the element at the end of the array
// console.log(numbers);

// numbers.splice(2, 0, 'a', 'b'); //first position for index of the array
// //second position howmany values to be inserted/removed
// console.log(numbers);
// console.log(numbers.indexOf(1)); //return the index of an element  or return -1 if element is not exists.
// console.log(numbers.indexOf(1, 0)); //return the index of an first occurrence of element from the start
// (seond parameter) position or return -1 if element is not exists.

// console.log([...new Set(numbers)]);
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(1)); //true if element exists false otherwise

// Finding the elements - Reference types

// const course = [
//   {
//     id: 1,
//     name: "a",
//   },
//   {
//     id: 2,
//     name: "b",
//   },
// ];

// console.log(course.includes({ id: 1, name: "a" }));//false because of different memory location

// console.log(course.find((courses) => { 
//     return courses.name=='a';
// }));

// const Numbers = [1, 2, 3, 4];
// const middle = Numbers.splice();     
// console.log(middle);
// console.log(Numbers.splice())
// console.log(Numbers);
// Numbers.splice(0); //Removes everything
// console.log(Numbers);

//Remove all the elements of the array

//Solution 1

// const numbers = [1, 2, 3, 4];
// let another = numbers;
// another = []; 
// console.log(numbers);

//Solution 2

// let numbers = [1, 2, 3, 4];
// numbers.length = 0;
// console.log(numbers);

//Solution 3  

// let numbers = [1, 2, 3, 4];
// console.log(numbers.splice(0));
// console.log(numbers);

//Solution 4 - Not recommended(Don't use for-loop)

// let numbers = [1, 2, 3, 4];
// while(numbers.length > 0) {
//     numbers.pop();
// }
// console.log(numbers); 








