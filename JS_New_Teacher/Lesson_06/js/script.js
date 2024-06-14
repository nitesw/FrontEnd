const items = document
  .getElementById("shop-table")
  .getElementsByTagName("tbody")[0];
const addBtn = document.querySelector(".submit-btn");
const productName = document.getElementById("product-name");
const productDesc = document.getElementById("product-description");
const productQuantity = document.getElementById("product-quantity");
const productPrice = document.getElementById("product-price");
const clearBtn = document.querySelector(".clear-btn");

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const name = productName.value.trim();
  const desc = productDesc.value.trim();
  const quantity = productQuantity.value.trim();
  const price = productPrice.value.trim();

  if (
    !name ||
    !desc ||
    quantity === "" ||
    isNaN(quantity) ||
    price === "" ||
    isNaN(price)
  ) {
    alert("You've entered the wrong data!");
    return;
  }

  const tr = document.createElement("tr");

  let tdName = document.createElement("td");
  tdName.textContent = name;

  let tdDesc = document.createElement("td");
  tdDesc.textContent = desc;

  let tdQuantity = document.createElement("td");
  tdQuantity.textContent = quantity;

  let tdPrice = document.createElement("td");
  tdPrice.textContent = price + "$";

  tr.appendChild(tdName);
  tr.appendChild(tdDesc);
  tr.appendChild(tdQuantity);
  tr.appendChild(tdPrice);

  items.appendChild(tr);
});
clearBtn.addEventListener("click", () => {
  items.innerHTML = "";
});
