// Variables botones
let anterior = document.querySelector(".anterior");
let play = document.querySelector(".play");
let pausa = document.querySelector(".pausa");
let siguiente = document.querySelector(".siguiente");
let duracion = document.querySelector("#duracion-cancion");
var audio = document.getElementById("audio");



function reproducir(){
    console.log('reproduciendo');
    var audio = document.getElementById("audio");
    audio.play();
    document.getElementById("play").style.display="none";
    document.getElementById("pausa").style.display="block";
}

function pause(){
    var audio = document.getElementById("audio");
    audio.pause(); 
    console.log('reproduciendo');
    document.getElementById("play").style.display="block";
    document.getElementById("pausa").style.display="none";
    
}

