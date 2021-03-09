//arithmetic operator
let x = 10;
let y = 3;

console.log("x =", x);
console.log("y=", y);


console.log("this is the sum ", x + y);
console.log("this is the differnece ", x - y);
console.log("this is the multiply ", x * y);
console.log("this is the divide ", x / y);
console.log("this is the modulus ", x % y);
console.log("this is the power ", x ** y); //Exponent (x power y)


console.log("this is post increment", x++); //post increment    
console.log("this is pre increment", ++x); //pre increment

console.log("this is post decrement", x--); //post decrement
console.log("this is pre decrement", --x); //pre decrement

console.log("this is x=x+5", x += 5); //increment by 5   
console.log("this is x=x-5", x -= 5); //decrement by 5



//Comparision operator

let a = 2;
console.log("a=", a);
//relational
console.log("a > 1", a > 1);
console.log("a < 1", a < 1);
console.log("a >= 1", a >= 1);
console.log("a <= 1", a <= 1);

//Equality

//strict equality
console.log("a === 2", a === 2);
console.log("'2' === 2", '2' === 2);
//loose equality
console.log("1 == 1", 1 == 1);
console.log("'1' == 1", '1' == 1);
console.log("true == 1", true == 1);

//tenary operator
let points = 101
console.log("points=", points)
let typeOfCustomer = points > 100 ? 'gold' : 'silver';
console.log("points>100?'gold':'silver'= ", typeOfCustomer);


//logical operator
//AND (&&)
let highIncome = false;
console.log("highIncome", highIncome)
let goodCreditscore = true;
console.log("goodCreditScore", goodCreditscore)
let eligibleForloan = highIncome && goodCreditscore;
console.log('Eligible for loan using &&', eligibleForloan);

//OR(||)
let highIncome1 = false;
console.log("highIncome", highIncome1)
let goodCreditscore1 = true;
console.log("goodCreditScore", goodCreditscore1)
let eligibleForloan1 = highIncome1 || goodCreditscore1;
console.log('Eligible for loan using ||', eligibleForloan1);

//NOT(!)
let highIncome2 = false;
console.log("highIncome", highIncome2)
let goodCreditscore2 = false;
console.log("goodCreditScore", goodCreditscore2)
let eligibleForloan2 = highIncome2 || goodCreditscore2;
console.log('Eligible for loan', eligibleForloan2);
let applicationRefused = !eligibleForloan2;
console.log('Application Refused', applicationRefused);


//falsy
let k = 1;

console.log("k=", k);
console.log("false || k", false || k);
console.log("false || false", false || false);
console.log("false || 'aroha'", false || 'Aroha');

//truthy
console.log("false && ++k =", false && ++k);



console.log("true || ++k =", true || ++k);

//Short Circuit
console.log("false || 1|| 2 =", false || 1 || 2);

console.log("false && 1 && 2t =", false && 1 && 2);

//Bitwise operartor
console.log("1|2 =", 1 | 2);
console.log("1&2 =", 1 & 2);

//example of bitwise
let myPermission = 0;
console.log("myPermission =", myPermission);
const readPermission = 4;
console.log("readPermission =", readPermission);
const writePermission = 2;
console.log("writePermission =", writePermission);
const executePermission = 1;
console.log("executePermission =", executePermission);

myPermission = myPermission | writePermission | readPermission;
console.log("myPermission = myPermission | writePermission | readPermission =", myPermission);


let message = (myPermission | readPermission) ? 'yes' : 'no';
console.log("message=(myPermission|readPermission)?'yes':'no' =", message);