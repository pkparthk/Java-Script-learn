// Important array methods

// forEach
// map
// filter
// reduce

const numbers = [4, 2, 5, 8];
function multiplyBy2(number,index) {
    console.log("index is", index);
    console.log(`${number} * 2 = ${number * 2}`);
}
//multiplyBy2(numbers[0], 0);

/*for (let i = 0; i < numbers.length; i++) {
    console.log(i);
    multiplyBy2(numbers[i], i);

}*/
numbers.forEach(multiplyBy2);


const users = [
  { firstName: "Parth", age: 18 },
  { firstName: "Mohit", age: 18 },
  { firstName: "Nitish", age: 18 },
  { firstName: "Garima", age: 18 },
]
users.forEach(function (users) {
    console.log(users.firstName);
    console.log(users.age);
});

for (let user of users) {
    console.log(user.firstName);
}

const userNames = users.map((user) => {
    return user.firstName;
});
console.log(userNames);