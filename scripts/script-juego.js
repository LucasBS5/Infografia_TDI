// ======================== ======================== 
// SCRIPT DEL JUEGO.

// ---------- Cambio de portada y nombre de disco al pasar la pregunta ----------

const datos = [
  { img: "data/juego/music1.png", titulo: "CHASE THIS LIGHT", banda: "Jimmy EAT WORLD", cancion: "/musica/chasethislight.mp3"},
  { img: "data/juego/music2.png", titulo: "(WHAT'S THE STORY) MORNING GLORY?", banda: "OASIS", cancion: "/musica/morning.mp3"},
  { img: "data/juego/music3.png", titulo: "DUST ON THE WIND", banda: "THE VELVET SUNDOWN", cancion: "/musica/dustonthewind.mp3" }
];

let indice = 0; // para los discos
let racha = 0;

// ---------- LÓGICA DEL JUEGO ----------

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