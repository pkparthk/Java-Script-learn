// Param destructuring

// Object
// react

const person = {
    firstName: "Parth",
    age: "18",
}
function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.age);
    console.log(obj.gender);
}
printDetails(person);


function printDetails({firstName,age}) {
  console.log(firstName);
  console.log(age);
}
printDetails(person);


// Callback Function

function myFunc(a) {
    console.log(a);
    console.log('Hello');
}
myFunc([1, 2, 3]);

function myFunc2(name="Parth") {
    console.log("Inside my func 2");
    console.log(`Your name is ${name}`);
}

function myFunction(Callback) {
    console.log("Hello there I am a function and I can...");
    Callback();
    //callback("Parth");  //one more method to print name
}

myFunction(myFunc2);

// Function returning function

function myFunc() {
    return { name: "Parth", age:"18" };
}
const ans = myFunc();
console.log(ans);