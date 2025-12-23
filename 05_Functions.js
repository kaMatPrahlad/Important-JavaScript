// 2) Functions in JS

// Question no 1
// What is a function in JavaScript?
// Ans : A function is a block of code that performs a specific task. A function is executed when it is invoked.
//   You can pass data, known as parameters, into a function. A function can return data as a result.

// Question no 2 :: Create a multiplication Function with Arrow Function

// Ans :
const multiPlication = (a, b) => {
  return a * b;
};

// console.log(multiPlication(5, 5)); // 25

// Question no 3 :: Create a Function with With parameters
function sum(num1, num2) {
  return num1 + num2;
}
// console.log(sum(5, 5)); // 10

// Question no 4 :: Create a Function using the "Function" keyword that takes a string as an argument & returns the number of vowels using the string

// function countVowels(str) {
//     let count = 0;
//     for (const vowels of str) {
//         if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
//             count++;
//         }

//     }
//     console.log(count);

// // }

// // Question no 5 :: Create a Function using the "Function" keyword that takes a string as an argument & returns the number of vowels using the string with Arrow function method
// const countVowels = (str) => {
//     let count = 0;
//     for (const vowels of str) {
//         if (vowels === 'a' || vowels === 'e' || vowels === 'i' || vowels === 'o' || vowels === 'u') {
//             count++;
//         }
//     }
//     console.log(count);

// }

// Question no 6 forEach Method/ Array Methods
// let arr = ["apple", "banana", "mango", "orange"];

// arr.forEach((value) => {
//     console.log(value.toUpperCase());
// });

// Question no 7 :: Create an array of numbers from 1 to 10. Use the forEach method to print the square of each number.
// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr1.forEach((value) => {
//     console.log(value * value);
// })

//Question no 8 : : filter Method in Array

// Using filter ::method to filter even numbers from an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// newArray = arr.filter((val) => {
//     return val % 2 == 0;
// })
// console.log(newArray);

// Question no 9 :: Create an array of numbers & use the forEach method to print the square of each number.

let nums = [2, 4, 7, 8, 3, 5];

nums.forEach((value) => {
  console.log(value * value);
});
