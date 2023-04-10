const botonAscendente = document.getElementById('contadorAscendente');
const botonDescendente = document.getElementById('contadorDescendente');
const contador = document.getElementById('contador');
const estado = document.getElementById('estado');
let count = 21;
const limite = 28;

botonAscendente.addEventListener('click', () => {
  if (count < limite) {
    count++;
    actualizarContador();
  }
});

botonDescendente.addEventListener('click', () => {
  if (count > 14) {
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