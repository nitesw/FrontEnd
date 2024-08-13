let FillArr = (arr) => {
  for (let index = 0; index < 5; index++) {
    arr[index] = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }
};
let DisplayArr = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    console.log(`[${index + 1}] - ${arr[index]}`);
  }
};
let FindNumber = (arr) => {
  if (arr.find((num) => num % 7 === 0)) {
    console.log(
      `The number that can be divided by 7 without a remainder is ${arr.find(
        (num) => num % 7 === 0
      )}`
    );
  } else {
    console.log(
      `There is no number that can be divided by 7 without a remainder`
    );
  }
};
let SortByAsc = (arr) => {
  arr.sort((a, b) => a - b);
  arr.reverse();
};
let FillArrWithZeros = (arr) => {
  arr.fill(0, arr.length / 2, arr.length);
};
let RemoveFirst = (arr) => {
  arr.shift();
};
let CheckForRepetition = (arr) => {
  return arr.some((num, i) => arr.indexOf(num) !== i);
};
let CreateNewArr = (arr) => {
  let newArr = [];
  newArr = Array.from(arr.slice(1, arr.length - 1));

  return newArr;
};
let CountEvenNums = (arr) => {
  console.log(
    `Count of even nums: ${arr.filter((num) => num % 2 === 0).length}`
  );
};

let arr = [];
FillArr(arr);
DisplayArr(arr);
console.log("-----------------------------------------");

console.log(
  `Your arr ${
    CheckForRepetition(arr) === true ? "contains" : "does not contain"
  } repeated nums`
);
console.log("-----------------------------------------");

FindNumber(arr);
console.log("-----------------------------------------");

SortByAsc(arr);
DisplayArr(arr);
console.log("-----------------------------------------");

FillArrWithZeros(arr);
DisplayArr(arr);
console.log("-----------------------------------------");

RemoveFirst(arr);
RemoveFirst(arr);
RemoveFirst(arr);
console.log("Arr after removing 3 first nums");
DisplayArr(arr);
console.log("-----------------------------------------");

let newArr = CreateNewArr(arr);
console.log("New arr without extreme nums from main arr");
DisplayArr(newArr);
console.log("-----------------------------------------");

CountEvenNums(arr);
console.log("-----------------------------------------");
