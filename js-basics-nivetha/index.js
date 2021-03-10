//objects

// let x = 1;
// let y = 1;
// let radius = 1;

//objects are collection of key value pairs 

// Group related objects

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () { 
//         console.log('draw');
//     }
// }

// //If a function is a part of a object, we call it as a method 

// circle.draw();


//factory function

// function createCircle(radius) {
//     const circle = {
//             radius,
//             location: {
//                 x: 1,
//                 y: 1
//             },
//             isVisible: true,
//             draw: function () { 
//                 console.log('draw');
//             }
//     }
//     return circle;    
// }

// console.log(createCircle(1));
// console.log(createCircle(2));

//optimized code 

// function createCircle(radius) {
//     return {
//             radius,
//             location: {
//                 x: 1,
//                 y: 1
//             },
//             isVisible: true,
//             draw: () => { 
//                 return 'draw';
//             }
//     }
// }

// console.log(createCircle(1).constructor);
// console.log(createCircle(2));
// console.log(createCircle(1).draw())


//camel Notation - oneTwoThree factory function
//Pascal Notation - OneTwoThree - Constructor function

//Constructor function

    // function Circle(radius) { 
    //     this.radius = radius; //"this" creates reference to an empty object
    //     this.draw = function () { 
    //         console.log("draw");
    //     }
    // }

    // const circle = new Circle(1);  
    // console.log(circle.constructor);

//Both patterns are good, no difference
// 3 things 
// 1.creates an empty object // const x = {} 
// 2.set "this" keyword to point to the new object
// 3.returns the object form the function 

//Dynamic nature of the object 

// const circle = {
//     radius: 1
// };

// // we cannot reassign the const object, but we can add or remove the properties.
// circle.red = {}
// console.log(circle)


//Constructor property 



// const Circle1 = new Function('radius','circle', `
// this.radius = radius;
// // this.circle = circle;
// this.draw = function () { 
//              console.log("draw");
//          }`);
// const Circle2 = new Circle1(1,2);
// console.log(Circle1);
// console.log(Circle2);


// function Circle3(radius) { 
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     }
// }

// const circle3 = new Circle3(1);
// console.log(circle3);

//copy value 
// let x = 20;
// let y = x;
// x = 10; 
// console.log(x, y);

//copy by reference

// let a = {value:10};
// let b = a;
// b.value = 20;   
// console.log(a.value);
// console.log(b.value);

//Primitives are copied by their value 
//Objects are copied by their reference

// function increase(obj) { 
//     return ++obj.value;
// }

// console.log(increase(a));
// console.log(increase(11));

//Enumerating properties of an object 

// const circle = {
//     radius: 1,
//     draw() {
//         return "draw";
//     }
// }
// // console.log(circle.draw())

// for (let key of Object.keys(circle))
//     console.log(key);

// for(let entry of Object.entries(circle)) //displays properties and arrays in an array format
//     console.log(entry);

// if ('radius' in circle)
//     console.log("YES");

//Cloning of an object 
// Copying all the properties and functions of an object to another 

// const circle4 = {
//     radius: 1,
//     draw() { 
//         console.log("draw");
//     }
// }

// const person = {
//     name:'Nivetha'
// }

// const anotherCircle = {};

// for(key in circle4)
// { 
//     anotherCircle[key] = circle4[key];
// }

// console.log(anotherCircle);

// const anotherCircle = Object.assign({}, circle4);
// const anotherCircle = Object.assign({}, circle4,person);

// anotherCircle['radius'] = 10;
// console.log(anotherCircle);


// const anotherCircle = Object.assign({ city: 'Bengaluru' }, circle4)
// console.log(anotherCircle);
// console.log(circle4);

//Spread operator
// const anotherCircle = { ...circle4 };
// anotherCircle['city'] = 'Bengaluru';
// console.log(anotherCircle);
// console.log(circle4);


//Garbage Collection
//allocates and deallocates the memory,user we don't have control 

// let circles = {} //allocates the memory
// console.log(circles); //after displaying deallocates the memory

//Math 

// console.log(Math.random())

// const str = new String('hi');
// str1 = str;
// str1 = "y";
// console.log(str,str1);

//Template literals

// const message = "this is my first message";
// console.log(message);

// const name = "Nivetha";
// const templateLiteral = `My name is ${name}`;   
// console.log(templateLiteral);

//Date 

// const date = new Date(2021,14,12); //0-11 months // if we incrementing after 11, it incrementing a month
// console.log(date);

//Assignments

//Address object with the below properties and create a function showAddress(address)
//which displays all the properties and the values
//street 
// city 
//zipCode 


//create address object by using factory and constructor function 

//create a blog post object 
//title 
//body 
//author 
//views
//comments 
// [authour,body]
//isLive 


function showAddress(street,city,zipCode) { 
    return {
        street: street,
        city: city,
        zipCode: zipCode
    }
}

console.log(showAddress("vp street", "Tirunelveli", 627416));


function ShowAddress(street, city, zipCode) { 
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

}

console.log(new ShowAddress("vp street", "Tirunelveli", 627416));

function blogPost(title,author,body,views,comments,isLive) { 
    return {
        title,
        details: { author, body },
        views,
        comments,
        isLive
    }
}

console.log(blogPost("Raja Rani", "Atlee", "Love movie", "500000", "Good one", "No"));


function BlogPost(title, author, body, views, comments, isLive) { 
    this.title = title;
    this.details = { author, body };
    this.views = views;
    this.comments = comments;
    this.isLive = isLive;
}

console.log( new BlogPost("Raja Rani", "Atlee", "Love movie", "500000", "Good one", "No"));
