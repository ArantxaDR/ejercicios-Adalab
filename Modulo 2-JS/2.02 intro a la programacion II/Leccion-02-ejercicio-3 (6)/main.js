'use strict';
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';
const dogNameOne = document.querySelector('.name1');

dogNameOne.innerHTML =`${firstDogName} <img src= ${firstDogImage}></img>`;

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';
const dogNameSecond = document.querySelector('.name2');

dogNameSecond.innerHTML =`${secondDogName} <img src= ${secondDogImage}></img>`;

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogNameThird = document.querySelector('.name3');

dogNameThird.innerHTML =`${thirdDogName} <img src= ${thirdDogImage}></img>`;


