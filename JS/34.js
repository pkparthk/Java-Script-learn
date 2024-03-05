// New Keyword
function createUser(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about=function () {
    console.log(this.firstName, this.age);
}
const user1 = new createUser("Parth", 18);
// new keyword
// 1 empty object this = {}
// 2 return this

console.log(user1.about());
user1.about();