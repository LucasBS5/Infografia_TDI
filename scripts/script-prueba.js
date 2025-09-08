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

    // ---------- ABRIR PAGINAS DENTRO DEL NAVEGADOR ----------

    const links = document.querySelectorAll('.ventana .cambio-btn');

    links.forEach(link => {
    link.addEventListener('click', () => {
    const ventana = link.closest('.ventana'); // la ventana actual
    const paginas = ventana.querySelectorAll('.pagina');

    // Ocultar todas las páginas dentro de la ventana
    paginas.forEach(p => p.style.display = 'none');

    // Buscar el destino en el data-pagina o en el id
    const destino = link.dataset.pagina || 'about'; 
    const paginaDestino = ventana.querySelector(`#pagina-${destino}`);

    if (paginaDestino) {
    paginaDestino.style.display = 'block';
    }
    });
});

    // ---------- LÓGICA DE JUEGO ----------

const box = document.getElementById('questionbox');
const texto = document.getElementById('questiontext');
const next = document.getElementById('nextquestion');
const respuesta = document.getElementById('questionresponse');
const reiniciar = document.getElementById('reset');

var questions = [{
    "question": "¿Esta canción fue hecha por una Inteligencia artificial?",
    "response": "¡Correcto! Felicitaciones",
    "answer": true
},
{
    "question": "¿Esta canción fue hecha por una Inteligencia artificial?",
    "response": "¡Incorrecto! Se trata de un humano.",
    "answer": false
}];

var currentQuestionIndex = 0; 

(function() {
    fnReset();

    document.getElementById('check-ia').addEventListener('click', function(event) {
        fnCheck(false); 
    });

    document.getElementById('check-humano').addEventListener('click', function(event) {
        fnCheck(true); 
    });

    document.getElementById('nextquestion').addEventListener('click', function(event) {
        fnNext(); 
    });

    document.getElementById('reset').addEventListener('click', function(event) {
        fnReset(); 
    });
})();

function fnReset() {
    document.getElementById('check-ia').style.display = "block";
    document.getElementById('check-humano').style.display = "block";
    box.style.display = "block"; 
    next.style.display = "none";
    reiniciar.style.display = "none";
    currentQuestionIndex = 0;
    texto.innerHTML = questions[currentQuestionIndex].question;
}

function fnNext() {
    respuesta.style.display = "none";
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        texto.innerHTML = questions[currentQuestionIndex].question;
        next.style.display = "none";
    } else {
        texto.innerHTML = "¡Juego terminado! Presiona reiniciar para volver a jugar.";
        reiniciar.style.display = "block";
        document.getElementById('check-ia').style.display = "none";
        document.getElementById('check-humano').style.display = "none";
        document.getElementById('nextquestion').style.display = "none";
    }
}

function fnCheck(userAnswer) {
    const isCorrect = userAnswer === questions[currentQuestionIndex].answer;
    const responseText = questions[currentQuestionIndex].response;

    respuesta.innerHTML = responseText;
    respuesta.style.display = "block";
    next.style.display = "block";

    if (isCorrect) {
        respuesta.classList.add('correct');
        respuesta.classList.remove('incorrect');
    } else {
        respuesta.classList.add('incorrect');
        respuesta.classList.remove('correct');
    }
}
});