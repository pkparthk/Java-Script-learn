// Methods
// function inside object

/*const person = {
    firstName: "Parth",
    age: 18,
    about: function () {
        console.log(`person name is ${this.firstName} and age is ${this.age}`);
    }
}
person.about();*/

function personInfo() {
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Parth",
    age: 18,
    about: personInfo
}
const person2 = {
    firstName: "Mohit",
    age: 19,
    about: personInfo,
}
const person3 = {
    firstName: "Aman",
    age: 20,
    about: personInfo,
}
personInfo();
person1.about();
person2.about();
person3.about();


// ---------------------------------------------------------

function hello() {
    console.log("hello world");
}
hello.call();


// Arrow functions
const user1 = {
    firstName: "Parth",
    age: 18,
    about: () => {
        console.log(this.firstName, this.age);
    }
}
user1.about(user1);