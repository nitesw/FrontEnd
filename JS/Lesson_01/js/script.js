// let name = "Andrii";
// console.log(name, typeof name);

// name = 10;
// console.log(name, typeof name);

// let name = prompt("Enter your name: ");
// console.log(`Hello ${name}!`);

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

console.log(`num1: ${num1} ${typeof num1}`);

if (num1 > num2) {
  console.log(`${num1} > ${num2}`);
  alert(`${num1} > ${num2}`);
}
