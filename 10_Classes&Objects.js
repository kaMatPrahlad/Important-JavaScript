// What is an object in JavaScript?
let person = {
  name: "Jhon",
  age: 22,
};

// Whst is clases in JavaScript?

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person("Jhon", 22);
let person2 = new Person("Doe", 25);
console.log(person1.name); // Output: Jhon
console.log(person2.age); // Output: 25
//For creating objects inb javaScript we use curly braces {} //Objects can
// have properties and methods
