// Map method

const numbers = [3, 4, 6, 1, 8];

const square = function (number) {
    return number * number;
}

const squareNumber = numbers.map(square);
console.log(squareNumber);

// when we use map method use return word.


const squareNumbers = numbers.map((number, index) => {
    return index;
});
console.log(squareNumbers);



// Filter Method
const numbers1 = [1, 2, 3, 6, 4, 8];

const isEven = function (number) {
    return number %2 === 0;
}
const evenNumbers = numbers1.filter(isEven);
console.log(evenNumbers);

const isOdd = function (number) {
    return number % 2 !== 0;
}
const oddNumber = numbers1.filter(isOdd);
console.log(oddNumber);

// Reduce method

const numbers2 = [1, 2, 3, 4, 5, 10];

// Aim: sum of all the number in array

const sum= numbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum);

// accumulator, currentValue ,   return
//    1              2             3
//    3              3             6
//    6              4             10
//    10             5             15
//    15             10            25


const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "TV", price: 15000 },
]
const totalAmt = userCart.reduce((totalPrice, currentProduct) => {
    return totalPrice.price + currentProduct.price;
}, 0);
console.log(totalAmt);


// Total price        current price      return
//  0                  {} 1200            12000
//  12000                22000            34000
//  34000                15000            49000

//--------------------------------------------------------


// Sort Method


// ASCII Table
// Char : ASCII value

/*
0 = 48
1 = 49
2 = 50
3 = 51
4 = 52
5 = 53
6 = 54
7 = 55
8 = 56
9 = 57


A = 65  to   Z = 90
a = 97  to   z = 125
*/

// SORT
// 5,9,1200,400,3000
// 5,9,400,1200,3000 (expected) but it is (1200,3000,400,5,9)

const numbers3 = [5, 9, 1200, 400, 3000];
numbers3.sort();
console.log(numbers3);

numbers3.sort((a, b) => {
    return a - b;
});
console.log(numbers3)
// 1200,410
//a-b---> 790
// a-b ---> positive(greater then 0) --> b,a

// a-b --> negative --> a,b
// 5,9 --> -4


//-------------------------------------------------------

// Find method

const myArray = ['hello', 'cat', "dog", 'lion'];
function isLengths3(string) {
    return string.length === 3;
}

const ans = myArray.find(isLengths3);
console.log(ans); 

const real = [
    { userId: 1, userName: "Parth" },
    { userId: 2, userName: "harshit" },
    { userId: 3, userName: "aman" },
    { userId: 4, userName: "mohit" },
    { userId: 5, userName: "krish" },
];
const myUser = real.find((user) => user.userId === 3);
console.log(myUser);

// ------------------------------------------------------------

//Every method
const numbers4 = [2, 4, 6, 8, 10];
const answer = numbers4.every((number) => number % 2 === 0);
console.log(answer);

//if all the units apply same condition gives the output true except false


// ---------------------------------------------------------------------

// Some method
const numbers5 = [3, 5, 8, 9];

//kya ek bhi no. esa hai jo even then output as a true

const No = numbers5.some((number) => number % 2 === 0);
console.log(No);


// --------------------------------------------------------------------

// Fill method
// value , start , end
const myArray1 = new Array(10).fill(-1);
console.log(myArray1);

const myArray2 = [1, 2, 3, 4, 5, 6, 7, 8];
myArray2.fill(0, 2, 5);
console.log(myArray2);

//----------------------------------------------------------------------

// Splice method
// start , delete , insert
const myArray3 = ['item1', 'item2', 'item3'];

//delete
const deletedItem = myArray3.splice(1, 2);
console.log("deleted item", deletedItem);
//imsert
myArray3.splice(1, 0, 'inserted item');

// Insert and delete
const deletedItem1 = myArray3.splice(1, 2, 'inserted item');
console.log(myArray3);