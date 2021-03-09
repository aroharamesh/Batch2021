function Max(a, b) {
    if (a > b) {
        console.log('Maximum number is', a);
    } else {
        console.log('Maximum number is', b);
    }
}
console.log(Max(12, 10));

// if(a>b) return a;return b;

function isLandscape(h, w) {
    if (w > h)
        return true;
    return false;
}

console.log(isLandscape(10, 17))

// return(w>h)

//4

let speedLimit = 70;
let kmPerPoint = 5;
let maxPoint = 12;

checkSpeed(100);

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points > maxPoint) {
        console.log("License Suspended");
    } else
        console.log('points:', points);
}

//5
//Even and odd numbers
show_Numbers(20)

function show_Numbers(num) {
    console.log("Entered number is", num)
    for (num; num > 0; num--) {
        if (num % 2 == 0) {
            console.log(num + " is even")
        } else {
            console.log(num + " is odd")
        }

    }
}

//const message=(i%2 !== 0) ? 'odd' : 'even' ;
//6
//count truthy values from array 

const array = [0, null, undefined, false, '', 2, 3];

console.log(countTruthy(array))

function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    console.log("number of truthy values is", count);
}

//7
//string Property

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie)

function showProperties(movie) {
    for (let key in movie)
        if (typeof movie[key] === 'string')
            console.log(key, movie[key]);
}

//8
//sum of all multiples of 3 and 5

console.log(multipleOf(14))

function multipleOf(range) {
    let sum = 0;
    for (i = 0; i < range; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum = sum + i;
    console.log("Sum of numbers divisible by 3 and 5 in range:", range, "=", sum);
}

//10
//display stars pattern row

showStar(10);

function showStar(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (let i = 0; i < row; i++) {
            pattern = pattern + '*';
            console.log(pattern);
        }

    }
}