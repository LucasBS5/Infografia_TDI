document.addEventListener('DOMContentLoaded', () =>{
    /* RENDERIZADO DE FOTOS */
    const fotoAlumnos = [
        {foto: 'data/nosotros/ana.png'},
        {foto: 'data/nosotros/china.png'},
        {foto: 'data/nosotros/guada.png'},
        {foto: 'data/nosotros/lucas.png'},
        {foto: 'data/nosotros/gaspi.png'},
        {foto: 'data/nosotros/juan.png'},
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