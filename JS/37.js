// Class keyword
// class are fake

class CreateUser{
    constructor(firstName, lastName, email, age, address) {
        //console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    }
    about() { 
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
    sing() {
        return "la la la la";
    }
}
const user1 = new CreateUser("Parth","Kothari","pkparthkothari@gmail.com","18","Bassi");
const user2 = new CreateUser("Harsh","Kothari","pkparthkothari@gmail.com","10","Bassi");
const user3 = new CreateUser("Krish", "Kothari", "pkparthkothari@gmail.com", "33", "Bassi");



class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}
const animal1 = new Animal("tom", 2);
const animal2 = new Animal("harry", 4);
console.log(animal1);
console.log(animal1.eat());

class Dog extends Animal{
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is running at ${this.speed}kmph`;
    }
}
const tommy = new Dog("tommy", 3, 45);
console.log(tommy);
console.log(tommy.isCute());
console.log(tommy.run());