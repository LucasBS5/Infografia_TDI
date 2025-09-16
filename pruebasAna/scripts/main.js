
// ======================== ======================== 
// SCRIPT DE BASE: ABRIR VENTANAS, CERRARLAS, ARRASTRARLAS.

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
        player.pause();
        player2.pause();
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




