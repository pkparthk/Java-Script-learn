// getter and setters
class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static claasInfo() {
        return `this is person class`;
    }
    get fullName() {
        return`${this.firstName} ${this.lastName}`
    }
    setName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person("Parth", "Kothari", 18);
//console.log(person1.fullName());
console.log(person1.fullName);

// method of change name
person1.setName("Krish", "Ko");
console.log(person1.fullName);

// get is use for make function value
// set is use for split the input
console.log(person1.fullName);

// Static methods and propertiesf

console.log(Person.claasInfo());