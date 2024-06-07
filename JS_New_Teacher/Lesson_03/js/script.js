// Task 1
let car = {
  brand: "Toyota",
  model: "Supra 1998",
  year: 1998,
  topSpeed: 250,
  currentSpeed: 0,
  currentTransmission: 0,
  price: 105000,

  showCarInfo() {
    console.log(
      `${this.brand} ${this.model}. Produced in ${this.year} with the top speed of ${this.topSpeed} km/h. Current price is ${this.price}$`
    );
  },
  setCurrentSpeed(speed) {
    if (speed > 0 && speed < 251) {
      this.currentSpeed = speed;
      console.log(
        `Current speed of the car is set to ${this.currentSpeed} km/h`
      );
    } else {
      console.log("Speed is entered incorrectly");
    }
  },
  increaseCurrentTransmission() {
    if (this.currentTransmission < 5) {
      this.currentTransmission++;
      switch (this.currentTransmission) {
        case 2:
        case 3:
        case 4:
        case 5:
          console.log(
            `You've increased the transmission by 1. Now it's on ${this.currentTransmission} transmission gear`
          );
          break;
        case 1:
          console.log(
            `You've increased the transmission by 1. Now it's on 'N' transmission gear`
          );
          break;
        default:
          break;
      }
    } else {
      console.log("You can't increase the transmission no more");
    }
  },
  decreaseCurrentTransmission() {
    if (this.currentTransmission > 0) {
      this.currentTransmission--;
      switch (this.currentTransmission) {
        case 2:
        case 3:
        case 4:
          console.log(
            `You've decreased the transmission by 1. Now it's on ${this.currentTransmission} transmission gear`
          );
          break;
        case 1:
          console.log(
            `You've decreased the transmission by 1. Now it's on 'N' transmission gear`
          );
          break;
        case 0:
          console.log(
            `You've decreased the transmission by 1. Now it's on 'R' transmission gear`
          );
          break;
        default:
          break;
      }
    } else {
      console.log("You can't decrease the transmission no more");
    }
  },
  stopCar() {
    this.currentSpeed = 0;
    this.currentTransmission = 1;

    console.log(
      `You've stopped the car. The current speed is ${this.currentSpeed} km/h and current transmission gear is 'N'`
    );
  },
};

car.showCarInfo();
car.setCurrentSpeed(200);
car.increaseCurrentTransmission();
car.increaseCurrentTransmission();
car.increaseCurrentTransmission();
car.decreaseCurrentTransmission();
car.decreaseCurrentTransmission();
car.decreaseCurrentTransmission();
car.decreaseCurrentTransmission();
car.stopCar();

// Task 2
let time = {
  hours: 0,
  minutes: 0,
  seconds: 0,

  showTime() {
    console.log(
      `${
        this.hours >= 0 && this.hours < 10 ? `0${this.hours}` : `${this.hours}`
      }:${
        this.minutes >= 0 && this.minutes < 10
          ? `0${this.minutes}`
          : `${this.minutes}`
      }:${
        this.seconds >= 0 && this.seconds < 10
          ? `0${this.seconds}`
          : `${this.seconds}`
      }`
    );
  },
  increaseTimeByOneSec(hours, minutes, seconds) {
    if (
      hours < 0 ||
      hours >= 24 ||
      minutes < 0 ||
      minutes >= 60 ||
      seconds < 0 ||
      seconds >= 60
    ) {
      console.log("Enter the proper time");
      return;
    }

    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      hours = 0;
    }

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  },
  decreaseTimeByOneSec(hours, minutes, seconds) {
    if (
      hours < 0 ||
      hours >= 24 ||
      minutes < 0 ||
      minutes >= 60 ||
      seconds < 0 ||
      seconds >= 60
    ) {
      console.log("Enter the proper time");
      return;
    }

    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
    if (minutes < 0) {
      minutes = 59;
      hours--;
    }
    if (hours < 0) {
      hours = 23;
    }

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  },
  showCurrentTime() {
    let currentTime = new Date();
    document.write(
      `${
        currentTime.getHours() >= 0 && currentTime.getHours() < 10
          ? `0${currentTime.getHours()}`
          : `${currentTime.getHours()}`
      }:${
        currentTime.getMinutes() >= 0 && currentTime.getMinutes() < 10
          ? `0${currentTime.getMinutes()}`
          : `${currentTime.getMinutes()}`
      }:${
        currentTime.getSeconds() >= 0 && currentTime.getSeconds() < 10
          ? `0${currentTime.getSeconds()}`
          : `${currentTime.getSeconds()}`
      }`
    );
  },
};

time.showTime();
time.increaseTimeByOneSec(23, 59, 59);
time.showTime();
time.decreaseTimeByOneSec(0, 0, 0);
time.showTime();
time.showCurrentTime();
