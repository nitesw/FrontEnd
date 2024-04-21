const hamburger = document.querySelector(".hamburger-menu");
const mainMenuItems = document.querySelector(".main-menu-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mainMenuItems.classList.toggle("active");
});

document.querySelectorAll(".menu-item-a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainMenuItems.classList.remove("active");
  })
);

document.querySelector(".p").addEventListener("click", function () {
  var input = document.querySelector(".select-pages");
  var value = parseInt(input.value);
  var max = parseInt(input.getAttribute("data-max"));
  if (value < max) {
    input.value = value + 1;
    updatePageText();
  }
});
document.querySelector(".m").addEventListener("click", function () {
  var input = document.querySelector(".select-pages");
  var value = parseInt(input.value);
  var min = parseInt(input.getAttribute("data-min"));
  if (value > min) {
    input.value = value - 1;
    updatePageText();
  }
});
function updatePageText() {
  var input = document.querySelector(".select-pages");
  var value = parseInt(input.value);
  var pageText = value + " page / " + "300 words";
  input.value = pageText;
}
