// What is Conditional Operators in JavaScript?
// Conditional operators are used to perform different actions based on different conditions.
// The most common conditional operators are if, else if, else, and switch statements.
// Example of if, else if, and else statements:

let age = 25;
if (age > 18) {
  console.log("You can cast your vote.");
} else {
  console.log("You are not eligible to vote.");
}

//Conditional Statement : Chwcking even or odd number
let num = 3;
if (num % 2 === 0) {
  console.log(num + " is an even number");
} else {
  console.log(num + " is an odd number");
}
// console.log(num);

// Example of switch statement:
let day = 6;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log("Today is " + dayName);

// In the above examples, the if statement checks if the age is greater than 18 and prints a message accordingly.
// The switch statement checks the value of the day variable and assigns the corresponding day name to the dayName variable.

// Conditional Statement : Checking divisibility by 5

// // let Num = prompt("Enter a Number:");

// if (Num % 5 === 0) {
//   console.log(Num + " is divisible by 5");
// } else {
//   console.log(Num + " is not divisible by 5");
// }
// // console.log(Num);

// Write a Ptrogram which can give grades to students to their scotres
let Grade = prompt("Enter marks of the Students?:");

if (Grade >= 90) {
  console.log("Grade A");
} else if (Grade >= 80) {
  console.log("Grade B");
} else if (Grade >= 70) {
  console.log("Grade C");
} else if (Grade >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}
console.log(Grade);
