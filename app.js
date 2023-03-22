// Variables botones
let anterior = document.querySelectorAll(".anterior");
let siguiente = document.querySelectorAll(".siguiente");

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");

// Cambiar canción
function otraCancion() {
  audio1.currentTime = 0;
  audio1.pause();

  audio2.currentTime = 0;
  audio2.pause();

  audio3.currentTime = 0;
  audio3.pause();

  noReproducirVaias();
}

// No reproducir varias canciones al mismo tiempo
function noReproducirVaias() {
  if (audio1) {
    audio2.currentTime = 0;
    audio2.pause();

    audio3.currentTime = 0;
    audio3.pause();
  }
  if (audio2) {
    audio1.currentTime = 0;
    audio1.pause();

    audio3.currentTime = 0;
    audio3.pause();
  } else if (audio3) {
    audio1.currentTime = 0;
    audio1.pause();

    audio2.currentTime = 0;
    audio2.pause();
  }
}

// Carousel
var swiper = new Swiper(".swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".siguiente",
    prevEl: ".anterior",
  },
});
