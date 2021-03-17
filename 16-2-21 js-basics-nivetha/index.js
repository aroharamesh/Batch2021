// //stopWatch()
// //start,stop,reset,duration

// //start->give error if already started
// //stop ->give error if it not started
// //reset ->clear the duration
// let clickedButton;
// let minutes = 0;
// let seconds = 0;
// let milliseconds = 0;
// let interval;

// // function stopWatch() {
// //   document.write(startTime.getMinutes(), startTime.getSeconds());
// // }

// let stopWatch = (clickedButton) => {
//   if (clickedButton == "start") {
//     let interval = setInterval(() => {
//       start();
//     }, 1);
//   } else if (clickedButton == "stop") {
//     console.log("seconds");
//     clearInterval(interval);
//     document.getElementById("watch").innerHTML =
//       minutes + " : " + seconds + " : " + milliseconds;
//   } else if (clickedButton == "reset") {
//     minutes = 0;
//     seconds = 0;
//     document.getElementById("watch").innerHTML =
//       minutes + " : " + seconds + " : " + milliseconds;
//   }
// };

// function start() {
//   milliseconds++;
//   if (milliseconds === 1000) {
//     seconds++;
//     milliseconds = 0;
//   }
//   if (seconds === 60) {
//     minutes++;
//     seconds = 0;
//   }
//   document.getElementById("watch").innerHTML =
//     minutes + " : " + seconds + " : " + milliseconds;
//   // if (clickedButton !== "start") {
//   //   console.log("inside");
//   //   clearInterval(this);
//   // }
// }

// setInterval(() => {
//   defaultTime();
// }, 1000);

// function defaultTime() {
//   let startTime = new Date();
//   document.getElementById("watch").innerHTML =
//     startTime.getHours() +
//     " : " +
//     startTime.getMinutes() +
//     " : " +
//     startTime.getSeconds();
// }

// defaultTime();

//Prototypical inheritance

// let x = {};
// x.toString();

//When we access a property or a method, JS engine will look for that property and method in the object
// itself, if it is not exist then it will look at the prototype of that object all the way to the root object.

//A prototype is a regular object in memory
//Every object has a prototype or a parent except a root object

//Multilevel inheritance

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }
// const circle = new Circle(10);

//All objects created by a circle constructor will have the same prototype
//All arrays created by a array constructor will have the same prototype

//Property descriptors

// let person = { name: "Nivetha" };
// for (let key in person) console.log(key);
//none of the object properties defined in the object base are not visible

// let objBase = Object.getPrototypeOf(person);
// console.log(objBase);

// let descriptor = Object.getOwnPropertyDescriptor(objBase, "toString");
// console.log(descriptor);

// Object.defineProperty(person, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

// person.name = "Nivetha Rathnavel";
// console.log(person);

// console.log(Object.keys(person));

// delete person.name;
// console.log(person);

// function MyObj() {
//   this.name = name;
// }
// Object.getPrototypeOf(MyObj); // will give the same result of myObj.__proto__

// function Circle(radius) {
//   this.radius = radius;
// }

// let circle = new Circle(10);

// let obj = {}; //you can also create an object by using let obj = new Object();

//obj.__proto__ is same as Object.prototype

//In the same way you can

//array.__proto__ is same as Array.prototype

//Prototype vs Instance Members

//radius is the instance member
function Circle(radius) {
  this.radius = radius;
  this.move = () => {
    // this.draw();
    console.log("move called");
  };
}

// In both(Instance & Prototype) members can be called inside
//draw is the prototype member
Circle.prototype.draw = function () {
  // this.move();
  console.log("draw");
};

// Circle.prototype.toString = function () {
//   console.log("toString");
// };

const c1 = new Circle(1);
const c2 = new Circle(2);

// console.log(c1.draw());
// console.log(c1.move());

// console.log(c1.draw());
// console.log(c1.toString());

console.log(Object.keys(c1)); //returns only instance members

for (let keys in c1) console.log(keys); //return all the members of the instance and prototype
