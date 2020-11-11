'use strict';
let dog = document.querySelector('.dog-age');
let dogAge = parseFloat(dog.innerHTML);
let humanAge = document.querySelector('.human-age');

if (dogAge <= 2) {
    humanAge.innerHTML = dogAge * 15;
  } else if (dogAge <= 3) {
    humanAge.innerHTML = 15 + (dogAge - 1) * 9;
  } else if (dogAge > 3) {
    humanAge.innerHTML = 24 + (dogAge - 2) * 5;
  }
  console.log(humanAge.innerHTML);