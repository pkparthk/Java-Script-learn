// Lexical scope
const myVar = "value1";

function myApp() {
    function myFunc() {
        //const myvar="value59";
        const myFunc2 = () => {
            console.log("inside myFunc");
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc
}
myApp();

// Block scope vs function scope
// let and const are block
// var is afunction scope

{
    let firstName = "parth";
    console.log(firstName);
}

{
    let firstName = "krish";
    console.log(firstName);
}

{
    var firstName = "parth";
}
console.log(firstName);


// Default Parameters
function addTwo(a, b) {
    if (typeof b==="undefined") {
        b = 1;
    }
    return a + b;
}

const ans = addTwo(4);
console.log(ans);

const ans1 = addTwo(4, 5)
console.log(ans1);


// Rest parameter

function myFunc3(a,b,c) {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myFunc3(3, 4, 5, 6, 7, 8, 9);

function myFunc4(a,b,...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
myFunc4(3, 4, 5, 6, 7, 8, 9); 