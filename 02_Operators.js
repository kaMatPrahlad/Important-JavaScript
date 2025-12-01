// There are primarly 7 types of operators in JavaScript:

// 1. Arithmetic Operators (+ , - , * , / , % , ++ , --)
// 2. Assignment Operators (= , += , -= , *= , /= , %=)
// 3. Comparison Operators (== , === , != , !== , > , < , >= , <=)
// 4. Logical Operators (&& , || , !)
// 5. Bitwise Operators (& , | , ^ , ~ , << , >> , >>>)
// 6. String Operators (+ , +=)
// 7. Conditional (Ternary) Operator (condition ? expr1 : expr2)
// These operators are fundamental in JavaScript and are used in various programming scenarios.

// Example of Arithmetic Operators
let a = 10;
let b = 5;
console.log("Addition: " + (a + b)); // 15
console.log("Subtraction: " + (a - b)); // 5
console.log("Multiplication: " + a * b); // 50
console.log("Division: " + a / b); // 2
console.log("Modulus: " + (a % b)); // 0
console.log("Increment: " + ++a); // 11
console.log("Decrement: " + --b); // 4

// Example of Assignment Operators
let c = 10;
c += 5; // c = c + 5
console.log("c after += 5: " + c); // 15
c -= 3; // c = c - 3
console.log("c after -= 3: " + c); // 12

// Example of Comparison Operators
// let a = 10;
// let b = 5;
console.log("Is a equal to b? " + (a == b)); // false
console.log("Is a strictly equal to b? " + (a === b)); // false
console.log("Is a not equal to b? " + (a != b)); // true
console.log("Is a greater than b? " + (a > b)); // true

// // Example of Logical Operators
// let a = 10;
// let b = 5;
console.log("Logical AND: " + (a > 5 && b < 10)); // true
console.log("Logical OR: " + (a < 5 || b < 10)); // true
console.log("Logical NOT: " + !(a > 5)); // false

// Example of Bitwise Operators
// let a = 10;
// let b = 5;
console.log("Bitwise AND: " + (a & b)); // 0
console.log("Bitwise OR: " + (a | b)); // 15
console.log("Bitwise XOR: " + (a ^ b)); // 15
console.log("Bitwise NOT: " + ~a); // -11
console.log("Left Shift: " + (a << 1)); // 20
console.log("Right Shift: " + (a >> 1)); // 5

// Example of String Operators
let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2;
console.log("Concatenated String: " + str3); // Hello, World!

// Example of Conditional (Ternary) Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote: " + canVote); // Yes
