// Task 1
// let Min = (num1, num2) => {
//   return num1 < num2 ? num1 : num2;
// };

// let num1 = parseFloat(prompt("Enter the first number: "));
// let num2 = parseFloat(prompt("Enter the second number: "));

// let res = Min(num1, num2);
// console.log(`The ${res} is smaller number`);

// Task 2
// let Pow = (num, pow) => {
//   return num ** pow;
// };

// let num = parseFloat(prompt("Enter the number: "));
// let pow = parseFloat(prompt("Enter the pow: "));

// let res = Pow(num, pow);
// console.log(`The number ${num} in pow ${pow} is ${res}`);

// Task 3
// let Calc = (num1, num2, operation) => {
//   switch (operation) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       if (num2 != 0) {
//         return num1 / num2;
//       } else {
//         return "You can't divide by zero!";
//       }

//     default:
//       console.log("Error!");
//       break;
//   }
// };

// let num1 = parseFloat(prompt("Enter the first number: "));
// let num2 = parseFloat(prompt("Enter the second number: "));
// let operation = prompt("Enter the mathemetical operation (+ - * /): ");

// let res = Calc(num1, num2, operation);
// console.log(`${num1} ${operation} ${num2} = ${res}`);

// Task 4
// let IsPrime = (num) => {
//   for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//     if (num % i == 0) return false;
//   }
//   return num > 1;
// };

// let num = parseFloat(prompt("Enter the number: "));

// let res = IsPrime(num);
// console.log(
//   res == true ? `The number ${num} is prime` : `The number ${num} is not prime`
// );

// Task 5
// let num = parseFloat(prompt("Enter the number (from 2 to 9): "));

// ((num) => {
//   if (num >= 2 && num <= 9) {
//     for (let index = 2; index < 10; index++) {
//       console.log(`${index} * ${num} = ${index * num}`);
//     }
//   } else {
//     console.log("Incorrect number!");
//   }
// })(num);

// Task 7
// let Sum = (...arr) => {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += parseFloat(arr[index]);
//   }
//   return sum;
// };

// let numberOfNums = parseInt(
//   prompt(`How many numbers you want to enter? (from 1 to 5): `)
// );
// let arr = [];
// if (numberOfNums >= 1 && numberOfNums <= 5) {
//   for (let index = 0; index < numberOfNums; index++) {
//     let num = parseFloat(prompt("Enter the num: "));
//     arr[index] = num;
//   }
//   let res = Sum(...arr);
//   console.log(`The sum is ${res}`);
// } else {
//   console.log("Enter correct number!");
// }

// Task 8
// let Min = (...arr) => {
//   let min = arr[0];
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < min) {
//       min = arr[index];
//     }
//   }
//   return min;
// };

// let numberOfNums = parseInt(
//   prompt(`How many numbers you want to enter? (from 1 to 5): `)
// );
// let arr = [];
// if (numberOfNums >= 1 && numberOfNums <= 5) {
//   for (let index = 0; index < numberOfNums; index++) {
//     let num = parseFloat(prompt("Enter the num: "));
//     arr[index] = num;
//   }
//   let res = Min(...arr);
//   console.log(`The smallest num is ${res}`);
// } else {
//   console.log("Enter correct number!");
// }

// Task 9
// let ShowNumbers = (num1, num2, numbersToShow) => {
//   if (num1 > num2) {
//     let tmp = num1;
//     num1 = num2;
//     num2 = tmp;
//   }
//   for (let index = num1; index <= num2; index++) {
//     if (numbersToShow == true) {
//       if (index % 2 == 0) {
//         console.log(index);
//       }
//     } else {
//       if (index % 2 != 0) {
//         console.log(index);
//       }
//     }
//   }
// };

// let num1 = parseInt(prompt("Enter the first num to make a range:"));
// let num2 = parseInt(prompt("Enter the second num to make a range:"));
// let numbersToShow = parseInt(
//   prompt("Which numbers would you like to display? (1 - even, 2 - odd):")
// );
// if (numbersToShow == 1 || numbersToShow == 2) {
//   ShowNumbers(num1, num2, numbersToShow);
// } else {
//   console.log("Error!");
// }

// Task 10
// let IsLeapYear = function (year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let ShowNextDay = (day, month, year) => {
//   let newDay = day + 1;
//   let newMonth = month;
//   let newYear = year;

//   switch (newMonth) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//       daysInMonth = 31;
//       break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//       daysInMonth = 30;
//       break;
//     case 2:
//       daysInMonth = IsLeapYear(newYear) ? 29 : 28;
//       break;
//   }

//   if (newDay > daysInMonth) {
//     newDay = 1;
//     newMonth++;
//     if (newMonth > 12) {
//       newMonth = 1;
//       newYear++;
//     }
//   }

//   return `${newDay}.${newMonth}.${newYear}`;
// };

// let day = parseInt(prompt("Enter the day:"));
// let month = parseInt(prompt("Enter the month:"));
// let year = parseInt(prompt("Enter the year:"));

// const date = new Date(year, month - 1, day);

// if (
//   date.getFullYear() === year &&
//   date.getMonth() === month - 1 &&
//   date.getDate() === day
// ) {
//   console.log(ShowNextDay(day, month, year));
// } else {
//   console.log("The date is not valid.");
// }

// Task 1
// let Factorial = (num) => {
//   let factorial = 1;
//   for (let index = 1; index <= num; index++) {
//     factorial *= index;
//   }
//   return factorial;
// };

// let num = parseInt(prompt("Enter the number to get the factorial of it:"));

// let res = Factorial(num);
// console.log(`Factorial of number ${num} is ${res}`);

// Task 2
// let ShowNums = (num1, num2) => {
//   if (num1 > num2) {
//     let tmp = num1;
//     num1 = num2;
//     num2 = tmp;
//   }
//   console.log(`Numbers in the right way from ${num1} to ${num2}`);
//   for (let index = num1; index <= num2; index++) {
//     console.log(index);
//   }
// };
// let ShowReverseNums = (num1, num2) => {
//   if (num1 < num2) {
//     let tmp = num1;
//     num1 = num2;
//     num2 = tmp;
//   }
//   console.log(`Numbers in the reverse way from ${num1} to ${num2}`);
//   for (let index = num1; index >= num2; index--) {
//     console.log(index);
//   }
// };

// let num1 = parseInt(prompt("Enter the first num to make a range:"));
// let num2 = parseInt(prompt("Enter the second num to make a range:"));

// ShowNums(num1, num2);
// ShowReverseNums(num1, num2);

// Task 3
let ReverseNumber = (num) => {
  let reversedNum = 0;

  while (num != 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversedNum;
};

console.log(ReverseNumber(113322));
console.log(ReverseNumber(1234));
