let showTime = () => {
  let currentTime = new Date();
  let time = `<h1 class="clock">${
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
  }</h1>`;

  document.getElementById("date").innerHTML = time;
};

setInterval(showTime, 1000);
