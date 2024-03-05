const userMethods = {
  about: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return 'toon na na a';
  }
};

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
const user1 = createUser(
  "Parth",
  "Kothari",
  "pkparthkothari@gmail.com",
  "18",
  "Bassi"
);
const user2 = createUser(
  "Harsh",
  "Kothari",
  "pkparthkothari@gmail.com",
  "10",
  "Bassi"
);
const user3 = createUser(
  "Krish",
  "Kothari",
  "pkparthkothari@gmail.com",
  "33",
  "Bassi"
);
console.log(user1);
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());