//  lexical environment , scope chain

const lastName = "Kotahri";
const printName= function () {
    const firstName = "Parth";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);    
    }
    myFunction();
}
printName();


// Closures
// function can rerturn functions

function outerFunction() {
    function innerfunction() {
        console.log("hello world");
    }
    return { a: "1" };
}
console.log(outerFunction());
//const ans = outerFunction();
//console.log(ans);


// Example 1
function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}
const ans1 = printFullName("Parth", "Kothari");
console.log(ans1);
ans1();

// Example 2
function hello(x) {
    const a = "varA";
    const b = "varB";
    return function () {
        console.log(a, b, x);
    }
}
const ans2 = hello("arg");
ans2();


// Example 3
// make the program which make power of other
function myFunction(power) {
    return function (number) {
        return number ** power;
    }    
}
const cube = myFunction(3);
const ans3 = cube(3);
console.log(ans3);

// const myFunction = (power) => (number) => number ** power
// this is also work


// Example 4
function func() {
    let counter = 0;
    return function () {
        if (counter<1) {
            console.log("Hi you call me");
            counter++;
        }
        else {
            console.log("Mai already ek baar call kia ho");
        }
    }   
}
const myFunc = func();
myFunc();
myFunc();
const myFunc1 = func();
myFunc1();
myFunc1();