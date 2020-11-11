"use strict";
const btn = document.querySelector(".js-btn");

function getUser() {
  const userName = document.querySelector(".js-input-name").value;
  fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".js-name");
      name.innerHTML = data.name;
      const img = document.querySelector(".js-img");
      img.src = data.avatar_url;
      const repos = document.querySelector(".js-repo");
      repos.innerHTML = data.public_repos;
    });
}

btn.addEventListener("click", getUser);
