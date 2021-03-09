//Conditional statements
//If hour is between 6 am to 12 pm print good morning!
//Else If hour is between 12 pm to 18 pm print good afternoon!
//Else print good evening!

// let hour = 19;
// if (hour >= 6 && hour < 12) {
//     console.log("Good Morning!")
// }

// else if (hour>=12 && hour <= 18) {
//     console.log("Good Afternoon");
// }
// else { 
//     console.log("Good Evening");
// }

//check whether the current logged in user is guest,moderator or admin

// let user = 'guest'
// switch (user) {    
//     case 'guest':
//         console.log("User is guest");
//         break;
//     case 'moderator':
//         console.log("User is moderator");
//         break;
//     default:
//         console.log("User is admin");
//         break;   
// }

//Loops
//For
//While
//Do..while
//For..in
//For..of

//Even numbers
// for (let i = 0; i <= 10; i++) { 
//     if (i % 2 === 0)
//         console.log("Even number is ", i);
// }

// for (let i = 10; i >= 0; i--) { 
//     if (i % 2 === 0)
//         console.log("Even number is ", i);
// }

// let i = 0;
// while (i <= 5) { 
//     console.log(i);
//     i++;
// }

// Do..While loop
// let i = 6;
// do {
//     console.log(i);
// } while (i <= 5)
 
// obj = { name: 'nivetha', phone: '7540054073' }; 
// for (key in obj)     //key variable will hold the property of an object 
//     console.log(obj[key]);

// let arr = [1, 2, 3];

// for (index in arr)
//     console.log(arr[index]);

// for (ele of arr)
//     console.log(ele);


//Break and Continue

// for (i = 0; i <= 10; i++) { 
//     if (i === 3)
//         break;
//     console.log(i);
// }

// for (i = 0; i <= 10; i++) { 
//     if (i === 3)
//         continue;
//     console.log(i);
// }

//maximum of 2 numbers 

// let maximum = (first_number,second_number) => { 
//     return (first_number > second_number?first_number : second_number);
// }
// console.log("Maximum is ", maximum(10, 15));

//isLandscape(width,height);

// let isLandscape = (width, height) => { 
//     if (width>height)
//         return true;
//     return false;
// }

// console.log("Landscape is ",isLandscape(10,20));


// let fizzBuzz = (num) => {
//     num % 15 == 0 ? console.log(num) : (num % 5 == 0) ? console.log("Fizz") : (num % 3 == 0) ? console.log("Buzz") : typeof num == "number" ? console.log("Not a number") : console.log("Not a suitable number");
      
// }
// fizzBuzz(15);

// let speedLimit = 70;
// let maxLimit = 12;
// let kmPerPoint = 5;

// function speedCheck(speed) {    
//     if (speed < speedLimit + kmPerPoint)
//         console.log("Message is ok");
//     else { 
//         let points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= maxLimit)
//             console.log("License suspended");
//         else
//             console.log("Point is ", points);
//     }
// }

// speedCheck(75);

// Even and odd numbers
// function rangeOfEvenAndOdd(range) {
//     for (i = 0; i <= range; i++)
//         (i % 2 !== 0) ? console.log(`${i} is odd`) : console.log(`${i} is even`);        
    
// }

// rangeOfEvenAndOdd(100);

// const arr = [0, null, undefined, false,'', 2, 3];

// let countTruthy = (arr) => { 
//     var count = 0;
//     for (ele of arr)
//         if (ele)
//             count++; 
//     return count;
        
// }

// console.log(countTruthy(arr));

//showProperties 

// const movie = { title: 'a', releaseYear: 2018, rating: 4.5, director: 'b' };

// var showProperties = (movie) => { 
//     for (prop in movie) { 
//         var type = typeOf(movie[prop])
//         if (typeOf == 'string')
//             console.log(movie[prop]);
//     }
        
        
// }

// showProperties(movie);


// Sum of all the multiples of 3 and 5

// var multipleRange = (num) => { 
//     var sum = 0;
//     for (i = 0; i <= num; i++) 
//         if (i % 3 == 0 || i%5==0)
//             sum += i;           
//     return sum;

// }

// console.log(multipleRange(15));


//Calculating the grade of a student

//avg is 1-59 then F
//avg is 60-69 then D 
//avg is 70-79 then C
//avg is 80-89 then B
//avg is 90-100 then A 

//calculateGrade(marks)
// const marks = [90, 90, 90]

// let calculateGrade = (marks) => { 
//     let avg;
//     let sum = 0;
//     let len_arr = 0;
//     let message  = "Grade is "
//     for (mark of marks)
//     {
//         sum += mark;
//         len_arr += 1;
    
//     }
//     avg = sum / len_arr;
//     avg > 1 && avg <= 59 ? console.log(message, "F"):avg >= 60 && avg <= 69 ?console.log(message, "D"):avg>=70 && avg <= 79 ?console.log(message,"C"):avg>=80 && avg <= 89?console.log(message, "B"):avg>=90 && avg <= 100?console.log(message, "A"):avg;
        
// }

// calculateGrade(marks)


// let showStars = (limit) => { 

//     for (i = 0; i <= limit; i++) {
//         for (j = 0; j <= i; j++) {
//             document.write("*");
//         }
//         document.write("<br>")
//     }

// }

// showStars(10);

// Prime numbers 
// showPrime(limit)
// showPrime(10);
// function showPrime(limit) {
//     for (i = 2; i <= limit; i++) {
//         for (j = 2; j <= i ; j++)
//             if (i % j == 0)               
//                 break;
//         if (j == i)
//             console.log(i);
//     }
// }

















