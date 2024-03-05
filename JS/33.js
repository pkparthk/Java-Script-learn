function hello() {
    console.log("Hello world");
}

// IN javascript function ===> function + object

// console.log(hello.name);
// you can add your own property

hello.myOwnProperty = "very unique value"
console.log(hello.myOwnProperty);

// name property---> tells function name
// function provides more usefull properties

// {}
console.log(hello.prototype);

// only function provide prototype property

if (hello.prototype) {
    console.log("prototype is present");
}
else {
    console.log("prototype is not present");
}
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sign = function () {
    return "lalalala";
}
console.log(hello.prototype);
console.log(hello.prototype.sign());
