// Objectsreference type
// Array are good but not sufficient
// For real world data
// objects store key value pairs
// objects don't have index

// How to create object

//const person = { name: "Parth", age: 18 };
/*const person = {
    name: "Parth",
    age: 18,
    hobbies: ["playing", "Listening Music", "Traveling"]
}
// we have to use curly {} braces for object
console.log(person);

// how to access data from objects
//console.log(person.name);
//console.log(person.age);
console.log("Hobbies",person.hobbies);

// how to add key value pair to objects
person.gender = "male";
console.log(person);*/


// Difference between dot and bracket notation
const key = 'email';
const person = {
  name: "Parth",
  age: 18,
  "person hobbies": ["playing", "Listening Music", "Traveling"],
}
console.log(person["person hobbies"]);

person[key] = 'pkparthkothari@gmail.com';
console.log(person);

console.log(typeof (Object.keys(person)));
const val = Array.isArray(Object.keys(person));
console.log(val);

for (let key of Object.keys(person)) {
    console.log(person[key]);
}