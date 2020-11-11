'use strict';
const notification = document.querySelector(".notification");
const title = document.querySelector(".title");
const message = document.querySelector(".message");
if (notification.classList.contains("succes")) {
  title.innerHTML = "Correcto";
  message.innerHTML = "Los datos son correctos";
} else if (notification.classList.contains("error")) {
  title.innerHTML = "Error";
  message.innerHTML = "Ha surgido un error";
} else if (notification.classList.contains("warning")) {
  title.innerHTML = "Aviso";
  message.innerHTML = "Tenga cuidado";}