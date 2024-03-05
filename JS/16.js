// Primitive VS Reference data types
/*let num1 = 6, num2 = num1;
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);
num1++;
console.log('After increment is');
console.log("value of num1 is", num1);
console.log("value of num2 is", num2);*/

// Reference type

/*let array1 = ['item1', 'item2'];
let array2 = array1;
console.log("array1", array1);
console.log("array2", array2);
array1.push('item3');
console.log("after pushing");
console.log('array1', array1);
console.log('array2', array2);*/

// Clone array
let array1 = ["item1", "item2"];
//let array2 = ["item1", "item2"];
array1.push("item3");

//let array2 = array1.slice(0)
//let array2 = [].concat(array1);
// new way
// spread operator
//let array2 = [...array1];

/*console.log(array1 === array2);
console.log(array1);
console.log(array2);*/

// add extra item

//let array2 = array1.slice(0).concat(['item3', 'item4']);
//console.log(array1);
//console.log(array2);

 
// ARRAY Destructing

const myArray = ["value1", "value2"];
//let myvar1 = myArray[0];
//let myvar2 = myArray[1];
//console.log("value of myvar1", myvar1);
//console.log("value of myvar2", myvar2);
let [myvar1, myvar2] = myArray;
//myvar1 = 'value changed';
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
