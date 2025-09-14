document.addEventListener("DOMContentLoaded", function() {

// ---------- LOGICA DE REPRODUCTOR MP3 ----------
const info = [
    { img: "data/reproductor/portada-2.png", cancionNombre: "DUST ON THE WIND", artista: "THE VELVET SUNDOWN", cancion: "/musica/dustonthewind.mp3"},
    { img: "data/reproductor/portada-3.jpg", cancionNombre: "Rumba Congo", artista: "Concubana", cancion: "/musica/rumbacongo.mp3"},
    { img: "data/reproductor/portada-4.jpg", cancionNombre: "Havana Nights in Paris", artista: "Concubana", cancion: "/musica/havana.mp3"},
    { img: "data/reproductor/portada-1.jpg", cancionNombre: "Nostalgia", artista: "Bad Bunny", cancion: "/musica/nostalgia.mp3"},
    { img: "data/reproductor/portada-7.webp", cancionNombre: "Pasarella", artista: "Emilia, Six sex", cancion: "/musica/pasarella.mp3"}
];

//REPRODUCIR LA MUSICA
let index = 0; // cancion actual
const player2 = document.getElementById("player-mp3");
const portadaDerecha = document.getElementById("cancionElegidaImg");
const tituloDerecha = document.getElementById("tituloDerecha");
const artistaDerecha = document.getElementById("artistaDerecha");
const advertencia = document.getElementById("warningCopy");

function cargarCancion(i) {
    const cancion = info[i];
    index = i;

    if (!cancion) {
        console.error("No se encontró la canción en el índice", i);
        return;
    }
    if (i === 3) {
        advertencia.style.visibility = "visible";
    } else {
        advertencia.style.visibility = "hidden";
    }

    player2.src = cancion.cancion;
    player2.load();
    player2.play();

    portadaDerecha.src = cancion.img;
    tituloDerecha.textContent = cancion.cancionNombre;
    artistaDerecha.textContent = cancion.artista;
}

// Botones
document.getElementById("play").addEventListener("click", () => {
    if (player2.paused) {
        player2.play();
    } else {
        player2.pause();
    }
});

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % info.length;
    cargarCancion(index);
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + info.length) % info.length;
    cargarCancion(index);
});

document.querySelectorAll(".cancion-left").forEach(item => {
    item.addEventListener("click", () => {
        const i = parseInt(item.dataset.index, 10);
        cargarCancion(i);
    });
});

// Arranca 
cargarCancion(index);










});