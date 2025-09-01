document.addEventListener('DOMContentLoaded', () => {

    const ventanas = document.querySelectorAll('.ventana');
    const aplicacion = document.querySelectorAll('.aplicaciones');

    // ---------- ABRIR VENTANAS ----------
    
    aplicacion.forEach(navegador => {
    navegador.addEventListener('click', () => {
        const target = navegador.dataset.ventana;
        const ventana = document.querySelector(`.ventana[data-ventana="${target}"]`);
        ventana.style.display = 'block';
    });
});

    ventanas.forEach(ventana => {
    const closeBtn = ventana.querySelector('.close-btn');
    const barra = ventana.querySelector('.barra');

    // ---------- CERRAR VENTANA ----------

    closeBtn.addEventListener('click', () => {
        ventana.style.display = 'none';
    });

    // ---------- ARRASTRAR VENTANA ----------

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    barra.addEventListener('mousedown', (e) => {
        isDragging = true;

        offsetX = e.clientX - ventana.getBoundingClientRect().left;
        offsetY = e.clientY - ventana.getBoundingClientRect().top;

        e.preventDefault();
        barra.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        ventana.style.left = newX + 'px';
        ventana.style.top = newY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            barra.style.cursor = 'grab';
            }
        });
    });
});

    // const ventana = document.getElementById('ventana');
    // const arrastrarVentana = document.getElementById('barra');
    // const cerrarVentana = document.getElementById('close-btn');

    // // APLICACIONES
    // const navegador = document.getElementById('navegador');

    // //---------- ABRIR VENTANAS ----------

    // navegador.addEventListener('click', () => {
    //     ventana.style.display = 'block';
    // });
    
    // navegador.addEventListener('click', () => {
    //     ventana.style.display = 'block';
    // }); 

    // //---------- CERRAR VENTANA ----------

    // cerrarVentana.addEventListener('click', () => {
    //     ventana.style.display = 'none';
    // });

    // //---------- ARRASTRAR VENTANAS ----------

    // let isDragging = false;
    // let offsetX = 0; // Distancia inicial entre el cursor y el borde izquierdo del elemento
    // let offsetY = 0; // Distancia inicial entre el cursor y el borde superior del elemento

    // arrastrarVentana.addEventListener('mousedown', (e) => {
    //     isDragging = true;
        
    //     offsetX = e.clientX - ventana.getBoundingClientRect().left; //Distancia inicial entre el cursor y el borde izquierdo
    //     offsetY = e.clientY - ventana.getBoundingClientRect().top;  //"" derecho

    //     e.preventDefault();

    //     arrastrarVentana.style.cursor = 'grabbing';
    // });

    // document.addEventListener('mousemove', (e) => {
    //     if (!isDragging) return; 

    //     // Calcula la nueva posición del elemento con respecto a la posición del cursor y el offset inicial
    //     const newX = e.clientX - offsetX;
    //     const newY = e.clientY - offsetY;

    //     ventana.style.left = newX + 'px';
    //     ventana.style.top = newY + 'px';
    // });

    // document.addEventListener('mouseup', () => {
    //     if (isDragging) {
    //         isDragging = false;

    //         arrastrarVentana.style.cursor = 'grab';
    //     }
    // });