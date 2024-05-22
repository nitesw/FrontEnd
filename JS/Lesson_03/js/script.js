let arr = [1, 5, 6, 7, 12, 3];
// console.log(`arr = ${arr} | ${typeof arr}`);
// console.log(`arr = ${arr[2]}`);
// console.log(`count = ${arr}`);
// console.log(arr);
// console.log(arr.length);

// console.log("Original ", arr);
// arr.pop();
// console.log("Pop ", arr);
// arr.push(10);
// console.log("Push ", arr);
// arr.shift();
// console.log("Shift ", arr);
// arr.unshift(10);
// console.log("Unshift ", arr);

// for (let i = 0; i > arr.length; i++) {
//   console.log(i);
// }
// arr.forEach((i) => {
//   console.log(i);
// });
// let item = arr.map((i) => {
//   return i;
// });
// console.log(item);

// let newArr = [4, 5, "Apple", false, 6.5, [5, 7, "Banana"]];
// console.log(newArr);
// console.log(newArr[5][2]);

// let number = Math.floor(Math.random() * (10 - 20) + 10);
// console.log(number);

let Person = {
  Name: "Bill",
  Surname: "Gates",
  Age: 65,
  ShowPerson: function () {
    console.log(
      `Name: ${this.Name}\nSurname: ${this.Surname}\nAge: ${this.Age}`
    );
  },
};
console.log(Person, typeof Person);
Person.ShowPerson();

// const URL = "https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5";
// const result = fetch(URL)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((e) => console.log(e));
