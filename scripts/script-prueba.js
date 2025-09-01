document.addEventListener('DOMContentLoaded', () => {

     const ventana = document.getElementById('ventana');

    //---------- ABRIR VENTANA ----------

    const navegador = document.getElementById('navegador');

    navegador.addEventListener('click', () => {
        ventana.style.display = 'block';
    });    

    //---------- CERRAR VENTANA ----------

    const cerrarVentana = document.getElementById('close-btn');

    cerrarVentana.addEventListener('click', () => {
        ventana.style.display = 'none';
    });

    //---------- ARRASTRAR VENTANA ----------

    const arrastrarVentana = document.getElementById('barra');

    let isDragging = false;
    let offsetX = 0; // Distancia inicial entre el cursor y el borde izquierdo del elemento
    let offsetY = 0; // Distancia inicial entre el cursor y el borde superior del elemento

    arrastrarVentana.addEventListener('mousedown', (e) => {
        isDragging = true;
        
        offsetX = e.clientX - ventana.getBoundingClientRect().left; //Distancia inicial entre el cursor y el borde izquierdo
        offsetY = e.clientY - ventana.getBoundingClientRect().top;  //"" derecho

        e.preventDefault();

        arrastrarVentana.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return; 

        // Calcula la nueva posición del elemento con respecto a la posición del cursor y el offset inicial
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;

        ventana.style.left = newX + 'px';
        ventana.style.top = newY + 'px';
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;

            arrastrarVentana.style.cursor = 'grab';
        }
    });
});