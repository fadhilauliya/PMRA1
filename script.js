// SLIDER
let index = 0;
const slides = document.querySelectorAll(".slide");

function nextSlide() {
  // hapus active dari slide sekarang
  slides[index].classList.remove("active");

  // pindah ke slide berikutnya
  index = (index + 1) % slides.length;

  // aktifkan slide baru
  slides[index].classList.add("active");

  // 🔥 DETEKSI: apakah slide ini ada gambar?
  const hasImage = slides[index].querySelector(".slide-img");

  // ⏱️ atur durasi
  let delay = hasImage ? 5000 : 7000;
  // foto = 5 detik, teks = 7 detik

  setTimeout(nextSlide, delay);
}

// mulai pertama
setTimeout(nextSlide, 7000);

// MUSIC
function playMusic() {
  document.getElementById("music").play();
}

//////////////////////////////////////////////////
// ⭐ STAR BACKGROUND ANIMATION
//////////////////////////////////////////////////

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach(star => {
    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

drawStars();

// RESPONSIVE
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});