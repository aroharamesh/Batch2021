// javscript

//* 1) let and const *//
let  name;
console.log(name); //undefined    name should initialize value

let name='gopi';
console.log(name); // output: gopi

//const

const a;
a=10;   //Uncaught SyntaxError: miissing initialize in const declaration  

const a=10; // ptints =10

// overwriteen  of var and let

let name='gopi';
let name='jp';
console.log(name); // Identifier 'name' has already been declared

// diffrent var

console.log(x);
var x= 5;          output : //undefined
console.log(x);             //5

//Data types;
//1) primitive data type
// 2)referrence type

// types if primitive Datatype
//----------------------------------------------------------------
// 1)String
// 2)Number
// 3)Boolean
// 4)undefined
// 5)null


let name ='gopi';  //sting literal
let age=30; //number
let isApprove=true; //boolean
let firstName=undefined; //isundefined
let lastName= null; //clear the value of number

//------------------------------------------------------------
let name = true ; //or // 1    // dynamically typed

 //static typed
//                  string name = 'ramesh';


let phone=988885205
console.log(phone); 
console.log(typeof(phone));

//---------------------------------------
//reference typed
//Object

let person ={
    name:'gopi',
    city:'bengaluru',
    phone:'99988745'
}
console.log(person);

//or to change the property of objevt

person.name='jeevan';
person.city='chennai'

//1)access the properties using dot noatation----------------

console.log(person.name);


// nested object ------------------
let person ={
    name:'gopi',
    adress:{
        city:'bengaluru',
        state:'karnataka',
    },
    phone:'99988745'
}

console.log(person.adress.city)
//2) access the properties using Bracket Notation

console.log(person['name']);
console.log(adress['city']['state']);        //currying


//-----------------------------------------------------------------------------------------------------
//first arithmantic operator


// -----------------------------
// x+y is an expression,produce the values , which will have both opernad and operator
// x and y are operands and + is operore

console.log(x+Y);
console.log(x-Y);
console.log(x*Y);
console.log(x/Y);
console.log(x%Y);
console.log(x**Y);  //exponentiation : x to poweer of y


//-----------------------------------
// INCREMENT & DECREMENT
let x=10;
let y=3;


console.log(++x); //INCREMETN FIRST AND THEN DISPLAY   11
 x=x+1;

 console.log(x++);//DISPAY FIRDT SND THE OONCREMENT    11
x=null
x=x+1;
////////////////////x+=1;  OR X=X+1


 //DECREMENT(--)
 console.log(--x); // DECREMENT FIRST AND THEN DISPLAY //   9

 console.log(x--); // DECREMENT FIRST AND THEN DISPLAY     8


 console.log(x*=5); OR / OR %

 // -------------------------------------------------------------------------------
 //COMAPRISON operator
 //1) RELAIONAL
console.log(x>0);  //OUTPUT WILL BOLEN
x<0;             //<=0,>=0

//2) EQUALITY

console.log(x===1);
console.LOG(x !==1)

//STRICT EQUALITY operator (TYPE + VALUE) OPERATOR 
console.LOG(1===1)                 //TRUE
console.LOG('1'===1)         ///FALSE

//LOSE EQULAITY OPERATOR

console.log(1=='1') //CONVERTS THE RIGHT SIDE VALUE('1') TO NUMBER  // FALSE
console.log(true==1);//CONVEERTS THE RIGHT SIDE VALUE (1)TO BOLLEN         //TRUE
console.log(true==0); //    FALSE

// ----------------------------------------------------------------------------------------------------------------
//TERNARY OPERATOR

let x=1;

//IF A CUSTOMER HAS MORE THAN 100 PONITS
//THEY ARE GOLD CUSTOMER
// OTHERWISEY THEY ARE SILVER  CUSTOMER


let typeofCustomer = points > 100? 'GOLD' : 'SILVER' ;

//CONDITION? STATEMENT1 : STATEMENT2
console.LOG(typeofCustomer)



if(points >100) {
    console.log('GOLD')
}
else
{
    console.log('SILVER')
}
//----------------------------------------------------------------------
//LOGICAL OPERTORTS 

//USED TO  MAKE THR DECISIOON BASED ON MULTIPLE CONDITION

//LOGICAL AND (&&) -  RETURN IF BOTH OPERANDS ARE TRUE
console.log(true && false)
console.log(true && true)

let hignincome= true;
let  goodcreditscore = true;
let eligibleforLoan = hignincome && goodcreditscore;

console.log('elgible fro laon',elgibleona)

//LOGICAL AND (&&) -  RETURN if one of the  OPERANDS ARE TRUE
// ------------------------------------------------------------------------------
//logical not(!)

let hignincome = false;
let goodcreditScore = false;

let eligiblefoLoan = hignincome || goodcreditScore;
console.log('Elifible',eligiblefoLoan); 

//constarditcing

let applicationRefused = !eligiblefoLoan
console.log('Application Refused', applocatojnRefused);

//resultsd of logical exprression cannot  be alwys boolan

//falsy (not a flase) values 


console.log(false || true);
console.log(false || 'rames');



//     most of falsy value     
//undefined
//NULL , // 0  // false //'' // NaN -NOT A NUMBER - SPECIAL VALUE. THATS DOESN'T PRODUCE ANY VALIABLE NUMBER 

//ANYTHING THST IS NOT FALSY --> TRUTHY


NIVETHA
CONSOL.log(false && ++x);
CONSOLOE.LOG(x)                   //false
                                   //1
console.log(false || 1 || 2);         //short-circuiting
console.log(true || 1 || 2);     


let suercolor= 'red';
let usercolor= NAN; //     or undefined 
let defultcolor = 'blue';

let cuerentcolor = userColr || defultcolor;    // red // blue

console.log(curentColor);

//  -------------------------------------------------------------------------
//bitwise operator

//1=00000001 - 128 64 32 16 4 2 1
// 2=00000010             1 and compare
// or = 00000011 - 3
// AND = 00000000 - 0

console.log(1|2);  //bitwise or 
console.log(1& 2);
//----------------------------------
//accesss control systems
//read ,write , execute

//rwx  - rrda write execute  -4,2,1
// 4-00000100 - read only permission
// 2-00000010 - wrie ""--------""
// 1-00000001 - execute only permission
// 4,2 - 000000110  - read and write permisono
// 4,2,1 - 000000111 - read,write, & execute permsion 

 const readPermison = 0;
const writePermsion = 4;
const executePermsion = 4;

var mypermison = mypermison | readPermison  | writePermsion;
console.log(mypermison)    ///aded  or operation  6

let message = (mypermison & readPermison)? 'yes' : 'no';   //no
let message = (mypermison & readPermison)? 'yes' : 'no'; //yes

console.log(message);


//----------------------------------
//operator Prcedence

//Prcedence of operator

let x = 2 + 3*4;
console.log(x);

//()
//*
// /
// 

let x = (1 == true)
console.log(x)



