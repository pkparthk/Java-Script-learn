//Statement
// If else condition

/* let age = 19;
if (age > 18) {
    console.log('user can play ddlc');
}
else {
    console.log('user can play mario')
}

let num = 15;
if (num%2===0) {
    console.log('even');
}
else {
    console.log('odd');
} */

// Falsy values

// false
// ""
// null
// undefined
// 0

/*let firstName ='Parth';
if (firstName) {
    console.log(firstName);
}
else {
    console.log('first kinda empty');
}*/

// Ternary operator

/*let age = 5;
let drink;
if (age>=5) {
    drink = 'coffee';
} else {
    drink = 'milk';
}
console.log(drink);*/

// Ternary operator / conditional operator

/*let age = 3;
let drink = age >= 5 ? "coffee" : "milk";
console.log(drink);*/

// Nested if else

// winning number 19
//19 your guess is right
//17 too low
// 20 too high

/*let winningNumber = 19;
let userGuess = +prompt("Gues your number");

if (userGuess===winningNumber) {
    console.log("your guess is right");
}
else {
    if (userGuess<winningNumber) {
        console.log("too low");
    } else {
        console.log('too high');
    }
    console.log('your guess is wrong');
}*/

// Ifelse if

let tempInDegree = prompt("Enter the temp. in degree");

if (tempInDegree<0) {
    console.log('extremly cold outside');
}else if (tempInDegree<16) {
    console.log('It is cold outside');
} else if (tempInDegree < 25) {
    console.log('it is okay');
}else if (tempInDegree<35) {
    console.log("Let's go for swim");
}else if (tempInDegree<45) {
    console.log('Turn on AC');
} else {
    console.log("It's Too Hot");
}
