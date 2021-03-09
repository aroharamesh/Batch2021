function fizzBizz(number) {
    console.log("FIZZBIZZ input:", number);
    if (!isNaN(number)) {
        let i = number;
        let f = i % 3 == 0;
        let b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    } else {
        console.log("Not a Number");
    }

}

fizzBizz(21);


//isprime
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
}


let inputnum = 33
console.log("Prime number below:", inputnum)
for (var i = 0; i < inputnum; i++) {
    if (isPrime(i)) console.log(i);
}

//grade program
const marks = [87, 80, 100]
let sum = 0;
let leng = marks.length;

function calculateGrade(marks) {
    console.log("Grade Program");
    for (let val of marks) {
        sum = sum + val;
    }
    let avg = Math.floor(sum / leng);
    console.log("average marks :", avg);


    if (avg > 1 && avg <= 59)
        console.log("Grade is F");
    else if (avg > 59 && avg <= 69)
        console.log("Grade is D");
    else if (avg > 69 && avg <= 79)
        console.log("Grade is C");
    else if (avg > 79 && avg <= 89)
        console.log("Grade is B");
    else if (avg > 89 && avg <= 100)
        console.log("Grade is A");


}

calculateGrade(marks);