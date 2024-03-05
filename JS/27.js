// Iterables
// jispe hum for of loop laga sakenge
// String , array aree iterable

const firstName = "Parth";
for (let char of firstName) {
    console.log(char);
}

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
    console.log(item);
}

const users ={}

// Array like objects
// jinke pas length property hoti hai
// aur jinko hum index se acces kar sakte h   exaple :- string

const firstName1 = "Parth";
console.log(firstName1.length);
console.log(firstName1[2]); 


// Sets (it is a iterable)
//store data
//sets also have its own methods
// no index based access
// order is not guarateed
// uniqe items only

const numbers = new Set([1, 2, 3])
numbers.add(4)
numbers.add(4) // it doesn't add again
numbers.add(['item1', 'item2'])
numbers.add(["item1", "item2"]) // it add because in array the address is change
console.log(numbers)


const myArray = [1, 2, 3, 4,4, 5, 6];
const uniqueElements = new Set(myArray);
console.log(myArray);
console.log(uniqueElements);
let length = 0;
for (let elements of uniqueElements) {
    length++;
}
console.log(length);


// Maps
// Its an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// diffrence b/w maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array , number , string

// object literal
// key = string
// key = symbol olny 1 percent
const person = {
    firstName: "Parth",
    age: 18,
    1: "one"
}
console.log(person.firstName)
console.log(person["firstName"]);
console.log(person[1])
for (let key in person) {
    console.log(typeof key);
}


// map use key value pair

const person1 = new Map();
person1.set('firstName', 'Parth');
person1.set('age', 18);
person1.set(1, 'one');
console.log(person1);
console.log(person1.get(1));
for (let key of person1.keys()) {
    console.log(key, typeof key);
}


// Clone
// using object.assign

const obj = {
    key1: "value1",
    key2: "value2",
}
const obj1 = obj;
const obj2 = Object.assign({}, obj);
obj.key3 = "value3";
console.log(obj);
console.log(obj1);
console.log(obj2);


// Optinal chaining

const user = {
    firstName3: "Parth",
    //address: { houseNumber: '1234' },
}
console.log(user.firstName3);
console.log(user?.address?.houseNumber);