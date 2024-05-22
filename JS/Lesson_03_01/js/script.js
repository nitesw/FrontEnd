// Task 1
let SetRndNums = (length, arr) => {
  for (let i = 0; i < length; i++) {
    let num = Math.floor(Math.random() * 20 + 10);
    arr[i] = num;
  }
};
let DisplayArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Item #${i + 1}: ${arr[i]}`);
  }
};
let DisplayEvenNums = (arr) => {
  console.log("Even numbers in the arr:");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      console.log(`Number #${i + 1}: ${arr[i]}`);
    }
  }
};
let SumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
let MaxNum = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let AddNum = (arr, index, value) => {
  if (index < arr.length && index > -1) {
    arr.splice(index, 0, value);
  }
};
let DeleteNum = (arr, index) => {
  if (index < arr.length && index > -1) {
    arr.splice(index, 1);
  }
};

// Task 2
let ConnectTwoArr = (arr1, arr2) => {
  let newArr = arr1.concat(arr2);

  let tmpArr = [];
  for (let i = 0; i < newArr.length; i++) {
    if (!tmpArr.includes(newArr[i])) {
      tmpArr.push(newArr[i]);
    }
  }

  return tmpArr;
};
let ConnectGeneralNumsArr = (arr1, arr2) => {
  let tmpArr = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      tmpArr.push(arr2[i]);
    }
  }

  return tmpArr;
};
let ConnectUniqueArrNums = (arr1, arr2) => {
  let tmpArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      if (!tmpArr.includes(arr1[i])) {
        tmpArr.push(arr1[i]);
      }
    }
  }

  return tmpArr;
};

let arr = [];
let arr2 = [];

// Task 1
SetRndNums(10, arr);
DisplayArr(arr);
DisplayEvenNums(arr);
let res = SumArr(arr);
console.log(`Sum of the arr = ${res}`);
res = MaxNum(arr);
console.log(`Max num of the arr = ${res}`);
console.log(`---------------------------`);
console.log(`Add -1 to the arr`);
AddNum(arr, 1, -1);
DisplayArr(arr);
console.log(`Delete -1 from the arr`);
DeleteNum(arr, 1);
DisplayArr(arr);

// Task 2
console.log(`---------------------------`);
SetRndNums(5, arr2);
DisplayArr(arr2);
res = ConnectTwoArr(arr, arr2);
console.log(`Connected arrs:`);
DisplayArr(res);
res = ConnectGeneralNumsArr(arr, arr2);
console.log(`Connected general nums from arrs:`);
DisplayArr(res);
res = ConnectUniqueArrNums(arr, arr2);
console.log(`Uniques nums from arr1 which not appears in arr2:`);
DisplayArr(res);
