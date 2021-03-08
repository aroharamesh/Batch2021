console.log("hello Vishwas");
console.log("hello Vishwas");
 

//..............premitive Type...............//

//alert(2*3);
//var name="vishwas";

//using let....
let name='Vishwas';//String litseral
console.log(typeof name);

let age=23;//number literal
console.log(typeof age);

let isApproved=true;//boolean
console.log(typeof isApproved);

let firstName=undefined;//undefined
console.log(typeof firstName);

let lastName=null;//null
console.log(typeof lastName);

//..............Reference Type.............//

let person={
    name:"Vishwas",
    city:"Bengaluru",
    phone:8123604544
};
//accessing the properties using DOT operator 

console.log(person.name);
console.log(person.city);
console.log(person.phone);

//..........Nested object..............//

let person1={
    name1:"Vishwas",
    address={
        city1:"Bengaluru",
        state:"Karnataka"
    },
    phone1:8123604544
};

console.log(person1.address.state);


//accessing the properties using Brackets operator 

console.log(person['name']);

console.log(person1['address']['state']);

//............Array-list of Item........//

let selectedColours =['red','green'];
selectedColours[2]=1;
console.log(selectedColours);
console.log(typeof selectedColours);
console.log(selectedColours.length);

selectedColours[4]="orange";

console.log(selectedColours);


//..............Function.............//

function greet(){
    console.log("Hello world");
}
greet();//calling function

//.........function with a parameter......//

function greet1(name){
    console.log("Hello "+name);
}
greet1("Vishwas");//calling function with argument.

let greeting=greet1;// Function Reference
console.log(greeting);

let greeting1=greet1("Vishwas");//function call with argument.
console.log(greeting1);
