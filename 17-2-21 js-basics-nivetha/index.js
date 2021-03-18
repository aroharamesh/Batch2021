// function Shape(color) {
//   this.color = color;
// }

// function Circle(radius, color) {
//   this.radius = radius;
//   Shape.call(this, color); // calling the super constructor
//   this.draw = () => {
//     console.log("draw called");
//   };
// }
// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// // Circle.prototype.duplicate = function () {
// //   console.log("duplicate circle");
// // };

// Shape.prototype.duplicate = function () {
//   console.log("duplicate shape");
// };

// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// // Circle.prototype = Object.create(Object.prototype); //Implicit relationship
// // Circle.prototype = Object.create(Shape.prototype);
// // Circle.prototype.constructor = Circle; // we have to reset the circle prototype property, we should reset the
// // constructor

// extend(Circle, Shape);

// //Method overriding
// Circle.prototype.duplicate = function () {
//   console.log("duplicate circle");
// };

// const s = new Shape();
// const c = new Circle(10, "red");

// const shapes = [new Circle(), new Shape()];

// for (let shape of shapes) {
//   shape.duplicate();
// }

// // suppose if we don't have polymorphism concept

// // for (let shape of shapes) {
// //   if (shape.type == 'circle') {
// //     duplicateCircle();
// //   }
// // }

// //When to use inheritance
// //Avoid creating inheritance hierarchy
// //Favor composition over inheritance

// // Object.prototype.canSwim = function () {
// //   console.log("Swimming");
// // };

// // Object.prototype.canWalk = function () {
// //   console.log("Walking");
// // };

// // c1 = {}; //check by typing c1. in console

// function mixin(target, ...sources) {
//   Object.assign(target, ...sources);
// }

// const canEat = {
//   eat: function () {
//     console.log("Eating");
//   },
// };

// const canWalk = {
//   walk: function () {
//     console.log("Walking");
//   },
// };

// function Person() {}

// // const person = Object.assign({}, canEat, canWalk);
// // const person = { ...canEat, ...canWalk };
// let person = new Person();
// mixin(Person.prototype, canEat, canWalk);
// // person = mixin(Person.prototype,canEat,canWalk);

// console.log(person);

//Prototypical inheritance

//create two objects
//HTMLElement -> click ->Instance method, focus -> Prototype method
//HTMLSelectElement -> Should accept empty array, create instance method addItem and removeItem

// new HTMLSelectElement.prototype.constructor();
// new HTMLSelectElement();
// const htmlElement = {
//   click: function () { },
// };

// function focus() {
//   console.log("focus");
// }


// // const focus = Object.create(htmlElement);
// // Object.create(focus, htmlElement);
// // Object.create(htmlElement,focus());
// // Object.assign(htmlElement,focus())

// // htmlElement.prototype.focus = function () {
// //   console.log("focus");
// // };
// // Object.defineProperty(htmlElement, "focus", () => { });

// // htmlElement.focus =  function () {};
// console.log(htmlElement);

// const htmlSelectElement = {
//   addItem: function () {},
//   removeItem: function () {},
// };

// const htmlSelect = htmlSelectElement.constructor();
// // const htmlSelectElement1 = new htmlSelectElement();
// // console.log(htmlSelect);
// // console.log(htmlSelectElement1);
