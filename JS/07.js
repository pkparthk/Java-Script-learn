//trim()
// toUpperCase()
// toLowercase()
// slice

let firstName = "  Parth  ";
console.log(firstName.length);
firstName = firstName.trim();
console.log(firstName);
console.log(firstName.length);

console.log(firstName.toUpperCase());

let newString = firstName.slice(0, 4);
console.log(newString);