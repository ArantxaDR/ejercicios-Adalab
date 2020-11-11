"use strict";
const img = ["photo1", "photo2", "photo3"];
const photo = document.querySelector(".js-photo");

for (let i = 0; i < img.length; i++) {
  const newPhoto = document.createElement("img");
  newPhoto.setAttribute("src", img[i]);
  photo.appendChild(newPhoto);
  console.log(newPhoto);
  if (img[i] === "photo1") {
    img[i] =
      "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/06/13/Recortada/img_mbigas_20190613-121711_imagenes_lv_terceros_madrid-309-kVCI-U462850729482pJG-992x558@LaVanguardia-Web.jpg";
  } else if (img[i] === "photo2") {
    img[i] =
      "https://s1.eestatic.com/2019/11/12/invertia/empresas/Turismo-Barcelona-Madrid-Empresas_443967858_137784018_1024x576.jpg";
  } else if (img[i] === "photo3") {
    img[i] =
      "https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1556041925114-OU0OGN3KR1L83XI3OXBO/ke17ZwdGBToddI8pDm48kDu-OvKe9-yMBj32JSWknrt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZNNUmsixw3l8iPy3vgDTPMwfMBbaTJA8uE3oWp8JUwqzkQXHaRS3Yhvu0vV6Jt1AA/que-ver-y-hacer-en-madrid-plaza.jpg";
  }
}

/* 


const photo = document.querySelector(".js-photo");

for (let i = 0; i < img.length; i++) {
    const img = ["photo_${i}", "photo${i}", "photo${i}"];
  const newPhoto = document.createElement("img");
  newPhoto.setAttribute("src", img[i]);
  photo.appendChild(newPhoto);
  console.log(newPhoto);
  if (img[i] === photo{i}) {
    src =
      "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/06/13/Recortada/img_mbigas_20190613-121711_imagenes_lv_terceros_madrid-309-kVCI-U462850729482pJG-992x558@LaVanguardia-Web.jpg";
  }else if(img[i] === photo2){}
} */
