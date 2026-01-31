const totalImages = 30;
let current = 1;

const photo = document.getElementById("photo");
const captionEl = document.getElementById("caption");

const captions = [
  "",
  "1. fotoğraf açıklaması",
  "2. fotoğraf açıklaması",
  "3. fotoğraf açıklaması",
  "4. fotoğraf açıklaması",
  "5. fotoğraf açıklaması",
  "6. fotoğraf açıklaması",
  "7. fotoğraf açıklaması",
  "8. fotoğraf açıklaması",
  "9. fotoğraf açıklaması",
  "10. fotoğraf açıklaması",
  "11. fotoğraf açıklaması",
  "12. fotoğraf açıklaması",
  "13. fotoğraf açıklaması",
  "14. fotoğraf açıklaması",
  "15. fotoğraf açıklaması",
  "16. fotoğraf açıklaması",
  "17. fotoğraf açıklaması",
  "18. fotoğraf açıklaması",
  "19. fotoğraf açıklaması",
  "20. fotoğraf açıklaması",
  "21. fotoğraf açıklaması",
  "22. fotoğraf açıklaması",
  "23. fotoğraf açıklaması",
  "24. fotoğraf açıklaması",
  "25. fotoğraf açıklaması",
  "26. fotoğraf açıklaması",
  "27. fotoğraf açıklaması",
  "28. fotoğraf açıklaması",
  "29. fotoğraf açıklaması",
  "30. fotoğraf açıklaması"
];

function updatePhoto() {
  photo.src = `images/${current}.JPEG`;
  captionEl.textContent = captions[current];
}

// BUTONLAR
document.getElementById("next").onclick = () => {
  current++;
  if (current > totalImages) current = 1;
  updatePhoto();
};

document.getElementById("prev").onclick = () => {
  current--;
  if (current < 1) current = totalImages;
  updatePhoto();
};

// KLAVYE OK TUŞLARI
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

// SAYFA AÇILINCA
updatePhoto();
