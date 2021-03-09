// if (condition)
// {
//     statement
// }

// if (condition)
// {
//     statement
// }
// else
// {

// }
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good Morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good Afternoon");
} else {
    console.log("Good Evening");
}
// switch case
let role = 'ABC';
switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderate':
        console.log('Moderate User');
        break;
    default:
        console.log('Admin User');
        break;
}
//same condition with if el5se 
if (role == 'guest') {
    console.log('Guest User');
} else if (role == 'moderate') {
    console.log('Moderate User');
} else {
    console.log('Admin User');
}

//for loop
console.log("Numbers btwn 1-5 using for:")
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("Even Numbers btwn 1-10 ")
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0)
        console.log(i);
}
console.log("Even Numbers btwn 1-10 in reverse order")
for (let i = 10; i > 0; i--) {
    if (i % 2 == 0)
        console.log(i);
}

//While loop
console.log("Numbers btwn 0-5 using While:")

let number = 0;
while (number <= 5) {
    console.log(number);
    number++;
}

//
console.log("Even Numbers btwn 1-10 using while")
number1 = 1
while (number1 <= 10) {
    if (number1 % 2 == 0)
        console.log(number1);
    number1++;
}

// for in loop
console.log("Example using for in")
const person = {
    name: 'Aroha',
    phone: 999900000
}
console.log("display key")

for (let key in person) {
    console.log(key);
}

console.log("display key and value");
for (let key in person) {
    console.log(key, person[key]);
}

// for of 
console.log("looping through array using for of: ");
const colors = ["red", "green", "yellow", "blue"];
for (color of colors) {
    console.log(color);
}

//break

let a = 0;
console.log("using brk statement");
while (a <= 10) {
    if (a == 5) break;
    console.log(a);
    a++;
}

//