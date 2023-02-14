// Variables botones
let anterior = document.querySelector(".anterior");
let play = document.querySelector(".play");
let pausa = document.querySelector(".pausa");
let siguiente = document.querySelector(".siguiente");
let duracion = document.querySelector("#duracion-cancion");
let portada = document.querySelector(".portada");

var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");






function reproducir1(){
    var audio1 = document.getElementById("audio1");
    audio1.play();
    document.getElementById("play1").style.display="none";
    document.getElementById("pausa1").style.display="block";
}

function pause1(){
    var audio1 = document.getElementById("audio1");
    audio1.pause(); 
    document.getElementById("play1").style.display="block";
    document.getElementById("pausa1").style.display="none";
    
}

function reproducir2(){
  var audio2 = document.getElementById("audio2");
  audio2.play();
  document.getElementById("play2").style.display="none";
  document.getElementById("pausa2").style.display="block";
}

function pause2(){
  var audio2 = document.getElementById("audio2");
  audio2.pause(); 
  document.getElementById("play2").style.display="block";
  document.getElementById("pausa2").style.display="none";
  
}

function reproducir3(){
  var audio3 = document.getElementById("audio3");
  audio3.play();
  document.getElementById("play3").style.display="none";
  document.getElementById("pausa3").style.display="block";
}

function pause3(){
  var audio3 = document.getElementById("audio3");
  audio3.pause(); 
  document.getElementById("play3").style.display="block";
  document.getElementById("pausa3").style.display="none";
  
}





// Carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".siguiente",
      prevEl: ".anterior",
    },
  

  });
