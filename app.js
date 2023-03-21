// Variables botones
let anterior = document.querySelectorAll(".anterior");
let play = document.querySelector(".play");
let pausa = document.querySelector(".pausa");
let siguiente = document.querySelectorAll(".siguiente");

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");


function reproducir1() {
  audio1.play();
  document.getElementById("play1").style.display = "none";
  document.getElementById("pausa1").style.display = "block";
}

function pause1() {
  audio1.pause();
  document.getElementById("play1").style.display = "block";
  document.getElementById("pausa1").style.display = "none";
}

function reproducir2() {
  audio2.play();
  document.getElementById("play2").style.display = "none";
  document.getElementById("pausa2").style.display = "block";
}

function pause2() {
  audio2.pause();
  document.getElementById("play2").style.display = "block";
  document.getElementById("pausa2").style.display = "none";
}

function reproducir3() {
  audio3.play();
  document.getElementById("play3").style.display = "none";
  document.getElementById("pausa3").style.display = "block";
}

function pause3() {
  audio3.pause();
  document.getElementById("play3").style.display = "block";
  document.getElementById("pausa3").style.display = "none";
}

// Cambiar canción

function otraCancion() {
  audio1.currentTime = 0;
  audio1.pause();
  document.getElementById("play1").style.display = "block";
  document.getElementById("pausa1").style.display = "none";

  audio2.currentTime = 0;
  audio2.pause();
  document.getElementById("play2").style.display = "block";
  document.getElementById("pausa2").style.display = "none";

  audio3.currentTime = 0;
  audio3.pause();
  document.getElementById("play3").style.display = "block";
  document.getElementById("pausa3").style.display = "none";
}



// Carousel
var swiper = new Swiper(".swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".siguiente",
    prevEl: ".anterior",
  },
});
