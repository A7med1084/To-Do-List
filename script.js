"use strict";

const input = document.querySelector(".input");
const box = document.querySelector(".box");
const item = document.querySelector(".item");
const addBtn = document.querySelector(".add-btn");

box.innerHTML = "";

const addItems = function (e) {
  const copy = item.cloneNode(true);
  const text = copy.querySelector(".text");
  const removeBtn = copy.querySelector(".remove-btn");
  if (!(input.value === "")) {
    text.textContent = input.value;
    box.appendChild(copy);
    input.value = "";
    input.focus();
    removeBtn.addEventListener("click", function () {
      copy.remove();
    });
  }
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItems();
  }
});
addBtn.addEventListener("click", addItems);
