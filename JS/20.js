// Function Expression

//function singHappyBirthday() {
//    console.log("Happy birthday to you....");
//}

const singHappyBirthday=function(){
    console.log("Happy birthday to you....");
}
singHappyBirthday();

//function sumThreeNumbers(number1,number2,number3) {
//    return number1 + number2 + number3;
//}

const sumThreeNumbers = function (number1, number2, number3) {
    return number1 + number2 + number3;
}
const ans = sumThreeNumbers(2,3,4)
console.log(ans);

//function isEven(number) {
//    return number % 2 === 0;
//}
const isEven = function (number) {
    return number % 2 === 0;
}


// Function declaration
//function firstChar(anyString) {
//    return anyString[o];
//}

//change to function expression
const firstChar = function (anyString) {
    return anyString[0];
}


const firstTarget=function(array,target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]===target) {
            return i;
        }
    }
    return -1;
}