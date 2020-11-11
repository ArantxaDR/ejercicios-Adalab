"use strict";
const numbers = [1, 2, 3];
const items = document.querySelector(".js-list");

for (let i = 1; i < 4; i++) {
  const newItem = document.createElement("li");

  const newContent = document.createTextNode(i);

  newItem.appendChild(newContent);

  items.appendChild(newItem);
}
