// Task 1
// 1
// const year = 2024;
// let birthYear = prompt("Enter the year you were born");
// alert(`You are ${year - birthYear} years old`);

// 2
// let flashDrive = parseInt(prompt("Enter the size of your flash drive (in GB)"));
// let files = Math.floor((flashDrive * 1000) / 820);
// alert(`You can fit ${files} file(s)`);

// Task 2
// 1
// let num = parseInt(prompt("Enter the number from 0 to 9"));
// switch (num) {
//   case 0:
//     alert("Symbol under num 0 is )");
//     break;
//   case 1:
//     alert("Symbol under num 1 is !");
//     break;
//   case 2:
//     alert("Symbol under num 2 is @");
//     break;
//   case 3:
//     alert("Symbol under num 3 is #");
//     break;
//   case 4:
//     alert("Symbol under num 4 is $");
//     break;
//   case 5:
//     alert("Symbol under num 5 is %");
//     break;
//   case 6:
//     alert("Symbol under num 6 is ^");
//     break;
//   case 7:
//     alert("Symbol under num 7 is &");
//     break;
//   case 8:
//     alert("Symbol under num 8 is *");
//     break;
//   case 9:
//     alert("Symbol under num 9 is (");
//     break;

//   default:
//     break;
// }

// 2
// let year = +prompt("Enter the year");
// alert(
//   `The ${year} year is ${
//     year % 4 === 0 && year % 100 !== 0 ? "a leap year" : "not a leap year"
//   }`
// );

// 3
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

// Task 3
// 1
// let num1 = +prompt("Enter the first number");
// let num2 = +prompt("Enter the second number");
// let sum = 0;

// if (num1 > num2) {
//   let tmp = num1;
//   num1 = num2;
//   num2 = tmp;
// }

// for (let index = num1; index <= num2; index++) {
//   sum += index;
// }
// alert(`Sum of numbers from ${num1} to ${num2} is ${sum}`);

// 2
// let num = +prompt("Enter the number");
// let countNums = 0;

// while (num != 0) {
//   num = Math.floor(num / 10);
//   countNums++;
// }

// alert(`There are ${countNums} numbers in the number`);

// 3
// let positiveNums = 0;
// let negativeNums = 0;
// let nulls = 0;

// for (let index = 0; index < 10; index++) {
//   let num = +prompt(`Enter #${index + 1} number`);

//   if (num === 0) {
//     nulls++;
//   } else if (num > 0) {
//     positiveNums++;
//   } else if (num < 0) {
//     negativeNums++;
//   }
// }

// alert(
//   `Positive nums: ${positiveNums}\nNegative nums: ${negativeNums}\nNulls: ${nulls}`
// );

// 4
// let dayOfTheWeek = 1;
// let nextDay;
// do {
//   nextDay = confirm("Do you want to see the next day of the week?");
//   if (dayOfTheWeek > 7) {
//     dayOfTheWeek = 1;
//   }
//   alert(`Day of the week = ${dayOfTheWeek}`);
//   dayOfTheWeek++;
// } while (nextDay);
