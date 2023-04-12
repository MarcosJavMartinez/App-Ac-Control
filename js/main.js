const botonAscendente = document.getElementById('contadorAscendente');
const botonDescendente = document.getElementById('contadorDescendente');
const contador = document.getElementById('contador');
const estado = document.getElementById('estado');
const limiteInferior = 14;
const limiteSuperior = 28;
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
    estado.textContent = "Calor";
  } else if (count >= 18 && count < 24) {
    estado.textContent = "Normal";
  } else if (count >= 14 && count < 18) {
    estado.textContent = "Frio";
  }
}