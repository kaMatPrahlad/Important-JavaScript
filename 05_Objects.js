// Objects in JS

// What is an Object an javascript?
// In JavaScript, an object is a collection of properties, where each property
// is defined as a key-value pair. Objects can contain any type of data, including
// strings, numbers, arrays, and even other objects. They are used to store and manage
//  data in a structured way.

///Example 1 of Object in JS
const mySum = Symbol("Nice");
const userObject = {
  name: "Prahlad",
  age: 21,
  [mySum]: "Hello Bye",
  Education: "Gradute",
  addname: function () {
    console.log("Hello, my name is ", this.name);
  },
};

// console.log(userObject.addname); // Outp ut: Prahlad
console.log(typeof userObject[mySum]);

///Example 2 of Object in JS

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isEmployed: true
// };

// console.log(person.firstName); // Output: John
// console.log(person["lastName"]); // Output: Doe

const person = new Object();
console.log(person);
person.firstName = "John";
console.log(person);

// Object.assign() Method
const obj1 = { a: "1", b: "2" };
const obj2 = { c: "3", d: "4" };

const combinedObj = Object.assign(obj1, obj2);
console.log(combinedObj); // Output: { a: '1', b: '2', c: '3', d: '4' }
