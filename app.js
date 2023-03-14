// Variables botones
let anterior = document.querySelectorAll(".anterior");
let play = document.querySelector(".play");
let pausa = document.querySelector(".pausa");
let siguiente = document.querySelectorAll(".siguiente");
let duracion = document.querySelector("#duracion-cancion");
let comienzo = document.querySelector(".comienzo");
let fin = document.querySelector(".fin");
let portada = document.querySelector(".portada");

let tiempo = document.querySelector('.tiempo');

let audio1 = document.getElementById("audio1");
let audio2 = document.getElementById("audio2");
let audio3 = document.getElementById("audio3");

//* Duracion cancion *//

let tiempoo = (min = seg = "0" + 0),
  startTiempo;



function losSeg(){
  comienzo.innerHTML = min + `:` +seg;
}

comienzo.innerHTML = `00:00`
fin.innerHTML = `3:05`;




function reproducir1() {
  audio1.play();
  document.getElementById("play1").style.display = "none";
  document.getElementById("pausa1").style.display = "block";

  startTiempo = setInterval(() => {
    seg++;
    seg = seg < 10 ? "0" + seg : seg;

    if (seg === 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      seg = "0" + 0;
    }

    losSeg();
  }, 1000);
}

function pause1() {
  audio1.pause();
  document.getElementById("play1").style.display = "block";
  document.getElementById("pausa1").style.display = "none";
  clearInterval(startTiempo);
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
