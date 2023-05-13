const botonAscendente = document.getElementById('contadorAscendente');
const botonDescendente = document.getElementById('contadorDescendente');
const contador = document.getElementById('contador');
const estado = document.getElementById('estado');
const limiteInferior = 14;
const limiteSuperior = 28;
const imgC = '<img src="img/hot.svg">';
const imgN = '<img src="img/normal.svg">';
const imgF = '<img src="img/ice.svg">';


let count = 21;

botonAscendente.addEventListener('click', () => {
  if (count < limiteSuperior) {
    count++;
    actualizarContador();
  }
});

botonDescendente.addEventListener('click', () => {
  if (count > limiteInferior) {
    count--;
    actualizarContador();
  }
});

function actualizarContador() {
  contador.textContent = count;
  if (count >= 24 && count <= 27) {
    estado.innerHTML = imgC;
  } else if (count >= 18 && count < 24) {
    estado.innerHTML = imgN;
  } else if (count >= 14 && count < 18) {
    estado.innerHTML = imgF;
  }
}