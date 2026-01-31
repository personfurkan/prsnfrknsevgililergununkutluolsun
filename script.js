const images = [
  "1c01b527-ea79-4428-96ec-e490f0dcb7cc.JPEG",
  "IMG_0108.JPEG",
  "IMG_0924.JPEG",
  "IMG_0945.JPEG",
  "IMG_1080.JPEG",
  "IMG_1085.JPEG",
  "IMG_1120.JPEG",
  "IMG_1180.JPEG",
  "IMG_1300.JPEG",
  "IMG_1346.JPEG",
  "IMG_1377.JPEG",
  "IMG_1430.JPEG",
  "IMG_1478.JPEG"
];

let current = 0;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

function showImage() {
  photo.src = "images/" + images[current];
  caption.textContent = `${current + 1} / ${images.length}`;
}

document.getElementById("next").onclick = () => {
  current = (current + 1) % images.length;
  showImage();
};

document.getElementById("prev").onclick = () => {
  current = (current - 1 + images.length) % images.length;
  showImage();
};

// SAYFA AÇILINCA İLK FOTO
showImage();
