document.addEventListener('DOMContentLoaded', () => {

    const ventanas = document.querySelectorAll('.ventana');
    const aplicacion = document.querySelectorAll('.aplicaciones');

    // ---------- ABRIR VENTANAS ----------
    
    aplicacion.forEach(navegador => {
    navegador.addEventListener('click', () => {
        const target = navegador.dataset.ventana;
        const ventana = document.querySelector(`.ventana[data-ventana="${target}"]`);
        ventana.style.visibility = 'visible';
    });
});

    ventanas.forEach(ventana => {
    const closeBtn = ventana.querySelector('.close-btn');
    const barra = ventana.querySelector('.nav-barra');

    // ---------- CERRAR VENTANA ----------

    closeBtn.addEventListener('click', () => {
        ventana.style.visibility = 'hidden';
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











// ---------- CAMBIO DE PORTADA Y NOMBRE DE DISCOS AL PASAR LA PREGUNTA ----------

const datos = [
  { img: "data/music1.png", titulo: "CHASE THIS LIGHT", banda: "Jimmy EAT WORLD", cancion: "../musica/chasethislight.mp3"},
  { img: "data/music2.png", titulo: "(WHAT'S THE STORY) MORNING GLORY?", banda: "OASIS", cancion: "../musica/morning.mp3"},
  { img: "data/music3.png", titulo: "DUST ON THE WIND", banda: "THE VELVET SUNDOWN", cancion: "../musica/dustonthewind.mp3" }
];

let indice = 0; // para los discos
let racha = 0;

// ---------- LÓGICA DE JUEGO ----------

const comenzar = document.getElementById('jugar');
const box = document.getElementById('questionbox');
const next = document.getElementById('nextquestion');
const respuesta = document.getElementById('questionresponse');
const fin = document.getElementById('final');
const reiniciar = document.getElementById('reset');

var questions = [
  { "response": "", "answer": true },
  { "response": "", "answer": true },
  { "response": "", "answer": false }
];

var currentQuestionIndex = 0; 

(function () {
  fnReset();

  document.getElementById('check-ia').addEventListener('click', function () {
    fnCheck(false);
  });

  document.getElementById('check-humano').addEventListener('click', function () {
    fnCheck(true);
  });

  document.getElementById('nextquestion').addEventListener('click', function () {
    fnNext();
  });

  document.getElementById('reset').addEventListener('click', function () {
    fnReset();
  });
})();

comenzar.addEventListener('click', function () {    
  box.style.display = "block";
  portada.style.display = "none";
  fin.style.display = "none";        
  document.getElementById('check-ia').style.display = "block";
  document.getElementById('check-humano').style.display = "block";

  // MOSTRAR PRIMER DISCO
  document.getElementById("imagendisco").src = datos[indice].img;
  document.getElementById("titulodisco").textContent = datos[indice].titulo;
  document.getElementById("nombrebanda").textContent = datos[indice].banda;

  // CANCIONES
  const player = document.getElementById("player");
  player.src = datos[indice].cancion;
  player.load();
  player.play();
});

function fnReset() {
  portada.style.display = "flex";
  box.style.display = "none";
  next.style.display = "none";
  fin.style.display = "none";
  reiniciar.style.display = "none";
  player.pause();
  currentQuestionIndex = 0;
  indice = 0;

  // LIMPIAR RESPUESTA   
  respuesta.textContent = "";
  respuesta.style.display = "none";

  racha = 0;
  document.getElementById("racha").textContent = racha;
}

function fnNext() {
  respuesta.style.display = "none";
  currentQuestionIndex++;

  // MUESTRA LOS SIGUIENTES DISCOS  
  indice = (indice + 1) % datos.length;
  document.getElementById("imagendisco").src = datos[indice].img;
  document.getElementById("titulodisco").textContent = datos[indice].titulo;
  document.getElementById("nombrebanda").textContent = datos[indice].banda;

  const player = document.getElementById("player");
  player.src = datos[indice].cancion;
  player.load();
  player.play();

  if (currentQuestionIndex < questions.length) {
    next.style.display = "none";
  } else {
    reiniciar.style.display = "block";
    fin.style.display = "flex";
    document.getElementById('questionbox').style.display = "none";
    document.getElementById('check-ia').style.display = "none";
    document.getElementById('check-humano').style.display = "none";
    document.getElementById('nextquestion').style.display = "none";
    player.pause();
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
    racha++;
    document.getElementById("racha").textContent = racha;
    } else {
    respuesta.classList.add('incorrect');
    respuesta.classList.remove('correct');
    }
  }
































});