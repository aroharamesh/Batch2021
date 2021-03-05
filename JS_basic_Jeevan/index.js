console.log("Hello Aroha");

alert("hello i am alert message ");

var num = 190;

let name = "aroha";
let age = 23;
let isAproved = true;
let f_name = undefined;
let l_name = null;

const work_place = "Jayanagar";

console.log(typeof("name"));
console.log(typeof(age));
console.log(typeof(isAproved));
console.log(typeof(f_name));
console.log(typeof(l_name));

let Person = {
    name: "raju",
    City: "Bangalore",
    Phone: 8790890877
}

console.log(Person);
console.log(Person.Phone);
console.log(Person["City"]);



let Person1 = {
    name: "raju",
    address: {
        city: "bangalore",
        state: "karnataka"
    },
    Phone: 8790890877
}
console.log(Person1.address.state);
console.log(Person1["address"]["city"]);

let slectedColors = ["red", "green", "yellow"];
console.log("this is an array " + slectedColors);
slectedColors[3] = "23";
console.log("this is an array after adding elmemnr to index (3) " + slectedColors);




function greet() {
    console.log("this is function");
}

greet();

function square(number) {
    return number * number;
}

console.log("this is function with argument " + square(5));

let square2 = square;
console.log("This is function reference   " + square2);