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
