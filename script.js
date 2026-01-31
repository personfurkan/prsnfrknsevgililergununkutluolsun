const photos = [
  { src: "images/1.jpg", text: "Birinci fotoğraf açıklaması" },
  { src: "images/2.jpg", text: "İkinci fotoğraf açıklaması" },
  { src: "images/3.jpg", text: "Üçüncü fotoğraf açıklaması" },
  // ...
  { src: "images/30.jpg", text: "Otuzuncu fotoğraf açıklaması" }
];

let index = 0;
const img = document.getElementById("photo");
const caption = document.getElementById("caption");

function showPhoto(i) {
  img.src = photos[i].src;
  caption.innerText = photos[i].text;
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % photos.length;
  showPhoto(index);
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + photos.length) % photos.length;
  showPhoto(index);
};

/* Mobil swipe */
let startX = 0;

img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) index++;
  else if (endX - startX > 50) index--;
  index = (index + photos.length) % photos.length;
  showPhoto(index);
});

showPhoto(index);
