// Task 1
// class CssSelector {
//   #styles;
//   #name;

//   constructor(name) {
//     this.#name = name;
//     this.#styles = [];
//   }

//   addProperty(name, value) {
//     this.#styles.push({ name, value });
//   }
//   removeProperty(name) {
//     const index = this.#styles.findIndex((item) => item.name === name);
//     if (index !== -1) {
//       this.#styles.splice(index, 1);
//     }
//   }
//   getCSS() {
//     const styles = this.#styles
//       .map((item) => `${item.name}: ${item.value};`)
//       .join(" ");
//     console.log(`.${this.#name} { ${styles} }`);
//   }
// }

// let party = new CssSelector("party");
// party.addProperty("aaa", "ddd");
// party.addProperty("ddd", "aaa");
// party.addProperty("a", "a");
// party.getCSS();
// party.removeProperty("a");
// party.getCSS();

// Task 2
// class Button {
//   #width;
//   #height;
//   #btnText;

//   constructor(width, height, btnText) {
//     this.#width = width;
//     this.#height = height;
//     this.#btnText = btnText;
//   }

//   getWidth() {
//     return this.#width;
//   }

//   getHeight() {
//     return this.#height;
//   }

//   getBtnText() {
//     return this.#btnText;
//   }

//   showBtn() {
//     const btnHTML = `<button style="width: ${this.#width}px; height: ${
//       this.#height
//     }px;">${this.#btnText}</button>`;
//     document.write(btnHTML);
//   }
// }

// class BootstrapButton extends Button {
//   #color;

//   constructor(width, height, btnText, color) {
//     super(width, height, btnText);
//     this.#color = color;
//   }

//   showBtn() {
//     const btnHTML = `<button style="width: ${this.getWidth()}px; height: ${this.getHeight()}px; background-color: ${
//       this.#color
//     };">${this.getBtnText()}</button>`;
//     document.write(btnHTML);
//   }
// }

// let btn = new Button(200, 400, "damn");
// btn.showBtn();
// let bootstrapBtn = new BootstrapButton(400, 200, "look", "salmon");
// bootstrapBtn.showBtn();

// Task 3
class ExtendedDate extends Date {
  showDate() {
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    let dayStr = null;
    let monthStr = null;

    switch (day) {
      case 1:
        dayStr = `${day}st`;
        break;
      case 2:
        dayStr = `${day}nd`;
        break;
      case 3:
        dayStr = `${day}rd`;
        break;
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
        dayStr = `${day}th`;
        break;
      default:
        break;
    }
    switch (month) {
      case 1:
        monthStr = "January";
        break;
      case 2:
        monthStr = "February";
        break;
      case 3:
        monthStr = "March";
        break;
      case 4:
        monthStr = "April";
        break;
      case 5:
        monthStr = "May";
        break;
      case 6:
        monthStr = "June";
        break;
      case 7:
        monthStr = "July";
        break;
      case 8:
        monthStr = "August";
        break;
      case 9:
        monthStr = "September";
        break;
      case 10:
        monthStr = "October";
        break;
      case 11:
        monthStr = "November";
        break;
      case 12:
        monthStr = "December";
        break;

      default:
        break;
    }

    console.log(month);
    console.log(`${dayStr} of ${monthStr}`);
  }
  checkTheDate(day, month, year) {
    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    if (inputDate > currentDate) {
      return true;
    } else {
      return false;
    }
  }
  checkIfALeapYear(year) {
    console.log(
      `The year ${year} is ${
        year % 4 === 0 && year % 100 !== 0 ? "a leap year" : "not a leap year"
      }`
    );
  }
  showNextDate() {
    let newDay = new Date().getDate() + 1;
    let newMonth = new Date().getMonth() + 1;
    let newYear = new Date().getFullYear();
    let daysInMonth = 0;
    switch (newMonth) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        daysInMonth = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        daysInMonth = 30;
        break;
      case 2:
        daysInMonth = IsLeapYear(newYear) ? 29 : 28;
        break;
    }
    if (newDay > daysInMonth) {
      newDay = 1;
      newMonth++;
      if (newMonth > 12) {
        newMonth = 1;
        newYear++;
      }
    }
    console.log(`${newDay}.${newMonth}.${newYear}`);
  }
}

let date = new ExtendedDate();
date.showDate();
date.checkIfALeapYear(2000);
date.showNextDate();
console.log(
  `${
    date.checkTheDate(11, 2, 2025)
      ? "Date is from the future"
      : "Date is from the past"
  }`
);
