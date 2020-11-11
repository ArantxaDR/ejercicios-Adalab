'use strict';

const userAge = document.querySelector('.userAge');
const age = parseInt(userAge.innerHTML);
const year = 365;
const day = 24;

console.log (day*year*age);