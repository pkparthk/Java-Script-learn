const obj1 = {
    key1: "value1",
    key2: "value2"
}
//const obj2 = {};

// There is one more way to create empty object
//obj2.key3 = "value3";

//console.log(obj2.key3);

const obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key2 = "uniqe";

console.log(obj2.key2);
console.log(obj2);

// ___proto__, [[prototype]]  both are same and is create a bond
// prototype is diff