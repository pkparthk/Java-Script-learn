// Computed properties
/*
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj ={
//      Object1: "myvalue1",
//      Object2:"myvalue2",
//}

// console obj = {
//     [key1]: value1,
//     [key2]: value2,
// }

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);*/


//Spread operator
/*const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray1 = [array1, array2, 89, 69];
console.log(newArray1);
const newArray2 = [...array1, ...array2, 89, 69];
console.log(newArray2);*/

// Spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valueuniqe",
    key3: "value3",
    key4: "value4",
};

const newObject = { ...obj1, ...obj2 };
console.log(newObject);

// Object destructing
const band = {
    bandName: "lad zepplin",
    famousSong: "stairway to heaven",
    year: 1968,
    anotherFamousSong: "kashmir",
};
/*const bandName = band.bandName;
const famousSong = band.famousSong;
console.log(bandName, famousSong);*/

//let { bandName: var1, famousSong: var2 } = band;
//bandName = "queen";
//console.log(bandName);   //not work
//console.log(var1);

let { bandName, famousSong, ...restPros } = band;
console.log(band);
console.log(bandName);

// Object inside array
// very useful in real world application

const users = [
    { userId: 1, firstName: 'Parth', gender: 'male' },
    { userId: 2, firstName: 'mohit', gender: 'male' },
    { userId: 3, firstName: 'msore', gender: 'male' },
]
//console.log(users);
for (let user of users) {
    console.log(user);
}