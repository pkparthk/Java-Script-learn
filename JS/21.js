// Arrow Function

//const singHappyBirthday = function () {
//  console.log("Happy birthday to you....");
//};

const singHappyBirthday =  ()=> {     //Arrow function
  console.log("Happy birthday to you....");
};
singHappyBirthday();


const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};
const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);


const isEven = number => {
  return number % 2 === 0;
};
console.log(isEven(4));


const firstChar = function (anyString) {
  return anyString[0];
};

const firstTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; 
    }
  }
  return -1;
};
