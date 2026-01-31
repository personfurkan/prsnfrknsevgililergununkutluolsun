# prsnfrknsevgililergununkutluolsun
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeri</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="gallery">
  <button id="prev">‹</button>

  <div class="image-box">
    <img id="photo" src="images/1.jpg" alt="galeri">
    <p id="caption"></p>
  </div>

  <button id="next">›</button>
</div>

<script src="script.js"></script>
</body>
</html>

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  font-family: Arial, sans-serif;
}

.gallery {
  position: relative;
  width: 90%;
  max-width: 500px;
}

.image-box {
  text-align: center;
}

img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 12px;
}

#caption {
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.85;
}

button {
  position: absolute;
  top: 40%;
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 40px;
  padding: 10px;
  cursor: pointer;
}

#prev { left: 5px; }
#next { right: 5px; }

@media (max-width: 600px) {
  button { font-size: 28px; }
}

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

