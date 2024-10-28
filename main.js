import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

const text = document.getElementById("text");
const button = document.getElementById("changeTextBtn");

button.addEventListener("click", () => {
  text.textContent = "Text Changed";
  text.style.color = "red";
  text.style.transition = "1s";
});
// tamrin-2

const body = document.querySelector("body");
const changeBdColor = document.getElementById("changeBodyColor");
changeBdColor.addEventListener("click", () => {
  body.style.backgroundColor = "green";
  body.style.transition = "1s";
});
// test

// const EL_Btn = document.createElement("button");
// EL_Btn.innerHTML = "Blue";
// body.appendChild(EL_Btn);
// EL_Btn.addEventListener("mouseover", function () {
//   EL_Btn.style.backgroundColor = "red";
//   EL_Btn.style.transition="3s"
// });

// Tamrin-3 (show/Hide Element's)
const btn = document.querySelector("#btn");
const content = document.querySelector("#content");

btn.addEventListener("click", () => {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
});
//
const x = document.querySelector("#neveshte");
const y = document.querySelector("#bezan");

y.addEventListener("click", () => {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

// Tamrin-4 (Add li to ul with Click Button)
document
  .querySelector("#addButton")
  .addEventListener("click", function addItem() {
    const newItem = document.createElement("li");
    newItem.textContent = "آیتم جدید";
    document.getElementById("myList").appendChild(newItem);
  });
// rah dovom>>>>>
//
// function addItem() {
//   const newItem = document.createElement("li");
//   newItem.textContent = "آیتم جدید";
//   document.getElementById("myList").appendChild(newItem);
// }







// Tamrin-5