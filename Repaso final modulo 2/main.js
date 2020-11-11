"use strict";
const palettesContainer = document.querySelector("js-palettes-container");

let palettes = [];

function getData(){
fetch(
  "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palette.json"
)
  .then((response => {
    return response.json();
  })
  .then(function (data) {
    
    palettes = data.palettes;
    paintPalettes();
  })
}
function paintPalettes (){
    let html="";
    for(const palette of palettes){
        html+="<li>";
        html += `<h2>${palette.name}</h2>`;
        html+= "<div>";
        for (const color of palette.colors){
            html+=`<div class="color__item" style="background-color:#${color}"></div>`;
        }
        html+= "</div>";
        htnl+="</li>";
    }
    palettesContainer.innerHTML=html;
    console.log("pintar");
}

getData();
