document.addEventListener ('DOMContentLoaded', () => {
     // 1. Obtener los elementos del HTML
        const mensajes = document.querySelectorAll('.mensaje-oculto');
        const evento = document.querySelectorAll('.evento img');

        // 2. Escuchar cuando el ratón entra (mouseover)
        //se hace un forEach para recorrer cada imagen y comparar si su index (recordar que el querySelectorAll devuelve un NodeList, que es un tipo de array) es el que coincide con el mensaje que debe visualizarse
        evento.forEach((img, index) => {
            img.addEventListener('mouseover', () => {
                mensajes[index].classList.add('visible'); // Añade la clase 'visible'
            });
        });

        // 4. Escuchar cuando el ratón sale (mouseout)
        evento.forEach((img, index) => {
            img.addEventListener('mouseout', () => {
                mensajes[index].classList.remove('visible'); // Quita la clase 'visible'
            });
        });

const datos = document.querySelectorAll('.dato-evento');
const fechas = document.querySelectorAll('.fecha-evento');

});