document.addEventListener('DOMContentLoaded', () =>{
    /* RENDERIZADO DE FOTOS */
    const fotoAlumnos = [
        {foto: 'https://placehold.co/300x400'},
        {foto: 'https://placehold.co/300x401'},
        {foto: 'https://placehold.co/300x402'},
        {foto: 'https://placehold.co/300x403'},
        {foto: 'https://placehold.co/300x404'},
        {foto: 'https://placehold.co/300x405'},
        {foto: 'https://placehold.co/300x406'}
    ]

    const fotoOculta = document.querySelector(".foto-alumnos-escondida");

    function renderFotos(target){
    fotoVisible = fotoAlumnos[target];
    fotoOculta.innerHTML =`
    <img src="${fotoVisible.foto}" alt="Foto alumno">`
    }

/*CAMBIAR FOTO ALUMNO SEGÚN IMAGEN CLICADA*/
fotoClick = document.querySelectorAll('.foto-item');
 fotoClick.forEach((img, i) => {
    img.addEventListener('click', () =>{
        console.log('click en imagen');
        renderFotos(i);
        fotoOculta.classList.add('visible'); // Añade la clase 'visible'
    })
 });

 /*CERRAR FOTO Si no se hace hover sobre la imagen*/
 fotoOculta.addEventListener('mouseout',()=>{
        fotoOculta.classList.remove('visible');
    })




});