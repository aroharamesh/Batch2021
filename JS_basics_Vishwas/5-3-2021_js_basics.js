let x=10;
let y=3;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y);
console.log(x ** y);//Exponentiation: x to the power of y

//..................Increment Operator(++)(x+1).....................

console.log(++x); //Increment first and then displays--> pre-Increment

console.log(x++)  //Displays first and then Increment-->post-Increment

//.............Decrement Operator(--)(x-1)...........................

console.log(--x); //Decrement first and then displays--> pre-Decrement

console.log(x--)  //Displays first and then Decrement-->post-Decrement

//................Assignment Operator.................................
let x=10;
console.log(x+=5);//x=x+5

console.log(x-= 5); //x = x-5

console.log( x *=5 ); // x=x*5

console.log( x /=5 ); // x=x/5

console.log( x %=5 ); // x=x%5

//................Relation Operator.....................................

//out put will be in boolean 

console.log(x>y);
console.log(x<y);
console.log(x <= y);
console.log(x>=y);

//..................Equality Operations.............................

console.log(x===x);

console.log(x==x);

console.log(x!=x);

//....................Ternary Operator..............................

//condition ? Statement1 : statement2;

let points=101;

let customer= points > 100 ? 'Gold' : 'Silver';

//....................Logical Operators.............................

//Logigal AND(&&) - Return true if both the operands are true

console.log(true && true)//true
//everything else is false.....

let highIncome=true;
let goodCreditScore=true;
let eligibleForLoan=highIncome && goodCreditScore;
console.log("eligible for loan :",eligibleForLoan);

//---------------------------------------------------------------------------------------------
//Logigal OR(||) - Return true if any one of the operands is true

console.log(false || false)//false
//everything else is true.....

highIncome=true;
goodCreditScore=true;
eligibleForLoan=highIncome || goodCreditScore;
console.log("eligible for loan :",eligibleForLoan);
//-----------------------------------------------------------------------------------------------

//logical NOT(!) - Returns true if the value is false, return false if the value is true

console.log(!true)//false
console.log(!false)//true

highIncome=false;
goodCreditScore=false;
let applicationRefused

eligibleForLoan=highIncome || goodCreditScore;
console.log("eligible for loan :",eligibleForLoan);

applicationRefused=!eligibleForLoan;
console.log("Application Refused", applicationRefused);

//------------------------------------------------------------------------------------------------
//logical operators will not always be boolean 

console.log(false||'Vishwas');
console.log(false||1);


// Expected Out Put of falsy 
// undifined
// NaN
// null
// 0
// false

//Anything other than falsy is truthy
let x=10;
//console.log(false && ++x)
console.log(x);



console.log(false||1||2); //Short-circuting



//.....................Bit-wise Operators..................................................

//Precedence of Operators
let x=2+3*4;
console.log(x);

x=(2+3)*4;
console.log(x);

//Precedence
//()
//*
// /
// +,-
