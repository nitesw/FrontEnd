let index = 1;
window.onload = () => {
  loadBlocks();
  loadLights();
};

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

const $list = $("#main-list");

let blocks = [];

$("button.btn").on("click", () => {
  let color = getRandomColor();
  addBlock(color, index);

  let block = {
    index: index++,
    color: color,
  };
  blocks.push(block);
  saveBlocks();
});

function addBlock(color, i) {
  const $listItem = $("<li></li>")
    .addClass("list-item")
    .css("backgroundColor", color)
    .data("index", i);

  $listItem.on("dblclick", () => {
    const itemIndex = $listItem.data("index");
    const blockIndex = blocks.findIndex((block) => block.index === itemIndex);
    if (blockIndex !== -1) {
      blocks.splice(blockIndex, 1);
      $listItem.remove();
      saveBlocks();
    }
  });
  $list.append($listItem);
}
function saveBlocks() {
  localStorage.setItem("index", JSON.stringify(index));
  localStorage.setItem("list-data", JSON.stringify(blocks));
}
function loadBlocks() {
  index = JSON.parse(localStorage.getItem("index"));
  blocks = JSON.parse(localStorage.getItem("list-data")) ?? [];

  for (const block of blocks) {
    addBlock(block.color, block.index);
  }
}

// Task 2
let color = 0;
const $trafficLights = $("#light-list");

$("button.next-btn").on("click", () => {
  console.log("aaaaaa");
  changeLight();
});

function changeLight() {
  for (let i = 0; i < $trafficLights.children().length; i++) {
    $trafficLights
      .children()
      .eq(i)
      .removeClass("on-red on-yellow on-green")
      .addClass("off");
  }

  switch (color) {
    case 0:
      saveLights();
      $trafficLights.children().eq(color).removeClass("off").addClass("on-red");
      color++;
      break;
    case 1:
      saveLights();
      $trafficLights
        .children()
        .eq(color)
        .removeClass("off")
        .addClass("on-yellow");
      color++;
      break;
    case 2:
      saveLights();
      $trafficLights
        .children()
        .eq(color)
        .removeClass("off")
        .addClass("on-green");
      color = 0;
      break;

    default:
      break;
  }
}

function saveLights() {
  localStorage.setItem("light", JSON.stringify(color));
}
function loadLights() {
  const savedColor = JSON.parse(localStorage.getItem("light"));
  if (savedColor !== null) {
    color = savedColor;
  }
  changeLight();
}