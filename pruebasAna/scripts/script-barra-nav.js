document.addEventListener('DOMContentLoaded', () => {

    const navBar = document.querySelectorAll(".nav-barra");
    const ventana = document.querySelectorAll(".ventana");

    console.log(navBar);
    
    ventana.forEach((ventana, i) => {
        const target = ventana.dataset.ventana;
        if (navBar[i]) {
            navBar[i].innerHTML += `
                <div class="titulo-barra">
                    <div class="icon-barra">
                    <img src="img/icon/${target}.ico" alt="icon">
                    </div>
                    <div class="name-barra">
                        <h5>${target}</h5>
                    </div>
                </div>
                <div class="controles-barra">
                    <button class="control-item minimizar">—</button>
                    <button class="control-item maximizar">☐</button>
                    <button class="control-item close-btn">✕</button>
                </div>
            `;
        }
    });

});