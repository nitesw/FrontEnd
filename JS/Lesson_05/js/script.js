let root = document.getElementById("root");
//root.innerText = "New Text";
root.setAttribute("class", "test-class");

let div = document.createElement("div");
div.innerText = "Test div";
root.appendChild(div);
let div2 = document.createElement("span");
root.appendChild(div2);
div2.setAttribute("id", "testId");
div2.innerText = "Inner HTML";
