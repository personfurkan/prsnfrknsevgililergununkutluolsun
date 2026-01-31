const totalImages = 30;
let current = 1;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

document.getElementById("next").addEventListener("click", () => {
  current++;
  if (current > totalImages) current = 1;
  photo.src = `images/${current}.jpg`;
  caption.textContent = `Fotoğraf ${current}`;
});

document.getElementById("prev").addEventListener("click", () => {
  current--;
  if (current < 1) current = totalImages;
  photo.src = `images/${current}.jpg`;
  caption.textContent = `Fotoğraf ${current}`;
});
