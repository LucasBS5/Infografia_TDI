document.addEventListener ('DOMContentLoaded', () => {


//VISUALIZACIÓN DE FECHAS AL HACER HOVER EN IMÁGNES DE CALENDARIO A LA IZQUIERDA

     // 1. Obtener los elementos del HTML
        const mensajes = document.querySelectorAll('.mensaje-oculto');
        const imgEvento = document.querySelectorAll('.img-overlay');

        // 2. Escuchar cuando el ratón entra (mouseover)
        //se hace un forEach para recorrer cada imagen y comparar si su index (recordar que el querySelectorAll devuelve un NodeList, que es un tipo de array) es el que coincide con el mensaje que debe visualizarse
        imgEvento.forEach((img, i) => {
            img.addEventListener('mouseover', () => {
                mensajes[i].classList.add('visible'); // Añade la clase 'visible'
            });
        });

        // 4. Escuchar cuando el ratón sale (mouseout)
        imgEvento.forEach((img, i) => {
            img.addEventListener('mouseout', () => {
                mensajes[i].classList.remove('visible'); // Quita la clase 'visible'
            });
        });


//RENDERIZADO DE EVENTOS EN LA VENTANA A LA DERECHA

const eventosLinea = [
    { fecha: "1930/40", dato: "Raymond Scott, pionero en la música electrónica y experimental." },
    { fecha: "1950", dato: "Illiac Suite: primera pieza generada por computadora.Raymond Scott desarrolla el Electronium, máquina que genera música a partir de patrones aleatorios." },
    { fecha: "1960/70", dato: "MUSIC-N: programas pioneros de síntesis digital (Max Mathews).Primer canto sintético en computadora (“Daisy Bell”), inspiración para HAL 9000." },
    { fecha: "1980", dato: "Music Mouse (Laurie Spiegel): software de composición algorítmica en tiempo real para músicos experimentales." },
    { fecha: "1990", dato: "Proyectos académicos de síntesis de canto (Fraunhofer, MBROLA, DECtalk)." },
    { fecha: "2000", dato: "Vocaloid (Yamaha): software de síntesis vocal realista.Hatsune Miku: primera estrella pop virtual masiva con conciertos y fandom global." },
    { fecha: "2010", dato: "Flow Machines (Daddy 's Car): primer tema pop compuesto por IA con notoriedad mundial." },
    { fecha: "2020", dato: "Expansión de la IA musical:AIVA: compositora IA para bandas sonoras.FN Meka: rapero virtualIA.Modelos modernos (OpenAI Jukebox, Google MusicLM, Suno) generan canciones completas con letra y música." }
];

const datos = document.getElementById('cuerpo-eventos');

let index = 0;

function renderEvento(){
let datoVisible = eventosLinea[index];
datos.innerHTML = `
            <button class="volver-atras">VOLVER ATRÁS</button>
            <div class="nav-evento">
                <button class="anterior-evento">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M17.5 22.5L10 15L17.5 7.5L19.25 9.25L13.5 15L19.25 20.75L17.5 22.5Z" fill="#1D1B20"/></svg>
                </button>  
            <div class="fecha-evento">
                <h1>${datoVisible.fecha}</h1>
            </div>
            <button class="siguiente-evento">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M15.75 15L10 9.25L11.75 7.5L19.25 15L11.75 22.5L10 20.75L15.75 15Z" fill="#1D1B20"/></svg>
            </button>
            </div>
            <hr>
            <div class="dato-evento">
                <ul>
                    <li>${datoVisible.dato}</li>
                </ul>
                <img src="https://placehold.co/246x282" alt="">
            </div>
`;

const btnAnterior = document.querySelector('.anterior-evento');
const btnSiguiente = document.querySelector('.siguiente-evento');

if (btnAnterior && btnSiguiente){
    btnAnterior.addEventListener('click', () =>{
        if(index === 0){
            index = eventosLinea.length - 1;
        }else{
            index--;
        }
        renderEvento();
    })
    btnSiguiente.addEventListener('click',()=>{
        if(index === eventosLinea.length - 1){
            index = 0;
        }else{
            index++;
        }
        renderEvento();
    })
}
}
renderEvento();


//ABRIR VENTANA DEL EVENTO AL HACER CLICK EN LA IMAGEN
const ventanaEvento = document.querySelector('.ventana[data-ventana="calendar-eventos"]');

 imgEvento.forEach((img, i) => {
    img.addEventListener('click', () =>{
        console.log('click en imagen');
        index = i; //para que al abrir la ventana el evento que se muestre sea el correspondiente a la imagen clicada
        renderEvento();
        ventanaEvento.classList.add('visible');

    })
 });

  mensajes.forEach((img, i) => {
    img.addEventListener('click', () =>{
        console.log('click en imagen');
        index = i; //para que al abrir la ventana el evento que se muestre sea el correspondiente a la imagen clicada
        renderEvento();
        ventanaEvento.classList.add('visible');

    })
 });

});