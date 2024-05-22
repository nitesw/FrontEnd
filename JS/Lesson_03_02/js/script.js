// Task 1
// let Car = {
//   Producer: "Toyota",
//   Model: "Skyline R34 GT-R",
//   Year: 1992,
//   Speed: 251,
//   ShowCar: function () {
//     console.log(
//       `Producer: ${this.Producer}\nModel: ${this.Model}\nProduction year: ${this.Year}\nAvg top speed: ${this.Speed} km/h`
//     );
//   },
//   OvercomeDistance: function (distance) {
//     let time = Math.floor(distance / this.Speed);
//     let timeWithBreaks = time + Math.floor(time / 4);

//     console.log(
//       `The distance with breaks will consume this much time: ${timeWithBreaks} hr(s)`
//     );
//   },
// };

// Car.ShowCar();
// Car.OvercomeDistance(1008);

// Task 3
let PrintTime = function (time) {
  console.log(time.ShowTime());
};

function AddSecTime(time, secondsToAdd) {
  time.Sec += secondsToAdd;

  time.Min += Math.floor(time.Sec / 60);
  time.Sec %= 60;
  time.Hours += Math.floor(time.Min / 60);
  time.Min %= 60;
  time.Hours %= 24;
  PrintTime(time);
}
function AddMinTime(time, minutesToAdd) {
  time.Min += minutesToAdd;

  time.Min += Math.floor(time.Sec / 60);
  time.Sec %= 60;
  time.Hours += Math.floor(time.Min / 60);
  time.Min %= 60;
  time.Hours %= 24;
  PrintTime(time);
}
function AddHoursTime(time, hoursToAdd) {
  time.Hours += hoursToAdd;

  time.Min += Math.floor(time.Sec / 60);
  time.Sec %= 60;
  time.Hours += Math.floor(time.Min / 60);
  time.Min %= 60;
  time.Hours %= 24;
  PrintTime(time);
}

let Time = {
  Hours: 20,
  Min: 26,
  Sec: 38,
  ShowTime: function () {
    return `${this.Hours}:${this.Min}:${this.Sec}`;
  },
};
PrintTime(Time);

AddSecTime(Time, 3662554541);
AddMinTime(Time, 187870);
AddHoursTime(Time, 365);
