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

// let nums = [2, 4, 7, 8, 3, 5];

// nums.forEach((value) => {
//   console.log(value * value);
// });

// // Question no 10 ::
// let nums = [2, 4, 7, 8, 3, 5];

// let newArray = nums.map((value) => {
//   console.log(value % 2 == 0);
// });

// console.log(newArray);

// Question no 11 ::
let nums = [12, 2, 4, 7, 8, 3, 5];

let number = nums.filter((value) => {
  return value % 2 === 0;
});

console.log(number);

// Question no 12
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers);

// Question no 13

// What is reduce() in JavaScript?

// 👉 reduce() is an array method that reduces an array to a single value.

// That single value can be:

// a number (sum, total)

// a string

// an object

// another array

// In this example, we use reduce() to calculate the sum of all numbers in the nums array. The accumulator starts at 0, and for each element in the array,
//  we add the current value to the accumulator. The final result is the total sum of the array elements.

// | Term                  | Meaning                       |
// | --------------------- | ----------------------------- |
// | accumulator (`acc`)   | Stores the result             |
// | currentValue (`curr`) | Current array item            |
// | initialValue          | Starting value of accumulator |

// const nums1 = [1, 2, 3, 4, 5];

// const sums = nums1.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sums);

// Step-by-step:
// acc = 0, curr = 1 → acc = 1
// acc = 1, curr = 2 → acc = 3
// acc = 3, curr = 3 → acc = 6
// acc = 6, curr = 4 → acc = 10
// acc = 10, curr = 5 → acc = 15

const cart = [100, 200, 300];

const total = cart.reduce((total, price) => total + price, 0);

// console.log(total);

// Step-by-step:
// acc = 0, curr = 100 → acc = 100
// acc = 100, curr = 200 → acc = 300
// acc = 300, curr = 300 → acc = 600

// Question no 14::
// Filter out the students who scored above or equal to 90 from the array of student scores.
// const students = [20, 35, 90, 95, 100, 200, 300];

// const topStudents = students.filter((score) => score >= 90);
// console.log(topStudents);

//Question 15:: Create a function into another function and execute it inside.
// function abcd(val) {
//   val();
// }
// abcd(function () {
//   console.log("hey! Im inside the function");
// });

//Question 16::Create a reusable discount calculater (High order function)

function discountCalculater(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalculater(10);
console.log(ten(100));

//Question 17:: Create a pure function to transform a value

// function double(val) {
//   return val * 2;
// }
// console.log(double(5));

//Question 18:: Use IIFE(Immediately Invoked Function Expression) to isolate variables

(function () {
  const password = "secret password";
  console.log(password);
})();

console.log(password);
