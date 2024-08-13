// Task 2
// let num1 = parseFloat(prompt("Enter first num: "));
// let num2 = parseFloat(prompt("Enter second num: "));

// if (!isNaN(num1) && !isNaN(num2)) {
//   let res = parseFloat((num1 + num2) / 2);
//   console.log(`Avg of ${num1} and ${num2} is ${res}`);
// } else {
//   console.log("Error!");
// }

// Task 4
// const mile = 0.621371;
// let km = parseFloat(prompt("Enter length in km: "));

// if (!isNaN(km) && km > 0) {
//   console.log(`${km} km is ${km * mile} miles`);
// } else {
//   console.log("Error!");
// }

// Task 5
// let num1 = parseFloat(prompt("Enter first num: "));
// let num2 = parseFloat(prompt("Enter second num: "));

// console.log(
//   `${num1} + ${num2} = ${num1 + num2}\n${num1} - ${num2} = ${
//     num1 - num2
//   }\n${num1} * ${num2} = ${num1 * num2}\n${num1} / ${num2} = ${num1 / num2}`
// );

// Task 7
// let hours = parseInt(prompt("Enter the current hour (0-23): "));
// let minutes = parseInt(prompt("Enter the current minutes: "));

// if (!isNaN(hours) && !isNaN(minutes)) {
//   if (minutes >= 60 && minutes > -1) {
//     hours++;
//     minutes = minutes - 60;
//   }
//   if (hours > -1 && hours < 24) {
//     let minutesLeft = 1440 - (hours * 60 + minutes);
//     let hoursLeft = (minutesLeft - (minutesLeft % 60)) / 60;

//     console.log(
//       `Time left until the next day: ${hoursLeft} hour(s) and ${
//         minutesLeft % 60
//       } minute(s)`
//     );
//   }
// }

// Task 10
// let salary = 250;
// let sales = parseInt(prompt("Enter the number of sales: "));

// if (!isNaN(sales) && sales > 0) {
//   let res = salary + sales * 0.1;
//   console.log(`Salary: ${res} dollars`);
// }

// Task 11
// let month = parseInt(prompt("Enter the number of the month (1-12): "));
// switch (month) {
//   case 1:
//     console.log(`Month under the number of ${month} is January`);
//     break;
//   case 2:
//     console.log(`Month under the number of ${month} is February`);
//     break;
//   case 3:
//     console.log(`Month under the number of ${month} is March`);
//     break;
//   case 4:
//     console.log(`Month under the number of ${month} is April`);
//     break;
//   case 5:
//     console.log(`Month under the number of ${month} is May`);
//     break;
//   case 6:
//     console.log(`Month under the number of ${month} is June`);
//     break;
//   case 7:
//     console.log(`Month under the number of ${month} is July`);
//     break;
//   case 8:
//     console.log(`Month under the number of ${month} is August`);
//     break;
//   case 9:
//     console.log(`Month under the number of ${month} is September`);
//     break;
//   case 10:
//     console.log(`Month under the number of ${month} is October`);
//     break;
//   case 11:
//     console.log(`Month under the number of ${month} is November`);
//     break;
//   case 12:
//     console.log(`Month under the number of ${month} is December`);
//     break;

//   default:
//     console.log("Error!");
//     break;
// }

// Task 12
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operation = prompt("Enter the mathemetical operation (+ - * /): ");

switch (operation) {
  case "+":
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;
  case "-":
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;
  case "*":
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;
  case "/":
    if (num2 != 0) {
      console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
      console.log("You can't divide by zero!");
    }
    break;

  default:
    console.log("Error!");
    break;
}
