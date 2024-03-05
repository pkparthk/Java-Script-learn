// Proto, prototype, class
/*const user = {
    firstName: "Parth",
    lastName: "Kothari",
    email: "pkparthkothari@gmail.com",
    age: 18,
    address: "Bassi",
    about:function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    }
}  */

// for that we make function
// that function create object
// then add key value pair
// then object ko return karega

function createUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function () {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    };
    user.is18 = function () {
      return this.age >= 18;
    };
    return user;
}
const user1 = createUser("Parth", "Kothari", "pkparthkothari@gmail.com", '18', 'Bassi');
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);
