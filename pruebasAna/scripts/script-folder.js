document.addEventListener("DOMContentLoaded", function() {
    const fotoItems = document.querySelectorAll(".foto-item");
    const fotoOculta = document.querySelector(".foto-alumnos-escondida");

    fotoItems.forEach((img, i) => {
            img.addEventListener('click', () => {
                fotoOculta.classList.add('visible'); // Añade la clase 'visible'
            });
        });
    fotoOculta.addEventListener('mouseleave',()=>{
        
    })

    const fotoAlumnos = [
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x400'}
    ]
});
