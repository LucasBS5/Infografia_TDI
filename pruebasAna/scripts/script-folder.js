document.addEventListener("DOMContentLoaded", function() {
    const fotoItems = document.querySelectorAll(".foto-item");
    const fotoOculta = document.querySelector(".foto-alumnos-escondida");
    let esVisible = false;
    const target = 0;// index del array de fotos
    
    fotoItems.forEach((img, i) => {
            img.addEventListener('click', () => {
                if(!esVisible){
                    fotoOculta.classList.add('visible'); // Añade la clase 'visible'
                    esVisible = true;
                    target = img[i];
                }
            });
        });
    fotoOculta.addEventListener('mouseout',()=>{
        if (esVisible) {
            fotoOculta.classList.remove('visible');
            esVisible = false;
        }
    })
/* RENDERIZADO DE FOTOS */
    const fotoAlumnos = [
        {foto: 'https://placehold.co/300x401'},
        {foto: 'https://placehold.co/300x402'},
        {foto: 'https://placehold.co/300x401'},
        {foto: 'https://placehold.co/300x403'},
        {foto: 'https://placehold.co/300x404'},
        {foto: 'https://placehold.co/300x405'},
        {foto: 'https://placehold.co/300x406'}
    ]

function renderFotos(){

}

    if(fotoOculta){
        fotoOculta.innerHTML = `
            <img src="${fotoAlumnos[target].foto}" alt="Foto alumno">`

    }
});
