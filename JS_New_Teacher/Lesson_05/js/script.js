// Task 1
let colors = [
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFA500",
  "#800080",
  "#008000",
  "#000080",
  "#800000",
  "#808000",
  "#008080",
  "#A52A2A",
  "#FFC0CB",
  "#F0E68C",
  "#F5DEB3",
  "#DAA520",
  "#696969",
  "#708090",
  "#B0C4DE",
  "#32CD32",
  "#4682B4",
  "#8B4513",
  "#CD5C5C",
  "#2E8B57",
  "#4B0082",
  "#8B008B",
  "#FF1493",
  "#FF4500",
  "#8A2BE2",
  "#00CED1",
  "#D2691E",
  "#5F9EA0",
  "#7FFF00",
  "#7FFFD4",
  "#20B2AA",
  "#DDA0DD",
  "#FF6347",
  "#7CFC00",
  "#191970",
  "#00BFFF",
  "#BA55D3",
  "#BC8F8F",
  "#BDB76B",
  "#9932CC",
  "#8B0000",
  "#800080",
  "#800000",
  "#008000",
  "#808000",
];

let getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const list = document.getElementById("main-list");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  const listItem = document.createElement("li");
  listItem.classList.add("list-item");
  listItem.style.backgroundColor = getRandomColor();
  listItem.ondblclick = () => {
    listItem.remove();
  };
  list.appendChild(listItem);
};

// Task 2
let color = 0;
const trafficLights = document.getElementById("light-list");
const nextBtn = document.querySelector(".next-btn");

nextBtn.onclick = () => {
  for (let i = 0; i < trafficLights.children.length; i++) {
    trafficLights.children[i].classList.remove(
      "on-red",
      "on-yellow",
      "on-green"
    );
    trafficLights.children[i].classList.add("off");
  }

  switch (color) {
    case 0:
      trafficLights.children[color].classList.remove("off");
      trafficLights.children[color].classList.add("on-red");
      color++;
      break;
    case 1:
      trafficLights.children[color].classList.remove("off");
      trafficLights.children[color].classList.add("on-yellow");
      color++;
      break;
    case 2:
      trafficLights.children[color].classList.remove("off");
      trafficLights.children[color].classList.add("on-green");
      color -= 2;
      break;

    default:
      break;
  }
};
