const totalImages = 30;
let current = 1;

const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

function updatePhoto() {
  photo.src = `images/${current}.JPEG`;
  caption.textContent = `${current} / ${totalImages}`;
}

document.getElementById("next").addEventListener("click", () => {
  current++;
  if (current > totalImages) current = 1;
  updatePhoto();
});

document.getElementById("prev").addEventListener("click", () => {
  current--;
  if (current < 1) current = totalImages;
  updatePhoto();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current++;
    if (current > totalImages) current = 1;
    updatePhoto();
  }

  if (e.key === "ArrowLeft") {
    current--;
    if (current < 1) current = totalImages;
    updatePhoto();
  }
});
