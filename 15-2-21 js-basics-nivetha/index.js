// let vs var

// let x = 0;
// var y = 0;

// function start() {
//   // for (let i = 0; i < 5; i++) {
//   //   console.log(i);
//   // }
//   for (var i = 0; i < 5; i++) {
//     // console.log(i);
//   }
//   console.log(i);
// }
// // console.log(i);
// start();

// Before ES6 we have var
// var -> function-scoped
// let => block-scoped

//var - this creates a global variable and attach this variable to the window object
//window object is central and one instance of the window object

// var color = "blue"; //can access by using window.color
// let color = "red";//can't access by using window.color

//this keyword

//"this" is an object that is executing the current function

// function Circle() {
//   this.radius = radius;
// }

//method->obj
//function ->global object(window,global)

// const video = {
//   title: "a",
//   play() {
//     console.log(this)
//   }
// }

// // console.log(video);

// function play() {
//   var v = 10;
// }

// console.log(play.v);

// function playVideo() {
//   console.log(this); //window object includes this function so "this" print properties of window
// }

// console.log(playVideo());

// const video = {
//   title: "a",
//     play() {
//       console.log(this);//"video" object includes this function so "this" print properties of window
//     }
// }

// console.log(video.play());

// function video(title) {
//   this.title = title;
//   console.log(title);
// }

// const x = new video('a');
// const y = new video('b');

// console.log(x);
// console.log(y);

// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag);
//     },this)
//   }
// }

// video.showTags();

//Not recommended  Performance issues
// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     const self = this;
//     this.tags.forEach(function(tag) {
//       console.log(self.title, tag);
//     })
//   }
// }

// video.showTags();

//2nd solution
// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     this.tags.forEach(function(tag) {
//       console.log(this.title, tag);
//     }.bind(this))
//   }
// }

// video.showTags();

// 3rd solution
// const video = {
//   title: 'a',
//   tags: ['a', 'b', 'c', 'd'],
//   showTags() {
//     this.tags.forEach((tag) =>{
//       console.log(this.title, tag);
//     })
//   }
// }

// video.showTags();

// function playVideo(a, b) {
//   console.log(this);
// }

// playVideo();
// playVideo.call({ name: 'Nivetha' }, 1, 2);
// playVideo.call({name:'Nivetha'});

// playVideo.apply({ name: 'Nivetha' }, [1, 2]);

// const fn = playVideo.bind({ name: 'Nivetha' });
//bind will not call the function,it returns the new function  and pointer to the new object

// const fn = playVideo.prototype.bind({ name: 'Nivetha' })();

//Exercise  - sum([]) --> sum the arguments which are passed

//sum([1,2,3,4,5]) -> total=[14]
//spread operator, reducer function

// function sum(...arr) {
//   if (!Array.isArray(arr)) console.error("Not an array");
//   const total = [
//     arr.reduce((sum, ele) => {
//       return sum + ele;
//     }, 0),
//   ];
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

// //Exercise - Area of the circle

// //try and catch for countOccurences

// function areaOfCircle() {
//   let area;
//   Object.defineProperty(this, "radius", {
//     get: function () {
//       return area;
//     },
//     set: function (value) {
//       if (typeof value != "number") console.error("Not a number");
//       area = Math.PI * value ** 2;
//     },
//   });
// }

// let circle = new areaOfCircle();
// circle.radius = 10;
// console.log(circle.radius);

//OOP - Object Orientated Programming
//Programming paradigm/style
// is a tool or a language
//which is centered around the objects
//rather than functions
//following the principles

//Encapsulation
//Abstraction
//Inheritance
//Polymorphism

//Procedural style
//function with lot of parameters

// let baseSalary = 30000;
// let overTime = 10;
// let rate = 20;

// function getWage(baseSalary, overTime, rate) {
//   return baseSalary + overTime * rate;
// }

//OOP style

// let employee = {
//   baseSalary: 30000,
//   overTime: 10,
//   rate: 20,
//   getWage: function () {
//     return this.baseSalary + this.overTime * this.rate;
//   },
// };

// console.log(employee.getWage());

//Abstraction
//Hide the details,show the essentials

// Constructor function
// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 }; //can't access this outside constructor function
//   let computeOptimumLocation = function () { };
//   //Closure when we call the draw method,the variables computeOptimumLocation and
//   //defaultLocation stays in the memory,they preserve their state
//   this.draw = function () {
//     computeOptimumLocation();
//     console.log("draw");
//   };
// }

// const circle = new Circle(10);
// console.log(circle.draw());

//Getters and Setters

// function Circle(radius) {
//   this.radius = radius;
//   let defaultLocation = { x: 0, y: 0 };
//   defaultLocation = function () {
//     return defaultLocation;
//   };
//   this.draw = function () {
//     console.log("draw");
//   };
//   Object.defineProperty(this, "defaultLocation", {
//     get: function () {
//       return defaultLocation;
//     },
//     set: function (value) {
//       defaultLocation = value;
//     },
//   });
// }

// const circle = new Circle(10);
// circle.defaultLocation = 1;
// console.log(circle.defaultLocation);
// // circle.defaultLocation();
// circle.draw();
//Object.defineProperty(Object to which new property to be added,name of the property,object)

//stopWatch()
//start,stop,reset,duration

//start->give error if already started
//stop ->give error if it not started
//reset ->clear the duration
let startTime = new Date();
let clickedButton;
// function stopWatch() {
//   document.write(startTime.getMinutes(), startTime.getSeconds());
// }

let stopWatch = (clickedButton) => {
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
    if (clickedButton === "start") {
    setInterval(
      (start = () => {
        milliseconds++;
        if (milliseconds === 1000) {
          seconds++;
        }
        if (seconds === 60) {
          minutes++;
          seconds = 0;
        }
        document.getElementById("watch").innerHTML =
          minutes + " : " + seconds + " : " + milliseconds;
      }),
      10
    );
  } else if (clickedButton === "stop") {
    document.getElementById("watch").innerHTML =
      minutes + " : " + seconds + " : " + milliseconds;
  } else if (clickedButton === "reset") {
    minutes = 0;
    seconds = 0;
    document.getElementById("watch").innerHTML =
      minutes + " : " + seconds + " : " + milliseconds;
  }
};

document.getElementById("watch").innerHTML =
  startTime.getHours() +
  " : " +
  startTime.getMinutes() +
  " : " +
  startTime.getSeconds();
