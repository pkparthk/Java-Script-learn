// funcion


/*function twoPlusFour() {
    console.log(2 + 4);
}

twoPlusFour();
twoPlusFour();
twoPlusFour();
twoPlusFour();*/

function sumTwoNumbers(number1, number2) {
    return number1 + number2;
}
const returnedValue = sumTwoNumbers(4,5);
console.log(returnedValue);

// isEven
// input: 1 number
output: true, false
function isEven(number) {
    if (number%2==0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(3));