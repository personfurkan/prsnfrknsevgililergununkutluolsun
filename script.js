const totalImages = 30;
let current = 1;

const photo = document.getElementById("photo");
const captionEl = document.getElementById("caption");

const captions = [
  "",
  "Annemle tanıştın",
  "Dövmenin ilk halini yaptık",
  "İlk gün elini tuttuğumda böyle mutluydum",
  "Bu fotoğraf kadar güvenli hissettiren hiçbir şey yok",
  "Denizli evde bile kaldık",
  "Çiçeğime çiçek",
  "İleride de saçını kurutup cicek alacagim",
  "Havali da olduk",
  "İzmirdeki bu bakışın..",
  "İzmirdeki banklar(cok rüzgarliydi)",
  "İstanbul",
  "COK YAKİSİYORUZ",
  "Gülhane parkinda seni cok sevdigimi herkes bilmeli",
  "DAHA COK BOYDAN CEKTİRELİM💜",
  "Kombinine ba yil dim",
  "Yine cok ciddi cikmisim",
  "İlk fotoğrafimiz. yeri cok ayri 💜💜",
  "Burda cok havali ciktigim icin koydum efoğafka",
  "Öpücügünü yerim senin",
  "Akcaydaki dayi geliyo aklima",
  "İlk konserimiz💜",
  "Hep böyle bakalim",
  "1 AY SONRA İLK BULUSMAMIZ(cokheyecanli)",
  "senle yemek yemeyi özledim",
  "UYUMAYİ OZLEDİM",
  "kedi gibi cikmissin sebek",
  "Burda sarap acmaya calistik(rezillikti)",
  "GÜZELİM UCUYOO",
  "Bu storyinin yeri cok ayri",
  "First kiss💘"
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
