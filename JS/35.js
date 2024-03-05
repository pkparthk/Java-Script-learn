// New keyword
// 1 this = {}
// 2 return {}

// constructor function

function CreateUser(firstName, lastName, email, age, address) {
   // const user = Object.create(createUser.prototype); // {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    //return user;
}

CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
}
CreateUser.prototype.is18=function () {
    return this.age >= 18;
}
CreateUser.prototype.sing=function () {
    return "la la la la";
}

const user1 = new CreateUser("Parth","Kothari","pkparthkothari@gmail.com","18","Bassi");
const user2 = new CreateUser("Harsh","Kothari","pkparthkothari@gmail.com","10","Bassi");
const user3 = new CreateUser("Krish", "Kothari", "pkparthkothari@gmail.com", "33", "Bassi");

console.log(user1);
console.log(user1.is18());

for (let key in user1) {
    //console.log(key);
    if (user1.hasOwnProperty(key)) {
        console.log(key);
    }
}