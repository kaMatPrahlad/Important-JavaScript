// 4) Arrays and Array Methods in JS

// Question no 1:: What is an Array in JavaScript?
// Answer:Array is a collection of items, An array is a special variable, which can hold more than one value at a time.
// If you have a list of items (a list of car names, for example), storing the cars in single variables
// could look like this:
// var car1 = "Volvo";
// var car2 = "BMW";
// var car3 = "Tesla";
// var car4 = "Ford";

//Question no 2 :: Example Array
let marks = [45, 55, 86, 78, 98];
// console.log(marks);
// console.log(marks.length);

// Question no 3 :: String Array
// Accessing the elements of and Array

let heros = ["Superman", "Batman", "Spiderman", "Ironman"];
// heros[0] = 'Thor';
// heros[4] = 'Hulk';
// console.log(typeof heros);

// Accessing Array using for  Loop
// for (let i = 0; i < heros.length; i++) {
//     console.log(heros[i]);
// }

// Accessing Array using for of Loop

// for (let hero of heros) {
//     console.log(hero);
// }

// Question no 4 :: Find the average marks of the antire class using for of loop

let student = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let marks of student) {
//     sum += marks;
// }

// console.log(sum / student.length);
// Ans :: The output of the above code will be 65.5.
// This is the average marks of the class.

// ✅Array Methods in JavaScript ::
// 1) push() Method
// 2) pop() Method
// 3) toString() Method
// 3) shift() Method
// 4) unshift() Method
// 5) splice() Method
// 6) concat() Method
// 7) slice() Method
// 8) forEach() Method
// 9) map() Method
// 10) filter() Method
// 11) reduce() Method

// 1) push() Method
// The push() method adds a new element to an array (at the end):
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// console.log(fruits);

// 2) Concat method
// The concat() method is used to join two or more arrays.

// let myGirls = ["Cecilie", "Lone"];
// let myBoys = ["Emil", "Tobias", "Linus"];
// console.log(myGirls.concat(myBoys));

// Shift() Method
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

// let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits1.shift());
// console.log(fruits1);

// 4:: Splice Method
// The splice() method can be used to add new items to an array:
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(1, 0, "Lemon", "Kiwi");
// console.log(fruits2);

// First argument: the starting position
// Second argument: 0 indicates no items to remove
// Third and subsequent arguments: the new items to be added

// Practice Questions no 1
// 1 Remove the first Company from the array
// 2 Remove uber and add ola in its place
//3 Add Amazon at the End of the array

let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//⬇️ Remove the first Company from the array
Companies.shift();
//⬇️ Remove / add / replace elements
Companies.splice(2, 1, "Ola");
//⬇️ Add Amazon at the End of the array
Companies.push("Amazon");
// console.log(Companies);

// Map Method
// The map() method creates a new array
// by performing a function
// on each array element.

let names = ["Harshit", "Rohan", "Aman", "Shubham"];
names.map((name) => {
  //   console.log(name);
});

// Filter Method
// The filter() method creates a new array
// with array elements that pass a test
// provided by a function.

let numbers = [5, 7, 8, 3, 1, 9, 4, 2];
const evenNumber = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumber);
// numbers.filter((num) => {
//   console.log(num);
//   return num !== 2;
// });

// Question 1 :: Create an array with 4 fruits and print the second fruits.

let phal = ["Apple", "orange", "Banana", "grapes"];
// console.log(phal[1]);
phal.push("mango");
// phal.unshift("Pineapple");
// phal.splice(1, 0, "Red", "Blue");
// phal.splice(1, 2);
// phal.sort().reverse();
// console.log(phal);

let arr = [5, 12, 8, 20, 30, 40];

let newArray = arr.filter((val) => {
  return val > 10;
});

// console.log(newArray);

// destructure this array to get firstname and lastname
let fullname = ["Prahlad", "Kamat"];
// let [firstname, lastname] = fullname;

let a = [1, 2];
let b = [3, 4];
let country = ["USA", "UK"];
let countris = ["India", ...country];

// let c = [...a, ...b];
// console.log(country, ...countris);

// Clone this array properly (Not by reference):
let array = [1, 2, 3, 4];
let ans = [...array];
console.log(ans);
